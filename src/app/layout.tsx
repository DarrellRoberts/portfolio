"use client"

import DarkProvider from "@/context/DarkContext"
import Wrapper from "./Wrapper"
import "./globals.css"
import { HeroUIProvider } from "@heroui/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <HeroUIProvider>
      <DarkProvider>
        <Wrapper>{children}</Wrapper>
      </DarkProvider>
    </HeroUIProvider>
  )
}
