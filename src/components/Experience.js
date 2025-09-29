import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Founder & CEO"
            company="CHINIDA.COM"
            time="Oct 2023 - Present"
            address="China"
            companyLink="https://chinida.com"
            work="Founded Chinida.com, a company specializing in AI coding, software development, and digital products sale. Leading the development of innovative AI-powered solutions and software products. Leveraging 15+ years of business development experience to drive growth in the AI and software industry, combining technical expertise with strategic business leadership."
          />

          <Details
            position="BD Lead"
            company="HUAFENG-ACCUWEATHER"
            time="2023.4 - 2023.9"
            address="Beijing, China"
            companyLink="#"
            work="Led business development and sales partnerships for meteorological technology company. Collaborated with major mobile manufacturers (Huawei, Honor, OPPO, VIVO) on data and advertising cooperation. Established data partnerships with automotive manufacturers including SAIC, Great Wall, NIO, and Cherry. Managed over 30 industrial data authorization partners and developed pricing strategies contributing to 100M annual revenue target."
          />

          <Details
            position="VP"
            company="PAYTEND (European Digital Bank)"
            time="2022.8 - 2023.4"
            address="Beijing, China"
            companyLink="#"
            work="Responsible for commercialization, revenue, marketing and client success for European digital banking services. Managed European market expansion for overseas bank account opening, prepaid card issuing, and cross-border payment solutions. Led Client Success department with 5 team members, launched pre and post-sales support, and acquired new users through Google/Facebook campaigns while optimizing APP DAU/MAU and user payment rates."
          />

          <Details
            position="BD Director"
            company="MOMO (NASDAQ)"
            time="2016.08 - 2022.8"
            address="Beijing, China"
            companyLink="https://www.immomo.com"
            work="Led strategic partnerships and business development for major social platform. Managed payment integrations with Alipay, WeChat Pay, PayPal, Visa, Stripe, and international providers. Developed Apple ecosystem relationships including WWDC attendance and App Store recommendations. Built VAS sales channels for MOMO Coin and VIP memberships, achieving over million growth in joint memberships. Established partnerships with 30+ industry companies including Apple, Baidu, Alibaba, Tencent."
          />

          <Details
            position="Senior BD Manager"
            company="SINA WEIBO (NASDAQ)"
            time="2014.04 - 2016.08"
            address="Beijing, China"
            companyLink="https://weibo.com"
            work="Managed strategic partnerships in vertical industries with major tech companies including Baidu, Alibaba, and Tencent. Key projects included Cortana/Satori AI integration for search intelligence, Alipay-Weibo payment foundation setup, VR industry research and investment evaluation, and DiDi product integration into Weibo client. Maintained relationships with key partners and explored new business opportunities."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-3 lg:grid lg:grid-cols-1 lg:gap-4">
        <Link
          href="/projects/"
          target={"_self"}
          className={`apple-card flex items-center p-3 px-6 text-lg font-semibold
            capitalize text-appleBlue hover:scale-105 hover:shadow-apple-lg 
            md:p-2 md:px-4 md:text-base transition-all duration-300
             `}
        >
          View Achievements
        </Link>
        <Link
          href="/gallery/"
          target={"_self"}
          className={`apple-card flex items-center p-3 px-6 text-lg font-semibold
            capitalize text-appleGreen hover:scale-105 hover:shadow-apple-lg 
            md:p-2 md:px-4 md:text-base transition-all duration-300
             `}
        >
          📸 Photo Gallery
        </Link>
        <Link
          href="/contact/"
          target={"_self"}
          className={`apple-button flex items-center p-3 px-6 text-lg font-semibold
            capitalize text-white hover:scale-105 hover:shadow-apple-lg 
            md:p-2 md:px-4 md:text-base transition-all duration-300
             `}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Experience;
