"use client"

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
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/16/solid"
import React from "react"
import Logo from "../misc/Logo"
import { useCurrentLocale, useI18n } from "../../../locales/client"
import DarkMode from "../misc/DarkMode"
import LanguageSelector from "../misc/LanguageSelector"
import { useParams } from "next/navigation"

const HeaderMenu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const t = useI18n()
  const locale = useCurrentLocale()
  const params = useParams()

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
                    href={params.project ? `/${locale}/#about` : "#about"}
                    className="flex text-2xl justify-between items-center"
                    onPress={onClose}
                  >
                    {t("navLinks.aboutMe")} <UserIcon className="size-8" />{" "}
                  </Link>
                  <Link
                    href={params.project ? `/${locale}/#skills` : "#skills"}
                    className="flex text-2xl justify-between items-center"
                    onPress={onClose}
                  >
                    {t("navLinks.skills")}
                    <LightBulbIcon className="size-8" />
                  </Link>
                  <Link
                    href={
                      params.project ? `/${locale}/#experience` : "#experience"
                    }
                    className="flex text-2xl justify-between items-center"
                    onPress={onClose}
                  >
                    {t("navLinks.experience")}
                    <ClipboardDocumentListIcon className="size-8" />
                  </Link>
                  <Link
                    href={params.project ? `/${locale}/#projects` : "#projects"}
                    className="flex text-2xl justify-between items-center"
                    onPress={onClose}
                  >
                    {t("navLinks.projects")}
                    <CodeBracketIcon className="size-8" />
                  </Link>
                  <Link
                    href={
                      params.project ? `/${locale}/#opensource` : "#opensource"
                    }
                    className="flex text-2xl justify-between items-center"
                    onPress={onClose}
                  >
                    Open Source
                    <UserGroupIcon className="size-8" />
                  </Link>
                  <Link
                    href={params.project ? `/${locale}/#contact` : "#contact"}
                    className="flex text-2xl justify-between items-center"
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
