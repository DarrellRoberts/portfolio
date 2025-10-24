"use client"

import React from "react"
import { projectsEN } from "../../data/projects"
import ProjectMosiac from "./ProjectMosiac"
import { useI18n } from "../../../locales/client"
import { CodeBracketIcon } from "@heroicons/react/16/solid"
import { Divider } from "@heroui/react"
import Section from "../ui/Section"

const ProjectMosiacHome = () => {
  const t = useI18n()
  return (
    <Section title={"projects"} localeText={t("project.projects")}>
      <div className="flex flex-col justify-evenly h-full gap-30">
        {projectsEN.map((project) => (
          <ProjectMosiac project={project} key={project.title} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectMosiacHome
