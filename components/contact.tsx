"use client";
// we can run a server action in a client component

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "./hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/action/sendEmail";
import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 w-[min(100%,38rem)] mb-28 sm:mb-40 text-center"
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
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly as{" "}
        <a className="underline" href="mailto:olatoyconsult@gmail.com">
          olatoyconsult@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Message sent successfully");
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white/80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Enter your email"
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Enter your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
