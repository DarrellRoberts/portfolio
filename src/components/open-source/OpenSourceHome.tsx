"use client"

import React from "react"
import { useI18n } from "../../../locales/client"
import OpenSourceAccordian from "./OpenSourceAccordian"

const OpenSourceHome = () => {
  const t = useI18n()
  return (
    <div id="opensource">
      <h2 className="text-6xl font-bold max-sm:text-3xl pt-30">
        {t("openSource.openSource")}
      </h2>
      <OpenSourceAccordian />
    </div>
  )
}

export default OpenSourceHome
