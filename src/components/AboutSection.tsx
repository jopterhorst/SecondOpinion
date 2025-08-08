'use client'

import { motion } from 'framer-motion'
import { Music, Heart, Star, Users } from 'lucide-react'

const features = [
  {
    icon: Music,
    title: 'Prachtige Muziek',
    description: 'Originele kerstliedjes die het hart raken'
  },
  {
    icon: Heart,
    title: 'Emotioneel Verhaal',
    description: 'Een verhaal over liefde, familie en vergeving'
  },
  {
    icon: Star,
    title: 'Professionele Cast',
    description: 'Getalenteerde performers brengen dit verhaal tot leven'
  },
  {
    icon: Users,
    title: 'Voor Alle Leeftijden',
    description: 'Een musical die het hele gezin kan waarderen'
  }
]

const AboutSection = () => {
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
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          {...fadeInUp}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">
            Over de Musical
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Een Verhaal van 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-green-600"> Transformatie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Second Opinion is een hartverwarmende kerstmusical die het verhaal vertelt van een familie 
            die opnieuw leert wat echt belangrijk is tijdens de kerstperiode. Een verhaal over hoop, 
            liefde en de kracht van een tweede kans.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div {...fadeInUp}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Het Verhaal</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
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
            className="relative h-96 bg-gradient-to-br from-red-200 to-green-200 rounded-2xl overflow-hidden shadow-2xl"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-center text-gray-700">
                <Star className="w-16 h-16 mx-auto mb-4 opacity-60" />
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
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Een Verhaal van Hoop
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
