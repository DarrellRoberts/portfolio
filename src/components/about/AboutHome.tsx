"use client"

import React, { useContext } from "react"
import { useCurrentLocale, useI18n } from "../../../locales/client"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"
import Link from "next/link"
import { DocumentTextIcon, UserIcon } from "@heroicons/react/16/solid"
import { Divider } from "@heroui/react"
import Section from "../ui/Section"

const AboutHome = () => {
  const t = useI18n()
  const { isDark } = useContext(DarkContext)
  const locale = useCurrentLocale()
  return (
    <Section title={"about"} localeText={t("about.aboutMe")}>
      <div className="flex w-full justify-around items-center max-lg:flex-col-reverse">
        <ul className="list-disc w-1/2 max-sm:w-4/5">
          <li className="list-disc text-primary text-lg max-sm:text-base">
            {t("about.firstPoint")}
          </li>
          <br />
          <li className="list-disc text-primary text-lg max-sm:text-base">
            {t("about.secondPoint")}
          </li>
          <br />
          <li className="list-disc text-primary text-lg max-sm:text-base">
            {t("about.thirdPoint")}
          </li>
          <br />
        </ul>
        <Image
          className="w-100 max-sm:w-75"
          src={isDark ? "/submarine_dark.webp" : "/saloon-doors-lights.webp"}
          width={500}
          height={500}
          alt="submarine"
        />
      </div>
      <Link
        className="flex w-full items-center hover:text-primary justify-around"
        href={
          locale === "en"
            ? "https://drive.google.com/file/d/1uFf26DmdK9HNJ6rRrRS8k7Q70cq80RkA/view?usp=drive_link"
            : "https://drive.google.com/file/d/1hTu2RwqPfNwIcu8whIL2HWExCRoKQOku/view?usp=drive_link"
        }
        target="_blank"
      >
        <div className="flex gap-2 justify-center flex-col">
          <Divider />
          <div className="flex gap-2">
            <h3 className="text-xl">{t("experience.cv")}</h3>
            <DocumentTextIcon className="size-8 hover:text-primary" />
          </div>
        </div>
      </Link>
    </Section>
  )
}

export default AboutHome
