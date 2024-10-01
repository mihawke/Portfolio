import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const LinkClass = {
    homeLinkClass: `${location.pathname == '/' ? 'border-b-2 border-[#D73752] lg:border-2 lg:border-gray-400' : ' border-b-2 h-fit lg:border-2 border-transparent'} hover:opacity-75 text-xs p-1 lg:text-md lg:px-5 lg:py-1 font-source_code_pro`,
    projectsLinkClass: `${location.pathname == '/projects' ? 'border-b-2 border-[#D73752] lg:border-2 lg:border-gray-400' : ' border-b-2 h-fit lg:border-2 border-transparent'} hover:opacity-75 text-xs p-1 lg:text-md lg:px-5 lg:py-1 font-source_code_pro`,
    educationLinkClass: `${location.pathname == '/education' ? ' border-b-2 border-[#D73752] lg:border-2 lg:border-gray-400' : ' border-b-2 h-fit lg:border-2 border-transparent'} hover:opacity-75 text-xs p-1 lg:text-md lg:px-5 lg:py-1 font-source_code_pro`,
    contactLinkClass: `${location.pathname == '/contact' ? ' border-b-2 border-[#D73752] lg:border-2 lg:border-gray-400' : ' border-b-2 h-fit lg:border-2 border-transparent'} hover:opacity-75 text-xs p-1 lg:text-md lg:px-5 lg:py-1 font-source_code_pro`,
    resumeLinkClass: `${location.pathname == '/resume' ? ' border-b-2 border-[#D73752] lg:border-2 lg:border-gray-400' : ' border-b-2 h-fit lg:border-2 border-transparent'} hover:opacity-75 text-xs p-1 lg:text-md lg:px-5 lg:py-1 font-source_code_pro`,
  }
  return (
    <header className="bg-[#1C1C24] flex flex-row w-full items-center justify-end px-4 py-4 lg:px-10 font-source_code_pro">
      <nav className='flex flex-row w-full justify-evenly lg:justify-end gap-2 md:gap-4 text-gray-300'>
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
        <Link
          to={'/contact'}
          className={LinkClass.contactLinkClass}
        >CONTACT</Link>
        <Link
          to={'/resume'}
          className={LinkClass.resumeLinkClass}
        >RESUME</Link>
      </nav>
    </header>
  )
}

export default Header