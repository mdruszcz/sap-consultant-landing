'use client'

import { useState } from 'react'
import { 
  Calendar, 
  Mail, 
  Phone, 
  User, 
  Building2, 
  MessageCircle, 
  Send, 
  CheckCircle2,
  Loader2,
  AlertCircle
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue')
      }

      setStatus('success')
      setFormData({ name: '', company: '', email: '', phone: '', message: '' })
      
      // Reset success state after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue')
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/20">
              <Calendar className="w-4 h-4" />
              Première consultation offerte
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à libérer votre{' '}
              <span className="text-emerald-400">trésorerie</span> ?
            </h2>

            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Réservez votre audit flash gratuit de 30 minutes. Nous identifierons ensemble vos quick wins prioritaires.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-10">
              <a 
                href="mailto:cedric@sapoptimize.be"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="text-white font-medium">cedric@sapoptimize.be</div>
                </div>
              </a>

              <a 
                href="tel:+32470000000"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Téléphone</div>
                  <div className="text-white font-medium">+32 470 00 00 00</div>
                </div>
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <p className="text-emerald-100 text-sm">
                <strong>Garantie satisfaction :</strong> Pas de résultats tangibles après l&apos;audit ? Pas d&apos;engagement.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
            <h3 className="font-display text-2xl font-semibold text-slate-900 mb-2">
              Demande de contact
            </h3>
            <p className="text-slate-500 mb-8">
              Réponse garantie sous 24h ouvrées
            </p>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h4 className="font-display text-xl font-semibold text-slate-900 mb-2">
                  Message envoyé !
                </h4>
                <p className="text-slate-500">
                  Je vous recontacte très rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all disabled:bg-slate-50 disabled:cursor-not-allowed"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Building2 className="w-4 h-4 inline mr-2" />
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all disabled:bg-slate-50 disabled:cursor-not-allowed"
                    placeholder="Acme Industries"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all disabled:bg-slate-50 disabled:cursor-not-allowed"
                      placeholder="jean@acme.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all disabled:bg-slate-50 disabled:cursor-not-allowed"
                      placeholder="+32 470 00 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Votre défi principal
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none disabled:bg-slate-50 disabled:cursor-not-allowed"
                    placeholder="Décrivez brièvement votre situation actuelle..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  En soumettant ce formulaire, vous acceptez d&apos;être recontacté par email ou téléphone.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
