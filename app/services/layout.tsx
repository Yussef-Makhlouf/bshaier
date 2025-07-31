import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bashir-mover.com'),
  title: "خدمات نقل الأثاث في الكويت | 90905157 | بشاير الخير لنقل العفش | خدمة 24 ساعة",
  description: "خدمات بشاير الخير المتكاملة لنقل الأثاث في الكويت: فك وتركيب وتغليف ونقل وتخزين الأثاث بأيدي فنيين محترفين ✓ خدمة 24 ساعة ✓ أسعار تنافسية ✓ تغطية لجميع مناطق الكويت: السالمية، حولي، الفروانية، الجهراء، الأحمدي وجميع المحافظات",
  keywords: "خدمات نقل الأثاث الكويت, فك وتركيب الأثاث الكويت, تغليف الأثاث الكويت, تخزين الأثاث الكويت, نقل المكاتب الكويت, نقل عفش الكويت, شركة نقل أثاث الكويت, بشاير الخير لنقل الأثاث, نقل اثاث منزلي الكويت, خدمة نقل عفش 24 ساعة, نقل عفش محافظة العاصمة, نقل عفش محافظة حولي, نقل عفش محافظة الفروانية, نقل عفش محافظة الاحمدي, نقل عفش محافظة الجهراء, نقل عفش السالمية, نقل عفش حولي, اسعار نقل عفش الكويت, ارخص شركة نقل عفش الكويت, نقل عفش بدون تكسير, نقل اثاث مع التركيب, خدمة نقل اثاث في نفس اليوم, نقل عفش مع التأمين ضد الكسر",
  alternates: {
    canonical: "https://www.bashir-mover.com/services"
  },
  openGraph: {
    title: "خدمات نقل الأثاث في الكويت  | 90905157 | بشاير الخير لنقل العفش | خدمة 24 ساعة",
    description: "خدمات بشاير الخير المتكاملة لنقل الأثاث في الكويت: فك وتركيب وتغليف ونقل وتخزين الأثاث بأيدي فنيين محترفين وبأسعار تنافسية في جميع مناطق الكويت",
    url: "https://www.bashir-mover.com/services",
    siteName: "بشاير الخير لنقل الأثاث",
    locale: "ar_KW",
    type: "website",
    
    images: [
      {
        url: "https://www.bashir-mover.com/logo.png",
        width: 1200,
        height: 630,
        alt: "بشاير الخير لنقل الأثاث في الكويت"
      }
    ]
  },
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
}

export default function ServicesLayout({
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
