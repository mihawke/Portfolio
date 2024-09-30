import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const LinkClass = {
    homeLinkClass: `${location.pathname == '/' ? ' border-b-2 border-[#D73752] lg:border-2 border-gray-400' : ' border-b-2 h-fit lg:border-2 border-transparent'} hover:opacity-75 text-xs p-1 lg:text-md lg:px-5 lg:py-1 font-source_code_pro`,
    projectsLinkClass: `${location.pathname == '/projects' ? ' border-b-2 border-[#D73752] lg:border-2 border-gray-400' : ' border-b-2 h-fit lg:border-2 border-transparent'} hover:opacity-75 text-xs p-1 lg:text-md lg:px-5 lg:py-1 font-source_code_pro`,
    educationLinkClass: `${location.pathname == '/education' ? ' border-b-2 border-[#D73752] lg:border-2 border-gray-400' : ' border-b-2 h-fit lg:border-2 border-transparent'} hover:opacity-75 text-xs p-1 lg:text-md lg:px-5 lg:py-1 font-source_code_pro`,
  }
  return (
    <header className='bg-[#1C1C24] flex flex-row w-full lg:justify-end items-center lg:h-[10vh] px-10 py-2 lg:px-8 font-source_code_pro'>
      <nav className='flex flex-row w-full justify-between lg:justify-end gap-4 text-gray-300'>
        <Link
          to={'/'}
          className={LinkClass.homeLinkClass}
          style={{

          }}
        >HOME</Link>
        <Link
          to={'/projects'}
          className={LinkClass.projectsLinkClass}
        >PROJECTS</Link>
        <Link
          to={'/education'}
          className={LinkClass.educationLinkClass}
        >EDUCATION</Link>
      </nav>
    </header>
  )
}

export default Header