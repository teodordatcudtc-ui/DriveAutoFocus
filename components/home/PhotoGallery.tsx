'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera, Car, Users, GraduationCap, ClipboardCheck, Award } from 'lucide-react'

const photos = [
  { id: 1, src: '/home/gallery-1.jpg', alt: 'Flota auto Drive Auto Focus', icon: Car },
  { id: 2, src: '/home/gallery-2.jpg', alt: 'Lecție practică de condus', icon: Car },
  { id: 3, src: '/home/gallery-3.jpg', alt: 'Sala de teorie', icon: GraduationCap },
  { id: 4, src: '/home/gallery-4.jpg', alt: 'Instructor cu elev', icon: Users },
  { id: 5, src: '/home/gallery-5.jpg', alt: 'Mașină de instruire', icon: Car },
  { id: 6, src: '/home/gallery-6.jpg', alt: 'Examen practic', icon: ClipboardCheck },
]

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Galerie Foto
          </h2>
          <p className="text-gray-600 text-lg">
            Vezi momente din activitatea școlii noastre
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => {
            const Icon = photo.icon
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                {/* Placeholder cu icon */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm text-center px-4">
                    {photo.alt}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                    {photo.alt}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

