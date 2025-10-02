import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/Riley.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";
import PhotoGallery from "@/components/PhotoGallery";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

// Sample working photos - using actual existing images
const workingPhotos = [
  {
    src: "/images/profile/Riley.png",
    alt: "Profile Photo",
    title: "Professional Profile",
    description: "Professional headshot for business use"
  },
  {
    src: "/images/projects/clay-theme.png",
    alt: "Clay Theme Project",
    title: "Clay Gatsby Theme",
    description: "A beautiful Gatsby theme for developers and designers"
  },
  {
    src: "/images/articles/Clay-Gatsby-theme.webp",
    alt: "Clay Gatsby Theme Screenshot",
    title: "Theme Development",
    description: "Creating beautiful themes with modern web technologies"
  },
  {
    src: "/images/articles/GTA6-VICE.gif",
    alt: "GTA6 VICE Game Preview",
    title: "Game Development Interest",
    description: "Following the latest in game development and design"
  },
  {
    src: "/images/articles/My-MacBook-Setup-For-Development-2024.webp",
    alt: "Development Setup",
    title: "Development Environment",
    description: "Optimized setup for efficient coding and development work"
  },
  {
    src: "/images/projects/clay-theme.png",
    alt: "Project Showcase",
    title: "Project Development",
    description: "Showcasing development work and technical projects"
  }
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Frank Li</title>
        <meta
          name="description"
          content="Learn about Frank Li's 15+ years of experience in business development, strategic partnerships, and international business with major tech companies"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Driving Growth Through Strategic Partnerships 🚀"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            gradient={true}
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <div className="mb-6">
                <h2 className="mb-3 text-2xl font-bold bg-gradient-to-r from-appleBlue to-appleGreen bg-clip-text text-transparent">
                  BIOGRAPHY
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-appleBlue to-appleGreen rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-appleSecondary dark:text-light/90">
                <p className="text-lg font-medium leading-relaxed">
                  I'm <span className="font-bold text-appleBlue">Frank (FUYI) Li</span>, Founder of <span className="font-semibold text-appleGreen">Chinida.com</span> (since Oct 2023), a company focused on AI coding, 
                  software development, and digital products. With <span className="font-semibold text-appleOrange">15+ years of experience</span> in strategic partnerships 
                  and international business, plus dual Master's degrees from <span className="font-medium text-applePurple">Monash University (IT)</span> and <span className="font-medium text-applePurple">Harbin 
                  Institute of Technology (Law)</span>, I combine technical expertise with business leadership.
                </p>
                
                <div className="bg-gradient-to-r from-appleBlue/5 to-appleGreen/5 p-6 rounded-2xl border-l-4 border-appleBlue">
                  <p className="text-lg font-medium leading-relaxed">
                    Now as Founder of <span className="font-semibold text-appleGreen">Chinida.com</span>, I'm leveraging my extensive background from major tech companies 
                    including <span className="font-semibold text-appleBlue">MOMO (NASDAQ)</span>, <span className="font-semibold text-appleBlue">Sina Weibo (NASDAQ)</span>, and European fintech firms to build innovative 
                    AI and software solutions. My previous experience includes partnerships with <span className="font-medium text-appleOrange">Apple, Huawei, 
                    Alipay, PayPal</span>, managing teams that drove millions in revenue growth, and deep expertise in 
                    payment systems, mobile partnerships, and international market expansion.
                  </p>
                </div>
                
                <p className="text-lg font-medium leading-relaxed">
                  With <span className="font-semibold text-appleGreen">fluent English communication skills</span> and a peaceful, integrity-driven personality, 
                  I excel at building lasting international partnerships and driving performance-oriented 
                  results. My unique combination of <span className="font-medium text-applePurple">technical background and business expertise</span> enables 
                  deep collaboration with both technical teams and C-level executives.
                </p>
              </div>
            </div>
            <div
              className="relative col-span-3 h-max apple-card p-8 
            xl:col-span-4 md:col-span-8 md:order-1 hover:shadow-apple-lg 
            transition-all duration-300"
            >
              <div
                className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] 
                bg-gradient-to-br from-appleBlue/20 to-appleBlue/10 blur-xl"
              />
              <Image
                className="h-auto w-full rounded-3xl shadow-apple-xl"
                priority={true}
                src={profile}
                alt="Frank Li"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={15} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Years Experience
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Strategic Partners
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={100} />M+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Revenue Driven
                </h3>
              </div>
            </div>
            <HireMe2 />
          </div>

          <Skills />
          <Experience />
          <PhotoGallery photos={workingPhotos} />
        </Layout>
      </main>
    </>
  );
}
