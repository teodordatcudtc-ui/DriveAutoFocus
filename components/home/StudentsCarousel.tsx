'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Award } from 'lucide-react'

const students = [
  {
    id: 1,
    name: 'Alexandru Popescu',
    image: '/students/student-1.jpg',
    category: 'Categoria B',
  },
  {
    id: 2,
    name: 'Maria Ionescu',
    image: '/students/student-2.jpg',
    category: 'Categoria B',
  },
  {
    id: 3,
    name: 'Ion Georgescu',
    image: '/students/student-3.jpg',
    category: 'Categoria A',
  },
  {
    id: 4,
    name: 'Elena Dumitrescu',
    image: '/students/student-4.jpg',
    category: 'Categoria B',
  },
  {
    id: 5,
    name: 'Radu Popa',
    image: '/students/student-5.jpg',
    category: 'Categoria A2',
  },
]

export default function StudentsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % students.length)
    }, 4000) // 4 secunde

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary/30 shadow-2xl">
        <AnimatePresence mode="wait">
          {students.map(
            (student, index) =>
              index === currentIndex && (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  {/* Placeholder dacă nu există imagine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <Award className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-white font-semibold text-lg">{student.name}</p>
                    <p className="text-gray-300 text-sm">{student.category}</p>
                  </div>
                  {/* Overlay cu informații */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-primary" />
                      <p className="text-white font-bold text-lg">{student.name}</p>
                    </div>
                    <p className="text-gray-300 text-sm">{student.category} - Promovat cu succes!</p>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {students.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Afișează elev ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

