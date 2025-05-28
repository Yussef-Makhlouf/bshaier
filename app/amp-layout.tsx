import type React from "react"
import "./globals.css"
import { Alexandria } from "next/font/google"

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-alexandria",
})

export const metadata = {
  title: "بشاير الخير لنقل الأثاث - خدمات نقل الأثاث المميزة في جميع مناطق الكويت",
  description:
    "أفضل شركة نقل عفش في الكويت ✓ خدمة 24 ساعة ✓ أسعار تنافسية ✓ فك وتركيب وتغليف احترافي ✓ نقل آمن وسريع لجميع مناطق الكويت: السالمية، حولي، الفروانية، الجهراء، الأحمدي وجميع المناطق. اتصل الآن!",
  keywords:
    "نقل أثاث, نقل اثاث, شركة نقل أثاث الكويت, فك وتركيب اثاث, تغليف اثاث, تخزين اثاث, نقل أثاث رخيص, افضل شركة نقل أثاث",
    
}

export default function AMPLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" amp="true">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <link rel="canonical" href="https://bashir-mover.com" />
        <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
        <noscript>
          <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
        </noscript>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
        <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
        <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
        <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
        <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
        <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
        
        {/* AMP Custom Styles */}
        <style amp-custom>{`
          :root {
            --font-alexandria: ${alexandria.style.fontFamily};
          }
          body {
            font-family: var(--font-alexandria);
            direction: rtl;
            text-align: right;
          }
          .amp-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .header {
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 10;
          }
          .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #4a90e2;
          }
          .hero {
            background-color: #f5f8ff;
            padding: 2rem 0;
            text-align: center;
          }
          .hero h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #333;
          }
          .hero p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 1.5rem;
          }
          .cta-button {
            background-color: #4a90e2;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
          }
          .section {
            padding: 2rem 0;
          }
          .section-title {
            font-size: 1.75rem;
            text-align: center;
            margin-bottom: 2rem;
            color: #333;
          }
          .service-card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .service-card h3 {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
            color: #4a90e2;
          }
          .footer {
            background-color: #333;
            color: white;
            padding: 2rem 0;
            text-align: center;
          }
          .footer-links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1rem;
          }
          .footer-links a {
            color: white;
            text-decoration: none;
          }
          .copyright {
            font-size: 0.875rem;
            opacity: 0.8;
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
