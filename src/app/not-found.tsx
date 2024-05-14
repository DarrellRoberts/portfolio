"use client";

import { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";

export default function notFound() {
    const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);
    const themeStyles = isLightTheme ? light : dark;
  return (
    <main style={{background: themeStyles.bg}} className="h-screen flex justify-center items-center text-center">
        <h1 style={{color: themeStyles.mainText}} className="heroTitle">
            Page not found
        </h1>
    </main>
  )
}
