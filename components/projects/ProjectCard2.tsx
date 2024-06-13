import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard2({ project }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-start border-fun-gray border rounded-xl p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard" key={project.id}>
      <a href={project.link || project.github} target="_blank" className="w-full md:w-1/3 relative rounded-md overflow-hidden">
        <img className="w-full h-full object-cover rounded-md" src={project.img} />
      </a>
      <div className="w-full md:w-2/3 mt-5 md:mt-0 md:ml-5">
        <div className="flex items-center justify-between">
          <a href={project.link || project.github} target="_blank">
            <h1 className="text-2xl font-bold">{project.title}</h1>
          </a>
          <div className="space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Link href={`/projects/tag/${kebabCase(tag)}`}>
                <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                  {tag}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <p className="bg-red-600 text-white px-2 py-1 text-xl rounded">DEVELOPING</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard2;
