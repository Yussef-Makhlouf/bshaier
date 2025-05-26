import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SEOHead from "@/components/seo-head"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "خدمات نقل الأثاث في الكويت - بشاير الخير لنقل العفش",
  description: "تعرف على خدمات بشاير الخير المتكاملة لنقل الأثاث في الكويت: فك وتركيب وتغليف ونقل وتخزين الأثاث بأيدي فنيين محترفين وبأسعار تنافسية في جميع مناطق الكويت",
  keywords: "خدمات نقل الأثاث, فك وتركيب الأثاث, تغليف الأثاث, تخزين الأثاث, نقل المكاتب, نقل عفش الكويت, شركة نقل أثاث, بشاير الخير",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SEOHead
        title="خدمات نقل الأثاث في الكويت - بشاير الخير لنقل العفش"
        description="تعرف على خدمات بشاير الخير المتكاملة لنقل الأثاث في الكويت: فك وتركيب وتغليف ونقل وتخزين الأثاث بأيدي فنيين محترفين وبأسعار تنافسية في جميع مناطق الكويت"
        keywords="خدمات نقل الأثاث, فك وتركيب الأثاث, تغليف الأثاث, تخزين الأثاث, نقل المكاتب, نقل عفش الكويت, شركة نقل أثاث, بشاير الخير"
        canonicalUrl="https://bashir-mover.com/services"
        ogType="website"
        ogImage="/logo.png"
      />
      <Navbar />
      <main className="min-h-screen ">
        {children}
      </main>
      <Footer />
    </>
  )
}
