import React, { RefObject, useContext, useRef } from "react"
import Link from "next/link"
import { useCurrentLocale } from "../../../locales/client"
import { DarkContext } from "@/context/DarkContext"
import { type ProjectData } from "../../../types/ProjectData"
import { main } from "framer-motion/m"

type Props = {
  project: ProjectData
}

const ProjectMosiac = ({ project }: Props) => {
  const locale = useCurrentLocale()
  const mainDiv = useRef<HTMLDivElement>(null)
  const { isDark } = useContext(DarkContext)
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-around min-md:w-1/2 w-full">
        <h3 className="self-start min-sm:text-4xl font-bold text-primary">
          {project?.title}
        </h3>
        <h3 className="self-end min-sm:text-3xl text-primary">
          {project?.tech}
        </h3>
      </div>
      <Link
        onMouseEnter={() => {
          if (mainDiv.current) {
            mainDiv.current.style.backgroundImage = isDark
              ? `url(${project.hoverImage[0]})`
              : `url(${project.hoverImage[1]})`
          }
        }}
        onMouseLeave={() => {
          if (mainDiv.current) {
            mainDiv.current.style.backgroundImage = isDark
              ? `url(${project?.lightImages[0]})`
              : `url(${project?.darkImages[0]})`
          }
        }}
        href={`/${locale}/projects/${project.title}`}
        className="grid grid-rows-2 grid-cols-4 gap-2 min-md:w-1/2 max-md:w-full max-md:px- hover:grayscale-100 transition-all transition-discrete grayscale-0"
      >
        <div
          ref={mainDiv as RefObject<HTMLDivElement>}
          className="col-span-3 aspect-16/9 rounded-2xl"
          style={{
            backgroundImage: isDark
              ? `url(${project?.lightImages[0]})`
              : `url(${project?.darkImages[0]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          className="rounded-2xl"
          style={{
            backgroundImage: isDark
              ? `url(${project?.lightImages[1]})`
              : `url(${project?.darkImages[1]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          className=" col-span-2 rounded-2xl"
          style={{
            backgroundImage: isDark
              ? `url(${project?.lightImages[2]})`
              : `url(${project?.darkImages[2]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          className="col-span-2 rounded-2xl"
          style={{
            backgroundImage: isDark
              ? `url(${project?.lightImages[3]})`
              : `url(${project?.darkImages[3]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Link>
    </div>
  )
}

export default ProjectMosiac
