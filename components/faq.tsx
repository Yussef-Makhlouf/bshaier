"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "ما هي أوقات عمل شركة بشاير الخير لنقل الأثاث؟",
    answer:
      "شركة بشاير الخير لنقل الأثاث تعمل على مدار 24 ساعة طوال أيام الأسبوع، لتلبية احتياجات العملاء في أي وقت. يمكنك التواصل معنا في أي وقت للحصول على خدماتنا.",
    category: "أوقات العمل",
  },
  {
    question: "كم تستغرق عملية نقل الأثاث منزل كامل؟",
    answer:
      "تختلف المدة حسب حجم المنزل وكمية الأثاث ومسافة النقل. بشكل عام، تستغرق عملية نقل منزل متوسط الحجم من 4-8 ساعات، شاملة الفك والتغليف والنقل والتركيب.",
    category: "عمليات النقل",
  },
  {
    question: "هل توفرون خدمة التخزين للأثاث؟",
    answer:
      "نعم، نوفر خدمة تخزين الأثاث في مستودعات آمنة ومكيفة لحماية الأثاث من العوامل الجوية والرطوبة لفترات قصيرة أو طويلة حسب حاجة العميل.",
    category: "الخدمات",
  },
  {
    question: "هل تقدمون خدمات النقل الدولي للأثاث خارج الكويت؟",
    answer:
      "نعم، نقدم خدمات الشحن الدولي للأثاث إلى مختلف دول العالم. نتولى جميع إجراءات التغليف والتخليص الجمركي لضمان وصول شحنتك بأمان.",
    category: "الخدمات",
  },
  {
    question: "كيف يتم تحديد سعر نقل الأثاث؟",
    answer:
      "يتم تحديد السعر بناءً على عدة عوامل: حجم وكمية الأثاث، المسافة بين الموقعين، الطابق وتوفر المصعد، والخدمات الإضافية مثل الفك والتركيب والتغليف. يمكنك الحصول على تقدير سعر مجاني من خلال التواصل معنا.",
    category: "الأسعار",
  },
  {
    question: "هل تقدمون ضمان على خدمات النقل؟",
    answer:
      "نعم، نقدم ضمان على جميع خدماتنا. في حالة حدوث أي ضرر للأثاث أثناء النقل، نتحمل مسؤولية الإصلاح أو التعويض حسب الحالة.",
    category: "الضمانات",
  },
  {
    question: "ما هي طرق الدفع المتاحة لديكم؟",
    answer:
      "نقبل الدفع النقدي، وبطاقات الائتمان، والتحويل البنكي. كما يمكن الدفع عند استلام الخدمة مباشرة أو مقدماً حسب الاتفاق.",
    category: "الدفع",
  },
  {
    question: "هل يلزم حضوري أثناء عملية النقل؟",
    answer:
      "يفضل حضور العميل أو من ينوب عنه أثناء عملية النقل للإشراف وتوجيه الفريق، خاصة عند تركيب الأثاث في المنزل الجديد. ومع ذلك، يمكننا العمل بدون حضور العميل في حال توفر التعليمات الواضحة.",
    category: "عمليات النقل",
  },
]

export default function Faq() {
  const faqRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

  const filteredFaqs = selectedCategory ? faqs.filter((faq) => faq.category === selectedCategory) : faqs

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

    if (faqRef.current) {
      observer.observe(faqRef.current)
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current)
      }
    }
  }, [])

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-muted/50 to-background" ref={faqRef}>
      <div className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            الأسئلة الشائعة
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">إجابات على الأسئلة الأكثر شيوعاً</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            نجيب على استفساراتكم الشائعة حول خدمات نقل الأثاث والتغليف
          </p>
        </div>

        <div
          className={`flex flex-wrap gap-2 justify-center mb-8 ${isVisible ? "animate-fade-in stagger-1" : "opacity-0"}`}
        >
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
          >
            الكل
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-in stagger-2" : "opacity-0"}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted rounded-lg px-6 py-2 faq-card border-r-4 border-r-primary"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={`mt-12 text-center ${isVisible ? "animate-fade-in stagger-3" : "opacity-0"}`}>
          <p className="mb-6 text-muted-foreground">
            لم تجد إجابة على سؤالك؟ تواصل معنا مباشرة وسنرد على استفسارك في أقرب وقت
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="tel:90905157">اتصل بنا: 90905157</Link>
            </Button>
       
          </div>
        </div>
      </div>
    </section>
  )
}
