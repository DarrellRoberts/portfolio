"use client"

import React, { useContext, useRef, useState } from "react"
import Image from "next/image"
import { DarkContext } from "@/context/DarkContext"
import HeroWaves from "./HeroWaves"
import "./hero.css"

const Hero = () => {
  const [sunkenShip, setSunkenShip] = useState<boolean>(false)
  const { isDark } = useContext(DarkContext)

  const sinkShip = () => {
    if (sunkenShip) return
    setSunkenShip(true)
    setTimeout(() => {
      setSunkenShip(false)
    }, 4000)
  }
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
      {isDark ? (
        <div className="flex justify-center h-100 max-sm:h-55">
          <div className="flex flex-col justify-center w-50 absolute bottom-[-10%] max-sm:bottom-auto">
            <Image
              onClick={sinkShip}
              className={
                sunkenShip
                  ? "sunken-ship-class w-50 h-50 z-1 absolute bottom-[37%] right-[5%]"
                  : "ship-class w-50 h-50 z-1 absolute bottom-[37%] right-[5%] cursor-pointer"
              }
              src="/ship_dark2.webp"
              alt="ship"
              width={500}
              height={500}
            />
            <div className="flex w-10 h-100 z-0">
              <HeroWaves />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center max-sm:h-55">
          <div className="flex flex-col justify-center w-50 absolute bottom-0 max-sm:static">
            <Image
              className="w-50 h-50 z-1 absolute bottom-[37%] right-[5%] max-sm:static"
              src={"/cactus_light.webp"}
              alt={"cactus"}
              width={500}
              height={500}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
