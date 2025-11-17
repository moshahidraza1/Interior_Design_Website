import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
    const cardItems= [
        {name:'Project 1', image:'/Project-1.jpg'},
        {name:'Project 2', image:'/Project-2.jpg'},
        {name:'Project 3', image:'/Project-3.webp'},
        {name:'Project 4', image:'/Hero-1.webp'}
    ]
  return (
    <div id='portfolio'>
      <div className='mt-1 p-4 bg-cream text-black text-center text-bold text-3xl'>
        Our Work
      </div>
      <div className='mt-1 px-5'>
        <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 bg-cream'>
            {cardItems.map((item) => (
            <div
            // key={idx}
            className='min-w-[90%] md:min-w-[40%] bg-white rounded-xl shadow-lg snap-center shrink-0 h-auto'
            >
                
                <div className='relative w-full aspect-[4/3] rounded-lg bg-cream/40 overflow-hidden'>
                    <Image src={`${item.image}`} alt='' 
                    fill
                    className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'>
                        <div className='absolute bottom-2 left-4 right-4 text-cream flex items-end justify-between gap-4'>
                           <div> 
                            <h3 className='font-semibold text-lg'>{item.name}</h3>
                            <p className='mt-1 text-sm text-cream/80'>
                            Short description or highlight.
                            </p>
                        </div>
                        <button className='mt-3 text-gold font-medium'>
                    View Details →
                </button>
                        </div>
                    </div>
                    
                    </div>
                 
            </div>
            ))}
        </div>
      </div>
      <div className='mt-15 bg-cream'></div>
    </div>
  )
}

export default Portfolio
