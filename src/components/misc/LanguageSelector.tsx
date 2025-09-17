"use client"

import React from "react"
import { useChangeLocale, useCurrentLocale } from "../../../locales/client"
import IconEN from "./icons/IconEN"
import IconDE from "./icons/IconDE"

const LanguageSelector = () => {
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  const handleLocale = () => {
    if (locale === "en") {
      changeLocale("de")
    } else {
      changeLocale("en")
    }
  }
  return (
    <>
      <div
        className="w-12 cursor-pointer p-1 hover:p-[0px] rounded-full transition-all transition-discrete"
        onClick={handleLocale}
      >
        {locale === "de" ? <IconEN /> : <IconDE />}
      </div>
    </>
  )
}

export default LanguageSelector
