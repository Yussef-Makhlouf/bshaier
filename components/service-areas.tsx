"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Check, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Kuwait areas data
const areas = [
  {
    id: "capital",
    name: "محافظة العاصمة",
    description: "خدمات نقل الأثاث في محافظة العاصمة",
    estimatedTime: "خلال 1-2 ساعة",
    neighborhoods: [
      "العديلية",
      "الشامية",
      "الروضة",
      "النزهة",
      "الفيحاء",
      "كيفان",
      "الخالدية",
      "الدسمة",
      "المنصورية",
      "الدعية",
      "القادسية",
      "قرطبة",
      "السرة",
      "اليرموك",
      "الشويخ",
    ],
    specialNotes: "نقدم خدمات سريعة في محافظة العاصمة مع إمكانية الوصول في نفس اليوم",
    mapPosition: { top: "15%", right: "48%" }, // العاصمة: أعلى منتصف
    color: "#1a56db",
  },
  {
    id: "hawalli",
    name: "محافظة حولي",
    description: "خدمات نقل الأثاث في محافظة حولي",
    estimatedTime: "خلال 1-2 ساعة",
    neighborhoods: [
      "حولي",
      "السالمية",
      "الرميثية",
      "الجابرية",
      "مشرف",
      "بيان",
      "سلوى",
      "الشعب",
      "البدع",
      "الزهراء",
      "الصديق",
      "حطين",
      "الشهداء",
    ],
    specialNotes: "نقدم خدمات خاصة للشقق في الأبراج العالية في منطقة السالمية",
    mapPosition: { top: "35%", right: "70%" }, // حولي: يمين منتصف
    color: "#2563eb",
  },
  {
    id: "ahmadi",
    name: "محافظة الأحمدي",
    description: "خدمات نقل الأثاث في محافظة الأحمدي",
    estimatedTime: "خلال 2-3 ساعات",
    neighborhoods: [
      "الأحمدي",
      "الفحيحيل",
      "المنقف",
      "أبو حليفة",
      "الصباحية",
      "الرقة",
      "هدية",
      "الظهر",
      "الوفرة",
      "الزور",
      "الخيران",
      "المهبولة",
      "الفنطاس",
      "العقيلة",
      "الصباحية",
    ],
    specialNotes: "نقدم خدمات خاصة للمناطق البعيدة في محافظة الأحمدي مثل الوفرة والخيران",
    mapPosition: { top: "80%", right: "65%" }, // الأحمدي: أسفل يمين
    color: "#3b82f6",
  },
  {
    id: "farwaniya",
    name: "محافظة الفروانية",
    description: "خدمات نقل الأثاث في محافظة الفروانية",
    estimatedTime: "خلال 1-2 ساعة",
    neighborhoods: [
      "الفروانية",
      "خيطان",
      "العارضية",
      "العمرية",
      "الرابية",
      "الرحاب",
      "الأندلس",
      "جليب الشيوخ",
      "الضجيج",
      "الرقعي",
      "الفردوس",
      "العباسية",
      "الأفنيوز",
    ],
    specialNotes: "نقدم خدمات سريعة في محافظة الفروانية مع مراعاة خاصة للمناطق المزدحمة",
    mapPosition: { top: "45%", right: "20%" }, // الفروانية: وسط يسار
    color: "#60a5fa",
  },
  {
    id: "jahra",
    name: "محافظة الجهراء",
    description: "خدمات نقل الأثاث في محافظة الجهراء",
    estimatedTime: "خلال 2-3 ساعات",
    neighborhoods: [
      "الجهراء",
      "القصر",
      "النعيم",
      "النسيم",
      "تيماء",
      "الواحة",
      "العيون",
      "القيروان",
      "الصليبية",
      "كبد",
      "العبدلي",
    ],
    specialNotes: "نقدم خدمات خاصة للمناطق البعيدة في محافظة الجهراء مثل العبدلي وكبد",
    mapPosition: { top: "10%", right: "10%" }, // الجهراء: أعلى يسار
    color: "#93c5fd",
  },
  {
    id: "mubarak",
    name: "محافظة مبارك الكبير",
    description: "خدمات نقل الأثاث في محافظة مبارك الكبير",
    estimatedTime: "خلال 1-2 ساعة",
    neighborhoods: [
      "مبارك الكبير",
      "القرين",
      "العدان",
      "القصور",
      "صباح السالم",
      "المسيلة",
      "أبو فطيرة",
      "الفنيطيس",
      "المسايل",
      "صباح السالم",
    ],
    specialNotes: "نقدم خدمات متميزة في محافظة مبارك الكبير مع إمكانية الوصول في نفس اليوم",
    mapPosition: { top: "75%", right: "25%" }, // مبارك الكبير: أسفل يسار
    color: "#bfdbfe",
  },
]

export default function ServiceAreas() {
  const [activeTab, setActiveTab] = useState("capital")
  const areasRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const activeArea = areas.find((area) => area.id === activeTab)

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

    if (areasRef.current) {
      observer.observe(areasRef.current)
    }

    return () => {
      if (areasRef.current) {
        observer.unobserve(areasRef.current)
      }
    }
  }, [])

  return (
    <section
      id="service-areas"
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background to-muted"
      ref={areasRef}
    >
      <div className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            مناطق الخدمة
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            نقدم خدماتنا في جميع مناطق الكويت
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            نغطي جميع محافظات ومناطق الكويت بخدمات نقل الأثاث المتميزة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`relative h-[500px] bg-muted overflow-hidden rounded-2xl shadow-lg border ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <div className="absolute inset-4 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image src="/map.jpg" alt="خريطة الكويت" fill className="object-cover" />
                {/* Area markers */}
                {areas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveTab(area.id)}
                    className={`absolute area-marker ${activeTab === area.id ? "scale-110" : ""}`}
                    style={{ top: area.mapPosition.top, right: area.mapPosition.right }}
                  >
                    <div
                      className={`p-3 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${
                        activeTab === area.id
                          ? "bg-primary text-primary-foreground scale-110"
                          : "bg-white hover:bg-primary/10"
                      }`}
                      style={{
                        boxShadow:
                          activeTab === area.id
                            ? `0 0 0 5px rgba(${Number.parseInt(area.color.slice(1, 3), 16)}, ${Number.parseInt(area.color.slice(3, 5), 16)}, ${Number.parseInt(area.color.slice(5, 7), 16)}, 0.2)`
                            : "",
                      }}
                    >
                      <MapPin className="h-6 w-6" />
                    </div>
                    <span
                      className={`absolute top-full right-1/2 translate-x-1/2 mt-1 whitespace-nowrap text-xs font-bold bg-white px-2 py-1 rounded-full shadow-sm ${
                        activeTab === area.id ? "text-primary" : ""
                      }`}
                    >
                      {area.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className={isVisible ? "animate-fade-in-left" : "opacity-0"}>
            <Tabs defaultValue="capital" value={activeTab} onValueChange={setActiveTab} className="w-full" dir="rtl">
              {areas.map((area) => (
                <TabsContent key={area.id} value={area.id} className="mt-0 text-right" dir="rtl">
                  <Card className="overflow-hidden border-t-4" style={{ borderTopColor: area.color }}>
                    <CardHeader className="text-right" dir="rtl">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl text-start">{area.name}</CardTitle>
                          <CardDescription>{area.description}</CardDescription>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 text-right" dir="rtl">
                      <div>
                        <h4 className="font-bold text-lg mb-3 flex items-center">
                          <div className="h-1 w-4 bg-primary ml-2"></div>
                          المناطق التي نخدمها:
                        </h4>
                        <div
                          className="flex gap-2 flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent px-1 whitespace-nowrap max-w-full sm:max-w-2xl mx-auto mb-8"
                          style={{ direction: 'rtl' }}
                        >
                          {area.neighborhoods.map((neighborhood, index) => (
                            <span
                              key={index}
                              className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm whitespace-nowrap"
                            >
                              {neighborhood}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-bold mb-2 flex items-center">
                            <Clock className="h-4 w-4 ml-2 text-primary" />
                            وقت الوصول المتوقع:
                          </h4>
                          <p className="text-lg font-medium">{area.estimatedTime}</p>
                        </div>

                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-bold mb-2 flex items-center">
                            <Check className="h-4 w-4 ml-2 text-primary" />
                            ميزة خاصة:
                          </h4>
                          <p>{area.specialNotes}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t pt-6 mt-6">
                        <Link href={`tel:90905157`}>
                          <Button variant="outline" className="flex items-center">
                            <Phone className="ml-2 h-4 w-4" />
                            اتصل بنا
                          </Button>
                        </Link>

                        <Link href="tel:+96590905157">
                          <Button className="shine-effect">احصل على عرض سعر</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl text-right" dir="rtl">
              <h3 className="font-bold text-xl mb-4">لماذا نحن الأفضل في تغطية جميع مناطق الكويت؟</h3>
              <div className="space-y-4 text-right">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p>أسطول كبير من السيارات المتوزعة في مختلف المناطق للوصول السريع</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p>فرق عمل متوزعة في جميع محافظات الكويت لتوفير الوقت</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p>خبرة في التعامل مع مختلف أنواع المباني والشقق في جميع المناطق</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 bg-background rounded-xl p-8 shadow-lg ${isVisible ? "animate-fade-in stagger-4" : "opacity-0"}`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">معلومات إضافية عن خدماتنا في مناطق الكويت</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-muted rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <Clock className="h-5 w-5 ml-2 text-primary" />
                خدمة سريعة
              </h4>
              <p className="text-muted-foreground">
                نصل إلى معظم مناطق الكويت خلال 1-2 ساعة من وقت الطلب، ونقدم خدمة طوارئ للحالات العاجلة.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <MapPin className="h-5 w-5 ml-2 text-primary" />
                تغطية شاملة
              </h4>
              <p className="text-muted-foreground">
                نغطي جميع محافظات الكويت الست بدون استثناء، حتى المناطق البعيدة والحدودية.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 ml-2 text-primary" />
                أسعار موحدة
              </h4>
              <p className="text-muted-foreground">
                نقدم أسعاراً موحدة لمعظم مناطق الكويت مع زيادة بسيطة للمناطق البعيدة جداً.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
