import React from "react"
import Link from "next/link"
import { useCurrentLocale } from "../../../locales/client"

type Props = {
  project: {
    title: string
    tech: string
    lightImages: string[]
  }
}

const ProjectMosiac = ({ project }: Props) => {
  const locale = useCurrentLocale()
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
        className="grid grid-rows-2 grid-cols-4 gap-2 min-md:w-1/2 max-md:w-full max-md:px-4"
      >
        <div
          className="col-span-3 aspect-16/9 rounded-2xl"
          style={{
            backgroundImage: `url(${project?.lightImages[0]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          className="rounded-2xl"
          style={{
            backgroundImage: `url(${project?.lightImages[1]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          className=" col-span-2 rounded-2xl"
          style={{
            backgroundImage: `url(${project?.lightImages[2]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          className="col-span-2 rounded-2xl"
          style={{
            backgroundImage: `url(${project?.lightImages[3]})`,
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
