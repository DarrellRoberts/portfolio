import { ReactNode } from "react"
import "./ui-accordion.css"

type Props = {
  dataArray: string[]
  title: string
  subtitle: string
  note: string
  id: string
}

export const UiAccordion = ({
  dataArray,
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
  title,
  subtitle,
  note,
  id,
}: Omit<UiAccordionProps, "children">) => {
  return (
    <div className="tab">
      <input type="checkbox" className="hidden-input" id={`cb${id}`} />
      <label
        htmlFor={`cb${id}`}
        className="tab__label flex h-full w-full justify-between my-5"
      >
        <div className="flex flex-col">
          <span className="text-primary text-xl">{title}</span>
          <span className="text-[var(--neutral-color)] text-base">{note}</span>
        </div>
        <span className="text-xl text-[var(--font-color)]">{subtitle}</span>
      </label>

      <div className="tab__content">
        <div className="tab__content-inner px-5">
          <ul className="pb-4">
            {dataArray.map((data, index) => (
              <div
                key={`${data}${index}`}
                className="max-sm:flex max-sm:flex-col max-sm:items-center"
              >
                <li className="list-disc text-lg max-sm:text-base max-sm:w-3/4">
                  {data}
                </li>
                <br />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
