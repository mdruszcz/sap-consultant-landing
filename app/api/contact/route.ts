import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email, message, phone } = body

    // Validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Nom, email et entreprise sont requis' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Send email notification using Resend
    const { data, error } = await resend.emails.send({
      from: 'SAPOptimize <onboarding@resend.dev>', // Change to your verified domain
      to: process.env.CONTACT_EMAIL || 'contact@example.com',
      replyTo: email,
      subject: `🚀 Nouvelle demande de contact - ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
            .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .value { font-size: 16px; color: #1e293b; background: white; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #22c55e; }
            .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 12px; }
            .badge { display: inline-block; background: #22c55e; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">📬 Nouvelle demande de contact</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Via SAPOptimize Landing Page</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nom complet</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Entreprise</div>
                <div class="value">${company}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #22c55e;">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Téléphone</div>
                <div class="value"><a href="tel:${phone}" style="color: #22c55e;">${phone}</a></div>
              </div>
              ` : ''}
              ${message ? `
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Email envoyé automatiquement depuis SAPOptimize.be</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

    // Send auto-reply to the prospect
    await resend.emails.send({
      from: 'Cédric Charlier - SAPOptimize <onboarding@resend.dev>',
      to: email,
      subject: 'Merci pour votre demande - SAPOptimize',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center; }
            .content { background: white; padding: 40px 30px; border: 1px solid #e2e8f0; }
            .highlight { background: #f0fdf4; border-left: 4px solid #22c55e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0; }
            .cta { display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0; }
            .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Merci ${name.split(' ')[0]} ! 🎯</h1>
              <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 16px;">Votre demande a bien été reçue</p>
            </div>
            <div class="content">
              <p>Bonjour ${name.split(' ')[0]},</p>
              <p>Je vous remercie pour votre intérêt envers mes services d'optimisation SAP & gestion de stocks.</p>
              
              <div class="highlight">
                <strong>⏰ Prochaine étape :</strong><br>
                Je vous recontacterai dans les <strong>24 heures ouvrées</strong> pour planifier ensemble votre audit flash gratuit de 30 minutes.
              </div>
              
              <p>En attendant, voici ce que nous pourrons explorer ensemble :</p>
              <ul>
                <li>Diagnostic rapide de votre configuration SAP MM/WM</li>
                <li>Identification des quick wins immédiats</li>
                <li>Estimation du potentiel d'optimisation de votre trésorerie</li>
              </ul>
              
              <p style="text-align: center;">
                <a href="https://wa.me/32470000000" class="cta">💬 Me contacter sur WhatsApp</a>
              </p>
              
              <div class="signature">
                <p><strong>Cédric Charlier</strong><br>
                Consultant SAP & Optimisation des Stocks<br>
                <span style="color: #22c55e;">15+ ans d'expérience terrain</span></p>
              </div>
            </div>
            <div class="footer">
              <p>SAPOptimize.be | Consultant indépendant</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès',
        id: data?.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Une erreur inattendue s\'est produite' },
      { status: 500 }
    )
  }
}
