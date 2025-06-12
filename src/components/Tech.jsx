import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    inital : {y : -10} ,
    animate : {
        y : [10,-10] ,
        transition : {
            duration : duration ,
            ease : "linear" ,
            repeat : Infinity ,
            repeatType : "reverse" ,
        }
    }
})

const Tech = () => {
  return (
    <div id="Technology" className="pb-24">
        <motion.h2
            whileInView={{opacity: 1 , y: 0}} 
            initial={{opacity:0 , y : -100}}
            transition={{duration: 1.5}}
            viewport={{ once: true }}
        className="my-20 text-center text-4xl">
            Technologies
        </motion.h2>
        <motion.div
             whileInView={{opacity: 1 , x: 0}} 
             initial={{opacity:0 , x : -100}}
             transition={{duration: 1.5}}
             viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
            >
                <RiTailwindCssFill className="text-7xl text-cyan-500"/>
            </motion.div>
            <motion.div
             initial="initial"
             animate="animate"
             variants={iconVariants(1)}
            >
                <RiReactjsLine className="text-7xl text-cyan-500"/>
                </motion.div>
            <motion.div
             initial="initial"
             animate="animate"
             variants={iconVariants(5)}
            >
                <SiRedux className="text-6xl text-[#6d28d9]"/>
                </motion.div>
            <motion.div
             initial="initial"
             animate="animate"
             variants={iconVariants(3)}
            >
                <SiMongodb className="text-6xl text-[#059669]"/>
                </motion.div>
            <motion.div
             initial="initial"
             animate="animate"
             variants={iconVariants(7)}
            >
                <SiExpress className="text-6xl text-white"/>
                </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Tech