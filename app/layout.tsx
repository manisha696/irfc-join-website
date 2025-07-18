import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IRFC - Innovation Research Forum & Community",
  description: "Join the future of innovation research in electronics and software development",
  keywords: "innovation, research, electronics, software, community, forum",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <Navigation />
        <main className="relative">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
