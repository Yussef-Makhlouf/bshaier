"use client";
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import React from 'react';
import { CalendarDays, Clock, Share2, ArrowLeft, Facebook, Twitter, Linkedin, Copy, ChevronLeft, ChevronRight, Tag, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast, useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { usePathname } from 'next/navigation';
import { features, title } from 'process';
import { blogPosts } from '@/app/data/blog-posts';

// Define the type for blog posts to avoid TypeScript errors
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  slug: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
};
interface Props {
  params: Promise<{
    slug: string;
  }>;
  slug?: string;
};

// Metadata is now handled in layout.tsx
function getRelatedPosts(currentPost: typeof blogPosts[0]) {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, 3);
}

// Get previous and next posts
function getAdjacentPosts(currentPost: typeof blogPosts[0]) {
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date.split(' ').reverse().join('-'));
    const dateB = new Date(b.date.split(' ').reverse().join('-'));
    return dateB.getTime() - dateA.getTime();
  });
  
  const currentIndex = sortedPosts.findIndex(post => post.id === currentPost.id);
  
  return {
    previousPost: currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null,
    nextPost: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null
  };
}

// Share post function
function sharePost(platform: string, post: typeof blogPosts[0], url: string) {
  const title = encodeURIComponent(post.title);
  const shareUrl = encodeURIComponent(url);
  
  let shareLink = '';
  
  switch (platform) {
    case 'facebook':
      shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
      break;
    case 'twitter':
      shareLink = `https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`;
      break;
    case 'linkedin':
      shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
      break;
  }
  
  if (shareLink) {
    window.open(shareLink, '_blank', 'width=600,height=400');
  }
}

export default function BlogPostPage({ params }: Props) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params as any) as { slug: string };
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');
  
  // Set base URL on client side
  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);
  
  // Find the post by slug
  const post = blogPosts.find((post) => post.slug === unwrappedParams.slug);
  
  // If post not found, return 404
  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(post);
  
  // Get previous and next posts
  const { previousPost, nextPost } = getAdjacentPosts(post);
  
  // Copy link to clipboard
  const copyToClipboard = () => {
    const url = `${baseUrl}${pathname}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast({
        title: "تم نسخ الرابط",
        description: "تم نسخ رابط المقال إلى الحافظة",
      });
      
      setTimeout(() => setCopied(false), 3000);
    });
  };
  
  // Handle share
  const handleShare = (platform: string) => {
    const url = `${baseUrl}${pathname}`;
    sharePost(platform, post, url);
  };
  
  // Handle quote request
  const handleQuoteRequest = () => {
    router.push('/contact');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Toaster />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center gap-2 mb-4">
              <Badge className="text-sm">{post.category}</Badge>
              <Badge variant="outline" className="text-sm">{post.date}</Badge>
            </div>
            <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold tracking-tight ">
              {post.title}
            </h1>
            <p className="text-lg text-black max-w-[800px] mx-auto">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src={post.image || "/placeholder.svg?height=500&width=1000"} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author Info */}
      {/* <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between p-6 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                 
               
                </Avatar>
            
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Article Content */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">مشاركة المقال</h3>
                  <div className="flex flex-col gap-3">
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2"
                      onClick={() => handleShare('facebook')}
                    >
                      <Facebook />
                      <span>مشاركة على فيسبوك</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2"
                      onClick={() => handleShare('twitter')}
                    >
                      <Twitter />
                      <span>مشاركة على تويتر</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2"
                      onClick={() => handleShare('linkedin')}
                    >
                      <Linkedin />
                      <span>مشاركة على لينكد إن</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2"
                      onClick={copyToClipboard}
                    >
                      {copied ? <Check /> : <Copy />}
                      <span>{copied ? "تم نسخ الرابط" : "نسخ الرابط"}</span>
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">الوسوم</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">احصل على عرض سعر</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    تواصل معنا الآن للحصول على عرض سعر مجاني لخدمات نقل الأثاث
                  </p>
                  <Button 
                    className="w-full"
                    onClick={handleQuoteRequest}
                  >
                    طلب عرض سعر
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <article className="prose prose-lg max-w-none text-right prose-headings:text-right prose-p:text-right prose-ul:text-right prose-ol:text-right rtl">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Tags */}
              <div className="mt-12 flex items-center gap-3">
                <Tag className="h-5 w-5 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Post Navigation */}
              <div className="mt-12">
                <Separator className="mb-8" />
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  {previousPost ? (
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => router.push(`/blog/${previousPost.slug}`)}
                    >
                      <ChevronRight />
                      <span>المقال السابق</span>
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex items-center gap-2" disabled>
                      <ChevronRight />
                      <span>المقال السابق</span>
                    </Button>
                  )}
                  
                  {nextPost ? (
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => router.push(`/blog/${nextPost.slug}`)}
                    >
                      <span>المقال التالي</span>
                      <ChevronLeft />
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex items-center gap-2" disabled>
                      <span>المقال التالي</span>
                      <ChevronLeft />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">مقالات ذات صلة</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="group" aria-label={`تصفح مقالة ${relatedPost.title}`} title={`تصفح مقالة ${relatedPost.title}`}>
                  <Card className="text-right h-full overflow-hidden group hover:border-primary/50 transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg?height=200&width=400"}
                        alt={relatedPost.title}
                        fill
                        loading='lazy'
                        className="object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                        {relatedPost.category}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{relatedPost.title}</CardTitle>
                      <CardDescription className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {relatedPost.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarDays className="h-3 w-3" />
                          {relatedPost.date}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-black line-clamp-3">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">هل تحتاج إلى خدمات نقل أثاث احترافية؟</h2>
            <p className="text-black text-lg">
              شركة بشاير الخير توفر لك خدمات نقل وفك وتركيب وتغليف الأثاث بأعلى مستويات الجودة وأفضل الأسعار
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="https://wa.me/96590905157" aria-label="تواصل عبر الواتساب" title="تواصل عبر الواتساب">  
              <Button 
                size="lg" 
                className="gap-2"
                
              >
                <span>تواصل معنا الآن</span>
                <ArrowLeft />
              </Button>
              </Link>
                <Button 
                variant="outline" 
                size="lg"
                onClick={handleQuoteRequest}
                title='طلب عرض سعر'
              >
                طلب عرض سعر
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
