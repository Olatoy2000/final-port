import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Olatoy. All Right Reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> build with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
