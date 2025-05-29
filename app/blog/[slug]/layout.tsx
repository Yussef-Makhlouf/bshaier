import { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react';

// Props interface for the page
interface Props {
  params: Promise<{
    slug: string;
  }>;
  children: React.ReactNode;
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await the params Promise
  const unwrappedParams = await params;
  const post = blogPosts.find((post) => post.slug === unwrappedParams.slug);
  
  if (!post) {
    return {
      title: 'مقال غير موجود | بشاير الخير لنقل الأثاث',
      description: 'عفواً، المقال الذي تبحث عنه غير موجود.'
    };
  }
  
  return {
    title: `${post.title} | بشاير الخير لنقل الأثاث`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen  ">
        {children}
      </main>
      <Footer />
    </>
  );
}
