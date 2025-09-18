"use client"

import React, { useContext } from "react"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"

const Hero = () => {
  const { isDark } = useContext(DarkContext)
  return (
    <div className="flex w-full justify-center max-md:flex-col max-md:items-center px-6 pt-15">
      <Image
        className="w-175"
        src={isDark ? "/hero-light.webp" : "/hero-dark.webp"}
        width={1050}
        height={700}
        alt="darrell_roberts"
      />
      <h1 className="text-3xl self-center">Frontend Engineer</h1>
      <div className="flex flex-col justify-end">
        <Image
          className="w-50 h-50"
          src={isDark ? "/ship_dark.webp" : "/cactus_light.webp"}
          alt={isDark ? "cactus" : "ship"}
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default Hero
