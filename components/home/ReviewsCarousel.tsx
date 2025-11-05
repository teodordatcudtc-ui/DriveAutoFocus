'use client'

import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Review {
  id: number
  name: string
  rating: number
  text: string
  date: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Alexandru Popescu',
    rating: 5,
    text: 'Excelentă experiență! Instructorii sunt foarte răbdători și profesioniști. Am obținut permisul din prima. Recomand cu încredere!',
    date: 'Ianuarie 2024',
  },
  {
    id: 2,
    name: 'Maria Ionescu',
    rating: 5,
    text: 'Mulțumită școlii Drive Auto Focus am trecut examenul fără probleme. Metodologia de predare este clară și eficientă.',
    date: 'Decembrie 2023',
  },
  {
    id: 3,
    name: 'Ion Georgescu',
    rating: 5,
    text: 'Instructori de top, mașini moderne și prețuri competitive. Tot procesul a fost simplu și transparent. Mulțumesc!',
    date: 'Noiembrie 2023',
  },
  {
    id: 4,
    name: 'Elena Dumitrescu',
    rating: 5,
    text: 'Am fost foarte mulțumită de serviciile oferite. Instructorul a fost foarte răbdător și mi-a dat încredere la volan.',
    date: 'Octombrie 2023',
  },
  {
    id: 5,
    name: 'Radu Popa',
    rating: 5,
    text: 'Cea mai bună alegere! Profesionalism la nivel înalt, program flexibil și rezultate garantate. Meritați toate cele 5 stele!',
    date: 'Septembrie 2023',
  },
]

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 7000) // 7 secunde

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Ce spun elevii noștri
          </h2>
          <p className="text-gray-600 text-lg">
            Peste 5000 de elevi mulțumiți și permis obținut cu succes
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <Quote className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    {reviews[currentIndex].text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-black font-semibold">
                        {reviews[currentIndex].name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {reviews[currentIndex].date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Afișează review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

