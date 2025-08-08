'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme, getTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const currentTheme = getTheme(theme)

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg border transition-all duration-300"
      style={{
        background: currentTheme.background.accent,
        borderColor: currentTheme.button.border,
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Moon 
            className="w-5 h-5" 
            style={{ color: currentTheme.text.secondary }} 
          />
        ) : (
          <Sun 
            className="w-5 h-5" 
            style={{ color: currentTheme.accent.tertiary }} 
          />
        )}
      </motion.div>
    </motion.button>
  )
}
