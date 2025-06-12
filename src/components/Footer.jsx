import { motion } from "framer-motion";

const Footer = () => {
    return (
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
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
  