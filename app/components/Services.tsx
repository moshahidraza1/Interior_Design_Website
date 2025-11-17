import React from 'react'
import { LayoutGrid, BoxSelect, Hammer, Ruler, Brush, Layers, Anvil, Box } from 'lucide-react';

const Services = () => {
    const services = [
  {
    title: 'Interior Design',
    description: 'Complete space planning, material selection, and aesthetic direction tailored to your story.',
    icons: [LayoutGrid, BoxSelect],
  },
  {
    title: 'Woodwork',
    description: 'Bespoke cabinetry, paneling, and artisan joinery inspired by Himalayan heritage.',
    icons: [Hammer, Ruler],
  },
  {
    title: 'Painting & Finishes',
    description: 'Premium paint systems, lime plasters, and textured finishes for depth and warmth.',
    icons: [Brush],
  },
  {
    title: 'Flooring',
    description: 'Curated stone, hardwood, and terrazzo installations for every lifestyle.',
    icons: [Layers],
  },
  {
    title: 'Metal Fabrication',
    description: 'Custom brass, copper, and steel accents forged for railings, screens, and fixtures.',
    icons: [Anvil],
  },
  {
    title: '3D Visualization',
    description: 'Immersive renders and walkthroughs so you can experience each space before it’s built.',
    icons: [Box],
  },
  
];

  return (
    <div id='services' className='bg-cream py-20 md:py-28 px-5'>
      <div className='text-center text-3xl md:text-5xl text-dark/90 font-serif'>
        Our Expertise in Crafting Spaces
      </div>
      <div className='mx-auto mt-3 h-[2px] w-70 bg-gold'></div>
      <p className='text-dark/60 max-w-2xl mx-auto mt-4 text-center'>Combining Himalayan serenity with timeless craftsmanship.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
        {services.map(({title, description, icons})=>(
            <div key={title} className='bg-white/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer
        '>
            <div className='flex gap-3'>
                {icons.map((Icon, idx)=>(
                    <Icon key={idx} className='h-10 w-10 text-gold' strokeWidth={1.5}/>
                ))}
            </div>
            <h3 className='mt-6 text-2xl font-semibold text-dark'>{title}</h3>
            <p className='mt-3 text-sm text-dark/70'>{description}</p>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Services
