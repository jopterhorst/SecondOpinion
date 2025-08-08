'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useTheme, getTheme } from '@/contexts/ThemeContext'

const ContactContent = () => {
  const { theme } = useTheme()
  const themeStyles = getTheme(theme)
  
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
    <div 
      className="min-h-screen"
      style={{ background: `linear-gradient(to bottom, ${themeStyles.background.primary}, ${themeStyles.background.secondary})` }}
    >
      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
              style={{ color: themeStyles.text.primary }}
            >
              We Horen Graag Van Je
            </h1>
            <p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90"
              style={{ color: themeStyles.text.secondary }}
            >
              Heb je vragen over Second Opinion of gewoon meer weten over Upstream? 
              We staan klaar om je te helpen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section 
        className="py-20"
        style={{ backgroundColor: themeStyles.background.secondary }}
      >
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
                className="p-8 rounded-2xl shadow-lg border text-center group transition-all duration-300"
                style={{ 
                  backgroundColor: themeStyles.background.accent,
                  borderColor: themeStyles.button.border 
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(45deg, ${themeStyles.accent.primary}, ${themeStyles.accent.primary}dd)` 
                  }}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ color: themeStyles.text.primary }}
                >
                  {info.title}
                </h3>
                <p 
                  className="text-lg font-semibold mb-2"
                  style={{ color: themeStyles.accent.tertiary }}
                >
                  {info.details}
                </p>
                <p 
                  className="text-sm"
                  style={{ color: themeStyles.text.accent }}
                >
                  {info.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section 
        className="py-20"
        style={{ backgroundColor: themeStyles.background.primary }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: themeStyles.text.primary }}
            >
              Stuur Ons Een Bericht
            </h2>
            <p 
              className="text-xl max-w-2xl mx-auto"
              style={{ color: themeStyles.text.secondary }}
            >
              Vul het formulier in en we nemen zo snel mogelijk contact met je op.
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="p-8 md:p-12 rounded-2xl shadow-2xl border"
            style={{ 
              backgroundColor: themeStyles.background.accent,
              borderColor: themeStyles.button.border 
            }}
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label 
                  htmlFor="name" 
                  className="block font-semibold mb-3"
                  style={{ color: themeStyles.text.primary }}
                >
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: themeStyles.background.secondary,
                    borderColor: themeStyles.button.border,
                    color: themeStyles.text.primary,
                    '--placeholder-color': themeStyles.text.accent
                  } as React.CSSProperties}
                  placeholder="Je volledige naam"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block font-semibold mb-3"
                  style={{ color: themeStyles.text.primary }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: themeStyles.background.secondary,
                    borderColor: themeStyles.button.border,
                    color: themeStyles.text.primary
                  }}
                  placeholder="je@email.com"
                />
              </div>
            </div>

            <div className="mb-8">
              <label 
                htmlFor="subject" 
                className="block font-semibold mb-3"
                style={{ color: themeStyles.text.primary }}
              >
                Onderwerp *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: themeStyles.background.secondary,
                  borderColor: themeStyles.button.border,
                  color: themeStyles.text.primary
                }}
              >
                <option value="">Selecteer een onderwerp</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <label 
                htmlFor="message" 
                className="block font-semibold mb-3"
                style={{ color: themeStyles.text.primary }}
              >
                Bericht *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                style={{ 
                  backgroundColor: themeStyles.background.secondary,
                  borderColor: themeStyles.button.border,
                  color: themeStyles.text.primary
                }}
                placeholder="Deel je vraag of bericht met ons..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50"
              style={{ 
                background: isSubmitting ? themeStyles.button.secondary : themeStyles.button.primary
              }}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = themeStyles.button.primaryHover
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = themeStyles.button.primary
                }
              }}
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
              <div 
                className="p-8 rounded-2xl shadow-lg border"
                style={{ 
                  backgroundColor: themeStyles.background.accent,
                  borderColor: themeStyles.button.border 
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: themeStyles.text.primary }}
                >
                  Ticket Reserveringen
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: themeStyles.text.secondary }}
                >
                  Toegang tot Second Opinion is gratis, maar reservering is vereist vanwege beperkte plaatsen. 
                  Tickets kunnen gereserveerd worden via onze externe partner.
                </p>
                <a 
                  href="https://upstream.cafe/kerst" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-white rounded-lg font-medium transition-colors"
                  style={{ backgroundColor: themeStyles.accent.primary }}
                >
                  Reserveer Tickets
                </a>
              </div>

              <div 
                className="p-8 rounded-2xl border"
                style={{ 
                  background: `linear-gradient(45deg, ${themeStyles.accent.primary}10, ${themeStyles.accent.secondary}10)`,
                  borderColor: `${themeStyles.accent.primary}30`
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: themeStyles.text.primary }}
                >
                  Vragen Over Geloof?
                </h3>
                <p 
                  className="mb-4"
                  style={{ color: themeStyles.text.secondary }}
                >
                  Second Opinion gaat niet alleen over entertainment - het is een uitnodiging om na te denken 
                  over hoop, vergeving en tweede kansen. Heb je vragen over geloof of zoek je iemand om mee te praten?
                </p>
                <p 
                  className="text-sm italic"
                  style={{ color: themeStyles.text.accent }}
                >
                  &ldquo;Want Ik weet wel, wat voor gedachten Ik over u denk, spreekt de HEERE: 
                  gedachten des vredes en niet des kwaads, dat Ik u geve een verwachte toekomst.&rdquo; - Jeremia 29:11
                </p>
              </div>

              <div 
                className="p-8 rounded-2xl shadow-lg border"
                style={{ 
                  backgroundColor: themeStyles.background.accent,
                  borderColor: themeStyles.button.border 
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: themeStyles.text.primary }}
                >
                  Volg Ons
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: themeStyles.text.secondary }}
                >
                  Blijf op de hoogte van de laatste nieuwtjes over Second Opinion en andere Upstream evenementen.
                </p>
                <div className="flex gap-4">
                  <motion.button
                    className="px-4 py-2 text-white rounded-lg font-medium transition-colors"
                    style={{ backgroundColor: themeStyles.accent.blue }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Facebook
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 text-white rounded-lg font-medium transition-colors"
                    style={{ 
                      background: `linear-gradient(45deg, ${themeStyles.accent.primary}, ${themeStyles.accent.secondary})` 
                    }}
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
