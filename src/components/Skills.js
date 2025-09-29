import { motion } from "framer-motion";
import React, { useRef } from "react";

const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-default w-max origin-center absolute 
       font-semibold apple-card py-3 px-6 rounded-full text-appleBlue hover:shadow-apple
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:text-appleBlue xs:font-bold
       transition-all duration-300 hover:scale-105"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        ref={ref}
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-default flex rounded-full font-semibold apple-button text-white px-8 py-8 
        lg:p-6 md:p-4 xs:text-xs xs:p-3 hover:shadow-apple-lg transition-all duration-300
        "
        >
          Business Development
        </motion.div>

        <Skill name="Strategic Partnerships" x="-20vw" y="2vw" />
        <Skill name="Payment Systems" x="-5vw" y="-10vw" />
        <Skill name="International Business" x="20vw" y="6vw" />
        <Skill name="Negotiation" x="0vw" y="12vw" />
        <Skill name="Fintech" x="-20vw" y="-15vw" />
        <Skill name="Mobile Partnerships" x="15vw" y="-12vw" />
        <Skill name="Team Leadership" x="-35vw" y="-5vw" />
        <Skill name="Revenue Growth" x="32vw" y="-5vw" />
        <Skill name="Technical Solutions" x="0vw" y="-20vw" />
        <Skill name="Market Expansion" x="-25vw" y="18vw" />
        <Skill name="English Communication" x="28vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
