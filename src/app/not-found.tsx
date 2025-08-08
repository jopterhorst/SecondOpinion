'use client'

import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-christmas-red-900 via-christmas-green-900 to-christmas-gold-900 flex items-center justify-center">
      <div className="text-center text-white max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.h1 
              className="text-8xl md:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-christmas-gold-400 to-christmas-red-400"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              404
            </motion.h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pagina Niet Gevonden
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Deze pagina lijkt verdwaald te zijn, net als een kerstcadeau dat onder de verkeerde boom is beland.
            </p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/">
              <motion.button
                className="flex items-center gap-2 bg-christmas-red-600 hover:bg-christmas-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5" />
                Terug naar Home
              </motion.button>
            </Link>
            
            <motion.button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Ga Terug
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
