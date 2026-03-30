"use client"

import { Dispatch } from "react"
import { type SkillsData } from "../../types/Skills"
import { UiCard } from "../ui/UiCard"

type Props = {
  skill: SkillsData
  setSkillImage: Dispatch<React.SetStateAction<string | null>>
  setSkillLabel: Dispatch<React.SetStateAction<string | null>>
}

const SkillsCard = ({ skill, setSkillImage, setSkillLabel }: Props) => {
  return (
    <UiCard
      dataObject={skill}
      setImage={setSkillImage}
      setLabel={setSkillLabel}
    />
  )
}

export default SkillsCard
