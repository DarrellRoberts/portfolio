"use client";

import { createContext, useState } from "react";

const defaultValue = {
  isLightTheme: null,
  light: null,
  dark: null,
  toggleTheme: null,
}

export const ThemeContext = createContext(defaultValue);

export default function ThemeContextProvider(props) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const [light, setLight] = useState({
    mainText: "var(--secondaryColor)",
    secondaryText: "#FFFFFF",
    bg: "var(--mainColor)",
  });

  const [dark, setDark] = useState({
    mainText: "var(--mainColor)",
    secondaryText: "#000000",
    bg: "var(--secondaryColor)",
  });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme: isLightTheme,
        light: light,
        dark: dark,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}