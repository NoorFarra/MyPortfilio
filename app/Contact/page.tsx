'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Nav from '../components/Nav';
import Link from 'next/link'


function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgybev");

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    await handleSubmit(event);
  };

  if (state.succeeded) {
    return ( 
    <>
    <div className="flex bg-HomeBG bg-cover bg-center h-[100vh]
     flex-col items-center gap-[4vh]  justify-center ">
        <p className='text-[3vh]
       text-white font-bold'>Thanks For Your Message</p>
        <Link href={'/'} className="w-[25vh] h-[6vh] 
        flex justify-center items-center rounded-2xl 
         font-body cursor-pointer bg-white text-[2vh]
         hover:scale-105 transition-all ease-in-out
         shadow-blue-800 shadow-md
       text-black font-bold">Back To Home Page</Link>
     </div>
    </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start bg-black min-h-screen sm:bg-HomeBG bg-cover bg-center">
      <Nav />
      <div className=' w-[90%] sm:w-full h-[90vh] flex justify-center items-center gap-5 flex-col'>
        <form onSubmit={handleFormSubmit} className="w-full max-w-md p-8 bg-slate-300  rounded-lg shadow-blue-800 shadow-lg">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-1">Email Address</label>
            <input
              id="email"
              type="email" 
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-white text-black font-bold focus:border-blue-400"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-white text-black font-bold focus:border-blue-400"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <button 
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit" 
            disabled={state.submitting}
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
