"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react"
import Image from "next/image"


const testimonials = [
  {
    id: 1,
    name: "أحمد الكويتي",
    location: "العاصمة، الكويت",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    text: "تعاملت مع شركة بشاير الخير لنقل العفش وكانت تجربة رائعة. الفريق محترف جداً والتزموا بالموعد المحدد. قاموا بفك وتركيب الأثاث باحترافية عالية وحافظوا على كل قطعة. أنصح بالتعامل معهم وسأتعامل معهم مرة أخرى بالتأكيد.",
    service: "نقل عفش منزلي",
  },
  {
    id: 2,
    name: "فاطمة العنزي",
    location: "حولي، الكويت",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    text: "قاموا بنقل أثاث منزلي بعناية فائقة وبدون أي خدوش أو أضرار. الأسعار منافسة والخدمة ممتازة. الفريق متعاون جداً وقاموا بترتيب الأثاث في المنزل الجديد بشكل رائع. سأتعامل معهم مرة أخرى بالتأكيد.",
    service: "نقل وتركيب أثاث",
  },
  {
    id: 3,
    name: "محمد السالم",
    location: "الأحمدي، الكويت",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    text: "خدمة ممتازة وفريق عمل محترف. قاموا بفك وتركيب الأثاث باحترافية عالية. أشكرهم على الجهد المبذول والعمل المتقن. كانت عملية النقل سلسة وسريعة، والأهم أنهم حافظوا على جميع قطع الأثاث سليمة تماماً.",
    service: "نقل مكتب كامل",
  }

]

export default function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null)
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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current)
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current)
      }
    }
  }, [])



  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32 bg-muted" ref={testimonialsRef}>
      <div className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            آراء العملاء
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ماذا يقول عملاؤنا عنا</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            نفتخر بثقة عملائنا وآرائهم الإيجابية عن خدماتنا
          </p>
        </div>
</div>
        <div className="relative mx-auto max-w-[1400px] px-4">
          <div
            className={`overflow-hidden ${isVisible ? "animate-fade-in stagger-1" : "opacity-0"}`}
          >
            <div className="flex gap-6 pb-12" style={{ backfaceVisibility: 'hidden', touchAction: 'pan-y pinch-zoom' }}>
              {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="min-w-[300px] md:min-w-[400px] max-w-[400px] text-right flex-shrink-0 card-hover border-t-4 border-t-primary h-full"
              >
                <CardHeader className="relative pb-0">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                  <div className="flex justify-end pt-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= testimonial.rating ? "fill-secondary text-secondary" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6 min-h-[160px]">"{testimonial.text}"</p>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block">
                    {testimonial.service}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div
          className={`mt-20 bg-background rounded-xl p-12 text-center shadow-lg relative overflow-hidden ${isVisible ? "animate-fade-in stagger-2" : "opacity-0"}`}
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">انضم إلى قائمة عملائنا السعداء</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              نسعى دائماً لتقديم أفضل خدمة ممكنة لعملائنا الكرام. اتصل بنا اليوم واحصل على تجربة نقل عفش مميزة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shine-effect">
                <Link href="tel:+96590905157">احصل على عرض سعر</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:90905157">
                  <MessageSquare className="ml-2 h-5 w-5" />
                  تواصل معنا الآن
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>
    </section>
  )
}
