
"use client"    
import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from "lucide-react"
import SEOHead from "@/components/seo-head"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "الاسم مطلوب" }),
  phone: z.string().min(8, { message: "رقم الهاتف غير صحيح" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }).optional().or(z.literal("")),
  service: z.string({ required_error: "يرجى اختيار الخدمة" }),
  area: z.string({ required_error: "يرجى اختيار المنطقة" }),
  message: z.string().min(10, { message: "يرجى كتابة تفاصيل أكثر" }),
})

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      area: "",
      message: "",
    },
  })

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this data to your backend
    console.log(values)
    setIsSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      form.reset()
    }, 5000)
  }

  return (
    <>
      <SEOHead
        title="اتصل بنا - بشاير الخير لنقل الأثاث في الكويت"
        description="تواصل مع شركة بشاير الخير لنقل الأثاث في الكويت. احصل على عرض سعر مجاني لخدمات نقل وفك وتركيب وتغليف وتخزين الأثاث في جميع مناطق الكويت."
        keywords="اتصل بنا, بشاير الخير, نقل أثاث الكويت, عرض سعر, نقل عفش, شركة نقل أثاث, أرقام نقل عفش, طلب خدمة نقل اثاث, شركة نقل عفش رخيصة, نقل عفش الكويت واتساب"
        canonicalUrl="https://bashir-mover.com/contact"
        ogType="website"
      />
      
      <div id="top">
        <Navbar />
      </div>

      <div className="bg-gradient-to-b from-background to-muted">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                تواصل معنا
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                اتصل بنا الآن للحصول على خدمة احترافية
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                نحن في خدمتكم على مدار الساعة لتلبية جميع احتياجاتكم في نقل وفك وتركيب وتغليف وتخزين الأثاث في جميع مناطق الكويت
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">اتصل بنا</h3>
                  <p className="text-muted-foreground">90905157</p>
                  <Button asChild size="sm" className="gap-2">
                    <a href="tel:90905157">
                      <Phone className="h-4 w-4" />
                      اتصل الآن
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">واتساب</h3>
                  <p className="text-muted-foreground">90905157</p>
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a href="https://wa.me/96590905157" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      مراسلة واتساب
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">البريد الإلكتروني</h3>
                  <p className="text-muted-foreground">info@bashair-mover.com</p>
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a href="mailto:info@bashair-mover.com">
                      <Mail className="h-4 w-4" />
                      إرسال بريد
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">ساعات العمل</h3>
                  <p className="text-muted-foreground">24 ساعة / 7 أيام</p>
                  <p className="text-muted-foreground text-sm">نعمل على مدار الساعة</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">طلب عرض سعر</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                أرسل لنا تفاصيل طلبك للحصول على عرض سعر مخصص لاحتياجاتك
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {isSubmitted ? (
                <Card className="overflow-hidden transition-all duration-300 bg-green-50 border-green-200">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800">تم إرسال طلبك بنجاح</h3>
                    <p className="text-green-700">
                      شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="overflow-hidden transition-all duration-300">
                  <CardContent className="p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>الاسم</FormLabel>
                                <FormControl>
                                  <Input placeholder="الاسم الكامل" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>رقم الهاتف</FormLabel>
                                <FormControl>
                                  <Input placeholder="رقم الهاتف" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>البريد الإلكتروني (اختياري)</FormLabel>
                                <FormControl>
                                  <Input placeholder="البريد الإلكتروني" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>الخدمة المطلوبة</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="اختر الخدمة" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="moving">نقل الأثاث</SelectItem>
                                    <SelectItem value="packing">تغليف الأثاث</SelectItem>
                                    <SelectItem value="assembly">فك وتركيب الأثاث</SelectItem>
                                    <SelectItem value="storage">تخزين الأثاث</SelectItem>
                                    <SelectItem value="office-moving">نقل المكاتب والشركات</SelectItem>
                                    <SelectItem value="international-shipping">الشحن الدولي</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="area"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>المنطقة</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="اختر المنطقة" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="capital">العاصمة</SelectItem>
                                  <SelectItem value="hawalli">حولي</SelectItem>
                                  <SelectItem value="farwaniya">الفروانية</SelectItem>
                                  <SelectItem value="ahmadi">الأحمدي</SelectItem>
                                  <SelectItem value="jahra">الجهراء</SelectItem>
                                  <SelectItem value="mubarak-al-kabeer">مبارك الكبير</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>تفاصيل الطلب</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="اكتب تفاصيل طلبك هنا... (مثال: نوع الأثاث، الكمية، التاريخ المطلوب، إلخ)" 
                                  className="min-h-32" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full gap-2">
                          <Send className="h-4 w-4" />
                          إرسال الطلب
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">موقعنا</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                نقدم خدماتنا في جميع مناطق الكويت
              </p>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222208.61426629736!2d47.85034709237285!3d29.311899830141137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea51a1%3A0x74726bcd92d8edd2!2sKuwait!5e0!3m2!1sen!2sus!4v1653395043612!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
            
      <Footer />

    </>
  )
}
