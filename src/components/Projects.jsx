import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Added framer-motion import
import { FiGithub, FiExternalLink, FiList, FiInfo } from 'react-icons/fi';
import ProjectCard from './ProjectCard';

// Import project images
import oops from '../asset/oops.png';
import d from '../asset/d.png';
import a from '../asset/a.png';
import ti from '../asset/ti.png';
import cp from '../asset/cp.png';
import f from '../asset/f.png';
import wd from '../asset/wd.jpeg';
import cmgame from '../asset/cmgame.png';
import aicodereview from '../asset/aicodereview.png';

const Projects = () => {
  const mernProjects = [
    {
      title: "ClimbAlgoMountain",
      description: "A comprehensive platform for learning and practicing algorithms and data structures with interactive coding challenges and progress tracking.",
      image: cmgame,
      githubLink: "https://github.com/Vasuaghera/ClimbAlgoMountain",
      // liveLink: "https://climb-algo-mountain.vercel.app/",
      moreDetails: [
        "Interactive platform for learning algorithms and data structures.",
        "Comprehensive user features: authentication, profile management, leaderboard, and analytics dashboard.",
        "Social learning tools: community forum, friends system, and integrated chatbot for instant help",
        "Premium content access and secure payment integration, all in a child-friendly, accessible UI.",
        "Built with React, Node.js, Express.js, and MongoDB."
      ]
    },
    {
      title: "Doctor Appointment System",
      description: "A full-stack web application where patients can book appointments with doctors, and admins can manage doctors, appointments, and earnings.",
      image: d,
      githubLink: "https://github.com/Vasuaghera/Doctor_appointment_booking_system",
      liveLink: "https://doctor-appointment-booking-system-jade.vercel.app/",
      moreDetails: [
        "Full-stack application enabling patients to book appointments with doctors.",
        "Role-based dashboards for patients, doctors, and admins to manage profiles and appointments.",
        "Secure user authentication with login and registration.",
        "Email notifications to users.",
        "Admin panel to manage doctors, appointments, and view earnings.",
        "Built with React, Express.js, MongoDB."
      ]
    },
    {
      title: "French Elite Clothing Store",
      description: "A modern e-commerce clothing store platform featuring product management, and cart functionality.",
      image: f,
      githubLink: "https://github.com/Vasuaghera/Clothing-Website",
      liveLink: "https://clothing-website-frontend3.onrender.com/",
      moreDetails: [
        "E-commerce website for browsing and purchasing clothing products.",
        "Admin panel for product and order management.",
        "Shopping cart functionality with product add/remove and checkout flow..",
        "User authentication and secure account management.",
        "Fast, modern UI built with React and Vite.",
        "Backend powered by Node.js, Express.js, and MongoDB for data handling."
      ]
    },
    {
      title: "AI Code Reviewer",
      description: "A full-stack web application that uses Google Gemini AI to provide intelligent code review suggestions. Built with React, Node.js, and Express.",
      image: aicodereview,
      githubLink: "https://github.com/Vasuaghera/Ai-code-reviewer",
      liveLink: "https://ai-code-reviewer-efez.vercel.app/",
      moreDetails: [
        "AI-powered code analysis using Google Gemini AI for intelligent code review.",
        "Real-time feedback with instant suggestions and improvements for submitted code.",
        "Modern UI with clean, responsive interface built with Tailwind CSS.",
        "Cross-platform compatibility working on any modern web browser."
      ]
    },
    {
      title: "Authentication App",
      description: "A secure authentication app with email/password login, Google OAuth, password reset, and OTP verification.",
      image: a,
      githubLink: "https://github.com/Vasuaghera/Authentication-App",
      liveLink: "https://authentication-app-9.onrender.com/",
      moreDetails: [
        "Secure authentication system supporting email/password login and Google OAuth.",
        "OTP verification.",
        "User profile management with options to update details.",
        "Password reset functionality via email to enhance account security.",
        "Implemented JWT for secure session management.",
        "Built using React, Node.js, Express.js, MongoDB, JWT, and OAuth."
      ]
    }
  ];

  const reactProjects = [
    {
      title: "Tic-Tac-Toe Game",
      description: "A modern, animated Tic-Tac-Toe game built with React and Tailwind CSS. Features beautiful animations .",
      image: ti,
      githubLink: "https://github.com/Vasuaghera/Tic-tac-toe",
      liveLink: "https://tic-tac-toe-hwhg.onrender.com/",
      moreDetails: [
        "Two-player Tic-Tac-Toe with intuitive interactions.",
        "Smooth transitions and visual feedback enhance user experience.",
        "Adds celebratory animations when a player wins.",
        "Optimized for various devices, ensuring consistent gameplay across screen sizes.",
        "Modern aesthetic with transparent elements and subtle shadows.",
        "Built with React, Tailwind CSS, and Vite"
      ]
    },
    {
      title: "Crypto Price Tracker",
      description: "A responsive React application that displays real-time prices of cryptocurrencies. Features include a search functionality and interactive charts for price analysis.",
      image: cp,
      githubLink: "https://github.com/Vasuaghera/Crypto-Price-Tracker",
      liveLink: "https://crypto-price-tracker-7doy.vercel.app/",
      moreDetails: [
        "Fetches and displays up-to-date prices of the top 100 cryptocurrencies using the CoinGecko API.",
        "Allows users to search for specific cryptocurrencies by name . ",
        "Utilizes Chart.js to present historical price data in an engaging visual format.",
        "Temperature, humidity, and wind speed details",
        "Ensures optimal viewing experience across various devices and screen sizes.",
        "Implements a dark-themed user interface for better visual comfort."
      ]
    }
  ];

  const coreProjects = [
    {
      title: "RideEase – Object-Oriented Ride Booking System",
      description: "A console-based ride booking system developed in C++ using object-oriented programming principles. Features include user ride booking, fare calculation .",
      image: oops,
      githubLink: "https://github.com/Vasuaghera/RideEase-Object-Oriented-Ride-Booking-System-in-C-",
      // liveLink: "https://github.com/Vasuaghera/RideEase-Object-Oriented-Ride-Booking-System-in-C-",
      moreDetails: [
        "Utilizes classes and objects to encapsulate functionalities like user management, ride booking, and fare calculation.",
        "Enables users to book rides by providing pickup and drop-off locations.",
        "Calculates fares based on distance and predefined rates, providing users with cost estimates.",
        "Built with C++"
      ]
    }
  ];

  return (
    <motion.section // Changed section to motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }} // Added initial animation state
      whileInView={{ opacity: 1, y: 0 }} // Added whileInView animation state
      transition={{ duration: 0.7 }} // Added transition properties
      viewport={{ once: true }} // Ensures animation plays only once
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div // Changed div to motion.div
          initial={{ opacity: 0, y: 20 }} // Added initial animation state
          whileInView={{ opacity: 1, y: 0 }} // Added whileInView animation state
          transition={{ duration: 0.5 }} // Added transition properties
          viewport={{ once: true }} // Ensures animation plays only once
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
          <motion.div // Changed div to motion.div
            initial={{ opacity: 0, y: 20 }} // Added initial animation state
            whileInView={{ opacity: 1, y: 0 }} // Added whileInView animation state
            transition={{ duration: 0.5, delay: 0.2 }} // Added transition properties
            viewport={{ once: true }} // Ensures animation plays only once
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
              <motion.div // Changed div to motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Added initial animation state
                whileInView={{ opacity: 1, y: 0 }} // Added whileInView animation state
                transition={{ duration: 0.5, delay: index * 0.1 }} // Added transition properties with staggered delay
                viewport={{ once: true }} // Ensures animation plays only once
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* React Projects */}
        <div className="mb-20">
          <motion.div // Changed div to motion.div
            initial={{ opacity: 0, y: 20 }} // Added initial animation state
            whileInView={{ opacity: 1, y: 0 }} // Added whileInView animation state
            transition={{ duration: 0.5, delay: 0.2 }} // Added transition properties
            viewport={{ once: true }} // Ensures animation plays only once
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
              <motion.div // Changed div to motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Added initial animation state
                whileInView={{ opacity: 1, y: 0 }} // Added whileInView animation state
                transition={{ duration: 0.5, delay: index * 0.1 }} // Added transition properties with staggered delay
                viewport={{ once: true }} // Ensures animation plays only once
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Subject Projects */}
        <div>
          <motion.div // Changed div to motion.div
            initial={{ opacity: 0, y: 20 }} // Added initial animation state
            whileInView={{ opacity: 1, y: 0 }} // Added whileInView animation state
            transition={{ duration: 0.5, delay: 0.2 }} // Added transition properties
            viewport={{ once: true }} // Ensures animation plays only once
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
              <motion.div // Changed div to motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Added initial animation state
                whileInView={{ opacity: 1, y: 0 }} // Added whileInView animation state
                transition={{ duration: 0.5, delay: index * 0.1 }} // Added transition properties with staggered delay
                viewport={{ once: true }} // Ensures animation plays only once
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
