import React from 'react'
import StarRating from './StarRating';

const Testimonials = () => {
    const testimonialData = [
        {
        name:'Anil Sharma',
        position: 'Owner',
        property: 'Sunrise Villa, Manali',
        review: `Exeptional work! Their attention to detail and craftmanship elevated our villa's interiors.`,
        stars:'5'
        },
        {
        name:'Priya Kapoor',
        position: 'Resort Manager',
        property: 'The Orchard Resort, Manali',
        review: `Professional and reliable team. Our resort's renovation was completed seamlessly and on schedule.`,
        stars:'4.8'
        },
        {
        name:'Rajesh Mehta',
        position: 'Owner',
        property: 'Snowline Hotel, Manali',
        review: `The team transformed our hotel's interiors with excuisite craftmanship.`,
        stars: '4.6'
        },
    ];
  return (
    <div className='bg-cream mx-5 py-20'>
      <div className='text-3xl md:text-5xl font-serif text-center'>
        What Our Clients Say
      </div>
      <div className='w-56 h-[2px] bg-gold mx-auto mt-3'></div>
      <div className='mt-16 overflow-x-auto'>
      <div className='mx-auto flex max-w-5xl gap-8 snap-x snap-mandatory pb-4 bg-cream'>
       
        {testimonialData.map(({name,position,property,review,stars})=>(
            <div key={name} className='min-w-[320px] max-w-[380px] bg-white/80 border border-gold/20 rounded-2xl p-5 shadow-sm snap-center backdrop-blur-md hover:scale-[1.02] translation-all duration-300 hover:shadow-xl '>
            <div className='text-8xl font-serif text-gold text-center'>&ldquo;</div>
            <p className='text-center'>
                {review}
            </p>
            <div className='mt-6 flex flex-col items-center gap-1'>
            <p className='font-semibold font-serif text-lg'>{name}</p>
            <p className='text-sm text-dark/60'>{position}</p>
            <p className='text-sm text-dark/60'>{property}</p>
            </div>
            <div className='mt-auto flex justify-center pt-6'><StarRating    score={parseFloat(stars)} size={17}/>
            </div>
        </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Testimonials
