import React from 'react'
import { CONTACT } from "../content"
import { motion } from "framer-motion"
import terminal from '../asset/terminal.png';
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact" className="border-t border-stone-900 py-8 md:py-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl md:text-4xl font-semibold mb-6 md:mb-16"
      >
        Get in Touch
      </motion.h2>

      <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-2 md:px-4">
        <div className="relative w-full">
          {/* Terminal image */}
          <motion.img 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-[310px] sm:h-[330px] md:h-auto max-w-4xl mx-auto rounded-lg shadow-lg" 
            src={terminal} 
            alt="Terminal background" 
          />

          {/* Content wrapper - centered vertically */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-2xl px-3 md:px-6">
              <div className="flex flex-col items-center gap-4 md:gap-10 text-gray-300">
                {/* Contact Info */}
                <div className="space-y-2 md:space-y-6 text-center w-full">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-2 md:gap-3 text-sm md:text-2xl"
                  >
                  </motion.div>

                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-2 md:gap-3 text-sm md:text-2xl"
                  >
                    <MdEmail className="text-gray-400" />
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors break-all">
                      {CONTACT.email}
                    </a>
                  </motion.div>
                </div>

                {/* Social Media Section */}
                <motion.div 
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full space-y-2 md:space-y-4"
                >
                  <motion.h3
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="text-xs md:text-xl font-medium text-center text-gray-400"
                  >
                    Social Media Platforms
                  </motion.h3>
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center gap-4 md:gap-8"
                  >
                    <a 
                      href="https://www.linkedin.com/in/vasu-aghera-375052251/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="LinkedIn"
                      className="hover:scale-110 hover:text-white transition-all duration-300"
                    >
                      <FaLinkedin className="text-lg md:text-4xl" />
                    </a>
                    <a 
                      href="https://github.com/vasuaghera" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Github"
                      className="hover:scale-110 hover:text-white transition-all duration-300"
                    >
                      <FaGithub className="text-lg md:text-4xl" />
                    </a>
                  </motion.div>
                </motion.div>

                {/* Coding Platforms Section */}
                <motion.div 
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full space-y-2 md:space-y-4"
                >
                  <motion.h3 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="text-xs md:text-xl font-medium text-center text-gray-400"
                  >
                    Coding Platforms
                  </motion.h3>
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center gap-4 md:gap-8"
                  >
                    <a 
                      href="https://codeforces.com/profile/Vasu_aghera" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Codeforces"
                      className="hover:scale-110 hover:text-white transition-all duration-300"
                    >
                      <SiCodeforces className="text-lg md:text-4xl" />
                    </a>
                    <a 
                      href="https://leetcode.com/u/_Vasu_aghera______/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Leetcode"
                      className="hover:scale-110 hover:text-white transition-all duration-300"
                    >
                      <SiLeetcode className="text-lg md:text-4xl" />
                    </a>
                    <a 
                      href="https://www.codechef.com/users/vasu_aghera" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Codechef"
                      className="hover:scale-110 hover:text-white transition-all duration-300"
                    >
                      <SiCodechef className="text-lg md:text-4xl" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;