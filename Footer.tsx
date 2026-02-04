import { Database } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-semibold text-xl text-white">
              SAP<span className="text-emerald-400">Optimize</span>
            </span>
          </a>

          <p className="text-slate-500 text-sm">
            © {currentYear} SAPOptimize. Consultant indépendant SAP MM/WM. Belgique.
          </p>

          <div className="flex items-center gap-4">
            <a href="/mentions-legales" className="text-slate-400 hover:text-white transition-colors text-sm">
              Mentions légales
            </a>
            <a href="/confidentialite" className="text-slate-400 hover:text-white transition-colors text-sm">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
