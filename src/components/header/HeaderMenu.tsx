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

  const linksJson = [
    {
      text: t("navLinks.aboutMe"),
      href: params.project ? `/${locale}/#about` : "#about",
      icon: <UserIcon className="size-8" />,
    },
    {
      text: t("navLinks.skills"),
      href: params.project ? `/${locale}/#skills` : "#skills",
      icon: <LightBulbIcon className="size-8" />,
    },
    {
      text: t("navLinks.experience"),
      href: params.project ? `/${locale}/#experience` : "#experience",
      icon: <ClipboardDocumentListIcon className="size-8" />,
    },
    {
      text: t("navLinks.projects"),
      href: params.project ? `/${locale}/#projects` : "#projects",
      icon: <CodeBracketIcon className="size-8" />,
    },
    {
      text: t("navLinks.openSource"),
      href: params.project ? `/${locale}/#opensource` : "#opensource",
      icon: <UserGroupIcon className="size-8" />,
    },
    {
      text: t("navLinks.contact"),
      href: "#contact",
      icon: <EnvelopeIcon className="size-8" />,
    },
  ]
  return (
    <>
      <Button
        variant="ghost"
        onPress={onOpen}
        color="primary"
        className="bg-secondary"
        aria-label="header-menu-button"
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
                  {linksJson.map((link) => (
                    <Link
                      key={link.text}
                      href={link.href}
                      className="flex text-2xl justify-between items-center"
                      onPress={onClose}
                    >
                      {link.text} {link.icon}
                    </Link>
                  ))}
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
