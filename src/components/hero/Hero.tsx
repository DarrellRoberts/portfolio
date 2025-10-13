"use client"

import React, { useContext, useRef, useState } from "react"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"
import HeroWaves from "./HeroWaves"
import "./hero.css"
import HeroTumbleweed from "./HeroTumbleweed"

const Hero = () => {
  const [startAnimation, setStartAnimation] = useState<boolean>(false)

  const { isDark } = useContext(DarkContext)

  const sinkShip = () => {
    if (startAnimation) return
    setStartAnimation(true)
    setTimeout(() => {
      setStartAnimation(false)
    }, 4000)
  }
  return (
    <div className="flex flex-col w-full pt-15">
      <div className="flex w-full justify-center px-6 max-sm:flex-col">
        <Image
          className="w-175"
          src={isDark ? "/hero-light.webp" : "/hero-dark.webp"}
          width={1050}
          height={700}
          alt="darrell_roberts"
          priority
        />
        <h1 className="text-3xl self-center">Frontend Engineer</h1>
      </div>
      {isDark ? (
        <div className="flex justify-center items-baseline h-50 relative">
          <div className="flex flex-col justify-center w-50 absolute bottom-[-10%] max-sm:bottom-auto">
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
        <div className="flex justify-center relative h-50">
          <div className="flex flex-col min-md:justify-center w-50 cursor-pointer min-md:absolute min-md:bottom-1/2">
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
