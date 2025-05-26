import React from 'react';
import Head from 'next/head';
import { LocalBusinessJsonLd, ServiceJsonLd } from './json-ld';

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
  alternateLanguages = [],
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
  return (
    <>
      {/* JSON-LD Structured Data */}
      {businessData && (
        <LocalBusinessJsonLd 
          name={businessData.name}
          description={businessData.description}
          url={businessData.url}
          telephone={businessData.telephone}
          address={businessData.address}
          geo={businessData.geo}
          openingHours={businessData.openingHours}
          priceRange={businessData.priceRange}
        />
      )}
      
      {serviceData && (
        <ServiceJsonLd 
          name={serviceData.name}
          description={serviceData.description}
          provider={serviceData.provider}
          areaServed={serviceData.areaServed}
          serviceType={serviceData.serviceType}
        />
      )}
      
      <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Arabic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="ar_KW" />
      <meta property="og:site_name" content="بشاير الخير لنقل الأثاث" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content={twitterHandle} />
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/logo.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="googlebot" content="index, follow" />
      <meta name="googlebot-news" content="index, follow" />
      <meta name="googlebot-image" content="index, follow" />
      <meta name="googlebot-video" content="index, follow" />
      <meta name="googlebot-local" content="index, follow" />
      <meta name="canonical" content={canonicalUrl} />
      {/* Additional SEO Enhancements */}
      {/* <meta name="revisit-after" content="7 days" /> */}
      <meta name="rating" content="general" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="بشاير الخير" />
      
      {/* Preconnect to important domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Alternate Languages */}
      {alternateLanguages.map((lang) => (
        <link key={lang.locale} rel="alternate" hrefLang={lang.locale} href={lang.url} />
      ))}
      
      {/* Article Metadata (if applicable) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {author && <meta name="author" content={author} />}
      {publisher && <meta name="publisher" content={publisher} />}
      
      {/* Site Verification Tags */}
      {googleVerification && <meta name="google-site-verification" content={googleVerification} />}
      {bingVerification && <meta name="msvalidate.01" content={bingVerification} />}
      {yandexVerification && <meta name="yandex-verification" content={yandexVerification} />}
      
      {/* PWA Related */}
      <meta name="theme-color" content={themeColor} />
      <link rel="manifest" href={manifestPath} />
    </Head>
  </>
  );
};

export default SEOHead;
