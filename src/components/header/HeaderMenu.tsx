import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Link,
  useDisclosure,
} from "@heroui/react"
import {
  Bars3Icon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  LightBulbIcon,
  UserIcon,
} from "@heroicons/react/16/solid"
import React from "react"
import Logo from "../misc/Logo"
import { useCurrentLocale, useI18n } from "../../../locales/client"
import DarkMode from "../misc/DarkMode"
import LanguageSelector from "../misc/LanguageSelector"
import IconEN from "../misc/icons/IconEN"
import IconDE from "../misc/icons/IconDE"

const HeaderMenu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const t = useI18n()
  const locale = useCurrentLocale()

  return (
    <>
      <Button variant="ghost" onPress={onOpen} color="primary">
        <Bars3Icon />
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        style={{ borderRadius: "0px" }}
      >
        <DrawerContent>
          <>
            <DrawerHeader className="flex w-full items-center justify-between gap-1">
              <div className="flex items-center">
                <Logo />
                <div>
                  Darrell Roberts
                  <br />
                  Frontend Engineer
                </div>
              </div>
              <DarkMode />
            </DrawerHeader>
            <DrawerBody>
              <div className="flex flex-col h-full justify-evenly">
                <Link href="" className="flex gap-4">
                  {t("navLinks.aboutMe")} <UserIcon className="size-6" />{" "}
                </Link>
                <Link href="" className="flex gap-4">
                  {t("navLinks.experience")}
                  <ClipboardDocumentListIcon className="size-6" />
                </Link>
                <Link href="" className="flex gap-4">
                  {t("navLinks.skills")}
                  <LightBulbIcon className="size-6" />
                </Link>
                <Link href="" className="flex gap-4">
                  {t("navLinks.projects")}
                  <CodeBracketIcon className="size-6" />
                </Link>
                <Link href="" className="flex gap-4">
                  {t("navLinks.contact")} <EnvelopeIcon className="size-6" />
                </Link>
              </div>
              <DrawerFooter>
                <div className="w-10">
                  {locale === "en" ? <IconEN /> : <IconDE />}
                </div>
              </DrawerFooter>
            </DrawerBody>
          </>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HeaderMenu
