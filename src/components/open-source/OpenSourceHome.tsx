"use client"

import { useI18n } from "../../../locales/client"
import OpenSourceAccordian from "./OpenSourceAccordian"
import { UiSection } from "../ui/UiSection"
import { Icon } from "@/types/Icon"

export const OpenSourceHome = () => {
  const t = useI18n()
  return (
    <UiSection title={Icon.OPEN_SOURCE} localeText={t("openSource.openSource")}>
      <OpenSourceAccordian />
    </UiSection>
  )
}
