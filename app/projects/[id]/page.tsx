import { projects } from '@/app/data/projects'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export function generateStaticParams(){
    return projects.map((project)=> ({
        id: project.id
    }))
}

interface PageProps{
    params: {
        id: string
    }
}

const ProjectDetail = async ({params}:PageProps) => {

const {id} = await params
    const project = projects.find((p)=> p.id === id)

    if(!project){
        notFound()
    }
  return (
    <div className='bg-cream min-h-screen pb-20'>
        
      <div className='relative aspect-4/3  md:h-[90vh] w-full'>
        <Image
        src={project.image}
        alt={project.name}
        fill
        className='object-cover'
        priority/>
        <div ></div>
        <div className='absolute inset-0 mt-5 mx-3'>
            <Link href="/#portfolio" className=' inline-flex items-center text-sm  hover:text-gold transition-colors text-white'>
                <ArrowLeft className='w-4 h-4 mr-2'/> Back to Portfolio
            </Link>
            </div>
        <div className='absolute bottom-0 left-0 w-full p-5 md:p-20 text-white'>
            
            <h1 className='text-4xl md:text-6xl font-serif mb-2'>{project.name}</h1>
            <p className='text-xl opacity-90'>{project.category}</p>
        </div>
      </div>

      <div className='max-w-4xl mx-auto px-5 py-20 '>
        <div className='w-full mx-auto grid grid-cold-1 md:grid-cols-3 gap-8 mb-12 border-b border-gold/20 pb-12 items-center justify-center text-center'>
        <div>
            <h3 className='text-gold font-serif text-lg '>Location</h3>
            <p className='text-dark/80'>{project.location}</p>
        </div>
        <div>
            <h3 className='text-gold font-serif text-lg mb-1'>Duration</h3>
            <p className='text-dark/80'>{project.duration}</p>
            </div>
        <div>
           <h3 className='text-gold font-serif text-lg mb-1'>Area</h3>
            <p className='text-dark/80'>{project.area}</p>
        </div>
        </div>
        <div className='mb-16 text-center'>
            <h2 className='font-serif text-3xl text-dark mb-6'>About the Project</h2>
            <p className='text-dark/80 leading-relaxed text-lg'>{project.description}</p>
        </div>

        <div className={`grid grid-cols-1 ${project.gallery.length >=2? 'md:grid-cols-2': ''} gap-6`}>
            {project.gallery?.map((img, idx)=> (
                <div key={idx} className='relative aspect-4/3 rounded-lg overflow-hidden shadow-md '>
                    <Image src={img} alt={`${project.name} view ${idx+1}`}
                    fill
                    className='object-cover hover:scale-105 transition-transform duration-500'/>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
