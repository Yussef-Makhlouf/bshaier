'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast, useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import ClientOnly from '@/components/client-only';

interface BlogPostClientProps {
  postTitle: string;
  postSlug: string;
}

export default function BlogPostClient({ postTitle, postSlug }: BlogPostClientProps) {
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');
  
  // Set base URL on client side
  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);
  
  // Copy link to clipboard
  const copyToClipboard = () => {
    if (typeof window !== 'undefined') {
      const url = `${baseUrl}${pathname}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        toast({
          title: "تم نسخ الرابط",
          description: "تم نسخ رابط المقال إلى الحافظة",
        });
        
        setTimeout(() => setCopied(false), 3000);
      });
    }
  };
  
  // Handle share
  const handleShare = (platform: string) => {
    if (typeof window !== 'undefined') {
      const url = `${baseUrl}${pathname}`;
      sharePost(platform, postTitle, url);
    }
  };
  
  // Handle quote request
  const handleQuoteRequest = () => {
    router.push('/quote?source=blog');
  };

  return (
    <>
      <ClientOnly>
        <Toaster />
      </ClientOnly>
      
      {/* Share Buttons */}
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
            <Copy className="h-4 w-4" />
            <span>نسخ الرابط</span>
            {copied && <Check className="h-4 w-4 ml-auto text-green-500" />}
          </Button>
        </div>
      </div>
      
      {/* Quote Request Button */}
      <div className="bg-primary/10 p-6 rounded-lg mt-8">
        <h3 className="text-lg font-semibold mb-4">طلب عرض سعر</h3>
        <p className="text-sm text-muted-foreground mb-4">
          هل تحتاج إلى خدمات نقل أثاث احترافية؟ احصل على عرض سعر مجاني الآن!
        </p>
        <Button className="w-full" onClick={handleQuoteRequest}>
          طلب عرض سعر
        </Button>
      </div>
    </>
  );
}

// Share post function
function sharePost(platform: string, title: string, url: string) {
  if (typeof window === 'undefined') return; // Only run on client side
  
  const encodedTitle = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);
  
  let shareLink = '';
  
  switch (platform) {
    case 'facebook':
      shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
      break;
    case 'twitter':
      shareLink = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${shareUrl}`;
      break;
    case 'linkedin':
      shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
      break;
  }
  
  if (shareLink) {
    window.open(shareLink, '_blank', 'width=600,height=400');
  }
}
