import { Metadata } from 'next';
import { blogPosts } from '@/app/data/blog-posts';
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
    keywords: post.tags,
    alternates: {
      canonical: `https://www.bashir-mover.com/blog/${post.slug}`,
    },
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      site: "@bashir_mover",
      creator: "@bashir_mover"
    },
    icons: {
      icon: '/favicon.ico',
    },
    manifest: '/site.webmanifest',
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    authors: [
      {
        name: "بشاير الخير",
        url: "https://www.bashir-mover.com",
      },
    ],
    creator: "بشاير الخير",
    publisher: "بشاير الخير",
    category: "نقل عفش",
  };
}

export default function BlogPostLayout({ children }: Props) {
  return (
    <>
      <main className="min-h-screen  ">
        {children}
      </main>
    </>
  );
}
