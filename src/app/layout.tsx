import DarkProvider from "@/context/DarkContext"
import Wrapper from "./Wrapper"
import "./globals.css"
import { Metadata } from "next"
import { HeroUIProvider } from "@heroui/react"

export const metadata: Metadata = {
  title: "Darrell Roberts - Freelance Web Developer",
  description:
    "Portfolio website of Darrell Roberts. I'm a Fullstack developer who lives in Berlin, Germany with a focus on Frontend. I work primarily with TypeScript on the following frameworks or libraries: React, Next, Vue and Nuxt. However, I also work with Node.js in the Backend and have experience with MongoDB and creating my own APIs. I currently volunteer remotely at the San Francisco-based Open Library, as a Freelance Developer.",
}

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
