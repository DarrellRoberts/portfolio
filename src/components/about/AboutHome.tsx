"use client"

import React, { useContext } from "react"
import { useI18n } from "../../../locales/client"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"

const AboutHome = () => {
  const t = useI18n()
  const { isDark } = useContext(DarkContext)
  return (
    <div id="about">
      <h2 className="text-6xl font-bold max-sm:text-3xl">
        {t("about.aboutMe")}
      </h2>
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
      <span className="text-xl flex w-full justify-center">
        {t("about.lastSentence")}
      </span>
    </div>
  )
}

export default AboutHome
