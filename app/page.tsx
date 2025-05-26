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
import SEOFAQ from "@/components/seo-faq"
import SEOHead from "@/components/seo-head"
import { ServiceJsonLd } from "@/components/json-ld"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEOHead 
        title="نقل أثاث الكويت - بشاير الخير لنقل العفش فك وتركيب - أفضل شركة نقل أثاث في الكويت"
        description="أفضل شركة نقل عفش في الكويت ✓ خدمة 24 ساعة ✓ أسعار تنافسية ✓ فك وتركيب وتغليف احترافي ✓ نقل آمن وسريع لجميع مناطق الكويت: السالمية، حولي، الفروانية، الجهراء، الأحمدي وجميع المناطق. اتصل الآن!"
        canonicalUrl="https://www.bashir-mover.com/"
        author="بشاير الخير لنقل الأثاث"
        publisher="بشاير الخير لنقل الأثاث - Bashair Al-Khair Moving Company"
        robots="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        ogImage="https://www.bashir-mover.com/logo.png"
        ogType="website"
        twitterHandle="@bashir-mover"
      />
      <ServiceJsonLd
        name="خدمات نقل الأثاث في الكويت"
        description="خدمات متكاملة لنقل الأثاث تشمل الفك والتركيب والتغليف والنقل الآمن في جميع مناطق الكويت"
        provider={{
          name: "بشاير الخير لنقل الأثاث",
          url: "https://bshaier.com"
        }}
        areaServed={[
          "الكويت", "السالمية", "حولي", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير"
        ]}
        serviceType="نقل أثاث"
      />
      <SEOFAQ />
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
