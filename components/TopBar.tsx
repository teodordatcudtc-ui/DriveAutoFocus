'use client'

import { useState, useEffect } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const infoItems = [
  {
    icon: Clock,
    text: 'Program: Luni-Duminică 8:00-20:00',
  },
  {
    icon: Phone,
    text: 'Telefon: 0764421141',
  },
  {
    icon: MapPin,
    text: 'Strada Gheorghe Țițeica NR. 178, București 014192',
  },
]

export default function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % infoItems.length)
    }, 8000) // 8 secunde

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black-deep border-b border-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              {(() => {
                const Icon = infoItems[currentIndex].icon
                return (
                  <>
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-white text-sm sm:text-base">
                      {infoItems[currentIndex].text}
                    </span>
                  </>
                )
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

