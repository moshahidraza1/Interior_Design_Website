"use client"
import React, { useState } from 'react'


const ContactForm = () => {
  const [result, setResult] = useState<string>();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
        setResult("sending...");
        if(form.phone.length != 0){
           setResult("Form Submitted Successfully");
           form.reset();
           return;
        }
        const formData = new FormData(form);
        
        formData.append("access_key", "0cbe8c38-3553-41f1-b4ee-150f4761b2a9");
        const response= await fetch("https://api.web3forms.com/submit", {
            method:"POST",
            body: formData
        });

        const data= await response.json();
        if(data.success){
            setResult("Form Submitted Successfully");
            form.reset();

        }else{
            console.log("Error", data);
            setResult(data.message);
        }
  }

  return (
    <div id='contact' className='mt-20 py-20'>
      <div className='text-3xl md:text-5xl font-serif text-center'>Get Quote</div>
      <div className='bg-gold h-0.5 w-30 mx-auto mt-1'></div>
      <form onSubmit={handleSubmit}  className='max-w-xl md:max-w-3xl mx-auto p-6 bg-white/50 rounded-2xl shadow-sm mt-16'>
        <h3 className='font-semibold text-2xl mt-3 mb-6 text-center'>Contact Us</h3>
        <div className='grid gap-5'>
          <div className='grid md:grid-cols-2 gap-5'>
          <div>
          <label className='flex flex-col'>
            <span className='text-sm font-medium'>Your Name</span>
            <input 
            name='name' 
            type='text' placeholder='John Doe'
            required
            className='mt-2 rounded-md p-3 focus:outline-none border border-dark/30'/>
          </label>
          </div>

          <div>
            <label className='flex flex-col'>
            <span className='text-sm font-medium'>Email</span>
            <input
            name='email'
            type='email'
            required
            placeholder='name@example.com'
            className='mt-2 rounded-md p-3 focus:outline-none border border-dark/30'/>
          </label>
          </div>
          </div>

          <div><label className='flex flex-col'>
            <span className='text-sm font-medium'>Subject</span>
            <input
            name='subject'
            type='text'
            placeholder='Project: Villa renovation'
            className='mt-2 rounded-md p-3 focus:outline-none border border-dark/30'/>
          </label>
          </div>

          <div><label className='flex flex-col'>
            <span className='text-sm font-medium'>Message</span>
            <textarea
            name='message'
            required
            rows={6}
            placeholder='Write a short description of your job, timeline & budget(optional)'
            className='mt-2 p-3 rounded-md focus:outline-none border border-dark/30 '
            />
          </label>
          </div>

          {/* Honeypot - invisible to humans [helps in filtering bots] */}
          <input
          name='phone'
          type='text'
          tabIndex={-1}
          autoComplete='off'
          className='opacity-0 h-0 w-0 pointer-events-none absolute'
          aria-hidden='true'
          />

          <div className='flex items-center justify-center mt-2'>
            <button type='submit' className='rounded-md bg-dark/50 p-4 hover hover:bg-dark/80 hover:text-white'>Send Message</button>
            
          </div>
        </div>
        <p className='mt-4 text-center'>{result}</p>
      </form>
    </div>
  )
}

export default ContactForm
