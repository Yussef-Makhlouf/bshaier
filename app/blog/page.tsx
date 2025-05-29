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


// Sample blog posts data - this would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'نصائح لتغليف الأثاث الحساس أثناء النقل',
    excerpt: 'تعرف على أفضل الطرق لتغليف الأثاث الحساس والقطع الثمينة لحمايتها أثناء النقل من الخدوش والكسر.',
    content: 'محتوى المقال الكامل هنا...',
    date: '15 أبريل 2023',
    readTime: '5 دقائق',
    image: '/images/blog/packaging-furniture.jpg',
    category: 'نصائح وإرشادات',
    tags: ['تغليف أثاث', 'حماية العفش', 'نقل آمن'],
    featured: true,
    slug: 'tips-for-packing-sensitive-furniture'
  },
  {
    id: 2,
    title: 'كيف تختار شركة نقل أثاث موثوقة في الكويت',
    excerpt: 'دليل شامل لاختيار شركة نقل أثاث موثوقة في الكويت، مع النقاط الهامة التي يجب مراعاتها قبل التعاقد.',
    content: 'محتوى المقال الكامل هنا...',
    date: '3 مارس 2023',
    readTime: '7 دقائق',
    image: '/images/blog/choosing-moving-company.jpg',
    category: 'دليل المستهلك',
    tags: ['اختيار شركة نقل', 'شركات نقل الكويت', 'نصائح للعملاء'],
    featured: true,
    slug: 'how-to-choose-reliable-moving-company'
  },
  {
    id: 3,
    title: 'أفضل طرق ترتيب الأثاث في المنزل الجديد',
    excerpt: 'تعرف على أفضل الطرق لترتيب الأثاث في منزلك الجديد بطريقة عملية وجمالية تناسب مساحة المنزل.',
    content: 'محتوى المقال الكامل هنا...',
    date: '20 فبراير 2023',
    readTime: '6 دقائق',
    image: '/images/blog/furniture-arrangement.jpg',
    category: 'ديكور وترتيب',
    tags: ['ترتيب أثاث', 'ديكور منزلي', 'تنظيم المساحات'],
    featured: false,
    slug: 'best-ways-to-arrange-furniture'
  },
  {
    id: 4,
    title: 'دليل شامل لفك وتركيب غرف النوم بأمان',
    excerpt: 'خطوات تفصيلية لفك وتركيب غرف النوم بطريقة آمنة وسليمة تحافظ على جودة الأثاث وتمنع أي ضرر.',
    content: 'محتوى المقال الكامل هنا...',
    date: '5 يناير 2023',
    readTime: '8 دقائق',
    image: '/images/blog/bedroom-assembly.jpg',
    category: 'فك وتركيب',
    tags: ['غرف نوم', 'فك وتركيب', 'صيانة الأثاث'],
    featured: false,
    slug: 'guide-to-bedroom-disassembly'
  },
  {
    id: 5,
    title: 'أهم النصائح للتعامل مع الأثاث الثقيل أثناء النقل',
    excerpt: 'نصائح عملية للتعامل مع قطع الأثاث الثقيلة والضخمة أثناء عملية النقل لتجنب الإصابات والأضرار.',
    content: 'محتوى المقال الكامل هنا...',
    date: '10 ديسمبر 2022',
    readTime: '5 دقائق',
    image: '/images/blog/heavy-furniture.jpg',
    category: 'نصائح وإرشادات',
    tags: ['أثاث ثقيل', 'نقل آمن', 'تقنيات الرفع'],
    featured: false,
    slug: 'tips-for-handling-heavy-furniture'
  },
  {
    id: 6,
    title: 'كيفية تخزين الأثاث لفترات طويلة دون تلف',
    excerpt: 'دليل متكامل لتخزين الأثاث والعفش لفترات طويلة مع الحفاظ على جودته وحمايته من التلف والرطوبة.',
    content: 'محتوى المقال الكامل هنا...',
    date: '25 نوفمبر 2022',
    readTime: '6 دقائق',
    image: '/images/blog/furniture-storage.jpg',
    category: 'تخزين',
    tags: ['تخزين أثاث', 'حماية من الرطوبة', 'تخزين طويل المدى'],
    featured: true,
    slug: 'long-term-furniture-storage'
  },
];

// Extract unique categories
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

// Extract featured posts
const featuredPosts = blogPosts.filter(post => post.featured);

export default function BlogPage() {
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [visiblePosts, setVisiblePosts] = useState(6); // Number of posts to show initially
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
        post.title.includes(query) || 
        post.excerpt.includes(query) || 
        post.tags.some((tag: string) => tag.includes(query)) ||
        post.category.includes(query)
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
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-right space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                مدونة بشاير الخير <span className="text-primary">لنقل الأثاث</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] mr-auto">
                نصائح وإرشادات ومقالات متخصصة في مجال نقل وتغليف وتخزين الأثاث في الكويت
              </p>
              <div className="flex items-center justify-end gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="gap-2 bg-gradient-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={scrollToPosts}
                >
                  <span>تصفح المقالات</span>
                  <ArrowLeft className="h-4 w-4 animate-bounce-slow" />
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/blog/blog-hero.jpg" 
                alt="مدونة بشاير الخير لنقل الأثاث" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur-sm z-10 shadow-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-[400px]">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="ابحث في المدونة..." 
                className="pl-3 pr-10 text-right focus:ring-2 focus:ring-primary/50 transition-all" 
                value={searchQuery}
                onChange={handleSearch}
              />
              {searchQuery.trim() !== '' && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6" 
                    onClick={() => setSearchQuery('')}
                  >
                    <span className="sr-only">مسح البحث</span>
                    ×
                  </Button>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
              <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-lg">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">تصفية حسب:</span>
              </div>
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => document.getElementById(category)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          {searchQuery.trim() !== '' && filteredPosts.length === 0 && (
            <div className="mt-4 text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-muted-foreground">لم يتم العثور على نتائج لـ "{searchQuery}"</p>
            </div>
          )}
          {searchQuery.trim() !== '' && filteredPosts.length > 0 && (
            <div className="mt-4 text-right">
              <p className="text-sm text-muted-foreground">تم العثور على {filteredPosts.length} نتيجة لـ "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-end text-right mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">المقالات المميزة</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Post */}
            {featuredPosts[0] && (
              <div className="lg:col-span-2 group">
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-4">
                  <Image 
                    src={featuredPosts[0].image || "/placeholder.svg?height=400&width=800"} 
                    alt={featuredPosts[0].title} 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 p-6 text-white">
                    <Badge className="mb-3">{featuredPosts[0].category}</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{featuredPosts[0].title}</h3>
                    <div className="flex items-center gap-4 text-sm opacity-90">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{featuredPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Secondary Featured Posts */}
            <div className="lg:col-span-1 space-y-8">
              {featuredPosts.slice(1, 3).map((post) => (
                <div key={post.id} className="group">
                  <div className="relative h-[180px] rounded-xl overflow-hidden mb-4">
                    <Image 
                      src={post.image || "/placeholder.svg?height=180&width=400"} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 p-4 text-white">
                      <Badge className="mb-2" variant="secondary">{post.category}</Badge>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <div className="flex items-center gap-3 text-xs opacity-90">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
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
          <div className="flex flex-col items-end text-right mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">جميع المقالات</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>

          <Tabs defaultValue="all" className="mb-10">
            <div className="flex justify-center md:justify-end mb-6 overflow-x-auto pb-2 w-full">
              <TabsList className="flex-wrap sm:flex-nowrap overflow-x-auto max-w-full scrollbar-hide px-1 py-1 gap-1 bg-muted/50 shadow-inner">
                <TabsTrigger 
                  value="all" 
                  className="whitespace-nowrap min-w-fit text-xs sm:text-sm md:text-base px-2 sm:px-3 py-1 rounded-md transition-all duration-300 hover:bg-primary/20"
                >
                  الكل
                </TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category} 
                    className="whitespace-nowrap min-w-fit text-xs sm:text-sm md:text-base px-2 sm:px-3 py-1 rounded-md transition-all duration-300 hover:bg-primary/20"
                    id={category}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {(searchQuery.trim() !== '' ? filteredPosts : blogPosts).slice(0, visiblePosts).map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.id}>
                    <Card className="text-right h-full overflow-hidden group hover:border-primary/50 transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg?height=200&width=400"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                          {post.category}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                        <CardDescription className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarDays className="h-3 w-3" />
                            {post.date}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">+{post.tags.length - 2}</Badge>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1 hover:text-primary">
                          <span>اقرأ المزيد</span>
                          <ArrowLeft className="h-3 w-3" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {(searchQuery.trim() !== '' ? filteredPosts : blogPosts)
                    .filter((post) => post.category === category)
                    .slice(0, visiblePosts)
                    .map((post) => (
                      <Link href={`/blog/${post.slug}`} key={post.id}>
                        <Card className="text-right h-full overflow-hidden group hover:border-primary/50 transition-all">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg?height=200&width=400"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105 duration-300"
                            />
                            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                              {post.category}
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                            <CardDescription className="flex items-center justify-between text-xs">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {post.readTime}
                              </span>
                              <span className="flex items-center gap-1">
                                <CalendarDays className="h-3 w-3" />
                                {post.date}
                              </span>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center">
                            <div className="flex gap-1">
                              {post.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {post.tags.length > 2 && (
                                <Badge variant="outline" className="text-xs">+{post.tags.length - 2}</Badge>
                              )}
                            </div>
                            <Button variant="ghost" size="sm" className="gap-1 hover:text-primary">
                              <span>اقرأ المزيد</span>
                              <ArrowLeft className="h-3 w-3" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex justify-center mt-12">
            {visiblePosts < (searchQuery.trim() !== '' ? filteredPosts.length : blogPosts.length) && (
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 hover:bg-primary/10 transition-all duration-300 group"
                onClick={handleLoadMore}
              >
                <span>تحميل المزيد من المقالات</span>
                <ChevronDown className="h-4 w-4 group-hover:animate-bounce-slow" />
              </Button>
            )}
          </div>
        </div>
      </section>

  
    </main>
  );
}
