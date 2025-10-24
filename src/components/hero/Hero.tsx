"use client"

import React, { useContext, useState } from "react"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"
import HeroWaves from "./HeroWaves"
import "./hero.css"
import HeroTumbleweed from "./HeroTumbleweed"
import { useI18n } from "../../../locales/client"

const Hero = () => {
  const [startAnimation, setStartAnimation] = useState<boolean>(false)

  const t = useI18n()
  const { isDark } = useContext(DarkContext)

  const sinkShip = () => {
    if (startAnimation) return
    setStartAnimation(true)
    setTimeout(() => {
      setStartAnimation(false)
    }, 4000)
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-center max-md:flex-col">
        <div className="w-200 max-md:w-full aspect-[1/0.7] max-xl:aspect-[1/0.5] max-md:aspect-auto relative">
          <Image
            data-testid="hero-image"
            src={isDark ? "/hero-light.webp" : "/hero-dark.webp"}
            fill
            alt="darrell_roberts"
            fetchPriority="high"
            objectFit="contain"
            sizes="(max-width: 850px) 100vw, 1600px"
          />
        </div>
        <h1 className="text-3xl self-center">{t("hero.frontend")}</h1>
      </div>
      {isDark ? (
        <div className="flex justify-center items-center max-md:items-baseline max-md:h-50 relative">
          <div className="flex flex-col justify-center w-50 absolute max-md:bottom-auto">
            <Image
              onClick={sinkShip}
              className={
                startAnimation
                  ? "sunken-ship-class w-50 h-50 z-1 absolute bottom-[37%] right-[5%]"
                  : "ship-class w-50 h-50 z-1 absolute bottom-[37%] right-[5%] cursor-pointer"
              }
              src="/ship_dark.webp"
              alt="ship"
              width={500}
              height={500}
            />
            <div className="flex w-full h-100 z-0">
              <HeroWaves />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center relative max-sm:h-50">
          <div className="flex flex-col min-md:justify-start w-50 cursor-pointer min-md:absolute min-md:bottom-1/2">
            <Image
              onClick={sinkShip}
              className="w-50 h-50 z-1 min-md:absolute min-md:bottom-[37%] min-md:right-[5%]"
              src={"/cactus_light.webp"}
              alt={"cactus"}
              width={500}
              height={500}
            />
          </div>
          {startAnimation && <HeroTumbleweed />}
        </div>
      )}
    </div>
  )
}

export default Hero
