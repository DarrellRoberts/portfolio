import DarkProvider from "@/context/DarkContext"
import Wrapper from "./Wrapper"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <DarkProvider>
      <Wrapper>{children}</Wrapper>
    </DarkProvider>
  )
}
