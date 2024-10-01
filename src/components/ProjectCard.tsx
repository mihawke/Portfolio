import { motion } from 'framer-motion';
import React from 'react';
import {FaGithub, FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  demo: string;
  github: string;
  technologies: string;
  status?: 'completed' | 'ongoing'
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, demo, github, technologies , status }) => {
  const statusClassname = `${ status === 'completed' ? 'bg-[#155724]' : 'bg-[#b22200]'} text-white px-4 w-fit  rounded-md text-xs lg:text-sm mt-2 opacity-70`
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Adjust the duration for hover
      initial={{ opacity: 0, scale: 0.5 }} // Initial transition
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }} // Animate transition
      className='bg-[#282838] rounded-md lg:rounded-lg shadow-lg overflow-hidden w-[80%] lg:w-full lg:max-w-xs'
    >
      <div className='p-4'>
        <h3 className='text-base lg:text-xl font-semibold text-white'>
          {title}
        </h3>
        <p className={statusClassname}>
          {status}
        </p>
        <p className='text-gray-400 text-xs lg:text-sm mt-2'>
          {description}
        </p>
        <p className='text-gray-400 text-xs lg:text-sm font-bold mt-2'>
          {technologies}
        </p>
        <div
          className='flex flex-row justify-end mt-1 gap-4'
        >
          <Link
            to={demo}
          >
            <FaPlayCircle size={'1.5rem'} style={demo != '' ? { color: '#E94560' } : { color: '#564044' }}></FaPlayCircle>
          </Link>
          <Link
            to={github}
            target='_blank'
          >
            <FaGithub size={'1.5rem'} style={{ color: '#E94560' }}></FaGithub>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
