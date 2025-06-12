import React from 'react';
// import { motion } from 'framer-motion'; // Remove motion import if no longer needed
import { FiBook, FiExternalLink } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      title: "B.Tech in Computer Science and Engineering",
      institution: "Nirma University",
      period: "2022 - 2026",
      link: "https://nirmauni.ac.in/",
      description: "Pursuing Bachelor of Technology in Computer Science and Engineering"
    },
    {
      title: "Higher Secondary Education",
      institution: "Modi School",
      period: "2012 - 2022"
    }
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-8 flex items-start"
            >
              {/* Timeline Indicator */}
              <div className="absolute left-[-15px] mt-1 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center">
                <FiBook className="w-4 h-4 text-white" />
              </div>

              {/* Education Content */}
              <div className="flex-1 ml-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.title}
                  </h3>
                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                      <FiExternalLink className="w-3 h-3" />
                      Visit
                    </a>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {edu.period}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 