import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react"
import React from "react"
import { useChangeLocale, useCurrentLocale } from "../../../locales/client"
import IconEN from "./icons/IconEN"
import IconDE from "./icons/IconDE"

const LanguageSelector = () => {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">
            {locale === "en" ? "English" : "Deutsch"}
            <div className="w-8">
              {locale === "en" ? <IconEN /> : <IconDE />}
            </div>
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="english">
            <Button
              onPress={() => changeLocale("en")}
              variant="light"
              className="flex gap-2 justify-around w-3/4"
            >
              English{" "}
              <div className="w-8">
                <IconEN />
              </div>
            </Button>
          </DropdownItem>
          <DropdownItem key="deutsch">
            <Button
              onPress={() => changeLocale("de")}
              variant="light"
              className="flex gap-2 justify-around w-3/4"
            >
              Deutsch{" "}
              <div className="w-8">
                <IconDE />
              </div>
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default LanguageSelector
