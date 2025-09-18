"use client"

import React from "react"
import ExperienceAccordian from "./ExperienceAccordian"
import { useI18n } from "../../../locales/client"

const ExperienceHome = () => {
  const t = useI18n()
  return (
    <div className="">
      <h2 className="min-sm:text-6xl font-bold">
        {t("experience.experience")}
      </h2>
      <ExperienceAccordian />
    </div>
  )
}

export default ExperienceHome
