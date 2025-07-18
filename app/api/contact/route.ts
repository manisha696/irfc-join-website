import { type NextRequest, NextResponse } from "next/server"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Save to Firestore
    const docRef = await addDoc(collection(db, "contact_messages"), {
      name,
      email,
      message,
      timestamp: new Date(),
      status: "unread",
    })

    return NextResponse.json({ success: true, id: docRef.id })
  } catch (error) {
    console.error("Error processing contact message:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
