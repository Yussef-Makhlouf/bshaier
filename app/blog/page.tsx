"use client"
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { CalendarDays, Clock, Search, Tag, ArrowLeft, ChevronDown, Filter, Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { blogPosts } from '@/app/data/blog-posts';

// Extract unique categories
const categories = Array.from(new Set(blogPosts.map(post => post.category).filter(Boolean))) as string[];

// Extract featured posts
const featuredPosts = blogPosts.filter(post => post.featured);

export default function BlogPage() {
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [visiblePosts, setVisiblePosts] = useState(25); // Number of posts to show initially
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Handle search functionality
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter((post) => 
        post.title?.includes(query) || 
        post.excerpt?.includes(query) || 
        post.tags?.some((tag: string) => tag.includes(query)) ||
        post.category?.includes(query)
      );
      setFilteredPosts(filtered);
    }
  };

  // Handle load more functionality
  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      // In a real app, you would send this to your API
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  // Scroll to blog posts section
  const scrollToPosts = () => {
    document.getElementById('blog-posts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20" dir="rtl" lang="ar">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-right space-y-6">
              <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold tracking-tight leading-relaxed" title='مدونة بشاير الخير'>
                مدونة بشاير الخير <span className="text-primary">لنقل الأثاث</span>
              </h1>
              <p className="text-2xl text-black max-w-[600px] mr-auto leading-loose">
                نصائح وإرشادات ومقالات متخصصة في مجال نقل وتغليف وتخزين الأثاث في الكويت
              </p>
              <div className="flex items-center justify-end gap-6 pt-6">
                <Button 
                  size="lg" 
                  className="gap-3 bg-gradient-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4 text-lg"
                  onClick={scrollToPosts}
                  aria-label='تصفح المقالات'
                  title='تصفح المقالات'
                >
                  <span>تصفح المقالات</span>
                  <ArrowLeft className="h-5 w-5 animate-bounce-slow" />
                </Button>
              </div>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/blog/blog-hero.avif" 
                alt="مدونة بشاير الخير لنقل الأثاث" 
                fill 
                className="object-cover"
                priority
                aria-label='مدونة بشاير الخير لنقل الاثاث'
              />
            </div>
          </div>
        </div>
      </section>



      {/* Featured Posts */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
       
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Featured Post */}
            {featuredPosts[0] && (
              <div className="lg:col-span-2 group">
                <div className="relative h-[420px] rounded-2xl overflow-hidden mb-6 shadow-xl">
                  <Image 
                    src={featuredPosts[0].image || "/placeholder.svg?height=400&width=800"} 
                    alt={featuredPosts[0].title} 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                    loading='lazy'
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 p-8 text-white">
                    <Badge className="mb-4 px-4 py-2 text-lg rounded-lg bg-primary/80">{featuredPosts[0].category}</Badge>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-relaxed">{featuredPosts[0].title}</h3>
                  </div>
                </div>
              </div>
            )}
            {/* Secondary Featured Posts */}
            <div className="lg:col-span-1 space-y-10">
              {featuredPosts.slice(1, 3).map((post) => (
                <div key={post.id} className="group">
                  <div className="relative h-[200px] rounded-2xl overflow-hidden mb-4 shadow-md">
                    <Image 
                      src={post.image || "/placeholder.svg?height=180&width=400"} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                      loading='lazy'
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 p-5 text-white">
                      <Badge className="mb-2 px-3 py-1.5 text-base rounded-md bg-secondary/80" variant="secondary">{post.category}</Badge>
                      <h3 className="text-xl font-bold mb-2 leading-relaxed">{post.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section id="blog-posts" className="py-16 bg-muted/30 scroll-mt-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3 text-primary">جميع المقالات</h2>
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
          <Tabs defaultValue="all" className="mb-10">
        
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
                {(searchQuery.trim() !== '' ? filteredPosts : blogPosts).slice(0, visiblePosts).map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.id} className="block h-full" aria-label={`تصفح مقالة ${post.title}`} title={`تصفح مقالة ${post.title}`}>
                    <Card className="text-right h-full overflow-hidden group hover:border-primary/50 transition-all rounded-2xl shadow-md p-4 md:p-6 bg-card/90">
                      <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                        <Image
                          src={post.image || "/placeholder.svg?height=200&width=400"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105 duration-300"
                          loading='lazy'
                        />
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-lg">
                          {post.category}
                        </div>
                      </div>
                      <CardHeader className="pb-2 px-0">
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-xl font-bold leading-relaxed">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-0">
                        <p className="text-black line-clamp-3 text-base leading-loose">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center px-0 pt-4">
                        <div className="flex gap-2">
                          {post.tags?.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs px-3 py-1 rounded-md">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags && post.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs px-2 py-1 rounded-md">+{post.tags.length - 2}</Badge>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1 hover:text-primary text-base px-3 py-2">
                          <span>اقرأ المزيد</span>
                          <ArrowLeft className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(searchQuery.trim() !== '' ? filteredPosts : blogPosts)
                    .filter((post) => post.category === category)
                    .slice(0, visiblePosts)
                    .map((post) => (
                      <Link href={`/blog/${post.slug}`} key={post.id} className="block h-full" aria-label={`تصفح مقالة ${post.title}`} title={`تصفح مقالة ${post.title}`}>
                        <Card className="text-right h-full overflow-hidden group hover:border-primary/50 transition-all rounded-2xl shadow-md p-4 md:p-6 bg-card/90">
                          <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                            <Image
                              src={post.image || "/placeholder.svg?height=200&width=400"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105 duration-300"
                              loading='lazy'
                            />
                            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-lg">
                              {post.category}
                            </div>
                          </div>
                          <CardHeader className="pb-2 px-0">
                            <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-xl font-bold leading-relaxed">{post.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="px-0">
                            <p className="text-black line-clamp-3 text-base leading-loose">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center px-0 pt-4">
                            <div className="flex gap-2">
                              {post.tags?.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs px-3 py-1 rounded-md">
                                  {tag}
                                </Badge>
                              ))}
                              {post.tags?.length && post.tags?.length > 2 && (
                                <Badge variant="outline" className="text-xs px-2 py-1 rounded-md">+{post.tags?.length - 2}</Badge>
                              )}
                            </div>
                            <Button variant="ghost" size="sm" className="gap-1 hover:text-primary text-base px-3 py-2">
                              <span>اقرأ المزيد</span>
                              <ArrowLeft className="h-4 w-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <div className="flex justify-center mt-14">
            {visiblePosts < (searchQuery.trim() !== '' ? filteredPosts.length : blogPosts.length) && (
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-3 hover:bg-primary/10 transition-all duration-300 group px-8 py-4 text-lg rounded-xl"
                onClick={handleLoadMore}
                title='تحميل المزيد من المقالات'
              >
                <span>تحميل المزيد من المقالات</span>
                <ChevronDown className="h-5 w-5 group-hover:animate-bounce-slow" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
