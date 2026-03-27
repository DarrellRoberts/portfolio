import { ReactNode } from "react"
import "./styles/ui-accordion.css"
import Link from "next/link"
import { LinkIcon } from "@heroicons/react/16/solid"

type Props = {
  dataArray: string[]
  linkArray?: string[]
  title: string
  subtitle: string
  note: string
  id: string
}

export const UiAccordion = ({
  dataArray,
  linkArray,
  title,
  subtitle,
  note,
  id,
}: Props) => {
  const Wrapper = UiAccordion.Wrapper
  const Item = UiAccordion.Item
  return (
    <Wrapper>
      <Item
        dataArray={dataArray}
        linkArray={linkArray}
        title={title}
        subtitle={subtitle}
        note={note}
        id={id}
      />
    </Wrapper>
  )
}

type UiAccordionProps = {
  children: ReactNode
  linkArray?: string[]
  dataArray: string[]
  title: string
  subtitle: string
  note: string
  id: string
}

UiAccordion.Wrapper = ({ children }: Pick<UiAccordionProps, "children">) => {
  return <div className="flex flex-col h-full w-full">{children}</div>
}

UiAccordion.Item = ({
  dataArray,
  linkArray,
  title,
  subtitle,
  note,
  id,
}: Omit<UiAccordionProps, "children">) => {
  return (
    <div className="tab relative">
      <input
        type="checkbox"
        className="absolute z-[-1] opacity-0"
        id={`cb${id}`}
      />
      <label
        htmlFor={`cb${id}`}
        className="tab__label cursor-pointer flex h-full w-full justify-between my-5"
      >
        <div className="flex flex-col">
          <span className="text-primary text-xl">{title}</span>
          <span className="text-[var(--neutral-color)] text-base">{note}</span>
        </div>
        <span className="text-xl text-[var(--font-color)]">{subtitle}</span>
      </label>

      <div className="tab__content">
        <div className="tab__content-inner px-5 min-h-0">
          <div className="pb-4">
            <ul className="list-disc pl-5 space-y-4">
              {dataArray.map((data, index) => (
                <li
                  className="text-lg max-sm:text-base max-sm:w-3/4 gap-3"
                  key={`${data}${index}`}
                >
                  <div className="inline-flex items-center gap-3">
                    {data}
                    {linkArray?.length && (
                      <Link href={linkArray[index]} target="_blank">
                        <LinkIcon className="size-6 text-primary" />
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
