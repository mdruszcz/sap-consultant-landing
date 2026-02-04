'use client'

import { useState, useEffect } from 'react'
import { Database, Calendar, Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Database className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-semibold text-xl text-slate-900">
              SAP<span className="text-emerald-500">Optimize</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              À Propos
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
            >
              <Calendar className="w-4 h-4" />
              Audit Gratuit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <nav className="flex flex-col p-4 gap-4">
            <a 
              href="#services" 
              className="text-slate-700 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-slate-700 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos
            </a>
            <a 
              href="#contact" 
              className="text-slate-700 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-semibold mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="w-4 h-4" />
              Réserver mon Audit Gratuit
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
