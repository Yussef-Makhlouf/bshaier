"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function LiveChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const { toast } = useToast()

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      toast({
        title: "تم إرسال رسالتك",
        description: "سنرد عليك في أقرب وقت ممكن",
      })
      setMessage("")
    }
  }

  return (
    <>
      <Button
        onClick={toggleChat}
        size="icon"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 animate-float"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        <span className="sr-only">المحادثة المباشرة</span>
      </Button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-background rounded-lg shadow-lg overflow-hidden border">
          <div className="bg-primary text-primary-foreground p-4">
            <h3 className="font-bold">المحادثة المباشرة</h3>
            <p className="text-sm">تحدث معنا مباشرة</p>
          </div>
          <div className="h-64 p-4 overflow-y-auto bg-muted/50">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none max-w-[80%] mr-auto mb-4">
              <p className="text-sm">مرحباً بك في بشاير الخير لنقل الأثاث! كيف يمكنني مساعدتك اليوم؟</p>
              <span className="text-xs opacity-70 block mt-1">10:30 صباحاً</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={!message.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">إرسال</span>
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
