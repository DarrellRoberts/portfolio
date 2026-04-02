"use client"

import Link from "next/link"
import React, { useContext } from "react"
import { ContactLinks } from "./ContactLinks"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"
import { useI18n } from "../../../locales/client"
import { UiSection } from "../ui/UiSection"
import { Icon } from "@/types/Icon"

export const Contact = () => {
  const newDate = new Date()
  const { isDark } = useContext(DarkContext)
  const t = useI18n()
  return (
    <UiSection title={Icon.CONTACT} localeText={t("contact.contact")}>
      <ContactLinks />
      <div className="flex justify-between bottom-[0%] items-end mt-2 pb-1 max-sm:flex-col max-sm:items-center max-sm:gap-4">
        <div className="w-50 h-40">
          <Image
            src="/animal_skull_light.webp"
            width={500}
            height={500}
            alt="animal-skull"
            style={{
              opacity: isDark ? "0" : "1",
              display: isDark ? "none" : "block",
            }}
          />
          <Image
            src="/shipwreck_dark.webp"
            width={500}
            height={500}
            alt="shipwreck"
            style={{
              opacity: isDark ? "1" : "0",
              display: isDark ? "block" : "none",
            }}
          />
        </div>
        <Link target="_blank" href="https://www.darrellroberts.com/">
          <span className="mr-8 max-sm:mr-2">
            Darrell Roberts @{newDate.getFullYear()}
          </span>
        </Link>
      </div>
    </UiSection>
  )
}
