"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import { useSectionInView } from "./hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 sm:mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project key={index} {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
