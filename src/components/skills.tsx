"use client";

import React, { JSX } from "react";
import { categorizedSkills } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaCode, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

// Icon mapping for each skill
const skillIcons: { [key: string]: JSX.Element } = {
  // Frontend
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  Redux: <SiRedux />,
  "Tailwind CSS": <SiTailwindcss />,
  "Framer Motion": <FaCode />,

  // Backend
  "Node.js": <FaNodeJs />,
  "Express.js": <FaCode />,

  // Databases
  MongoDB: <SiMongodb />,

  // Tools
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
};

/*
const categorizedSkills = {
  "Frontend Technologies": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Framer Motion",
  ],
  "Backend Technologies": ["Node.js", "Express.js", "REST API"],
  Databases: ["MongoDB"],
  Tools: ["Git", "GitHub"],
};
*/

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      {Object.entries(categorizedSkills).map(
        ([category, skills], categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 dark:text-white/80">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="bg-white hover:bg-gray-100 border hover:scale-105  transition-all cursor-pointer   border-gray-300 dark:border-gray-700 rounded-xl px-5 py-2 dark:bg-white/5 dark:hover:bg-white/10"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="flex items-center gap-2">
                    <span className="">{skillIcons[skill] || <FaCode />}</span>
                    {skill}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        )
      )}
    </section>
  );
}
