'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, MapPin, Facebook, Instagram, Youtube, Star } from 'lucide-react'
import Link from 'next/link'
import { useTheme, getTheme } from '@/contexts/ThemeContext'

const Footer = () => {
  const { theme: mode } = useTheme()
  const theme = getTheme(mode)
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    musical: [
      { name: 'Over Second Opinion', href: '/' },
      { name: 'Cast & Crew', href: '/cast' },
      { name: 'Galerij', href: '/gallery' },
      { name: 'Tickets Reserveren', href: 'https://upstream.cafe/kerst', external: true },
    ],
    upstream: [
      { name: 'Over Upstream', href: '/about' },
      { name: 'Onze Missie', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Evenementen', href: '/' },
    ],
    practical: [
      { name: 'Praktische Informatie', href: '/contact' },
      { name: 'Locatie & Bereikbaarheid', href: '/contact' },
      { name: 'Toegankelijkheid', href: '/contact' },
      { name: 'Groepsboekingen', href: '/contact' },
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: theme.accent.primary },
    { name: 'Instagram', icon: Instagram, href: '#', color: theme.accent.secondary },
    { name: 'Youtube', icon: Youtube, href: '#', color: theme.accent.tertiary },
  ]

  return (
    <footer style={{ background: theme.background.primary, color: theme.text.primary }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div className="lg:col-span-1" {...fadeInUp}>
            <div className="flex items-center space-x-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent.primary}, ${theme.accent.secondary})`,
                }}
              >
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: theme.text.primary }}>
                  Second Opinion
                </h3>
                <p className="text-sm flex items-center" style={{ color: theme.text.accent }}>
                  <Star className="w-3 h-3 mr-1" />
                  Upstream Kerstmusical 2025
                </p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: theme.text.secondary }}>
              Een hartverwarmende kerstmusical over hoop, genezing en wonder in het ziekenhuis.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3" style={{ color: theme.text.secondary }}>
                <Mail className="w-4 h-4" style={{ color: theme.accent.primary }} />
                <span>info@upstream.nl</span>
              </div>
              <div className="flex items-center gap-3" style={{ color: theme.text.secondary }}>
                <MapPin className="w-4 h-4" style={{ color: theme.accent.tertiary }} />
                <span>Gebouw 055, Condorweg 1, Apeldoorn</span>
              </div>
            </div>
          </motion.div>

          {/* Musical Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: theme.accent.primary }}
            >
              Second Opinion
            </h4>
            <ul className="space-y-3">
              {footerLinks.musical.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-all duration-300 hover:scale-105 transform inline-block group"
                      style={{ color: theme.text.secondary }}
                    >
                      <span className="group-hover:text-slate-50 transition-colors">
                        {link.name}
                      </span>
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-sm transition-all duration-300 hover:scale-105 transform inline-block group"
                      style={{ color: theme.text.secondary }}
                    >
                      <span className="group-hover:text-slate-50 transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Upstream Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: theme.accent.secondary }}
            >
              Upstream
            </h4>
            <ul className="space-y-3">
              {footerLinks.upstream.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm transition-all duration-300 hover:scale-105 transform inline-block group"
                    style={{ color: theme.text.secondary }}
                  >
                    <span className="group-hover:text-slate-50 transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practical Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: theme.accent.tertiary }}
            >
              Praktisch
            </h4>
            <ul className="space-y-3">
              {footerLinks.practical.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm transition-all duration-300 hover:scale-105 transform inline-block group"
                    style={{ color: theme.text.secondary }}
                  >
                    <span className="group-hover:text-slate-50 transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-16 pt-8"
          style={{ borderTop: `1px solid ${theme.border}` }}
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-md mx-auto text-center lg:max-w-2xl">
            <h4 
              className="text-xl font-semibold mb-4"
              style={{ color: theme.text.primary }}
            >
              Blijf Op De Hoogte
            </h4>
            <p 
              className="mb-6"
              style={{ color: theme.text.secondary }}
            >
              Ontvang updates over Second Opinion en andere Upstream evenementen
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="je@email.nl"
                className="flex-1 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all text-white placeholder-slate-400"
                style={{
                  background: theme.background.secondary,
                  borderColor: theme.border,
                }}
              />
              <motion.button
                className="px-6 py-3 text-white rounded-lg font-medium transition-all duration-300 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent.primary}, ${theme.accent.secondary})`,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Aanmelden
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div style={{ borderTop: `1px solid ${theme.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div 
              className="text-center lg:text-left"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm" style={{ color: theme.text.accent }}>
                © {currentYear} Upstream. Alle rechten voorbehouden.
              </p>
              <p className="text-xs mt-1 flex items-center justify-center lg:justify-start" style={{ color: theme.text.accent }}>
                Website gemaakt met{' '}
                <Heart className="w-3 h-3 mx-1" style={{ color: theme.accent.primary }} />
                {' '}voor het delen van hoop en liefde
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-6"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <span className="text-sm hidden sm:block" style={{ color: theme.text.accent }}>
                Volg ons:
              </span>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="transition-all duration-300"
                    style={{ color: theme.text.accent }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -2,
                      color: social.color,
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
