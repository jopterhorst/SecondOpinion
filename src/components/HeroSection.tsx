'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Ticket } from 'lucide-react'

const HeroSection = () => {
  // Pre-generate stable random values to avoid hydration issues
  const backgroundElements = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      animateX: Math.random() * 50 - 25,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-red-950 to-amber-950">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, element.animateX, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
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
          <span className="inline-block px-4 py-2 rounded-full bg-red-600/20 text-red-300 text-sm font-medium border border-red-400/30 mb-6">
            Upstream Kerstmusical 2025
          </span>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Second
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-green-400">
              Opinion
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Een transformerende kerstmusical die perspectieven uitdaagt en 
            harten opent voor de ware betekenis van hoop, verlossing en tweede kansen.
          </motion.p>
        </motion.div>

        {/* Show Information Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-left">
            <Calendar className="w-8 h-8 text-yellow-400 mb-3" />
            <h3 className="text-white font-semibold text-lg mb-2">Voorstellingen</h3>
            <p className="text-gray-300">20-22 december 2025</p>
            <p className="text-gray-400 text-sm">Avond & Matinee Shows</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-left">
            <MapPin className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-white font-semibold text-lg mb-2">Locatie</h3>
            <p className="text-gray-300">Gebouw 055</p>
            <p className="text-gray-400 text-sm">Condorweg 1, Apeldoorn</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-left">
            <Ticket className="w-8 h-8 text-red-400 mb-3" />
            <h3 className="text-white font-semibold text-lg mb-2">Tickets</h3>
            <p className="text-gray-300">Gratis Toegang</p>
            <p className="text-gray-400 text-sm">Reservering Vereist</p>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a
            href="#"
            className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserveer Je Plaatsen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.button
            className="group bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meer Informatie
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
