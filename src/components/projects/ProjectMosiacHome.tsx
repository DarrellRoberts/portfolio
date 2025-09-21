"use client"

import React from "react"
import { projects } from "../../data/projects"
import ProjectMosiac from "./ProjectMosiac"
import { useI18n } from "../../../locales/client"

const ProjectMosiacHome = () => {
  const t = useI18n()
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-6xl font-bold max-sm:text-3xl">
        {t("project.projects")}
      </h2>
      {projects.map((project) => (
        <ProjectMosiac project={project} key={project.title} />
      ))}
    </div>
  )
}

export default ProjectMosiacHome
