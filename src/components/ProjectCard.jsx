import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiList, FiInfo } from 'react-icons/fi';

const ProjectCard = ({ title, description, image, githubLink, liveLink, moreDetails }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative"
    >
      {/* Toggle Button */}
      <div className="absolute top-3 right-3 z-20">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          title={showDetails ? "Show Project Info" : "Show Features"}
        >
          {showDetails ? (
            <FiInfo className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          ) : (
            <FiList className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!showDetails ? (
          <motion.div
            key="project-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full"
          >
            {/* Project Image with Title Overlay */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                  {title}
                </h3>
              </div>
            </div>

            {/* Project Description and Links */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="h-24 mb-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {description}
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm font-medium group-hover:shadow-md"
                >
                  <FiGithub className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 text-sm font-medium group-hover:shadow-md"
                >
                  <FiExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {title} - Features
            </h3>
            <ul className="space-y-3 flex-grow">
              {moreDetails.map((detail, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
            {/* Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm font-medium group-hover:shadow-md"
              >
                <FiGithub className="w-5 h-5" />
                <span>View Code</span>
              </a>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 text-sm font-medium group-hover:shadow-md"
              >
                <FiExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard; 