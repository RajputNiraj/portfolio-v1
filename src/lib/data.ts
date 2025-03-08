import React from "react";
import petshopImage from "../../public/petshop.png";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "PetShop",
    description:
      "A vibrant landing page for PetShop, offering a range of pet products and services for an engaging user experience.",
    imageUrl: petshopImage,
    demoUrl: "https://pet-shop-lake.vercel.app/",
    githubUrl: "https://github.com/RajputNiraj/pet-shop",
  },
] as const;

export const categorizedSkills = {
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

export const experiencesData = [
  {
    title: "Information Technology",
    location: "Government Polytechnic, Jalgaon, India",
    description:
      "Completed a diploma in Information Technology, gaining a strong foundation in programming, networking, and database management. Developed academic projects that honed problem-solving skills and provided practical experience in software and hardware systems.",
    describe: [""],
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2019 - Aug 2022",
  },
  {
    title: "Computer Engineering",
    location: "Dr. Babasaheb Ambedkar Technological University, India",
    description:
      "Pursuing a Bachelor's in Computer Engineering, focusing on software development, with active participation in coding competitions and collaborative projects.",
    describe: [""],
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2022 - May 2025",
  },
  {
    title: "Cloud and DevOps Intern (Remote)",
    location: "Pune, Maharashtra, India.",
    description:
      "Gaining hands-on experience in DevOps by working with key tools and practices for automation, cloud computing, and infrastructure management, including DevOps fundamentals, Linux system administration, AWS cloud services, version control with Git and GitHub, containerization with Docker and Kubernetes, infrastructure as code using Terraform, monitoring with Nagios and Grafana, and CI/CD automation with Jenkins.",
    describe: [""],
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2025 - Present",
  },
] as const;
