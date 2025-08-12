import { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bashir-mover.com'),
  title: 'تواصل معنا | بشاير الخير لنقل الأثاث | 90905157 | عرض سعر مجاني',
  description: 'تواصل مع شركة بشاير الخير لنقل الأثاث في الكويت. احصل على عرض سعر مجاني لخدمات نقل وفك وتركيب وتغليف الأثاث. نعمل 24/7 في جميع مناطق الكويت',
  keywords: 'تواصل معنا, عرض سعر نقل عفش, اتصال نقل أثاث الكويت, تواصل بشاير الخير, طلب خدمة نقل عفش, رقم نقل أثاث 90905157, واتساب نقل عفش, خدمة عملاء نقل أثاث',

  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  
  openGraph: {
    title: 'تواصل معنا | بشاير الخير لنقل الأثاث | 90905157 | عرض سعر مجاني',
    description: 'تواصل مع شركة بشاير الخير لنقل الأثاث في الكويت. احصل على عرض سعر مجاني لخدمات نقل وفك وتركيب وتغليف الأثاث. نعمل 24/7 في جميع مناطق الكويت',
    url: 'https://www.bashir-mover.com/contact',
    siteName: 'بشاير الخير لنقل الأثاث',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'تواصل مع بشاير الخير لنقل الأثاث في الكويت',
      },
    ],
    locale: 'ar_KW',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'تواصل معنا | بشاير الخير لنقل الأثاث | 90905157 | عرض سعر مجاني',
    description: 'تواصل مع شركة بشاير الخير لنقل الأثاث في الكويت. احصل على عرض سعر مجاني لخدمات نقل وفك وتركيب وتغليف الأثاث',
    images: ['/logo.png'],
    site: '@bashir_mover',
    creator: '@bashir_mover',
  },

  alternates: {
    canonical: 'https://www.bashir-mover.com/contact',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },

  authors: [
    {
      name: 'بشاير الخير لنقل الأثاث',
      url: 'https://www.bashir-mover.com',
    },
  ],

  creator: 'بشاير الخير لنقل الأثاث',
  publisher: 'بشاير الخير لنقل الأثاث',

  // Additional SEO properties
  category: 'Business',
  classification: 'Furniture Moving Services',
  
  // Structured data for contact page
  other: {
    'og:phone_number': '+965 90905157',
    'og:email': 'info@bashair-mover.com',
    'og:street-address': 'جميع مناطق الكويت',
    'og:locality': 'الكويت',
    'og:region': 'الكويت',
    'og:country-name': 'الكويت',
    'business:contact_data:phone_number': '+965 90905157',
    'business:contact_data:email': 'info@bashair-mover.com',
    'business:contact_data:website': 'https://www.bashir-mover.com',
  },

};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div id="top"></div>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}