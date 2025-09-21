"use client"

import React, { useMemo } from "react"
import { Accordion, AccordionItem } from "@heroui/react"
import { experienceEN, experienceDE } from "@/data/experience"
import { useCurrentLocale } from "../../../locales/client"

const ExperienceAccordian = () => {
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
      <div className="w-1/2 max-sm:w-full">
        <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                overflowY: "unset",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                overflowY: "hidden",
                transition: {
                  height: {
                    duration: 0.25,
                  },
                  opacity: {
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {currentExp?.map((job, index) => (
            <AccordionItem
              key={index}
              aria-label={job.title}
              title={
                <div className="flex justify-between w-full cursor-pointer">
                  <span className="text-base text-primary">{job.title}</span>
                  <span className="text-base text-primary">{job.position}</span>
                </div>
              }
              subtitle={<span className="cursor-pointer">{job.date}</span>}
            >
              <ul>
                {job.description.map((point, pointIndex) => (
                  <div key={pointIndex}>
                    <li className="list-disc text-primary">{point}</li>
                    <br />
                  </div>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default ExperienceAccordian
