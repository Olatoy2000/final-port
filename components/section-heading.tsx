import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div>
      <h2 className="text-3xl font-medium capitalize text-center mb-8">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeading;
