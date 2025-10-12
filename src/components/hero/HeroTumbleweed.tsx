import React from "react"
import Image from "next/image"
import "./hero.css"

const HeroTumbleweed = () => {
  return (
    <div className="tumbleweed-class flex justify-center items-center w-25 absolute max-sm:bottom-[10%]">
      <Image
        src="/tumbleweed_light.svg"
        width={678.07}
        height={545.85}
        alt="blue_tumbleweed"
      />
    </div>
  )
}

export default HeroTumbleweed
