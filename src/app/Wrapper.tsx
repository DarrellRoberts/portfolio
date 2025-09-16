"use client"

import Header from "@/components/header/Header"
import "./globals.css"
import { useContext } from "react"
import { DarkContext } from "@/context/DarkContext"
import Footer from "@/components/footer/Footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isDark } = useContext(DarkContext)
  return (
    <html className={isDark ? "dark" : "light"}>
      <body>
        {children}
      </body>
    </html>
  )
}
