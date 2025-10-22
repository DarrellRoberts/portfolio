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
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-7xl max-sm:text-3xl max-sm:text-center">
          {project?.title}
        </h1>
        <div className="grid grid-cols-2 w-full justify-items-center h-full items-center">
          <h3 className="text-4xl max-xl:text-3xl max-sm:text-lg">
            {t("project.tech")}:
          </h3>
          <h3 className="text-3xl max-xl:text-2xl max-sm:text-base text-primary text-center">
            {project?.tech}
          </h3>
        </div>
        <Divider orientation="horizontal" />
        <div className="grid grid-cols-2 w-full justify-items-center h-full items-center">
          <h3 className="text-4xl max-xl:text-3xl max-sm:text-lg">
            {t("project.description")}:
          </h3>
          <h3 className="text-3xl max-xl:text-2xl max-sm:text-base text-primary text-center pr-5">
            {project?.description}
          </h3>
        </div>
        <Divider orientation="horizontal" />
        <ProjectMosiac project={project} hideTitle={true} />
        <Divider orientation="horizontal" />
        <div className="grid grid-cols-2 w-full justify-items-center max-sm:flex max-sm:flex-col items-center">
          <h3 className="text-4xl max-xl:text-3xl max-sm:text-lg">
            {t("project.features")}:
          </h3>
          <ul className="max-md:w-4/5 max-sm:pl-6 max-sm:grid max-sm:grid-cols-2 max-sm:w-full max-sm:gap-10">
            {project?.features?.map((feature: string, index: number) => (
              <div key={index}>
                <li className="list-disc text-3xl max-xl:text-2xl max-sm:text-base text-primary">
                  {feature}
                </li>
                <br />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <Divider orientation="horizontal" />
      <div className="flex items-center w-full justify-center py-6 gap-4">
        <h3 className="text-4xl max-xl:text-3xl max-sm:text-lg">
          {t("project.link")}
        </h3>
        <Link
          href={`${project?.link}`}
          className="text-3xl max-xl:text-2xl max-sm:text-lg text-primary"
          target="_blank"
        >
          <LinkIcon className="size-10 max-sm:size-6" />
        </Link>
      </div>
    </>
  )
}

export default ProjectSingle
