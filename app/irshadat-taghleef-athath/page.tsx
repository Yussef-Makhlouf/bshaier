"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Package, 
  Phone, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  Car,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Glasses,
  Sofa,
  Bed,
  Tv,
  Palette,
 
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// أنواع الأثاث وطرق تغليفها
const furnitureTypes = [
  {
    id: "glass-furniture",
    title: "الأثاث الزجاجي",
    icon: Glasses,
    description: "طرق تغليف آمنة للأثاث الزجاجي والمرايا",
    materials: [
      "ورق فقاعي مزدوج الطبقات",
      "كرتون مقوى سميك",
      "شريط لاصق شفاف",
      "قماش ناعم للتنظيف",
      "أكياس بلاستيكية مقاومة للماء"
    ],
    steps: [
      "نظف السطح الزجاجي جيداً",
      "غلف بطبقة من الورق الفقاعي",
      "أضف طبقة ثانية من الكرتون المقوى",
      "اربط الشريط اللاصق بشكل متقاطع",
      "اكتب 'زجاج - هش' على كل قطعة"
    ],
    tips: [
      "تجنب الضغط الشديد على الزجاج",
      "احتفظ بالقطع في وضع عمودي",
      "استخدم وسائد إضافية للزوايا",
      "تجنب وضع قطع ثقيلة فوق الزجاج"
    ],
    difficulty: "متوسط",
    timeRequired: "30-45 دقيقة للقطعة"
  },
  {
    id: "wooden-furniture",
    title: "الأثاث الخشبي",
    icon: Sofa,
    description: "حماية الأثاث الخشبي من الخدوش والرطوبة",
    materials: [
      "قماش قطن ناعم",
      "ورق فقاعي عادي",
      "كرتون مقوى",
      "شريط لاصق",
      "أكياس بلاستيكية كبيرة"
    ],
    steps: [
      "نظف الأثاث من الغبار والأتربة",
      "غلف الأرجل بطبقة من القماش",
      "غلف الأسطح بطبقة من الورق الفقاعي",
      "أضف طبقة خارجية من الكرتون",
      "اربط الشريط اللاصق بشكل آمن"
    ],
    tips: [
      "احتفظ بالمسامير والبراغي في أكياس منفصلة",
      "التقط صور للأثاث قبل التغليف",
      "استخدم وسائد إضافية للزوايا الحادة",
      "تجنب الرطوبة أثناء التخزين"
    ],
    difficulty: "سهل",
    timeRequired: "20-30 دقيقة للقطعة"
  },
  {
    id: "electronic-devices",
    title: "الأجهزة الإلكترونية",
    icon: Tv,
    description: "تغليف آمن للأجهزة الإلكترونية والكهربائية",
    materials: [
      "ورق فقاعي مزدوج الطبقات",
      "كرتون مقوى سميك",
      "شريط لاصق",
      "أكياس بلاستيكية مقاومة للماء",
      "وسائد إسفنجية"
    ],
    steps: [
      "افصل جميع الكابلات والأسلاك",
      "غلف الجهاز بطبقة من الورق الفقاعي",
      "ضع الجهاز في كرتونة مناسبة",
      "أضف وسائد إسفنجية للزوايا",
      "اغلق الكرتونة واربطها بالشريط"
    ],
    tips: [
      "احتفظ بالكابلات في أكياس منفصلة",
      "اكتب اسم الجهاز على الكرتونة",
      "تجنب الرطوبة والحرارة العالية",
      "احتفظ بالدليل والضمان معك"
    ],
    difficulty: "متوسط",
    timeRequired: "45-60 دقيقة للجهاز"
  },
  {
    id: "artwork-paintings",
    title: "اللوحات والأعمال الفنية",
    icon: Palette,
    description: "حماية اللوحات والأعمال الفنية الثمينة",
    materials: [
      "ورق فقاعي ناعم",
      "كرتون مقوى سميك جداً",
      "شريط لاصق شفاف",
      "قماش ناعم للتنظيف",
      "أكياس بلاستيكية مقاومة للماء"
    ],
    steps: [
      "نظف اللوحة برفق",
      "غلف اللوحة بطبقة من الورق الفقاعي",
      "ضع اللوحة في كرتونة مناسبة",
      "أضف وسائد إضافية للزوايا",
      "اكتب 'عمل فني - هش' على الكرتونة"
    ],
    tips: [
      "تجنب الضغط على سطح اللوحة",
      "احتفظ باللوحات في وضع عمودي",
      "تجنب الرطوبة والحرارة",
      "استخدم وسائل نقل متخصصة للقطع الثمينة"
    ],
    difficulty: "صعب",
    timeRequired: "60-90 دقيقة للقطعة"
  },
  {
    id: "kitchen-appliances",
    title: "أجهزة المطبخ",
    icon: Car,
    description: "تغليف آمن لأجهزة المطبخ والأدوات",
    materials: [
      "ورق فقاعي عادي",
      "كرتون مقوى",
      "شريط لاصق",
      "أكياس بلاستيكية",
      "وسائد إسفنجية"
    ],
    steps: [
      "نظف الأجهزة جيداً",
      "غلف الأجهزة بطبقة من الورق الفقاعي",
      "ضع الأجهزة في كراتين مناسبة",
      "أضف وسائد للزوايا",
      "اربط الكراتين بالشريط"
    ],
    tips: [
      "افصل الأجزاء القابلة للفك",
      "احتفظ بالقطع الصغيرة في أكياس منفصلة",
      "اكتب اسم الجهاز على الكرتونة",
      "تجنب الرطوبة أثناء التخزين"
    ],
    difficulty: "سهل",
    timeRequired: "30-45 دقيقة للجهاز"
  },
  {
    id: "clothing-textiles",
    title: "الملابس والمنسوجات",
    icon: Bed,
    description: "تغليف الملابس والستائر والمفروشات",
    materials: [
      "أكياس بلاستيكية كبيرة",
      "كرتون مقوى",
      "شريط لاصق",
      "أكياس تفريغ الهواء",
      "قماش ناعم"
    ],
    steps: [
      "نظف الملابس والمنسوجات",
      "طوي الملابس بشكل منظم",
      "ضع الملابس في أكياس بلاستيكية",
      "ضع الأكياس في كراتين مناسبة",
      "اكتب محتويات كل كرتونة"
    ],
    tips: [
      "استخدم أكياس تفريغ الهواء للملابس الشتوية",
      "احتفظ بالملابس الثمينة في أكياس منفصلة",
      "تجنب الرطوبة والعفن",
      "اكتب محتويات كل كرتونة بوضوح"
    ],
    difficulty: "سهل جداً",
    timeRequired: "15-30 دقيقة للقطعة"
  }
]

// مواد التغليف الأساسية
const packingMaterials = [
  {
    name: "الورق الفقاعي",
    description: "مادة أساسية لحماية الأثاث من الصدمات",
    types: [
      "ورق فقاعي عادي - للأثاث العادي",
      "ورق فقاعي مزدوج - للأجهزة الإلكترونية",
      "ورق فقاعي ناعم - للقطع الحساسة"
    ],
    price: "5-15 د.ك للرول",
    usage: "يستخدم لتغليف جميع أنواع الأثاث"
  },
  {
    name: "الكرتون المقوى",
    description: "مادة صلبة لحماية الأثاث من الخارج",
    types: [
      "كرتون مقوى عادي - للأثاث العادي",
      "كرتون مقوى سميك - للأجهزة الإلكترونية",
      "كرتون مقوى مزدوج - للقطع الثمينة"
    ],
    price: "3-10 د.ك للقطعة",
    usage: "يستخدم لتغليف الأثاث من الخارج"
  },
  {
    name: "الشريط اللاصق",
    description: "مادة لاصقة لتثبيت التغليف",
    types: [
      "شريط لاصق عادي - للاستخدام العام",
      "شريط لاصق شفاف - للقطع الحساسة",
      "شريط لاصق مقاوم للماء - للاستخدام الخارجي"
    ],
    price: "2-8 د.ك للرول",
    usage: "يستخدم لتثبيت جميع أنواع التغليف"
  },
  {
    name: "الوسائد الإسفنجية",
    description: "وسائد لحماية زوايا الأثاث",
    types: [
      "وسائد إسفنجية عادية - للاستخدام العام",
      "وسائد إسفنجية سميكة - للقطع الثمينة",
      "وسائد إسفنجية مخصصة - للأجهزة الإلكترونية"
    ],
    price: "1-5 د.ك للقطعة",
    usage: "يستخدم لحماية زوايا الأثاث"
  }
]

// نصائح عامة للتغليف
const generalPackingTips = [
  {
    title: "التخطيط المسبق للتغليف",
    tips: [
      "أعد قائمة بجميع الأثاث المطلوب تغليفه",
      "احسب كمية المواد المطلوبة",
      "حدد وقت كافي للتغليف",
      "جهز مساحة مناسبة للتغليف",
      "احتفظ بأدوات التغليف الأساسية"
    ]
  },
  {
    title: "ترتيب عملية التغليف",
    tips: [
      "ابدأ بالأثاث غير المستخدم",
      "غلف الأجهزة الإلكترونية بعناية خاصة",
      "احتفظ بالأثاث الأساسي للنهاية",
      "اكتب محتويات كل كرتونة",
      "رتب الكراتين حسب الغرفة"
    ]
  },
  {
    title: "حماية الأثاث الثمين",
    tips: [
      "استخدم مواد تغليف عالية الجودة",
      "أضف طبقات إضافية للحماية",
      "اكتب 'هش' على القطع الحساسة",
      "احتفظ بالقطع الثمينة معك",
      "التقط صور للأثاث قبل التغليف"
    ]
  }
]

// أسئلة شائعة
const faqs = [
  {
    question: "ما هي أفضل مواد التغليف للأثاث؟",
    answer: "أفضل مواد التغليف تشمل الورق الفقاعي، الكرتون المقوى، الشريط اللاصق، والوسائد الإسفنجية. اختر المواد حسب نوع الأثاث وقيمته."
  },
  {
    question: "كم تكلفة تغليف الأثاث في الكويت؟",
    answer: "تختلف التكلفة حسب حجم الأثاث ونوع المواد المستخدمة. تبدأ من 15 دينار كويتي للشقق الصغيرة وقد تصل إلى 50 دينار للفلل الكبيرة."
  },
  {
    question: "هل يمكن تغليف الأثاث بنفسي؟",
    answer: "نعم، يمكنك تغليف الأثاث بنفسك، لكن يفضل الاستعانة بمتخصصين للأثاث الثمين والأجهزة الإلكترونية لضمان الحماية الكاملة."
  },
  {
    question: "كم تستغرق عملية التغليف؟",
    answer: "تستغرق عملية التغليف من يوم إلى 3 أيام حسب حجم الأثاث وعدد الغرف. الأثاث الكبير قد يحتاج وقت أطول."
  },
  {
    question: "كيف أحمي الأثاث من الرطوبة أثناء التخزين؟",
    answer: "استخدم أكياس بلاستيكية مقاومة للماء، تجنب التخزين في الأماكن الرطبة، واستخدم مواد ماصة للرطوبة مثل السيليكا جل."
  }
]

export default function PackingGuidePage() {
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
                إرشادات تغليف <span className="text-primary">الأثاث</span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-[600px] mr-auto leading-loose">
                دليل مفصل لطرق تغليف الأثاث بأمان وحمايته من الخدوش والكسر أثناء النقل. تعرف على أفضل المواد والطرق
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
                src="/services/packing.png" 
                alt="إرشادات تغليف الأثاث" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* مقدمة شاملة للتغليف */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-right">
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">
                دليل شامل لتغليف الأثاث في الكويت - حماية مثالية لأثاثك
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                يعد تغليف الأثاث من أهم مراحل عملية نقل الأثاث، حيث يعتمد عليه نجاح العملية بأكملها. سواء كنت تنقل أثاث منزل أو مكتب أو فيلا، فإن التغليف الجيد يضمن وصول أثاثك بحالة ممتازة إلى وجهتك الجديدة. في هذا الدليل الشامل، سنتعرف على أفضل طرق تغليف الأثاث في الكويت، والمواد المطلوبة، والطرق المتخصصة لكل نوع من الأثاث.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                تقدم شركات نقل الأثاث في الكويت خدمات تغليف احترافية باستخدام أحدث المواد والتقنيات. من تغليف الأثاث الزجاجي الحساس إلى الأجهزة الإلكترونية الثمينة، كل نوع من الأثاث يحتاج إلى طريقة تغليف خاصة تضمن حمايته من الخدوش والكسر أثناء النقل.
              </p>
              
              <div className="bg-secondary/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-secondary">أهمية التغليف الجيد للأثاث</h3>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>حماية الأثاث من الخدوش والكسر أثناء النقل</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>منع الرطوبة والحرارة من التأثير على الأثاث</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>تسهيل عملية النقل وتنظيم الأثاث</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>توفير الوقت والجهد في عملية التفريغ والترتيب</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* مواد التغليف الأساسية */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              مواد التغليف الأساسية لتغليف الأثاث
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              تعرف على المواد الأساسية المطلوبة لتغليف الأثاث بأمان في الكويت
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packingMaterials.map((material, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                  <CardTitle className="text-lg">{material.name}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {material.price}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">الأنواع المتوفرة:</h4>
                      {material.types.map((type, typeIndex) => (
                        <div key={typeIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <p className="text-sm leading-relaxed">{type}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-3 border-t">
                      <p className="text-sm text-muted-foreground">
                        <strong>الاستخدام:</strong> {material.usage}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* أنواع الأثاث وطرق تغليفها */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              طرق تغليف أنواع الأثاث المختلفة
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              تعرف على الطرق المخصصة لتغليف كل نوع من الأثاث
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {furnitureTypes.map((furniture, index) => (
              <Card 
                key={furniture.id} 
                className="overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <furniture.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{furniture.title}</CardTitle>
                      <CardDescription>{furniture.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {furniture.difficulty}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {furniture.timeRequired}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">المواد المطلوبة:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {furniture.materials.map((material, matIndex) => (
                          <div key={matIndex} className="flex items-center gap-2">
                            <Package className="h-4 w-4 text-primary" />
                            <span className="text-sm">{material}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">خطوات التغليف:</h4>
                      <div className="space-y-2">
                        {furniture.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3">
                            <div className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </div>
                            <p className="text-sm leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">نصائح مهمة:</h4>
                      <div className="space-y-2">
                        {furniture.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start gap-3">
                            <AlertTriangle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                            <p className="text-sm leading-relaxed">{tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* نصائح عامة للتغليف */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              نصائح عامة لتغليف الأثاث في الكويت
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نصائح مهمة لضمان تغليف آمن وفعال للأثاث في البيئة الكويتية
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-lg max-w-none text-right">
              <h3 className="text-2xl font-bold mb-4 text-secondary">اعتبارات خاصة بالمناخ الكويتي</h3>
              <p className="text-lg leading-relaxed mb-6">
                يتطلب تغليف الأثاث في الكويت اعتبارات خاصة نظراً للمناخ الحار والرطب. يجب استخدام مواد تغليف مقاومة للحرارة والرطوبة، خاصة للأثاث الخشبي والأقمشة. تقدم شركات نقل الأثاث في الكويت مواد تغليف متخصصة تتحمل درجات الحرارة العالية والرطوبة الشديدة.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                من المهم أيضاً اختيار الوقت المناسب للتغليف، حيث يفضل تجنب تغليف الأثاث في الأوقات الحارة من اليوم. كما يجب التأكد من تخزين مواد التغليف في مكان بارد وجاف قبل الاستخدام.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {generalPackingTips.map((section, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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

      {/* دليل شامل لمواد التغليف */}
      <section className="py-16 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-right">
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">
                دليل شامل لمواد التغليف المستخدمة في الكويت
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                تعتمد شركات نقل الأثاث في الكويت على مجموعة متنوعة من مواد التغليف عالية الجودة لحماية الأثاث أثناء النقل. سنتعرف على أهم هذه المواد وكيفية استخدامها بشكل صحيح.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-secondary">أنواع مواد التغليف المستخدمة</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">1. الورق الفقاعي (Bubble Wrap)</h4>
                  <p className="text-base leading-relaxed mb-3">
                    يعتبر الورق الفقاعي من أهم مواد التغليف المستخدمة في نقل الأثاث. يوفر حماية ممتازة ضد الصدمات والخدوش، خاصة للأثاث الزجاجي والأجهزة الإلكترونية. تقدم شركات نقل الأثاث في الكويت أنواع مختلفة من الورق الفقاعي حسب نوع الأثاث.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">2. الكرتون المقوى</h4>
                  <p className="text-base leading-relaxed mb-3">
                    يستخدم الكرتون المقوى لتغليف الأثاث من الخارج وحمايته من العوامل الخارجية. تختلف سماكة الكرتون حسب نوع الأثاث، حيث يستخدم كرتون سميك للقطع الثمينة والأجهزة الإلكترونية.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">3. الشريط اللاصق</h4>
                  <p className="text-base leading-relaxed mb-3">
                    يستخدم الشريط اللاصق لتثبيت مواد التغليف وضمان عدم انفكاكها أثناء النقل. تقدم شركات نقل الأثاث في الكويت أنواع مختلفة من الشريط اللاصق حسب الاستخدام المطلوب.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">4. الوسائد الإسفنجية</h4>
                  <p className="text-base leading-relaxed mb-3">
                    تستخدم الوسائد الإسفنجية لحماية زوايا الأثاث ومنع الخدوش. توفر حماية إضافية للقطع الثمينة والأجهزة الإلكترونية أثناء النقل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              الأسئلة الشائعة حول تغليف الأثاث في الكويت
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول تغليف الأثاث في البيئة الكويتية
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            احصل على خدمة تغليف احترافية
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            تواصل مع خبرائنا للحصول على خدمة تغليف احترافية ومضمونة لأثاثك
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
              className="gap-2 border-white text-black hover:bg-white hover:text-black"
              asChild
            >
              <Link href="/services" className="text-black">
                <span className="text-black">عرض خدماتنا</span>
                <ArrowRight className="h-5 w-5 text-black" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 