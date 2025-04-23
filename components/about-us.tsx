"use client"

import Image from "next/image"
import { CheckCircle, Award, Users, Calendar, Trophy, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export default function AboutUs() {
  const aboutRef = useRef<HTMLDivElement>(null)
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32" ref={aboutRef}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div
            className={`flex flex-col justify-center space-y-8 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <div>
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">
                من نحن
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                شركة بشاير الخير لنقل العفش
              </h2>
              <p className="text-muted-foreground md:text-xl">
                شركة رائدة في مجال نقل الأثاث في الكويت منذ أكثر من 10 سنوات
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p>
                تأسست شركة بشاير الخير لنقل العفش منذ أكثر من 10 سنوات، وخلال هذه الفترة اكتسبنا خبرة كبيرة في مجال نقل
                وتغليف الأثاث المنزلي والمكتبي في جميع أنحاء الكويت.
              </p>
              <p>
                نحن نفتخر بفريق عمل محترف ومدرب على أعلى مستوى، يتعامل مع جميع أنواع الأثاث بعناية فائقة لضمان وصوله
                بحالة ممتازة. لدينا أسطول من السيارات المجهزة خصيصاً لنقل العفش بأمان تام.
              </p>
              <p>
                نستخدم أحدث التقنيات والمعدات في عمليات النقل والتغليف، ونلتزم بالمواعيد المحددة لإنجاز المهام بدقة
                واحترافية لضمان رضا عملائنا في كل عملية نقل.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-primary/5 rounded-lg p-6 space-y-4">
                <h3 className="font-bold text-xl mb-3 border-r-4 border-primary pr-3">رؤيتنا</h3>
                <p className="text-muted-foreground">
                  أن نكون الخيار الأول والأفضل في مجال نقل وتغليف الأثاث في الكويت من خلال تقديم خدمات متميزة تفوق
                  توقعات العملاء.
                </p>
                <div className="flex justify-center">
                  <Target className="h-12 w-12 text-primary opacity-30" />
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 space-y-4">
                <h3 className="font-bold text-xl mb-3 border-r-4 border-primary pr-3">رسالتنا</h3>
                <p className="text-muted-foreground">
                  تقديم خدمات نقل وتغليف الأثاث بأعلى مستويات الجودة والاحترافية وبأسعار تنافسية مع الالتزام بالمواعيد
                  وضمان سلامة المنقولات.
                </p>
                <div className="flex justify-center">
                  <Heart className="h-12 w-12 text-primary opacity-30" />
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg shadow-inner">
              <h3 className="font-bold text-xl mb-4">قيمنا</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full mb-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">الأمانة</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full mb-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">الاحترافية</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full mb-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">الالتزام</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full mb-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">رضا العملاء</span>
                </div>
              </div>
            </div>

            <div className="flex justify-start">
              <Link href="tel:90905157">
                <Button size="lg" className="shine-effect">
                  اتصل بنا الآن
                </Button>
              </Link>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/fur2.png"
                alt="عن شركة بشاير الخير"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-8 right-8 left-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">لماذا يختارنا العملاء؟</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Trophy className="h-5 w-5 text-primary" />
                      </div>
                      <p>خبرة أكثر من 10 سنوات في مجال نقل العفش</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <p>فريق عمل مدرب على أعلى مستوى</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <p>جودة عالية في تقديم الخدمة</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <p>الالتزام بالمواعيد وسرعة الإنجاز</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

   
          </div>
        </div>
      </div>
    </section>
  )
}
