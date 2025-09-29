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
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
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
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                gradient={true}
              />
              <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  I drive business growth through strategic partnerships.
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                I'm the Founder of Chinida.com (since Oct 2023), focusing on AI coding, software development, and digital products. 
                With 15+ years of experience in business development and strategic partnerships with global tech companies, 
                I combine technical expertise with business acumen to drive innovation in AI and software solutions.
              </p>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-3 lg:self-center lg:grid lg:grid-cols-1">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`apple-button flex items-center p-3 px-8 text-lg font-semibold
            capitalize text-white hover:scale-105 hover:shadow-apple-lg 
            md:p-2.5 md:px-6 md:text-base transition-all duration-300
             `}
                >
                  About Me
                </Link>
                <Link
                  href="/projects/"
                  target={"_self"}
                  className={`flex items-center apple-card p-3 px-8 text-lg font-semibold
            capitalize text-appleBlue hover:scale-105 hover:shadow-apple-lg border-0
            md:p-2.5 md:px-6 md:text-base transition-all duration-300
             `}
                >
                  Achievements
                </Link>
                <Link
                  href="/gallery/"
                  target={"_self"}
                  className={`flex items-center apple-card p-3 px-8 text-lg font-semibold
            capitalize text-appleGreen hover:scale-105 hover:shadow-apple-lg border-0
            md:p-2.5 md:px-6 md:text-base transition-all duration-300
             `}
                >
                  📸 Gallery
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
