import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiList, FiInfo } from 'react-icons/fi';
import ProjectCard from './ProjectCard';

// Import project images
import oops from '../asset/oops.png';
import d from '../asset/d.png';
import a from '../asset/a.png';
import ti from '../asset/ti.png';
import cp from '../asset/cp.png';
import f from '../asset/f.png';

const Projects = () => {
  const mernProjects = [
    {
      title: "DineDash - Food Delivery Platform",
      description: "A MERN stack food delivery application inspired by Zomato and Swiggy, enabling users to explore restaurants, order food, and manage deliveries. Features include user authentication, real-time order tracking, and a comprehensive admin panel for restaurant management.",
      image: d,
      githubLink: "https://github.com/Vasuaghera/DineDash",
      liveLink: "https://dinedash.vercel.app/",
      moreDetails: [
        "Built with React, Redux, Node.js, Express.js, and MongoDB.",
        "Implemented JWT for secure user authentication and authorization.",
        "Real-time order status updates using Socket.IO (or similar).",
        "Responsive UI/UX design with Tailwind CSS for seamless experience across devices.",
        "Integrated payment gateway (e.g., Stripe) for secure transactions.",
      ],
    },
    {
      title: "FilmyFlow - Movie Platform",
      description: "FilmyFlow is a MERN stack movie platform inspired by Netflix, allowing users to browse, search, and watch movies. Key features include a robust movie database, user profiles, watchlists, and personalized recommendations.",
      image: f,
      githubLink: "https://github.com/Vasuaghera/FilmyFlow",
      liveLink: "https://filmyflow.vercel.app/",
      moreDetails: [
        "Utilized React for dynamic frontend and Node.js with Express.js for backend APIs.",
        "MongoDB for flexible data storage of movies, users, and watchlists.",
        "Implemented movie search functionality with filters and sorting options.",
        "User authentication and personalized dashboards for watch history and favorites.",
        "Integrated with TMDB API for comprehensive movie data and posters.",
      ],
    },
    {
      title: "AirBnb Clone - Accomodation Booking Platform",
      description: "An Airbnb clone built with the MERN stack, allowing users to list, search, and book accommodations. Features include property listings with images, user authentication, booking management, and a messaging system.",
      image: a,
      githubLink: "https://github.com/Vasuaghera/AirBnb-Clone",
      liveLink: "https://airbnb-clone-rose-beta.vercel.app/",
      moreDetails: [
        "Frontend developed with React and Tailwind CSS for modern UI.",
        "Backend powered by Node.js and Express.js, with MongoDB as the database.",
        "User authentication, property creation, and booking functionalities.",
        "Image upload (e.g., Cloudinary) for property photos.",
        "Responsive design for optimal viewing on all devices.",
      ],
    },
  ];

  const reactProjects = [
    {
      title: "TI-84 Plus Calculator Clone",
      description: "A functional clone of the TI-84 Plus graphing calculator built using React. This project demonstrates complex UI/UX implementation and intricate state management for calculator logic.",
      image: ti,
      githubLink: "https://github.com/Vasuaghera/TI-84-Plus-Calculator-Clone",
      liveLink: "https://ti-84-plus-calculator.vercel.app/",
      moreDetails: [
        "Developed with React for component-based architecture.",
        "Implemented full calculator functionality, including arithmetic operations, scientific functions, and graphing capabilities.",
        "Responsive design to adapt to different screen sizes.",
        "Complex state management for handling input, display, and calculation logic.",
        "Clean and intuitive user interface resembling the original TI-84 Plus.",
      ],
    },
    {
      title: "CodePen Clone",
      description: "A simplified CodePen clone built with React, allowing users to write and preview HTML, CSS, and JavaScript code in real-time. Features include a resizable editor and live output display.",
      image: cp,
      githubLink: "https://github.com/Vasuaghera/CodePen-Clone",
      liveLink: "https://codepen-clone-drab.vercel.app/",
      moreDetails: [
        "Frontend built using React for dynamic UI updates.",
        "Real-time code compilation and rendering using iframes.",
        "Resizable panels for HTML, CSS, JavaScript editors, and live preview.",
        "Syntax highlighting for improved code readability.",
        "Simple and intuitive interface for quick prototyping.",
      ],
    },
  ];

  const coreProjects = [
    {
      title: "OOPs Concepts (C++)",
      description: "A C++ project demonstrating fundamental Object-Oriented Programming (OOP) concepts such as encapsulation, inheritance, polymorphism, and abstraction through practical examples.",
      image: oops,
      githubLink: "https://github.com/Vasuaghera/OOPs-Concepts",
      liveLink: "#", // No live link for a C++ console application
      moreDetails: [
        "Implemented classes and objects to model real-world entities.",
        "Demonstrated inheritance for code reusability and hierarchical relationships.",
        "Showcased polymorphism through virtual functions and function overriding.",
        "Utilized encapsulation to hide implementation details and expose interfaces.",
        "Clear and well-commented code for educational purposes.",
      ],
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"

        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my work across different domains, demonstrating my skills in full-stack development and problem-solving.
          </p>
        </motion.div>

        {/* Full Stack MERN Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="w-12 h-1 bg-blue-600 mr-4 rounded-full"></span>
              Full Stack MERN Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 ml-16">
              Modern web applications built with MongoDB, Express.js, React, and Node.js
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mernProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* React Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="w-12 h-1 bg-blue-600 mr-4 rounded-full"></span>
              React Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 ml-16">
              Interactive and responsive web applications built with React
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reactProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Subject Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="w-12 h-1 bg-blue-600 mr-4 rounded-full"></span>
              Core Subject Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 ml-16">
              Projects demonstrating fundamental computer science concepts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects; 