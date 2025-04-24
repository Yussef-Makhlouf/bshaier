import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-primary text-primary-foreground">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">بشاير الخير لنقل الأثاث</h3>
            <p className="max-w-xs">
              شركة متخصصة في نقل وتغليف الأثاث المنزلي والمكتبي في جميع أنحاء الكويت بأعلى مستويات الجودة والاحترافية.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فيسبوك</span>
              </Link>
              <Link
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">تويتر</span>
              </Link>
              <Link
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">انستغرام</span>
              </Link>
              <Link
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">يوتيوب</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 justify-start">
                <Link href="tel:90905157" className="hover:underline">
                  90905157
                </Link>
                <Phone className="h-5 w-5" />
              </li>
              <li className="flex items-center gap-2 justify-start">
                <Link href="mailto:info@bashayeralkhair.com" className="hover:underline">
                  info@bashayeralkhair.com
                </Link>
                <Mail className="h-5 w-5" />
              </li>
              <li className="flex items-center gap-2 justify-start">
                <span>الكويت - جميع المناطق</span>
                <MapPin className="h-5 w-5" />
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">ساعات العمل</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 justify-start">
                <span>السبت - الخميس: 8 صباحاً - 8 مساءً</span>
                <Clock className="h-5 w-5" />
              </li>
              <li className="flex items-center gap-2 justify-start">
                <span>الجمعة: 2 ظهراً - 8 مساءً</span>
                <Clock className="h-5 w-5" />
              </li>
            </ul>
      
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline flex items-center gap-2 justify-start">
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline flex items-center gap-2 justify-start">
                  <span>خدماتنا</span>
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:underline flex items-center gap-2 justify-start">
                  <span>من نحن</span>
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="hover:underline flex items-center gap-2 justify-start">
                  <span>لماذا تختارنا</span>
                </Link>
              </li>
              <li>
                <Link href="#service-areas" className="hover:underline flex items-center gap-2 justify-start">
                  <span>مناطق الخدمة</span>
                </Link>
              </li>
       
            
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-center md:text-right">
              © {new Date().getFullYear()} بشاير الخير لنقل الأثاث. جميع الحقوق محفوظة.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="#" className="text-sm hover:underline">
                سياسة الخصوصية
              </Link>
              <Link href="#" className="text-sm hover:underline">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
