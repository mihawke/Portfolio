// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom'

import { FaPhoneAlt } from "react-icons/fa"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6"


const Contact = () => {
  const inptClassname = `${'bg-transparent border-[1px] border-red-100 outline-none px-4 py-2 rounded-md'} focus:border-[#E94560] w-full font-source_code_pro`
  const paraClassname = `${'flex flex-row items-center justify-center gap-4'}`
  // homeLinkClass: `${location.pathname == '/' ? 'border-b-2 border-[#D73752] lg:border-2 lg:border-gray-400' : ' border-b-2 h-fit lg:border-2 border-transparent'} hover:opacity-75 text-xs p-1 lg:text-md lg:px-5 lg:py-1 font-source_code_pro`,

  return (
    <main className="bg-[#1C1C24] flex flex-col flex-1 items-center">
      <h2 className="text-2xl lg:text-4xl mt-4 md:mt-5 text-white text-center tracking-wider font-source_code_pro_bold">
        CONTACT ME
      </h2>
      <div className="hidden lg:flex flex-row items-center flex-1">
        <div className="flex flex-col flex-[1_1_50%] items-start justify-center gap-4 px-10">
          <div className={paraClassname}>
            <FaEnvelope className="w-8 h-8 text-gray-400" />
            <p className="text-gray-400 font-source_code_pro_semibold">pratikgawari0000@gmail.com</p>
          </div>
          <div className={paraClassname}>
            <FaPhoneAlt className="w-8 h-8 text-gray-400" />
            <p className="text-gray-400 font-source_code_pro_semibold">+91-9370071950 | +91-9422557145</p>
          </div>
          <div className={paraClassname}>
            <FaLinkedin className="w-8 h-8 text-gray-400" />
            <a href="https://www.linkedin.com/in/pratikg22/" className="text-gray-400 font-source_code_pro_semibold">https://www.linkedin.com/in/pratikg22/</a>
          </div>
          <div className={paraClassname}>
            <FaGithub className="w-8 h-8 text-gray-400" />
            <a href="https://github.com/mihawke" className="text-gray-400 font-source_code_pro_semibold">https://github.com/mihawke</a>
          </div>
        </div>
        <div className="w-[1px] h-[75%] bg-gray-400 rounded-lg"></div>
        <div className="flex flex-row  flex-[1_1_50%] items-center justify-center px-10">
          <form
            method="post"
            action="mailto:pratikgawari0000@gmail.com"
            className="flex flex-col items-center gap-4 mt-8  w-full">
            <input type="text" className={inptClassname} placeholder="NAME" />
            <input type="email" className={inptClassname} placeholder="EMAIL" />
            <textarea name="message" id="message" className={inptClassname} placeholder="Type youe message..."></textarea>
            <button
              type='submit'
              disabled
              className="w-fit px-4 py-2 bg-[#E94560] text-white text-sm md:text-md font-semibold rounded-md shadow-md hover:bg-[#D73752] transition duration-200 font-source_code_pro_bold"
            >SUBMIT</button>
            <p className="bg-[#b22200] opacity-60 px-8 py-2 rounded-lg">Form logic not implemented yet!</p>
          </form>
        </div>
      </div>
      <div className="mt-10 md:mt-4 lg:hidden flex flex-col flex-1">
        <div className="flex flex-col items-start justify-center gap-4">
          <div className="flex flex-row w-full items-center justify-center px-8 md:px-10">
            <form
              method="post"
              action="mailto:pratikgawari0000@gmail.com"
              className="flex flex-col items-center gap-2 md:gap-4 md:mt-8  w-full">
              <input
                type="text"
                className='bg-transparent border-[1px] border-red-100 outline-none text-xs md:text-sm p-2 md:px-4 md:py-2 rounded-md focus:border-[#E94560] w-full font-source_code_pro'
                placeholder="NAME" />
              <input
                type="email"
                className='bg-transparent border-[1px] border-red-100 outline-none text-xs md:text-sm p-2 md:px-4 md:py-2 rounded-md focus:border-[#E94560] w-full font-source_code_pro'
                placeholder="EMAIL" />
              <textarea
                name="message"
                id="message"
                className='bg-transparent border-[1px] border-red-100 outline-none text-xs md:text-sm p-2 md:px-4 md:py-2 rounded-md focus:border-[#E94560] w-full font-source_code_pro'
                placeholder="Type youe message..."></textarea>
              <button
                type='submit'
                disabled
                className="mt-2 md:mt-2 px-4 py-1 md:py-2 bg-[#E94560] text-white text-xs md:text-md font-semibold rounded-md shadow-md hover:bg-[#D73752] transition duration-200 font-source_code_pro_bold"
              >SUBMIT</button>
              <p className="bg-[#b22200] opacity-60 text-xs md:text-sm px-4 md:px-8 md:py-2 rounded-md md:rounded-lg">Form logic not implemented yet!</p>
            </form>
          </div>
          <div className="h-[1px] w-full bg-gray-400 rounded-lg my-8 md:my-10"></div>
          <div className="flex flex-col items-start justify-center gap-4">
            <div className={paraClassname}>
              <FaEnvelope className="w-4 h-4 text-gray-400" />
              <p className="text-xs md:text-sm text-gray-400 font-source_code_pro_semibold">pratikgawari0000@gmail.com</p>
            </div>
            <div className={paraClassname}>
              <FaPhoneAlt className="w-4 h-4 text-gray-400" />
              <p className="text-xs md:text-sm text-gray-400 font-source_code_pro_semibold">+91-9370071950 | +91-9422557145</p>
            </div>
            <div className={paraClassname}>
              <FaLinkedin className="w-4 h-4 text-gray-400" />
              <a href="https://www.linkedin.com/in/pratikg22/" className="text-xs md:text-sm text-gray-400 font-source_code_pro_semibold">https://www.linkedin.com/in/pratikg22/</a>
            </div>
            <div className={paraClassname}>
              <FaGithub className="w-4 h-4 text-gray-400" />
              <a href="https://github.com/mihawke" className="text-xs md:text-sm text-gray-400 font-source_code_pro_semibold">https://github.com/mihawke</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact