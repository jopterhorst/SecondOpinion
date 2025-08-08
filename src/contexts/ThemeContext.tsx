'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Shared Apple-inspired theme with light and dark variants
export const getTheme = (mode: Theme) => ({
  background: {
    primary: mode === 'light' ? 'rgba(248, 250, 252, 1)' : 'rgba(15, 23, 42, 1)', // slate-50 / slate-900
    secondary: mode === 'light' ? 'rgba(241, 245, 249, 1)' : 'rgba(30, 41, 59, 1)', // slate-100 / slate-800
    accent: mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(51, 65, 85, 0.7)', // white/slate-700 with opacity
  },
  text: {
    primary: mode === 'light' ? 'rgb(15, 23, 42)' : 'rgb(248, 250, 252)', // slate-900 / slate-50
    secondary: mode === 'light' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)', // slate-700 / slate-300
    accent: mode === 'light' ? 'rgb(100, 116, 139)' : 'rgb(148, 163, 184)', // slate-500 / slate-400
  },
  accent: {
    primary: 'rgb(220, 38, 38)', // red-600 (same in both modes)
    secondary: 'rgb(34, 197, 94)', // green-500 (same in both modes)
    tertiary: 'rgb(251, 191, 36)', // amber-400 (same in both modes)
    blue: 'rgb(59, 130, 246)', // blue-500 (same in both modes)
  },
  button: {
    border: mode === 'light' ? 'rgba(226, 232, 240, 1)' : 'rgba(71, 85, 105, 1)', // slate-200 / slate-600
    hover: mode === 'light' ? 'rgba(241, 245, 249, 1)' : 'rgba(51, 65, 85, 1)', // slate-100 / slate-700
    primary: 'linear-gradient(135deg, rgb(220, 38, 38), rgb(185, 28, 28))', // red gradient
    primaryHover: 'linear-gradient(135deg, rgb(185, 28, 28), rgb(153, 27, 27))',
    secondary: mode === 'light' ? 'rgba(15, 23, 42, 0.1)' : 'rgba(248, 250, 252, 0.1)', // slate-900/slate-50 with opacity
    secondaryHover: mode === 'light' ? 'rgba(15, 23, 42, 0.2)' : 'rgba(248, 250, 252, 0.2)',
    secondaryBorder: mode === 'light' ? 'rgba(15, 23, 42, 0.2)' : 'rgba(248, 250, 252, 0.2)',
  },
  nav: {
    background: mode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(15, 23, 42, 0.85)', // white/slate-900 with opacity
    backgroundScrolled: mode === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.95)',
    border: mode === 'light' ? 'rgba(226, 232, 240, 0.3)' : 'rgba(148, 163, 184, 0.1)', // slate-200/slate-400 with low opacity
    text: mode === 'light' ? 'rgb(15, 23, 42)' : 'rgb(248, 250, 252)', // slate-900 / slate-50
    textSecondary: mode === 'light' ? 'rgb(100, 116, 139)' : 'rgb(148, 163, 184)', // slate-500 / slate-400
    textHover: 'rgb(34, 197, 94)', // green-500 (same in both modes)
  },
  border: mode === 'light' ? 'rgba(226, 232, 240, 0.3)' : 'rgba(148, 163, 184, 0.1)', // slate-200/slate-400 with low opacity
})
