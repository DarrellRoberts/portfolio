import React, { useRef, useEffect } from "react"

const HeroWaves = () => {
  const wavesCanvas = useRef<HTMLCanvasElement | null>(null)

  let time = 0
  const OnDraw = () => {
    time = time + 0.5
    // time
    if (wavesCanvas.current) {
      let dataLine = wavesCanvas.current?.getContext("2d")

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
          wavesCanvas.current.height * 0.47 - Math.cos(time + cnt * 0.05) * 15
        )
      }

      dataLine!.strokeStyle = "#e2d4bb"
      dataLine?.stroke()
    }
  }
  useEffect(() => {
    const timer = setInterval(OnDraw, 100)
    return () => clearInterval(timer)
  }, [wavesCanvas])
  return <canvas ref={wavesCanvas} width="200" height="600"></canvas>
}

export default HeroWaves
