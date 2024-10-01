import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { FaCircleArrowDown, FaCircleArrowUp } from 'react-icons/fa6';

type HeroSectionProps = {
  handleNextSection: () => void;
};
const HeroSection: React.FC<HeroSectionProps> = ({ handleNextSection }) => {
  return (
    <section className='flex flex-col items-center justify-center min-h-[100%]'>
      <motion.button
        onClick={handleNextSection}
        initial={{ opacity: 0, y: 200 }} // Start above the screen
        animate={{ opacity: 0.5, y: 0 }} // Button moves down into view
        whileHover={{ opacity: 1, y: 0 }} // Full opacity on hover
        exit={{ opacity: 0, y: 200 }} // Exit back up
        transition={{ duration: 0.5, ease: 'easeOut' }} // Smooth transition
        className="lg:hidden absolute bottom-5 text-xl lg:text-4xl text-white"
      >
        <FaCircleArrowDown style={{ color: '#6b7280' }} />
      </motion.button>

      <h1 className="text-xl md:text-3xl lg:text-6xl font-bold text-white text-center tracking-wider font-source_code_pro_bold">
        I'M PRATIK GAWARI
      </h1>

      <p className="text-gray-400 text-sm md:text-base lg:text-lg mt-4 text-center w-[85%] md:w-[80%] lg:max-w-xl leading-relaxed font-source_code_pro">
        Full-stack developer with a passion for building intuitive and scalable web applications.
        Experienced in modern web technologies to create impactful solutions.
      </p>

      <Link
        to={'/projects'}
        className="mt-8 px-4 py-2 bg-[#E94560] text-white text-sm md:text-md font-semibold rounded-md shadow-md hover:bg-[#D73752] transition duration-200 font-source_code_pro_bold"
      >View Projects</Link>

    </section>
  )
}

type SkillSectionProps = {
  handleNextSection: () => void;
};

interface SkillProps {
  title: string;
}

const Skill: React.FC<SkillProps> = ({ title }) => {
  return (
    <div className='bg-[#282838] lg:px-4 lg:py-1 rounded-sm lg:rounded-md text-center text-gray-300 place-content-center'>
      <span className='text-sm px-4 py-1 lg:text-base font-semibold font-source_code_pro_semibold'>{title}</span>
    </div>
  )
}

const SkillSection: React.FC<SkillSectionProps> = ({ handleNextSection }) => {
  return (
    <section className='w-full px-4 flex flex-col justify-center items-center h-full lg:min-h-[100%]'>

      <motion.button
        onClick={handleNextSection}
        initial={{ opacity: 0, y: -200 }} // Start button below
        animate={{ opacity: 0.5, y: 0 }} // Button appears and moves up
        whileHover={{ opacity: 1, y: 0 }} // Full opacity on hover
        exit={{ opacity: 0, y: -200 }} // Exit down
        transition={{ duration: 0.5, ease: 'easeOut' }} // Smooth transition
        className="lg:hidden absolute top-5 text-xl lg:text-4xl text-white"
      >
        <FaCircleArrowUp style={{ color: '#6b7280' }} />
      </motion.button>
      <h2 className='text-xl lg:text-2xl text-white font-semibold text-center'>
        Skills & Technologies
      </h2>

      <div className='flex flex-wrap justify-center gap-2 lg:gap-6 mt-6 w-[85%] lg:max-w-[70%]'>
        <Skill title='HTML' />
        <Skill title='CSS' />
        <Skill title='Tailwind CSS' />
        <Skill title='Figma' />
        <Skill title='JavaScript' />
        <Skill title='Typescript' />
        <Skill title='EJS' />
        <Skill title='React' />
        <Skill title='React Native' />
        <Skill title='Node.js' />
        <Skill title='Express.js' />
        <Skill title='Passport.js' />
        <Skill title='Webpack' />
        <Skill title='Git' />
        <Skill title='JSON' />
        <Skill title='RESTful APIs' />
        <Skill title='MongoDB' />
        <Skill title='SQL' />
        <Skill title='Framer Motion' />
        <Skill title='Recharts' />
        <Skill title='Python' />
        <Skill title='C#' />
      </div>
    </section>
  )
}

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);


  const handleNextSection = (scrollDirection: 'up' | 'down') => {
    if (scrollDirection === 'down' && currentSection === 0) {
      setCurrentSection(1);
    } else if (scrollDirection === 'up' && currentSection === 1) {
      setCurrentSection(0);
    }
  };

  const handleWheelScroll = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      // Scrolling down
      handleNextSection('down');
    } else {
      // Scrolling up
      handleNextSection('up');
    }
  };

  const goUp = () => {
    handleNextSection('up');
  };

  const goDown = () => {
    handleNextSection('down');
  };

  const handleKeyPress = (e: globalThis.KeyboardEvent): void => {
    if (e.key === 'ArrowDown') {
      handleNextSection('down');
    }
    else if (e.key === 'ArrowUp') {
      handleNextSection('up');
    }
  }

  // Add an event listener to detect wheel scroll
  useEffect(() => {
    // Attach both event listeners
    window.addEventListener('wheel', handleWheelScroll);
    window.addEventListener('keydown', handleKeyPress)

    // Cleanup function to remove both event listeners
    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
      window.removeEventListener('keydown', handleKeyPress)
    };
  }, [currentSection]);

  return (
    <main className="bg-[#1C1C24] flex flex-col flex-[1_1_90%] items-center p-6 overflow-hidden relative">
      {currentSection === 0 ?
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: -50 }}    // Initial state: hidden and slightly below
          animate={{ opacity: 1, y: 0 }}     // Final state: fully visible
          exit={{ opacity: 0, y: -50 }}      // Exit state: hidden and slightly above
          transition={{ duration: 0.5 }}     // Animation duration
          className="w-full h-full"
        >
          <HeroSection handleNextSection={goDown} />
        </motion.div>
        :
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}    // Initial state: hidden and slightly below
          animate={{ opacity: 1, y: 0 }}     // Final state: fully visible
          exit={{ opacity: 0, y: -50 }}      // Exit state: hidden and slightly above
          transition={{ duration: 0.5 }}     // Animation duration
          className="w-full h-full"
        >
          <SkillSection handleNextSection={goUp} />
        </motion.div>
      }
      {/* Section Indicator */}
      <div className="absolute top-1/2 right-2 lg:right-10 transform -translate-y-1/2 flex flex-col space-y-2">
        <span
          onClick={goUp}
          className={`h-2 w-2 lg:h-3 lg:w-3 rounded-full ${currentSection === 0 ? 'bg-[#E94560]' : 'bg-gray-600'} transition-colors duration-300 ease-in-out`}
        ></span>
        <span
          onClick={goDown}
          className={`h-2 w-2 lg:h-3 lg:w-3 rounded-full ${currentSection === 1 ? 'bg-[#E94560]' : 'bg-gray-600'} transition-colors duration-00 ease-in-out`}
        ></span>
      </div>
    </main>
  )
}

export default Home