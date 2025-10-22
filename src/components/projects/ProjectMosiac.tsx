"use client"

import React, { useContext, useState } from "react"
import Link from "next/link"
import { useCurrentLocale } from "../../../locales/client"
import { DarkContext } from "@/context/DarkContext"
import { type ProjectData } from "../../../types/ProjectData"

type Props = {
  project: ProjectData | undefined
  hideTitle?: boolean
}

const ProjectMosiac = ({ project, hideTitle }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const locale = useCurrentLocale()
  const { isDark } = useContext(DarkContext)

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      {!hideTitle && (
        <div className="flex justify-around w-full max-sm:flex-col max-sm:items-center">
          <h3 className="min-sm:text-4xl max-sm:text-2xl font-bold text-primary min-sm:pb-5">
            {project?.title}
          </h3>
          <h3 className="min-sm:text-3xl">{project?.tech}</h3>
        </div>
      )}
      <Link
        aria-label="Learn more about the project"
        href={`/${locale}/projects/${project?.title}`}
        className="min-sm:grid grid-rows-2 grid-cols-4 gap-6 min-md:w-7/10 max-md:flex max-md:flex-col max-md:w-full"
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
          className="rounded-2xl hover:scale-115 transition-all transition-discrete hover:shadow-xl shadow-primary max-sm:hidden"
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
          className=" col-span-2 rounded-2xl hover:scale-115 transition-all transition-discrete hover:shadow-xl shadow-primary max-sm:aspect-16/9"
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
          className="col-span-2 rounded-2xl hover:scale-115 transition-all transition-discrete hover:shadow-xl shadow-primary max-sm:aspect-16/9"
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
