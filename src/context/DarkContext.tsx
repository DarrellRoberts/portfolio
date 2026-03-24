"use client"

import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react"

export const DarkContext = createContext({
  isDark: true,
  toggleDark: () => {},
})

const DarkProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState<boolean>(false)

  const toggleDark = useCallback(() => {
    setIsDark(!isDark)
  }, [isDark])

  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
    if (darkQuery.matches) {
      toggleDark()
    }
  }, [])

  useEffect(() => {
    const htmlElement = document.documentElement

    if (isDark) {
      htmlElement.classList.add("dark")
    } else {
      htmlElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <DarkContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  )
}

export default DarkProvider
