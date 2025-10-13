"use client"

import Header from "@/components/header/Header"
import { I18nProviderClient } from "../../../locales/client"
import { ReactNode } from "react"
import Footer from "@/components/footer/Footer"

export default function LocaleWrapper({
  children,
  locale,
}: {
  children: ReactNode
  locale: string
}) {
  return (
    <I18nProviderClient locale={locale}>
      <Header />
      {children}
      <Footer />
    </I18nProviderClient>
  )
}
