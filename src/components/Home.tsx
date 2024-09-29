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
        className="absolute bottom-10 text-4xl text-white"
      >
        <FaCircleArrowDown style={{ color: '#6b7280' }} />
      </motion.button>

      <h1 className='text-6xl text-white tracking-wider'>
        I'M PRATIK GAWARI
      </h1>

      <p className='text-gray-400 mt-4 text-center max-w-xl leading-relaxed'>
        Full-stack developer with a passion for building intuitive and scalable web applications.
        Experienced in modern web technologies to create impactful solutions.
      </p>

      <Link
        to={'/projects'}
        className='mt-8 px-4 py-2 bg-[#E94560] text-white text-sm font-semibold rounded-md shadow-md hover:bg-[#D73752] transition duration-200'
      >View Projects</Link>

    </section>
  )
}

type SkillSectionProps = {
  handleNextSection: () => void;
};

const SkillSection: React.FC<SkillSectionProps> = ({ handleNextSection }) => {
  return (
    <section className='w-full px-4 flex flex-col justify-center items-center min-h-[100%]'>

      <motion.button
        onClick={handleNextSection}
        initial={{ opacity: 0, y: -200 }} // Start button below
        animate={{ opacity: 0.5, y: 0 }} // Button appears and moves up
        whileHover={{ opacity: 1, y: 0 }} // Full opacity on hover
        exit={{ opacity: 0, y: -200 }} // Exit down
        transition={{ duration: 0.5, ease: 'easeOut' }} // Smooth transition
        className="absolute top-10 text-4xl text-white"
      >
        <FaCircleArrowUp style={{ color: '#6b7280' }} />
      </motion.button>
      <h2 className='text-2xl text-white font-semibold text-center'>
        Skills & Technologies
      </h2>

      <div className='flex flex-wrap justify-center gap-6 mt-6 max-w-[70%]'>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>HTML</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>CSS</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Tailwind CSS</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Figma</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>JavaScript</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Typescript</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>EJS</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>React</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>React Native</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Node.js</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Express.js</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Passport.js</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Webpack</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Git</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>JSON</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>RESTful APIs</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>MongoDB</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>SQL</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Framer Motion</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Recharts</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>Python</span>
        </div>
        <div className='bg-[#282838] px-4 py-1 rounded-md text-center text-gray-300 place-content-center'>
          <span className='text-base font-semibold'>C#</span>
        </div>
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

  // Add an event listener to detect wheel scroll
  useEffect(() => {
    window.addEventListener('wheel', handleWheelScroll);
    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
    };
  }, [currentSection]);

  return (
    <main className="bg-[#1C1C24] flex flex-col items-center p-6 h-[90vh] overflow-hidden relative">
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
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 flex flex-col space-y-2">
        <span
          className={`h-3 w-3 rounded-full ${currentSection === 0 ? 'bg-[#E94560]' : 'bg-gray-600'} transition-colors duration-300 ease-in-out`}
        ></span>
        <span
          className={`h-3 w-3 rounded-full ${currentSection === 1 ? 'bg-[#E94560]' : 'bg-gray-600'} transition-colors duration-00 ease-in-out`}
        ></span>
      </div>
    </main>
  )
}

export default Home