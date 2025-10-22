"use client"

import React from "react"
import ExperienceAccordian from "./ExperienceAccordian"
import { useI18n } from "../../../locales/client"
import { ClipboardDocumentListIcon } from "@heroicons/react/16/solid"
import { Divider } from "@heroui/react"

const ExperienceHome = () => {
  const t = useI18n()
  return (
    <div id="experience">
      <Divider className="mb-10" />
      <div className="flex items-center gap-4 justify-center mb-10">
        <h2 className="text-6xl font-bold max-sm:text-3xl">
          {t("experience.experience")}
        </h2>
        <ClipboardDocumentListIcon className="size-12 max-sm:size-8" />
      </div>
      <ExperienceAccordian />
    </div>
  )
}

export default ExperienceHome
