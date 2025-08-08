'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Star, Music } from 'lucide-react'

const CastCrewSection = () => {
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-green-900 to-amber-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {backgroundElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
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
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-block px-4 py-2 rounded-full bg-red-600/20 text-red-300 text-sm font-medium border border-red-400/30 mb-6">
              Ontmoet Onze Cast & Crew
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              De Gezichten Achter
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-green-400">
                Second Opinion
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hoofdpersonages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="md:flex">
                  {/* Character Image Placeholder */}
                  <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-red-200 via-green-200 to-amber-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center text-gray-700">
                        <character.icon className="w-16 h-16 mx-auto mb-4 opacity-60" />
                        <p className="text-lg font-medium">Personage Foto</p>
                        <p className="text-sm opacity-75">Binnenkort Beschikbaar</p>
                      </div>
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="md:w-1/2 p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{character.name}</h3>
                      <h4 className="text-lg font-semibold text-red-600 mb-4">{character.character}</h4>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {character.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Creatief Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-red-200 to-green-200 rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-black/20 flex items-center justify-center">
                    <div className="text-center text-gray-700">
                      <Users className="w-12 h-12 mx-auto mb-2 opacity-60" />
                      <p className="text-sm font-medium">Team Foto</p>
                      <p className="text-xs opacity-75">Binnenkort Beschikbaar</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <h4 className="text-lg font-semibold text-red-600 mb-4">{member.role}</h4>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
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
            <motion.button
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserveer Nu Je Plaatsen
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CastCrewSection
