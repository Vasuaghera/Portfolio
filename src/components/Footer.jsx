import React from 'react';
import { motion } from "framer-motion"; // Added framer-motion import

const Footer = () => {
    return (
      <motion.footer // Changed footer to motion.footer
        initial={{ opacity: 0, y: 40 }} // Added initial animation state
        whileInView={{ opacity: 1, y: 0 }} // Added whileInView animation state
        transition={{ duration: 0.7 }} // Added transition properties
        viewport={{ once: true }} // Ensures animation plays only once
        className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Vasu Aghera Porfolio. All rights reserved.
          </p>
        </div>
      </motion.footer>
    );
  };
  
  export default Footer;
  