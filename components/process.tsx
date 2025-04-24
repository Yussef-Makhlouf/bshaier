"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, Calendar, Truck, Package, CheckCheck, User, Clock } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    id: "contact",
    title: "تواصل معنا",
    description: "اتصل بنا عبر الهاتف أو الواتساب أو املأ نموذج طلب عرض السعر",
    icon: Phone,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "schedule",
    title: "تحديد الموعد",
    description: "نقوم بتحديد موعد مناسب لك لزيارة الموقع أو إتمام النقل",
    icon: Calendar,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    id: "packing",
    title: "التغليف",
    description: "نقوم بتغليف الأثاث بطريقة احترافية لحمايته أثناء النقل",
    icon: Package,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "moving",
    title: "نقل الأثاث",
    description: "ننقل الأثاث باستخدام سيارات مخصصة ومجهزة لنقل الأثاث",
    icon: Truck,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    id: "delivery",
    title: "التوصيل والتركيب",
    description: "نقوم بتوصيل وتركيب الأثاث في الموقع الجديد",
    icon: CheckCheck,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const processRef = useRef<HTMLDivElement>(null)
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

    if (processRef.current) {
      observer.observe(processRef.current)
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section id="process" className="py-20 bg-muted" ref={processRef}>
      <div className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            مراحل العمل
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">كيف نعمل</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            خطوات بسيطة لنقل أثاثك بكل سهولة وأمان
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className={`relative h-[400px] rounded-xl overflow-hidden shadow-lg ${isVisible ? "animate-fade-in stagger-1" : "opacity-0"}`}
            >
              <Image src="/car2.jpg" alt="عملية النقل" fill className="object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-4 right-4 left-4">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <Clock className="h-5 w-5 ml-2 text-primary" />
                    خدمة سريعة ودقيقة
                  </h3>
                  <p className="text-sm">نقدم خدماتنا بأسرع وقت ممكن مع الالتزام بالمواعيد والدقة في العمل</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-primary text-primary-foreground py-1 px-3 rounded-full text-sm flex items-center">
                <User className="h-4 w-4 ml-1" />
                فريق محترف
              </div>
            </div>

          </div>

          <div>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex gap-4 p-4 rounded-lg transition-all duration-300 ${
                    isVisible ? `animate-fade-in-right stagger-${index + 1}` : "opacity-0"
                  } ${activeStep === index ? "bg-background shadow-md transform scale-105" : "hover:bg-background/50"}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div
                    className={`${step.bgColor} ${step.color} p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0`}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg flex items-center">
                      <span className="bg-muted text-primary w-6 h-6 rounded-full flex items-center justify-center text-sm ml-2">
                        {index + 1}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="tel:90905157">
                <Button size="lg" className="shine-effect">
                  احصل على عرض سعر
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
