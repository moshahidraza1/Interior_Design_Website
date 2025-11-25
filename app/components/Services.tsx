import React from 'react'
import { LayoutGrid, BoxSelect, Hammer, Ruler, Brush, Layers, Anvil, Box } from 'lucide-react';
import Image from 'next/image';

const Services = () => {
    const services = [
  {
    title: 'Interior Design',
    description: 'Complete space planning, material selection, and aesthetic direction tailored to your story.',
    icons: [LayoutGrid, BoxSelect],
    image: 'https://res.cloudinary.com/ddvhuxa9f/image/upload/v1764056713/interior-services_ydajle.jpg'
  },
  {
    title: 'Woodwork',
    description: 'Bespoke cabinetry, paneling, and artisan joinery inspired by Himalayan heritage.',
    icons: [Hammer, Ruler],
    image: 'https://res.cloudinary.com/ddvhuxa9f/image/upload/v1764056590/woodwork-services_wqnbbu.jpg'
  },
  {
    title: 'Painting & Finishes',
    description: 'Premium paint systems, lime plasters, and textured finishes for depth and warmth.',
    icons: [Brush],
    image: 'https://res.cloudinary.com/ddvhuxa9f/image/upload/v1764056552/painting-services_a9sn3e.jpg'
  },
  {
    title: 'Flooring',
    description: 'Curated stone, hardwood, and terrazzo installations for every lifestyle.',
    icons: [Layers],
    image: 'https://res.cloudinary.com/ddvhuxa9f/image/upload/v1764056495/flooring-services_pv3evg.jpg'
  },
  {
    title: 'Metal Fabrication',
    description: 'Custom brass, copper, and steel accents forged for railings, screens, and fixtures.',
    icons: [Anvil],
    image: 'https://res.cloudinary.com/ddvhuxa9f/image/upload/v1764056577/metal-work-services_ggdstz.jpg'
  },
  {
    title: '3D Visualization',
    description: 'Immersive renders and walkthroughs so you can experience each space before it’s built.',
    icons: [Box],
    image: 'https://res.cloudinary.com/ddvhuxa9f/image/upload/v1764056513/3d-viz-services_rpddaj.jpg'
  },

  
];

  return (
    <div id='services' className='bg-cream py-20 px-5'>
      <div className='text-center text-3xl md:text-5xl text-dark/90 font-serif'>
        Our Expertise in Crafting Spaces
      </div>
      <div className='mx-auto mt-3 h-[2px] w-70 bg-gold'></div>
      <p className='text-dark/60 max-w-2xl mx-auto mt-4 text-center'>Combining Himalayan serenity with timeless craftsmanship.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
        {services.map(({title, description, icons, image})=>(

            <div key={title} className='relative bg-white/60 backdrop-blur-sm border border-gold/20 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300  cursor-pointer
        overflow-hidden'>
            <div className='relative h-64 w-full'>
            <Image src={image} alt='service-image' fill className='object-cover '/>
            <div className='absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-dark/60' />
            </div>

            <div className='absolute inset-0 p-8  z-10'>
            <div className='flex gap-3'>
                {icons.map((Icon, idx)=>(
                    <Icon key={idx} className='h-10 w-10 text-white' strokeWidth={1.5}/>
                ))}
            </div>
            <h3 className='mt-20 text-2xl font-semibold text-cream'>{title}</h3>
            <p className='mt-3 text-sm text-cream '>{description}</p>
            </div>
            </div>
             
        ))}
       
      </div>
    </div>
  )
}

export default Services
