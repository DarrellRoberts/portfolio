"use client"

import React, { useEffect, useState } from "react"
import { projectsEN, projectsDE } from "@/data/projects"
import { useParams } from "next/navigation"
import { type ProjectData } from "../../../../../types/ProjectData"
import ProjectSingle from "@/components/projects/ProjectSingle"
import { useCurrentLocale } from "../../../../../locales/client"

const Project = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [project, setProject] = useState<ProjectData>()
  const params = useParams()
  const locale = useCurrentLocale()

  const projectTitle =
    typeof params.project === "string"
      ? params.project.replace(/%20/g, " ")
      : undefined

  useEffect(() => {
    window.scroll(0, 0)
    setLoading(true)
    const projects = locale === "en" ? projectsEN : projectsDE
    if (projectTitle) {
      const tempProject = projects.find((p) => p.title === projectTitle)
      setProject(tempProject)
      setLoading(false)
    }
  }, [projectTitle])

  return loading ? (
    <div className="h-screen">Loading...</div>
  ) : (
    <ProjectSingle project={project} />
  )
}

export default Project
