"use client"

import { DarkContext } from "@/context/DarkContext"
import React, { useContext, useEffect, useRef } from "react"

const DarkMode = () => {
  const { toggleDark } = useContext(DarkContext)
  const dmCheckbox = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
    if (darkQuery.matches) {
      if (dmCheckbox?.current) {
        dmCheckbox.current.checked = true
      }
    }
  }, [dmCheckbox])
  return (
    <div className="dark-mode-container">
      <input
        type="checkbox"
        id="dark-mode-checkbox"
        ref={dmCheckbox}
        onClick={toggleDark}
      />
    </div>
  )
}

export default DarkMode
