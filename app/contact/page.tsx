"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Starfield from "@/components/starfield"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon!",
        })
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen pt-20">
      <Starfield />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow">Contact Us</h1>
            <p className="text-xl text-gray-300">Get in touch with the IRFC team</p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-lg border border-purple-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-black/50 border-purple-500/30 text-white"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-black/50 border-purple-500/30 text-white"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-black/50 border-purple-500/30 text-white min-h-[150px]"
                  placeholder="How can we help you?"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold pulse-glow"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </motion.form>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Other Ways to Reach Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@irfc.org</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Innovation Drive, Tech City, TC 12345</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
