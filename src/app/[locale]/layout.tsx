"use client"

import { I18nProviderClient, useCurrentLocale } from "../../../locales/client"
import "@/app/globals.css"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = useCurrentLocale()
  return (
    <I18nProviderClient locale={locale}>
      <Header />
      {children}
      <Footer />
    </I18nProviderClient>
  )
}
