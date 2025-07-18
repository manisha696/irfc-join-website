"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase"
import Starfield from "@/components/starfield"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, User, Calendar } from "lucide-react"

interface JoinRequest {
  id: string
  name: string
  email: string
  interest: string
  message: string
  resumeUrl?: string
  timestamp: any
  status: string
}

interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  timestamp: any
  status: string
}

export default function AdminPage() {
  const [joinRequests, setJoinRequests] = useState<JoinRequest[]>([])
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Fetch join requests
      const joinQuery = query(collection(db, "join_requests"), orderBy("timestamp", "desc"))
      const joinSnapshot = await getDocs(joinQuery)
      const joinData = joinSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as JoinRequest[]

      // Fetch contact messages
      const contactQuery = query(collection(db, "contact_messages"), orderBy("timestamp", "desc"))
      const contactSnapshot = await getDocs(contactQuery)
      const contactData = contactSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ContactMessage[]

      setJoinRequests(joinData)
      setContactMessages(contactData)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Unknown"
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
  }

  if (loading) {
    return (
      <div className="relative min-h-screen pt-20 flex items-center justify-center">
        <Starfield />
        <div className="text-white text-xl">Loading admin panel...</div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen pt-20">
      <Starfield />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-glow">Admin Panel</h1>

          {/* Join Requests Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">Join Requests ({joinRequests.length})</h2>
            <div className="grid gap-6">
              {joinRequests.map((request) => (
                <Card
                  key={request.id}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white flex items-center gap-2">
                        <User size={20} />
                        {request.name}
                      </CardTitle>
                      <Badge variant={request.status === "pending" ? "secondary" : "default"}>{request.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>{request.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{formatDate(request.timestamp)}</span>
                      </div>
                      <div>
                        <strong>Interest:</strong> {request.interest}
                      </div>
                      <div>
                        <strong>Message:</strong>
                        <p className="mt-1 text-sm">{request.message}</p>
                      </div>
                      {request.resumeUrl && (
                        <Button
                          onClick={() => window.open(request.resumeUrl, "_blank")}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <Download size={16} className="mr-2" />
                          Download Resume
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Messages Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Contact Messages ({contactMessages.length})</h2>
            <div className="grid gap-6">
              {contactMessages.map((message) => (
                <Card
                  key={message.id}
                  className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white flex items-center gap-2">
                        <User size={20} />
                        {message.name}
                      </CardTitle>
                      <Badge variant={message.status === "unread" ? "destructive" : "default"}>{message.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>{message.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{formatDate(message.timestamp)}</span>
                      </div>
                      <div>
                        <strong>Message:</strong>
                        <p className="mt-1 text-sm">{message.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
