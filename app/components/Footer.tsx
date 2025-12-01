import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Twitter, X } from 'lucide-react'

const Footer = () => {
  return (
    <div className='mt-20 mb-2'>
    <div className='max-w-375 items-center  mx-5'>
        <div className='flex gap-3 items-center'>
            <div className='text-dark text-3xl font-bold tracking-tight'>
                <Link href='/'>Luxe<span className='text-gold'>Design</span></Link>
            </div>
            <div className='h-6 w-0.5 bg-gold/30'></div>
            <div className='text-green text-xs font-semibold tracking-wide uppercase'>Manali</div>
        </div>
        <div className='mt-5 text font-medium'>Left Bank Of Beas River, Naggar Rd,<br/> Aleo, Manali,<br/> Himachal Pradesh - 175131</div>
        <div className='mt-5 mb-3 text-xl font-serif mx-1'>
        Follow us on:
        <ul className='flex gap-3 items-center mt-3 text-dark/80'>
            <li className='border border-gold rounded-full h-12 w-12 flex text-center'>
                <Instagram className='w-8 h-8 text-center m-auto'/>
            </li>
            <li className='border border-gold rounded-full h-12 w-12 flex text-center'>
                <Facebook className='w-8 h-8 text-center m-auto'/>
            </li>
            <li className='border border-gold rounded-full h-12 w-12 flex text-center'><Linkedin className='w-8 h-8 text-center m-auto'/></li>
        </ul>
      </div>
    </div>
    <div className='mt-7 text-center'>
        <div className='w-full bg-dark/30 h-0.5 mb-3'></div>
        <div className='flex justify-center mx-auto gap-2'>
           <Mail className='text-center'/> 
        <p className=''>: contact@luxedesign.in</p>
      </div>
      <div className='mt-2'>Copyrights © 2025 LuxeDesign</div>
    </div>
    </div>
  )
}

export default Footer
