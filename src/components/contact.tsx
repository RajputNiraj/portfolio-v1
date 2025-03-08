"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center w-[min(100%,37.5rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      {/* <p className="text-gray-700 mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:rajputniraj167@gmail.com">
          rajputniraj167@gmail.com
        </a>{" "}
        or through this form.
      </p> */}

      <p className="text-gray-700 mt-6 dark:text-white/80">
        Feel free to reach out via{" "}
        <a
          className="font-medium hover:underline inline-flex items-center gap-1"
          href="mailto:rajputniraj167@gmail.com"
        >
          <FiMail /> rajputniraj167@gmail.com
        </a>{" "}
        or use the contact form below. I typically respond within 24 hours.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <LabelInputContainer className="mb-4">
          <Input
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Input
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            textarea
          />
        </LabelInputContainer>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
