import { motion } from 'framer-motion';
import React from 'react';
import { FaEye, FaGithub, FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  demo: string;
  github: string;
  technologies: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, demo, github, technologies }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} // Adjust the duration for hover
      initial={{ opacity: 0, scale: 0.5 }} // Initial transition
      animate={{ opacity: 1, scale: 1 }} // Animate transition
    >
      <div className='bg-[#282838] rounded-lg shadow-lg overflow-hidden w-full max-w-xs'>
        <div className='p-4'>
          <h3 className='text-xl font-semibold text-white'>
            {title}
          </h3>
          <p className='text-gray-400 text-sm mt-2'>
            {description}
          </p>
          <p className='text-gray-400 text-sm font-bold mt-2'>
            {technologies}
          </p>
          <div
            className='flex flex-row justify-end gap-4'
          >
            <Link
              to={demo}
            >
              <FaPlayCircle size={'1.5rem'} style={{ color: '#E94560' }}></FaPlayCircle>
            </Link>
            <Link
              to={github}
              target='_blank'
            >
              <FaGithub size={'1.5rem'} style={{ color: '#E94560' }}></FaGithub>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
