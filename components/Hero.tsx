'use client'

import { TrendingUp, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-mesh pattern-overlay overflow-hidden pt-20">
      {/* Geometric Accents */}
      <div className="geometric-accent -top-20 -right-40 opacity-50" />
      <div className="geometric-accent top-1/2 -left-20 opacity-30" style={{ width: '200px', height: '200px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="animate-fade-up opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6 border border-emerald-100">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Expert SAP & Gestion de Stocks | 15+ ans d&apos;expérience terrain
              </span>
            </div>
            
            <h1 className="animate-fade-up animate-delay-100 opacity-0 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Ne laissez plus SAP bloquer votre{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-emerald-500">trésorerie</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.3"/>
                </svg>
              </span>
            </h1>
            
            <p className="animate-fade-up animate-delay-200 opacity-0 text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Transformez votre gestion de stocks : de <strong className="text-slate-800">&quot;centre de coûts&quot;</strong> à <strong className="text-emerald-600">&quot;levier de rentabilité&quot;</strong>.
            </p>
            
            <div className="animate-fade-up animate-delay-300 opacity-0 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg"
              >
                Réserver mon Audit Gratuit
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-white transition-all"
              >
                Découvrir les services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-up animate-delay-400 opacity-0 mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm text-slate-600"><strong className="text-slate-900">30%</strong> réduction stock moyen</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm text-slate-600"><strong className="text-slate-900">50+</strong> PME accompagnées</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative lg:pl-12">
            <div className="animate-fade-up animate-delay-300 opacity-0 relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Résultats Typiques</h3>
                    <p className="text-sm text-slate-500">Sur 6 mois d&apos;intervention</p>
                  </div>
                </div>
                
                <div className="space-y-5">
                  {[
                    { label: 'Réduction des surplus', value: '35%', color: 'emerald' },
                    { label: 'Amélioration fiabilité data', value: '95%', color: 'blue' },
                    { label: 'Temps de reporting', value: '-60%', color: 'amber' },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-slate-600 text-sm">{stat.label}</span>
                      <span className={`font-bold text-lg ${
                        stat.color === 'emerald' ? 'text-emerald-500' :
                        stat.color === 'blue' ? 'text-blue-500' : 'text-amber-500'
                      }`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/30 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                ROI Garanti
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path d="M0 50L48 45C96 40 192 30 288 35C384 40 480 60 576 65C672 70 768 60 864 50C960 40 1056 30 1152 35C1248 40 1344 60 1392 70L1440 80V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="#1e293b"/>
        </svg>
      </div>
    </section>
  )
}
