"use client"

import React from "react"
import ExperienceAccordian from "./ExperienceAccordian"
import { useI18n } from "../../../locales/client"

const ExperienceHome = () => {
  const t = useI18n()
  return (
    <div id="experience">
      <h2 className="text-6xl font-bold max-sm:text-3xl pt-30">
        {t("experience.experience")}
      </h2>
      <ExperienceAccordian />
    </div>
  )
}

export default ExperienceHome
