"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, Calendar, Truck, Package, CheckCheck, User, Clock, Wrench, Shield, MapPin, DollarSign, Star, Home, Building, Warehouse } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    id: "contact",
    title: "تواصل مع بشاير الخير لنقل الأثاث",
    description: "اتصل بنا عبر الهاتف أو الواتساب للحصول على عرض سعر فوري لخدمات نقل العفش في الكويت",
    icon: Phone,
    color: "text-primary",
    bgColor: "bg-primary/10",
    keywords: "شركة نقل عفش الكويت، بشاير الخير لنقل الأثاث، اسعار نقل عفش الكويت"
  },
  {
    id: "inspection",
    title: "معاينة الأثاث والعفش",
    description: "يقوم فريقنا المتخصص بمعاينة الأثاث المنزلي والمكتبي لتحديد متطلبات النقل والتغليف",
    icon: Star,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    keywords: "نقل اثاث منزلي الكويت، نقل اثاث المكاتب الكويت، افضل شركة نقل عفش الكويت"
  },
  {
    id: "schedule",
    title: "تحديد موعد نقل العفش",
    description: "نقدم خدمة نقل عفش 24 ساعة في جميع مناطق الكويت مع مرونة في تحديد المواعيد المناسبة للعميل",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    keywords: "خدمة نقل عفش 24 ساعة الكويت، نقل عفش في العطل الرسمية الكويت، نقل عفش فوري الكويت"
  },
  {
    id: "disassembly",
    title: "فك وتفكيك الأثاث",
    description: "فريق من النجارين والفنيين المتخصصين في فك غرف النوم والمطابخ والستائر والأثاث المكتبي بأمان",
    icon: Wrench,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    keywords: "فك وتركيب اثاث الكويت، فك وتركيب غرف نوم الكويت، فك وتركيب مطابخ الكويت، نجار تركيب اثاث الكويت"
  },
  {
    id: "packing",
    title: "تغليف الأثاث والعفش",
    description: "نستخدم أفضل مواد التغليف لحماية الأثاث الزجاجي والخشبي والأجهزة الكهربائية من الخدوش والكسور",
    icon: Package,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    keywords: "تغليف اثاث الكويت، تغليف عفش الكويت، تغليف الاثاث الزجاجي الكويت، تغليف الاثاث الخشبي الكويت"
  },
  {
    id: "moving",
    title: "نقل العفش بأمان",
    description: "ننقل الأثاث باستخدام سيارات مغلقة ومجهزة خصيصاً لنقل العفش بأمان تام مع التأمين ضد الكسر",
    icon: Truck,
    color: "text-red-600",
    bgColor: "bg-red-50",
    keywords: "نقل عفش بأمان الكويت، سيارات نقل اثاث الكويت، نقل عفش بسيارات مغلقة الكويت، نقل عفش مع التأمين ضد الكسر"
  },
  {
    id: "delivery",
    title: "التوصيل إلى جميع مناطق الكويت",
    description: "نقدم خدمات نقل العفش إلى جميع محافظات الكويت: العاصمة، حولي، الفروانية، الأحمدي، الجهراء، ومبارك الكبير",
    icon: MapPin,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    keywords: "نقل عفش محافظة العاصمة، نقل عفش محافظة حولي، نقل عفش محافظة الفروانية، نقل عفش محافظة الاحمدي، نقل عفش محافظة الجهراء"
  },
  {
    id: "assembly",
    title: "تركيب الأثاث في الموقع الجديد",
    description: "نقوم بتركيب جميع قطع الأثاث في المنزل أو المكتب الجديد مع ضمان عدم التلف أو الخدش",
    icon: CheckCheck,
    color: "text-primary",
    bgColor: "bg-primary/10",
    keywords: "تركيب اثاث ايكيا الكويت، فك وتركيب اثاث مكتبي الكويت، تركيب اثاث احترافي الكويت، نقل عفش بدون تكسير الكويت"
  },
  {
    id: "storage",
    title: "خدمات تخزين الأثاث",
    description: "نوفر مستودعات آمنة ونظيفة لتخزين الأثاث والعفش لفترات قصيرة أو طويلة بأسعار تنافسية",
    icon: Warehouse,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    keywords: "تخزين اثاث الكويت، تخزين عفش الكويت، مستودعات تخزين اثاث الكويت، تخزين اثاث آمن الكويت"
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // تجميع الخطوات حسب الفئات
  const categories = [
    { id: "all", name: "جميع الخدمات" },
    { id: "moving", name: "نقل العفش" },
    { id: "assembly", name: "فك وتركيب" },
    { id: "packing", name: "تغليف" },
    { id: "storage", name: "تخزين" },
  ]

  // فلترة الخطوات حسب الفئة المختارة
  const filteredSteps = selectedCategory && selectedCategory !== "all" 
    ? steps.filter(step => step.id.includes(selectedCategory) || step.keywords.includes(selectedCategory))
    : steps

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
        setActiveStep((prev) => (prev === filteredSteps.length - 1 ? 0 : prev + 1))
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible, filteredSteps.length])

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen" ref={processRef}>
      <div className="max-w-[1400px] w-full px-4 md:px-8 mx-auto">
        <div
          className={`flex flex-col items-center justify-center space-y-6 text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
            دليلك الشامل لنقل العفش في الكويت
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 max-w-[1000px]">
            الطريقة المثالية لنقل العفش بدون تكسير مع بشاير الخير
          </h2>
          <p className="max-w-[1000px] text-gray-600 md:text-xl/relaxed lg:text-2xl/relaxed">
            هل تخطط للانتقال إلى منزل جديد؟ اكتشف كيف يمكنك نقل أثاثك بأمان وبدون عناء مع شركة نقل عفش محترفة في الكويت بخبرة 10 سنوات
          </p>

          {/* أزرار تصفية الخدمات */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-[1000px] mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 ${selectedCategory === category.id 
                  ? 'bg-primary text-white shadow-lg transform scale-105 border-2 border-primary' 
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary/30 hover:bg-gray-50'}`}
              >
                {category.id === "moving" && <Truck className="inline-block h-5 w-5 ml-2 -mt-1" />}
                {category.id === "assembly" && <Wrench className="inline-block h-5 w-5 ml-2 -mt-1" />}
                {category.id === "packing" && <Package className="inline-block h-5 w-5 ml-2 -mt-1" />}
                {category.id === "storage" && <Warehouse className="inline-block h-5 w-5 ml-2 -mt-1" />}
                {category.id === "all" && <CheckCheck className="inline-block h-5 w-5 ml-2 -mt-1" />}
                {category.name}
              </button>
            ))}
          </div>
          
          <p className="text-gray-500 mt-4 max-w-[800px] mx-auto">
            اختر الخدمة التي تهمك لمعرفة المزيد عن كيفية نقل العفش بطريقة احترافية وآمنة في جميع مناطق الكويت
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
          {/* الجانب الأيمن - نصائح ومعلومات إرشادية */}
          <div className="lg:col-span-5 relative">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="aspect-video lg:aspect-[4/5] relative">
                <Image 
                  src="/car2.jpg" 
                  alt="أفضل شركة نقل عفش الكويت - بشاير الخير لنقل الأثاث" 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>

              {/* عنوان على الصورة */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">نقل عفش احترافي في الكويت</h3>
                <p className="text-white/90 text-sm md:text-base">خدمة متكاملة لنقل الأثاث المنزلي والمكتبي بأمان</p>
              </div>

              {/* شارة مميزة */}
              <div className="absolute top-6 left-6 bg-primary text-white py-2 px-4 rounded-full text-sm font-bold flex items-center shadow-lg">
                <Clock className="h-4 w-4 ml-1" />
                خدمة 24 ساعة
              </div>
            </div>

            {/* نصائح وإرشادات */}
            <div className="mt-8 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-primary ml-2" />
                  نصائح لنقل عفش بدون تكسير
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 flex-shrink-0 mt-1 ml-2"><CheckCheck className="h-4 w-4" /></span>
                    <span>قم بتفريغ الخزائن والأدراج قبل فك وتركيب غرف النوم والمطابخ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 flex-shrink-0 mt-1 ml-2"><CheckCheck className="h-4 w-4" /></span>
                    <span>احرص على تغليف الأثاث الزجاجي والخشبي بشكل مناسب لتجنب الخدوش</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 flex-shrink-0 mt-1 ml-2"><CheckCheck className="h-4 w-4" /></span>
                    <span>استعن بشركة نقل عفش محترفة لضمان سلامة الأثاث أثناء النقل</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 text-primary ml-2" />
                  كيف تحصل على أسعار مناسبة
                </h3>
                <p className="text-gray-600 mb-4">للحصول على أرخص شركة نقل عفش في الكويت مع الحفاظ على جودة الخدمة:</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 flex-shrink-0 mt-1 ml-2"><CheckCheck className="h-4 w-4" /></span>
                    <span>قارن بين عروض الأسعار من عدة شركات نقل أثاث</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 flex-shrink-0 mt-1 ml-2"><CheckCheck className="h-4 w-4" /></span>
                    <span>اسأل عن العروض والخصومات المتاحة لنقل العفش</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6 rounded-xl shadow-md border border-primary/10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">تغطية شاملة لجميع مناطق الكويت</h3>
                <p className="text-gray-600 mb-4">نقدم خدمات نقل عفش في جميع محافظات الكويت:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">نقل عفش محافظة العاصمة</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">نقل عفش محافظة حولي</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">نقل عفش محافظة الفروانية</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">نقل عفش محافظة الأحمدي</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">نقل عفش محافظة الجهراء</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">نقل عفش محافظة مبارك الكبير</span>
                </div>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر - خطوات العمل */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">
                  <CheckCheck className="h-6 w-6" />
                </span>
                دليل خطوات نقل العفش بشكل احترافي
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                إذا كنت تخطط للانتقال إلى منزل جديد، فإن اتباع الخطوات الصحيحة سيوفر عليك الكثير من الوقت والجهد ويضمن سلامة أثاثك. المراحل التالية هي الطريقة المثالية لنقل العفش بدون تكسير وبأمان تام.
              </p>
            </div>

            <div className="space-y-6">
              {filteredSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex gap-5 p-6 rounded-xl transition-all duration-500 bg-white shadow-md border border-gray-100 ${
                    isVisible ? `animate-fade-in-right delay-${index * 100}` : "opacity-0"
                  } ${activeStep === index ? "transform scale-102 shadow-lg border-primary/20" : "hover:shadow-lg hover:border-primary/10"}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div
                    className={`${step.bgColor} ${step.color} p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0`}
                  >
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 flex items-center mb-3">
                      <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ml-2">
                        {index + 1}
                      </span>
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                    
                    {/* نصيحة مفيدة */}
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mb-3">
                      <p className="text-gray-700 text-sm flex items-start">
                        <span className="text-primary ml-2 flex-shrink-0 mt-0.5"><Star className="h-4 w-4" /></span>
                        <span>
                          {step.id === "contact" && "احرص على التواصل مع شركة نقل عفش موثوقة ومرخصة لضمان حقوقك"}
                          {step.id === "inspection" && "قم بتجهيز قائمة بالقطع الثمينة والحساسة للتأكيد على الاهتمام الخاص بها"}
                          {step.id === "schedule" && "اختر شركة تقدم خدمة نقل عفش 24 ساعة للحصول على مرونة أكبر في تحديد المواعيد"}
                          {step.id === "disassembly" && "تأكد من التقاط صور للأثاث قبل الفك لتسهيل عملية إعادة التركيب لاحقاً"}
                          {step.id === "packing" && "استخدم مواد تغليف عالية الجودة للقطع الزجاجية والخشبية لمنع الخدوش"}
                          {step.id === "moving" && "تأكد من أن شركة نقل العفش تستخدم سيارات مغلقة ومجهزة خصيصاً لنقل الأثاث"}
                          {step.id === "delivery" && "اختر شركة تغطي جميع مناطق الكويت لضمان وصول العفش إلى أي مكان"}
                          {step.id === "assembly" && "تأكد من فحص الأثاث بعد التركيب للتأكد من سلامته وثباته"}
                          {step.id === "storage" && "تأكد من أن مستودعات التخزين آمنة وجافة وخالية من الحشرات"}
                        </span>
                      </p>
                    </div>
                    
                    {/* كلمات مفتاحية */}
                    <div className="flex flex-wrap gap-2">
                      {step.keywords.split('،').slice(0, 3).map((keyword, i) => (
                        <span key={i} className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full font-medium">{keyword.trim()}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center">
              <p className="text-gray-700 mb-4 text-center max-w-[600px]">
                احصل على خدمة نقل عفش احترافية مع ضمان عدم التكسير وبأسعار تنافسية في جميع مناطق الكويت
              </p>
              <Link href="tel:90905157" className="inline-block">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  احصل على عرض سعر الآن
                </Button>
              </Link>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  )
}
