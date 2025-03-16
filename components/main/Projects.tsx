'use client';

import React, { useState } from 'react';
import ProjectCard from '../sub/ProjectCard'; // Adjust the path if needed

interface Project {
  src: string;
  title: string;
  description: string[];
  githubLink: string;
}

const Projects: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects: Project[] = [
    {
      src: '/connectnow.png',
      title: 'ConnectNow',
      description: [
        'Developed a messaging app using Expo, React Native, and Firebase.',
        'Integrated Firebase for real-time messaging and user authentication.',
        'Optimized performance for both Android and iOS.',
      ],
      githubLink: 'https://github.com/uhakruthi1/Connect-Now',
    },
    {
      src: '/lms.png',
      title: 'Brain-Bridge',
      description: [
        'Built a Learning Management System using ReactJS, Node.js, and MongoDB.',
        'Implemented real-time chat and advanced search features.',
        'Designed secure assignment management.',
      ],
      githubLink: 'https://github.iu.edu/uhakommi/LMS-Team10.git',
    },
    {
      src: '/algoviz.jpg',
      title: 'Algorithm Visualizer',
      description: [
        'Created a tool to visualize sorting and pathfinding algorithms.',
        'Built using ReactJS and D3.js for interactive visuals.',
        'Improved algorithm understanding for students and professionals.',
      ],
      githubLink: 'https://github.com/uhakruthi1/Visualiser',
    },
    {
      src: '/fundchain.jpg',
      title: 'Fundchain',
      description: [
        'Developed a decentralized crowdfunding platform using ReactJS and NextJS.',
        'Crafted and deployed smart contracts using Solidity.',
        'Integrated Metamask for seamless wallet interactions.',
      ],
      githubLink: 'https://github.com/your-username/fundchain',
    },
    {
      src: '/objectdetection.jpg',
      title: 'Object Detection',
      description: [
        'Implemented real-time object detection using Python and TensorFlow.',
        'Trained models on custom datasets for accuracy.',
        'Deployed models for practical applications.',
      ],
      githubLink: 'https://github.com/uhakruthi1?tab=repositories',
    },
    {
      src: '/facerec.jpg',
      title: 'Face Recognition',
      description: [
        'Developed a face recognition system using OpenCV and Python.',
        'Optimized algorithms for faster detection.',
        'Integrated into security systems for authentication.',
      ],
      githubLink: 'https://github.com/uhakruthi1?tab=repositories',
    },
  ];

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex + 1 < projects.length ? prevIndex + 1 : 0
    );
  };

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center py-20" id="projects">
      <h2 className="text-4xl font-bold text-center mb-14 mt-5 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-100">
        My Projects
      </h2>

      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentProjectIndex * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-4 md:w-1/3 lg:w-1/3"
            >
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between w-full max-w-md mt-8">
        <button
          onClick={goToPreviousProject}
          className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
        >
          ←
        </button>
        <button
          onClick={goToNextProject}
          className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Projects;
