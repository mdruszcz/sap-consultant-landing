import { Search, Wrench, PieChart, CheckCircle2, ChevronRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    number: '01',
    title: 'Audit Flash SAP',
    subtitle: '2-3 jours',
    description: 'Diagnostic complet de votre configuration SAP MM/WM et identification des quick wins immédiats.',
    features: ['Analyse des paramétrages', 'Cartographie des flux', 'Plan d\'action priorisé']
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Nettoyage & Optimisation',
    subtitle: '2-6 semaines',
    description: 'Assainissement des données master et optimisation des processus de gestion de stocks.',
    features: ['Purge stocks obsolètes', 'Fiabilisation données', 'Paramétrage MRP']
  },
  {
    icon: PieChart,
    number: '03',
    title: 'Tableaux de Bord Décisionnels',
    subtitle: 'Sur mesure',
    description: 'Création de dashboards automatisés pour un pilotage en temps réel de vos KPIs stocks.',
    features: ['KPIs personnalisés', 'Alertes automatiques', 'Reports automatisés']
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 gradient-mesh pattern-overlay relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4 border border-slate-200">
            Expertises
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trois piliers pour <span className="text-emerald-500">transformer</span> vos stocks
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Une approche structurée et pragmatique pour des résultats mesurables
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="card-hover bg-white rounded-3xl p-8 border border-slate-100 relative group overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Number & Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="font-display text-4xl font-bold text-slate-100 group-hover:text-emerald-100 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <span className="text-sm text-emerald-600 font-medium">{service.subtitle}</span>
                  <h3 className="font-display text-2xl font-semibold text-slate-900 mt-1 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 text-slate-900 font-semibold group/link"
                >
                  En savoir plus
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
