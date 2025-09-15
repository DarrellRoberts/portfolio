import React, { RefObject, useContext, useRef, useState } from "react"
import Link from "next/link"
import { useCurrentLocale } from "../../../locales/client"
import { DarkContext } from "@/context/DarkContext"
import { type ProjectData } from "../../../types/ProjectData"
import { main } from "framer-motion/m"

type Props = {
  project: ProjectData
}

const ProjectMosiac = ({ project }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const locale = useCurrentLocale()
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
        href={`/${locale}/projects/${project.title}`}
        className="grid grid-rows-2 grid-cols-4 gap-2 min-md:w-1/2 max-md:w-full"
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="col-span-3 aspect-16/9 rounded-2xl relative hover:scale-115 transition-all transition-discrete hover:shadow-xl shadow-primary"
        >
          <div
            className={`
              absolute inset-0 transition-opacity duration-500 ease-in-out rounded-2xl
              ${isHovered ? "opacity-0" : "opacity-100"}
            `}
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
            className={`
              absolute inset-0 transition-opacity duration-500 ease-in-out rounded-2xl
              ${isHovered ? "opacity-100" : "opacity-0"}
            `}
            style={{
              backgroundImage: isDark
                ? `url(${project?.hoverImage[0]})`
                : `url(${project?.hoverImage[1]})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>

        <div
          className="rounded-2xl hover:scale-115 transition-all transition-discrete hover:shadow-xl shadow-primary"
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
          className=" col-span-2 rounded-2xl hover:scale-115 transition-all transition-discrete hover:shadow-xl shadow-primary"
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
          className="col-span-2 rounded-2xl hover:scale-115 transition-all transition-discrete hover:shadow-xl shadow-primary"
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
