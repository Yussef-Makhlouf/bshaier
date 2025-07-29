
"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, ArrowRight, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Kuwait areas data with detailed descriptions for SEO
const areas = [
  {
    id: "capital",
    name: "محافظة العاصمة",
    description: "خدمات نقل الأثاث في محافظة العاصمة",
    longDescription: "نقدم خدمات نقل الأثاث المتكاملة في جميع مناطق محافظة العاصمة بالكويت. تتميز خدماتنا بالسرعة والدقة مع فريق متخصص في التعامل مع المباني السكنية والمكاتب في المناطق المزدحمة. نوفر خدمات النقل والفك والتركيب والتغليف بأعلى مستويات الجودة.",
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
    image: "/areas/capital.png",
    color: "#1a56db",
    slug: "capital",
    canonicalUrl: "https://www.bashir-mover.com/areas/capital",
  },
  {
    id: "hawalli",
    name: "محافظة حولي",
    description: "خدمات نقل الأثاث في محافظة حولي",
    longDescription: "نوفر خدمات نقل الأثاث الشاملة في جميع مناطق محافظة حولي بالكويت. نتميز بخبرتنا الواسعة في التعامل مع الشقق والأبراج السكنية في مناطق مثل السالمية وحولي. فريقنا مدرب على التعامل مع تحديات المباني العالية ونقل الأثاث عبر المصاعد والسلالم الضيقة.",
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
    image: "/areas/hawalli.png",
    color: "#2563eb",
    slug: "hawalli",
    canonicalUrl: "https://www.bashir-mover.com/areas/hawalli",
  },
  {
    id: "ahmadi",
    name: "محافظة الأحمدي",
    description: "خدمات نقل الأثاث في محافظة الأحمدي",
    longDescription: "نقدم خدمات نقل الأثاث المتميزة في جميع مناطق محافظة الأحمدي بالكويت. نغطي المناطق البعيدة مثل الوفرة والخيران بنفس كفاءة المناطق القريبة. نمتلك أسطول من السيارات المجهزة خصيصاً لنقل الأثاث لمسافات طويلة مع الحفاظ على سلامته.",
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
    image: "/areas/ahmadi.png",
    color: "#3b82f6",
    slug: "ahmadi",
    canonicalUrl: "https://www.bashir-mover.com/areas/ahmadi",
    },
  {
    id: "farwaniya",
    name: "محافظة الفروانية",
    description: "خدمات نقل الأثاث في محافظة الفروانية",
    longDescription: "نوفر خدمات نقل الأثاث الاحترافية في جميع مناطق محافظة الفروانية بالكويت. نتميز بقدرتنا على التعامل مع المناطق المزدحمة والشوارع الضيقة. فريقنا على دراية كاملة بطرق المنطقة وأوقات الازدحام لضمان وصول سريع وآمن.",
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
    image: "/areas/farwaniya.png",
    color: "#60a5fa",
    slug: "farwaniya",
    canonicalUrl: "https://www.bashir-mover.com/areas/farwaniya",
  },
  {
    id: "jahra",
    name: "محافظة الجهراء",
    description: "خدمات نقل الأثاث في محافظة الجهراء",
    longDescription: "نقدم خدمات نقل الأثاث الشاملة في جميع مناطق محافظة الجهراء بالكويت. نتميز بخبرتنا في التعامل مع المناطق البعيدة مثل العبدلي وكبد. نوفر خدمات النقل والفك والتركيب والتغليف بأسعار تنافسية مع الالتزام بالمواعيد المحددة.",
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
    image: "/areas/jahra.png",
    color: "#93c5fd",
    slug: "jahra",
    canonicalUrl: "https://www.bashir-mover.com/areas/jahra",
  },
  {
    id: "mubarak",
    name: "محافظة مبارك الكبير",
    description: "خدمات نقل الأثاث في محافظة مبارك الكبير",
    longDescription: "نوفر خدمات نقل الأثاث المتميزة في جميع مناطق محافظة مبارك الكبير بالكويت. نتميز بتقديم خدمات سريعة ودقيقة للمنازل والفلل في المناطق السكنية الراقية. فريقنا مدرب على التعامل مع الأثاث الفاخر والقطع الثمينة بعناية فائقة.",
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
    image: "/areas/mubarak.png",
    color: "#bfdbfe",
    slug: "mubarak",
    canonicalUrl: "https://www.bashir-mover.com/areas/mubarak",
  },
]

export default function AreasPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="bg-gradient-to-b from-background to-muted">
      
      {/* Hero Section */}
      <section className="pb-16 md:pb-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              نغطي جميع المناطق
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              مناطق خدمة نقل الأثاث في الكويت
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              نقدم خدماتنا المتميزة في نقل الأثاث وفك وتركيب وتغليف العفش في جميع محافظات ومناطق الكويت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="gap-2">
                <Link href="tel:90905157">
                  <Phone className="h-5 w-5" />
                  اتصل بنا الآن
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#all-areas" className="gap-2" aria-label="عرض جميع النتائج" title="عرض جميع النتائج"> 
                  عرض جميع المناطق
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* All Areas Section */}
      <section id="all-areas" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">جميع مناطق الخدمة</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              تعرف على تفاصيل خدماتنا في كل منطقة من مناطق الكويت
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <Card key={area.id} className={`overflow-hidden transition-all duration-300 border-2 border-primary/20 hover:border-primary ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div 
                    className="absolute top-0 left-0 w-full h-full opacity-10"
                    style={{ backgroundColor: "#3b82f6" }}
                  ></div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm" style={{ backgroundColor: "#3b82f6" }}>
                    {area.estimatedTime}
                  </div>
                </div>
                <CardHeader className="border-b border-muted pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full" style={{ backgroundColor: "#3b82f610" }}>
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{area.name}</CardTitle>
                  </div>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{area.estimatedTime}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{area.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4 mt-2">
                    {area.neighborhoods.slice(0, 5).map((neighborhood, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 text-xs rounded-full border border-primary/30 text-primary transition-colors duration-200 hover:bg-primary/10"
                      >
                        {neighborhood}
                      </span>
                    ))}
                    {area.neighborhoods.length > 5 && (
                      <span 
                        className="inline-block px-2 py-1 text-xs rounded-full border border-primary/30 text-primary transition-colors duration-200 hover:bg-primary/10"
                      >
                        +{area.neighborhoods.length - 5}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t border-muted">
                  <Button asChild className="w-full gap-2 transition-all duration-300 hover:scale-[1.02]">
                    <Link href={`/areas/${area.slug}`} aria-label="تفاصيل المنطقة" title="تفاصيل المنطقة" >
                      تفاصيل المنطقة
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
{/* قسم الخدمات التفصيلية */}
<section className="py-16 md:py-24 bg-muted/30">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center space-y-4 text-center mb-12">
      <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
        خدمات متكاملة
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">خدمات نقل الأثاث الشاملة في الكويت</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        تقدم شركة بشائر الخير مجموعة متكاملة من خدمات نقل وفك وتركيب وتغليف الأثاث بأعلى معايير الجودة
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* خدمة فك وتركيب الأثاث */}
      <Card className="overflow-hidden transition-all duration-300 border-2 border-primary/20 hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><path d="M14 4l-4.5 4.5"/><path d="M18.5 2.5l-13 13"/><path d="M8.5 19.5l-5 .5.5-5"/><path d="M13.5 5.5l5 .5-.5-5"/><path d="M17 14l3.5-3.5"/><path d="M11.5 9.5l-3 3"/></svg>
            </div>
            <CardTitle>فك وتركيب الأثاث</CardTitle>
          </div>
          <CardDescription>خدمات احترافية لفك وتركيب جميع أنواع الأثاث</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            يقوم فريقنا المحترف بفك وتركيب جميع أنواع الأثاث بما في ذلك غرف النوم، المطابخ، الديوانيات، غرف المعيشة، المكاتب، وغيرها. نستخدم أدوات خاصة للحفاظ على سلامة جميع القطع أثناء عملية الفك والتركيب بدون خدوش أو أضرار.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>فك وتركيب غرف النوم</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>تركيب المطابخ بدقة عالية</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>فك وتركيب الأجهزة الكهربائية</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>تجميع الأثاث الجديد</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full gap-2">
            <Link href="tel:90905157" aria-label="طلب خدمة فك وتركيب الأثاث" title="طلب خدمة فك وتركيب الأثاث">
              طلب خدمة الفك والتركيب
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* خدمة تغليف الأثاث */}
      <Card className="overflow-hidden transition-all duration-300 border-2 border-primary/20 hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
            </div>
            <CardTitle>تغليف الأثاث</CardTitle>
          </div>
          <CardDescription>تغليف محترف لحماية أثاثك أثناء النقل والتخزين</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            نستخدم أفضل مواد التغليف للحفاظ على أثاثك من الخدوش والكسور أثناء عملية النقل. يشمل ذلك تغليف الأثاث بالبلاستيك، الكرتون، الاسفنج، والفقاعات الهوائية حسب نوع القطعة وحساسيتها.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>تغليف بمواد عالية الجودة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>حماية خاصة للقطع الثمينة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>تغليف الأجهزة الإلكترونية</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>تغليف التحف والمقتنيات الهشة</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full gap-2">
            <Link href="tel:90905157" aria-label="طلب خدمة تغليف الأثاث" title="طلب خدمة تغليف الأثاث">
              طلب خدمة التغليف
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* خدمة نقل الأثاث */}
      <Card className="overflow-hidden transition-all duration-300 border-2 border-primary/20 hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><path d="M3 6h18"/><path d="M6 10h11"/><path d="M6 14h11"/><path d="M3 18h18"/><path d="M20 6v12a2 2 0 0 0 0 4"/><path d="M4 4v14a2 2 0 0 1-2 2"/></svg>
            </div>
            <CardTitle>نقل الأثاث</CardTitle>
          </div>
          <CardDescription>نقل آمن وسريع لجميع أنواع الأثاث في الكويت</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            تمتلك شركتنا أسطولاً من السيارات والشاحنات المجهزة خصيصاً لنقل الأثاث بكل أمان من وإلى جميع مناطق الكويت. يتميز فريقنا بالخبرة في التعامل مع جميع أنواع وأحجام الأثاث مهما كانت.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>سيارات مجهزة لنقل الأثاث</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>فريق متخصص في تحميل وتنزيل الأثاث</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>خدمة نقل المكاتب والشركات</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>نقل الأثاث الضخم والثقيل</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full gap-2"  aria-label="طلب خدمة نقل الأثاث" title="طلب خدمة نقل الأثاث">
            <Link href="tel:90905157" aria-label="طلب خدمة نقل الأثاث" title="طلب خدمة نقل الأثاث">
              طلب خدمة النقل
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {/* خدمة تخزين الأثاث */}
      <Card className="overflow-hidden transition-all duration-300 border-2 border-primary/20 hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><path d="M2 8h20v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8Z"/><path d="M6 2v6"/><path d="M18 2v6"/><path d="M12 10v4"/><path d="M10 12h4"/></svg>
            </div>
            <CardTitle>تخزين الأثاث</CardTitle>
          </div>
          <CardDescription>خدمات تخزين آمنة لأثاثك لفترات قصيرة وطويلة</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            توفر شركة بشائر الخير مخازن آمنة ومكيفة لتخزين الأثاث لفترات متفاوتة بأسعار مناسبة. مخازننا مجهزة بأحدث أنظمة الأمان والحماية من الحرائق والحشرات، مما يضمن سلامة أثاثك طوال فترة التخزين.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>مخازن مؤمنة ومكيفة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>مراقبة على مدار الساعة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>أسعار تنافسية للتخزين طويل الأمد</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>خدمة توصيل من وإلى المخازن</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full gap-2" aria-label="طلب خدمة التخزين" title="طلب خدمة التخزين">
            <Link href="tel:90905157" aria-label="طلب خدمة التخزين" title="طلب خدمة التخزين">
              طلب خدمة التخزين
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* خدمة نقل المكاتب */}
      <Card className="overflow-hidden transition-all duration-300 border-2 border-primary/20 hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </div>
            <CardTitle>نقل المكاتب والشركات</CardTitle>
          </div>
          <CardDescription>نقل متخصص للمكاتب والشركات بدون توقف عملك</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            نوفر خدمة نقل متخصصة للمكاتب والشركات مع التركيز على سرعة النقل وإعادة التشغيل بأقل وقت ممكن. يشمل ذلك تخطيط مسبق للنقل، تنظيم المحتويات، ترقيم الصناديق، وإعادة ترتيب المكتب الجديد بشكل احترافي.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>نقل في عطلات نهاية الأسبوع</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>فك وتركيب أثاث المكاتب</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>تغليف خاص للأجهزة الإلكترونية</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>إعادة ترتيب المكتب الجديد</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full gap-2" aria-label="طلب نقل مكتب" title="طلب نقل مكتب">
            <Link href="tel:90905157" aria-label="طلب نقل مكتب" title="طلب نقل مكتب">
              طلب نقل مكتب
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* خدمة نقل المقتنيات الثمينة */}
      <Card className="overflow-hidden transition-all duration-300 border-2 border-primary/20 hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
            </div>
            <CardTitle>نقل المقتنيات الثمينة</CardTitle>
          </div>
          <CardDescription>عناية خاصة في نقل المقتنيات الثمينة والأعمال الفنية</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            نقدم خدمة متخصصة في نقل المقتنيات الثمينة مثل التحف الفنية، اللوحات، الثريات، الأنتيكات، والقطع النادرة مع ضمان سلامتها. يتم استخدام تقنيات تغليف خاصة ومواد مخصصة لحماية هذه القطع الثمينة أثناء النقل.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>تغليف مخصص للقطع النادرة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>صناديق خشبية للتحف الثمينة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>نقل اللوحات الفنية بعناية</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>تأمين المقتنيات أثناء النقل</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full gap-2" aria-label="طلب نقل المقتنيات الثمينة" title="طلب نقل المقتنيات الثمينة">
            <Link href="tel:90905157" aria-label="طلب نقل المقتنيات الثمينة" title="طلب نقل المقتنيات الثمينة">
              طلب نقل المقتنيات الثمينة
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>
{/* قسم المحتوى الإرشادي */}
<section className="py-16 md:py-24">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
        دليل إرشادي
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">نصائح مهمة لنقل الأثاث في الكويت</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        نقدم لكم أهم النصائح والإرشادات للحصول على تجربة نقل أثاث ناجحة وآمنة في جميع مناطق الكويت
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div className="space-y-6">
        <div className="bg-muted/30 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">1. التخطيط المسبق لعملية النقل</h3>
          <p className="text-muted-foreground mb-4">
            يعد التخطيط المسبق من أهم خطوات نقل الأثاث الناجحة. ننصحك بالبدء في التخطيط قبل موعد النقل بأسبوعين على الأقل، مع تحديد قائمة بالأثاث المراد نقله وتصنيفه حسب الغرف والأولوية.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
              <span>تحديد موعد النقل في أوقات عدم الازدحام</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
              <span>فحص المنزل الجديد والتأكد من جاهزيته</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
              <span>تجهيز خريطة لوضع الأثاث في المنزل الجديد</span>
            </li>
          </ul>
        </div>

        <div className="bg-muted/30 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">2. تنظيم وتصنيف الممتلكات</h3>
          <p className="text-muted-foreground mb-4">
            قبل بدء عملية النقل، يفضل تنظيم وتصنيف الممتلكات حسب الغرف واستبعاد الأغراض غير الضرورية. يمكن التبرع بالأثاث غير المستخدم أو بيعه، مما يقلل من حجم المنقولات وتكلفة النقل.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
              <span>تصنيف الأغراض حسب غرف المنزل الجديد</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
              <span>استبعاد الأثاث غير المستخدم</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
              <span>عمل قائمة جرد لجميع المنقولات</span>
            </li>
          </ul>
        </div>

        <div className="bg-muted/30 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">3. اختيار شركة نقل أثاث موثوقة</h3>
          <p className="text-muted-foreground mb-4">
            من أهم عوامل نجاح عملية نقل الأثاث هو اختيار شركة نقل موثوقة ذات خبرة مثل شركة بشائر الخير. تأكد من سمعة الشركة، خبرتها، توفر التأمين على المنقولات، وجودة معدات النقل والتغليف.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
              <span>اختيار شركة نقل موثوقة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
              <span>تأكيد التأمين على المنقولات</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
              <span>التأكد من توفر معدات النقل والتغليف</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
{/* قسم الاختلافات بين المناطق */}
<section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center space-y-4 text-center mb-12">
      <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
        خصائص المناطق
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">خصائص نقل الأثاث في مناطق الكويت المختلفة</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        تتميز كل منطقة في الكويت بخصائص فريدة تتطلب خبرة خاصة في نقل الأثاث، وشركة بشائر الخير تمتلك الخبرة الكافية في جميع هذه المناطق
      </p>
    </div>

    <div className="space-y-12">
      {/* العاصمة */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-sm" style={{ backgroundColor: `${areas[0].color}20`, color: areas[0].color }}>
            <MapPin className="h-4 w-4" />
            <span>محافظة العاصمة</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">نقل الأثاث في العاصمة - تحديات وحلول</h3>
          <p className="text-muted-foreground mb-4">
            تتميز محافظة العاصمة بالازدحام المروري الشديد والشوارع الضيقة في بعض المناطق، إضافة إلى كثرة الأبراج السكنية والمباني متعددة الطوابق. تتطلب هذه الخصائص خبرة خاصة في نقل الأثاث للتعامل مع المصاعد الضيقة والممرات المحدودة.
          </p>
          <div className="space-y-3 mb-4">
            <h4 className="font-semibold">التحديات الشائعة:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <span>الازدحام المروري وصعوبة الوصول في بعض الأوقات</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <span>المباني العالية والأبراج السكنية ذات المصاعد المحدودة</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <span>الشوارع الضيقة في المناطق القديمة مثل شرق والمرقاب</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">حلول بشائر الخير:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>جدولة النقل في أوقات عدم الازدحام المروري</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>فريق متخصص في التعامل مع الأثاث الكبير في المصاعد الضيقة</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>استخدام رافعات خارجية للأدوار العليا عند الضرورة</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/areas/car4.jpg"
            alt="نقل الأثاث في محافظة العاصمة"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{ backgroundColor: areas[0].color }}
          ></div>
        </div>
      </div>

      {/* حولي */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 relative aspect-video md:aspect-square rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/areas/car2.jpg"
            alt="نقل الأثاث في محافظة حولي"
            fill
            loading="lazy"
            
            className="object-cover"
          />
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{ backgroundColor: areas[1].color }}
          ></div>
        </div>
        <div className="order-1 md:order-2">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-sm" style={{ backgroundColor: `${areas[1].color}20`, color: areas[1].color }}>
            <MapPin className="h-4 w-4" />
            <span>محافظة حولي</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">نقل الأثاث في حولي - خبرة التعامل مع المباني المتنوعة</h3>
          <p className="text-muted-foreground mb-4">
            تعتبر محافظة حولي من أكثر المحافظات تنوعاً في المباني، فهي تضم أبراج سكنية شاهقة في السالمية وعمارات سكنية متوسطة الارتفاع في حولي والجابرية وسلوى. تتطلب هذه التنوعات تقنيات مختلفة في نقل الأثاث وفقاً لطبيعة كل مبنى.
          </p>
          <div className="space-y-3 mb-4">
            <h4 className="font-semibold">التحديات الشائعة:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <span>الأبراج العالية في منطقة السالمية</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <span>الكثافة السكانية العالية وصعوبة إيجاد مواقف للشاحنات</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <span>تنوع تصاميم المباني مما يتطلب خطط نقل مختلفة</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">حلول بشائر الخير:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>شاحنات بأحجام متعددة للتعامل مع الشوارع المختلفة</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>فريق مدرب على نقل الأثاث عبر السلالم الضيقة</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>تنسيق مسبق مع إدارات الأبراج السكنية</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* باقي المحافظات (مختصرة) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* الأحمدي */}
        <div className="bg-muted/20 rounded-xl p-6 hover:shadow-md transition-all">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-sm" style={{ backgroundColor: `${areas[2].color}20`, color: areas[2].color }}>
            <MapPin className="h-4 w-4" />
            <span>محافظة الأحمدي</span>
          </div>
          <h3 className="text-xl font-bold mb-4">المسافات الطويلة والمناطق المفتوحة</h3>
          <p className="text-muted-foreground mb-4">
            تتميز محافظة الأحمدي بالمساحات الواسعة والمسافات الطويلة بين المناطق، خاصة في الوفرة والخيران. نوفر أسطول نقل مجهز للمسافات الطويلة مع فريق متخصص في نقل الأثاث في المناطق المفتوحة مع مراعاة الظروف المناخية.
          </p>
          <Button asChild variant="outline" className="w-full" style={{ borderColor: areas[2].color, color: areas[2].color }}>
            <Link href={`/areas/${areas[2].slug}`}>
              تفاصيل الخدمة في الأحمدي
            </Link>
          </Button>
        </div>

        {/* الفروانية */}
        <div className="bg-muted/20 rounded-xl p-6 hover:shadow-md transition-all">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-sm" style={{ backgroundColor: `${areas[3].color}20`, color: areas[3].color }}>
            <MapPin className="h-4 w-4" />
            <span>محافظة الفروانية</span>
          </div>
          <h3 className="text-xl font-bold mb-4">الكثافة السكانية والازدحام</h3>
          <p className="text-muted-foreground mb-4">
            تتميز محافظة الفروانية بالكثافة السكانية العالية وتنوع المباني بين قديمة وحديثة. يتطلب ذلك خبرة خاصة في التعامل مع الشوارع الضيقة والمزدحمة، ونحن نوفر فريقاً متمرساً في نقل الأثاث في هذه الظروف.
          </p>
          <Button asChild variant="outline" className="w-full" style={{ borderColor: areas[3].color, color: areas[3].color }}>
            <Link href={`/areas/${areas[3].slug}`}>
              تفاصيل الخدمة في الفروانية
            </Link>
          </Button>
        </div>

        {/* باقي المحافظات */}
        <div className="bg-muted/20 rounded-xl p-6 hover:shadow-md transition-all">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-sm" style={{ backgroundColor: `${areas[4].color}20`, color: areas[4].color }}>
            <MapPin className="h-4 w-4" />
            <span>باقي المحافظات</span>
          </div>
          <h3 className="text-xl font-bold mb-4">الجهراء ومبارك الكبير</h3>
          <p className="text-muted-foreground mb-4">
            نوفر خدمات نقل متميزة في محافظتي الجهراء ومبارك الكبير، مع مراعاة طبيعة كل منطقة. في الجهراء نراعي المسافات وطبيعة المنطقة المفتوحة، بينما في مبارك الكبير نهتم بمتطلبات المناطق السكنية الحديثة والفلل الواسعة.
          </p>
          <div className="flex gap-3">
            <Button asChild variant="outline" size="sm" className="flex-1" style={{ borderColor: areas[4].color, color: areas[4].color }}>
              <Link href={`/areas/${areas[4].slug}`}>
                الجهراء
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="flex-1" style={{ borderColor: areas[5].color, color: areas[5].color }}>
              <Link href={`/areas/${areas[5].slug}`}>
                مبارك الكبير
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">مميزات خدماتنا في جميع المناطق</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              نقدم نفس مستوى الجودة والاحترافية في جميع مناطق الكويت
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">سرعة الاستجابة</h3>
              <p className="text-muted-foreground">
                نصل إليك في أي منطقة بالكويت خلال وقت قياسي. خدمة 24 ساعة طوال أيام الأسبوع.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">جودة موحدة</h3>
              <p className="text-muted-foreground">
                نقدم نفس مستوى الجودة والاحترافية في جميع مناطق الكويت دون استثناء.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">تغطية شاملة</h3>
              <p className="text-muted-foreground">
                نغطي جميع مناطق الكويت بدون استثناء، من أقصى الشمال إلى أقصى الجنوب.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* قسم الأسئلة الشائعة */}
<section className="py-16 md:py-20">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center space-y-4 text-center mb-12">
      <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
        الأسئلة الشائعة
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">أسئلة متكررة حول نقل الأثاث في الكويت</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        إجابات على أكثر الأسئلة شيوعاً حول خدمات نقل الأثاث التي تقدمها شركة بشائر الخير في جميع مناطق الكويت
      </p>
    </div>

    <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
      {/* سؤال 1 */}
      <div className="bg-muted/20 rounded-xl p-6 hover:shadow-md transition-all">
        <h3 className="text-xl font-bold mb-3">ما هي أفضل أوقات نقل الأثاث في الكويت؟</h3>
        <p className="text-muted-foreground">
          أفضل أوقات نقل الأثاث في الكويت هي الفترة الصباحية الباكرة (من 7-10 صباحاً) أو المسائية (بعد 4 عصراً) تجنباً للحرارة المرتفعة خاصة في فصل الصيف. كما يفضل تجنب أوقات الازدحام المروري في المناطق المزدحمة مثل العاصمة وحولي. في شركة بشائر الخير نوفر خدمات النقل على مدار 24 ساعة مع إمكانية جدولة النقل في الأوقات المناسبة للعميل.
        </p>
      </div>

      {/* سؤال 2 */}
      <div className="bg-muted/20 rounded-xl p-6 hover:shadow-md transition-all">
        <h3 className="text-xl font-bold mb-3">كم تستغرق عملية نقل أثاث منزل كامل في الكويت؟</h3>
        <p className="text-muted-foreground">
          تختلف المدة حسب حجم المنزل وكمية الأثاث والمسافة بين المنزل القديم والجديد. بشكل عام، يستغرق نقل أثاث شقة بغرفتي نوم حوالي 4-6 ساعات، بينما قد يستغرق نقل فيلا كاملة يوماً كاملاً. في بشائر الخير نقدم تقديراً زمنياً دقيقاً بعد معاينة الأثاث، ونلتزم بالجدول الزمني المتفق عليه مع العميل.
        </p>
      </div>

      {/* سؤال 3 */}
      <div className="bg-muted/20 rounded-xl p-6 hover:shadow-md transition-all">
        <h3 className="text-xl font-bold mb-3">هل توفرون خدمة فك وتركيب وتغليف الأثاث في جميع مناطق الكويت؟</h3>
        <p className="text-muted-foreground">
          نعم، نوفر خدمات متكاملة تشمل فك وتركيب وتغليف الأثاث في جميع محافظات الكويت الست (العاصمة، حولي، الفروانية، الأحمدي، الجهراء، ومبارك الكبير) دون استثناء. يتميز فريق العمل لدينا بالخبرة في التعامل مع جميع أنواع الأثاث والتحديات الخاصة بكل منطقة، سواء كانت أبراج سكنية عالية أو فلل أو مناطق بعيدة.
        </p>
      </div>

      {/* سؤال 4 */}
      <div className="bg-muted/20 rounded-xl p-6 hover:shadow-md transition-all">
        <h3 className="text-xl font-bold mb-3">كيف تحافظون على الأثاث من تقلبات الطقس في الكويت؟</h3>
        <p className="text-muted-foreground">
          نتخذ إجراءات خاصة للتعامل مع الظروف المناخية في الكويت، بما في ذلك استخدام مواد تغليف مقاومة للحرارة والرطوبة، وشاحنات مغلقة ومكيفة للأثاث الحساس. خلال موجات الغبار، نستخدم طبقات إضافية من التغليف، ونحرص على تقليل وقت تعرض الأثاث للعوامل الجوية عند التحميل والتفريغ لضمان سلامته.
        </p>
      </div>

      {/* سؤال 5 */}
      <div className="bg-muted/20 rounded-xl p-6 hover:shadow-md transition-all">
        <h3 className="text-xl font-bold mb-3">هل تقدمون خدمات نقل طارئة وسريعة في الكويت؟</h3>
        <p className="text-muted-foreground">
          نعم، نوفر خدمات النقل الطارئة والسريعة في جميع مناطق الكويت، مع إمكانية الوصول خلال ساعة إلى 3 ساعات حسب الموقع. نمتلك فريقاً جاهزاً على مدار الساعة للتعامل مع حالات النقل الطارئة، سواء كانت لمنازل أو مكاتب أو شركات، مع الحفاظ على نفس مستوى الجودة والاحترافية في الخدمة.
        </p>
      </div>

      {/* سؤال 6 */}
      <div className="bg-muted/20 rounded-xl p-6 hover:shadow-md transition-all">
        <h3 className="text-xl font-bold mb-3">ما هي أسعار نقل الأثاث في مناطق الكويت المختلفة؟</h3>
        <p className="text-muted-foreground">
          تختلف أسعار نقل الأثاث حسب عدة عوامل: حجم المنزل، كمية الأثاث، المسافة بين المنزلين، والخدمات المطلوبة (فك، تركيب، تغليف). تقدم بشائر الخير أسعاراً تنافسية مع ضمان الجودة، وتبدأ الأسعار من 25 ديناراً كويتياً للشقق الصغيرة. نوفر معاينة مجانية وعرض سعر دقيق قبل البدء بالخدمة مع خصومات للمسافات القصيرة ضمن نفس المنطقة.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">احصل على خدماتنا في منطقتك</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              تواصل معنا للحصول على خدمات نقل الأثاث في أي منطقة بالكويت بأعلى مستويات الجودة وبأسعار تنافسية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="gap-2">
                <Link href="tel:90905157">
                  <Phone className="h-5 w-5" />
                  اتصل بنا الآن
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://wa.me/96590905157">
                  تواصل عبر الواتساب
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
