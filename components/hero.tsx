"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Truck, Package, Clock, Shield, MapPin, CheckCircle, Phone } from "lucide-react"

const slides = [
  {
    image: "/car.jpg",
    title: "بشاير الخير لنقل الأثاث والعفش في الكويت",
    description: "أفضل شركة نقل عفش في الكويت بخبرة 10 سنوات وفريق محترف من النجارين والفنيين لنقل الأثاث المنزلي بأمان وضمان عدم التلف",
    highlightText: "أفضل شركة نقل عفش",
  },
  {
    image: "/car2.jpg",
    title: "خدمات فك وتركيب وتغليف الأثاث المتكاملة",
    description: "نقدم خدمات فك وتركيب غرف النوم والمطابخ والستائر وتغليف الأثاث الزجاجي والخشبي بأفضل مواد التغليف وبأيدي فنيين متخصصين",
    highlightText: "فك وتركيب وتغليف",
  },
  {
    image: "/car3.jpg",
    title: "خدمة نقل عفش 24 ساعة في جميع مناطق الكويت",
    description: "نقدم خدمات نقل العفش في جميع محافظات الكويت: العاصمة، حولي، الفروانية، الأحمدي، الجهراء، ومبارك الكبير بأسعار تنافسية وخدمة على مدار الساعة",
    highlightText: "خدمة 24 ساعة",
  },
  {
    image: "/car3.jpg",
    title: "تخزين الأثاث والعفش بضمان في الكويت",
    description: "نوفر مستودعات آمنة لتخزين الأثاث والعفش لفترات قصيرة وطويلة مع ضمان الحماية من الرطوبة والحشرات وأنظمة مراقبة على مدار الساعة",
    highlightText: "تخزين آمن بضمان",
  },
  {
    image: "/car2.jpg",
    title: "أسعار تنافسية لنقل العفش في الكويت",
    description: "نقدم أرخص الأسعار لخدمات نقل الأثاث والعفش مع عروض وخصومات خاصة للمنازل والفلل والمكاتب والشركات. اتصل الآن للحصول على عرض سعر مجاني",
    highlightText: "أرخص الأسعار",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    resetAutoPlayTimer()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    resetAutoPlayTimer()
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    resetAutoPlayTimer()
  }

  const resetAutoPlayTimer = () => {
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current)
    }

    if (isAutoPlaying) {
      autoPlayTimeoutRef.current = setTimeout(() => {
        nextSlide()
      }, 5000)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  useEffect(() => {
    resetAutoPlayTimer()

    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current)
      }
    }
  }, [currentSlide, isAutoPlaying])

  return (
    <section
      className="relative h-[90vh] min-h-[600px] max-h-[800px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              fill
              alt={slide.title}
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-block bg-primary px-4 py-1 rounded-full text-primary-foreground text-sm font-medium mb-4 animate-fade-in">
              {slides[currentSlide].highlightText}
            </div>
            <h1 className="text-2xl font-semibold tracking-tighter sm:text-5xl md:text-4xl lg:text-4xl mb-6 leading-tight animate-fade-in text-shadow">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in stagger-1 text-shadow opacity-90">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-2">
              <Link href="tel:+96590905157">
                <Button size="lg" className="w-full sm:w-auto text-lg shine-effect animate-ripple button-3d">
                  احصل على عرض سعر
                </Button>
              </Link>
              <Link href="tel:90905157">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل الآن
                </Button>
              </Link>
            </div>

            {/* Trusted by */}
            <div className="mt-10 animate-fade-in stagger-3">
              <div className="flex items-center justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary ml-1" />
                  <span className="text-xs">موثوق</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary ml-1" />
                  <span className="text-xs">سريع</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary ml-1" />
                  <span className="text-xs">آمن</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Slider controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-black/40 transition-colors z-10"
        aria-label="السابق"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-black/40 transition-colors z-10"
        aria-label="التالي"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-28 sm:bottom-32 md:bottom-28 left-0 right-0 flex justify-center gap-1 sm:gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-primary w-8 sm:w-10" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`انتقل إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
