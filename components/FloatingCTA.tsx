'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const phoneNumber = '0764421141'
  const whatsappLink = `https://wa.me/40764421141?text=Bună!%20Aș%20dori%20să%20programez%20o%20lecție.`

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors group"
            aria-label="Trimite mesaj pe WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              WhatsApp
            </span>
          </a>

          {/* Phone Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="w-14 h-14 bg-gradient-red rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity group relative"
            aria-label={`Sună la ${phoneNumber}`}
          >
            <Phone className="w-6 h-6 text-white" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {phoneNumber}
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

