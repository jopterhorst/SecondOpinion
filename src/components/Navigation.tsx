'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Ticket, Heart, Star } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useTheme, getTheme } from '@/contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const { theme: mode } = useTheme()
  const theme = getTheme(mode)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Over Ons', href: '/about' },
    { name: 'Cast & Crew', href: '/cast' },
    { name: 'Galerij', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled ? theme.nav.backgroundScrolled : theme.nav.background,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? `1px solid ${theme.nav.border}` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent.primary}, ${theme.accent.secondary})`,
                  border: `1px solid ${theme.button.border}`,
                }}
              >
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div style={{ color: theme.nav.text }}>
                <h1 className="text-xl font-bold tracking-tight">Second Opinion</h1>
                <p className="text-xs font-medium" style={{ color: theme.nav.textSecondary }}>
                  <Star className="w-3 h-3 inline mr-1" />
                  Kerstmusical in het Ziekenhuis
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <Link
                  href={item.href}
                  className="font-medium transition-all duration-300 hover:scale-105 transform relative group"
                  style={{ 
                    color: theme.nav.text,
                  }}
                >
                  <span className="group-hover:text-green-400 transition-colors">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
            <motion.a
              href="https://upstream.cafe/kerst"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-white backdrop-blur-sm"
              style={{
                background: theme.button.primary,
                border: `1px solid ${theme.button.border}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = theme.button.primaryHover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = theme.button.primary
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Ticket className="w-4 h-4" />
              Tickets
            </motion.a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              className="p-2 hover:bg-white/10 rounded-xl transition-colors backdrop-blur-sm"
              style={{ color: theme.nav.text }}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden backdrop-blur-xl"
            style={{
              background: theme.nav.backgroundScrolled,
              borderTop: `1px solid ${theme.nav.border}`,
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block font-medium py-3 px-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105 transform"
                    style={{ color: theme.nav.text }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://upstream.cafe/kerst"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 mt-6 shadow-lg text-white backdrop-blur-sm"
                style={{
                  background: theme.button.primary,
                  border: `1px solid ${theme.button.border}`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
              >
                <Ticket className="w-4 h-4" />
                Tickets
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
