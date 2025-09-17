"use client"

import "./globals.css"
import { useContext } from "react"
import { DarkContext } from "@/context/DarkContext"
import localFont from "next/font/local"
// import d from "../../public/"

const sansation = localFont({
  src: [
    {
      path: "../../public/fonts/Sansation_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sansation_Light.ttf",
      style: "light",
    },
    {
      path: "../../public/fonts/Sansation_Bold.ttf",
      style: "bold",
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isDark } = useContext(DarkContext)
  return (
    <html
      className={
        isDark ? `dark ${sansation.className}` : `light ${sansation.className}`
      }
    >
      <body>{children}</body>
    </html>
  )
}
