import React from 'react';
import { FaEye, FaGithub, FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demo: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, demo, github }) => {
  return (
    <div className='bg-[#282838] rounded-lg shadow-lg overflow-hidden w-full max-w-xs'>
      <div className='h-48 w-full'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='p-4'>
        <h3 className='text-xl font-semibold text-white'>
          {title}
        </h3>
        <p className='text-gray-400 text-sm mt-2'>
          {description}
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
  );
};

export default ProjectCard;
