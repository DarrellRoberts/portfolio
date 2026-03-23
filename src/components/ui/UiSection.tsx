import React, { ReactNode } from "react"
import { UiDivider } from "./UiDivider"
import { IconController } from "./IconController"
import { IconKeys } from "../../types/Icon"

type Props = {
  title: IconKeys
  localeText: string
  children: ReactNode
}

export const UiSection = ({ title, localeText, children }: Props) => {
  return (
    <section className="relative pb-5" id={title} data-testid="section-ui">
      <UiDivider />
      <div className="flex items-center gap-4 justify-center pb-5 pt-10">
        <h2 className="text-6xl font-bold max-sm:text-3xl">{localeText}</h2>
        <IconController label={title} />
      </div>
      {children}
    </section>
  )
}
