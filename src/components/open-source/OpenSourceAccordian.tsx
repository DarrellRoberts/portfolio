"use client"

import { useMemo } from "react"
import { openSourceEN, openSourceDE } from "@/data/openSource"
import { useCurrentLocale } from "../../../locales/client"
import { UiAccordion } from "../ui/UiAccordian"
import { UiDivider } from "../ui/UiDivider"

const OpenSourceAccordian = () => {
  const locale = useCurrentLocale()

  const currentOS = useMemo(() => {
    if (locale === "en") {
      return openSourceEN
    } else {
      return openSourceDE
    }
  }, [locale])

  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 max-sm:w-full">
        {currentOS?.map((project, index) => (
          <div key={`${project.tech}${index}`}>
            <UiAccordion
              id={`${project.tech}${index}`}
              dataArray={project.feature}
              linkArray={project.githubLink}
              title={project.project}
              subtitle={project.owner}
              note={project.tech}
            />
            {index !== currentOS.length - 1 && <UiDivider isFull />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OpenSourceAccordian
