import "@/app/globals.css"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import LocaleWrapper from "./LocaleWrapper"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Darrell Roberts - Frontend Engineer",
  description:
    "Portfolio website of Darrell Roberts. I'm a Frontend Engineer who lives in Berlin, Germany with a focus on Frontend. I work primarily with TypeScript on the following frameworks or libraries: React, Next, Vue and Nuxt. However, I also work with Node.js in the Backend and have experience with MongoDB and creating my own APIs.",
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <LocaleWrapper locale={locale}>{children}</LocaleWrapper>
}
