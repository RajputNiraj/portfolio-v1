"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a final-year Computer Engineering student with a passion for
        problem-solving and building innovative solutions. Currently, I am
        enhancing my skills through a coding bootcamp, focusing on full-stack
        web development. My core stack is{" "}
        <span className="font-medium">JavaScript</span>,{" "}
        <span className="font-medium">React.js</span>, and{" "}
        <span className="font-medium">Tailwind CSS</span>, and I am actively
        expanding my knowledge in backend development to become a proficient
        full-stack developer. I am seeking a part-time software developer role
        where I can apply my skills and contribute to meaningful projects.
      </p>
      <p>
        Outside of coding, I enjoy traveling, gaming, and watching anime. These
        hobbies not only help me recharge but also inspire creativity in my
        work. I am excited to continue growing in the tech industry and look
        forward to tackling new challenges while delivering impactful solutions.
      </p>
    </motion.section>
  );
}
