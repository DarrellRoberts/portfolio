"use client"

import React, { createContext, PropsWithChildren, useState } from "react"

export const DarkContext = createContext({
  isDark: true,
  toggleDark: () => {},
})

const DarkProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState<boolean>(true)

  const toggleDark = () => {
    setIsDark(!isDark)
  }

  return (
    <DarkContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  )
}

export default DarkProvider
