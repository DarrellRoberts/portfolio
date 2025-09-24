"use client"

import React, { useContext, useState } from "react"
import SkillsCard from "./SkillsCard"
import { skillsEN, skillsDE } from "@/data/skills"
import { SkillsData } from "../../../types/Skills"
import { useCurrentLocale, useI18n } from "../../../locales/client"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"

const SkillsHome = () => {
  const [skillImage, setSkillImage] = useState<string | null>(null)
  const [skillLabel, setSkillLabel] = useState<string | null>(null)
  const locale = useCurrentLocale()
  const t = useI18n()
  const { isDark } = useContext(DarkContext)
  return (
    <div className="relative" id="skills">
      <h2 className="text-6xl font-bold max-sm:text-3xl">
        {t("skills.skills")}
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-4 m-4 max-sm:flex max-sm:flex-col max-sm:items-center mt-20">
        {locale === "en"
          ? skillsEN.map((skill: SkillsData, index: number) => (
              <SkillsCard
                key={index}
                skill={skill}
                setSkillImage={setSkillImage}
                setSkillLabel={setSkillLabel}
              />
            ))
          : skillsDE.map((skill: SkillsData, index: number) => (
              <SkillsCard
                key={index}
                skill={skill}
                setSkillImage={setSkillImage}
                setSkillLabel={setSkillLabel}
              />
            ))}
      </div>
      <div className="absolute top-0 flex flex-col items-center justify-center h-full w-full gap-20 z-[-1]">
        {isDark ? (
          <div className="relative max-sm:hidden">
            <div className="w-100 flex justify-center">
              <span
                className={`text-3xl text-center transition-all transition-discrete ${
                  skillImage ? "opacity-0" : "opacity-100"
                }`}
              >
                {t("skills.skillHoverAdmiral")}
              </span>
            </div>
            <div className="w-100 flex justify-center absolute top-1/4">
              <span
                className={`text-3xl text-center transition-all transition-discrete ${
                  skillImage ? "opacity-100" : "opacity-0"
                }`}
              >
                {skillLabel}
              </span>
            </div>
          </div>
        ) : (
          <div className="relative max-sm:hidden">
            <div className="w-100 flex justify-center">
              <span
                className={`text-3xl text-center transition-all transition-discrete ${
                  skillImage ? "opacity-0" : "opacity-100"
                }`}
              >
                {t("skills.skillHoverCowboy")}
              </span>
              <div className="w-100 flex justify-center absolute top-1/4">
                <span
                  className={`text-3xl text-center transition-all transition-discrete ${
                    skillImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skillLabel}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col relative max-sm:hidden">
          {isDark ? (
            <Image
              width={300}
              height={300}
              alt="admiral-hat"
              src="/admiral-hat-dark.webp"
              className="absolute bottom-[50%] z-1"
            />
          ) : (
            <Image
              width={300}
              height={300}
              alt="cowboy-hat"
              src="/cowboy-hat-light.webp"
              className="absolute bottom-[50%] z-1"
            />
          )}
          {isDark ? (
            <>
              <span
                className={`max-sm:hidden text-[10rem] border-2 rounded-full flex justify-center items-center border-dotted border-white h-75 w-75 transition-all transition-discrete ${
                  skillImage ? "opacity-0" : "opacity-100"
                }`}
              >
                ?
              </span>
              <div
                style={{
                  backgroundImage: `url(${skillImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "300px",
                  height: "300px",
                }}
                className={
                  skillImage
                    ? "opacity-100 transition-all transition-discrete absolute max-sm:hidden"
                    : "opacity-0 transition-all transition-discrete absolute max-sm:hidden"
                }
              />
            </>
          ) : (
            <>
              <span
                className={`max-sm:hidden text-[10rem] border-2 rounded-full flex justify-center items-center border-dotted border-black h-75 w-75 transition-all transition-discrete ${
                  skillImage ? "opacity-0" : "opacity-100"
                }`}
              >
                ?
              </span>
              <div
                style={{
                  backgroundImage: `url(${skillImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "300px",
                  height: "300px",
                }}
                className={
                  skillImage
                    ? "opacity-100 transition-all transition-discrete absolute max-sm:hidden"
                    : "opacity-0 transition-all transition-discrete absolute max-sm:hidden"
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SkillsHome
