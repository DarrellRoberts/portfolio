import React from "react"
import DarkMode from "../misc/DarkMode"
import LanguageSelector from "../misc/LanguageSelector"
import Logo from "../misc/Logo"
import HeaderMenu from "./HeaderMenu"

const Header = () => {
  return (
    <div className="flex w-full justify-between px-2">
      <Logo />
      <div className="flex items-center gap-4">
        <HeaderMenu />
        <LanguageSelector />
        <DarkMode />
      </div>
    </div>
  )
}

export default Header
