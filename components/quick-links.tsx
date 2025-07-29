"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  Package, 
  ArrowRight, 
  Star,
  CheckCircle,
  Clock,
  Users
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  {
    id: "moving-tips",
    title: "نصائح نقل الأثاث",
    description: "دليل شامل لنقل الأثاث بأمان في الكويت",
    icon: BookOpen,
    image: "/car2.jpg",
    features: [
      "اختيار شركة النقل المناسبة",
      "التخطيط المسبق للنقل",
      "فك وتركيب الأثاث",
      "سلامة المقتنيات",
      "نصائح خاصة بالكويت"
    ],
    readTime: "10 دقائق",
    difficulty: "سهل",
    url: "/nuqud-nakl-athath",
    color: "primary"
  },
  {
    id: "packing-guide",
    title: "إرشادات التغليف",
    description: "طرق تغليف آمنة لحماية الأثاث أثناء النقل",
    icon: Package,
    image: "/services/packing.png",
    features: [
      "مواد التغليف الأساسية",
      "تغليف الأثاث الزجاجي",
      "تغليف الأجهزة الإلكترونية",
      "حماية الأعمال الفنية",
      "نصائح عامة للتغليف"
    ],
    readTime: "15 دقيقة",
    difficulty: "متوسط",
    url: "/irshadat-taghleef-athath",
    color: "secondary"
  }
]

export default function QuickLinks() {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            دليل شامل لنقل الأثاث
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تعرف على أفضل النصائح والإرشادات لنقل وتغليف الأثاث بأمان في الكويت
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {quickLinks.map((link) => (
            <Card 
              key={link.id} 
              className="overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={link.image}
                  alt={link.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {link.difficulty}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`bg-${link.color}/20 p-2 rounded-lg`}>
                    <link.icon className={`h-5 w-5 text-${link.color}`} />
                  </div>
                  <CardTitle className="text-xl">{link.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{link.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {link.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-secondary fill-secondary" />
                      <span>مفيد</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">ما ستتعلمه:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {link.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full gap-2">
                    <Link href={link.url}>
                      اقرأ الدليل
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            نصائح وإرشادات من خبراء نقل الأثاث في الكويت
          </p>
          <Button variant="outline" asChild>
            <Link href="tel:90905157">
              احصل على استشارة مجانية
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 