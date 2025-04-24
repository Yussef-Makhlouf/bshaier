"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Truck, Package, Home, ShieldCheck, PenToolIcon as Tool, MapPin, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "moving",
    icon: Truck,
    title: "نقل الأثاث",
    shortDescription: "نقل الأثاث بأمان تام من وإلى جميع مناطق الكويت",
    longDescription:
      "نوفر خدمة نقل الأثاث المنزلي والمكتبي بأحدث السيارات المجهزة خصيصاً لنقل الأثاث بأمان تام وبدون أي أضرار. فريقنا المدرب يضمن وصول أثاثك بحالة ممتازة إلى وجهتك الجديدة.",
    image: "/placeholder.svg?height=300&width=500",
    price: "تبدأ من 25 د.ك",
    duration: "2-4 ساعات",
    rating: 5,
    reviewCount: 156,
    features: ["سيارات مجهزة خصيصاً", "فريق محترف", "تأمين ضد الأضرار", "خدمة سريعة"],
  },
  {
    id: "packing",
    icon: Package,
    title: "تغليف الأثاث",
    shortDescription: "تغليف احترافي للأثاث لحمايته من الخدوش والكسر",
    longDescription:
      "نستخدم أفضل مواد التغليف لحماية الأثاث من الخدوش والكسر أثناء عملية النقل، مع اهتمام خاص بالقطع الثمينة والحساسة. نوفر مواد تغليف عالية الجودة تضمن سلامة أثاثك.",
    image: "/placeholder.svg?height=300&width=500",
    price: "تبدأ من 15 د.ك",
    duration: "1-3 ساعات",
    rating: 4.9,
    reviewCount: 124,
    features: ["مواد تغليف عالية الجودة", "تغليف خاص للقطع الثمينة", "ترقيم القطع", "فك التغليف في الموقع الجديد"],
  },
  {
    id: "assembly",
    icon: Tool,
    title: "فك وتركيب الأثاث",
    shortDescription: "فك وتركيب جميع أنواع الأثاث بأيدي فنيين محترفين",
    longDescription:
      "يقوم فريقنا المتخصص بفك وتركيب جميع أنواع الأثاث المنزلي والمكتبي بمهارة عالية وخبرة كبيرة تضمن سلامة قطع الأثاث. نتعامل مع جميع أنواع الأثاث من مختلف الشركات العالمية.",
    image: "/placeholder.svg?height=300&width=500",
    price: "تبدأ من 20 د.ك",
    duration: "2-5 ساعات",
    rating: 4.8,
    reviewCount: 98,
    features: ["فنيين متخصصين", "أدوات حديثة", "ضمان على التركيب", "خبرة مع جميع أنواع الأثاث"],
  },
  {
    id: "storage",
    icon: ShieldCheck,
    title: "تخزين الأثاث",
    shortDescription: "تخزين آمن للأثاث في مستودعات مؤمنة ومكيفة",
    longDescription:
      "نوفر خدمة تخزين الأثاث في مستودعات آمنة ومكيفة لحماية الأثاث من العوامل الجوية والرطوبة لفترات قصيرة أو طويلة. مستودعاتنا مجهزة بأنظمة أمان متطورة وأنظمة مكافحة الحرائق.",
    image: "/placeholder.svg?height=300&width=500",
    price: "تبدأ من 30 د.ك شهرياً",
    duration: "حسب الطلب",
    rating: 4.7,
    reviewCount: 76,
    features: ["مستودعات مكيفة", "أنظمة أمان متطورة", "مكافحة الحشرات", "تأمين ضد الحرائق والسرقة"],
  },
  {
    id: "office",
    icon: Home,
    title: "نقل المكاتب والشركات",
    shortDescription: "خدمات متكاملة لنقل المكاتب والشركات بدون انقطاع للعمل",
    longDescription:
      "نقدم خدمات متخصصة لنقل المكاتب والشركات مع مراعاة خصوصية العمل وضمان عدم انقطاع سير العمل. نقوم بالتخطيط المسبق لعملية النقل لضمان سرعة الإنجاز وتقليل وقت التوقف.",
    image: "/placeholder.svg?height=300&width=500",
    price: "حسب حجم المكتب",
    duration: "1-3 أيام",
    rating: 4.9,
    reviewCount: 64,
    features: ["خطة نقل مدروسة", "العمل خارج أوقات الدوام", "ترقيم وتوثيق المحتويات", "إعادة التركيب بنفس الترتيب"],
  },
  {
    id: "international",
    icon: MapPin,
    title: "الشحن الدولي",
    shortDescription: "خدمات شحن الأثاث إلى خارج الكويت",
    longDescription:
      "نوفر خدمات الشحن الدولي للأثاث والمقتنيات الشخصية إلى مختلف دول العالم. نتولى جميع إجراءات التغليف والتخليص الجمركي لضمان وصول شحنتك بأمان.",
    image: "/placeholder.svg?height=300&width=500",
    price: "حسب الوجهة والحجم",
    duration: "7-30 يوم",
    rating: 4.6,
    reviewCount: 43,
    features: ["تغليف خاص للشحن الدولي", "متابعة الشحنة", "التخليص الجمركي", "التأمين على الشحنة"],
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState("moving")
  const servicesRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const activeService = services.find((service) => service.id === activeTab)

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current)
      }
    }
  }, [])

  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6" ref={servicesRef}>
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            خدماتنا المميزة
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">نقدم خدمات متكاملة لنقل الأثاث</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            مجموعة متكاملة من خدمات نقل الأثاث بأعلى مستويات الجودة والاحترافية
          </p>
        </div>

        <Tabs defaultValue="moving" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 ${isVisible ? "animate-fade-in stagger-1" : "opacity-0"}`}
          >
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className="flex flex-col items-center gap-2 py-3">
                <service.icon className="h-6 w-6" />
                <span>{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <div
                className={`grid md:grid-cols-2 gap-8 items-center ${isVisible ? "animate-fade-in stagger-2" : "opacity-0"}`}
              >
                <div className="order-2 md:order-1">
                  <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm inline-block mb-3">
                    {service.price}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(service.rating) ? "text-secondary fill-secondary" : "text-muted"}`}
                      />
                    ))}
                    <span className="text-sm ml-2">{service.rating}</span>
                    <span className="text-sm text-muted-foreground mr-1">({service.reviewCount} تقييم)</span>
                  </div>

                  <p className="text-muted-foreground mb-6">{service.longDescription}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background rounded-lg p-4 text-center border shadow-sm">
                      <p className="text-sm text-muted-foreground">السعر</p>
                      <p className="font-bold text-primary">{service.price}</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 text-center border shadow-sm">
                      <p className="text-sm text-muted-foreground">المدة</p>
                      <p className="font-bold">{service.duration}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-3">مميزات الخدمة:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+96590905157">
                      <Button size="lg" className="w-full shine-effect">
                        احصل على عرض سعر
                      </Button>
                    </Link>
                    <Link href={`tel:90905157`}>
                      <Button size="lg" variant="outline" className="w-full">
                        اتصل الآن
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative rounded-lg overflow-hidden aspect-video bg-muted shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-700"
                    />
                    <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground py-1 px-3 rounded-full text-sm">
                      {service.title}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service, idx) => (
            <Card
              key={service.id}
              className={`text-right card-hover overflow-hidden ${isVisible ? `animate-fade-in stagger-${idx + 4}` : "opacity-0"}`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-end mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{service.duration}</span>
                  <span className="font-bold text-primary">{service.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group" onClick={() => setActiveTab(service.id)}>
                  <span>عرض التفاصيل</span>
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-[-4px]" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="tel:+96590905157">
            <Button size="lg" className="shine-effect">
              احصل على عرض سعر لجميع الخدمات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
