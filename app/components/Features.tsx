import Image from 'next/image'
import React from 'react'
import { HomeIcon, Hammer, Timer, Receipt, Mountain, Infinity } from 'lucide-react';

const Features = () => {
   
const highlights = [
  {
    title: 'Experience With Luxury Properties',
    description: 'Delivered work for villas, boutique resorts, and hotels across Manali.',
    icon: HomeIcon,
  },
  {
    title: 'Skilled Craftsmanship Team',
    description: 'Dedicated specialists in woodwork, metalwork, texture painting, and custom fabrication.',
    icon: Hammer,
  },
  {
    title: 'On-Time Execution',
    description: 'Projects delivered with strict timelines, without compromising quality.',
    icon: Timer,
  },
  {
    title: 'Transparent Pricing',
    description: (
        <>
        No hidden charges fixed estimates based on real <span>material + labor.</span> 
        </>),
    icon: Receipt,
  },
  {
    title: 'Local Himachal Expertise',
    description: 'Deep familiarity with local climate materials, wood types, and durability needs.',
    icon: Mountain,
  },
  {
    title: 'End-to-End Execution',
    description: 'You bring the design. We bring it to life flawlessly.',
    icon: Infinity,
  },
];
  return (
    <div id='about' className='bg-cream py-20 px-5'>
      <div className='text-center text-3xl md:text-5xl font-serif'>
        Trusted by Resorts & Luxury Villas
      </div>
      <div className='mx-auto mt-3 h-[2px] w-70 bg-gold'></div>
    
        <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16'>
            {highlights.map(({title,description,icon:Icon})=>(<div key={title} className='bg-white/60 border rounded-xl border-gold/50 hover:shadow-xl hover:scale-[1.05] transition-all duration-300'>
            <div className='flex justify-center mt-4 mb-4'>
                <Icon className=''/>
            </div>
                <div className='text-2xl text-center text-bold font-serif '>{title}</div>
                <div className='p-3 mt-3 text-center text-dark/70 mb-4'>
                   {description}
                </div>
            </div> ))}
        </div>
    </div>
  )
}

export default Features
