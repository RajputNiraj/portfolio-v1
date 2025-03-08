"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Roboto_Mono } from "next/font/google";
// import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="">
        <p className="text-lg text-slate-600">Loading...</p>
      </div>
    );
  }

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
        >
          Niraj Rajput,
          <br />
          <div className="mt-4">
            <Cover>Frontend</Cover> developer.
          </div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${robotoMono.className} mb-10 mt-4 max-w-lg text-xs leading-relaxed mx-auto`}
        >
          Hi, I am Niraj, a Frontend Developer from India, passionate about
          building websites and apps, with expertise in JavaScript, React.js,
          and Tailwind CSS.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            // className="group flex items-center gap-2 rounded-full  px-6 py-3 text-white shadow-lg transition-all bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
            className="flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-gray-700 transition-all hover:bg-white hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact Me 🚀
            {/* <FiArrowUpRight className="transition-transform group-hover:-rotate-45" /> */}
          </Link>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-gray-700 transition-all hover:bg-white hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            View Resume
            <FaFileDownload className="shrink-0" />
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <a
            href="https://github.com/RajputNiraj"
            target="_blank"
            className="text-gray-400 transition-all hover:text-gray-600 dark:hover:text-gray-200"
          >
            <FaGithub className="h-7 w-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/niraj-rajput-0a36b12a6/"
            target="_blank"
            className="text-gray-400 transition-all hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin className="h-7 w-7" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
