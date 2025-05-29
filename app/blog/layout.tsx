import { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react';

export const metadata: Metadata = {
  title: 'مدونة بشاير الخير لنقل الأثاث | نصائح ومقالات عن نقل العفش في الكويت',
  description: 'تصفح أحدث المقالات والنصائح حول نقل الأثاث وفك وتركيب وتغليف العفش في الكويت من خبراء شركة بشاير الخير',
  keywords: 'مدونة نقل عفش, نصائح نقل أثاث, مقالات نقل عفش الكويت, بشاير الخير للنقل, تغليف أثاث, فك وتركيب أثاث',
  openGraph: {
    title: 'مدونة بشاير الخير لنقل الأثاث | نصائح ومقالات عن نقل العفش في الكويت',
    description: 'تصفح أحدث المقالات والنصائح حول نقل الأثاث وفك وتركيب وتغليف العفش في الكويت من خبراء شركة بشاير الخير',
    images: [{ url: '/images/blog/blog-hero.jpg' }],
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div id="top"></div>
      <Navbar />
      <div className="blog-layout">
        {children}
      </div>
      <Footer />
    </>
  );
}
