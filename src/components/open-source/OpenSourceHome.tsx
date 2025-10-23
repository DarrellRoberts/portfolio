"use client"

import React from "react"
import { useI18n } from "../../../locales/client"
import OpenSourceAccordian from "./OpenSourceAccordian"
import { UserGroupIcon } from "@heroicons/react/16/solid"
import { Divider } from "@heroui/react"
import Section from "../ui/Section"

const OpenSourceHome = () => {
  const t = useI18n()
  return (
    <Section title={"opensource"} localeText={t("openSource.openSource")}>
      <OpenSourceAccordian />
    </Section>
  )
}

export default OpenSourceHome
