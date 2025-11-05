import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validare de bază
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Toate câmpurile sunt obligatorii' },
        { status: 400 }
      )
    }

    // Aici poți integra cu un serviciu de email
    // Opțiuni:
    // 1. EmailJS (client-side, free tier)
    // 2. Resend (server-side, recommended)
    // 3. Nodemailer cu SMTP
    // 4. Formspree (serverless)

    // Exemplu cu Resend (necesită API key în .env.local):
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contact@driveautofocus.ro',
    //   to: 'office@driveautofocus.ro',
    //   subject: `Mesaj nou de la ${name}`,
    //   html: `<p>Email: ${email}</p><p>Telefon: ${phone}</p><p>Mesaj: ${message}</p>`,
    // })

    // Pentru moment, returnăm success
    // TODO: Configurează serviciul de email (vezi README)

    // Log pentru development
    console.log('Contact form submission:', { name, email, phone, message })

    return NextResponse.json(
      { message: 'Mesajul a fost trimis cu succes' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'A apărut o eroare la trimiterea mesajului' },
      { status: 500 }
    )
  }
}

// Rate limiting simplu (poți folosi un serviciu mai robust în producție)
const rateLimitMap = new Map<string, number>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const lastRequest = rateLimitMap.get(ip) || 0
  const timeDiff = now - lastRequest

  if (timeDiff < 60000) {
    // 1 minut între request-uri
    return false
  }

  rateLimitMap.set(ip, now)
  return true
}

