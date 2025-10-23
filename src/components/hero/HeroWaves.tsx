"use client"

import React, { useRef, useEffect } from "react"

const HeroWaves = () => {
  const wavesCanvas = useRef<HTMLCanvasElement | null>(null)
  let time = useRef(0)
  let animationFrameId = useRef<number>()

  const onDraw = () => {
    time.current = time.current + 0.11
    if (wavesCanvas.current) {
      let dataLine = wavesCanvas.current?.getContext("2d")

      if (dataLine) {
        dataLine?.clearRect(
          0,
          0,
          wavesCanvas.current.width,
          wavesCanvas.current.height
        )
        dataLine?.beginPath()

        for (let cnt = -1; cnt <= wavesCanvas.current.width; cnt++) {
          dataLine?.lineTo(
            cnt,
            wavesCanvas.current.height * 0.47 -
              Math.cos(time.current + cnt * 0.05) * 15
          )
        }

        dataLine!.strokeStyle = "#e2d4bb"
        dataLine?.stroke()
      }
    }
    animationFrameId.current = window.requestAnimationFrame(onDraw)
  }
  useEffect(() => {
    animationFrameId.current = window.requestAnimationFrame(onDraw)
    return () => {
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [wavesCanvas])
  return <canvas ref={wavesCanvas} width="200" height="600"></canvas>
}

export default HeroWaves
