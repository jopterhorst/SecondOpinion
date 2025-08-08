'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
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
      { name: 'Tickets Reserveren', href: '/contact' },
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
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Youtube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div className="lg:col-span-1" {...fadeInUp}>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-christmas-red-500 to-christmas-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SO</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Second Opinion</h3>
                <p className="text-sm text-gray-400">Upstream Kerstmusical 2025</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Een transformerende kerstmusical die harten opent voor hoop, verlossing en tweede kansen.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-christmas-red-400" />
                <span>info@upstream.nl</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-christmas-gold-400" />
                <span>Gebouw 055, Condorweg 1, Apeldoorn</span>
              </div>
            </div>
          </motion.div>

          {/* Musical Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h4 className="text-lg font-semibold mb-6 text-christmas-red-400">
              Second Opinion
            </h4>
            <ul className="space-y-3">
              {footerLinks.musical.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Upstream Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h4 className="text-lg font-semibold mb-6 text-christmas-green-400">
              Upstream
            </h4>
            <ul className="space-y-3">
              {footerLinks.upstream.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practical Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h4 className="text-lg font-semibold mb-6 text-christmas-gold-400">
              Praktisch
            </h4>
            <ul className="space-y-3">
              {footerLinks.practical.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-md mx-auto text-center lg:max-w-2xl">
            <h4 className="text-xl font-semibold mb-4">
              Blijf Op De Hoogte
            </h4>
            <p className="text-gray-300 mb-6">
              Ontvang updates over Second Opinion en andere Upstream evenementen
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="je@email.nl"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-christmas-red-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-christmas-red-600 to-christmas-green-600 text-white rounded-lg font-medium hover:from-christmas-red-700 hover:to-christmas-green-700 transition-all duration-300"
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
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div 
              className="text-center lg:text-left"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <p className="text-gray-400 text-sm">
                © {currentYear} Upstream. Alle rechten voorbehouden.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Website gemaakt met{' '}
                <Heart className="w-3 h-3 inline text-christmas-red-400" />
                {' '}voor het delen van hoop en liefde
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-6"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <span className="text-gray-400 text-sm hidden sm:block">
                Volg ons:
              </span>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.2, y: -2 }}
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
