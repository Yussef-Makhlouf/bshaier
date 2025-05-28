'use client';

import React from 'react';
import { NextSeo, LocalBusinessJsonLd } from 'next-seo';
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  twitterHandle?: string;
  alternateLanguages?: Array<{locale: string; url: string}>;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  publisher?: string;
  robots?: string;
  
  // LocalBusiness JSON-LD data
  businessData?: {
    name: string;
    description: string;
    url: string;
    telephone: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
    };
    geo: {
      latitude: number;
      longitude: number;
    };
    openingHours: string[];
    priceRange: string;
  };
  
  // Service JSON-LD data
  serviceData?: {
    name: string;
    description: string;
    provider: {
      name: string;
      url: string;
    };
    areaServed: string[];
    serviceType: string;
  };
  
  // Verification tags
  googleVerification?: string;
  bingVerification?: string;
  yandexVerification?: string;
  
  // PWA related
  themeColor?: string;
  manifestPath?: string;
}

const SEOHead: React.FC<SEOProps> = ({
  title = "نقل أثاث الكويت - بشاير الخير لنقل العفش فك وتركيب - أفضل شركة نقل أثاث في الكويت",
  description = "أفضل شركة نقل عفش في الكويت ✓ خدمة 24 ساعة ✓ أسعار تنافسية ✓ فك وتركيب وتغليف احترافي ✓ نقل آمن وسريع لجميع مناطق الكويت: السالمية، حولي، الفروانية، الجهراء، الأحمدي وجميع المناطق. اتصل الآن!",
  keywords = "نقل عفش الكويت, نقل اثاث الكويت, شركة نقل عفش الكويت, بشاير الخير لنقل الأثاث, نقل اثاث منزلي الكويت, شركة نقل اثاث بالكويت, افضل شركة نقل عفش الكويت, خدمات نقل الاثاث الكويت, شركات نقل العفش بالكويت, نقل عفش وتغليف الكويت, فك وتركيب اثاث الكويت, تغليف اثاث الكويت, تخزين اثاث الكويت, نقل عفش محافظة العاصمة, نقل عفش محافظة حولي, نقل عفش محافظة الفروانية, نقل عفش محافظة الاحمدي, نقل عفش محافظة الجهراء, نقل عفش السالمية الكويت, نقل عفش حولي الكويت, اسعار نقل عفش الكويت, ارخص شركة نقل عفش الكويت, افضل شركة نقل عفش الكويت, شركة نقل عفش موثوقة الكويت, نقل عفش بدون تكسير الكويت, نقل اثاث مع التركيب الكويت, خدمة نقل اثاث في نفس اليوم الكويت, نقل عفش مع التأمين ضد الكسر",
  ogImage = "https://www.bashir-mover.com/logo.png",
  ogType = "website",
  canonicalUrl = "https://www.bashir-mover.com/",
  twitterHandle = "@bashir-mover",

  publishedTime,
  modifiedTime,
  author = "بشاير الخير لنقل الأثاث",
  publisher = "بشاير الخير لنقل الأثاث - Bashair Al-Khair Moving Company",
  robots = "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  businessData,
  serviceData,
  googleVerification,
  bingVerification,
  yandexVerification,
  themeColor = "#ffffff",
  manifestPath = "/site.webmanifest",
}) => {
  // تحضير بيانات الـ LocalBusiness JSON-LD إذا كانت متوفرة
  const localBusinessProps = businessData ? {
    type: 'LocalBusiness',
    id: canonicalUrl,
    name: businessData.name,
    description: businessData.description,
    url: businessData.url,
    telephone: businessData.telephone,
    address: {
      streetAddress: businessData.address.streetAddress,
      addressLocality: businessData.address.addressLocality,
      addressRegion: businessData.address.addressRegion,
      addressCountry: businessData.address.addressCountry,
    },
    geo: {
      latitude: businessData.geo.latitude.toString(),
      longitude: businessData.geo.longitude.toString(),
    },
    openingHours: businessData.openingHours,
    priceRange: businessData.priceRange,
  } : undefined;

  // تحضير بيانات الـ Service JSON-LD إذا كانت متوفرة
  const serviceProps = serviceData ? {
    name: serviceData.name,
    description: serviceData.description,
    provider: {
      name: serviceData.provider.name,
      url: serviceData.provider.url,
    },
    areaServed: serviceData.areaServed,
    serviceType: serviceData.serviceType,
  } : undefined;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: title,
          description: description,
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          siteName: "بشاير الخير لنقل الأثاث",
          type: ogType,
          locale: "ar_KW",
          article: publishedTime ? {
            publishedTime: publishedTime,
            modifiedTime: modifiedTime,
            authors: [author],
          } : undefined,
        }}
        twitter={{
          handle: twitterHandle,
          site: twitterHandle,
          cardType: 'summary_large_image',
        }}

        additionalMetaTags={[
          { name: 'keywords', content: keywords },
          { name: 'author', content: author },
          { name: 'publisher', content: publisher },
          { name: 'robots', content: robots },
          { name: 'googlebot', content: "index, follow" },
          { name: 'googlebot-news', content: "index, follow" },
          { name: 'googlebot-image', content: "index, follow" },
          { name: 'googlebot-video', content: "index, follow" },
          { name: 'googlebot-local', content: "index, follow" },
          { name: 'language', content: "Arabic" },
          { name: 'revisit-after', content: "7 days" },
          { name: 'rating', content: "general" },
          { name: 'mobile-web-app-capable', content: "yes" },
          { name: 'apple-mobile-web-app-capable', content: "yes" },
          { name: 'apple-mobile-web-app-status-bar-style', content: "default" },
          { name: 'apple-mobile-web-app-title', content: "بشاير الخير" },
          { name: 'format-detection', content: "telephone=no" },
          { name: 'theme-color', content: themeColor },
          ...(googleVerification ? [{ name: 'google-site-verification', content: googleVerification }] : []),
          ...(bingVerification ? [{ name: 'msvalidate.01', content: bingVerification }] : []),
          ...(yandexVerification ? [{ name: 'yandex-verification', content: yandexVerification }] : []),
        ]}
        additionalLinkTags={[
          { rel: 'icon', href: '/logo.png', type: 'image/png', sizes: '32x32' },
          { rel: 'icon', href: '/logo.png', type: 'image/png', sizes: '16x16' },
          { rel: 'apple-touch-icon', href: '/logo.png', sizes: '180x180' },
          { rel: 'manifest', href: manifestPath },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
        ]}
      />
      
      {/* بيانات JSON-LD للشركة المحلية */}
      {businessData && (
        <LocalBusinessJsonLd
          type="MovingCompany"
          id={canonicalUrl}
          name={businessData.name}
          description={businessData.description}
          url={businessData.url}
          telephone={businessData.telephone}
          address={{
            streetAddress: businessData.address.streetAddress,
            addressLocality: businessData.address.addressLocality,
            addressRegion: businessData.address.addressRegion,
            addressCountry: businessData.address.addressCountry,
          }}
          geo={{
            latitude: businessData.geo.latitude.toString(),
            longitude: businessData.geo.longitude.toString(),
          }}
          openingHours={businessData.openingHours.map(hours => {
            const [day, time] = hours.split(' ');
            const [opens, closes] = time.split('-');
            return {
              dayOfWeek: day,
              opens: opens,
              closes: closes,
            };
          })}
          priceRange={businessData.priceRange}
        />
      )}
    </>
  );
};

export default SEOHead;
