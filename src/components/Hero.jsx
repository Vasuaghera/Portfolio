import React from 'react';
import profile from "../asset/profile.webp";
import { HERO_CONTENT } from '../content';
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

const containerVariation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div 
            variants={containerVariation}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={childVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                />
                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Vasu</span>
                  </h1>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/50 to-blue-400/50 rounded-full"></div>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed pl-4">
                  {HERO_CONTENT}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  variants={childVariants}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <FiDownload className="w-5 h-5" />
                  Download Resume
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                <motion.div variants={childVariants} className="flex gap-4">
                  <a
                    href="https://github.com/vasuaghera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-200 hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <FiGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/vasu-aghera-375052251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-200 hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <FiLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:vasuaghera33@gmail.com"
                    className="p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-200 hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <FiMail className="w-6 h-6" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Circular border container */}
              <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
                {/* Inner white/dark background */}
                <div className="relative rounded-full bg-white dark:bg-gray-900 p-1">
                  <img 
                    src={profile} 
                    alt="Vasu Aghera" 
                    className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
