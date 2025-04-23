"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Award, Shield, DollarSign, Users, ThumbsUp, Truck, HeartHandshake, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export default function WhyChooseUs() {
  const chooseRef = useRef<HTMLDivElement>(null)
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

    if (chooseRef.current) {
      observer.observe(chooseRef.current)
    }

    return () => {
      if (chooseRef.current) {
        observer.unobserve(chooseRef.current)
      }
    }
  }, [])

  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted to-background"
      ref={chooseRef}
    >
      <div className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">مميزاتنا</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">لماذا تختار بشاير الخير؟</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            نحن نقدم خدمات متميزة تجعلنا الاختيار الأفضل لنقل أثاثك بأمان وراحة بال
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Clock,
              title: "الالتزام بالمواعيد",
              description: "نلتزم بالمواعيد المحددة مع العملاء ونحرص على إنجاز المهام في الوقت المتفق عليه دون تأخير.",
              delay: 1,
            },
            {
              icon: Award,
              title: "جودة الخدمة",
              description:
                "نقدم خدمات عالية الجودة تلبي احتياجات العملاء وتفوق توقعاتهم من خلال الاهتمام بأدق التفاصيل.",
              delay: 2,
            },
            {
              icon: Shield,
              title: "الأمان والضمان",
              description: "نضمن سلامة الأثاث أثناء النقل ونقدم ضمانات على جميع خدماتنا لراحة بالك التامة.",
              delay: 3,
            },
            {
              icon: DollarSign,
              title: "أسعار منافسة",
              description:
                "نقدم أسعاراً منافسة تناسب جميع الفئات مع الحفاظ على جودة الخدمة وعدم المساومة على الاحترافية.",
              delay: 4,
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className={`text-right card-hover border-t-4 border-t-primary ${isVisible ? `animate-fade-in stagger-${feature.delay}` : "opacity-0"}`}
            >
              <CardHeader>
                <div className="flex justify-end mb-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className={`bg-muted rounded-xl p-8 shadow-inner ${isVisible ? "animate-fade-in-right stagger-5" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-bold mb-6 border-r-4 border-primary pr-4">ما يميزنا عن غيرنا</h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">فريق محترف</h4>
                  <p className="text-muted-foreground">
                    لدينا فريق عمل مدرب على أعلى مستوى للتعامل مع جميع أنواع الأثاث بمهارة واحترافية.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">خبرة طويلة</h4>
                  <p className="text-muted-foreground">
                    نتمتع بخبرة طويلة في مجال نقل العفش تمتد لأكثر من 10 سنوات في السوق الكويتي.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">أسطول حديث</h4>
                  <p className="text-muted-foreground">
                    نمتلك أسطول من السيارات الحديثة المجهزة خصيصاً لنقل الأثاث بأمان وسلامة.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">خدمة عملاء متميزة</h4>
                  <p className="text-muted-foreground">
                    نقدم خدمة عملاء متميزة على مدار الساعة للرد على استفساراتكم وتلبية طلباتكم.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Link href="tel:+96590905157">
                <Button className="shine-effect">احصل على استشارة مجانية</Button>
              </Link>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-fade-in-left stagger-6" : "opacity-0"}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-primary text-primary-foreground rounded-xl p-6 flex flex-col items-center text-center shadow-lg h-48 transform hover:scale-105 transition-transform">
                <h3 className="font-bold text-4xl mb-2">100%</h3>
                <p className="mb-3">رضا العملاء</p>
                <CheckCircle className="h-10 w-10 opacity-50" />
              </div>
              <div className="bg-gradient-secondary text-secondary-foreground rounded-xl p-6 flex flex-col items-center text-center shadow-lg h-48 transform hover:scale-105 transition-transform">
                <h3 className="font-bold text-4xl mb-2">24/7</h3>
                <p className="mb-3">خدمة على مدار الساعة</p>
                <Clock className="h-10 w-10 opacity-50" />
              </div>
              <div className="bg-gradient-secondary text-secondary-foreground rounded-xl p-6 flex flex-col items-center text-center shadow-lg h-48 transform hover:scale-105 transition-transform">
                <h3 className="font-bold text-4xl mb-2">5000+</h3>
                <p className="mb-3">عميل سعيد</p>
                <Users className="h-10 w-10 opacity-50" />
              </div>
              <div className="bg-gradient-primary text-primary-foreground rounded-xl p-6 flex flex-col items-center text-center shadow-lg h-48 transform hover:scale-105 transition-transform">
                <h3 className="font-bold text-4xl mb-2">10+</h3>
                <p className="mb-3">سنوات خبرة</p>
                <Award className="h-10 w-10 opacity-50" />
              </div>
            </div>

       
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div
            className={`relative max-w-3xl mx-auto bg-muted p-8 rounded-xl shadow-inner ${isVisible ? "animate-fade-in stagger-7" : "opacity-0"}`}
          >
            <div className="relative">
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground py-2 px-6 rounded-full shadow-md text-lg font-bold">
                ماذا يقول عملاؤنا؟
              </div>

              <div className="pt-8 relative">
                <div className="absolute top-0 right-8 text-6xl text-primary/20">"</div>
                <blockquote className="text-center italic text-lg px-12">
                  <p className="mb-4">
                    بشاير الخير أفضل شركة نقل عفش تعاملت معها. فريق محترف، أسعار منافسة، والتزام بالمواعيد. أنصح الجميع
                    بالتعامل معهم.
                  </p>
                  <footer className="text-muted-foreground">
                    <span className="font-medium not-italic text-foreground">أحمد الكويتي</span> - العاصمة، الكويت
                  </footer>
                </blockquote>
                <div className="absolute bottom-0 left-8 text-6xl text-primary/20">"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
