"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Package, Home, ShieldCheck, PenToolIcon as Tool, MapPin, ArrowRight, Star, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Services data with detailed descriptions for SEO
const services = [
  {
    id: "moving",
    icon: Truck,
    title: "نقل الأثاث",
    shortDescription: "نقل الأثاث بأمان تام من وإلى جميع مناطق الكويت",
    longDescription:
      "نوفر خدمة نقل الأثاث المنزلي والمكتبي بأحدث السيارات المجهزة خصيصاً لنقل الأثاث بأمان تام وبدون أي أضرار. فريقنا المدرب يضمن وصول أثاثك بحالة ممتازة إلى وجهتك الجديدة. نمتلك أسطول من السيارات المختلفة الأحجام لتناسب جميع احتياجات النقل، سواء كان منزل صغير أو فيلا كبيرة. نضمن لك خدمة سريعة ودقيقة مع الالتزام بالمواعيد المحددة.",
    image: "/services/moving.png",
    price: "تبدأ من 25 د.ك",
    duration: "2-4 ساعات",
    rating: 5,
    reviewCount: 156,
    features: ["سيارات مجهزة خصيصاً", "فريق محترف", "تأمين ضد الأضرار", "خدمة سريعة"],
    slug: "moving",
  },
  {
    id: "packing",
    icon: Package,
    title: "تغليف الأثاث",
    shortDescription: "تغليف احترافي للأثاث لحمايته من الخدوش والكسر",
    longDescription:
      "نستخدم أفضل مواد التغليف لحماية الأثاث من الخدوش والكسر أثناء عملية النقل، مع اهتمام خاص بالقطع الثمينة والحساسة. نوفر مواد تغليف عالية الجودة تضمن سلامة أثاثك. نقوم بتغليف كل قطعة بشكل منفصل مع مراعاة طبيعتها، سواء كانت زجاجية أو خشبية أو إلكترونية. نستخدم الكرتون المقوى، البلاستيك الفقاعي، الإسفنج، وأغطية خاصة للمفروشات والأجهزة الإلكترونية.",
    image: "/services/packing.png",
    price: "تبدأ من 15 د.ك",
    duration: "1-3 ساعات",
    rating: 4.9,
    reviewCount: 124,
    features: ["مواد تغليف عالية الجودة", "تغليف خاص للقطع الثمينة", "ترقيم القطع", "فك التغليف في الموقع الجديد"],
    slug: "packing",
  },
  {
    id: "assembly",
    icon: Tool,
    title: "فك وتركيب الأثاث",
    shortDescription: "فك وتركيب جميع أنواع الأثاث بأيدي فنيين محترفين",
    longDescription:
      "يقوم فريقنا المتخصص بفك وتركيب جميع أنواع الأثاث المنزلي والمكتبي بمهارة عالية وخبرة كبيرة تضمن سلامة قطع الأثاث. نتعامل مع جميع أنواع الأثاث من مختلف الشركات العالمية. لدينا خبرة في فك وتركيب غرف النوم، المطابخ، خزائن الملابس، الستائر، الثريات، وحدات التلفزيون، وجميع أنواع الأثاث الآخر. نستخدم أدوات حديثة ومتطورة لضمان عدم تلف أي قطعة أثناء عملية الفك والتركيب.",
    image: "/services/assembly.png",
    price: "تبدأ من 20 د.ك",
    duration: "2-5 ساعات",
    rating: 4.8,
    reviewCount: 98,
    features: ["فنيين متخصصين", "أدوات حديثة", "ضمان على التركيب", "خبرة مع جميع أنواع الأثاث"],
    slug: "assembly",
  },
  {
    id: "storage",
    icon: ShieldCheck,
    title: "تخزين الأثاث",
    shortDescription: "تخزين آمن للأثاث في مستودعات مؤمنة ومكيفة",
    longDescription:
      "نوفر خدمة تخزين الأثاث في مستودعات آمنة ومكيفة لحماية الأثاث من العوامل الجوية والرطوبة لفترات قصيرة أو طويلة. مستودعاتنا مجهزة بأنظمة أمان متطورة وأنظمة مكافحة الحرائق. نقوم بتغليف الأثاث بشكل خاص قبل التخزين لحمايته من الغبار والحشرات. كما نوفر خدمة التأمين على الأثاث المخزن ضد السرقة والحرائق. يمكنك الوصول إلى أثاثك المخزن في أي وقت بعد التنسيق المسبق.",
    image: "/services/storage.png",
    price: "تبدأ من 30 د.ك شهرياً",
    duration: "حسب الطلب",
    rating: 4.7,
    reviewCount: 76,
    features: ["مستودعات مكيفة", "أنظمة أمان متطورة", "مكافحة الحشرات", "تأمين ضد الحرائق والسرقة"],
    slug: "storage",
  },
  {
    id: "office",
    icon: Home,
    title: "نقل المكاتب والشركات",
    shortDescription: "خدمات متكاملة لنقل المكاتب والشركات بدون انقطاع للعمل",
    longDescription:
      "نقدم خدمات متخصصة لنقل المكاتب والشركات مع مراعاة خصوصية العمل وضمان عدم انقطاع سير العمل. نقوم بالتخطيط المسبق لعملية النقل لضمان سرعة الإنجاز وتقليل وقت التوقف. نتعامل مع المعدات المكتبية الحساسة مثل أجهزة الكمبيوتر والطابعات والخوادم بعناية فائقة. نقوم بترقيم وتوثيق جميع المحتويات لضمان إعادة ترتيبها بنفس الطريقة في المكان الجديد. يمكننا العمل خارج أوقات الدوام الرسمي لتقليل تأثير النقل على سير العمل.",
    image: "/services/office.png",
    price: "حسب حجم المكتب",
    duration: "1-3 أيام",
    rating: 4.9,
    reviewCount: 64,
    features: ["خطة نقل مدروسة", "العمل خارج أوقات الدوام", "ترقيم وتوثيق المحتويات", "إعادة التركيب بنفس الترتيب"],
    slug: "office-moving",
  },
  {
    id: "international",
    icon: MapPin,
    title: "الشحن الدولي",
    shortDescription: "خدمات شحن الأثاث إلى خارج الكويت",
    longDescription:
      "نوفر خدمات الشحن الدولي للأثاث والمقتنيات الشخصية إلى مختلف دول العالم. نتولى جميع إجراءات التغليف والتخليص الجمركي لضمان وصول شحنتك بأمان. نقدم خدمات الشحن البحري والجوي حسب احتياجاتك وميزانيتك. نساعدك في اختيار الطريقة الأنسب للشحن مع توفير جميع المستندات اللازمة. نقوم بتتبع الشحنة من لحظة مغادرتها الكويت وحتى وصولها إلى وجهتها النهائية.",
    image: "/services/international.jpg",
    price: "حسب الوجهة والحجم",
    duration: "7-30 يوم",
    rating: 4.6,
    reviewCount: 43,
    features: ["تغليف خاص للشحن الدولي", "متابعة الشحنة", "التخليص الجمركي", "التأمين على الشحنة"],
    slug: "international-shipping",
  },
]

export default function ServicesPage() {
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
              خدماتنا المتكاملة
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              خدمات نقل الأثاث في الكويت
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              نقدم مجموعة متكاملة من خدمات نقل وفك وتركيب وتغليف وتخزين الأثاث في جميع مناطق الكويت بأعلى مستويات الجودة والاحترافية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="gap-2">
                <Link href="tel:90905157" aria-label="رقم الهاتف" aria-labelledby="phone-number" title="رقم الهاتف" >
                  <Phone className="h-5 w-5" />
                  اتصل بنا الآن
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#all-services" aria-label="عرض جميع الخدمات" aria-labelledby="all-services" title="عرض جميع الخدمات" >
                  عرض جميع الخدمات
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section id="all-services" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">خدماتنا المتكاملة لنقل الأثاث</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              نقدم مجموعة متكاملة من الخدمات لتلبية جميع احتياجاتك في نقل وفك وتركيب وتغليف وتخزين الأثاث
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    title="صورة للخدمة"
                    loading="lazy"
                  />
                 
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      {React.createElement(service.icon, { className: "h-5 w-5 text-primary" })}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(service.rating) ? "text-secondary fill-secondary" : "text-muted"}`}
                      />
                    ))}
                    <span className="text-sm ml-2">{service.rating}</span>
                    <span className="text-sm text-muted-foreground mr-1">({service.reviewCount} تقييم)</span>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{service.longDescription}</p>
        
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full gap-2">
                    <Link href={`/services/${service.slug}`} aria-label={`تفاصيل الخدمة ${service.title}`} title={`تفاصيل الخدمة ${service.title}`}>
                      تفاصيل الخدمة
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">مناطق تقديم الخدمة</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              نقدم خدماتنا في جميع مناطق الكويت بنفس مستوى الجودة والاحترافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/areas/capital" className="group" aria-label="محافظة العاصمة" title="محافظة العاصمة" >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-primary transition-colors">محافظة العاصمة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">العديلية، الشامية، الروضة، النزهة، الفيحاء، كيفان، الخالدية، الدسمة، المنصورية، الدعية، القادسية، قرطبة، السرة، اليرموك، الشويخ</p>
                  <p className="text-sm text-primary">عرض التفاصيل <ArrowRight className="inline h-4 w-4" /></p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/areas/hawalli" className="group" aria-label="محافظة حولي" title="محافظة حولي" >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-primary transition-colors">محافظة حولي</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">حولي، السالمية، الرميثية، الجابرية، مشرف، بيان، سلوى، الشعب، البدع، الزهراء، الصديق، حطين، الشهداء</p>
                  <p className="text-sm text-primary">عرض التفاصيل <ArrowRight className="inline h-4 w-4" /></p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/areas/ahmadi" className="group" aria-label="محافظة الأحمدي" title="محافظة الأحمدي" >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-primary transition-colors">محافظة الأحمدي</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">الأحمدي، الفحيحيل، المنقف، أبو حليفة، الصباحية، الرقة، هدية، الظهر، الوفرة، الزور، الخيران، المهبولة، الفنطاس، العقيلة</p>
                  <p className="text-sm text-primary">عرض التفاصيل <ArrowRight className="inline h-4 w-4" /></p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/areas/farwaniya" className="group" aria-label="محافظة الفروانية" aria-labelledby="farwaniya-area" title="محافظة الفروانية" >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-primary transition-colors">محافظة الفروانية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">الفروانية، خيطان، العارضية، العمرية، الرابية، الرحاب، الأندلس، جليب الشيوخ، الضجيج، الرقعي، الفردوس، العباسية</p>
                  <p className="text-sm text-primary">عرض التفاصيل <ArrowRight className="inline h-4 w-4" /></p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/areas/jahra" className="group" aria-label="محافظة الجهراء" aria-describedby="نقل عفش و أثاث محافظة الجهراء" aria-labelledby="نقل عفش و أثاث محافظة الجهراء" aria-details="نقل عفش و أثاث محافظة الجهراء" title="محافظة الجهراء">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-primary transition-colors">محافظة الجهراء</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">الجهراء، القصر، النعيم، النسيم، تيماء، الواحة، العيون، القيروان، الصليبية، كبد، العبدلي</p>
                  <p className="text-sm text-primary">عرض التفاصيل <ArrowRight className="inline h-4 w-4" /></p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/areas/mubarak" className="group" aria-label="Mubarak Al-Kabeer" aria-describedby="Mubarak Al-Kabeer" aria-labelledby="Mubarak Al-Kabeer" aria-details="محافظة مبارك الكبير" title="محافظة مبارك الكبير">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-primary transition-colors">محافظة مبارك الكبير</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">مبارك الكبير، القرين، العدان، القصور، صباح السالم، المسيلة، أبو فطيرة، الفنيطيس، المسايل</p>
                  <p className="text-sm text-primary">عرض التفاصيل <ArrowRight className="inline h-4 w-4" /></p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/areas" aria-label="عرض جميع المناطق" aria-labelledby="عرض جميع المناطق" title="عرض جميع المناطق">
                عرض جميع المناطق
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">احصل على خدماتنا الآن</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              تواصل معنا للحصول على خدمات نقل الأثاث بأعلى مستويات الجودة وبأسعار تنافسية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8" aria-label="اتصل بنا الآن" aria-labelledby="اتصل بنا الآن" title="اتصل بنا الآن">
              <Button asChild size="lg" className="gap-2">
                <Link href="tel:90905157" aria-label="اتصل بنا الآن" aria-labelledby="اتصل بنا الآن" title="اتصل بنا الآن">
                  <Phone className="h-5 w-5" />
                  اتصل بنا الآن
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2" aria-label="تواصل عبر الواتساب" aria-labelledby="تواصل عبر الواتساب" title="تواصل عبر الواتساب">
                <Link href="https://wa.me/96590905157" aria-label="تواصل عبر الواتساب" aria-labelledby="تواصل عبر الواتساب" title="تواصل عبر الواتساب">
                  تواصل عبر الواتساب
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
<section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm">
        بشاير الخير لنقل الأثاث
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">لماذا تختار بشاير الخير لنقل الأثاث؟</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        نحن نتميز بخدمة عملاء استثنائية وفريق محترف من الفنيين ذوي الخبرة في مجال نقل الأثاث بالكويت
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="transition-all duration-300 hover:shadow-lg border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>ضمان سلامة الأثاث</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            نقدم ضماناً شاملاً على سلامة الأثاث أثناء عملية النقل، مع تأمين ضد الأضرار العرضية. نستخدم أحدث تقنيات التغليف والنقل لحماية ممتلكاتك الثمينة من أي خدوش أو كسور.
          </p>
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:shadow-lg border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>أسطول سيارات حديث</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            نمتلك أسطولاً من السيارات الحديثة المجهزة خصيصاً لنقل الأثاث بمختلف أحجامه. سياراتنا مبطنة من الداخل ومزودة بأنظمة تثبيت متطورة تضمن عدم تحرك الأثاث أثناء النقل.
          </p>
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:shadow-lg border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <Tool className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>فريق فني محترف</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            يضم فريقنا نخبة من الفنيين المدربين على أحدث أساليب فك وتركيب وتغليف ونقل الأثاث. يتمتع فنيونا بخبرة عملية تتجاوز 10 سنوات في التعامل مع جميع أنواع الأثاث المنزلي والمكتبي.
          </p>
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:shadow-lg border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>مواد تغليف عالية الجودة</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            نستخدم مواد تغليف متطورة وعالية الجودة تشمل البلاستيك الفقاعي، الكرتون المقوى، أغطية قماشية خاصة، وإسفنج حماية للزوايا. نختار مواد التغليف المناسبة لكل نوع من أنواع الأثاث لضمان حمايته.
          </p>
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:shadow-lg border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>خدمة عملاء متميزة</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            فريق خدمة العملاء لدينا متاح على مدار الساعة للرد على استفساراتكم وتنسيق مواعيد النقل بما يناسبكم. نقدم استشارات مجانية قبل عملية النقل لتحديد احتياجاتكم بدقة وتوفير أفضل الحلول.
          </p>
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:shadow-lg border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>تغطية شاملة للكويت</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            نقدم خدماتنا في جميع محافظات الكويت الست بنفس مستوى الجودة والكفاءة. مهما كان موقع منزلك أو مكتبك، نصل إليك في الوقت المحدد ونضمن لك خدمة متميزة دون أي تأخير.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

{/* Comprehensive Services Details Section */}
<section className="py-16 md:py-24 bg-muted/20">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">خدمات شاملة لنقل الأثاث في الكويت</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        تعرف على تفاصيل خدماتنا المتكاملة التي تغطي كافة احتياجات نقل وفك وتركيب وتغليف وتخزين الأثاث
      </p>
    </div>

    <div className="space-y-20">
      {/* Moving Service Details */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            خدمة نقل الأثاث
          </div>
          <h3 className="text-2xl font-bold">نقل الأثاث بأمان تام من وإلى جميع مناطق الكويت</h3>
          <div className="space-y-4">
            <p>
              تُعد عملية نقل الأثاث من أكثر المهام إرهاقاً وتعقيداً التي يمكن أن تواجه أي شخص. في بشاير الخير، نتولى عنك كافة مراحل النقل بدءاً من تقييم الأثاث وحتى ترتيبه في المنزل الجديد. نمتلك فريقاً متكاملاً يضم خبراء في فك وتركيب الأثاث، متخصصين في التغليف الاحترافي، وكوادر مدربة على حمل ونقل القطع الثقيلة بأمان تام.
            </p>
            <p>
              نتميز باستخدام سيارات مخصصة لنقل الأثاث، مُجهزة بأنظمة تثبيت وتأمين متطورة تمنع تحرك الأثاث أثناء النقل. سياراتنا متوفرة بمختلف الأحجام بدءاً من سيارات صغيرة للمنازل الصغيرة والشقق، وحتى الشاحنات الكبيرة المناسبة للفلل والقصور والشركات الكبيرة.
            </p>
            <p>
              يبدأ فريقنا بزيارة استشارية مجانية لتقييم حجم الأثاث وتحديد المتطلبات الخاصة بعملية النقل. نقوم بوضع خطة نقل متكاملة مع جدول زمني دقيق لضمان إتمام العملية بسلاسة وفي الوقت المحدد. كما نقدم خدمة التنظيف الأساسي للأثاث قبل تركيبه في المنزل الجديد.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h4 className="font-bold mb-2">مميزات خدمة النقل</h4>
                <ul className="space-y-2 text-right">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>فريق متكامل من الفنيين والعمال</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>سيارات مخصصة بمختلف الأحجام</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>خطة نقل مدروسة وجدول زمني دقيق</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>تأمين شامل ضد الأضرار</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>خدمة على مدار 24 ساعة طوال أيام الأسبوع</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h4 className="font-bold mb-2">أنواع الأثاث التي ننقلها</h4>
                <ul className="space-y-2 text-right">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>الأثاث المنزلي بجميع أنواعه</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>الأثاث المكتبي والتجاري</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>الأجهزة الإلكترونية والكهربائية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>التحف والمقتنيات الثمينة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>الأنتيكات والقطع النادرة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-muted">
          <Image
            src="/services/moving-details.png"
            alt="خدمة نقل الأثاث في بشاير الخير"
            fill
            className="object-cover"
            title="خدمة نقل الأثاث في بشاير الخير"
            loading="lazy"
          />
        </div>
      </div>

      {/* Packing Service Details */}
      <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
        <div className="space-y-6 order-2 md:order-1">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-muted">
            <Image
              src="/services/packing-details.png"
              alt="خدمة تغليف الأثاث في بشاير الخير"
              fill
              className="object-cover"
              title="خدمة تغليف الأثاث في بشاير الخير"
              loading="lazy"
            />
          </div>
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            خدمة تغليف الأثاث
          </div>
          <h3 className="text-2xl font-bold">تغليف احترافي للأثاث يضمن حمايته من الخدوش والكسر</h3>
          <div className="space-y-4">
            <p>
              يعتبر تغليف الأثاث من أهم مراحل عملية النقل، إذ يضمن وصول قطع الأثاث إلى وجهتها الجديدة بحالة ممتازة دون خدوش أو كسور. في بشاير الخير، نستخدم مواد تغليف عالية الجودة ونتبع أحدث الأساليب العالمية في تغليف الأثاث بطرق احترافية تضمن حمايته أثناء النقل.
            </p>
            <p>
              يبدأ فريق التغليف المتخصص بتقييم كل قطعة أثاث على حدة لتحديد طريقة التغليف المثالية لها. نراعي في عملية التغليف طبيعة كل قطعة، سواء كانت زجاجية، خشبية، جلدية، أو إلكترونية، ونستخدم المواد المناسبة لكل نوع.
            </p>
            <p>
              تشمل خدمة التغليف لدينا استخدام البلاستيك الفقاعي، الكرتون المقوى، أغطية قماشية خاصة بالمفروشات، أكياس بلاستيكية محكمة الإغلاق للأجزاء الصغيرة، وإسفنج حماية للزوايا والأطراف. كما نقوم بترقيم جميع القطع وتوثيقها لضمان سهولة فك التغليف وإعادة تركيب الأثاث في المكان الجديد.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h4 className="font-bold mb-2">أنواع مواد التغليف</h4>
                <ul className="space-y-2 text-right">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>البلاستيك الفقاعي متعدد الطبقات</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>الكرتون المقوى المقاوم للصدمات</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>أغطية قماشية للمفروشات</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>إسفنج حماية للزوايا</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>صناديق خشبية للتحف والأنتيكات</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h4 className="font-bold mb-2">طرق تغليف خاصة</h4>
                <ul className="space-y-2 text-right">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>تغليف الأجهزة الإلكترونية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>تغليف القطع الزجاجية والكريستال</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>تغليف الأثاث الخشبي الثمين</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>تغليف المفروشات واستخدام معطرات خاصة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>تغليف التحف والمقتنيات الثمينة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assembly Service Details */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            خدمة فك وتركيب الأثاث
          </div>
          <h3 className="text-2xl font-bold">فك وتركيب جميع أنواع الأثاث بأيدي فنيين محترفين</h3>
          <div className="space-y-4">
            <p>
              تتطلب عملية فك وتركيب الأثاث خبرة فنية متخصصة للحفاظ على سلامة القطع وضمان إعادة تركيبها بشكل صحيح. في بشاير الخير، يضم فريقنا نخبة من الفنيين المتخصصين في فك وتركيب جميع أنواع الأثاث المنزلي والمكتبي من مختلف الماركات العالمية والمحلية.
            </p>
            <p>
              يستخدم فنيونا أدوات متطورة ومتخصصة لفك الأثاث بطريقة احترافية تضمن عدم تلف أي جزء. نقوم بتصنيف القطع وترقيمها بدقة أثناء عملية الفك لضمان سهولة إعادة التركيب. كما نحرص على الاحتفاظ بالمسامير والقطع الصغيرة في أكياس مرقمة لتجنب ضياع أي جزء.
            </p>
            <p>
              تشمل خدماتنا فك وتركيب غرف النوم بجميع أنواعها، المطابخ، الستائر، الثريات، وحدات التكييف، الأجهزة الإلكترونية والكهربائية، وجميع أنواع الأثاث الآخر. نقدم ضماناً على خدمات التركيب لمدة تصل إلى 3 أشهر، مع خدمة صيانة مجانية في حال ظهور أي مشكلة بعد التركيب.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h4 className="font-bold mb-2">أنواع الأثاث الذي نتعامل معه</h4>
                <ul className="space-y-2 text-right">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>غرف النوم والصالونات</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>المطابخ بجميع أنواعها</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>خزائن الملابس وخزائن الحائط</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>المكاتب والطاولات وأثاث المكاتب</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>الستائر والثريات وأثاث الديكور</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h4 className="font-bold mb-2">مميزات الفك والتركيب</h4>
                <ul className="space-y-2 text-right">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>فنيين متخصصين لكل نوع أثاث</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>أدوات ومعدات حديثة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>ضمان لمدة 3 أشهر على التركيب</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>صيانة مجانية بعد التركيب</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>فك وتركيب مخفض السعر مع خدمة النقل</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-muted">
          <Image
            src="/services/assembly-details.png"
            alt="خدمة فك وتركيب الأثاث في بشاير الخير"
            fill
            className="object-cover"
            loading="lazy"
            title="خدمة فك وتركيب الأثاث في بشاير الخير"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Guide Section */}
<section className="py-16 md:py-24 bg-gradient-to-t from-primary/5 to-background">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
        دليل إرشادي
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">دليل شامل لنقل الأثاث في الكويت</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        نصائح وإرشادات مهمة لضمان عملية نقل ناجحة وآمنة لأثاث منزلك
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">قبل نقل الأثاث: خطوات التحضير المهمة</h3>
          <ul className="space-y-4">
            <li className="space-y-1">
              <p className="font-medium">1. جرد قطع الأثاث والمقتنيات</p>
              <p className="text-muted-foreground">قم بإعداد قائمة بجميع قطع الأثاث والمقتنيات الثمينة التي سيتم نقلها، مع تحديد حالتها قبل النقل وتصويرها إن أمكن. هذه الخطوة مهمة للتأكد من وصول جميع قطع الأثاث إلى الوجهة الجديدة بنفس الحالة.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">2. تحديد المساحات والقياسات</p>
              <p className="text-muted-foreground">قم بقياس الأبواب والممرات في المنزل الجديد للتأكد من إمكانية دخول قطع الأثاث الكبيرة، وحدد مسبقاً موقع كل قطعة في المنزل الجديد لتسهيل عملية النقل والترتيب.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">3. تفريغ خزائن الملابس والأدراج</p>
              <p className="text-muted-foreground">احرص على تفريغ جميع الخزائن والأدراج من المحتويات قبل النقل، وقم بتغليف المقتنيات الشخصية ووضعها في صناديق مرقمة ومُصنفة حسب نوع المحتويات والغرفة التي تنتمي إليها.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">4. فصل الأجهزة الإلكترونية والكهربائية</p>
              <p className="text-muted-foreground">قم بفصل جميع الأجهزة الإلكترونية والكهربائية قبل النقل بوقت كافٍ، واحتفظ بالكابلات والتوصيلات الخاصة بكل جهاز في أكياس منفصلة ومرقمة لسهولة إعادة تركيبها لاحقاً.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">5. الاحتفاظ بالمقتنيات الثمينة والمستندات المهمة</p>
              <p className="text-muted-foreground">احرص على نقل المقتنيات الثمينة والمستندات المهمة والمجوهرات بنفسك وعدم وضعها مع الأثاث المُراد نقله، لضمان سلامتها وتجنب فقدانها أثناء عملية النقل.</p>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">أثناء نقل الأثاث: نصائح للتعامل مع الشركة</h3>
          <ul className="space-y-4">
            <li className="space-y-1">
              <p className="font-medium">1. التواجد أثناء عملية الفك والتغليف</p>
              <p className="text-muted-foreground">من المهم أن تكون متواجداً خلال عملية فك وتغليف الأثاث للإشراف على العملية والتأكد من تغليف القطع الثمينة بشكل مناسب، وللإجابة عن أي استفسارات قد تكون لدى فريق النقل.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">2. مراقبة عملية التحميل والتفريغ</p>
              <p className="text-muted-foreground">احرص على مراقبة عملية تحميل الأثاث في السيارة وتفريغه في المنزل الجديد، للتأكد من التعامل مع قطع الأثاث بحرص وعدم تعرضها للخدش أو الكسر أثناء النقل.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">3. التأكد من قائمة الجرد أثناء التفريغ</p>
              <p className="text-muted-foreground">استخدم قائمة الجرد التي أعددتها مسبقاً للتأكد من وصول جميع قطع الأثاث إلى المنزل الجديد، وتفقد حالة كل قطعة للتأكد من عدم تعرضها للضرر أثناء النقل.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">4. توجيه فريق النقل لوضع الأثاث</p>
              <p className="text-muted-foreground">وجه فريق النقل لوضع قطع الأثاث في الأماكن المخصصة لها حسب الخطة التي وضعتها مسبقاً، وتجنب تغيير أماكن الأثاث بعد التركيب لتوفير الوقت والجهد.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">بعد نقل الأثاث: خطوات ما بعد النقل</h3>
          <ul className="space-y-4">
            <li className="space-y-1">
              <p className="font-medium">1. فحص الأثاث بعد التركيب</p>
              <p className="text-muted-foreground">قم بفحص جميع قطع الأثاث بعد تركيبها للتأكد من سلامتها ومن عدم وجود أي خدوش أو كسور، وتأكد من استقرار الأثاث وثباته، خاصة القطع المعلقة على الحائط.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">2. إعادة توصيل الأجهزة الإلكترونية</p>
              <p className="text-muted-foreground">بعد الانتهاء من ترتيب الأثاث، قم بإعادة توصيل الأجهزة الإلكترونية والكهربائية باستخدام الأكياس المرقمة التي تحتوي على الكابلات والتوصيلات الخاصة بكل جهاز.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">3. تنظيف الأثاث وترتيب المقتنيات</p>
              <p className="text-muted-foreground">قم بتنظيف قطع الأثاث من الغبار الذي قد يكون علق بها أثناء عملية النقل، وابدأ بترتيب المقتنيات الشخصية في الخزائن والأدراج حسب التصنيف الذي قمت به مسبقاً.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">4. الاحتفاظ بفاتورة النقل وضمان الخدمة</p>
              <p className="text-muted-foreground">احتفظ بفاتورة النقل وشهادة الضمان التي تقدمها شركة النقل، واحتفظ بتفاصيل الاتصال بالشركة للتواصل معها في حال ظهور أي مشكلة في الأثاث بعد النقل.</p>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">اختيار الشركة المناسبة لنقل الأثاث في الكويت</h3>
          <ul className="space-y-4">
            <li className="space-y-1">
              <p className="font-medium">1. البحث عن الشركات ذات السمعة الطيبة</p>
              <p className="text-muted-foreground">ابحث عن شركات نقل الأثاث ذات السمعة الطيبة في الكويت مثل بشاير الخير، واطلع على تقييمات العملاء السابقين وآرائهم حول جودة الخدمة المقدمة وإتمام العمل في الوقت المحدد.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">2. التأكد من تقديم خدمات متكاملة</p>
              <p className="text-muted-foreground">اختر شركة تقدم خدمات متكاملة تشمل الفك والتغليف والنقل وإعادة التركيب، بدلاً من الاعتماد على عدة شركات لإنجاز هذه المهام، مما يوفر الوقت والجهد ويضمن تناسق العمل.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">3. الحصول على عروض أسعار واضحة</p>
              <p className="text-muted-foreground">احصل على عروض أسعار واضحة ومفصلة من الشركة، تتضمن جميع الخدمات التي ستقدمها وتكلفة كل منها، وتأكد من عدم وجود تكاليف إضافية غير مذكورة في العرض.</p>
            </li>
            <li className="space-y-1">
              <p className="font-medium">4. التأكد من وجود ضمان وتأمين</p>
              <p className="text-muted-foreground">تأكد من أن الشركة تقدم ضماناً على خدماتها وتأميناً ضد الأضرار التي قد تلحق بالأثاث أثناء النقل، واطلع على شروط الضمان والتأمين وما تغطيه بالتفصيل.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 p-6 bg-primary/10 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-center">لماذا بشاير الخير هي الاختيار الأفضل لنقل الأثاث في الكويت؟</h3>
      <p className="text-center text-muted-foreground mb-6">
        لأكثر من 15 عاماً، قدمت بشاير الخير خدمات نقل أثاث متميزة في جميع مناطق الكويت، مع سجل حافل من رضا العملاء والخدمة المتميزة
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-background rounded-lg p-4 shadow-sm text-center">
          <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-bold mb-2">الموثوقية والأمان</h4>
          <p className="text-sm text-muted-foreground">ضمان وصول أثاثك بحالة ممتازة مع تأمين شامل ضد الأضرار</p>
        </div>
        <div className="bg-background rounded-lg p-4 shadow-sm text-center">
          <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
            <Tool className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-bold mb-2">فريق محترف</h4>
          <p className="text-sm text-muted-foreground">فنيون مدربون على أعلى مستوى مع خبرة تتجاوز 10 سنوات في المجال</p>
        </div>
        <div className="bg-background rounded-lg p-4 shadow-sm text-center">
          <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
            <Package className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-bold mb-2">خدمات متكاملة</h4>
          <p className="text-sm text-muted-foreground">حلول متكاملة من الفك والتغليف إلى النقل وإعادة التركيب تحت سقف واحد</p>
        </div>
        <div className="bg-background rounded-lg p-4 shadow-sm text-center">
          <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-bold mb-2">خدمة 24/7</h4>
          <p className="text-sm text-muted-foreground">فريق خدمة عملاء متاح على مدار الساعة للرد على استفساراتكم وتلبية طلباتكم</p>
        </div>
        <div className="bg-background rounded-lg p-4 shadow-sm text-center">
          <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-bold mb-2">تغطية شاملة</h4>
          <p className="text-sm text-muted-foreground">خدماتنا متوفرة في جميع مناطق الكويت بنفس المستوى من الجودة والاحترافية</p>
        </div>
        <div className="bg-background rounded-lg p-4 shadow-sm text-center">
          <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
            <Star className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-bold mb-2">أسعار تنافسية</h4>
          <p className="text-sm text-muted-foreground">أسعار مناسبة لجميع الفئات مع عروض وخصومات دورية على مختلف الخدمات</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="py-16 md:py-24 bg-muted/20">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
        الأسئلة الشائعة
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">إجابات على الأسئلة المتكررة حول نقل الأثاث</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        نجيب على استفساراتكم الشائعة حول خدمات نقل وتغليف وتخزين الأثاث في الكويت
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-background rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-3">ما هي تكلفة نقل أثاث شقة متوسطة الحجم؟</h3>
        <p className="text-muted-foreground">
          تعتمد تكلفة نقل أثاث شقة متوسطة الحجم (شقة بغرفتي نوم) في الكويت على عدة عوامل، منها المسافة بين الموقعين، كمية الأثاث، وما إذا كنت بحاجة إلى خدمات إضافية مثل الفك والتركيب والتغليف. بشكل عام، تبدأ الأسعار من 80 دينار كويتي شاملة الفك والتركيب البسيط. لمعرفة السعر الدقيق، يُفضل طلب معاينة مجانية من فريقنا.
        </p>
      </div>

      <div className="bg-background rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-3">كم من الوقت تستغرق عملية نقل أثاث منزل كامل؟</h3>
        <p className="text-muted-foreground">
          تستغرق عملية نقل أثاث منزل كامل عادةً من 4 إلى 8 ساعات، اعتماداً على حجم المنزل وكمية الأثاث والمسافة بين الموقعين. يشمل ذلك عملية الفك والتغليف والتحميل والنقل والتفريغ وإعادة التركيب. في بشاير الخير، نقوم بتنظيم العملية بدقة لضمان إتمامها في أقصر وقت ممكن مع الحفاظ على جودة الخدمة.
        </p>
      </div>

      <div className="bg-background rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-3">هل تقدمون خدمات النقل خارج الكويت؟</h3>
        <p className="text-muted-foreground">
          نعم، نقدم خدمات الشحن الدولي للأثاث من الكويت إلى مختلف دول العالم. نتولى جميع إجراءات التغليف الخاص بالشحن الدولي والتخليص الجمركي. نوفر خيارات الشحن البحري والجوي حسب ميزانيتك واحتياجاتك. لمزيد من المعلومات حول الأسعار والمدة الزمنية، يرجى التواصل مع فريق خدمة العملاء.
        </p>
      </div>

      <div className="bg-background rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-3">هل تقدمون خدمة تخزين الأثاث؟ وما هي شروطها؟</h3>
        <p className="text-muted-foreground">
          نعم، نقدم خدمة تخزين الأثاث في مستودعات آمنة ومكيفة لحماية الأثاث من العوامل الجوية والرطوبة. تبدأ أسعار التخزين من 30 دينار كويتي شهرياً، اعتماداً على حجم الأثاث المراد تخزينه. تشمل الخدمة تغليفاً خاصاً للأثاث قبل التخزين، وتأميناً ضد الحرائق والسرقة، مع إمكانية الوصول إلى الأثاث المخزن في أي وقت بعد التنسيق المسبق.
        </p>
      </div>

      <div className="bg-background rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-3">كيف يتم تغليف الأجهزة الإلكترونية والقطع الثمينة؟</h3>
        <p className="text-muted-foreground">
          نستخدم طرقاً خاصة لتغليف الأجهزة الإلكترونية والقطع الثمينة، تبدأ بفصل جميع الكابلات والملحقات ووضعها في أكياس خاصة مرقمة. ثم نقوم بتغليف الجهاز بطبقة من الإسفنج الناعم، يليها طبقة من البلاستيك الفقاعي، ثم طبقة من الكرتون المقوى. أما القطع الثمينة مثل التحف والأنتيكات، فيتم تغليفها بطبقات متعددة من المواد الواقية ووضعها في صناديق خشبية مبطنة لضمان سلامتها.
        </p>
      </div>

      <div className="bg-background rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-3">هل تقدمون ضماناً على خدماتكم؟</h3>
        <p className="text-muted-foreground">
          نعم، نقدم ضماناً شاملاً على جميع خدماتنا. ضمان ضد الكسر والفقدان أثناء النقل، وضمان لمدة 3 أشهر على خدمات التركيب. في حالة حدوث أي ضرر أثناء عملية النقل، نتحمل المسؤولية الكاملة عن إصلاحه أو تعويضه. كما نقدم خدمة صيانة مجانية بعد التركيب في حال ظهور أي مشكلة ناتجة عن عملية التركيب.
        </p>
      </div>

      <div className="bg-background rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-3">هل يمكنكم نقل الأثاث في عطلة نهاية الأسبوع؟</h3>
        <p className="text-muted-foreground">
          نعم، خدماتنا متوفرة على مدار الأسبوع بما في ذلك العطلات وعطل نهاية الأسبوع. نعمل على مدار الساعة لتلبية احتياجاتكم في الوقت الذي يناسبكم. يمكنكم حجز موعد للنقل في أي يوم من أيام الأسبوع بما في ذلك الجمعة والسبت، مع إمكانية تحديد الوقت المناسب لكم صباحاً أو مساءً.
        </p>
      </div>

      <div className="bg-background rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-3">هل تقومون بفك وتركيب المكيفات والأجهزة الكهربائية؟</h3>
        <p className="text-muted-foreground">
          نعم، يضم فريقنا فنيين متخصصين في فك وتركيب المكيفات والأجهزة الكهربائية. نقوم بفك وتركيب مكيفات الشباك والسبليت والمركزية، مع إعادة شحن الغاز إذا لزم الأمر. كما نقوم بفك وتركيب الأجهزة الكهربائية الكبيرة مثل الثلاجات والغسالات والأفران وغيرها، مع ضمان تشغيلها بكفاءة بعد التركيب.
        </p>
      </div>
    </div>
  </div>
  
</section>
{/* Testimonials Section */}
<section className="py-16 md:py-24 bg-primary/5">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
        آراء عملائنا
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">ماذا يقول عملاؤنا عنا</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
        نفخر بثقة عملائنا وآرائهم الإيجابية عن خدماتنا في نقل وتغليف وتخزين الأثاث
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="bg-background rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 text-secondary fill-secondary"
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-4">
          "تعاملت مع بشاير الخير لنقل أثاث فيلتي الجديدة وكانت التجربة ممتازة من جميع النواحي. الفريق محترف جداً في التعامل مع الأثاث وخاصة القطع الثمينة. إتقان العمل والدقة في المواعيد كانت محل تقدير. أنصح الجميع بالتعامل معهم."
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-bold text-primary">أ</span>
          </div>
          <div>
            <p className="font-bold">أحمد العلي</p>
            <p className="text-sm text-muted-foreground">الفروانية</p>
          </div>
        </div>
      </div>

      <div className="bg-background rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 text-secondary fill-secondary"
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-4">
          "الفريق متعاون جداً وخدمة العملاء ممتازة. قاموا بنقل أثاث شقتي القديمة إلى الشقة الجديدة بدون أي مشاكل. التغليف كان احترافي جداً وحماية الأثاث كانت ممتازة. الأسعار معقولة جداً مقارنة بالخدمة المقدمة. سأتعامل معهم في المستقبل بكل تأكيد."
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-bold text-primary">م</span>
          </div>
          <div>
            <p className="font-bold">مريم الفهد</p>
            <p className="text-sm text-muted-foreground">السالمية</p>
          </div>
        </div>
      </div>

      <div className="bg-background rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 text-secondary fill-secondary"
            />
          ))}
          {[...Array(1)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 text-muted"
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-4">
          "استعنت بشركة بشاير الخير لنقل مكتبي إلى موقع جديد. كانت تجربة إيجابية بشكل عام. الفريق احترافي وملتزم بالمواعيد، لكن كان هناك بعض التأخير في إعادة تركيب بعض قطع الأثاث. تم حل المشكلة بشكل سريع بعد التواصل مع خدمة العملاء. أشكرهم على تفهمهم وسرعة حل المشكلة."
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-bold text-primary">م</span>
          </div>
          <div>
            <p className="font-bold">مريم الفهد</p>
            <p className="text-sm text-muted-foreground">السالمية</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
</div>
  )
}
