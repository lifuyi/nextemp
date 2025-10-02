import Link from "next/link";
import { useRouter } from "next/router";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

const CustomError = ({ statusCode }) => {
  const router = useRouter();
  
  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>{statusCode ? `${statusCode} Error` : 'Error'} | Frank Li</title>
        <meta name="description" content="An error occurred on the website" />
      </Head>
      
      <TransitionEffect />
      <main className="h-[100vh] w-full dark:bg-dark">
        <Layout className="relative !bg-transparent !pt-16 flex flex-col items-center justify-center">
          <AnimatedText 
            text={statusCode ? `${statusCode}` : "Error"} 
            className="!text-8xl md:!text-7xl sm:!text-6xl" 
          />
          <AnimatedText 
            text={statusCode === 404 ? "Page Not Found" : "Something went wrong"} 
            className="!text-5xl md:!text-4xl sm:!text-3xl !mt-4" 
          />
          
          <p className="my-8 text-center text-lg md:text-base sm:text-sm max-w-md">
            {statusCode === 404 
              ? "The page you're looking for doesn't exist or has been moved." 
              : "An unexpected error occurred. Please try again later."}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleGoBack}
              className="inline-block rounded-lg border-2 border-solid bg-dark px-6 py-3
                font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                transition-all duration-300 cursor-pointer"
            >
              Go Back
            </button>
            
            <Link
              href="/"
              className="inline-block rounded-lg border-2 border-solid bg-dark px-6 py-3
                font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                transition-all duration-300"
            >
              Go Home
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
};

// This gets called on every request
CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;