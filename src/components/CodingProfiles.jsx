import React from 'react';
import { motion } from "framer-motion";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";
import { FiCode } from 'react-icons/fi'; // For GeeksforGeeks

const CodingProfiles = () => {
  const codingProfiles = [
    {
      name: "LeetCode",
      icon: <SiLeetcode className="w-6 h-6 text-yellow-500" />,
      link: "https://leetcode.com/u/_Vasu_aghera______/", // Replace with your LeetCode profile URL
      rank: "Knight",
      maxRating: "1882",
    },
    {
      name: "Codeforces",
      icon: <SiCodeforces className="w-6 h-6 text-blue-500" />,
      link: "https://codeforces.com/profile/vassu.ag", // Replace with your Codeforces profile URL
      rank: "Pupil",
      maxRating: "1244",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef className="w-6 h-6 text-orange-500" />,
      link: "https://www.codechef.com/users/vassu_ag", // Replace with your CodeChef profile URL
    },
    {
      name: "GeeksforGeeks",
      icon: <FiCode className="w-6 h-6 text-green-500" />,
      link: "https://www.geeksforgeeks.org/user/vasuagh57is/", // Replace with your GFG profile URL
    },
    // Add more profiles as needed
    // {
    //   name: "HackerRank",
    //   icon: <FaHackerrank className="w-6 h-6 text-green-500" />,
    //   link: "https://www.hackerrank.com/your-username",
    // },
    // {
    //   name: "CodeChef",
    //   icon: <SiCodechef className="w-6 h-6 text-orange-500" />,
    //   link: "https://www.codechef.com/users/your-username",
    // },
  ];

  return (
    <section
      id="coding-profiles"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Coding Profiles
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my competitive programming and problem-solving journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                {profile.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {profile.name}
                </h3>
                {profile.rank && profile.maxRating ? (
                  <div>
                     <p className="text-gray-600 m-1 dark:text-gray-400">Rating : {profile.rank} {" "}, Max Rating: {profile.maxRating}</p>
                     <p className="text-gray-600 m-1 dark:text-gray-400">View Profile</p>
                    </div>
                 
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">View Profile</p>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles; 