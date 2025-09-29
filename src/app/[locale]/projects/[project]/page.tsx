"use client"

import React, { useEffect, useState } from "react"
import { projects } from "@/data/projects"
import { useParams } from "next/navigation"
import { type ProjectData } from "../../../../../types/ProjectData"
import ProjectSingle from "@/components/projects/ProjectSingle"

const Project = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [project, setProject] = useState<ProjectData>()
  const params = useParams()

  const projectTitle =
    typeof params.project === "string"
      ? params.project.replace(/%20/g, " ")
      : undefined

  useEffect(() => {
    setLoading(true)
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
