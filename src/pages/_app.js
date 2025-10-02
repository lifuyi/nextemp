import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://api.openweathermap.org"></link>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_location: window.location.href,
              page_title: document.title,
            });
          `,
        }}
      />
      <main
        className={`${montserrat.variable} font-mont bg-gradient-to-br from-light/90 via-light to-appleGray/20 
        dark:from-light/5 dark:via-light/2 dark:to-appleGray/5 w-full min-h-screen h-full`}
      >
        <ErrorBoundary>
          <Navbar />
          <AnimatePresence initial={false} mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </ErrorBoundary>
      </main>
    </>
  );
}
