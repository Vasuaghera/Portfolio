import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
import Education from './components/Education'
import { motion, useSpring, useScroll } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <ThemeProvider>
      <div className='text-gray-800 dark:text-gray-200 antialiased transition-colors duration-300 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'> 
        <div className='fixed inset-0 -z-10'>
          <div className="relative h-full w-full transition-colors duration-300">
            {/* The previous background pattern div is removed */}
          </div>
        </div>

        <motion.div
          id="scroll-indicator"
          style={{
            scaleX,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: "#4f4f4f",
          }}
        />
        
        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
