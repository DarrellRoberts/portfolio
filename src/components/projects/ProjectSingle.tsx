import React from "react"
import { ProjectData } from "../../../types/ProjectData"
import { Divider } from "@heroui/react"
import { LinkIcon } from "@heroicons/react/16/solid"
import ProjectMosiac from "./ProjectMosiac"
import Link from "next/link"

type Props = {
  project: ProjectData | undefined
}

const ProjectSingle = ({ project }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-8xl max-xl:text-7xl max-sm:text-3xl">
          {project?.title}
        </h1>
        <div className="flex items-center w-full justify-around py-6 max-md:flex-col">
          <h3 className="text-6xl max-xl:text-3xl max-sm:text-lg">Tech:</h3>
          <h3 className="text-4xl max-xl:text-2xl max-sm:text-lg text-primary">
            {project?.tech}
          </h3>
        </div>
        <Divider orientation="horizontal" />
        <div className="flex items-center w-full justify-around py-6 max-md:flex-col max-md:text-center">
          <h3 className="text-6xl max-xl:text-3xl max-sm:text-lg">
            Description:
          </h3>
          <h3 className="text-4xl max-xl:text-2xl max-sm:text-lg text-primary">
            {project?.description}
          </h3>
        </div>
        <Divider orientation="horizontal" />
        <div className="flex w-full justify-around max-md:items-center py-6 max-md:flex-col max-sm:text-center">
          <h3 className="text-6xl max-xl:text-3xl max-sm:text-lg">Features:</h3>
          <ul className="max-md:w-4/5">
            {project?.features?.map((feature: string, index: number) => (
              <div key={index}>
                <li className="list-disc text-lg text-primary">{feature}</li>
                <br />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <ProjectMosiac project={project} hideTitle={true} />
      <div className="flex items-center w-full justify-center py-6 gap-4">
        <h3 className="text-6xl max-xl:text-3xl max-sm:text-lg">Link</h3>
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
