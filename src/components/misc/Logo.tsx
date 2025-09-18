import React, { useContext } from "react"
import { Image } from "@heroui/react"
import { DarkContext } from "@/context/DarkContext"
import NextImage from "next/image"
import Link from "next/link"
import { useCurrentLocale } from "../../../locales/client"

const Logo = () => {
  const { isDark } = useContext(DarkContext)
  const locale = useCurrentLocale()
  return (
    <Link className="flex justify-center items-center" href={`/${locale}`}>
      <Image
        as={NextImage}
        src={isDark ? "/dr_logo_dark.webp" : "/dr_logo_light.webp"}
        width={100}
        height={100}
        alt="dr-logo"
      />
    </Link>
  )
}

export default Logo
