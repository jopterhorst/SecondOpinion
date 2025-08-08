'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Book, MapPin, Mail } from 'lucide-react'

const OverOnsContent = () => {
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

  const values = [
    {
      icon: Heart,
      title: "Hoop & Genezing",
      description: "We geloven in de kracht van Gods liefde om gebroken levens te genezen en nieuwe hoop te brengen."
    },
    {
      icon: Book,
      title: "Bijbelse Wijsheid",
      description: "Gods Woord bevat praktische antwoorden voor alle levensvragen en uitdagingen die we tegenkomen."
    },
    {
      icon: Users,
      title: "Gemeenschap",
      description: "Samen zijn we sterker. We bouwen aan een gemeenschap waar iedereen welkom is en gewaardeerd wordt."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            {...fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Over Ons
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Upstream - Een evangelisatie-initiatief geworteld in hoop, gemeenschap en de transformerende kracht van Gods liefde
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 rounded-full bg-green-900/40 text-green-300 text-sm font-medium mb-4">
                Onze Missie
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Licht in de Duisternis
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  In een wereld vol uitdagingen en onzekerheid, staat Upstream als een baken van hoop. 
                  We geloven dat elke persoon, ongeacht hun achtergrond of omstandigheden, waardevol 
                  is in Gods ogen en verdient het om geliefd en geaccepteerd te worden.
                </p>
                <p>
                  Ons evangelisatie-initiatief richt zich op het delen van Gods liefde door middel 
                  van authentieke relaties, praktische hulp en krachtige verhalen die levens transformeren. 
                  We zijn er voor mensen die worstelen met levensvragen, relationele problemen, 
                  verslavingen, of gewoon op zoek zijn naar doel en betekenis.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    "God heeft een plan voor jouw leven"
                  </h3>
                  <p className="text-gray-300 italic">
                    Want Ik weet wel, wat voor gedachten Ik over u denk, spreekt de HEERE: 
                    gedachten des vredes en niet des kwaads, dat Ik u geve een verwachte toekomst.
                  </p>
                  <p className="text-sm text-green-600 mt-2 font-medium">- Jeremia 29:11</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-red-900/40 text-red-300 text-sm font-medium mb-4">
              Onze Waarden
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Waar Wij Voor Staan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Onze waarden vormen de kern van alles wat we doen en bepalen hoe we mensen benaderen
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Praktische Antwoorden voor Levensvragen
            </h2>
            <div className="text-left space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <strong>Relatieproblemen?</strong> De Bijbel geeft duidelijke richtlijnen voor liefde, 
                vergeving en het bouwen van gezonde relaties.
              </p>
              <p className="text-lg">
                <strong>Financiële zorgen?</strong> Gods Woord bevat wijsheid over rentmeesterschap, 
                vrijgevigheid en vertrouwen op Gods voorzienigheid.
              </p>
              <p className="text-lg">
                <strong>Angst en onzekerheid?</strong> De Bijbel biedt vrede die alle verstand te boven gaat 
                en herinnert ons aan Gods trouwe zorg.
              </p>
              <p className="text-lg">
                <strong>Verslavingen en destructief gedrag?</strong> Er is hoop voor bevrijding en 
                vernieuwing door de kracht van Christus.
              </p>
              <p className="text-lg">
                <strong>Eenzaamheid en isolatie?</strong> God roept ons tot gemeenschap en heeft 
                ons geschapen voor betekenisvolle relaties.
              </p>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-r from-green-600 to-red-600 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Jij bent niet alleen in je strijd
              </h3>
              <p className="text-lg opacity-90">
                Of je nu worstelt met verslaving, relationele problemen, financiële stress, 
                of gewoon op zoek bent naar doel en richting in je leven - er is hoop. 
                God heeft een plan voor je leven en wil je helpen om door te breken naar vrijheid en vreugde.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Neem Contact Op
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Heb je vragen, wil je meer weten over ons geloof, of heb je gewoon iemand nodig om mee te praten? 
              We zijn er voor je.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700"
              variants={fadeInUp}
            >
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">info@upstream.nl</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700"
              variants={fadeInUp}
            >
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Locatie</h3>
              <p className="text-gray-300">Nederland</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OverOnsContent
