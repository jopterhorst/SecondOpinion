'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Coffee, Play, BookOpen, Search } from 'lucide-react'

export default function OverOnsContent() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  }

  const series = [
    {
      title: "Tot jij mijn liefde voelt",
      description: "Hoe je huwelijk of relatie kunt verbeteren",
      icon: Heart
    },
    {
      title: "Hard tegen hart", 
      description: "Over de verharding van de samenleving",
      icon: Users
    },
    {
      title: "Lees geen Bijbeltekst",
      description: "Veelgehoorde bezwaren tegen de Bijbel onderzocht",
      icon: BookOpen
    },
    {
      title: "Leedvermaak",
      description: "Over het lijden in deze wereld",
      icon: Search
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Over Upstream
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Een leidraad voor het leven - naast mensen staan in de uitdagingen en vragen van het leven
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Hoe sta jij in het leven?
            </h2>
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Heb je alles op de rit of is het leven een flinke uitdaging voor je? In het algemeen is de 
                Westerse wereld op bijna alle maatstaven welvarender dan ooit. Tegelijkertijd blijft het leven 
                voor de meeste mensen vol obstakels.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Denk bijvoorbeeld aan relaties die stroef lopen. Werkloosheid. Banen zonder betekenis. 
                Gescheiden gezinnen en families. Stress, spanning en ziekte. Deze realiteit van het leven 
                en in onze levens was de aanleiding voor Upstream...
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Een leidraad voor het leven
            </h2>
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Upstream is ontstaan vanuit het verlangen om naast mensen te gaan staan in de uitdagingen 
                en vragen van het leven, omdat we hebben ontdekt dat de Bijbel een leidraad is die antwoorden, 
                structuur en hoop biedt.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Bij Upstream vertrekken we daarom altijd vanuit een thema dat relevant is voor jouw leven.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Geen aannames
            </h2>
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Bij Upstream doen we geen aannames. Het vertrekpunt in alles wat we doen is dan ook dat het 
                helemaal niet vanzelfsprekend is dat er überhaupt iets bovennatuurlijks bestaat.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Vanuit dit vertrekpunt willen we met je delen hoe we ervaren dat de God van de Bijbel antwoorden 
                heeft op rationale vragen, maar ook het antwoord is op onze gevoelens en verlangens.
              </p>
            </div>
          </motion.div>

          {/* Series Grid */}
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Onze Series
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {series.map((serie) => (
                <motion.div
                  key={serie.title}
                  className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-christmas-red-500 to-christmas-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <serie.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {serie.title}
                      </h3>
                      <p className="text-gray-300">
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
            <div className="bg-gradient-to-br from-christmas-red-500/10 to-christmas-green-500/10 rounded-2xl p-8 shadow-xl border border-gray-700 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-christmas-red-500 to-christmas-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bezoek ook eens Upstream Studio
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Je kunt Upstream online kijken en ons volgen op allerlei social media kanalen, maar online 
                heeft natuurlijk ook beperkingen. Je bent niet de enige die zoekt naar God en antwoorden op 
                levensvragen.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                In onze studio - Gebouw 055 te Apeldoorn - maken we elke zondagochtend een opname. We nodigen 
                je graag uit voor deze live beleving.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed italic">
                Haal een lekker bakje koffie of thee (uiteraard kosteloos) en neem je drankje gerust mee naar binnen!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ervaar Second Opinion Live
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ontdek hoe Upstream de kerstboodschap tot leven brengt in onze bijzondere musical.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-gradient-to-r from-christmas-red-600 to-christmas-red-700 hover:from-christmas-red-700 hover:to-christmas-red-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
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
