import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
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
import { useCurrentLocale } from "../../../locales/client"
import IconEN from "../misc/icons/IconEN"
import IconDE from "../misc/icons/IconDE"

const HeaderMenu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const locale = useCurrentLocale()
  return (
    <>
      <Button variant="bordered" onPress={onOpen}>
        <Bars3Icon />
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
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
              <div className="w-10">
                {locale === "en" ? <IconEN /> : <IconDE />}
              </div>
            </DrawerHeader>
            <DrawerBody>
              <div className="flex flex-col h-full justify-evenly">
                <Link href="" className="flex gap-4">
                  About me <UserIcon className="size-6" />{" "}
                </Link>
                <Link href="" className="flex gap-4">
                  Experience <ClipboardDocumentListIcon className="size-6" />
                </Link>
                <Link href="" className="flex gap-4">
                  Skills <LightBulbIcon className="size-6" />
                </Link>
                <Link href="" className="flex gap-4">
                  Projects <CodeBracketIcon className="size-6" />
                </Link>
                <Link href="" className="flex gap-4">
                  Contact <EnvelopeIcon className="size-6" />
                </Link>
              </div>
            </DrawerBody>
          </>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HeaderMenu
