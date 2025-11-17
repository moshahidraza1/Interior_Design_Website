import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative h-[80vh] w-full overflow-hidden'>
      <Image
        src='/Hero-1.webp'
        alt='Interior design showcase'
        fill
        className='object-cover'
        priority
      />
      <Image
        src='/hero-slide-1.jpg'
        alt='Interior design showcase'
        fill
        className='object-cover md:hidden'
        priority
      />
      <div className='absolute inset-0 bg-dark/40' />
      <div className='absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 text-cream'>
        <p className='text-2xl uppercase tracking-[0.2em] text-gold'>Luxury Interiors</p>
        <h1 className='mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight'>
          Designing Timeless <br /> Spaces in the Himalayas
        </h1>
        <p className='mt-6 max-w-xl text-base md:text-lg text-cream/80'>
          From boutique chalets to modern villas, we craft immersive environments tailored to your story.
        </p>
        
      </div>
    </section>

  );
}