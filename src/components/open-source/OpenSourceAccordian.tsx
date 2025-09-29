"use client"

import React, { useMemo } from "react"
import { Accordion, AccordionItem } from "@heroui/react"
import { openSourceEN, openSourceDE } from "@/data/openSource"
import { useCurrentLocale } from "../../../locales/client"
import { LinkIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

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
          {currentOS?.map((project, index) => (
            <AccordionItem
              key={index}
              aria-label={project.project}
              title={
                <div className="flex justify-between w-full cursor-pointer">
                  <span className="text-xl text-primary hover:text-default">
                    {project.project}
                  </span>
                  <span className="text-xl hover:text-primary">
                    {project.owner}
                  </span>
                </div>
              }
              subtitle={<span className="cursor-pointer">{project.tech}</span>}
            >
              <ul>
                {project.feature.map((point, pointIndex) => (
                  <div key={pointIndex}>
                    <div className="flex gap-2">
                      <li className="list-disc text-lg">{point}</li>
                      <Link
                        href={project.githubLink[pointIndex]}
                        target="_blank"
                      >
                        <LinkIcon className="size-6" />
                      </Link>
                    </div>
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

export default OpenSourceAccordian
