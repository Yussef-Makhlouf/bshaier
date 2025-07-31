"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown, MapPin, Clock, Search, Home, Package, FileText, Map, Lightbulb, Settings, Users, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export default function Navbar() {
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const navItems = [
    { href: "/", label: "الرئيسية", icon: Home },
    { href: "/services", label: "خدماتنا", icon: Package },
    { href: "/blog", label: "مقالات", icon: FileText },
    { href: "/areas", label: "مناطق الخدمة", icon: Map },
    { href: "/nuqud-nakl-athath", label: "نصائح النقل", icon: Lightbulb },
    { href: "/irshadat-taghleef-athath", label: "إرشادات التغليف", icon: Settings },
    { href: "#process", label: "مراحل العمل", icon: Settings },
  ]

  const dropdownItems = [
    { href: "#why-choose-us", label: "لماذا تختارنا", icon: Users },
    { href: "#faq", label: "الأسئلة الشائعة", icon: HelpCircle },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 shadow-lg border-b border-gray-100"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Top Contact Bar - Hidden on Mobile */}
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-gray-100">
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>90905157</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>24/7 خدمة متواصلة</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>جميع مناطق الكويت</span>
            </div>
          </div>
      
        </div>

        {/* Main Navigation */}
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 group transition-transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="شعار بشاير الخير"
                  width={50}
                  height={50}
                  className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg lg:text-xl text-primary leading-tight">بشاير الخير</span>
                <span className="text-xs lg:text-sm text-gray-600 leading-tight">لنقل الأثاث</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              >
                <item.icon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.label}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2 h-auto text-sm font-medium hover:bg-primary/10 hover:text-primary">
                  المزيد
                  <ChevronDown className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {dropdownItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="flex items-center gap-2 w-full cursor-pointer text-right">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
 
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white text-sm animate-pulse">
              <Phone className="ml-2 h-4 w-4" />
              90905157
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link href="tel:90905157">
              <Button variant="outline" size="icon" className="relative animate-pulse">
                <Phone className="h-5 w-5 text-primary" />
                <span className="sr-only">اتصل بنا</span>
              </Button>
            </Link>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">فتح القائمة</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="text-start p-0 w-[320px] bg-white">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="p-6 border-b bg-gradient-to-r from-primary to-primary/80">
                    <div className="flex items-center justify-center">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/logo.png"
                          alt="شعار بشاير الخير"
                          width={40}
                          height={40}
                          className="h-10 w-10"
                        />
                        <div className="text-white">
                          <div className="font-bold text-lg">بشاير الخير</div>
                          <div className="text-sm opacity-90">لنقل الأثاث</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-1 p-4 flex-1 overflow-auto">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 justify-end p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <span className="font-medium">{item.label}</span>
                        <item.icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                    
                    <div className="border-t border-gray-200 my-2" />
                    
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 justify-end p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <span className="font-medium">{item.label}</span>
                        <item.icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA Section */}
                  <div className="p-4 border-t bg-gray-50">
                    <div className="space-y-3">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold" asChild>
                        <Link href="tel:90905157" onClick={() => setIsMenuOpen(false)}>
                          <Phone className="ml-2 h-4 w-4" />
                          اتصل بنا الآن
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full font-bold" asChild>
                        <Link href="tel:+96590905157" onClick={() => setIsMenuOpen(false)}>
                          طلب عرض سعر
                        </Link>
                      </Button>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>90905157</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>24/7 خدمة متواصلة</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>جميع مناطق الكويت</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
