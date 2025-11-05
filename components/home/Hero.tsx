'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import StudentsCarousel from './StudentsCarousel'

export default function Hero() {
  return (
    <section className="relative lg:h-[70vh] lg:min-h-[500px] min-h-[400px] flex items-start overflow-hidden pt-32 pb-8 lg:pb-12">
      {/* Static Background Color */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black-deep to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Content Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pl-0"
          >
            <div className="text-left lg:text-left text-center max-w-2xl mx-auto lg:mx-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              >
                <span className="block">Drive Auto Focus</span>
                <span className="block text-primary mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Școala ta de încredere pentru condus
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg text-gray-200 mb-6"
              >
                Siguranță. Profesionalism. Rezultate. Oferim instruire de calitate 
                cu instructori experimentați pentru a obține permisul de conducere cu încredere.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-2 lg:gap-3 justify-center"
              >
                <Link
                  href="/preturi"
                  className="inline-flex items-center justify-center px-4 py-2 lg:px-6 lg:py-3 bg-gradient-red text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl text-xs lg:text-sm sm:text-base"
                >
                  Vezi ofertă
                  <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                </Link>
                <a
                  href="tel:0764421141"
                  className="inline-flex items-center justify-center px-4 py-2 lg:px-6 lg:py-3 border-2 border-primary text-primary bg-white/10 backdrop-blur-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-xs lg:text-sm sm:text-base"
                >
                  Sună acum
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Students Carousel (doar desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <StudentsCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

