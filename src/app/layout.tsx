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
      <body>
        {children}
        </body>
    </html>
  );
}
