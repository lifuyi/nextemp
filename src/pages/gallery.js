import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import PhotoGallery from "@/components/PhotoGallery";

// Working photos data - using actual existing images
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
  }
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Photo Gallery | Frank Li</title>
        <meta
          name="description"
          content="Photo gallery showcasing Frank Li's professional journey, business meetings, presentations, and team collaborations"
        />
      </Head>

      <TransitionEffect />
      <main className={`flex w-full flex-col items-center justify-center dark:text-light`}>
        <Layout className="pt-16">
          <AnimatedText
            text="Professional Journey in Pictures 📸"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            gradient={true}
          />
          
          <div className="w-full mb-16">
            <p className="text-xl text-center text-appleSecondary dark:text-light/75 max-w-4xl mx-auto">
              A visual story of my professional journey from strategic partnerships at major tech companies 
              to founding Chinida.com. These photos capture key moments in business development, 
              international collaborations, and team building.
            </p>
          </div>

          <PhotoGallery photos={workingPhotos} />
          
          <div className="mt-16 flex items-center justify-center gap-6">
            <a
              href="/about"
              className="apple-button flex items-center p-3 px-8 text-lg font-semibold
              capitalize text-white hover:scale-105 hover:shadow-apple-lg 
              md:p-2.5 md:px-6 md:text-base transition-all duration-300"
            >
              Learn More About Me
            </a>
            <a
              href="/contact"
              className="flex items-center apple-card p-3 px-8 text-lg font-semibold
              capitalize text-appleBlue hover:scale-105 hover:shadow-apple-lg border-0
              md:p-2.5 md:px-6 md:text-base transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </Layout>
      </main>
    </>
  );
}