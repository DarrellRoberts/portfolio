import React, { useContext } from "react"
import LanguageSelector from "../misc/LanguageSelector"
import Logo from "../misc/Logo"
import HeaderMenu from "./HeaderMenu"
import DarkMode from "../misc/DarkMode"
import { DarkContext } from "@/context/DarkContext"

const Header = () => {
  const { isDark } = useContext(DarkContext)
  return (
    <>
      <div
        className={
          isDark
            ? "bg-[#081c3f77] sticky top-0 z-50 flex justify-between px-2"
            : "bg-[#e2d4bb77] sticky top-0 z-50 flex justify-between px-2"
        }
      >
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <DarkMode />
          <LanguageSelector />
          <HeaderMenu />
        </div>
      </div>
    </>
  )
}

export default Header
