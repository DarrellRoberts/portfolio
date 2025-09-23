"use client"

import { Card, CardBody, CardHeader } from "@heroui/react"
import React, { Dispatch } from "react"
import { type SkillsData } from "../../../types/Skills"
import Image from "next/image"

type Props = {
  skill: SkillsData
  setSkillImage: Dispatch<React.SetStateAction<string | null>>
  setSkillLabel: Dispatch<React.SetStateAction<string | null>>
}

const SkillsCard = ({ skill, setSkillImage, setSkillLabel }: Props) => {
  return (
    <Card className="py-4 h-75 max-xl:h-50 max-sm:h-75 aspect-[18/20] z-0 overflow-visible relative">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h2 className="font-bold text-large">{skill.title}</h2>
      </CardHeader>
      <CardBody className="grid grid-cols-3 gap-2 overflow-visible">
        {skill.skillsImages.map((skillImage, index) => (
          <div
            className="relative inline-display cursor-pointer group overflow-visible flex items-center justify-center"
            key={skill.skillsLabels[index]}
            onMouseEnter={() => {
              setSkillImage(skillImage)
              setSkillLabel(skill.skillsLabels[index])
            }}
            onMouseLeave={() => {
              setSkillImage(null)
              setSkillLabel(null)
            }}
          >
            <div className="flex items-center justify-center w-50 max-xl:w-8 max-sm:w-auto">
              <Image
                width={50}
                height={50}
                alt={skill.skillsLabels[index]}
                src={skillImage}
              />
            </div>
            <span className="opacity-0 w-30 bg-secondary text-primary text-center rounded-2xl absolute z-1000 group-hover:opacity-100 transition-all transition-discrete border-1 border-primary top-[90%] max-sm:block min-sm:hidden">
              {skill.skillsLabels[index]}
            </span>
          </div>
        ))}
      </CardBody>
    </Card>
  )
}

export default SkillsCard
