
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Services from "@/components/services"
import Process from "@/components/process"
import AboutUs from "@/components/about-us"
import WhyChooseUs from "@/components/why-choose-us"
import ServiceAreas from "@/components/service-areas"
import Faq from "@/components/faq"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"


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
