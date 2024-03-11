import type { Metadata } from "next";
import "./globals.css";
import ThemeContextProvider from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Darrell Roberts",
  description: "Portfolio website of Darrell Roberts, fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContextProvider>
    <html lang="en">
      <head>
        <link rel="icon" href="./logo.jpg" type="image/jpg"/>
      </head>
      <body>
        {children}
        </body>
    </html>
    </ThemeContextProvider>
  );
}
