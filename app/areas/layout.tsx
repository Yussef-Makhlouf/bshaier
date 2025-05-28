

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bashir-mover.com'),
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
    site: "@bashir_mover",
    creator: "@bashir_mover",
 
  },
  alternates: {
    canonical: "https://www.bashir-mover.com/areas"
  }
}

export default function AreasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>

      <Navbar />
      <main className="min-h-screen ">
        {children}
      </main>
      <Footer />
    </>
  )
}
