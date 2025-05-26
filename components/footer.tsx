import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, ChevronRight, Send, CheckCircle, Home, Package, Info, ThumbsUp, MessageCircle, ArrowUp, Truck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      {/* Botón de volver arriba */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="#top" 
          className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:transform hover:scale-110 flex items-center justify-center"
          aria-label="العودة إلى الأعلى"
        >
          <ArrowUp className="h-6 w-6" />
        </a>
      </div>

      {/* Barra de contacto rápido */}
      <div className="bg-primary py-4 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-white/80" />
            <span className="font-medium">للتواصل السريع:</span>
            <Link href="tel:90905157" className="font-bold hover:underline transition-colors">
              90905157
            </Link>
          </div>
          <div className="flex gap-4">
            <Link 
              href="https://wa.me/96590905157" 
              target="_blank" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>واتساب</span>
            </Link>
            <Link 
              href="tel:90905157" 
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>اتصل الآن</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          {/* Sección principal del footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Columna 1: Información de la empresa */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Image 
                    src="/logo.png" 
                    alt="بشاير الخير لنقل الأثاث" 
                    width={50} 
                    height={50} 
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">بشاير الخير</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                شركة متخصصة في نقل وتغليف الأثاث المنزلي والمكتبي في جميع أنحاء الكويت بأعلى مستويات الجودة والاحترافية، مع خبرة تزيد عن 10 سنوات في مجال نقل العفش.
              </p>
              
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="bg-white/10 p-2.5 rounded-lg hover:bg-primary/80 transition-colors"
                  aria-label="فيسبوك"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-white/10 p-2.5 rounded-lg hover:bg-primary/80 transition-colors"
                  aria-label="تويتر"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-white/10 p-2.5 rounded-lg hover:bg-primary/80 transition-colors"
                  aria-label="انستغرام"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
     
              </div>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-16 after:h-1 after:bg-primary after:rounded-full">
                روابط سريعة
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>الرئيسية</span>
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>خدماتنا</span>
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>من نحن</span>
                  </Link>
                </li>
                <li>
                  <Link href="#why-choose-us" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>لماذا تختارنا</span>
                  </Link>
                </li>
                <li>
                  <Link href="#service-areas" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>مناطق الخدمة</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Información de contacto */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-16 after:h-1 after:bg-primary after:rounded-full">
                تواصل معنا
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">رقم الهاتف</p>
                    <Link href="tel:90905157" className="text-white hover:text-primary transition-colors">
                      90905157
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">البريد الإلكتروني</p>
                    <Link href="mailto:info@bashayeralkhair.com" className="text-white hover:text-primary transition-colors">
                      info@bashayeralkhair.com
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">العنوان</p>
                    <p className="text-white">الكويت - نخدم جميع المناطق</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">ساعات العمل</p>
                    <p className="text-white">24 ساعة طوال أيام الأسبوع</p>
                  </div>
                </li>
              </ul>
            </div>


          </div>

          {/* Sección de servicios principales */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="text-xl font-bold text-white text-center mb-8">
              خدمات نقل العفش في الكويت
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 p-5 rounded-xl hover:bg-primary/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-white">نقل عفش الكويت</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  خدمة نقل عفش شاملة في جميع مناطق الكويت مع ضمان سلامة الأثاث أثناء النقل
                </p>
              </div>
              
              <div className="bg-white/5 p-5 rounded-xl hover:bg-primary/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-white">تغليف الأثاث</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  خدمة تغليف احترافية لحماية الأثاث من الخدوش والكسور أثناء النقل
                </p>
              </div>
              
              <div className="bg-white/5 p-5 rounded-xl hover:bg-primary/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-white">فك وتركيب الأثاث</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  فك وتركيب غرف النوم والمطابخ والستائر بأيدي فنيين متخصصين
                </p>
              </div>
              
              <div className="bg-white/5 p-5 rounded-xl hover:bg-primary/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-white">خدمة 24 ساعة</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  خدمة نقل عفش على مدار 24 ساعة طوال أيام الأسبوع لتلبية احتياجاتك
                </p>
              </div>
            </div>
          </div>

          {/* Pie de página */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} بشاير الخير لنقل الأثاث. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                سياسة الخصوصية
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                الشروط والأحكام
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                خريطة الموقع
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
