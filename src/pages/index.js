import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/Riley.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frank Li - Business Development Director</title>
        <meta
          name="description"
          content="Frank Li - Experienced BD Director with 15+ years in strategic partnerships, fintech, and international business development"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-appleTextDark dark:text-appleTextLight sm:items-start`}
      >
        <Layout className="!pt-8 md:!pt-6 sm:!pt-8">
          <div className="flex w-full items-center justify-between md:flex-col pt-4 pb-16 md:pt-2 md:pb-12">
            <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit">
              {
                <Image
                  priority={true}
                  src={profilePic}
                  alt="image"
                  className="h-auto w-100"
                  height={340}
                  width={340}
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hey, I'm Frank Li"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl !whitespace-nowrap"
                gradient={true}
              />
              <div className="w-full lg:!justify-center sm:!justify-center md:!text-center">
                <h2 className="font-bold !text-4xl xl:!text-3xl lg:!text-3xl md:!text-4xl sm:!text-2xl bg-gradient-to-r from-appleBlue via-appleGreen to-applePurple bg-clip-text text-transparent animate-gradient leading-relaxed mb-6">
                  I drive business growth through strategic partnerships.
                </h2>
              </div>

              <div className="max-w-2xl mb-6">
                <p className="text-lg font-medium leading-relaxed text-appleSecondary dark:text-appleTextLight/80 mb-4 md:text-base sm:text-sm">
                  I'm the <span className="font-semibold text-appleBlue dark:text-appleBlue">Founder of Chinida.com</span> (since Oct 2023), focusing on AI coding, software development, and digital products.
                </p>
                <p className="text-lg font-medium leading-relaxed text-appleSecondary dark:text-appleTextLight/80 md:text-base sm:text-sm">
                  With <span className="font-semibold text-appleGreen">15+ years of experience</span> in business development and strategic partnerships with global tech companies, I combine technical expertise with business acumen to drive innovation in AI and software solutions.
                </p>
              </div>
              <div className="flex items-center self-start gap-4 lg:self-center lg:flex-wrap lg:justify-center md:gap-3 sm:gap-2">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`apple-button flex items-center justify-center h-12 px-8 text-lg font-semibold
            capitalize text-white hover:scale-105 hover:shadow-apple-lg 
            md:h-10 md:px-6 md:text-base transition-all duration-300
             `}
                >
                  About Me
                </Link>
                <Link
                  href="/projects/"
                  target={"_self"}
                  className={`apple-button flex items-center justify-center h-12 px-8 text-lg font-semibold
            capitalize text-white hover:scale-105 hover:shadow-apple-lg 
            md:h-10 md:px-6 md:text-base transition-all duration-300
             `}
                >
                  Achievements
                </Link>
                <Link
                  href="/gallery/"
                  target={"_self"}
                  className={`apple-button flex items-center justify-center h-12 px-8 text-lg font-semibold
            capitalize text-white hover:scale-105 hover:shadow-apple-lg 
            md:h-10 md:px-6 md:text-base transition-all duration-300
             `}
                >
                  Gallery
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
