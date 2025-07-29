"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Truck, 
  Package, 
  Clock, 
  Shield, 
  MapPin, 
  Phone, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Calendar,
  DollarSign,
  Users,
  Home,
  Building,
  Car,
  Box,
  Wrench,
  ShieldCheck,
  FileText,
  Star,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// نصائح نقل الأثاث
const movingTips = [
  {
    id: "planning",
    title: "التخطيط المسبق للنقل - أساس النجاح",
    icon: Calendar,
    description: "التخطيط الجيد هو نصف النجاح في عملية نقل الأثاث. تعرف على الخطوات الأساسية للتخطيط المسبق",
    tips: [
      "حدد موعد النقل قبل شهر على الأقل لتجنب الازدحام والحصول على أفضل الأسعار",
      "أعد قائمة مفصلة بجميع الأثاث والمقتنيات مع تحديد القطع الثمينة والحساسة",
      "حدد الميزانية المتاحة للنقل مع تخصيص ميزانية إضافية للطوارئ",
      "اختر شركة نقل أثاث موثوقة ومرخصة في الكويت مع مراجعة تقييمات العملاء",
      "احجز موعد النقل مبكراً خاصة في مواسم الذروة مثل الصيف ونهاية الشهر",
      "حدد مسار النقل ووقت الرحلة لتجنب الازدحام المروري في الكويت",
      "جهز المستندات المطلوبة مثل عقد الإيجار الجديد وبطاقة الهوية"
    ],
    importance: "مهم جداً",
    timeRequired: "أسبوع واحد"
  },
  {
    id: "company-selection",
    title: "اختيار شركة نقل أثاث موثوقة في الكويت",
    icon: Building,
    description: "اختيار شركة نقل أثاث جيدة هو قرار مصيري يؤثر على سلامة أثاثك. تعرف على المعايير المهمة",
    tips: [
      "تحقق من الترخيص القانوني للشركة في وزارة التجارة الكويتية",
      "اطلب عروض أسعار من 3 شركات نقل أثاث على الأقل للمقارنة",
      "اقرأ تقييمات العملاء السابقين على مواقع التواصل الاجتماعي",
      "تأكد من وجود تأمين شامل على الأثاث ضد الأضرار والسرقة",
      "اسأل عن الخدمات الإضافية مثل فك وتركيب وتغليف الأثاث",
      "تحقق من خبرة الشركة في نقل الأثاث في الكويت",
      "تأكد من توفر أسطول سيارات مجهزة خصيصاً لنقل الأثاث"
    ],
    importance: "مهم جداً",
    timeRequired: "3-5 أيام"
  },
  {
    id: "packing",
    title: "تغليف الأثاث والمقتنيات",
    icon: Package,
    description: "طرق تغليف آمنة لحماية الأثاث أثناء النقل",
    tips: [
      "استخدم مواد تغليف عالية الجودة",
      "غلف القطع الزجاجية بشكل منفصل",
      "ارسم خريطة للمحتويات في كل صندوق",
      "احتفظ بالمستندات المهمة معك",
      "غلف الأجهزة الإلكترونية بعناية خاصة"
    ],
    importance: "مهم",
    timeRequired: "2-3 أيام"
  },
  {
    id: "furniture-disassembly",
    title: "فك وتركيب الأثاث",
    icon: Wrench,
    description: "إرشادات فك وتركيب الأثاث بأمان",
    tips: [
      "احتفظ بالمسامير والبراغي في أكياس منفصلة",
      "التقط صور للأثاث قبل الفك",
      "استخدم أدوات مناسبة للفك",
      "رتب القطع حسب الغرفة",
      "اطلب مساعدة متخصصة للأثاث المعقد"
    ],
    importance: "مهم",
    timeRequired: "1-2 يوم"
  },
  {
    id: "moving-day",
    title: "يوم النقل - النقاط المهمة",
    icon: Truck,
    description: "ما يجب فعله في يوم النقل",
    tips: [
      "تأكد من وجود مساحة كافية للشاحنة",
      "احتفظ بالمفاتيح والهاتف معك",
      "راقب عملية تحميل الأثاث",
      "تأكد من إغلاق جميع الأجهزة",
      "احتفظ بقائمة مراجعة نهائية"
    ],
    importance: "مهم جداً",
    timeRequired: "يوم واحد"
  },
  {
    id: "safety",
    title: "سلامة الأثاث والمقتنيات",
    icon: Shield,
    description: "إجراءات السلامة لحماية الأثاث",
    tips: [
      "تأكد من وجود تأمين شامل",
      "التقط صور للأثاث قبل النقل",
      "احتفظ بالمستندات المهمة",
      "راقب عملية النقل عن كثب",
      "تحقق من حالة الأثاث عند الوصول"
    ],
    importance: "مهم جداً",
    timeRequired: "مستمر"
  }
]

// نصائح خاصة بالكويت
const kuwaitSpecificTips = [
  {
    title: "التوقيت المناسب للنقل في الكويت",
    description: "أفضل الأوقات لنقل الأثاث في الكويت",
    tips: [
      "تجنب النقل في أشهر الصيف الحارة (يونيو - أغسطس)",
      "اختر الأيام الباردة نسبياً للنقل",
      "تجنب النقل في أيام العطل الرسمية",
      "احجز موعد النقل في الصباح الباكر",
      "تأكد من توفر الكهرباء والماء في المنزل الجديد"
    ]
  },
  {
    title: "المناطق والطرق في الكويت",
    description: "اعتبارات خاصة بالمناطق الكويتية",
    tips: [
      "تعرف على طرق الوصول للمنطقة الجديدة",
      "تأكد من إمكانية وقوف الشاحنة",
      "تحقق من قواعد البناء في المنطقة",
      "اعرف أقرب محطات الخدمات",
      "تأكد من توفر وسائل النقل العام"
    ]
  },
  {
    title: "الوثائق المطلوبة في الكويت",
    description: "المستندات اللازمة لنقل الأثاث",
    tips: [
      "بطاقة الهوية أو الإقامة",
      "عقد الإيجار الجديد",
      "إيصالات دفع الإيجار",
      "تصريح النقل من البلدية (إن وجد)",
      "وثائق التأمين على الأثاث"
    ]
  }
]

// أسئلة شائعة
const faqs = [
  {
    question: "ما هي أفضل شركة نقل أثاث في الكويت؟",
    answer: "أفضل شركة نقل أثاث هي التي تتميز بالخبرة الطويلة، الترخيص القانوني، التأمين الشامل، والخدمة الاحترافية. ننصح بالبحث عن الشركات المرخصة والموثوقة."
  },
  {
    question: "كم تكلفة نقل الأثاث في الكويت؟",
    answer: "تختلف التكلفة حسب حجم الأثاث، المسافة، والخدمات المطلوبة. تبدأ من 25 دينار كويتي للشقق الصغيرة وقد تصل إلى 100 دينار للفلل الكبيرة."
  },
  {
    question: "هل يمكن النقل في نفس اليوم؟",
    answer: "نعم، بعض الشركات تقدم خدمة النقل السريع في نفس اليوم، لكن يفضل التخطيط المسبق لضمان جودة الخدمة وتوفر الفريق والمعدات."
  },
  {
    question: "ما هي مدة عملية النقل؟",
    answer: "تستغرق عملية النقل من 2-6 ساعات حسب حجم الأثاث وعدد الغرف. النقل مع الفك والتركيب قد يستغرق يوم كامل."
  },
  {
    question: "هل تغطي شركات النقل جميع مناطق الكويت؟",
    answer: "نعم، معظم الشركات الموثوقة تغطي جميع محافظات الكويت: العاصمة، حولي، الأحمدي، الفروانية، الجهراء، ومبارك الكبير."
  }
]

export default function MovingTipsPage() {
  const [expandedTips, setExpandedTips] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleTip = (tipId: string) => {
    setExpandedTips(prev => 
      prev.includes(tipId) 
        ? prev.filter(id => id !== tipId)
        : [...prev, tipId]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-right space-y-6">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                دليل شامل
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-relaxed">
                نصائح نقل الأثاث <span className="text-primary">في الكويت</span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-[600px] mr-auto leading-loose">
                دليل شامل ومفصل لنقل الأثاث بأمان وبدون متاعب. تعرف على أفضل الطرق والنصائح العملية لنقل أثاثك في الكويت
              </p>
              <div className="flex items-center justify-end gap-6 pt-6">
                <Button 
                  size="lg" 
                  className="gap-3 bg-gradient-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="tel:90905157">
                    <Phone className="h-5 w-5" />
                    احصل على استشارة مجانية
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/car2.jpg" 
                alt="نصائح نقل الأثاث في الكويت" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* مقدمة شاملة */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-right">
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">
                دليل شامل لنقل الأثاث في الكويت - نصائح من خبراء نقل الأثاث
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                يعد نقل الأثاث من أكثر المهام تعقيداً التي يواجهها الأفراد والعائلات في الكويت. سواء كنت تنقل منزل جديد أو مكتب أو حتى فيلا، فإن عملية نقل الأثاث تتطلب تخطيطاً دقيقاً وخبرة متخصصة لضمان سلامة أثاثك ومقتنياتك الثمينة. في هذا الدليل الشامل، سنقدم لك أفضل النصائح والإرشادات لنقل الأثاث بأمان في جميع مناطق الكويت، من العاصمة إلى الجهراء، ومن حولي إلى الأحمدي.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                تعتمد شركات نقل الأثاث في الكويت على خبرة تزيد عن 10 سنوات في مجال نقل العفش، وتوفر خدمات متكاملة تشمل فك وتركيب الأثاث، تغليف احترافي، ونقل آمن بأسطول سيارات مجهزة خصيصاً لنقل الأثاث. سنتعرف في هذا الدليل على أهم النصائح لاختيار شركة نقل أثاث موثوقة، وكيفية التخطيط لعملية النقل، وطرق حماية الأثاث أثناء النقل.
              </p>
              
              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-primary">لماذا تحتاج نصائح متخصصة لنقل الأثاث؟</h3>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>حماية الأثاث الثمين من الخدوش والكسر أثناء النقل</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>توفير الوقت والجهد في عملية نقل الأثاث المعقدة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>تجنب الأضرار المادية الناتجة عن نقل الأثاث غير المحترف</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>ضمان وصول الأثاث بحالة ممتازة إلى المنزل الجديد</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* النصائح الرئيسية */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              النصائح الأساسية لنقل الأثاث في الكويت
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              اتبع هذه النصائح المهمة لضمان نقل آمن وسلس لأثاثك في جميع مناطق الكويت
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movingTips.map((tip, index) => (
              <Card 
                key={tip.id} 
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <tip.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                      <CardDescription>{tip.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {tip.importance}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {tip.timeRequired}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {tip.tips.map((tipText, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm leading-relaxed">{tipText}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* نصائح خاصة بالكويت */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              نصائح خاصة بنقل الأثاث في الكويت
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              اعتبارات خاصة لنقل الأثاث في البيئة الكويتية والمناخ المحلي
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-lg max-w-none text-right">
              <h3 className="text-2xl font-bold mb-4 text-primary">المناخ الكويتي وتأثيره على نقل الأثاث</h3>
              <p className="text-lg leading-relaxed mb-6">
                يتميز مناخ الكويت بالحرارة الشديدة والرطوبة العالية، خاصة في أشهر الصيف من يونيو إلى سبتمبر. هذا المناخ يؤثر بشكل مباشر على عملية نقل الأثاث، حيث يمكن أن تتسبب الحرارة العالية في تلف بعض أنواع الأثاث، خاصة الأثاث الخشبي والأقمشة. لذلك، من المهم اختيار شركة نقل أثاث في الكويت تفهم هذه التحديات وتوفر حلول مناسبة.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                تقدم شركات نقل الأثاث في الكويت خدمات متخصصة للتعامل مع المناخ المحلي، مثل استخدام سيارات مكيفة لنقل الأثاث، وتوفير مواد تغليف مقاومة للحرارة والرطوبة، وضمان نقل الأثاث في الأوقات المناسبة من اليوم لتجنب التعرض للحرارة الشديدة.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {kuwaitSpecificTips.map((section, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* دليل شامل لاختيار شركة النقل */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-right">
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">
                دليل شامل لاختيار شركة نقل أثاث موثوقة في الكويت
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                يعد اختيار شركة نقل أثاث جيدة من أهم القرارات التي تؤثر على نجاح عملية النقل. في الكويت، تتعدد شركات نقل الأثاث، مما يجعل عملية الاختيار صعبة أحياناً. سنقدم لك دليلاً شاملاً لاختيار أفضل شركة نقل أثاث تناسب احتياجاتك وميزانيتك.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-primary">معايير اختيار شركة نقل الأثاث</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">1. الترخيص القانوني</h4>
                  <p className="text-base leading-relaxed mb-3">
                    تأكد من أن الشركة مرخصة رسمياً من وزارة التجارة الكويتية. الشركات المرخصة تخضع لرقابة قانونية وتلتزم بمعايير الجودة والسلامة.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">2. الخبرة والسمعة</h4>
                  <p className="text-base leading-relaxed mb-3">
                    ابحث عن شركات نقل أثاث ذات خبرة طويلة في السوق الكويتي. اقرأ تقييمات العملاء السابقين على مواقع التواصل الاجتماعي ومنصات التقييم.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">3. التأمين والضمان</h4>
                  <p className="text-base leading-relaxed mb-3">
                    تأكد من وجود تأمين شامل على الأثاث ضد الأضرار والسرقة. الشركات الموثوقة تقدم ضمانات شاملة على خدماتها.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">4. الخدمات المقدمة</h4>
                  <p className="text-base leading-relaxed mb-3">
                    تحقق من الخدمات المقدمة مثل فك وتركيب الأثاث، تغليف احترافي، تخزين آمن، ونقل آمن بأسطول سيارات مجهزة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              الأسئلة الشائعة حول نقل الأثاث في الكويت
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول نقل الأثاث في جميع مناطق الكويت
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleTip(`faq-${index}`)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    {expandedTips.includes(`faq-${index}`) ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </CardHeader>
                {expandedTips.includes(`faq-${index}`) && (
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* دليل شامل لسلامة الأثاث */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-right">
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">
                دليل شامل لسلامة الأثاث أثناء النقل في الكويت
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                تعد سلامة الأثاث من أهم الأولويات في عملية نقل الأثاث. سواء كنت تنقل أثاث منزل أو مكتب، فإن حماية الأثاث من الخدوش والكسر أمر ضروري. سنتعرف على أفضل الطرق لضمان سلامة أثاثك أثناء النقل.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-primary">طرق حماية الأثاث أثناء النقل</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">1. حماية الأثاث الزجاجي</h4>
                  <p className="text-base leading-relaxed mb-3">
                    يحتاج الأثاث الزجاجي إلى عناية خاصة أثناء النقل. يجب استخدام مواد تغليف مخصصة للزجاج، وتجنب وضع الأثاث الزجاجي في أسفل الشحنة. تقدم شركات نقل الأثاث في الكويت خدمات متخصصة لحماية الأثاث الزجاجي.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">2. حماية الأجهزة الإلكترونية</h4>
                  <p className="text-base leading-relaxed mb-3">
                    تحتاج الأجهزة الإلكترونية إلى حماية خاصة من الرطوبة والحرارة. يجب استخدام مواد تغليف مقاومة للرطوبة، وتجنب نقل الأجهزة الإلكترونية في الأوقات الحارة من اليوم.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">3. حماية الأثاث الخشبي</h4>
                  <p className="text-base leading-relaxed mb-3">
                    يحتاج الأثاث الخشبي إلى حماية من الخدوش والرطوبة. يجب استخدام مواد تغليف ناعمة، وتجنب وضع الأثاث الخشبي في أماكن رطبة أو حارة.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">4. حماية الأقمشة والستائر</h4>
                  <p className="text-base leading-relaxed mb-3">
                    تحتاج الأقمشة والستائر إلى حماية من الغبار والرطوبة. يجب استخدام أكياس بلاستيكية محكمة الإغلاق، وتجنب تعريضها للرطوبة العالية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            احصل على استشارة مجانية لنقل الأثاث
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            تواصل مع خبرائنا للحصول على نصائح مخصصة ونقل آمن لأثاثك في جميع مناطق الكويت
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2"
              asChild
            >
              <Link href="tel:90905157">
                <Phone className="h-5 w-5" />
                اتصل الآن
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link href="/services" className="text-black">
                <ArrowRight className="h-5 w-5 text-black" />
                عرض خدماتنا
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 