import { Button } from "antd";
import { useContext } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";
import "./button.css"

export default function ButtonComponent({text}) {
  const { light, dark, isLightTheme } = useContext(ThemeContext);
  const themeStyles = isLightTheme ? light : dark;

  return (
    <Button className={isLightTheme ? "buttonCon" : "dark buttonCon"} type="primary" size="middle">
      {text}
    </Button>
  )
}
