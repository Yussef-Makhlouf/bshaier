import type React from "react"
import "./globals.css"
import { Alexandria } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { LocalBusinessJsonLd } from "@/components/json-ld"
import { Analytics } from "@vercel/analytics/next"

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-alexandria",
})

export const metadata = {
  title: " بشاير الخير لنقل الأثاث | 90905157 | خدمات نقل الأثاث المميزة في جميع مناطق الكويت - فك وتركيب وتغليف احترافي ",
  description:
    "أفضل شركة نقل عفش في الكويت ✓ خدمة 24 ساعة ✓ أسعار تنافسية ✓ فك وتركيب وتغليف احترافي ✓ نقل آمن وسريع لجميع مناطق الكويت: السالمية، حولي، الفروانية، الجهراء، الأحمدي وجميع المناطق. اتصل الآن!",
    keywords:
    "نقل أثاث, نقل اثاث, شركة نقل أثاث الكويت, فك وتركيب اثاث, تغليف اثاث, تخزين اثاث, نقل أثاث رخيص, افضل شركة نقل أثاث, نقل اغراض الكويت, نقل عفش السالمية, نقل عفش الداعية, نقل عفش كيفان, نقل عفش جنوب السرة, نقل عفش صباح السالم, نقل عفش الكويت, نقل عفش سلوي, نقل عفش الفروانية, نقل عفش مبارك الكبير, نقل عفش الخالدية, نقل عفش حولي, نقل عفش الجابرية, نقل عفش الجهراء, نقل عفش القصور, نقل عفش الاحمدي, نقل عفش المنقف, نقل عفش ابو فطيرة, نقل عفش الفردوس, نقل عفش العارضية, نقل عفش النهضه, نقل عفش الواحه, نقل عفش اليرموك, نقل عفش الري, نقل عفش القيروان, نقل عفش الشعب, نقل عفش الشهداء, نقل عفش غرناطه, نقل عفش المنصوريه, نقل عفش ضاحية عبدالله السالم, نقل عفش النزهه, نقل عفش الفيحاء, نقل عفش الشامية, نقل عفش العقيلة, نقل عفش الظهر, نقل عفش جابر العلي, نقل عفش فهد الاحمد, نقل عفش ام الهيمان, نقل عفش الفحيحل, نقل عفش ميناء عبدالله, نقل عفش بنيدر, نقل عفش الوسيط الرضوان, عمال نقل عفش, نقل عفش هندي, نقل عفش داخل المنزل, نقل عفش مشرف, نقل عفش خيران, نقل عفش الشويخ, نقل عفش الدسمة, نقل عفش الوفره, نقل عفش العاصمة, نقل عفش بيان, نقل عفش المنطقه العاشرة, نقل عفش الفنطاس, نقل عفش المهبولة, اسعار نقل العفش بالكويت, نقل عفش قرطبة, نقل عفش صباح الاحمد, نقل عفش صباح الناصر, نقل عفش الصباحية, نقل عفش الرقة, نقل عفش الصليبخات, نقل عفش هدية, رقم نقل عفش, نقل عفش خيطان, نقل عفش عبدالله مبارك, نقل عفش اشبيلية, نقل عفش السلام, نقل عفش السره, نقل عفش الرميثية, نقل عفش, نقل اثاث, نقل عفش الكويت, شركة نقل عفش",
    ogType: "website",
    ogImage: "/logo.png",
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="canonical" content="https://www.bashir-mover.com/" />

        {/* Google Analytics and Google Ads Conversion Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JKN4PPY635"></script>
        <script dangerouslySetInnerHTML={{
          __html: ` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JKN4PPY635'); // Google Analytics
            gtag('config', 'AW-17039135913'); // Google Ads
          `
        }} />
      </head>
      <body className={`${alexandria.variable} font-alexandria`}>
        <link rel="icon" href="/logo.png" />

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LocalBusinessJsonLd
            name="أفضل شركة نقل عفش في الكويت - بشاير الخير لنقل الأثاث"
            description="أفضل شركة نقل عفش في الكويت ✓ خدمة 24 ساعة ✓ أسعار تنافسية ✓ فك وتركيب وتغليف احترافي ✓ نقل آمن وسريع لجميع مناطق الكويت"
            url="https://www.bashir-mover.com"
            telephone="+96590905157"
            address={{
              streetAddress: "الكويت",
              addressLocality: "الكويت",
              addressRegion: "الكويت",
              addressCountry: "الكويت",
            }}
            geo={{
              latitude: 29.3759,
              longitude: 47.9774,
            }}
            openingHours={[
              "Monday 08:00-20:00",
              "Tuesday 08:00-20:00",
              "Wednesday 08:00-20:00",
              "Thursday 08:00-20:00",
              "Friday 08:00-20:00",
              "Saturday 08:00-20:00",
              "Sunday 08:00-20:00",
            ]}
            priceRange="$$$"
          />
          {children}
  
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
