'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@upstream.nl',
      description: 'Voor algemene vragen en informatie'
    },
    {
      icon: MapPin,
      title: 'Adres',
      details: 'Gebouw 055',
      description: 'Condorweg 1, 7332 AC Apeldoorn'
    },
    {
      icon: Clock,
      title: 'Kantooruren',
      details: 'Ma-Vr 9:00-17:00',
      description: 'Weekend op afspraak'
    }
  ]

  const subjects = [
    'Algemene vragen',
    'Media & Pers',
    'Samenwerking',
    'Technische ondersteuning',
    'Anders'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We Horen Graag Van Je
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Heb je vragen over Second Opinion of gewoon meer weten over Upstream? 
              We staan klaar om je te helpen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700 text-center group hover:border-christmas-red-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-christmas-red-500 to-christmas-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{info.title}</h3>
                <p className="text-christmas-gold-400 text-lg font-semibold mb-2">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stuur Ons Een Bericht
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Vul het formulier in en we nemen zo snel mogelijk contact met je op.
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-700"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-3">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-christmas-red-500 focus:ring-2 focus:ring-christmas-red-500/20 transition-all duration-300"
                  placeholder="Je volledige naam"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-christmas-red-500 focus:ring-2 focus:ring-christmas-red-500/20 transition-all duration-300"
                  placeholder="je@email.com"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="subject" className="block text-white font-semibold mb-3">
                Onderwerp *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-christmas-red-500 focus:ring-2 focus:ring-christmas-red-500/20 transition-all duration-300"
              >
                <option value="">Selecteer een onderwerp</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-white font-semibold mb-3">
                Bericht *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-christmas-red-500 focus:ring-2 focus:ring-christmas-red-500/20 transition-all duration-300 resize-none"
                placeholder="Deel je vraag of bericht met ons..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-christmas-red-600 to-christmas-red-700 hover:from-christmas-red-700 hover:to-christmas-red-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Versturen...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Verstuur Bericht
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div 
                className="mt-6 p-4 bg-green-600/20 border border-green-500/50 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-green-300">Je bericht is succesvol verzonden! We nemen snel contact met je op.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                className="mt-6 p-4 bg-red-600/20 border border-red-500/50 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="w-6 h-6 text-red-400" />
                <span className="text-red-300">Er is een fout opgetreden. Probeer het opnieuw of neem direct contact met ons op.</span>
              </motion.div>
            )}
          </motion.form>

          {/* Additional Information */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="space-y-8 mt-16">
              <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ticket Reserveringen
                </h3>
                <p className="text-gray-300 mb-6">
                  Toegang tot Second Opinion is gratis, maar reservering is vereist vanwege beperkte plaatsen. 
                  Tickets kunnen gereserveerd worden via onze externe partner.
                </p>
                <a 
                  href="#" 
                  className="inline-block px-6 py-3 bg-christmas-red-600 text-white rounded-lg font-medium hover:bg-christmas-red-700 transition-colors"
                >
                  Reserveer Tickets
                </a>
              </div>

              <div className="bg-gradient-to-br from-christmas-red-900/20 to-christmas-green-900/20 p-8 rounded-2xl border border-christmas-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Vragen Over Geloof?
                </h3>
                <p className="text-gray-300 mb-4">
                  Second Opinion gaat niet alleen over entertainment - het is een uitnodiging om na te denken 
                  over hoop, vergeving en tweede kansen. Heb je vragen over geloof of zoek je iemand om mee te praten?
                </p>
                <p className="text-sm text-gray-400 italic">
                  &ldquo;Want Ik weet wel, wat voor gedachten Ik over u denk, spreekt de HEERE: 
                  gedachten des vredes en niet des kwaads, dat Ik u geve een verwachte toekomst.&rdquo; - Jeremia 29:11
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Volg Ons
                </h3>
                <p className="text-gray-300 mb-6">
                  Blijf op de hoogte van de laatste nieuwtjes over Second Opinion en andere Upstream evenementen.
                </p>
                <div className="flex gap-4">
                  <motion.button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Facebook
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Instagram
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactContent
