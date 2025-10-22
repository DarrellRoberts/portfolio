"use client"

import React from "react"
import { useI18n } from "../../../locales/client"
import OpenSourceAccordian from "./OpenSourceAccordian"
import { UserGroupIcon } from "@heroicons/react/16/solid"
import { Divider } from "@heroui/react"

const OpenSourceHome = () => {
  const t = useI18n()
  return (
    <div id="opensource">
      <Divider className="mb-10" />
      <div className="flex items-center gap-4 justify-center mb-10">
        <h2 className="text-6xl font-bold max-sm:text-3xl">
          {t("openSource.openSource")}
        </h2>
        <UserGroupIcon className="size-12 max-sm:size-8" />
      </div>
      <OpenSourceAccordian />
    </div>
  )
}

export default OpenSourceHome
