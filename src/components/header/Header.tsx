import React from "react"
import LanguageSelector from "../misc/LanguageSelector"
import Logo from "../misc/Logo"
import HeaderMenu from "./HeaderMenu"
import DarkMode from "../misc/DarkMode"

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between px-2 bg-secondary">
        <div className="rounded-[50%] bg-secondary flex justify-center items-center">
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
