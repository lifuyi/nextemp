import { motion } from "framer-motion";
import React from "react";

const quote = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  hidden: {
    opacity: 0.2,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const gradientWord = {
  hidden: {
    opacity: 1,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const AnimatedText = ({ text, className = "", gradient = false }) => {
  // Apple-like gradient animation
  const gradientClasses = gradient 
    ? "bg-gradient-to-r from-appleBlue via-appleGreen to-appleBlue bg-clip-text text-transparent animate-gradient" 
    : "";
    
  // Special handling for "Frank Li" to keep it on one line
  const isFrankLi = text.includes("Frank Li");
  
  // Choose the right animation variant
  const wordVariants = gradient ? gradientWord : singleWord;
  
  return (
    <div
      className="py-2 w-full mx-auto flex flex-col items-center justify-center  text-center  
    overflow-hidden sm:py-0"
    >
      <motion.h1
        className={`inline-block ${gradient ? gradientClasses : 'text-dark dark:text-light'}
      text-8xl font-bold w-full capitalize ${className} xl:text-6xl`}
        variants={quote}
        initial="hidden"
        animate="visible"
      >
        {isFrankLi ? (
          // Keep "Frank Li" together on one line
          <>
            <motion.span
              className="inline-block"
              variants={wordVariants}
            >
              Hey, I'm 
            </motion.span>
            <motion.span
              className="inline-block"
              variants={wordVariants}
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
                variants={wordVariants}
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
