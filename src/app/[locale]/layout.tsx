import { I18nProviderClient } from "../../../locales/client"
import type { Metadata } from "next"
import { Providers } from "@/app/providers" // Assuming this is also now a client component
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Darrell Roberts - Freelance Web Developer",
  description:
    "Portfolio website of Darrell Roberts. I'm a Fullstack developer who lives in Berlin, Germany with a focus on Frontend. I work primarily with TypeScript on the following frameworks or libraries: React, Next, Vue and Nuxt. However, I also work with Node.js in the Backend and have experience with MongoDB and creating my own APIs. I currently volunteer remotely at the San Francisco-based Open Library, as a Freelance Developer.",
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params
  return (
    <I18nProviderClient locale={locale}>
      <Providers>{children}</Providers>
    </I18nProviderClient>
  )
}
