import { motion } from "framer-motion";
import React from "react";

const quote = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const singleWord = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const AnimatedText = ({ text, className = "", gradient = false }) => {
  // Enhanced gradient with more obvious blue transitions
  const gradientClasses = gradient 
    ? "bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient" 
    : "";
    
  // Special handling for "Frank Li" to keep it on one line
  const isFrankLi = text.includes("Frank Li");
  
  return (
    <div
      className="py-2 w-full mx-auto flex flex-col items-center justify-center  text-center  
    overflow-hidden sm:py-0"
    >
      <motion.h1
        className={`inline-block text-dark dark:text-light
      text-8xl font-bold w-full capitalize ${gradientClasses} ${className} xl:text-6xl`}
        variants={quote}
        initial="hidden"
        animate="visible"
      >
        {isFrankLi ? (
          // Keep "Frank Li" together on one line
          <>
            <motion.span
              className="inline-block"
              variants={singleWord}
            >
              Hey, I'm 
            </motion.span>
            <motion.span
              className="inline-block"
              variants={singleWord}
            >
              Frank Li
            </motion.span>
          </>
        ) : (
          // Normal word splitting for other texts
          text.split(" ").map((char, index) => {
            return (
              <motion.span
                className="inline-block"
                key={char + "-" + index}
                variants={singleWord}
              >
                {char} 
              </motion.span>
            );
          })
        )}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
