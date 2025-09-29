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

// Sample working photos - replace with actual photo data
const workingPhotos = [
  {
    src: "/images/gallery/work-1.jpg",
    alt: "Frank Li presenting at Chinida.com launch",
    title: "Chinida.com Launch Event",
    description: "Presenting our AI coding platform to investors and partners"
  },
  {
    src: "/images/gallery/work-2.jpg", 
    alt: "Business meeting with international partners",
    title: "International Partnership Meeting",
    description: "Negotiating strategic partnerships with European fintech companies"
  },
  {
    src: "/images/gallery/work-3.jpg",
    alt: "Frank Li at MOMO headquarters",
    title: "MOMO Leadership Team",
    description: "Leading business development initiatives at MOMO (NASDAQ)"
  },
  {
    src: "/images/gallery/work-4.jpg",
    alt: "Tech conference presentation",
    title: "Industry Conference Speaker",
    description: "Sharing insights on mobile payment innovations and partnerships"
  },
  {
    src: "/images/gallery/work-5.jpg",
    alt: "Team collaboration session",
    title: "Strategy Planning Session",
    description: "Collaborating with technical teams on product development"
  },
  {
    src: "/images/gallery/work-6.jpg",
    alt: "Office workspace",
    title: "Daily Work Environment",
    description: "Managing multiple projects and international partnerships"
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
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                I'm Frank (FUYI) Li, Founder of Chinida.com (since Oct 2023), a company focused on AI coding, 
                software development, and digital products. With 15+ years of experience in strategic partnerships 
                and international business, plus dual Master's degrees from Monash University (IT) and Harbin 
                Institute of Technology (Law), I combine technical expertise with business leadership.
              </p>
              <p className="my-4 font-medium">
                Now as Founder of Chinida.com, I'm leveraging my extensive background from major tech companies 
                including MOMO (NASDAQ), Sina Weibo (NASDAQ), and European fintech firms to build innovative 
                AI and software solutions. My previous experience includes partnerships with Apple, Huawei, 
                Alipay, PayPal, managing teams that drove millions in revenue growth, and deep expertise in 
                payment systems, mobile partnerships, and international market expansion.
              </p>
              <p className="my-4 font-medium">
                With fluent English communication skills and a peaceful, integrity-driven personality, 
                I excel at building lasting international partnerships and driving performance-oriented 
                results. My unique combination of technical background and business expertise enables 
                deep collaboration with both technical teams and C-level executives.
              </p>
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
