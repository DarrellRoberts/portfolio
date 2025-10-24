"use client"

import React from "react"
import ExperienceAccordian from "./ExperienceAccordian"
import { useI18n } from "../../../locales/client"
import { ClipboardDocumentListIcon } from "@heroicons/react/16/solid"
import { Divider } from "@heroui/react"
import Section from "../ui/Section"

const ExperienceHome = () => {
  const t = useI18n()
  return (
    <Section title={"experience"} localeText={t("experience.experience")}>
      <ExperienceAccordian />
    </Section>
  )
}

export default ExperienceHome
