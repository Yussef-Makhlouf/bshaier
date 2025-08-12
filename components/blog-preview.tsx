import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "نصائح لتغليف الأثاث الحساس أثناء النقل",
    excerpt: "تعرف على أفضل الطرق لتغليف الأثاث الحساس والقطع الثمينة لحمايتها أثناء النقل من الخدوش والكسر.",
    date: "15 أبريل 2023",
    image: "/blog/eco-friendly-moving.avif",
    category: "نصائح وإرشادات",
  },
  {
    id: 2,
    title: "كيف تختار شركة نقل أثاث موثوقة في الكويت",
    excerpt: "دليل شامل لاختيار شركة نقل أثاث موثوقة في الكويت، مع النقاط الهامة التي يجب مراعاتها قبل التعاقد.",
    date: "3 مارس 2023",
    image: "/blog/furniture-assembly.avif",
    category: "دليل المستهلك",
  },
  {
    id: 3,
    title: "أفضل طرق ترتيب الأثاث في المنزل الجديد",
    excerpt: "تعرف على أفضل الطرق لترتيب الأثاث في منزلك الجديد بطريقة عملية وجمالية تناسب مساحة المنزل.",
    date: "20 فبراير 2023",
    image: "/blog/furniture-storage copy.avif",
    category: "ديكور وترتيب",
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">المدونة</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">آخر المقالات والنصائح</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            اطلع على أحدث المقالات والنصائح المتعلقة بنقل الأثاث وترتيب المنزل
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="text-right card-hover">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-xs">
                  <CalendarDays className="h-3 w-3" />
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  اقرأ المزيد
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>


      </div>
    </section>
  )
}
