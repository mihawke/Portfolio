import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCircleArrowDown, FaCircleArrowUp } from 'react-icons/fa6';

interface EduCardProps {
  degree: string;
  department: string;
  institute: string;
  year: string;
  score: string;
}

const EduCard: React.FC<EduCardProps> = ({ degree, department, institute, year, score }) => {
  return (
    <div className="bg-[#282838] p-4 lg:p-6 rounded-lg flex flex-col gap-1 shadow-lg overflow-hidden w-full max-w-xs border-l-2 lg:border-l-4 border-[#E94560]">
      <h1 className="text-base md:text-lg lg:text-2xl font-[600] text-white mb-2">{degree}</h1>
      <p className="text-sm lg:text-base text-gray-400">{department}</p>
      <p className='text-sm lg:text-base text-gray-400'>{institute}</p>
      <p className='text-sm lg:text-base text-gray-400'>{year}</p>
      <p className='text-sm lg:text-base text-gray-400'>{score}</p>
    </div>
  )
}

interface WorkCardProps {
  company: string;
  position: string;
  description: string;
  year: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ company, description, position, year }) => {
  return (
    <div className="bg-[#282838] p-4 lg:p-6 rounded-lg flex flex-col gap-1 shadow-lg overflow-hidden w-full max-w-xs border-l-2 lg:border-l-4 border-[#E94560]">
      <h1 className="text-base md:text-xl lg:text-2xl font-[600] text-white mb-2">{company}</h1>
      <p className='text-sm lg:text-base text-gray-400'>{position}</p>
      <p className='text-sm lg:text-base text-gray-400'>{year}</p>
      <p className='text-sm lg:text-base text-gray-400'>{description}</p>
    </div>
  )
}

interface EducationectionProps {
  handleNextSection: () => void;
}

const EducationSection: React.FC<EducationectionProps> = ({ handleNextSection }) => {
  return (
    <section className='flex flex-col justify-center items-center min-h-[100%]'>
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
      <h2 className="text-2xl lg:text-4xl text-white text-center tracking-wider font-source_code_pro_bold">
        Education
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 p-4 md:p-6">
        <EduCard
          degree='Dual Degree (M.Tech & B.Tech)'
          department='Biomedical Engineering Design'
          institute='Indian Institute Of Technology Madras'
          year='2018-2023'
          score='CGPA: 6.96/10'
        />
        <EduCard
          degree='Higher Secondary Certificate'
          department='CBSE'
          institute='Jawahar Navodaya Vidyalaya, Puducherry, Tamilnadu'
          year='2018'
          score='Percentage: 91.2%'
        />
        <EduCard
          degree='Secondary School Certificate'
          department='CBSE'
          institute='Jawahar Navodaya Vidyalaya, Ahmednagar, Maharashtra'
          year='2016'
          score='Percentage: 91.2%'
        />
      </div>
    </section>
  )
}

interface WorkSectionProps {
  handleNextSection: () => void;
}

const WorkSection: React.FC<WorkSectionProps> = ({ handleNextSection }) => {
  return (
    <section className='flex flex-col justify-center items-center min-h-[100%]'>
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
      <h2 className="text-2xl lg:text-4xl text-white text-center tracking-wider font-source_code_pro_bold">
        Work Experience
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 p-4 md:p-6">
        <WorkCard
          company='InuAid'
          position='Technical Analyst'
          year='2021-2022'
          description=' Developed and maintained web applications using React, Node.js, and MongoDB.
                Collaborated with the design and product teams to build user-friendly interfaces.
               '
        />
        <WorkCard
          company='InuAid'
          position='Technical Analyst'
          year='2021-2022'
          description='Developed and tested a React Native component library, ensuring high quality and performance. Collaborated with cross-functional teams to deliver user-friendly mobile applications.'
        />

      </div>
    </section>
  )
}

const Education = () => {
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
    <main className="bg-[#1C1C24] flex flex-[1_1_90%]  items-center p-4 md:p-6 h-full overflow-auto relative">
      {currentSection === 0 ?
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: -50 }}    // Initial state: hidden and slightly below
          animate={{ opacity: 1, y: 0 }}     // Final state: fully visible
          exit={{ opacity: 0, y: -50 }}      // Exit state: hidden and slightly above
          transition={{ duration: 0.5 }}     // Animation duration
          className="w-full h-full"
        >
          <EducationSection handleNextSection={goDown} />
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
          <WorkSection handleNextSection={goUp} />
        </motion.div>
      }
      <div className="absolute top-1/2 right-2 lg:right-10 transform -translate-y-1/2 flex flex-col space-y-2">
        <span
          onClick={goUp}
          className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${currentSection === 0 ? 'bg-[#E94560]' : 'bg-gray-600'} transition-colors duration-300 ease-in-out`}
        ></span>
        <span
          onClick={goDown}
          className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${currentSection === 1 ? 'bg-[#E94560]' : 'bg-gray-600'} transition-colors duration-00 ease-in-out`}
        ></span>
      </div>
    </main>

  )
}

export default Education