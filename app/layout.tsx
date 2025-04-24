import type React from "react"
import "./globals.css"
import { Alexandria } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import LiveChatButton from "@/components/live-chat-button"

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-alexandria",
})

export const metadata = {
  title: "بشاير الخير لنقل الأثاث - خدمات نقل الأثاث المميزة في الكويت",
  description:
    "شركة بشاير الخير لنقل الأثاث توفر خدمات نقل وتغليف وفك وتركيب الأثاث بأعلى مستويات الجودة والأمان في جميع مناطق الكويت",
  keywords:
    "نقل أثاث, نقل اثاث, شركة نقل أثاث الكويت, فك وتركيب اثاث, تغليف اثاث, تخزين اثاث, نقل أثاث رخيص, افضل شركة نقل أثاث",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${alexandria.variable} font-alexandria`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          {/* <LiveChatButton /> */}
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
