import React from 'react';
import { useAmp } from 'next/amp';
import Head from 'next/head';

// Declare AMP components directly in this file
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-sidebar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        id?: string;
        layout?: string;
        side?: 'left' | 'right';
      }, HTMLElement>;
      'amp-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'amp-carousel': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        id?: string;
        width?: string | number;
        height?: string | number;
        layout?: string;
        type?: string;
        autoplay?: boolean | string;
        delay?: string | number;
        loop?: boolean | string;
      }, HTMLElement>;
      'amp-analytics': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        type?: string;
        'data-credentials'?: string;
      }, HTMLElement>;
      'amp-img': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        alt?: string;
        src?: string;
        width?: string | number;
        height?: string | number;
        layout?: string;
      }, HTMLElement>;
    }
  }
}

export const config = {
  amp: true
};

export default function AMP() {
  const isAmp = useAmp();

  return (
    <>
      <Head>
        <title>بشاير الخير لنقل الأثاث - خدمات نقل الأثاث المميزة في جميع مناطق الكويت</title>
        <meta name="description" content="أفضل شركة نقل عفش في الكويت ✓ خدمة 24 ساعة ✓ أسعار تنافسية ✓ فك وتركيب وتغليف احترافي ✓ نقل آمن وسريع لجميع مناطق الكويت" />
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
          body {
            font-family: 'Alexandria', sans-serif;
            direction: rtl;
            text-align: right;
            margin: 0;
            padding: 0;
            color: #333;
            line-height: 1.6;
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
          .menu-button {
            background: none;
            border: none;
            cursor: pointer;
            color: #333;
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
          amp-accordion section[expanded] h4 {
            background-color: #f5f8ff;
          }
          amp-accordion h4 {
            padding: 1rem;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin: 0.5rem 0;
            font-size: 1rem;
            font-weight: 500;
          }
          amp-accordion p {
            padding: 1rem;
            margin: 0;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 4px 4px;
          }
          .area-tag {
            display: inline-block;
            background: #4a90e2;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            margin: 0.25rem;
          }
          .contact-form input, .contact-form textarea {
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 1rem;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          .contact-form label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
          }
        `}</style>
      </Head>

      <body>
        {/* Header */}
        <header className="header">
          <div className="amp-container header-content">
            <div className="logo">بشاير الخير</div>
            <button on="tap:sidebar.toggle" className="menu-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </header>

        {/* Sidebar */}
        <amp-sidebar id="sidebar" layout="nodisplay" side="right">
          <div style={{ padding: '1rem' }}>
            <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
              <button on="tap:sidebar.close" style={{ background: 'none', border: 'none' }}>
                ✕
              </button>
            </div>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ margin: '0.5rem 0' }}><a href="/">الرئيسية</a></li>
                <li style={{ margin: '0.5rem 0' }}><a href="/services">خدماتنا</a></li>
                <li style={{ margin: '0.5rem 0' }}><a href="/about">من نحن</a></li>
                <li style={{ margin: '0.5rem 0' }}><a href="/areas">مناطق الخدمة</a></li>
                <li style={{ margin: '0.5rem 0' }}><a href="/contact">اتصل بنا</a></li>
              </ul>
            </nav>
          </div>
        </amp-sidebar>

        {/* Hero Section */}
        <section className="hero">
          <div className="amp-container">
            <h1>بشاير الخير لنقل الأثاث</h1>
            <p>خدمات نقل الأثاث المميزة في جميع مناطق الكويت</p>
            <a href="tel:+96500000000" className="cta-button">اتصل الآن</a>
          </div>
        </section>

        {/* Services Section */}
        <section className="section">
          <div className="amp-container">
            <h2 className="section-title">خدماتنا</h2>
            
            <div className="service-card">
              <h3>فك وتركيب الأثاث</h3>
              <p>نقدم خدمات فك وتركيب الأثاث بأيدي فنيين محترفين مع ضمان سلامة جميع القطع.</p>
            </div>
            
            <div className="service-card">
              <h3>تغليف الأثاث</h3>
              <p>نستخدم أفضل مواد التغليف لحماية الأثاث من الخدوش والكسر أثناء النقل.</p>
            </div>
            
            <div className="service-card">
              <h3>نقل آمن</h3>
              <p>سيارات مجهزة خصيصاً لنقل الأثاث بأمان تام مع ضمان وصوله بحالة ممتازة.</p>
            </div>
            
            <div className="service-card">
              <h3>تخزين الأثاث</h3>
              <p>مستودعات آمنة ومكيفة لتخزين الأثاث لفترات قصيرة أو طويلة حسب الحاجة.</p>
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="section" style={{ backgroundColor: '#f5f8ff' }}>
          <div className="amp-container">
            <h2 className="section-title">مناطق الخدمة</h2>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              نقدم خدماتنا في جميع مناطق الكويت بما في ذلك:
            </p>
            
            <div style={{ textAlign: 'center' }}>
              <span className="area-tag">السالمية</span>
              <span className="area-tag">حولي</span>
              <span className="area-tag">الفروانية</span>
              <span className="area-tag">الجهراء</span>
              <span className="area-tag">الأحمدي</span>
              <span className="area-tag">مبارك الكبير</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="amp-container">
            <h2 className="section-title">الأسئلة الشائعة</h2>
            
            <amp-accordion>
              <section>
                <h4>ما هي خدمات شركة بشاير الخير لنقل الأثاث؟</h4>
                <p>توفر شركة بشاير الخير خدمات متكاملة لنقل الأثاث تشمل: فك وتركيب الأثاث، تغليف الأثاث بمواد عالية الجودة، نقل آمن بسيارات مجهزة، تخزين الأثاث، وخدمات إضافية مثل تنظيف المفروشات.</p>
              </section>
              <section>
                <h4>كيف يمكنني حجز خدمة نقل الأثاث؟</h4>
                <p>يمكنك حجز خدمة نقل الأثاث من خلال الاتصال بنا على الرقم المخصص للحجز، أو من خلال موقعنا الإلكتروني عبر نموذج طلب الخدمة، أو عبر تطبيق الواتساب.</p>
              </section>
              <section>
                <h4>ما هي تكلفة خدمة نقل الأثاث؟</h4>
                <p>تختلف تكلفة نقل الأثاث حسب عدة عوامل منها: حجم الأثاث، المسافة بين المكانين، الخدمات الإضافية المطلوبة مثل الفك والتركيب والتغليف. يمكنك الحصول على تقدير مجاني للسعر من خلال التواصل معنا.</p>
              </section>
            </amp-accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" style={{ backgroundColor: '#f5f8ff' }}>
          <div className="amp-container">
            <h2 className="section-title">اتصل بنا</h2>
            
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <p>يمكنك التواصل معنا على مدار الساعة للحصول على خدماتنا</p>
              <a href="tel:+96500000000" className="cta-button" style={{ marginTop: '1rem' }}>اتصل الآن</a>
            </div>
            
            <form method="POST" action-xhr="https://example.com/form" target="_top" className="contact-form">
              <div>
                <label>الاسم</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>رقم الهاتف</label>
                <input type="tel" name="phone" required />
              </div>
              <div>
                <label>الرسالة</label>
                <textarea name="message" rows={4}></textarea>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="cta-button" style={{ border: 'none' }}>إرسال</button>
              </div>
              <div submit-success>
                <template type="amp-mustache">
                  <p style={{ color: 'green', textAlign: 'center' }}>تم إرسال رسالتك بنجاح، سنتواصل معك قريباً!</p>
                </template>
              </div>
              <div submit-error>
                <template type="amp-mustache">
                  <p style={{ color: 'red', textAlign: 'center' }}>حدث خطأ في إرسال الرسالة، يرجى المحاولة مرة أخرى.</p>
                </template>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="amp-container">
            <div className="footer-links">
              <a href="/">الرئيسية</a>
              <a href="/services">خدماتنا</a>
              <a href="/about">من نحن</a>
              <a href="/contact">اتصل بنا</a>
            </div>
            <p className="copyright">© 2025 بشاير الخير لنقل الأثاث. جميع الحقوق محفوظة.</p>
          </div>
        </footer>

        {/* AMP Analytics */}
        <amp-analytics type="gtag" data-credentials="include">
          <script type="application/json">
            {`
              {
                "vars": {
                  "gtag_id": "UA-XXXXXXXX-X",
                  "config": {
                    "UA-XXXXXXXX-X": { "groups": "default" }
                  }
                }
              }
            `}
          </script>
        </amp-analytics>
      </body>
    </>
  );
}
