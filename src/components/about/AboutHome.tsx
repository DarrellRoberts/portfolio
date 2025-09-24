"use client"

import React from "react"
import { useI18n } from "../../../locales/client"

const AboutHome = () => {
  const t = useI18n()
  return (
    <div id="about" className="h-50">
      <h2 className="text-6xl font-bold max-sm:text-3xl">
        {t("about.aboutMe")}
      </h2>
    </div>
  )
}

export default AboutHome
