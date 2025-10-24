"use client"

import DarkProvider from "@/context/DarkContext"
import { HeroUIProvider } from "@heroui/react"

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <HeroUIProvider>
      <DarkProvider>{children}</DarkProvider>
    </HeroUIProvider>
  )
}
