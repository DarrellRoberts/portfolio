"use client"

import DarkProvider from "@/context/DarkContext"

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <DarkProvider>{children}</DarkProvider>
}
