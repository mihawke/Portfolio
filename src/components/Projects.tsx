// Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  // Sample projects data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      technologies: ['React', 'Node.js'],
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
      technologies: ['React', 'TypeScript'],
      demoLink: '#',
      repoLink: '#',
    },
    // Add more projects as needed
  ];

  return (
    <main className='bg-[#313139] flex flex-1 items-center justify-center'>
    <h1 className='text-6xl'>Projects</h1>
    </main>
  );
};

export default Projects;
