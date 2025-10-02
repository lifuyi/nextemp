import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  XIcon,
  LinkedInIcon,
  GithubIcon,
  MoonIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} rounded relative group lg:text-appleTextLight lg:dark:text-appleTextDark font-medium text-appleSecondary dark:text-appleGray`}
    >
      {title}
      <span
        className={`
              inline-block h-[2px] bg-appleBlue absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300
              ${router.asPath === href ? "w-full" : "w-0"}
              `}
      >
         
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} rounded relative group lg:text-appleTextLight lg:dark:text-appleTextDark font-medium text-appleSecondary dark:text-appleGray`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              inline-block h-[2px] bg-appleBlue absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300
              ${router.asPath === href ? "w-full" : "w-0"}
              `}
      >
         
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full flex items-center justify-between px-32 pt-10 pb-8 font-medium dark:text-appleTextLight
    lg:px-16 relative z-10 md:px-12 sm:px-8
    "
    >
      <button
        type="button"
        className=" flex-col items-center justify-center hidden lg:flex z-50"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-appleTextDark dark:bg-appleTextLight block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-appleTextDark dark:bg-appleTextLight block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          } my-0.5`}
        ></span>
        <span
          className={`bg-appleTextDark dark:bg-appleTextLight block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center backdrop-blur-md bg-light/90 dark:bg-dark/90 
        rounded-full px-8 py-3 shadow-apple border border-light dark:border-dark">
          <CustomLink className="mr-6" href="/" title="Home" />
          <CustomLink className="mx-6" href="/about" title="About" />
          <CustomLink className="mx-6" href="/projects" title="Achievements" />
          <CustomLink className="mx-6" href="/gallery" title="Gallery" />
          <CustomLink className="ml-6" href="/contact" title="Contact" />
        </nav>
        <nav
          className="flex items-center justify-center flex-wrap backdrop-blur-md 
          bg-light/90 dark:bg-dark/90 rounded-full px-6 py-3 shadow-apple border border-light dark:border-dark ml-4"
        >
          <motion.a
            target={"_blank"}
            className="w-7 mr-3"
            href="https://facebook.com/frank.li"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Connect on Facebook"
          >
            <FacebookIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href="https://x.com/frank_li"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Follow on X"
          >
            <XIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href="https://linkedin.com/in/frank-li"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Connect on LinkedIn"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href="https://github.com/lifuyi"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Check out my GitHub"
          >
            <GithubIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-7 h-7 ease flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-appleBlue text-appleTextLight" : "bg-appleBlue text-appleTextDark"}
            transition-all duration-300`}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-appleTextLight"} />
            ) : (
              <MoonIcon className={"fill-appleTextDark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          className="min-w-[70vw] sm:min-w-[90vw] h-[75vh] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2
      py-32 bg-light/95 dark:bg-dark/95 rounded-2xl z-40 backdrop-blur-md border border-light dark:border-dark
      shadow-2xl"
          initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              toggle={handleClick}
              className="mr-4 lg:m-0 lg:my-4 text-2xl"
              href="/"
              title="Home"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-4 text-2xl"
              href="/about"
              title="About"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-4 text-2xl"
              href="/projects"
              title="Achievements"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-4 text-2xl"
              href="/gallery"
              title="Gallery"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="ml-4 lg:m-0 lg:my-4 text-2xl"
              href="/contact"
              title="Contact"
            />
          </nav>
          <nav
            className="flex items-center justify-center mt-4
      "
          >
            <motion.a
              target={"_blank"}
              className="w-8 mr-4"
              href="https://github.com/lifuyi"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my Github profile"
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-8 mx-4"
              href="https://linkedin.com/in/frank-li"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Connect on LinkedIn"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-8 mx-4"
              href="https://x.com/frank_li"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Follow on X"
            >
              <XIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-8 h-8 ease flex items-center justify-center rounded-full p-2 ml-4
            ${mode === "light" ? "bg-appleBlue text-appleTextLight" : "bg-appleBlue text-appleTextDark"}
            transition-all duration-300`}
              aria-label="theme-switcher"
            >
              {mode === "light" ? (
                <SunIcon className={"fill-appleTextLight"} />
              ) : (
                <MoonIcon className={"fill-appleTextDark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

    </header>
  );
};

export default Navbar;
