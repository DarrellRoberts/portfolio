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
import { useI18n } from "../../../locales/client"
import DarkMode from "../misc/DarkMode"
import LanguageSelector from "../misc/LanguageSelector"

const HeaderMenu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const t = useI18n()

  return (
    <>
      <Button
        variant="ghost"
        onPress={onOpen}
        color="primary"
        className="bg-secondary"
      >
        <Bars3Icon />
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        style={{ borderRadius: "0px" }}
      >
        <DrawerContent>
          {(onClose) => (
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
                  <Link
                    href="#about"
                    className="flex gap-4 text-2xl"
                    onPress={onClose}
                  >
                    {t("navLinks.aboutMe")} <UserIcon className="size-8" />{" "}
                  </Link>
                  <Link
                    href="#experience"
                    className="flex gap-4 text-2xl"
                    onPress={onClose}
                  >
                    {t("navLinks.experience")}
                    <ClipboardDocumentListIcon className="size-8" />
                  </Link>
                  <Link
                    href="#skills"
                    className="flex gap-4 text-2xl"
                    onPress={onClose}
                  >
                    {t("navLinks.skills")}
                    <LightBulbIcon className="size-8" />
                  </Link>
                  <Link
                    href="#projects"
                    className="flex gap-4 text-2xl"
                    onPress={onClose}
                  >
                    {t("navLinks.projects")}
                    <CodeBracketIcon className="size-8" />
                  </Link>
                  <Link
                    href="#opensource"
                    className="flex gap-4 text-2xl"
                    onPress={onClose}
                  >
                    Open Source
                    <CodeBracketIcon className="size-8" />
                  </Link>
                  <Link
                    href="#contact"
                    className="flex gap-4 text-2xl"
                    onPress={onClose}
                  >
                    {t("navLinks.contact")} <EnvelopeIcon className="size-8" />
                  </Link>
                </div>

                <DrawerFooter>
                  <LanguageSelector />
                </DrawerFooter>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HeaderMenu
