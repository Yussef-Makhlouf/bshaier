"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Truck, Users, CheckCircle, Clock, Trophy } from "lucide-react"

interface CounterProps {
  end: number
  duration: number
  label: string
  icon: React.ReactNode
  suffix?: string
}

function Counter({ end, duration, label, icon, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
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

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [end, duration, isVisible])

  return (
    <div
      className="text-center py-6 px-4 bg-white rounded-lg shadow-md border border-muted hover:shadow-lg transition-shadow card-hover"
      ref={countRef}
    >
      <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">{icon}</div>
      <div className="text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-12 -mt-12 relative z-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          <Counter
            end={10}
            duration={2000}
            label="سنوات خبرة"
            icon={<Trophy className="h-6 w-6 text-primary" />}
            suffix="+"
          />
          <Counter
            end={5000}
            duration={2000}
            label="عميل سعيد"
            icon={<Users className="h-6 w-6 text-primary" />}
            suffix="+"
          />
          <Counter
            end={24}
            duration={1500}
            label="ساعة خدمة"
            icon={<Clock className="h-6 w-6 text-primary" />}
            suffix="/7"
          />
          <Counter
            end={100}
            duration={1500}
            label="رضا العملاء"
            icon={<CheckCircle className="h-6 w-6 text-primary" />}
            suffix="%"
          />
          <Counter
            end={6000}
            duration={2000}
            label="عملية نقل"
            icon={<Truck className="h-6 w-6 text-primary" />}
            suffix="+"
          />
        </div>
      </div>
    </section>
  )
}
