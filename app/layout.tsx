import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cédric Charlier | Consultant SAP & Optimisation des Stocks',
  description: 'Expert SAP MM/WM avec 15+ ans d\'expérience. Transformez votre gestion de stocks : de centre de coûts à levier de rentabilité. Audit gratuit disponible.',
  keywords: ['SAP', 'consultant SAP', 'gestion de stocks', 'optimisation', 'SAP MM', 'SAP WM', 'Belgique', 'PME'],
  authors: [{ name: 'Cédric Charlier' }],
  openGraph: {
    title: 'Cédric Charlier | Consultant SAP & Optimisation des Stocks',
    description: 'Ne laissez plus SAP bloquer votre trésorerie. Expert SAP avec 15+ ans d\'expérience terrain.',
    type: 'website',
    locale: 'fr_BE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cédric Charlier | Consultant SAP',
    description: 'Expert SAP MM/WM - Transformez votre gestion de stocks',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
