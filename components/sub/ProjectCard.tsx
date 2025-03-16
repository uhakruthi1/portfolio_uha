import React from 'react';

interface ProjectCardProps {
  src: string;
  title: string;
  description: string[];
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  src,
  title,
  description,
  githubLink,
}) => {
  return (
    <div className="relative rounded-lg shadow-lg group hover:shadow-2xl transition-shadow ">
    
      <img
        src={src}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-100 transition-transform rounded-lg"
      />

      {/* Content */}
      <div className="p-4 bg-gradient-to-b from-gray-900 via-pink-200/20 to-black">
        <h3 className="text-lg font-bold mb-2 text-gray-200">{title}</h3>
        <ul className="text-sm text-gray-400 space-y-1">
          {description.map((line, index) => (
            <li key={index}>• {line}</li>
          ))}
        </ul>

        {/* Link */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-violet-500 hover:text-violet-700 font-medium"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
