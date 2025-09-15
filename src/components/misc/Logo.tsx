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
    <Link href={`/${locale}`}>
      <Image
        as={NextImage}
        src={isDark ? "/dr_logo_dark.webp" : "/dr_logo_light.webp"}
        height={100}
        width={100}
        alt="dr-logo"
      />
    </Link>
  )
}

export default Logo
