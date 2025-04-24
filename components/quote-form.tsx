"use client"

import type React from "react"
import Image from "next/image"
 import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-muted py-8 md:py-12 lg:py-16">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <Image 
                src="/logo.png" 
                alt="بشاير الخير" 
                width={80} 
                height={80} 
                className="relative rounded-lg transform transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">بشاير الخير لنقل الأثاث</h2>
              <p className="text-muted-foreground">خدمة نقل أثاث احترافية على مدار الساعة</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link
              href="tel:+96590905157"
              className="gap-2 min-w-[180px] bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transform hover:scale-105 duration-300 shadow-lg shadow-primary/25 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8"
            >
              <Phone className="h-5 w-5 animate-pulse" />
              <span dir="ltr">اتصل الآن</span>
            </Link>

            <Link
              href="https://wa.me/96590905157"
              target="_blank"
             
              className="gap-2 min-w-[180px] bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-secondary/25 text-foreground inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8"
            >
              <MessageSquare className="h-5 w-5 animate-pulse" />
              واتساب
            </Link>

    
          </div>
        </div>
      </div>
    </section>
  )
}
