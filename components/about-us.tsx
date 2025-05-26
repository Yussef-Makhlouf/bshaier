"use client"

import Image from "next/image"
import { CheckCircle, Award, Users, Calendar, Trophy, Target, Heart, Package, Wrench, Clock, Truck, Star, Shield, MapPin, Phone, Zap, Briefcase, ThumbsUp, CheckCheck, Building, HomeIcon, Settings, Hammer, ChevronLeft, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("about")
  const sectionRef = useRef<HTMLDivElement>(null)

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
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 bg-gradient-to-b from-white to-gray-50/50 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container px-4 mx-auto">
        {/* Encabezado con animación */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Trophy className="h-4 w-4 mr-2" /> افضل شركة نقل عفش الكويت
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            بشاير الخير <span className="text-primary">لنقل الأثاث والعفش</span> في الكويت
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            شركة رائدة في مجال نقل العفش وفك وتركيب وتغليف الأثاث المنزلي والمكتبي في جميع محافظات الكويت منذ أكثر من 10 سنوات
          </p>
        </div>

        {/* Pestañas de navegación */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === "about" ? "bg-primary text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              <Building className="h-5 w-5 inline-block ml-2" />
              من نحن
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === "services" ? "bg-primary text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              <Package className="h-5 w-5 inline-block ml-2" />
              خدماتنا
            </button>
            <button
              onClick={() => setActiveTab("areas")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === "areas" ? "bg-primary text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              <MapPin className="h-5 w-5 inline-block ml-2" />
              مناطق الخدمة
            </button>
            <button
              onClick={() => setActiveTab("why")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === "why" ? "bg-primary text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              <ThumbsUp className="h-5 w-5 inline-block ml-2" />
              لماذا تختارنا
            </button>
          </div>
        </div>

        {/* Contenido de la pestaña "من نحن" */}
        {activeTab === "about" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl">
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  تأسست <span className="text-primary font-medium">شركة بشاير الخير لنقل العفش والأثاث</span> منذ أكثر من 10 سنوات، وخلال هذه الفترة اكتسبنا خبرة كبيرة في مجال نقل العفش وفك وتركيب وتغليف الأثاث المنزلي والمكتبي في جميع محافظات الكويت: <span className="text-primary font-medium">العاصمة، حولي، الفروانية، الأحمدي، الجهراء، ومبارك الكبير</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  نفتخر بفريق عمل محترف من النجارين والفنيين المتخصصين في فك وتركيب غرف النوم والمطابخ والستائر والأثاث المكتبي. نقدم خدمات تغليف الأثاث الزجاجي والخشبي بأفضل مواد التغليف لضمان <span className="text-primary font-medium">نقل عفش بدون تكسير</span> وبأمان تام.
                </p>
                <p className="text-lg leading-relaxed">
                  نقدم خدمات <span className="text-primary font-medium">نقل عفش رخيص</span> بأسعار تنافسية مع الحفاظ على الجودة العالية. نوفر أيضاً خدمات تخزين الأثاث في مستودعات آمنة لفترات قصيرة وطويلة. نلتزم بالمواعيد المحددة ونقدم <span className="text-primary font-medium">خدمة نقل عفش 24 ساعة</span> لتلبية احتياجات عملائنا في جميع مناطق الكويت.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary/5 rounded-xl p-6 border-r-4 border-primary transition-all hover:shadow-md duration-300">
                  <h3 className="font-bold text-xl mb-4 text-gray-900 flex items-center">
                    <Target className="h-6 w-6 text-primary ml-2" />
                    رؤيتنا
                  </h3>
                  <p className="text-gray-600">
                    أن نكون افضل شركة نقل عفش في الكويت والخيار الأول لخدمات نقل وتغليف وفك وتركيب وتخزين الأثاث المنزلي والمكتبي في جميع محافظات الكويت.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border-r-4 border-primary transition-all hover:shadow-md duration-300">
                  <h3 className="font-bold text-xl mb-4 text-gray-900 flex items-center">
                    <Heart className="h-6 w-6 text-primary ml-2" />
                    رسالتنا
                  </h3>
                  <p className="text-gray-600">
                    تقديم خدمات نقل عفش بدون تكسير وبأسعار تنافسية مع توفير خدمات فك وتركيب متميزة بأيدي فنيين متخصصين ونجارين محترفين.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
                <Image
                  src="/car3.jpg"
                  alt="شركة بشاير الخير لنقل العفش والأثاث في الكويت"
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center relative pb-3">
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
                    لماذا يختارنا العملاء؟
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border-r-4 border-primary transition-all hover:shadow-md duration-300">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Trophy className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">خبرة 10 سنوات</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border-r-4 border-primary transition-all hover:shadow-md duration-300">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">فريق محترف</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border-r-4 border-primary transition-all hover:shadow-md duration-300">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">ضمان عدم التكسير</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border-r-4 border-primary transition-all hover:shadow-md duration-300">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">خدمة 24 ساعة</h4>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Link href="tel:90905157" className="inline-block">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <Phone className="h-5 w-5 ml-2 inline-block" />
                        اتصل بنا الآن
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contenido de la pestaña "خدماتنا" */}
        {activeTab === "services" && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">خدمات نقل العفش والأثاث المتكاملة</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                نقدم مجموعة متكاملة من خدمات نقل العفش والأثاث المنزلي والمكتبي بأعلى معايير الجودة والاحترافية وبأسعار تنافسية
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <Truck className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-center mb-4 text-gray-900">نقل عفش الكويت</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  نقدم خدمات نقل عفش وأثاث منزلي ومكتبي في جميع مناطق الكويت باستخدام أسطول من سيارات نقل العفش المغلقة والمجهزة خصيصاً لنقل الأثاث بأمان تام مع التأمين ضد الكسر.
                </p>
                <div className="mt-6 text-center">
                  <Link href="tel:90905157  " className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                    اتصل بنا الآن <ChevronLeft className="h-4 w-4 mr-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <Package className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-center mb-4 text-gray-900">تغليف الأثاث والعفش</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  نستخدم أفضل مواد التغليف لحماية الأثاث الزجاجي والخشبي من الخدوش والكسور أثناء النقل، مع اهتمام خاص بالقطع الحساسة والأجهزة الإلكترونية والتحف الثمينة لضمان نقل عفش بدون تكسير.
                </p>
                <div className="mt-6 text-center">
                  <Link href="tel:90905157" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                    اتصل بنا الآن <ChevronLeft className="h-4 w-4 mr-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <Wrench className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-center mb-4 text-gray-900">فك وتركيب الأثاث</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  فريق من النجارين والفنيين المتخصصين في فك وتركيب غرف النوم والمطابخ والستائر والمكيفات والأجهزة الكهربائية باحترافية عالية، مع ضمان عدم التلف أو الخدش أثناء عملية الفك والتركيب.
                </p>
                <div className="mt-6 text-center">
                  <Link href="tel:90905157" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                    اتصل بنا الآن <ChevronLeft className="h-4 w-4 mr-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-center mb-4 text-gray-900">خدمة نقل عفش 24 ساعة</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  نقدم خدمات نقل العفش على مدار 24 ساعة طوال أيام الأسبوع وفي العطل الرسمية، لتلبية احتياجات عملائنا في أي وقت وبأقصى سرعة ممكنة. نقدم أيضاً خدمات تخزين الأثاث في مستودعات آمنة ونظيفة.
                </p>
                <div className="mt-6 text-center">
                  <Link href="tel:90905157" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                    اتصل بنا الآن    
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl shadow-md">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">مميزات خدمات نقل العفش لدينا</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  نحرص على تقديم أفضل خدمات نقل العفش والأثاث في الكويت بمميزات فريدة تجعلنا الخيار الأول للعملاء
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm transition-all hover:shadow-md duration-300">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">ضمان عدم التكسير</h4>
                    <p className="text-gray-600 text-sm">نقل عفش بدون تكسير مع ضمان سلامة الأثاث والتأمين ضد الكسر والخدوش</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm transition-all hover:shadow-md duration-300">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">سرعة في التنفيذ</h4>
                    <p className="text-gray-600 text-sm">نقل سريع للعفش والأثاث مع الالتزام بالمواعيد المحددة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm transition-all hover:shadow-md duration-300">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">فريق عمل محترف</h4>
                    <p className="text-gray-600 text-sm">نجارين وفنيين متخصصين في فك وتركيب وتغليف الأثاث بخبرة 10 سنوات</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pestaña de áreas de servicio */}
        {activeTab === "areas" && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">مناطق خدمة نقل العفش في الكويت</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                نقدم خدمات نقل العفش والأثاث في جميع محافظات الكويت الست بنفس الجودة والكفاءة وبأسعار تنافسية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="h-48 bg-primary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary/40" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-center mb-4 text-gray-900">محافظة العاصمة</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    نقدم خدمات نقل عفش في مناطق العاصمة: الدسمة، الدعية، الشرق، الدوحة، غرناطة، كيفان، النزهة، الفيحاء، الشامية، الروضة، العديلية، الخالدية، السرة، اليرموك، والقادسية
                  </p>
                  <div className="mt-4 text-center">
                  <Link href="tel:90905157" className="inline-block">
                  <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                      اتصل بنا الآن
                    </button>
                  </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="h-48 bg-primary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary/40" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-center mb-4 text-gray-900">محافظة حولي</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    نقدم خدمات نقل عفش في مناطق حولي: السالمية، الرميثية، الجابرية، مشرف، بيان، حطين، الزهراء، الشعب، البدع، الصديق، حولي، والشهداء
                  </p>
                  <div className="mt-4 text-center">
                  <Link href="tel:90905157" className="inline-block">
                  <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                      اتصل بنا الآن
                    </button>
                  </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="h-48 bg-primary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary/40" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-center mb-4 text-gray-900">محافظة الفروانية</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    نقدم خدمات نقل عفش في مناطق الفروانية: الفروانية، خيطان، العارضية، العمرية، الرابية، الرحاب، الأندلس، صباح الناصر، الرقعي، والعباسية
                  </p>
                  <div className="mt-4 text-center">
                  <Link href="tel:90905157" className="inline-block">
                  <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                      اتصل بنا الآن
                    </button>
                  </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="h-48 bg-primary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary/40" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-center mb-4 text-gray-900">محافظة الأحمدي</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    نقدم خدمات نقل عفش في مناطق الأحمدي: الفنطاس، المهبولة، أبو حليفة، الصباحية، الرقة، هدية، الظهر، الوفرة، الزور، والأحمدي
                  </p>
                  <div className="mt-4 text-center">
                  <Link href="tel:90905157" className="inline-block">
                  <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                      اتصل بنا الآن
                    </button>
                  </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="h-48 bg-primary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary/40" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-center mb-4 text-gray-900">محافظة الجهراء</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    نقدم خدمات نقل عفش في مناطق الجهراء: الجهراء القديمة، الجهراء الجديدة، الواحة، النسيم، العيون، القصر، تيماء، والصليبية
                  </p>
                  <div className="mt-4 text-center">
                  <Link href="tel:90905157" className="inline-block">
                  <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                      اتصل بنا الآن
                    </button>
                  </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="h-48 bg-primary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary/40" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-center mb-4 text-gray-900">محافظة مبارك الكبير</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    نقدم خدمات نقل عفش في مناطق مبارك الكبير: صباح السالم، القرين، العدان، القصور، المسيلة، أبو فطيرة، ومبارك الكبير
                  </p>
                  <div className="mt-4 text-center">
                  <Link href="tel:90905157" className="inline-block">
                  <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                      اتصل بنا الآن
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pestaña de por qué elegirnos */}
        {activeTab === "why" && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">لماذا تختار بشاير الخير لنقل العفش؟</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                نحن نقدم خدمات نقل عفش متميزة بأسعار تنافسية مع ضمان الجودة والأمان، إليك أهم الأسباب التي تجعلنا الخيار الأفضل لنقل عفشك في الكويت
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-center mb-4 text-gray-900">خبرة 10 سنوات</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  نمتلك خبرة 10 سنوات في مجال نقل العفش والأثاث في الكويت، مما يجعلنا من أقدم وأفضل شركات نقل العفش في الكويت، وقد اكتسبنا ثقة العملاء على مر السنين بفضل جودة خدماتنا والتزامنا بالمواعيد.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-center mb-4 text-gray-900">ضمان عدم التكسير</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  نقدم ضمان عدم تكسير الأثاث أثناء النقل، ونستخدم أفضل مواد التغليف لحماية الأثاث من الخدوش والكسور، كما نوفر تأمين ضد الكسر والخدوش لضمان سلامة أثاثك أثناء النقل والفك والتركيب.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-center mb-4 text-gray-900">فريق عمل محترف</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  لدينا فريق عمل محترف من النجارين والفنيين المتخصصين في فك وتركيب غرف النوم والمطابخ والستائر والأثاث المكتبي، مع خبرة كبيرة في التعامل مع جميع أنواع الأثاث بمهارة واحترافية عالية.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-center mb-4 text-gray-900">خدمة 24 ساعة</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  نقدم خدمة نقل عفش على مدار 24 ساعة طوال أيام الأسبوع وفي العطل الرسمية، لتلبية احتياجات عملائنا في أي وقت وبأقصى سرعة ممكنة، مع الالتزام بالمواعيد المحددة والدقة في التنفيذ.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-center mb-4 text-gray-900">تغطية شاملة</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  نقدم خدمات نقل العفش في جميع محافظات الكويت الست: العاصمة، حولي، الفروانية، الأحمدي، الجهراء، ومبارك الكبير، مما يجعلنا الخيار الأفضل لنقل العفش في أي منطقة داخل الكويت.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg transition-all hover:shadow-xl duration-300 hover:transform hover:scale-105 border border-gray-100 group">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <DollarSign className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-center mb-4 text-gray-900">أسعار تنافسية</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  نقدم خدمات نقل عفش رخيص بأسعار تنافسية مع الحفاظ على الجودة العالية في الخدمة، ونوفر عروض وخصومات خاصة للعملاء الدائمين والمؤسسات والشركات، مع إمكانية الحصول على عرض سعر فوري.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl shadow-md">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">نصائح لاختيار شركة نقل عفش موثوقة</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  عند اختيار شركة نقل عفش، من المهم البحث عن مزود خدمة يتمتع بالخبرة والموثوقية والأسعار المناسبة. إليك بعض النصائح المهمة:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm transition-all hover:shadow-md duration-300">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <CheckCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">ابحث عن شركة موصى بها</h4>
                    <p className="text-gray-600 text-sm">اسأل الأصدقاء والعائلة عن توصياتهم واقرأ مراجعات العملاء السابقين للشركة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm transition-all hover:shadow-md duration-300">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <CheckCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">تأكد من الخدمات المقدمة</h4>
                    <p className="text-gray-600 text-sm">تأكد من أن الشركة تقدم خدمة فك وتركيب وتغليف متكاملة وليس فقط نقل الأثاث</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm transition-all hover:shadow-md duration-300">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <CheckCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">اسأل عن الضمانات</h4>
                    <p className="text-gray-600 text-sm">اسأل عن ضمان عدم التكسير والتأمين ضد الكسر والخدوش وشروط التعويض في حالة حدوث أي ضرر</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm transition-all hover:shadow-md duration-300">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <CheckCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">قارن الأسعار</h4>
                    <p className="text-gray-600 text-sm">احصل على عروض أسعار من عدة شركات وقارن بينها، مع مراعاة الخدمات المقدمة والجودة</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
              <Link href="tel:90905157" className="inline-block">
                  <button className="inline-flex items-center text-white bg-primary hover:bg-primary/90 hover:text-white p-2  rounded-xl font-medium transition-colors">
                      اتصل بنا الآن
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
