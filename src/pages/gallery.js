import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import PhotoGallery from "@/components/PhotoGallery";

// Working photos data - replace with actual photos
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
  },
  {
    src: "/images/gallery/work-7.jpg",
    alt: "Signing partnership agreement",
    title: "Partnership Signing Ceremony",
    description: "Finalizing strategic partnership with major automotive manufacturer"
  },
  {
    src: "/images/gallery/work-8.jpg",
    alt: "Team building event",
    title: "Team Building & Strategy",
    description: "Building strong teams for international market expansion"
  },
  {
    src: "/images/gallery/work-9.jpg",
    alt: "Product demo presentation",
    title: "Product Demonstration",
    description: "Showcasing Chinida.com's AI coding capabilities to potential clients"
  },
  {
    src: "/images/gallery/work-10.jpg",
    alt: "Industry networking event",
    title: "Industry Networking",
    description: "Building relationships at major technology conferences"
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