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

// Sample blog posts data - this would typically come from a CMS or API
const blogPosts = [
    {
      id: 1,
      title: 'نصائح لتغليف الأثاث الحساس أثناء النقل',
      excerpt: 'تعرف على أفضل الطرق لتغليف الأثاث الحساس والقطع الثمينة لحمايتها أثناء النقل من الخدوش والكسر.',
      content: `
        <h2>مقدمة في تغليف الأثاث الحساس</h2>
        <p>يُعد <a href="https://www.bashir-mover.com/">تغليف الأثاث الحساس</a> خطوة أساسية لضمان وصول القطع الثمينة بأمان أثناء عمليات النقل المختلفة. إن الأثاث الحساس مثل الزجاجيات، والمفروشات المصنوعة من المواد الناعمة يتطلب عناية خاصة لمنع الخدوش أو الكسر أثناء التحرك.</p>
        
        <h3>لماذا التغليف السليم مهم؟</h3>
        <p>التغليف الصحيح يحافظ على قيمة أثاثك ويقلل من مخاطر التلف المكلف، كما يسهل عملية النقل ويقلل الإجهاد. إذا كنت تخطط للاستعانة <a href="https://www.bashir-mover.com/">بشركة نقل أثاث في الكويت</a>، تأكد من خبرتهم في التعامل مع القطع الحساسة.</p>
  
        <h2>المواد الأساسية لتغليف الأثاث الحساس</h2>
        <ul>
          <li>ورق الفقاعات الهوائية (<strong>Bubble Wrap</strong>) وهو الأفضل لحماية القطع الزجاجية والسطوح الحساسة.</li>
          <li>صناديق كرتونية بأحجام مختلفة تناسب حجم كل قطعة.</li>
          <li>شريط لاصق قوي لتثبيت تغليف القطع.</li>
          <li>ورق تغليف ناعم لحماية الأسطح الداخلية.</li>
          <li>بطانيات وأقمشة ناعمة لتغليف الأثاث الكبير.</li>
          <li>فلين أو مواد عازلة للصدمات لملء الفراغات أثناء التعبئة.</li>
        </ul>
  
        <h2>خطوات تفصيلية لتغليف القطع الزجاجية والحساسة</h2>
        <ol>
          <li>نظف القطع جيدًا لتجنب وجود أوساخ أو غبار.</li>
          <li>لف القطعة بورق ناعم (ورق تغليف أو قماش) لامتصاص الصدمات الأولية.</li>
          <li>تغليف القطعة بطبقة مزدوجة من ورق الفقاعات الهوائية.</li>
          <li>وضع القطع في الصناديق الكرتونية مع وضع مواد عازلة بين كل قطعة وأخرى.</li>
          <li>ملء أي فراغات داخل الصناديق بمواد عازلة إضافية لمنع الحركة.</li>
          <li>إغلاق الصندوق بإحكام واستخدام شريط لاصق قوي.</li>
          <li>كتابة محتويات الصندوق بشكل واضح وعلامة "حسّاس" لتجنب التعامل الخاطئ.</li>
        </ol>
  
        <h2>نصائح إضافية لتغليف الأثاث الحساس</h2>
        <ul>
          <li>ابدأ بتغليف القطع الأصغر قبل الأكبر لتوفير الوقت والمساحة.</li>
          <li>لا تستخدم الكثير من الشريط اللاصق على الأثاث مباشرة لتجنب تلف السطح.</li>
          <li>استخدم حافظات زوايا لحماية الأطراف والخطوط الحساسة.</li>
          <li>احرص على تمييز الصناديق ذات المحتوى الحساس عند وضعها في الشاحنة.</li>
        </ul>
  
        <h2>كيف تساعدك <a href="https://www.bashir-mover.com/">شركة بشير للنقل والتغليف</a>؟</h2>
        <p>نحن في بشير موفر نمتلك خبرة واسعة في <a href="https://www.bashir-mover.com/">تغليف الأثاث الحساس أثناء النقل</a> باستخدام أحدث المواد وأفضل الطرق لضمان حماية أثاثك. فريقنا متخصص ومدرب على التعامل مع مختلف أنواع الأثاث والقطع القيمة.</p>
        <p>إذا كنت تبحث عن شركة نقل أثاث في الكويت توفر خدمات تغليف احترافية، لا تتردد بالاتصال بنا.</p>
  
        <h2>خاتمة</h2>
        <p>تغليف الأثاث الحساس يتطلب عناية ودقة لضمان الوصول بأمان. باستخدام المواد الصحيحة واتباع الخطوات المهنية، يمكنك الحفاظ على أثاثك في أفضل حالة أثناء النقل. لا تنسى اختيار شركة نقل أثاث محترفة مثل <a href="https://www.bashir-mover.com/">بشير للانتقال والتغليف</a> لضمان أعلى مستوى من الخدمة.</p>
      `,
      date: '15 أبريل 2023',
      readTime: '20 دقيقة',
      image: '/images/blog/packaging-furniture.jpg',
      category: 'نصائح وإرشادات',
      tags: ['تغليف أثاث', 'حماية العفش', 'نقل آمن', 'شركة نقل أثاث الكويت'],
      featured: true,
      slug: 'tips-for-packing-sensitive-furniture',
      author: {
        name: 'أحمد الكويتي',
        image: '/images/team/ahmed.jpg',
        role: 'خبير نقل وتغليف'
      }
    },
    {
      id: 2,
      title: 'كيف تختار شركة نقل أثاث موثوقة في الكويت',
      excerpt: 'دليل شامل لاختيار شركة نقل أثاث موثوقة في الكويت، مع النقاط الهامة التي يجب مراعاتها قبل التعاقد.',
      content: `
        <h2>مقدمة</h2>
        <p>عند البحث عن <a href="https://www.bashir-mover.com/">شركة نقل أثاث موثوقة في الكويت</a>، يواجه الكثيرون تحديًا في اختيار الشركة الأنسب التي توفر أمانًا واتقانًا في الخدمة. هذا المقال يرشدك إلى أهم المعايير لاختيار أفضل شركة نقل أثاث بما يضمن سلامة ممتلكاتك.</p>
  
        <h2>لماذا يعتبر اختيار شركة نقل أثاث ذات سمعة جيدة أمرًا حاسمًا؟</h2>
        <p>الشركات ذات السمعة الطيبة تعكس جودة خدماتها والتزامها مع العملاء، مما يقلل احتمال حدوث أضرار أو فقدان أثاثك.</p>
  
        <h2>عوامل يجب النظر فيها لاختيار شركة نقل أثاث مميزة</h2>
        <h3>1. التراخيص والتأمين</h3>
        <p>تأكد من أن الشركة مرخصة رسميًا، وتوفر تأمينًا كاملًا يغطي الأضرار المحتملة على الأثاث أثناء النقل.</p>
  
        <h3>2. الخبرة والمهارة</h3>
        <p>تجربة الشركة في السوق تدل على قدرتها في التعامل مع جميع أنواع الأثاث، وخاصة القطع الحساسة والقيمة.</p>
  
        <h3>3. تقييمات العملاء السابقين</h3>
        <p>يمكنك الاطلاع على مراجعات العملاء والتقييمات عبر الإنترنت أو من خلال أصدقاء وعائلة لتحديد مدى رضا العملاء عن الشركة.</p>
  
        <h3>4. المواد والمعدات المستخدمة</h3>
        <p>استخدم شركة توفر مواد تغليف عالية الجودة مثل <a href="https://www.bashir-mover.com/">ورق الفقاعات</a> والبطانيات الواقية لضمان سلامة أثاثك.</p>
  
        <h3>5. توفير خدمات شاملة</h3>
        <p>اختيار الشركة التي تقدم خدمات متعددة مثل التغليف، الفك والتركيب، والتخزين يسهل عليك العملية بالكامل.</p>
  
        <h3>6. الشفافية في الأسعار</h3>
        <p>اطلب عرض تكلفة مفصل لتجنب الرسوم الخفية أو التكاليف المضافة غير المتوقعة.</p>
  
        <h2>كيفية التأكد من كفاءة الشركة قبل التعاقد</h2>
        <ol>
          <li>اطلب زيارة من فريق الشركة لتقييم الأثاث ومساحة السكن.</li>
          <li>تحقق من سرعة الاستجابة وجودة تواصل موظفيها.</li>
          <li>اسأل عن تجهيزات النقل وسنوات الخبرة.</li>
          <li>راجع وثائق التأمين والترخيص الخاصة بها.</li>
        </ol>
  
        <h2>لماذا تختار <a href="https://www.bashir-mover.com/">بشير للنقل والتغليف في الكويت</a>؟</h2>
        <p>نقدم خدمات نقل أثاث احترافية مع خبرة سنوات طويلة في السوق الكويتي، حيث نوفر تأمينًا كاملاً، مواد تغليف حديثة، وفرق عمل مدربة لضمان نقل أثاثك بأمان وسلاسة.</p>
        <p>عبر موقعنا <a href="https://www.bashir-mover.com/">https://www.bashir-mover.com/</a> يمكنك التعرف أكثر على خدماتنا وطلب عرض أسعار مخصص.</p>
  
        <h2>خاتمة</h2>
        <p>اختيار الشركة المناسبة يُحدث فرقًا كبيرًا في جودة تجربة النقل. باتباع هذا الدليل واختيار <a href="https://www.bashir-mover.com/">شركة نقل أثاث موثوقة</a>، ستضمن انتقالًا سلسًا وآمنًا لممتلكاتك.</p>
      `,
      date: '3 مارس 2023',
      readTime: '22 دقيقة',
      image: '/images/blog/choosing-moving-company.jpg',
      category: 'دليل المستهلك',
      tags: ['اختيار شركة نقل', 'شركات نقل الكويت', 'نصائح للعملاء', 'نقل أثاث الكويت'],
      featured: true,
      slug: 'how-to-choose-reliable-moving-company',
      author: {
        name: 'محمد العنزي',
        image: '/images/team/mohammed.jpg',
        role: 'مدير العمليات'
      }
    },
    {
      id: 3,
      title: 'أفضل طرق ترتيب الأثاث في المنزل الجديد',
      excerpt: 'تعرف على أفضل الطرق لترتيب الأثاث في منزلك الجديد بطريقة عملية وجمالية تناسب مساحة المنزل.',
      content: `
        <h2>مقدمة</h2>
        <p>الانتقال إلى منزل جديد يعد فرصة مثالية لإعادة ترتيب أثاثك بطريقة تناسب ذوقك ومساحات المنزل. تعرف على الطرق المثلى لترتيب الأثاث بشكل عملي وجمالي مع نصائح من <a href="https://www.bashir-mover.com/">شركة بشير للنقل والتغليف</a>.</p>
  
        <h2>أهمية ترتيب الأثاث بطريقة صحيحة</h2>
        <p>ترتيب الأثاث بشكل مناسب يجعل المنزل أكثر راحة ويساعدك على استغلال المساحات بشكل ذكي، كما يسهل الحركة داخل المنزل ويوفر بيئة مناسبة للعائلة.</p>
  
        <h2>خطوات عملية لترتيب الأثاث في المنزل</h2>
        <h3>1. قياس المكان والمساحات</h3>
        <p>ابدأ بقياس كل غرفة ومساحة متوفرة لتحديد الأثاث المناسب الذي يمكن وضعه دون إعاقة الحركة.</p>
  
        <h3>2. رسم مخطط تخطيطي</h3>
        <p>قم برسم تخطيط مبدئي يوضح أماكن وضع قطع الأثاث الرئيسية مع مراعاة مداخل الأبواب والنوافذ.</p>
  
        <h3>3. اختيار القطع الأساسية أولاً</h3>
        <p>خصص أماكن للأثاث الأساسي، مثل الأرائك في غرفة المعيشة والأسرة في غرف النوم.</p>
  
        <h3>4. توازن توزيع الأثاث</h3>
        <p>وزع الأثاث بطريقة متوازنة لمنع ازدحام جانب واحد من الغرفة وخلق مساحة متجددة للنظر.</p>
  
        <h3>5. استغلال الزوايا والمساحات الفارغة</h3>
        <p>استخدم زوايا الغرف لوضع رفوف أو مكاتب صغيرة أو ركن قراءة.</p>
  
        <h3>6. اختيار قطع متعددة الاستخدامات</h3>
        <p>مثل الأرائك التي تتحول لسرير أو طاولات التخزين لزيادة وظائف الأثاث.</p>
  
        <h2>نصائح لاختيار ديكور يتناسق مع الأثاث</h2>
        <ul>
          <li>اختيار ألوان تتناسب مع الجدران والأرضيات لتعزيز الإحساس بالاتساع.</li>
          <li>استخدام إضاءة مناسبة لتسليط الضوء على الأثاث والزوايا.</li>
          <li>اختيار ستائر وسجاد يكملان الشكل العام للغرفة.</li>
        </ul>
  
        <h2>الدعم من <a href="https://www.bashir-mover.com/">بشير للنقل والتغليف</a></h2>
        <p>فريقنا لا يقتصر فقط على النقل، بل يقدم أيضًا خدمات استشارية لترتيب الأثاث وتنظيم المنزل بأساليب حديثة ومناسبة لمساحاتك.</p>
  
        <h2>خاتمة</h2>
        <p>ترتيب الأثاث من أوائل الأساسيات القادمة عندما تنتقل إلى منزل جديد. باتباع هذه النصائح والاعتماد على خدمات <a href="https://www.bashir-mover.com/">بشير</a> ستحصل على منزل مرتب وأنيق.</p>
      `,
      date: '20 فبراير 2023',
      readTime: '25 دقيقة',
      image: '/images/blog/furniture-arrangement.jpg',
      category: 'ديكور وترتيب',
      tags: ['ترتيب الأثاث', 'ترتيب المنزل', 'ديكور جديد', 'تنظيم المنزل'],
      featured: true,
      slug: 'best-ways-to-arrange-furniture-in-your-new-home',
      author: {
        name: 'سارة الشهير',
        image: '/images/team/sara.jpg',
        role: 'خبير التصميم'
      }
    },
    {
      id: 4,
      title: 'دليل شامل لفك وتركيب غرف النوم بأمان',
      excerpt: 'خطوات تفصيلية لفك وتركيب غرف النوم بطريقة آمنة وسليمة تحافظ على جودة الأثاث وتمنع أي ضرر.',
      content: `
        <h2>مقدمة</h2>
        <p>فك وتركيب غرف النوم هو أمر يتطلب عناية واهتمام كبير لمنع حدوث التلف أو فقدان القطع المهمة. تشمل هذه العملية العديد من الخطوات التي إذا تمت بشكل صحيح، ستساعدك على إعادة تركيب الغرفة بسهولة وأمان. إليك دليل شامل من <a href="https://www.bashir-mover.com/">شركة بشير للنقل والتغليف</a> لعملية فك وتركيب غرف النوم.</p>
  
        <h2>الأدوات الأساسية المطلوب تجهيزها</h2>
        <ul>
          <li>مفكات مسطح وفيليبس بأحجام مختلفة.</li>
          <li>مطرقة مطاطية.</li>
          <li>شريط لاصق قوي.</li>
          <li>أكياس بلاستيكية لتخزين البراغي والمسامير.</li>
          <li>قفازات للحماية.</li>
          <li>صناديق لتخزين الأجزاء الصغيرة والمربعة.</li>
        </ul>
  
        <h2>خطوات فك غرف النوم بأمان</h2>
        <ol>
          <li>تفريغ الغرفة من الأغراض الشخصية لتسهيل حركة العمال.</li>
          <li>تسمية الأجزاء قبل الفك، مثل الباب والسحّابات والأدراج.</li>
          <li>فك قطع الأثاث بترتيب منطقي وبمساعدة شخص آخر للقطع الكبيرة.</li>
          <li>تخزين البراغي والمسامير في أكياس وتسميتها لتسهيل التركيب لاحقًا.</li>
          <li>حماية الأجزاء الكبيرة ببطانيات أو ورق الفقاعات.</li>
        </ol>
  
        <h2>خطوات تركيب غرف النوم</h2>
        <ol>
          <li>البدء بتجميع هيكل السرير أو الخزانة الأساسية.</li>
          <li>تركيب القطع الصغيرة بناء على علامات التسميات.</li>
          <li>تثبيت البراغي جيداً والتأكد من ثبات القطع.</li>
          <li>التحقق من صحة الأبواب والأدراج وأنها تعمل بسلاسة.</li>
          <li>تنظيف الموقع والتأكد من عدم وجود أجزاء مفقودة.</li>
        </ol>
  
        <h2>نصائح السلامة أثناء الفك والتركيب</h2>
        <ul>
          <li>ارتدِ القفازات لتجنب الإصابات.</li>
          <li>تجنب استخدام القوة المفرطة عند فك البراغي.</li>
          <li>احرص على وجود مساعد عند رفع القطع الثقيلة.</li>
          <li>استخدم الأدوات المناسبة لتجنب تلف البراغي والقطع.</li>
        </ul>
  
        <h2>دعمنا في <a href="https://www.bashir-mover.com/">بشير للنقل والتغليف</a></h2>
        <p>نوفر فريقًا متخصصًا في فك وتركيب غرف النوم بكفاءة وسرعة مع الحفاظ على جودة الأثاث، مما يضمن لك تقديم أفضل خدمة في مجال النقل والتركيب داخل الكويت.</p>
  
        <h2>خاتمة</h2>
        <p>فك وتركيب غرف النوم بشكل آمن هو أمر أساسي يحافظ على أثاثك ويجعل الانتقال أو إعادة الترتيب أسهل. استعن بمحترفين مثل <a href="https://www.bashir-mover.com/">شركة بشير</a> للحصول على خدمات مضمونة وجودة عالية.</p>
      `,
      date: '5 يناير 2023',
      readTime: '20 دقيقة',
      image: '/images/blog/bedroom-assembly.jpg',
      category: 'فك وتركيب',
      tags: ['فك وتركيب', 'تركيب غرف النوم', 'تنظيف الأثاث', 'نقل أثاث الكويت'],
      featured: true,
      slug: 'guide-to-bedroom-disassembly',
      author: {
        name: 'محمد العنزي',
        image: '/images/team/mohammed.jpg',
        role: 'مدير العمليات'
      }
    },
    {
      id: 5,
      title: 'نصائح لتخزين الأثاث في المنزل أثناء النقل',
      excerpt: 'تعرف على أفضل الطرق لتخزين الأثاث في المنزل أثناء النقل بطريقة آمنة وسليمة.',
      content: `
        <h2>مقدمة</h2>
        <p>يحتاج تخزين الأثاث أثناء عملية النقل إلى تخطيط دقيق لضمان حماية القطع من التلف بسبب العوامل المتعددة مثل الرطوبة، الاتربة، أو الصدمات. في هذا المقال نقدم لك أفضل النصائح من <a href="https://www.bashir-mover.com/">شركة بشير للنقل والتغليف</a> لتخزين أثاثك بأمان داخل المنزل أو أماكن التخزين.</p>
  
        <h2>أهم التحديات أثناء تخزين الأثاث</h2>
        <ul>
          <li>الرطوبة التي قد تسبب العفن والتلف.</li>
          <li>الغبار والأتربة التي تؤدي إلى تدهور الموديلات القديمة أو المفروشات.</li>
          <li>الحشرات التي قد تُسبب أضرارًا للأثاث الخشبي أو المنسوجات.</li>
          <li>خطر التكسر أو الخدش أثناء التخزين غير المنظم.</li>
        </ul>
  
        <h2>نصائح لتخزين الأثاث بأمان داخل المنزل أو المخزن</h2>
        <ol>
          <li>
            <strong>اختيار المكان المناسب:</strong> يفضل أن يكون المكان جافًا ومهوّى، بعيدًا عن مصادر المياه والرطوبة.
          </li>
          <li>
            <strong>تغليف الأثاث:</strong> استخدام ورق الفقاعات، البطانيات، والأقمشة الناعمة لتغليف القطع وحمايتها من الغبار والخدوش.
          </li>
          <li>
            <strong>رفع الأثاث عن الأرض:</strong> ضع قطع الأثاث على قواعد خشبية لتجنب تلامسها المباشر مع الأرضية التي قد تكون رطبة.
          </li>
          <li>
            <strong>تنظيم الفراغات:</strong> ترك مساحات بين القطع لتسهيل التهوية ومنع تلف القطع المجاورة.
          </li>
          <li>
            <strong>مكافحة الرطوبة:</strong> استخدام مزيلات الرطوبة أو أكياس السيليكا داخل الغرفة أو المخزن.
          </li>
          <li>
            <strong>التنظيف المسبق:</strong> تنظيف الأثاث قبل التخزين لمنع انتشار الروائح أو الأوساخ.
          </li>
          <li>
            <strong>التأكد من تغليف القطع الحساسة:</strong> تغليف الزجاجيات والمرايا بشكل خاص باستخدام أكثر من طبقة من الحماية.
          </li>
        </ol>
  
        <h2>لماذا تختار <a href="https://www.bashir-mover.com/">شركة بشير</a> لشحن وتخزين أثاثك؟</h2>
        <p>نقدم خدمات تخزين آمنة بخبراء متخصصين لضمان حماية أثاثك من التلف، مع توفير أفضل مواد التعبئة والتغليف. نحن فريق موثوق في <a href="https://www.bashir-mover.com/">نقل وتخزين الأثاث في الكويت</a>.</p>
  
        <h2>خاتمة</h2>
        <p>تخزين الأثاث بطريقة صحيحة هو عامل رئيسي لحمايته أثناء النقل أو فترة الانتقال. اتبع النصائح السابقة، ودع <a href="https://www.bashir-mover.com/">بشير للنقل والتغليف</a> يوفر لك خدمة قيمة وآمنة.</p>
      `,
      date: '15 ديسمبر 2022',
      readTime: '18 دقيقة',
      image: '/images/blog/furniture-storage.jpg',
      category: 'تخزين الأثاث',
      tags: ['تخزين الأثاث', 'تخزين العفش', 'تخزين المنزل', 'نقل اثاث الكويت'],
      featured: true,
      slug: 'tips-for-storing-furniture-during-moving',
      author: {
        name: 'أحمد الكويتي',
        image: '/images/team/ahmed.jpg',
        role: 'خبير نقل وتغليف'
      }
    }
  ];
  

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
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
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between p-6 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.image} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{post.author.name}</h3>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <Facebook className="h-4 w-4" />
                      <span>مشاركة على فيسبوك</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2"
                      onClick={() => handleShare('twitter')}
                    >
                      <Twitter className="h-4 w-4" />
                      <span>مشاركة على تويتر</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2"
                      onClick={() => handleShare('linkedin')}
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>مشاركة على لينكد إن</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2"
                      onClick={copyToClipboard}
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
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
                      <ChevronRight className="h-4 w-4" />
                      <span>المقال السابق</span>
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex items-center gap-2" disabled>
                      <ChevronRight className="h-4 w-4" />
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
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex items-center gap-2" disabled>
                      <span>المقال التالي</span>
                      <ChevronLeft className="h-4 w-4" />
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
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                  <Card className="text-right h-full overflow-hidden group hover:border-primary/50 transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg?height=200&width=400"}
                        alt={relatedPost.title}
                        fill
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
                      <p className="text-muted-foreground line-clamp-3">{relatedPost.excerpt}</p>
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
            <p className="text-muted-foreground text-lg">
              شركة بشاير الخير توفر لك خدمات نقل وفك وتركيب وتغليف الأثاث بأعلى مستويات الجودة وأفضل الأسعار
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => router.push('/contact')}
              >
                <span>تواصل معنا الآن</span>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleQuoteRequest}
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
