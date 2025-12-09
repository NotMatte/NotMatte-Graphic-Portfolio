import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NotMatte | Creative Designer & Developer",
  description:
    "Portfolio premium di NotMatte - Graphic Designer, Video Editor, Minecraft Designer e Web Developer. Soluzioni creative di alto livello per brand, server e aziende.",
  keywords: [
    "graphic design",
    "video editing",
    "web development",
    "minecraft design",
    "branding",
    "UI/UX",
    "motion graphics",
  ],
  authors: [{ name: "NotMatte" }],
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0d0b10",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
