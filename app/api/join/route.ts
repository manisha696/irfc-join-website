import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const interest = formData.get('interest') as string
    const message = formData.get('message') as string
    const resumeFile = formData.get('resume') as File | null

    console.log("🔍 Form Data Received:", { name, email, interest, message })
    let resumeUrl = ''

    if (resumeFile) {
      console.log("📤 Uploading Resume:", resumeFile.name)
      const fileExt = resumeFile.name.split('.').pop()
      const fileName = `${Date.now()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(fileName, resumeFile, {
          contentType: 'application/pdf',
        })

      if (uploadError) {
        console.error("❌ Upload Error:", uploadError)
        return NextResponse.json({ error: 'Resume upload failed' }, { status: 500 })
      }

      const { data: urlData } = supabase.storage.from('resumes').getPublicUrl(fileName)
      resumeUrl = urlData.publicUrl
    }

    console.log("✅ Resume uploaded. URL:", resumeUrl)

    const { error: dbError } = await supabase.from('join_requests').insert([
      { name, email, interest, message, resume_url: resumeUrl },
    ])

    if (dbError) {
      console.error("❌ DB Insert Error:", dbError)
      return NextResponse.json({ error: 'Database insert failed' }, { status: 500 })
    }

    console.log("✅ Data inserted successfully!")
    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (err) {
    console.error("❌ Unexpected Error:", err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
