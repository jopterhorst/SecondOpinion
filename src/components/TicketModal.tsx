'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, Users, MapPin, Ticket, CheckCircle } from 'lucide-react'

interface TicketModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Show {
  id: number
  date: string
  time: string
  type: string
  available: number
  total: number
}

const TicketModal = ({ isOpen, onClose }: TicketModalProps) => {
  const [step, setStep] = useState<'select' | 'details' | 'confirmation'>('select')
  const [selectedShow, setSelectedShow] = useState<Show | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: 1,
    specialRequests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const shows = [
    {
      id: 1,
      date: '2025-12-13',
      time: '19:30',
      type: 'Avondvoorstelling',
      available: 85,
      total: 100
    },
    {
      id: 2,
      date: '2025-12-14',
      time: '15:00',
      type: 'Matinee',
      available: 92,
      total: 100
    },
    {
      id: 3,
      date: '2025-12-14',
      time: '19:30',
      type: 'Avondvoorstelling',
      available: 78,
      total: 100
    },
    {
      id: 4,
      date: '2025-12-19',
      time: '19:30',
      type: 'Avondvoorstelling',
      available: 67,
      total: 100
    },
    {
      id: 5,
      date: '2025-12-20',
      time: '15:00',
      type: 'Matinee',
      available: 73,
      total: 100
    },
    {
      id: 6,
      date: '2025-12-20',
      time: '19:30',
      type: 'Avondvoorstelling',
      available: 45,
      total: 100
    },
    {
      id: 7,
      date: '2025-12-21',
      time: '15:00',
      type: 'Matinee',
      available: 58,
      total: 100
    },
    {
      id: 8,
      date: '2025-12-21',
      time: '19:30',
      type: 'Avondvoorstelling',
      available: 32,
      total: 100
    },
    {
      id: 9,
      date: '2025-12-23',
      time: '19:30',
      type: 'Avondvoorstelling',
      available: 41,
      total: 100
    },
    {
      id: 10,
      date: '2025-12-24',
      time: '15:00',
      type: 'Kerst Matinee',
      available: 29,
      total: 100
    },
    {
      id: 11,
      date: '2025-12-24',
      time: '19:30',
      type: 'Kerstavond Voorstelling',
      available: 15,
      total: 100
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('nl-NL', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'tickets' ? parseInt(value) : value
    }))
  }

  const handleShowSelect = (show: Show) => {
    setSelectedShow(show)
    setStep('details')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate booking process
    setTimeout(() => {
      setIsSubmitting(false)
      setStep('confirmation')
    }, 2000)
  }

  const resetModal = () => {
    setStep('select')
    setSelectedShow(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      tickets: 1,
      specialRequests: ''
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {step === 'select' && 'Selecteer Voorstelling'}
                  {step === 'details' && 'Reserveringsgegevens'}
                  {step === 'confirmation' && 'Reservering Bevestigd'}
                </h2>
                <p className="text-gray-600">
                  {step === 'select' && 'Kies je gewenste voorstelling uit'}
                  {step === 'details' && 'Vul je gegevens in voor de reservering'}
                  {step === 'confirmation' && 'Je reservering is succesvol aangemaakt'}
                </p>
              </div>
              <button
                onClick={step === 'confirmation' ? resetModal : onClose}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="max-h-[calc(90vh-100px)] overflow-y-auto">
              {/* Step 1: Show Selection */}
              {step === 'select' && (
                <div className="p-6">
                  <div className="space-y-4">
                    {shows.map((show) => (
                      <motion.div
                        key={show.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-christmas-red-300 hover:bg-christmas-red-50 transition-all cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleShowSelect(show)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <div className="flex items-center gap-2 text-gray-900">
                                <Calendar className="w-4 h-4 text-christmas-red-500" />
                                <span className="font-semibold">{formatDate(show.date)}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4 h-4 text-christmas-green-500" />
                                <span>{show.time}</span>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-2">{show.type}</p>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-christmas-gold-500" />
                              <span className="text-sm text-gray-600">
                                {show.available} van {show.total} plaatsen beschikbaar
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="w-16 h-16 bg-gradient-to-br from-christmas-red-500 to-christmas-green-500 rounded-full flex items-center justify-center mb-2">
                              <Ticket className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-xs font-medium text-gray-500">Gratis</span>
                          </div>
                        </div>
                        
                        {/* Availability bar */}
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-christmas-green-500 to-christmas-red-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(show.available / show.total) * 100}%` }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Details Form */}
              {step === 'details' && selectedShow && (
                <div className="p-6">
                  {/* Selected Show Summary */}
                  <div className="bg-christmas-red-50 border border-christmas-red-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Geselecteerde Voorstelling</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-christmas-red-500" />
                        <span>{formatDate(selectedShow.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-christmas-green-500" />
                        <span>{selectedShow.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-christmas-gold-500" />
                        <span>Gebouw 055</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ticket className="w-4 h-4 text-christmas-red-500" />
                        <span>Gratis toegang</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Volledige Naam *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christmas-red-500 focus:border-transparent"
                          placeholder="Je volledige naam"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Adres *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christmas-red-500 focus:border-transparent"
                          placeholder="je@email.nl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefoonnummer
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christmas-red-500 focus:border-transparent"
                          placeholder="+31 6 12345678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Aantal Tickets *
                        </label>
                        <select
                          name="tickets"
                          value={formData.tickets}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christmas-red-500 focus:border-transparent"
                        >
                          {[1,2,3,4,5,6,7,8].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'ticket' : 'tickets'}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bijzondere Wensen (optioneel)
                      </label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christmas-red-500 focus:border-transparent resize-none"
                        placeholder="Bijv. rolstoel toegankelijke plaatsen, groepsreservering, etc."
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Belangrijk:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Toegang is gratis, maar reservering is verplicht</li>
                        <li>• Je ontvangt een bevestiging per email</li>
                        <li>• Zaal opent 30 minuten voor aanvang</li>
                        <li>• Bij annulering graag tijdig contact opnemen</li>
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep('select')}
                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      >
                        Terug
                      </button>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-christmas-red-600 to-christmas-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-christmas-red-700 hover:to-christmas-green-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Reserveren...
                          </>
                        ) : (
                          <>
                            <Ticket className="w-5 h-5" />
                            Reservering Bevestigen
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 'confirmation' && selectedShow && (
                <div className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Reservering Succesvol!
                  </h3>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                    <h4 className="font-semibold text-gray-900 mb-4">Reserveringsdetails:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Naam:</span>
                        <span className="text-gray-900">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="text-gray-900">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Voorstelling:</span>
                        <span className="text-gray-900">{formatDate(selectedShow.date)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tijd:</span>
                        <span className="text-gray-900">{selectedShow.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tickets:</span>
                        <span className="text-gray-900">{formData.tickets}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-christmas-green-50 border border-christmas-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-christmas-green-600 mt-0.5" />
                      <div className="text-left">
                        <p className="text-sm text-christmas-green-800 font-medium mb-1">
                          Bevestiging verzonden
                        </p>
                        <p className="text-xs text-christmas-green-700">
                          Je ontvangt binnen enkele minuten een bevestigingsmail met alle details 
                          en praktische informatie voor je bezoek.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={resetModal}
                    className="w-full bg-gradient-to-r from-christmas-red-600 to-christmas-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-christmas-red-700 hover:to-christmas-green-700 transition-all duration-300"
                  >
                    Sluiten
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TicketModal
