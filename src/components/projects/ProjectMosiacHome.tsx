"use client"

import React from "react"
import { projectsEN } from "../../data/projects"
import ProjectMosiac from "./ProjectMosiac"
import { useI18n } from "../../../locales/client"

const ProjectMosiacHome = () => {
  const t = useI18n()
  return (
    <div className="flex flex-col gap-2" id="projects">
      <h2 className="text-6xl font-bold max-sm:text-3xl pt-30">
        {t("project.projects")}
      </h2>
      <div className="flex flex-col justify-evenly h-full gap-30">
        {projectsEN.map((project) => (
          <ProjectMosiac project={project} key={project.title} />
        ))}
      </div>
    </div>
  )
}

export default ProjectMosiacHome
