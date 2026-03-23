"use client"

import React from "react"
import { projectsEN } from "../../data/projects"
import ProjectMosiac from "./ProjectMosiac"
import { useI18n } from "../../../locales/client"
import { UiSection } from "../ui/UiSection"
import { Icon } from "@/types/Icon"

export const ProjectMosiacHome = () => {
  const t = useI18n()
  return (
    <UiSection title={Icon.PROJECTS} localeText={t("project.projects")}>
      <div className="flex flex-col justify-evenly h-full gap-30">
        {projectsEN.map((project) => (
          <ProjectMosiac project={project} key={project.title} />
        ))}
      </div>
    </UiSection>
  )
}
