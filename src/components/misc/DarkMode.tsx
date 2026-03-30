"use client"
import { DarkContext } from "@/context/DarkContext"
import { useContext, useEffect } from "react"

export const DarkMode = () => {
  const { isDark, toggleDark } = useContext(DarkContext)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div className="dark-mode-container">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleDark}
        className="dark-mode-input"
      />
    </div>
  )
}
