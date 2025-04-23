"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface ContactButtonsProps {
  phoneNumber: string
}

export default function ContactButtons({ phoneNumber }: ContactButtonsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/${phoneNumber}`
  }

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex flex-col gap-4 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Button
        onClick={handleCall}
        size="icon"
        className="h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 animate-float"
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">اتصل بنا</span>
      </Button>
      <Button
        onClick={handleWhatsApp}
        size="icon"
        className="h-14 w-14 rounded-full bg-green-600 shadow-lg hover:bg-green-700 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">واتساب</span>
      </Button>
    </div>
  )
}
