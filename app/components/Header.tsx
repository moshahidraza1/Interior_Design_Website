'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () =>setIsMenuOpen(false);
    const navLinks = [
        {label: 'Home', href:'#'},
        {label: 'Services', href:'#services'},
        {label: 'Portfolio', href:'#portfolio'},
        {label: 'About', href:'#about'},
        {label: 'Contact', href:'#contact'}
    ];

  return (
    <header className='sticky top-0 z-50 w-full bg-cream border-b border-gold/20 shadow-sm h-20'>
        <nav className='w-full h-full flex px-4 md:px-0 sm:px-6 lg:px-8 py-4 items-center'>
            <div className='flex justify-between  w-full'>
                {/* Logo */}
                <div className='flex items-center gap-3'>
                    <Link href="/" className='text-3xl font-bold text-dark tracking-tight'>
                        Luxe<span className='text-gold'>Design</span>
                    </Link>
                    <div className='h-6 w-0.5 bg-gold/30'></div>
                    <span className='text-xs tracking-widest text-green font-semibold uppercase'>Manali</span>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-4 lg:gap-6 xl:gap-10'>
                    {navLinks.map((link)=>(
                        <Link
                        key={link.label}
                        href={link.href}
                        className='text-dark'>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA Button + Hamburger */}
                <div className='flex items-center gap-6 relative z-50'>
                    <button className='hidden md:block rounded-full flex-shrink-0 text-center bg-gold/50 px-4 py-2'>
                        Get Quote
                    </button>
                    
                    {/* Hamburger Menu */}
                    <button
                        onClick={()=>setIsMenuOpen(!isMenuOpen)} 
                        className='md:hidden flex flex-col gap-1.5 focus:outline-none'
                        aria-label='Toggle menu'
                    >
                        <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMenuOpen? 'rotate-45 translate-y-2': ''}`}/>
                        <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMenuOpen?'opacity-0':''}`}/>
                        <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMenuOpen?'-rotate-45 -translate-y-2':''}`}/>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <>
                <div
            className='md:hidden fixed inset-0 bg-dark/30 backdrop-blur-sm z-40'
            onClick={closeMenu}
          />
                <div className='md:hidden fixed top-0 right-0 w-2/3 max-w-sm h-screen flex bg-cream border-l border-gold/20 shadow-lg py-10 px-6 z-45  overflow-y-auto'>
                    <div className='flex flex-col gap-6'>
                        {navLinks.map((link)=>(
                            <Link
                            key={link.label}
                            href={link.href}
                            className='text-dark px-2 py-3  hover:bg-gold/10 rounded-md'
                            onClick={closeMenu}>
                                {link.label}
                            </Link>
                        ))}
                        <button className='bg-green rounded-full px-5 py-3 text-center'>Get Quote</button>
                    </div>
                </div>
                </>
            )}
        </nav>
    </header>
  )
}

export default Header