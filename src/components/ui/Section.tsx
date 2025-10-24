import {
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  LightBulbIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/16/solid"
import React, { ReactNode, useMemo } from "react"
import { Divider } from "@heroui/react"

type Props = {
  title: string
  localeText: string
  children: ReactNode
}

const Section = ({ title, localeText, children }: Props) => {
  const selectedIcon = useMemo(() => {
    if (title === "about") {
      return <UserIcon className="size-12 max-sm:size-8" />
    } else if (title === "skills") {
      return <LightBulbIcon className="size-12 max-sm:size-8" />
    } else if (title === "experience") {
      return <ClipboardDocumentListIcon className="size-12 max-sm:size-8" />
    } else if (title === "projects") {
      return <CodeBracketIcon className="size-12 max-sm:size-8" />
    } else if (title === "opensource") {
      return <UserGroupIcon className="size-12 max-sm:size-8" />
    } else {
      return <EnvelopeIcon className="size-12 max-sm:size-8" />
    }
  }, [title])
  return (
    <section className="relative pb-5" id={title} data-testid="section-ui">
      <Divider className="mb-10" />
      <div className="flex items-center gap-4 justify-center pb-5">
        <h2 className="text-6xl font-bold max-sm:text-3xl">{localeText}</h2>
        {selectedIcon}
      </div>
      {children}
    </section>
  )
}

export default Section
