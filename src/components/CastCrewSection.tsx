'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Star, Music } from 'lucide-react'
import { useTheme, getTheme } from '@/contexts/ThemeContext'

const CastCrewSection = () => {
  const { theme: mode } = useTheme()
  const theme = getTheme(mode)
  // Pre-generate stable random values to avoid hydration issues
  const backgroundElements = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      animateX: Math.random() * 30 - 15,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  }, [])

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
        staggerChildren: 0.15
      }
    }
  }

  const mainCharacters = [
    {
      name: "Sarah Matthews",
      character: "Emma - De Zoeker",
      description: "Een jonge professional die haar weg kwijt is geraakt tijdens het kerstseizoen, op zoek naar betekenis voorbij materieel succes.",
      traits: ["Ambitieus", "Kwetsbaar", "Zoekend"],
      icon: Heart
    },
    {
      name: "Michael Johnson",
      character: "David - De Scepticus",
      description: "Een weduwnaar die worstelt met zijn geloof na persoonlijk verlies, waarbij hij alles in twijfel trekt wat hij ooit geloofde over Kerstmis.",
      traits: ["Beschermend", "Gewond", "Sterk"],
      icon: Star
    },
    {
      name: "Grace Williams", 
      character: "Mary - De Gelovige",
      description: "Een oudere vrouw wiens onwankelbare geloof een baken van hoop wordt voor anderen in hun donkerste momenten.",
      traits: ["Wijs", "Meelevend", "Gelovig"],
      icon: Music
    },
    {
      name: "Jonathan Rivera",
      character: "Marcus - De Verloren Zoon",
      description: "Een man die thuiskomt na jaren weg te zijn geweest, op zoek naar vergeving en een tweede kans bij zijn vervreemde familie.",
      traits: ["Berouwvol", "Hoopvol", "Vastberaden"],
      icon: Users
    }
  ]

  const creativeTeam = [
    {
      name: "Ds. Amanda Foster",
      role: "Regisseur & Schrijver",
      description: "Hoofdpastor en creatieve visionair achter Second Opinion, met jaren ervaring in gemeente en theater."
    },
    {
      name: "Daniel Park",
      role: "Muziekdirecteur",
      description: "Bekroonde componist en aanbiddingsleider, die de originele muziek creëert die harten en zielen raakt."
    },
    {
      name: "Rebecca Chen",
      role: "Choreograaf",
      description: "Professionele danseres en bewegingsregisseur, die expressieve choreografie creëert die het verhaal vertelt door beweging."
    },
    {
      name: "Thomas Mitchell",
      role: "Technisch Directeur",
      description: "Ervaren theatertechnicus die verlichting, geluid en podiumontwerp beheert voor een meeslepende ervaring."
    }
  ]

  return (
    <div 
      className="min-h-screen"
      style={{ background: theme.background.primary }}
    >
      {/* Hero Section */}
      <section 
        className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${theme.accent.primary}dd, ${theme.accent.secondary}dd, ${theme.accent.tertiary}dd)`,
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ background: mode === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.6)' }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {backgroundElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute w-2 h-2 rounded-full"
              animate={{
                y: [0, -50, 0],
                x: [0, element.animateX, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
              }}
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                background: `${theme.accent.tertiary}33`, // amber with opacity
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-medium border mb-6"
              style={{
                background: `${theme.accent.primary}33`,
                color: theme.text.primary,
                borderColor: `${theme.accent.primary}4d`,
              }}
            >
              Ontmoet Onze Cast & Crew
            </span>
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              style={{ color: theme.text.primary }}
            >
              De Gezichten Achter
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.accent.tertiary}, ${theme.accent.primary}, ${theme.accent.secondary})`,
                }}
              >
                Second Opinion
              </span>
            </h1>
            <p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              Ontdek de getalenteerde individuen die dit transformerende verhaal tot leven brengen, 
              elk met hun unieke gaven om een onvergetelijke ervaring te creëren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Characters Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: theme.text.primary }}
            >
              Hoofdpersonages
            </h2>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: theme.text.secondary }}
            >
              Elk personage vertegenwoordigt een andere reis van geloof, twijfel en ontdekking, 
              verweven om een krachtig verhaal van verlossing te vertellen.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {mainCharacters.map((character) => (
              <motion.div
                key={character.name}
                className="rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                style={{
                  background: theme.background.accent,
                }}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="md:flex">
                  {/* Character Image Placeholder */}
                  <div 
                    className="md:w-1/2 h-64 md:h-auto relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent.primary}33, ${theme.accent.secondary}33, ${theme.accent.tertiary}33)`,
                    }}
                  >
                    <div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: mode === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.4)' }}
                    >
                      <div className="text-center" style={{ color: theme.text.primary }}>
                        <character.icon className="w-16 h-16 mx-auto mb-4 opacity-60" />
                        <p className="text-lg font-medium">Personage Foto</p>
                        <p className="text-sm opacity-75">Binnenkort Beschikbaar</p>
                      </div>
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="md:w-1/2 p-8">
                    <div className="mb-4">
                      <h3 
                        className="text-2xl font-bold mb-2"
                        style={{ color: theme.text.primary }}
                      >
                        {character.name}
                      </h3>
                      <h4 
                        className="text-lg font-semibold mb-4"
                        style={{ color: theme.accent.primary }}
                      >
                        {character.character}
                      </h4>
                    </div>

                    <p 
                      className="leading-relaxed mb-6"
                      style={{ color: theme.text.secondary }}
                    >
                      {character.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{
                            background: theme.background.secondary,
                            color: theme.text.primary,
                          }}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative Team Section */}
      <section 
        className="py-24"
        style={{ background: theme.background.secondary }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: theme.text.primary }}
            >
              Creatief Team
            </h2>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: theme.text.secondary }}
            >
              De visionaire kunstenaars en gemeenteleiders die Second Opinion 
              van concept naar podium brengen met excellentie en passie.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {creativeTeam.map((member) => (
              <motion.div
                key={member.name}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {/* Team Member Photo Placeholder */}
                <div 
                  className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent.primary}33, ${theme.accent.secondary}33)`,
                  }}
                >
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: mode === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.4)' }}
                  >
                    <div className="text-center" style={{ color: theme.text.primary }}>
                      <Users className="w-12 h-12 mx-auto mb-2 opacity-60" />
                      <p className="text-sm font-medium">Team Foto</p>
                      <p className="text-xs opacity-75">Binnenkort Beschikbaar</p>
                    </div>
                  </div>
                </div>

                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: theme.text.primary }}
                >
                  {member.name}
                </h3>
                <h4 
                  className="text-lg font-semibold mb-4"
                  style={{ color: theme.accent.primary }}
                >
                  {member.role}
                </h4>
                <p 
                  className="leading-relaxed"
                  style={{ color: theme.text.secondary }}
                >
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Wees Onderdeel van het Verhaal
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Sluit je bij ons aan voor een onvergetelijke avond terwijl deze ongelofelijke performers 
              Second Opinion tot leven brengen op het podium.
            </p>
            <motion.a
              href="https://upstream.cafe/kerst"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserveer Nu Je Plaatsen
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CastCrewSection
