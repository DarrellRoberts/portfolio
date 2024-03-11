import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="icon" href="./logo.jpg" type="image/jpg" sizes="10x10" />
      </head>
      <body>
        {children}
        </body>
    </html>
  );
}
