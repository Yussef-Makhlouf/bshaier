import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SEOHead from "@/components/seo-head"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "مناطق خدمة نقل الأثاث في الكويت - بشاير الخير لنقل العفش",
  description: "نقدم خدمات نقل الأثاث في جميع مناطق الكويت: العاصمة، حولي، الفروانية، الأحمدي، الجهراء، مبارك الكبير. خدمة سريعة، أسعار تنافسية، وفريق محترف",
  keywords: "نقل عفش الكويت, نقل اثاث العاصمة, نقل عفش حولي, نقل اثاث الفروانية, نقل عفش الأحمدي, نقل اثاث الجهراء, نقل عفش مبارك الكبير, شركة نقل أثاث",
  openGraph: {
    title: "مناطق خدمة نقل الأثاث في الكويت - بشاير الخير لنقل العفش",
    description: "نقدم خدمات نقل الأثاث في جميع مناطق الكويت: العاصمة، حولي، الفروانية، الأحمدي، الجهراء، مبارك الكبير. خدمة سريعة، أسعار تنافسية، وفريق محترف",
    url: "https://bashir-mover.com/areas",
    siteName: "بشاير الخير لنقل الأثاث",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "بشاير الخير لنقل الأثاث",
      },
    ],
    locale: "ar_KW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مناطق خدمة نقل الأثاث في الكويت - بشاير الخير لنقل العفش",
    description: "نقدم خدمات نقل الأثاث في جميع مناطق الكويت: العاصمة، حولي، الفروانية، الأحمدي، الجهراء، مبارك الكبير. خدمة سريعة، أسعار تنافسية، وفريق محترف",
    images: ["/logo.png"],
  },
}

export default function AreasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SEOHead
        title="مناطق خدمة نقل الأثاث في الكويت - بشاير الخير لنقل العفش"
        description="نقدم خدمات نقل الأثاث في جميع مناطق الكويت: العاصمة، حولي، الفروانية، الأحمدي، الجهراء، مبارك الكبير. خدمة سريعة، أسعار تنافسية، وفريق محترف"
        keywords="نقل عفش الكويت, نقل اثاث العاصمة, نقل عفش حولي, نقل اثاث الفروانية, نقل عفش الأحمدي, نقل اثاث الجهراء, نقل عفش مبارك الكبير, شركة نقل أثاث"
        canonicalUrl="https://www.bashir-mover.com/areas"
        ogType="website"
        ogImage="/logo.png"
        author="بشاير الخير لنقل الأثاث"
        publisher="بشاير الخير لنقل الأثاث - Bashair Al-Khair Moving Company"
        robots="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
      <Navbar />
      <main className="min-h-screen ">
        {children}
      </main>
      <Footer />
    </>
  )
}
