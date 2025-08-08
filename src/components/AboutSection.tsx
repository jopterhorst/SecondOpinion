'use client'

import { motion } from 'framer-motion'
import { Music, Heart, Star, Users } from 'lucide-react'
import { useTheme, getTheme } from '@/contexts/ThemeContext'

const AboutSection = () => {
  const { theme: mode } = useTheme()
  const theme = getTheme(mode)
  
  const features = [
    {
      icon: Music,
      title: 'Prachtige Muziek',
      description: 'Originele kerstliedjes die het hart raken',
      color: theme.accent.tertiary, // amber-400
    },
    {
      icon: Heart,
      title: 'Emotioneel Verhaal',
      description: 'Een verhaal over liefde, familie en vergeving',
      color: theme.accent.primary, // red-600
    },
    {
      icon: Star,
      title: 'Professionele Cast',
      description: 'Getalenteerde performers brengen dit verhaal tot leven',
      color: theme.accent.secondary, // green-500
    },
    {
      icon: Users,
      title: 'Voor Alle Leeftijden',
      description: 'Een musical die het hele gezin kan waarderen',
      color: theme.accent.blue, // blue-500
    }
  ]
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  }

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section 
      id="about" 
      className="py-20 lg:py-32"
      style={{ background: theme.background.primary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          {...fadeInUp}
        >
          <div
            className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm mb-6 shadow-sm border"
            style={{
              background: theme.background.accent,
              borderColor: theme.button.border,
              color: theme.text.secondary,
            }}
          >
            <Star className="w-4 h-4 mr-2" style={{ color: theme.accent.tertiary }} />
            <span className="text-sm font-medium">Over de Musical</span>
          </div>
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{ color: theme.text.primary }}
          >
            Een Verhaal van
            <span 
              className="block text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.accent.primary}, ${theme.accent.tertiary}, ${theme.accent.secondary})`,
              }}
            >
              Hoop & Genezing
            </span>
          </h2>
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: theme.text.secondary }}
          >
            Second Opinion neemt je mee op een emotionele reis door de gangen van een ziekenhuis tijdens de kerstdagen. 
            Hier vinden we verhalen van moed, liefde en de kracht van hoop die zelfs in de donkerste momenten straalt.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div {...fadeInUp}>
            <h3 
              className="text-3xl font-bold mb-6"
              style={{ color: theme.text.primary }}
            >
              Het Verhaal
            </h3>
            <div 
              className="space-y-4 leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              <p>
                In een tijd waarin iedereen druk bezig is met de perfecte kerst voorbereiden, 
                wordt de familie Thompson geconfronteerd met een onverwachte wending. Een medische 
                diagnose zet hun wereld op zijn kop en dwingt hen om hun prioriteiten te heroverwegen.
              </p>
              <p>
                Wat begint als een zoektocht naar een &ldquo;tweede mening&rdquo; wordt een reis van ontdekking 
                waarin ze leren dat de grootste geschenken niet onder de kerstboom liggen, maar 
                in de liefde die we met elkaar delen.
              </p>
              <p>
                Door prachtige muziek, ontroerende dialogen en momenten van humor neemt Second Opinion 
                het publiek mee op een emotionele reis die laat zien dat kerst draait om hoop, 
                vergeving en de kracht van familie.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl border"
            style={{
              background: `linear-gradient(135deg, ${theme.background.secondary}, ${theme.background.accent})`,
              borderColor: theme.button.border,
            }}
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-center justify-center">
              <div className="text-center" style={{ color: theme.text.primary }}>
                <Star className="w-16 h-16 mx-auto mb-4 opacity-60" style={{ color: theme.accent.tertiary }} />
                <p className="text-lg font-medium">Musical Foto</p>
                <p className="text-sm opacity-75">Binnenkort Beschikbaar</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:scale-105"
              style={{
                background: theme.background.accent,
                borderColor: theme.button.border,
              }}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                style={{
                  background: feature.color,
                }}
              >
                <feature.icon className="w-7 h-7 text-white drop-shadow-sm" />
              </div>
              <h4 
                className="text-xl font-semibold mb-3"
                style={{ color: theme.text.primary }}
              >
                {feature.title}
              </h4>
              <p 
                className="leading-relaxed"
                style={{ color: theme.text.secondary }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border"
          style={{
            background: theme.background.accent,
            borderColor: theme.button.border,
          }}
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center">
            <h3 
              className="text-3xl font-bold mb-6"
              style={{ color: theme.text.primary }}
            >
              Een Verhaal van Hoop
            </h3>
            <p 
              className="text-xl max-w-4xl mx-auto leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              Second Opinion laat zien dat zelfs in de moeilijkste tijden, liefde en geloof 
              ons de weg kunnen wijzen naar licht en hoop. Het is een verhaal dat iedereen 
              zal raken, van jong tot oud, en dat de ware betekenis van kerst weer tot leven brengt.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
