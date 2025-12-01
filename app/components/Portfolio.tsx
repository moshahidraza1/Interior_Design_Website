import Image from 'next/image'
import React from 'react'

const Portfolio = () => {

    const cardItems= [
        {name:'Project 1', image:'https://res.cloudinary.com/ddvhuxa9f/image/upload/v1764056592/Project-1_vkgxqc.jpg'},
        {name:'Project 2', image:'https://res.cloudinary.com/ddvhuxa9f/image/upload/v1764056561/Project-2_czqdmy.jpg'},
        {name:'Project 3', image:'https://res.cloudinary.com/ddvhuxa9f/image/upload/v1764056647/Project-3_qoojwz.webp'},
        {name:'Project 4', image:'https://res.cloudinary.com/ddvhuxa9f/image/upload/v1764056585/Hero-1_r48rzy.webp'}
    ];

  return (
    <div id='portfolio' className='bg-cream py-20 md:py-28 px-5'>
      <div className='bg-cream text-center text-bold text-3xl md:text-5xl text-dark/90 font-serif'>
        Our Work
      </div>
      <div className='mx-auto mt-3 h-[2px] w-30 bg-gold'></div>
      <div className='mt-16 px-5'>
        <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 bg-cream'>
            {cardItems.map((item,idx, image) => (
            <div
            key={idx}
            className='min-w-[90%] md:min-w-[40%] bg-white rounded-xl shadow-lg snap-center shrink-0 h-auto hover:scale-[1.02] translation-all duration-300'
            >
                
                <div className='relative w-full aspect-[4/3] rounded-lg bg-cream/40 overflow-hidden'>
                    <Image src={item.image} alt='' 
                    fill
                    className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'>
                        <div className='absolute bottom-0 w-full p-4  text-cream flex justify-between items-end'>
                           <div> 
                            <h3 className='font-semibold text-lg'>{item.name}</h3>
                            <p className='mt-1 text-sm text-cream/80'>
                            Short description or highlight.
                            </p>
                        </div>
                        <button className=' text-gold font-medium text-sm  hover:scale-[1.25] transition-transform duration-300 whitespace-nowrap'>
                    View →
                </button>
                        </div>
                    </div>
                    
                    </div>
                 
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
