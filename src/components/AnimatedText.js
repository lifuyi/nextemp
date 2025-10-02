import { motion } from "framer-motion";
import React from "react";

const AnimatedText = ({ text, className = "", gradient = false }) => {
  // Special handling for "Frank Li" to keep it on one line
  const isFrankLi = text.includes("Frank Li");
  
  return (
    <div
      className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center sm:py-0"
    >
      <h1
        className={`inline-block text-appleTextDark dark:text-appleTextLight text-8xl font-bold w-full capitalize ${className} xl:text-6xl`}
        style={gradient ? {
          background: 'linear-gradient(to right, #007AFF, #34C759, #007AFF)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 4s ease infinite',
          lineHeight: '1.3',
          paddingBottom: '0.1em',
          paddingTop: '0.1em'
        } : { 
          lineHeight: '1.3',
          paddingBottom: '0.1em',
          paddingTop: '0.1em'
        }}
      >
        {isFrankLi ? (
          // Keep "Frank Li" together on one line
          <>
            <span className="inline-block">Hey, I'm </span>
            <span className="inline-block" style={{ paddingBottom: '0.05em' }}>Frank Li</span>
          </>
        ) : (
          // Normal word splitting for other texts
          text.split(" ").map((word, index) => {
            return (
              <span
                className="inline-block"
                key={word + "-" + index}
                style={{ paddingBottom: '0.05em' }}
              >
                {word} 
              </span>
            );
          })
        )}
      </h1>
    </div>
  );
};

export default AnimatedText;