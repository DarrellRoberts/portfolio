"use client"

import { useMemo } from "react"
import { experienceEN, experienceDE } from "@/data/experience"
import { useCurrentLocale } from "../../../locales/client"
import { UiAccordion } from "../ui/UiAccordian"
import { UiDivider } from "../ui/UiDivider"

export const ExperienceAccordian = () => {
  const locale = useCurrentLocale()

  const currentExp = useMemo(() => {
    if (locale === "en") {
      return experienceEN
    } else {
      return experienceDE
    }
  }, [locale])

  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 max-lg:w-full">
        {currentExp.map((job, index) => (
          <div key={`${job.date}${index}`}>
            <UiAccordion
              id={`${job.date}${index}`}
              dataArray={job.description}
              title={job.title}
              subtitle={job.position}
              subtitleMobile={job.positionMobileName}
              note={job.date}
            />
            {index !== currentExp.length - 1 && <UiDivider isFull />}
          </div>
        ))}
      </div>
    </div>
  )
}
