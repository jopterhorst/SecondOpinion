'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Image as ImageIcon, Video } from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Galerij
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Beleef de magie van Second Opinion door onze foto&apos;s en video&apos;s. 
              Van achter de schermen tot de hoogtepunten van de voorstelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-christmas-red-600 text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600'
                }`}
                whileHover={{ scale: selectedCategory === category.key ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  <div className="relative aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Placeholder for images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-christmas-red-500/20 to-christmas-green-500/20 flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Video className="w-16 h-16 text-gray-400" />
                      ) : (
                        <ImageIcon className="w-16 h-16 text-gray-400" />
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
              <p className="text-2xl text-gray-400 mb-4">Geen media gevonden</p>
              <p className="text-gray-500">Probeer een andere categorie te selecteren</p>
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
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                {selectedMedia.type === 'video' ? (
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <Video className="w-24 h-24 text-gray-400" />
                    <p className="text-gray-400 ml-4">Video Player Placeholder</p>
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-christmas-red-500/20 to-christmas-green-500/20 flex items-center justify-center">
                    <ImageIcon className="w-24 h-24 text-gray-400" />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{selectedMedia.title}</h3>
                  <p className="text-gray-400">{selectedMedia.alt}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kom Naar De Voorstelling
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ervaar Second Opinion live in Gebouw 055. Reserveer nu je gratis tickets voor deze bijzondere kerstmusical.
            </p>
            <motion.a
              href="#"
              className="inline-block bg-gradient-to-r from-christmas-red-600 to-christmas-red-700 hover:from-christmas-red-700 hover:to-christmas-red-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
