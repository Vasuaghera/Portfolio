import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiX } from 'react-icons/fi';
import wdCert from '../asset/wd.jpeg';
import sdCert from '../asset/sd.jpg';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const certifications = [
    {
      title: "Full Stack Web Development",
      img: wdCert
    },
    {
      title: "System Design Masterclass (2025)",
      img: sdCert,
    }
  ];

  return (
    <motion.section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and training programs that validate my expertise in various technologies.
          </p>
        </motion.div>

        {/* Certifications Timeline */}
        <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="mb-8 flex items-start"
            >
              {/* Timeline Indicator */}
              <div className="absolute left-[-15px] mt-1 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center">
                <FiAward className="w-4 h-4 text-white" />
              </div>

              {/* Certification Content */}
              <div className="flex-1 ml-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <button
                    onClick={() => setSelectedImage(cert.img)}
                    className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <FiExternalLink className="w-3 h-3" />
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FiX className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
      </div>
    </motion.section>
  );
};

export default Certifications;