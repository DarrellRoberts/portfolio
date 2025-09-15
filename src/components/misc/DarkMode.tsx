import { DarkContext } from "@/context/DarkContext"
import React, { useContext } from "react"

const DarkMode = () => {
  const { toggleDark } = useContext(DarkContext)
  return (
    <div
      className="rounded-full bg-primary p-6 cursor-pointer"
      onClick={toggleDark}
    />
  )
}

export default DarkMode
