import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-0 border-solid border-dark
    font-base text-sm text-appleSecondary dark:text-light dark:border-light sm:text-xs
    "
    >
      <Layout className="py-8 flex items-center justify-center lg:py-6">
        <div className="flex items-center flex-wrap justify-center text-center">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="mx-2">Contact:</span>
          <Link
            href="mailto:lifuyi@gmail.com"
            className="underline underline-offset-2 hover:text-appleBlue transition-colors"
          >
            lifuyi@gmail.com
          </Link>
          <span className="mx-2">|</span>
          <span>+86 186 1814 0814</span>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
