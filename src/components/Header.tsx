import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const LinkClass = {
    homeLinkClass: `${location.pathname == '/' ? 'border-2 border-gray-400' : 'border-2 border-transparent'} hover:opacity-75 px-5 py-1  place-content-center font-source_code_pro`,
    projectsLinkClass: `${location.pathname == '/projects' ? 'border-2 border-gray-400' : 'border-2 border-transparent'}  hover:opacity-75  px-5 py-1  place-content-center font-source_code_pro`,
    educationLinkClass: `${location.pathname == '/education' ? 'border-2 border-gray-400' : 'border-2 border-transparent'}  hover:opacity-75 px-5 py-1 place-content-center font-source_code_pro`,
  }
  return (
    <header className='bg-[#1C1C24] flex flex-row justify-end items-center h-[10vh] px-8 font-source_code_pro'>
      <nav className='flex flex-row justify-end gap-4 text-gray-300'>
        <Link
          to={'/'}
          className={LinkClass.homeLinkClass}
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