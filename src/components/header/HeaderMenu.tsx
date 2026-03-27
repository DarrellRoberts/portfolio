"use client"

import React from "react"
import { Logo } from "../misc/Logo"
import { useCurrentLocale, useI18n } from "../../../locales/client"
import { DarkMode } from "../misc/DarkMode"
import { LanguageSelector } from "../misc/LanguageSelector"
import { useParams } from "next/navigation"
import { Icon } from "@/types/Icon"
import { UiSlideover } from "../ui/UiSlideover"

const HeaderMenu = () => {
  const t = useI18n()
  const locale = useCurrentLocale()
  const params = useParams()

  const linksJson = [
    {
      text: t("navLinks.aboutMe"),
      href: params.project ? `/${locale}/#about` : "#about",
      icon: Icon.ABOUT,
    },
    {
      text: t("navLinks.skills"),
      href: params.project ? `/${locale}/#skills` : "#skills",
      icon: Icon.SKILLS,
    },
    {
      text: t("navLinks.experience"),
      href: params.project ? `/${locale}/#experience` : "#experience",
      icon: Icon.EXPERIENCE,
    },
    {
      text: t("navLinks.projects"),
      href: params.project ? `/${locale}/#projects` : "#projects",
      icon: Icon.PROJECTS,
    },
    {
      text: t("navLinks.openSource"),
      href: params.project ? `/${locale}/#opensource` : "#opensource",
      icon: Icon.OPEN_SOURCE,
    },
    {
      text: t("navLinks.contact"),
      href: "#contact",
      icon: Icon.CONTACT,
    },
  ]

  const headerComponent = () => (
    <div className="flex w-full items-center justify-between gap-1">
      <div className="flex items-center">
        <Logo />
        <h2 className="text-lg">
          Darrell Roberts
          <br />
          Frontend Engineer
        </h2>
      </div>
      <DarkMode />
    </div>
  )
  return (
    <UiSlideover
      linksJson={linksJson}
      footerComponent={LanguageSelector}
      headerComponent={headerComponent}
    />
  )
}

export default HeaderMenu
