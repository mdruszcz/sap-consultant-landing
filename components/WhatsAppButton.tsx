'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '32470000000' // Replace with actual number
  const message = encodeURIComponent('Bonjour Cédric, je souhaite en savoir plus sur vos services d\'optimisation SAP.')
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 whatsapp-pulse"
      aria-label="Contacter sur WhatsApp"
    >
      <div className="relative w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>
    </a>
  )
}
