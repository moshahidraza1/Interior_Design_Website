import { Heart, Target, Users } from 'lucide-react';
import React from 'react'

const page = () => {
  const features = [
    {
      title: "Client Centric",
      description: "Your vision is our blueprint. We listen, adapt, and deliver exactly what you need.",
      icon: Users
    },
    {
      title: "Precision",
      description: "From the first sketch to the final nail, we obsess over every millimeter.",
      icon: Target
    },
    {
      title: "Passion",
      description: "We don't just design spaces; we pour our heart into creating environments.",
      icon: Heart
    }
  ];
  return (
    <div className='bg-cream pt-20 pb-20'>
      <section className='px-5 text-center mb-20'>

        <h1 className='text-3xl md:text-5xl font-serif '>Crafting Soulful Spaces
        </h1>

        <div className='h-0.5 w-50 bg-gold mx-auto mt-3'>
        </div>

        <p className='max-w-2xl mx-auto text-dark/70 text-lg mt-10 leading-relaxed'>We are a team of passionate designers and architects dedicated to transforming houses into homes.
        Our philosophy is rooted in the belief that luxury lies in simplicity and attention to detail.
          </p>
      </section>


      <section className='px-5 md:px-20 mb-20'>
        <div className='items-center'>
            <h2 className='text-3xl text-center font-serif mb-4'>Our Story</h2>
            <p className='text-dark/70 mb-4 leading-relaxed'>Founded in 2015, we started with a simple mission: to make high-end interior design accessible and transparent. 
            What began as a small studio has grown into a full-service design firm, handling projects from residential villas to commercial spaces.
            </p>
            <p className='text-dark/70 leading-relaxed'>We pride ourselves on our "Client-First" approach, ensuring that every texture, color, and piece of furniture 
            resonates with the people who live there.
            </p>
        </div>
      </section>

      <section className='bg-cream py-20 px-5 md:px-20'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-serif text-center mb-12'>Why Choose Us
            </h2>

            <div className='grid md:grid-cols-3 gap-8'>

                {features.map(({title,description,icon:Icon})=>(
                  <div key={title} className='text-center p-6 border border-gold/30 rounded-xl bg-white/50 hover hover:shadow-xl'>
                <div className='w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center border border-gold mb-4'>

                <Icon className="w-6 h-6 text-dark"/>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default page
