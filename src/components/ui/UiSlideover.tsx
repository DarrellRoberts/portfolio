import { ComponentType, ReactNode, RefObject, useRef } from "react"
import "./styles/ui-slideover.css"
import Link from "next/link"
import { IconController } from "./IconController"
import { IconKeys } from "@/types/Icon"

type Props = {
  linksJson: { text: string; href: string; icon: string }[]
  headerComponent: ComponentType<unknown>
  footerComponent: ComponentType<unknown>
}

export const UiSlideover = ({
  linksJson,
  headerComponent: HeaderComponent,
  footerComponent: FooterComponent,
}: Props) => {
  const menu = useRef(null)

  const Container = UiSlideover.Container
  const Header = UiSlideover.Header
  const Body = UiSlideover.Body
  const Footer = UiSlideover.Footer
  return (
    <Container menu={menu}>
      <Header headerComponent={HeaderComponent} />
      <Body linksJson={linksJson} menu={menu} />
      <Footer footerComponent={FooterComponent} />
    </Container>
  )
}

type UiSlideoverProps = {
  children: ReactNode
  headerComponent: ComponentType<unknown>
  menu: RefObject<HTMLInputElement>
  linksJson: { text: string; href: string; icon: string }[]
  footerComponent: ComponentType<unknown>
}

UiSlideover.Header = ({
  headerComponent: HeaderComponent,
}: Pick<UiSlideoverProps, "headerComponent">) => {
  return (
    <div>
      <HeaderComponent />
      <div className="_header-1_remote-ctrl" aria-hidden="true">
        <label htmlFor="header-1_toggle"></label>
      </div>
    </div>
  )
}

UiSlideover.Container = ({
  children,
  menu,
}: Pick<UiSlideoverProps, "children" | "menu">) => {
  return (
    <div className="header-container">
      <div className="_header-1_ctrl">
        <input
          type="checkbox"
          id="header-1_toggle"
          aria-label="navigation_menu"
          ref={menu}
        />
        <label htmlFor="header-1_toggle">Display menu</label>
      </div>
      <label
        htmlFor="header-1_toggle"
        className="_header-1_backdrop-closer"
      ></label>
      <nav id="header-1-menu" className="_header-1_menu">
        {children}
      </nav>
    </div>
  )
}

UiSlideover.Body = ({
  linksJson,
  menu,
}: Pick<UiSlideoverProps, "linksJson" | "menu">) => {
  const closeMenu = () => {
    if (menu.current) {
      menu.current.checked = false
    }
  }
  return (
    <>
      <div className="flex flex-col h-full justify-evenly">
        {linksJson.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            onClick={closeMenu}
            className="flex text-2xl justify-between items-center py-4 px-2 text-primary hover:brightness-200 transition-all"
          >
            {link.text}
            <IconController label={link.icon as IconKeys} tsClass="size-8" />
          </Link>
        ))}
      </div>
    </>
  )
}

UiSlideover.Footer = ({
  footerComponent: FooterComponent,
}: Pick<UiSlideoverProps, "footerComponent">) => {
  return (
    <div className="flex justify-end">
      <FooterComponent />
    </div>
  )
}
