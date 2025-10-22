"use client"

import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { type ProjectData } from "../../../../../types/ProjectData"
import ProjectSingle from "@/components/projects/ProjectSingle"
import { useCurrentLocale } from "../../../../../locales/client"
import { projectMapEN, projectMapDE } from "@/data/projects"

const Project = () => {
  const [project, setProject] = useState<ProjectData | undefined>(undefined)
  const params = useParams()
  const locale = useCurrentLocale()

  const projectTitle =
    typeof params.project === "string"
      ? params.project.replace(/%20/g, " ")
      : undefined

  useEffect(() => {
    window.scroll(0, 0)
    const projects = locale === "en" ? projectMapEN : projectMapDE
    if (projectTitle) {
      const tempProject = projects.get(projectTitle)
      setProject(tempProject)
    } else {
      setProject(undefined)
    }
  }, [projectTitle])

  const loading = !project && projectTitle

  return loading ? (
    <div className="h-screen">Loading...</div>
  ) : (
    <ProjectSingle project={project} />
  )
}

export default Project
