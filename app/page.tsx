import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Services from "@/components/services"
import Process from "@/components/process"
import AboutUs from "@/components/about-us"
import WhyChooseUs from "@/components/why-choose-us"
import ServiceAreas from "@/components/service-areas"
import Testimonials from "@/components/testimonials"
import Partners from "@/components/partners"
import Faq from "@/components/faq"
import QuoteForm from "@/components/quote-form"
import BlogPreview from "@/components/blog-preview"
import Footer from "@/components/footer"
import ContactButtons from "@/components/contact-buttons"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      {/* <Services /> */}
      <Process />
      <AboutUs />
      <WhyChooseUs />
      <QuoteForm />
      <ServiceAreas />

      {/* <Testimonials /> */}
      {/* <Partners /> */}
      <Faq />
     
      {/* <BlogPreview /> */}
      <Footer />
      {/* <ContactButtons phoneNumber="90905157" /> */}
    </main>
  )
}
