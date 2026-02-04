import Image from 'next/image'
import { TrendingUp, User } from 'lucide-react'

const credentials = [
  { value: '15+', label: 'Années d\'expérience' },
  { value: '3 ans', label: 'SAP chez Alstom' },
  { value: '11 ans', label: 'Gestion stocks Logemat' },
  { value: '150+', label: 'Personnes gérées' },
]

const tags = ['SAP MM', 'Ordonnancement', 'Gestion de Stocks', 'Excel Avancé', 'Marketing B2B', 'CRM', 'Analytics']

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Side */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Photo Container */}
              <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 border-4 border-white bg-gradient-to-br from-slate-800 to-slate-900">
                <Image 
                  src="/cedric-charlier.jpg"
                  alt="Cédric Charlier - Consultant SAP Expert"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-white rounded-2xl p-6 shadow-xl shadow-slate-900/10 border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-semibold text-slate-900">Approche</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  &quot;Direct, pragmatique et orienté résultats. Chaque intervention doit générer un ROI mesurable.&quot;
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 -left-8 w-24 h-24 bg-emerald-100 rounded-full opacity-50" />
            <div className="absolute -bottom-12 right-12 w-32 h-32 border-2 border-slate-100 rounded-full" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6 border border-slate-200">
              <User className="w-4 h-4" />
              Votre Consultant
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Cédric Charlier
            </h2>
            <h3 className="text-xl text-emerald-600 font-medium mb-6">
              15+ années en gestion de stocks & SAP
            </h3>

            <div className="space-y-4 text-slate-600 mb-8">
              <p>
                Un parcours atypique qui fait ma force : de <strong className="text-slate-800">Material Planner</strong> chez EHA à <strong className="text-slate-800">Agent d&apos;ordonnancement SAP</strong> chez Alstom Transport, j&apos;ai vécu les défis de la gestion de stocks de l&apos;intérieur pendant plus de 3 ans.
              </p>
              <p>
                Ma double casquette <strong className="text-slate-800">Marketing & Supply Chain</strong> acquise chez Logemat (11 ans) me permet de comprendre à la fois les enjeux techniques SAP et les impératifs business de rentabilité.
              </p>
              <p>
                Expérience terrain en ordonnancement de production, gestion de 150+ collaborateurs, et mise en place de logiciels de gestion de stocks (VARY, SAP MM).
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {credentials.map((cred, idx) => (
                <div key={idx} className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-display text-2xl font-bold text-slate-900">{cred.value}</div>
                  <div className="text-sm text-slate-500">{cred.label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
