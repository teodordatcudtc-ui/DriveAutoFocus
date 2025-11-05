'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Placeholder images - înlocuiește cu imagini reale
const galleryImages = [
  { id: 1, src: '/gallery/1.jpg', alt: 'Mașină de instruire', category: 'mașini' },
  { id: 2, src: '/gallery/2.jpg', alt: 'Sala de teorie', category: 'spații' },
  { id: 3, src: '/gallery/3.jpg', alt: 'Lecție practică', category: 'lecții' },
  { id: 4, src: '/gallery/4.jpg', alt: 'Flota auto', category: 'mașini' },
  { id: 5, src: '/gallery/5.jpg', alt: 'Instructor cu elev', category: 'lecții' },
  { id: 6, src: '/gallery/6.jpg', alt: 'Spațiu de instruire', category: 'spații' },
  { id: 7, src: '/gallery/7.jpg', alt: 'Mașină modernă', category: 'mașini' },
  { id: 8, src: '/gallery/8.jpg', alt: 'Examen practic', category: 'lecții' },
  { id: 9, src: '/gallery/9.jpg', alt: 'Ședință teoretică', category: 'spații' },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(galleryImages.map((img) => img.category)))]

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const currentIndex = selectedImage !== null ? filteredImages.findIndex((img) => img.id === selectedImage) : -1

  const nextImage = () => {
    if (selectedImage !== null && currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null && currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id)
    }
  }

  return (
    <section className="py-20 bg-black-deep min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Galerie
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explorează spațiile noastre, flota modernă și momente din activitatea școlii
          </p>
        </div>

        {/* Video Header (optional) */}
        <div className="mb-12 relative h-64 sm:h-96 rounded-lg overflow-hidden bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/gallery/video-poster.jpg"
          >
            <source src="/gallery/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <p className="text-white text-lg font-semibold">
              Drive Auto Focus — Pregătire de calitate
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-red text-white'
                  : 'bg-black text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              {category === 'all' ? 'Toate' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="break-inside-avoid mb-4 cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative overflow-hidden rounded-lg bg-black">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23333" width="800" height="600"/%3E%3Ctext fill="%23fff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EGalerie%3C/text%3E%3C/svg%3E'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      Click pentru a mări
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Închide"
            >
              <X className="w-6 h-6" />
            </button>

            {currentIndex > 0 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Imagină anterioară"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Imagină următoare"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full"
            >
              {selectedImage !== null && (
                <Image
                  src={filteredImages[currentIndex]?.src || ''}
                  alt={filteredImages[currentIndex]?.alt || ''}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full"
                  priority
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

