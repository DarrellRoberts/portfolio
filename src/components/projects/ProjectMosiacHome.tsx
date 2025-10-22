"use client"

import React from "react"
import { projectsEN } from "../../data/projects"
import ProjectMosiac from "./ProjectMosiac"
import { useI18n } from "../../../locales/client"
import { CodeBracketIcon } from "@heroicons/react/16/solid"
import { Divider } from "@heroui/react"

const ProjectMosiacHome = () => {
  const t = useI18n()
  return (
    <div className="flex flex-col gap-2" id="projects">
      <Divider className="mb-10" />
      <div className="flex items-center gap-4 justify-center mb-10">
        <h2 className="text-6xl font-bold max-sm:text-3xl">
          {t("project.projects")}
        </h2>
        <CodeBracketIcon className="size-12 max-sm:size-8" />
      </div>
      <div className="flex flex-col justify-evenly h-full gap-30">
        {projectsEN.map((project) => (
          <ProjectMosiac project={project} key={project.title} />
        ))}
      </div>
    </div>
  )
}

export default ProjectMosiacHome
