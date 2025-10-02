import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-gradient-to-br from-light/90 via-light to-appleGray/30 
      dark:from-light/10 dark:via-light/5 dark:to-appleGray/10 backdrop-blur-sm
      p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
