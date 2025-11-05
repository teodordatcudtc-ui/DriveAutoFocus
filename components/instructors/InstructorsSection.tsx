'use client'

import { useState } from 'react'
import { Star, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Instructor {
  id: number
  name: string
  experience: number
  rating: number
  licenseType: string[]
  languages: string[]
  specialties: string[]
  bio: string
  schedule: string
  image: string
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Ion Popescu',
    experience: 12,
    rating: 4.9,
    licenseType: ['B', 'C'],
    languages: ['Română', 'Engleză'],
    specialties: ['Conducere defensivă', 'Parcare'],
    bio: 'Instructor cu peste 12 ani experiență, specializat în pregătirea șoferilor pentru categoria B. Răbdare și metode moderne de predare.',
    schedule: 'Luni-Vineri: 8:00-18:00, Sâmbătă: 9:00-14:00',
    image: '/instructors/instructor-1.jpg',
  },
  {
    id: 2,
    name: 'Maria Ionescu',
    experience: 10,
    rating: 4.8,
    licenseType: ['B'],
    languages: ['Română', 'Franceză'],
    specialties: ['Prima lecție', 'Conducere urbană'],
    bio: 'Instructor dedicat, cu focus pe siguranța rutieră și încrederea la volan. Peste 1000 de elevi pregătiți cu succes.',
    schedule: 'Luni-Duminică: 9:00-19:00',
    image: '/instructors/instructor-2.jpg',
  },
  {
    id: 3,
    name: 'Alexandru Georgescu',
    experience: 15,
    rating: 5.0,
    licenseType: ['B', 'C', 'D'],
    languages: ['Română', 'Engleză', 'Germană'],
    specialties: ['Examen intensiv', 'Conducere avansată'],
    bio: 'Instructor senior cu 15 ani experiență. Pregătește șoferi pentru toate categoriile de permis. Rata de succes 90%+.',
    schedule: 'Luni-Vineri: 7:00-20:00',
    image: '/instructors/instructor-3.jpg',
  },
  {
    id: 4,
    name: 'Elena Dumitrescu',
    experience: 8,
    rating: 4.7,
    licenseType: ['B'],
    languages: ['Română', 'Spaniolă'],
    specialties: ['Începători', 'Conducere ecologică'],
    bio: 'Instructor pasionat de educația rutieră. Metodă prietenoasă și adaptată fiecărui elev. Specializată în pregătirea începătorilor.',
    schedule: 'Marți-Sâmbătă: 10:00-18:00',
    image: '/instructors/instructor-4.jpg',
  },
]

export default function InstructorsSection() {
  const [selectedLicense, setSelectedLicense] = useState<string>('all')
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const licenseTypes = ['all', ...Array.from(new Set(instructors.flatMap((i) => i.licenseType)))]

  const filteredInstructors = instructors.filter((instructor) => {
    const licenseMatch =
      selectedLicense === 'all' || instructor.licenseType.includes(selectedLicense)
    return licenseMatch
  })

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Instructori Noștri
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Echipă de profesioniști dedicați succesului tău. Fiecare instructor 
            aduce experiență, răbdare și metode dovedite.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex justify-center">
          <div className="flex items-center gap-2">
            <label htmlFor="license-filter" className="text-gray-300 text-sm">
              Categorie permis:
            </label>
            <select
              id="license-filter"
              value={selectedLicense}
              onChange={(e) => setSelectedLicense(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary"
            >
              {licenseTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'all' ? 'Toate' : `Categoria ${type}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInstructors.map((instructor) => {
            const isExpanded = expandedCard === instructor.id

            return (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-primary shadow-lg transition-all hover:shadow-xl"
                onClick={() => setExpandedCard(isExpanded ? null : instructor.id)}
              >
                <div className="relative h-64 bg-gray-800">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback pentru imagini lipsă
                      const target = e.target as HTMLImageElement
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23333" width="400" height="400"/%3E%3Ctext fill="%23fff" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EInstructor%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-black">
                      {instructor.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-black ml-1 font-semibold">
                        {instructor.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{instructor.experience} ani experiență</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {instructor.licenseType.map((type) => (
                        <span
                          key={type}
                          className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
                        >
                          Cat. {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className="text-gray-700 text-sm mb-3">{instructor.bio}</p>
                      <div className="mb-3">
                        <h4 className="text-black font-semibold text-sm mb-1">
                          Specializări:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {instructor.specialties.map((spec) => (
                            <span
                              key={spec}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-black font-semibold text-sm mb-1">
                          Program:
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {instructor.schedule}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {!isExpanded && (
                    <p className="text-gray-600 text-sm">
                      {instructor.bio.substring(0, 100)}...
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {filteredInstructors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Nu s-au găsit instructori care să corespundă filtrelor selectate.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

