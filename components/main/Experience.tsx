'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import 'app/globals.css';

const Experience = () => {
  const [isInView, setIsInView] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => {
      if (experienceRef.current) observer.unobserve(experienceRef.current);
    };
  }, []);

  const experienceData = [
    {
      title: 'Masters in Computer Science',
      company: 'Indiana University',
      years: 'Aug 2023 – May 2025',
      description: [
        'Specialized coursework in Software Engineering, Data Structures, and Algorithms.',
        'Developed and optimized scalable web and mobile applications as part of academic projects.',
        'Gained proficiency in cloud-based development and deployment using modern tools and frameworks.',
        'Collaborated on group projects to solve real-world problems using cutting-edge technologies.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Dataweave',
      years: 'June 2021 – June 2022',
      description: [
        'Developed web services using Python, FastAPI, ensuring high performance and quick response times for API calls.',
        'Integrated Redis as a caching layer for frequently accessed data, minimizing database load and optimizing retrieval times.',
        'Optimized SQL queries and database schema, reducing query execution times and improving data retrieval efficiency.',
      ],
    },
    {
      title: 'Data Engineer',
      company: '1stop.ai',
      years: 'Jan 2021 – June 2021',
      description: [
        'Executed advanced data analytics techniques using Python and data science libraries, streamlining data workflows and improving decision-making efficiency by 30%.',
        'Launched a prototype with Apache Spark and Hadoop, addressing real-time data processing challenges and increasing the application’s capacity to handle data volumes by 40%, resulting in more efficient data management.',
      ],
    },
    {
      title: 'Technical Head',
      company: 'Techno Byte',
      years: 'Jan 2020 – June 2022',
      description: [
        'Organized and led codethons, boosting engagement in competitive programming challenges.',
        'Built predictive models and dashboards to track member progress, automating workflows to reduce admin time and improve data handling, leading to more efficient performance insights and recommendations.',
        'Contributed over 50,000 lines of code to enhance and maintain an existing codebase using Git.',
      ],
    },
  ];

  return (
    <section id="experience" ref={experienceRef} className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 mt-12 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-cyan-200">
          My Experience
        </h2>

        <div className="relative space-y-10 sm:space-y-16">
          {/* Vertical Line */}
          <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-gray-200 z-6 hidden md:block"></div>

          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center md:space-x-6 space-y-6 md:space-y-0 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Icon */}
              <div className="relative flex-shrink-0 flex items-center justify-left w-12 h-12 md:w-14 md:h-14 bg-black rounded-full">
                <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-purple-700" />
              </div>

              {/* Experience Content */}
              <div className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-md w-full max-w-6xl">
                <h3 className="text-md sm:text-lg font-semibold text-gray-200">
                  {experience.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  {experience.company} - {experience.years}
                </p>
                <ul className="mt-4 text-sm sm:text-base text-gray-500 space-y-2">
                  {experience.description.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-purple-500">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
