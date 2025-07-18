"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Starfield from "@/components/starfield"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("interest", formData.interest)
      formDataToSend.append("message", formData.message)
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume)
      }

      const response = await fetch("/api/join", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest in joining IRFC. We'll be in touch soon!",
        })
        setFormData({
          name: "",
          email: "",
          interest: "",
          message: "",
          resume: null,
        })
      } else {
        throw new Error("Failed to submit application")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow">Join the Innovation</h1>
            <p className="text-xl text-gray-300">Become part of the future of research and innovation</p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-black/50 border-blue-500/30 text-white"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-black/50 border-blue-500/30 text-white"
                />
              </div>

              <div>
                <Label htmlFor="interest" className="text-white">
                  Community Interest
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                  <SelectTrigger className="bg-black/50 border-blue-500/30 text-white">
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eirf">EIRF - Electronics Innovation Research Forum</SelectItem>
                    <SelectItem value="sirf">SIRF - Software Innovation Research Forum</SelectItem>
                    <SelectItem value="both">Both Communities</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-white">
                  Why do you want to join IRFC?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-black/50 border-blue-500/30 text-white min-h-[120px]"
                  placeholder="Tell us about your background, interests, and what you hope to contribute..."
                />
              </div>

              <div>
                <Label htmlFor="resume" className="text-white">
                  Resume/CV (PDF)
                </Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="bg-black/50 border-blue-500/30 text-white file:bg-blue-600 file:text-white file:border-0 file:rounded file:px-4 file:py-2"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold glow-effect"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}
