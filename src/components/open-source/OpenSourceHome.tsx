"use client"

import React from "react"
import { useI18n } from "../../../locales/client"

const OpenSourceHome = () => {
  const t = useI18n()
  return (
    <div id="opensource" className="h-50">
      <h2 className="text-6xl font-bold max-sm:text-3xl">
        Open Source Contributions
      </h2>
    </div>
  )
}

export default OpenSourceHome
