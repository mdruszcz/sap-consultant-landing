import { XCircle, CheckCircle2 } from 'lucide-react'

const challenges = [
  { 
    title: 'Cash-flow immobilisé',
    desc: 'Trop de capital bloqué dans des stocks dormants ou obsolètes'
  },
  { 
    title: 'Données peu fiables',
    desc: 'Écarts constants entre SAP et la réalité terrain'
  },
  { 
    title: 'Reporting chronophage',
    desc: 'Des heures perdues à consolider des exports Excel'
  },
]

const solutions = [
  { 
    title: 'Trésorerie libérée',
    desc: 'Réduction mesurable des stocks excessifs et rotation optimisée'
  },
  { 
    title: 'Data 100% fiable',
    desc: 'Processus de contrôle et réconciliation systématique'
  },
  { 
    title: 'Visibilité en 1 clic',
    desc: 'Tableaux de bord automatisés avec alertes intelligentes'
  },
]

export default function ProblemSolution() {
  return (
    <section className="bg-slate-900 py-20 lg:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4 border border-emerald-500/20">
            Transformation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            De la complexité à la <span className="text-emerald-400">clarté</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Chaque mission transforme vos défis quotidiens en opportunités de croissance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Challenges Column */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">Défis Actuels</h3>
            </div>
            
            <div className="space-y-6">
              {challenges.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-900/50 border border-slate-700/30">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">Objectifs de Mission</h3>
            </div>
            
            <div className="space-y-6">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-900/30 border border-emerald-500/10">
                  <div className="w-8 h-8 bg-emerald-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
