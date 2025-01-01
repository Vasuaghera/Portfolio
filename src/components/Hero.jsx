import React from 'react';
import profile from "../asset/profile.webp";
import { HERO_CONTENT } from '../content';
import { motion } from "framer-motion";

const containerVariation = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6 },
  },
};

const Hero = () => {
  return (
    <div id="home" className='lg:mt-[4rem] pb-4 lg:mb-36'>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img 
            src={profile} 
            alt="Profile" 
            className='mx-auto border mt-10 border-transparent rounded-[100%]'
          />
        </div>
        <div className='w-full lg:w-1/2'>
          <div 
            variants={containerVariation}
            className='flex flex-col items-center lg:items-start mt-10'
          >
            <h2
              className='pb-2 text-4xl tracking-tighter lg:text-6xl'>
              Vasu Aghera
            </h2>
            <span 
              className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent text-[1.6rem] tracking-tighter'>
              DSA & development enthusiast
            </span>
            <p 
              className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
              {HERO_CONTENT}
            </p>  
            <a 
              variants={childVariants}
              href="/resume.pdf"
              target='_blank'
              rel='noopener noreferrer'
              download
              className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'
            >
              Download Resume
            </a>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
