"use client"

import { Dispatch, ReactNode, useContext } from "react"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"

type DataObject = {
  title: string
  skillsImages: string[]
  skillsLabels: string[]
}

type Props = {
  dataObject: DataObject
  setImage: Dispatch<React.SetStateAction<string | null>>
  setLabel: Dispatch<React.SetStateAction<string | null>>
}

export const UiCard = ({ dataObject, setImage, setLabel }: Props) => {
  const { isDark } = useContext(DarkContext)

  const Container = UiCard.Container
  const Header = UiCard.Header
  const Body = UiCard.Body

  return (
    <Container isDark={isDark}>
      <Header title={dataObject.title} />
      <Body setImage={setImage} setLabel={setLabel} dataObject={dataObject} />
    </Container>
  )
}

type UiCardProps = {
  children: ReactNode
  title: string
  setImage: Dispatch<React.SetStateAction<string | null>>
  setLabel: Dispatch<React.SetStateAction<string | null>>
  dataObject: DataObject
  isDark: boolean
}

UiCard.Container = ({
  children,
  isDark,
}: Pick<UiCardProps, "children" | "isDark">) => (
  <div
    style={{ background: isDark ? "#18181B" : "#ffffff" }}
    className="py-4 h-75 max-xl:h-65 max-sm:h-75 aspect-[18/20] z-0 overflow-visible relative rounded-2xl"
  >
    {children}
  </div>
)

UiCard.Header = ({ title }: Pick<UiCardProps, "title">) => (
  <div className="pb-0 pt-2 px-4 flex-col items-start">
    <h2 className="font-bold text-large text-primary">{title}</h2>
  </div>
)

UiCard.Body = ({
  setImage,
  setLabel,
  dataObject,
}: Omit<UiCardProps, "children" | "title" | "isDark">) => (
  <div className="grid grid-cols-3 gap-2 overflow-visible">
    {dataObject.skillsImages.map((skillImage, index) => (
      <div
        className="relative inline-display cursor-pointer group overflow-visible flex items-center justify-center p-4 hover:p-1 transition-all transition-discrete h-15"
        key={dataObject.skillsLabels[index]}
        onMouseEnter={() => {
          setImage(skillImage)
          setLabel(dataObject.skillsLabels[index])
        }}
        onMouseLeave={() => {
          setImage(null)
          setLabel(null)
        }}
      >
        <div className="flex items-center justify-center max-sm:w-auto">
          <Image
            width={50}
            height={50}
            alt={dataObject.skillsLabels[index]}
            src={skillImage}
          />
        </div>
        <span className="opacity-0 w-30 bg-secondary text-primary text-center rounded-2xl absolute z-1000 group-hover:opacity-100 transition-all transition-discrete border-1 border-primary top-[90%] max-sm:block min-sm:hidden">
          {dataObject.skillsLabels[index]}
        </span>
      </div>
    ))}
  </div>
)
