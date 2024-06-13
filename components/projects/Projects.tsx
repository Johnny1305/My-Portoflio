import React from "react";
import projects from "@/data/content/projects";
import { Project } from "types";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";

type ProjectProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  const filteredProjects = projectsList.filter((item1) => item1.id === 4);
  return (
    <span>
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-1">
        {filteredProjects.map((item1) => {
          return (
            <div key={item1.id} className="relative">
              <span className="absolute top-0 left-0  bg-yellow-500 text-white px-2 py-1 text-xs rounded-br z-50 cursor-default">
                THE BEST
              </span>
              <ProjectCard2 project={item1} />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start mt-10">
        {projectsList.map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
    </span>
  );
}

export default Projects;
