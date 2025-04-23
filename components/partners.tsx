"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Mock partner companies
const partners = [
  { id: 1, name: "شركة الكويت للأثاث", image: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "مجموعة المطوع", image: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "الشايع هوم", image: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "إيكيا الكويت", image: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "هوم سنتر", image: "/placeholder.svg?height=100&width=200" },
  { id: 6, name: "الغانم للأثاث", image: "/placeholder.svg?height=100&width=200" },
  { id: 7, name: "شركة المباركية", image: "/placeholder.svg?height=100&width=200" },
  { id: 8, name: "مفروشات العبدلي", image: "/placeholder.svg?height=100&width=200" },
]

export default function Partners() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const partnersRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (partnersRef.current) {
      observer.observe(partnersRef.current)
    }

    return () => {
      if (partnersRef.current) {
        observer.unobserve(partnersRef.current)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth } = carouselRef.current
      const scrollAmount = clientWidth / 2

      if (direction === "left") {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setScrollPosition(carouselRef.current.scrollLeft)
      }
    }

    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const canScrollLeft = scrollPosition > 0
  const canScrollRight = carouselRef.current
    ? scrollPosition < carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
    : true

  return (
    <section id="partners" className="py-16 bg-muted/50" ref={partnersRef}>
      <div className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center mb-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">شركاؤنا</div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">نفتخر بشراكتنا مع أفضل الشركات</h2>
          <p className="max-w-[700px] text-muted-foreground">
            نتعاون مع أفضل شركات الأثاث والديكور في الكويت لتقديم خدمات متكاملة لعملائنا
          </p>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className={`flex overflow-x-auto gap-8 pb-6 scrollbar-hide scroll-smooth ${isVisible ? "animate-fade-in stagger-1" : "opacity-0"}`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex-shrink-0 w-8"></div>
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex-shrink-0 bg-background shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center justify-center w-64 h-40"
              >
                <div className="relative h-16 w-full mb-4">
                  <Image src={partner.image || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
                <p className="font-medium text-center">{partner.name}</p>
              </div>
            ))}
            <div className="flex-shrink-0 w-8"></div>
          </div>

          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full z-10 bg-background/80 backdrop-blur-sm"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}

          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full z-10 bg-background/80 backdrop-blur-sm"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}
        </div>

        <div className={`mt-10 text-center ${isVisible ? "animate-fade-in stagger-2" : "opacity-0"}`}>
          <p className="text-muted-foreground mb-2">هل أنت شركة أثاث أو ديكور وترغب بالتعاون معنا؟</p>
          <Button variant="outline">تواصل معنا للشراكة</Button>
        </div>
      </div>
    </section>
  )
}
