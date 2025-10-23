"use client"

import Link from "next/link"
import React, { useContext } from "react"
import ContactLinks from "./ContactLinks"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"
import { useI18n } from "../../../locales/client"
import { EnvelopeIcon } from "@heroicons/react/16/solid"
import { Divider } from "@heroui/react"

const Contact = () => {
  const newDate = new Date()
  const { isDark } = useContext(DarkContext)
  const t = useI18n()
  return (
    <div className="pt-8" id="contact">
      <Divider className="mb-10" />
      <div className="flex items-center gap-4 justify-center mb-10 ">
        <h2 className="text-6xl font-bold max-sm:text-3xl">
          {t("contact.contact")}
        </h2>
        <EnvelopeIcon className="size-12 max-sm:size-8" />
      </div>
      <ContactLinks />
      <div className="flex justify-between bottom-[0%] items-end mt-2 pb-1 max-sm:flex-col max-sm:items-center max-sm:gap-4">
        <div className="w-50 h-40">
          <Image
            src={isDark ? "/shipwreck_dark.webp" : "/animal_skull_light.webp"}
            width={500}
            height={500}
            alt="shipwreck"
          />
        </div>
        <Link target="_blank" href="https://www.darrellroberts.com/">
          <span className="mr-8 max-sm:mr-2">
            Darrell Roberts @{newDate.getFullYear()}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Contact
