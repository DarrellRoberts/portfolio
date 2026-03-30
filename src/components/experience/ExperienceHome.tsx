"use client"

import { ExperienceAccordian } from "./ExperienceAccordian"
import { useI18n } from "../../../locales/client"
import { UiSection } from "../ui/UiSection"
import { Icon } from "@/types/Icon"

export const ExperienceHome = () => {
  const t = useI18n()
  return (
    <UiSection title={Icon.EXPERIENCE} localeText={t("experience.experience")}>
      <ExperienceAccordian />
    </UiSection>
  )
}
