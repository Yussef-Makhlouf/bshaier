"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown, MapPin, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export default function Navbar() {
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 py-1 mx-auto">
        {/* Top bar with contact info - hidden on mobile */}
    

        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-bold text-xl md:text-2xl text-primary flex items-center gap-2 relative overflow-hidden group"
            >
              <div className="overflow-hidden rounded-md">
                <div className="text-primary-foreground p-2 rounded-md transform transition-transform group-hover:scale-110 duration-300">
                  <Image
                    src="/logo.png"
                    alt="شعار بشاير الخير"
                    width={90}
                    height={90}
                    className="h-10 w-10"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-primary leading-tight">بشاير الخير</span>
                <span className="text-xs text-muted-foreground leading-tight">لنقل العفش</span>
              </div>
            </Link>
          </div>

          {isMobile ? (
            <div className="flex items-center gap-2">
        

              <Link href="tel:90905157">
                <Button variant="outline" size="icon" className="relative animate-pulse">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="sr-only">اتصل بنا</span>
                </Button>
              </Link>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">فتح القائمة</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right"  className="text-right p-0 w-[300px]">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b bg-gradient-primary">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-xl text-primary-foreground flex items-center gap-2">
                          <Image
                            src="/logo.png"
                            alt="شعار بشاير الخير"
                            width={30}
                            height={30}
                            className="h-6 w-6"
                          />
                          <span>بشاير الخير</span>
                        </div>
                      </div>
                    </div>
                    <nav className="flex flex-col gap-1 p-4 flex-1 overflow-auto">
                      <Link
                        href="#"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        الرئيسية
                      </Link>
                      <Link
                        href="#services"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        خدماتنا
                      </Link>
                      <Link
                        href="#process"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        مراحل العمل
                      </Link>
                      <Link
                        href="#about"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        من نحن
                      </Link>
                      <Link
                        href="#why-choose-us"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        لماذا تختارنا
                      </Link>
                      <Link
                        href="#service-areas"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        مناطق الخدمة
                      </Link>
                      <Link
                        href="#testimonials"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        آراء العملاء
                      </Link>
                      <Link
                        href="tel:+96590905157"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        طلب عرض سعر
                      </Link>
                      <Link
                        href="#partners"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        شركاؤنا
                      </Link>
                      <Link
                        href="#faq"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        الأسئلة الشائعة
                      </Link>
                      <Link
                        href="#blog"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        المدونة
                      </Link>
                      <Link
                        href="#contact"
                        className="flex items-center gap-2 justify-end p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        اتصل بنا
                      </Link>
                    </nav>
                    <div className="p-4 border-t bg-muted">
                      <div className="grid grid-cols-2 gap-2">
                        <Button className="w-full" variant="default" asChild>
                          <Link href="tel:90905157">
                            <Phone className="ml-2 h-4 w-4" />
                            اتصل بنا
                          </Link>
                        </Button>
                        <Button className="w-full" variant="outline" asChild>
                          <Link href="tel:+96590905157">طلب سعر</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <div className="flex items-center gap-4">
        
              <nav className="flex items-center gap-1">
                <Link href="#" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors">
                  الرئيسية
                </Link>
                <Link
                  href="#services"
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
                  خدماتنا
                </Link>
                <Link
                  href="#process"
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
                  مراحل العمل
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="px-3 py-2 h-auto text-sm font-medium">
                      المزيد
                      <ChevronDown className="mr-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="#about" className="w-full cursor-pointer text-right">
                        من نحن
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="#why-choose-us" className="w-full cursor-pointer text-right">
                        لماذا تختارنا
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="#service-areas" className="w-full cursor-pointer text-right">
                        مناطق الخدمة
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="#testimonials" className="w-full cursor-pointer text-right">
                        آراء العملاء
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="#partners" className="w-full cursor-pointer text-right">
                        شركاؤنا
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="#faq" className="w-full cursor-pointer text-right">
                        الأسئلة الشائعة
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="#blog" className="w-full cursor-pointer text-right">
                        المدونة
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  href="tel:+96590905157"
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
                  طلب عرض سعر
                </Link>
                <Link
                  href="#contact"
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
                  اتصل بنا
                </Link>
              </nav>
              <Link
                  href="tel:+96590905157"
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
              <Button size="sm" className="animate-pulse">
                <Phone className="ml-2 h-4 w-4" />
                90905157
              </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
