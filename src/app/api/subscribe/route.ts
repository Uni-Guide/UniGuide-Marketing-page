import { NextResponse } from "next/server"
import emailjs from "@emailjs/browser"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Initialize EmailJS
    emailjs.init("VYEMlwI954TgwDYVM")   

    // Send email using EmailJS
    await emailjs.send(
      "service_5y2yzyn",
      "template_hf57r3f",
      { to_email: email },
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ success: false, error: "Subscription failed" }, { status: 500 })
  }
}

