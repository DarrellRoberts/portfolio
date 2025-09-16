"use client"

import React, { useContext } from "react"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"

const Hero = () => {
  const { isDark } = useContext(DarkContext)
  return (
    <div className="h-150 max-sm:h-85 flex w-full justify-center max-md:flex-col max-md:items-center px-6">
      <Image
        className="w-175"
        src={isDark ? "/hero-light.webp" : "/hero-dark.webp"}
        width={700}
        height={100}
        alt="darrell_roberts"
      />
      <h1 className="text-3xl self-center">Frontend Engineer</h1>
    </div>
  )
}

export default Hero
