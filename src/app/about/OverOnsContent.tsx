'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Coffee, Play, BookOpen, Search, Star } from 'lucide-react'
import { useTheme, getTheme } from '@/contexts/ThemeContext'

export default function OverOnsContent() {
  const { theme: mode } = useTheme()
  const theme = getTheme(mode)
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

  const series = [
    {
      title: "Tot jij mijn liefde voelt",
      description: "Hoe je huwelijk of relatie kunt verbeteren",
      icon: Heart,
      color: theme.accent.primary, // red-600
    },
    {
      title: "Hard tegen hart", 
      description: "Over de verharding van de samenleving",
      icon: Users,
      color: theme.accent.blue, // blue-500
    },
    {
      title: "Lees geen Bijbeltekst",
      description: "Veelgehoorde bezwaren tegen de Bijbel onderzocht",
      icon: BookOpen,
      color: theme.accent.secondary, // green-500
    },
    {
      title: "Leedvermaak",
      description: "Over het lijden in deze wereld",
      icon: Search,
      color: theme.accent.tertiary, // amber-400
    }
  ]

  return (
    <div 
      className="min-h-screen"
      style={{ background: theme.background.primary }}
    >
      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <div
              className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm mb-6 shadow-sm border"
              style={{
                background: theme.background.accent,
                borderColor: theme.button.border,
                color: theme.text.secondary,
              }}
            >
              <Star className="w-4 h-4 mr-2" style={{ color: theme.accent.tertiary }} />
              <span className="text-sm font-medium">Over Upstream</span>
            </div>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 tracking-tight"
              style={{ color: theme.text.primary }}
            >
              Over 
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.accent.primary}, ${theme.accent.tertiary}, ${theme.accent.secondary})`,
                }}
              >
                Upstream
              </span>
            </h1>
            <p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              Een leidraad voor het leven - naast mensen staan in de uitdagingen en vragen van het leven
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight"
              style={{ color: theme.text.primary }}
            >
              Hoe sta jij in het leven?
            </h2>
            <div 
              className="backdrop-blur-sm rounded-2xl p-8 shadow-xl border"
              style={{
                background: theme.background.accent,
                borderColor: theme.button.border,
              }}
            >
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ color: theme.text.secondary }}
              >
                Heb je alles op de rit of is het leven een flinke uitdaging voor je? In het algemeen is de 
                Westerse wereld op bijna alle maatstaven welvarender dan ooit. Tegelijkertijd blijft het leven 
                voor de meeste mensen vol obstakels.
              </p>
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ color: theme.text.secondary }}
              >
                Denk bijvoorbeeld aan relaties die stroef lopen. Werkloosheid. Banen zonder betekenis. 
                Gescheiden gezinnen en families. Stress, spanning en ziekte. Deze realiteit van het leven 
                en in onze levens was de aanleiding voor Upstream...
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight"
              style={{ color: theme.text.primary }}
            >
              Een leidraad voor het leven
            </h2>
            <div 
              className="backdrop-blur-sm rounded-2xl p-8 shadow-xl border"
              style={{
                background: theme.background.accent,
                borderColor: theme.button.border,
              }}
            >
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ color: theme.text.secondary }}
              >
                Upstream is ontstaan vanuit het verlangen om naast mensen te gaan staan in de uitdagingen 
                en vragen van het leven, omdat we hebben ontdekt dat de Bijbel een leidraad is die antwoorden, 
                structuur en hoop biedt.
              </p>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: theme.text.secondary }}
              >
                Bij Upstream vertrekken we daarom altijd vanuit een thema dat relevant is voor jouw leven.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight"
              style={{ color: theme.text.primary }}
            >
              Geen aannames
            </h2>
            <div 
              className="backdrop-blur-sm rounded-2xl p-8 shadow-xl border"
              style={{
                background: theme.background.accent,
                borderColor: theme.button.border,
              }}
            >
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ color: theme.text.secondary }}
              >
                Bij Upstream doen we geen aannames. Het vertrekpunt in alles wat we doen is dan ook dat het 
                helemaal niet vanzelfsprekend is dat er überhaupt iets bovennatuurlijks bestaat.
              </p>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: theme.text.secondary }}
              >
                Vanuit dit vertrekpunt willen we met je delen hoe we ervaren dat de God van de Bijbel antwoorden 
                heeft op rationale vragen, maar ook het antwoord is op onze gevoelens en verlangens.
              </p>
            </div>
          </motion.div>

          {/* Series Grid */}
          <motion.div 
            {...fadeInUp} 
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight"
              style={{ color: theme.text.primary }}
            >
              Onze Series
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {series.map((serie, index) => (
                <motion.div
                  key={serie.title}
                  className="backdrop-blur-sm rounded-2xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: theme.background.accent,
                    borderColor: theme.button.border,
                  }}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{
                        background: serie.color,
                      }}
                    >
                      <serie.icon className="w-7 h-7 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <h3 
                        className="text-xl font-bold mb-3"
                        style={{ color: theme.text.primary }}
                      >
                        {serie.title}
                      </h3>
                      <p 
                        className="leading-relaxed"
                        style={{ color: theme.text.secondary }}
                      >
                        {serie.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Studio Section */}
          <motion.div {...fadeInUp}>
            <div 
              className="rounded-2xl p-8 shadow-xl border text-center"
              style={{
                background: `linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(251, 191, 36, 0.1), rgba(34, 197, 94, 0.1))`,
                borderColor: theme.button.border,
              }}
            >
              <div 
                className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{
                  background: theme.accent.blue,
                }}
              >
                <Coffee className="w-10 h-10 text-white drop-shadow-sm" />
              </div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
                style={{ color: theme.text.primary }}
              >
                Bezoek ook eens Upstream Studio
              </h2>
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ color: theme.text.secondary }}
              >
                Je kunt Upstream online kijken en ons volgen op allerlei social media kanalen, maar online 
                heeft natuurlijk ook beperkingen. Je bent niet de enige die zoekt naar God en antwoorden op 
                levensvragen.
              </p>
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ color: theme.text.secondary }}
              >
                In onze studio - Gebouw 055 te Apeldoorn - maken we elke zondagochtend een opname. We nodigen 
                je graag uit voor deze live beleving.
              </p>
              <p 
                className="text-lg leading-relaxed italic"
                style={{ color: theme.text.accent }}
              >
                Haal een lekker bakje koffie of thee (uiteraard kosteloos) en neem je drankje gerust mee naar binnen!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20"
        style={{ background: theme.background.secondary }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
              style={{ color: theme.text.primary }}
            >
              Ervaar Second Opinion Live
            </h2>
            <p 
              className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              Ontdek hoe Upstream de kerstboodschap tot leven brengt in onze bijzondere musical.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl border"
              style={{
                background: `linear-gradient(135deg, ${theme.accent.primary}, ${theme.accent.primary}dd)`,
                color: 'white',
                borderColor: theme.accent.primary,
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(220, 38, 38, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Meer Informatie
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
