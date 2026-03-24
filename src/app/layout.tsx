import "./globals.css"
import localFont from "next/font/local"
import Wrapper from "./Wrapper"

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
  return (
    <html
      className={`${sansation.className}`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })()
            `,
          }}
        />
        <link rel="icon" href="/dr_favicon.webp" type="image/webp" />
      </head>
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
