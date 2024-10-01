// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom'


const Contact = () => {
  const inptClassname = `${'bg-transparent border-[1px] border-red-100 outline-none px-4 py-2 rounded-md'} focus:border-[#E94560] w-full font-source_code_pro`
  // homeLinkClass: `${location.pathname == '/' ? 'border-b-2 border-[#D73752] lg:border-2 lg:border-gray-400' : ' border-b-2 h-fit lg:border-2 border-transparent'} hover:opacity-75 text-xs p-1 lg:text-md lg:px-5 lg:py-1 font-source_code_pro`,

  return (
    <main className="bg-[#1C1C24] flex flex-col flex-1 items-center p-6 overflow-hidden">
      <h1 className="text-xl mt-8 md:text-3xl lg:text-6xl font-bold text-white text-center tracking-wider font-source_code_pro_bold">
        Contact Me
      </h1>
      <form 
     method="post"
     action="mailto:pratikgawari0000@gmail.com"
      className="flex flex-col items-center gap-4 mt-8  w-[400px]">
        <input type="text" className={inptClassname} placeholder="NAME"/>
        <input type="email" className={inptClassname} placeholder="EMAIL"/>
        <textarea name="message" id="message" className={inptClassname} placeholder="Type youe message..."></textarea>
        <button
        type='submit'
        disabled
          className="w-fit px-4 py-2 bg-[#E94560] text-white text-sm md:text-md font-semibold rounded-md shadow-md hover:bg-[#D73752] transition duration-200 font-source_code_pro_bold"
        >SUBMIT</button>
        <p className="bg-[#b22200] opacity-60 px-8 py-2 rounded-lg">Form logic not implemented yet!</p>
      </form>
    </main>
  )
}

export default Contact