'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Image as ImageIcon, Video } from 'lucide-react'
import { useTheme, getTheme } from '@/contexts/ThemeContext'

interface MediaItem {
  id: number
  type: 'image' | 'video'
  src: string
  thumbnail: string
  alt: string
  category: string
  title: string
}

const GalleryContent = () => {
  const { theme } = useTheme()
  const themeStyles = getTheme(theme)
  
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)

  const categories = [
    { key: 'all', label: 'Alles', icon: '🎭' },
    { key: 'performance', label: 'Opvoering', icon: '🎬' },
    { key: 'behind-scenes', label: 'Achter de schermen', icon: '🎪' },
    { key: 'cast', label: 'Cast & Crew', icon: '👥' },
    { key: 'venue', label: 'Locatie', icon: '🏛️' },
  ]

  // Sample media items - replace with your actual content
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: '/images/gallery/placeholder-1.jpg',
      thumbnail: '/images/gallery/placeholder-1.jpg',
      alt: 'Second Opinion Musical Performance',
      category: 'performance',
      title: 'Hoofdscène Musical'
    },
    {
      id: 2,
      type: 'video',
      src: '/videos/gallery/placeholder-1.mp4',
      thumbnail: '/images/gallery/video-thumb-1.jpg',
      alt: 'Behind the Scenes Video',
      category: 'behind-scenes',
      title: 'Achter de Schermen'
    },
    {
      id: 3,
      type: 'image',
      src: '/images/gallery/placeholder-2.jpg',
      thumbnail: '/images/gallery/placeholder-2.jpg',
      alt: 'Cast Photo',
      category: 'cast',
      title: 'Cast Fotoshoot'
    },
    {
      id: 4,
      type: 'image',
      src: '/images/gallery/placeholder-3.jpg',
      thumbnail: '/images/gallery/placeholder-3.jpg',
      alt: 'Gebouw 055 Venue',
      category: 'venue',
      title: 'Gebouw 055'
    },
    {
      id: 5,
      type: 'image',
      src: '/images/gallery/placeholder-4.jpg',
      thumbnail: '/images/gallery/placeholder-4.jpg',
      alt: 'Performance Scene',
      category: 'performance',
      title: 'Kerstscène'
    },
    {
      id: 6,
      type: 'image',
      src: '/images/gallery/placeholder-5.jpg',
      thumbnail: '/images/gallery/placeholder-5.jpg',
      alt: 'Rehearsal',
      category: 'behind-scenes',
      title: 'Repetitie Momenten'
    }
  ]

  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  }

  const openLightbox = (media: MediaItem) => {
    setSelectedMedia(media)
  }

  const closeLightbox = () => {
    setSelectedMedia(null)
  }

  return (
    <div 
      className="min-h-screen"
      style={{ background: `linear-gradient(to bottom, ${themeStyles.background.primary}, ${themeStyles.background.secondary})` }}
    >
      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
              style={{ color: themeStyles.text.primary }}
            >
              Galerij
            </h1>
            <p 
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: themeStyles.text.secondary }}
            >
              Beleef de magie van Second Opinion door onze foto&apos;s en video&apos;s. 
              Van achter de schermen tot de hoogtepunten van de voorstelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-wrap gap-2 sm:gap-4 justify-center"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category.key
                    ? 'text-white shadow-lg scale-105'
                    : 'border transition-all duration-300'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.key 
                    ? themeStyles.accent.primary 
                    : themeStyles.background.accent,
                  color: selectedCategory === category.key 
                    ? 'white' 
                    : themeStyles.text.primary,
                  borderColor: selectedCategory === category.key 
                    ? 'transparent' 
                    : themeStyles.button.border
                }}
                whileHover={{ scale: selectedCategory === category.key ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-1 sm:mr-2">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            layout
          >
            <AnimatePresence>
              {filteredMedia.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <div 
                    className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    style={{ backgroundColor: themeStyles.background.secondary }}
                  >
                    {/* Placeholder for images */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(45deg, ${themeStyles.accent.primary}20, ${themeStyles.accent.secondary}20)` 
                      }}
                    >
                      {item.type === 'video' ? (
                        <Video className="w-16 h-16" style={{ color: themeStyles.text.accent }} />
                      ) : (
                        <ImageIcon className="w-16 h-16" style={{ color: themeStyles.text.accent }} />
                      )}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        {item.type === 'video' ? (
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        ) : (
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-white" />
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredMedia.length === 0 && (
            <motion.div 
              className="text-center py-20"
              {...fadeInUp}
            >
              <p 
                className="text-2xl mb-4"
                style={{ color: themeStyles.text.accent }}
              >
                Geen media gevonden
              </p>
              <p style={{ color: themeStyles.text.accent }}>
                Probeer een andere categorie te selecteren
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Media Content */}
              <div 
                className="rounded-lg overflow-hidden"
                style={{ backgroundColor: themeStyles.background.secondary }}
              >
                {selectedMedia.type === 'video' ? (
                  <div 
                    className="aspect-video flex items-center justify-center"
                    style={{ backgroundColor: themeStyles.background.accent }}
                  >
                    <Video className="w-24 h-24" style={{ color: themeStyles.text.accent }} />
                    <p className="ml-4" style={{ color: themeStyles.text.accent }}>
                      Video Player Placeholder
                    </p>
                  </div>
                ) : (
                  <div 
                    className="aspect-[4/3] flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(45deg, ${themeStyles.accent.primary}20, ${themeStyles.accent.secondary}20)` 
                    }}
                  >
                    <ImageIcon className="w-24 h-24" style={{ color: themeStyles.text.accent }} />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: themeStyles.text.primary }}
                  >
                    {selectedMedia.title}
                  </h3>
                  <p style={{ color: themeStyles.text.secondary }}>
                    {selectedMedia.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section 
        className="py-16 sm:py-20"
        style={{ backgroundColor: themeStyles.background.secondary }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: themeStyles.text.primary }}
            >
              Kom Naar De Voorstelling
            </h2>
            <p 
              className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
              style={{ color: themeStyles.text.secondary }}
            >
              Ervaar Second Opinion live in Gebouw 055. Reserveer nu je gratis tickets voor deze bijzondere kerstmusical.
            </p>
            <motion.a
              href="https://upstream.cafe/kerst"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ 
                background: themeStyles.button.primary,
                backgroundImage: themeStyles.button.primary 
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = themeStyles.button.primaryHover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = themeStyles.button.primary
              }}
            >
              Reserveer Je Tickets
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GalleryContent
