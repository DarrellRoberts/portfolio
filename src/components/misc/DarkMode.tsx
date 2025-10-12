"use client"

import { DarkContext } from "@/context/DarkContext"
import React, { useContext } from "react"

const DarkMode = () => {
  const { toggleDark } = useContext(DarkContext)
  return (
    <div
      className="rounded-full bg-primary p-5 cursor-pointer hover:p-6 transition-all transition-discrete"
      onClick={toggleDark}
    />
  )
}

export default DarkMode
