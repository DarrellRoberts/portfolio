"use client"

import React, { useContext, useState } from "react"
import { Image } from "@heroui/react"
import { DarkContext } from "@/context/DarkContext"
import NextImage from "next/image"
import Link from "next/link"
import { useCurrentLocale } from "../../../locales/client"
import HeroWaves from "../hero/HeroWaves"
import HeroTumbleweed from "../hero/HeroTumbleweed"

const Logo = () => {
  const [isHover, setIsHover] = useState<boolean>(false)
  const { isDark } = useContext(DarkContext)
  const locale = useCurrentLocale()
  return (
    <Link
      className="flex justify-center items-center rounded-full relative"
      href={`/${locale}`}
    >
      {isHover && (
        <div className=" flex w-35 h-35 absolute left-1/4 top-0">
          {isDark ? (
            <HeroWaves />
          ) : (
            <div className="scale-[0.35] w-1/10">
              <HeroTumbleweed />
            </div>
          )}
        </div>
      )}
      <Image
        as={NextImage}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        src={isDark ? "/dr_logo_dark.webp" : "/dr_logo_light.webp"}
        width={100}
        height={100}
        alt="dr-logo"
      />
    </Link>
  )
}

export default Logo
