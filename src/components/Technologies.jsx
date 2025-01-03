import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import PythonIcon from "../assets/python.svg";
import JavaIcon from "../assets/java.svg";
import CppIcon from ".../assests/c++.svg"
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { 
        y: [10, -10],
        transition: { duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
    },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{ y: 0, opacity: 1}} 
            initial={{ y: -100, opacity: 0}}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div 
            whileInView={{ x: 0, opacity: 1}} 
            initial={{ x: -100, opacity: 0}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-3">
                <img src={PythonIcon} className="h-20 w-20" />
            </motion.div>
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-3">
                <img src={CppIcon} className="h-20 w-20" />
            </motion.div>
            <motion.div 
                variants={iconVariants(1.1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-3">
                <img src={JavaIcon} className="h-20 w-20" />
            </motion.div>
            <motion.div 
                variants={iconVariants(1.2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-yellow-300 "/>
            </motion.div>
            <motion.div 
                variants={iconVariants(1.3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-600"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(1.4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400 "/>
            </motion.div>
            <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
        </motion.div >
    </div>
  )
}

export default Technologies