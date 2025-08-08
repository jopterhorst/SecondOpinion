'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Ticket, ChevronDown, Heart, Star, Clock } from 'lucide-react'
import { useTheme, getTheme } from '@/contexts/ThemeContext'

const HeroSection = () => {
  const { theme: mode } = useTheme()
  const theme = getTheme(mode)
  
  // Pre-generate stable random values for snow particles
  const snowflakes = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4, // Varying snowflake sizes
      animateX: Math.random() * 20 - 10, // Side-to-side drift
      duration: 8 + Math.random() * 6, // Slower, more realistic fall
      delay: Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.4, // Varying opacity
    }))
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-18 md:pt-20"
      style={{
        background: mode === 'light' 
          ? `linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(241, 245, 249, 0.95), rgba(226, 232, 240, 0.95))` 
          : `linear-gradient(135deg, ${theme.background.primary}, ${theme.background.secondary})`,
      }}
    >
      {/* Christmas-themed overlay for depth */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: mode === 'light'
            ? `linear-gradient(to bottom, rgba(220, 38, 38, 0.05), transparent, rgba(34, 197, 94, 0.05))`
            : `linear-gradient(to bottom, ${theme.background.accent}, transparent, ${theme.background.accent})`,
        }}
      />
      
      {/* Snow particles - Christmas atmosphere */}
      <div className="absolute inset-0 overflow-hidden">
        {snowflakes.map((snowflake) => (
          <motion.div
            key={snowflake.id}
            className="absolute rounded-full shadow-lg"
            style={{
              width: `${snowflake.size}px`,
              height: `${snowflake.size}px`,
              background: mode === 'light' 
                ? 'rgba(220, 38, 38, 0.6)' // Christmas red snow in light mode
                : 'rgba(255, 255, 255, 0.8)', // White snow in dark mode
              left: `${snowflake.x}%`,
              top: `${snowflake.y}%`,
              opacity: snowflake.opacity,
            }}
            animate={{
              y: [0, window.innerHeight + 100], // Fall from top to bottom
              x: [0, snowflake.animateX, -snowflake.animateX, 0], // Gentle side-to-side drift
              rotate: [0, 360], // Spinning snowflakes
            }}
            transition={{
              duration: snowflake.duration,
              repeat: Infinity,
              delay: snowflake.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm mb-6 mt-6 sm:mt-8 shadow-lg border"
            style={{
              background: theme.background.accent,
              borderColor: theme.button.border,
              color: theme.text.secondary,
            }}
          >
            <Star className="w-4 h-4 mr-2" style={{ color: theme.accent.tertiary }} />
            <span className="text-sm font-medium">Kerstmusical in het Ziekenhuis</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
            style={{ color: theme.text.primary }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Second
            <span 
              className="block text-transparent bg-clip-text drop-shadow-lg"
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.accent.primary}, ${theme.accent.tertiary}, ${theme.accent.secondary})`,
              }}
            >
              Opinion
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: theme.text.secondary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Een hartverwarmende kerstmusical over hoop, genezing en wonderbaarlijke momenten 
            in het ziekenhuis tijdens de kerstdagen.
          </motion.p>

          {/* Date & Location Info Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div 
              className="backdrop-blur-sm rounded-xl p-6 shadow-lg border"
              style={{
                background: theme.background.accent,
                borderColor: theme.button.border,
              }}
            >
              <Calendar className="w-8 h-8 mx-auto mb-3" style={{ color: theme.accent.primary }} />
              <h3 className="font-semibold mb-2" style={{ color: theme.text.primary }}>Data</h3>
              <p className="text-sm" style={{ color: theme.text.secondary }}>
                13-14, 19-21 & 23-24<br />December 2025
              </p>
            </div>
            
            <div 
              className="backdrop-blur-sm rounded-xl p-6 shadow-lg border"
              style={{
                background: theme.background.accent,
                borderColor: theme.button.border,
              }}
            >
              <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: theme.accent.secondary }} />
              <h3 className="font-semibold mb-2" style={{ color: theme.text.primary }}>Locatie</h3>
              <p className="text-sm" style={{ color: theme.text.secondary }}>
                Gebouw 055<br />Condorweg 1, Apeldoorn
              </p>
            </div>
            
            <div 
              className="backdrop-blur-sm rounded-xl p-6 shadow-lg border"
              style={{
                background: theme.background.accent,
                borderColor: theme.button.border,
              }}
            >
              <Clock className="w-8 h-8 mx-auto mb-3" style={{ color: theme.accent.tertiary }} />
              <h3 className="font-semibold mb-2" style={{ color: theme.text.primary }}>Tijden</h3>
              <p className="text-sm" style={{ color: theme.text.secondary }}>
                Avondvoorstellingen<br />19:30 - 21:30
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="https://upstream.cafe/kerst"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg text-white backdrop-blur-sm"
              style={{
                background: theme.button.primary,
                border: `2px solid ${theme.accent.primary}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = theme.button.primaryHover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = theme.button.primary
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Ticket className="w-5 h-5 mr-2" />
              Tickets Reserveren
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            
            <motion.a
              href="#about"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border"
              style={{
                background: theme.button.secondary,
                borderColor: theme.button.secondaryBorder,
                color: theme.text.primary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = theme.button.secondaryHover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = theme.button.secondary
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Lees Meer
              <ChevronDown className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 flex justify-center"
          style={{ borderColor: theme.button.secondaryBorder }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 rounded-full mt-2"
            style={{ background: theme.text.accent }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
