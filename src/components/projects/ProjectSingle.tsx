import React from "react"
import { ProjectData } from "../../../types/ProjectData"
import { Divider } from "@heroui/react"
import { LinkIcon } from "@heroicons/react/16/solid"
import ProjectMosiac from "./ProjectMosiac"
import Link from "next/link"
import { useI18n } from "../../../locales/client"

type Props = {
  project: ProjectData | undefined
}

const ProjectSingle = ({ project }: Props) => {
  const t = useI18n()
  return (
    <>
      <div className="flex flex-col items-center gap-6 px-6">
        <h1 className="text-8xl max-xl:text-7xl max-sm:text-3xl">
          {project?.title}
        </h1>
        {/* <div className="flex items-center w-full justify-around py-6 max-md:flex-col"> */}
        <div className="grid grid-cols-2 w-full justify-items-center h-full items-center">
          <h3 className="text-6xl max-xl:text-3xl max-sm:text-lg">
            {t("project.tech")}:
          </h3>
          <h3 className="text-4xl max-xl:text-2xl max-sm:text-base text-primary text-center">
            {project?.tech}
          </h3>
        </div>
        <Divider orientation="horizontal" />
        {/* <div className="flex items-center w-full justify-around py-6 max-md:flex-col max-md:text-center"> */}
        <div className="grid grid-cols-2 w-full justify-items-center h-full items-center">
          <h3 className="text-6xl max-xl:text-3xl max-sm:text-lg">
            {t("project.description")}:
          </h3>
          <h3 className="text-4xl max-xl:text-2xl max-sm:text-base text-primary text-center">
            {project?.description}
          </h3>
        </div>
        <Divider orientation="horizontal" />
        {/* <div className="flex w-full justify-around max-md:items-center py-6 max-md:flex-col max-sm:text-center"> */}
        <div className="grid grid-cols-2 w-full justify-items-center">
          <h3 className="text-6xl max-xl:text-3xl max-sm:text-lg">
            {t("project.features")}:
          </h3>
          <ul className="max-md:w-4/5 ">
            {project?.features?.map((feature: string, index: number) => (
              <div key={index}>
                <li className="list-disc text-lg text-primary max-sm:text-base">
                  {feature}
                </li>
                <br />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <ProjectMosiac project={project} hideTitle={true} />
      <div className="flex items-center w-full justify-center py-6 gap-4">
        <h3 className="text-6xl max-xl:text-3xl max-sm:text-lg">
          {t("project.link")}:
        </h3>
        <Link
          href={`${project?.link}`}
          className="text-4xl max-xl:text-2xl max-sm:text-lg text-primary"
          target="_blank"
        >
          <LinkIcon className="size-10 max-sm:size-6" />
        </Link>
      </div>
    </>
  )
}

export default ProjectSingle
