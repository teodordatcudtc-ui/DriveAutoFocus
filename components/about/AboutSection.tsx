'use client'

import { Award, Target, Heart, Users, Calendar, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2008',
    title: 'Începutul',
    description: 'Drive Auto Focus este fondată cu viziunea de a oferi instruire de calitate superioară.',
  },
  {
    year: '2012',
    title: 'Extindere',
    description: 'Extindem flota și echipa de instructori. Peste 1000 de elevi pregătiți cu succes.',
  },
  {
    year: '2016',
    title: 'Recunoaștere',
    description: 'Obținem certificări și recunoaștere pentru calitatea serviciilor oferite.',
  },
  {
    year: '2020',
    title: 'Modernizare',
    description: 'Actualizăm flota cu mașini moderne și introducem metode inovatoare de predare.',
  },
  {
    year: '2024',
    title: 'Prezent',
    description: 'Peste 5000 de elevi pregătiți, rata de succes 85%+, echipa de 10+ instructori profesioniști.',
  },
]

const values = [
  {
    icon: Target,
    title: 'Misiunea noastră',
    description: 'Să oferim instruire de calitate superioară care să pregătească șoferi responsabili, siguri și încrezători.',
  },
  {
    icon: Heart,
    title: 'Valorile noastre',
    description: 'Profesionalism, siguranță, respect, răbdare și dedicare pentru succesul fiecărui elev.',
  },
  {
    icon: Award,
    title: 'Certificări',
    description: 'Școala noastră este autorizată și certificată conform legislației în vigoare. Toți instructori sunt licențiați.',
  },
]

const certifications = [
  { name: 'Autorizație școală auto', icon: Award },
  { name: 'Certificare ISO', icon: Award },
  { name: 'Instructori licențiați', icon: Users },
  { name: 'Flotă modernă', icon: TrendingUp },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-black-deep min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Despre Drive Auto Focus
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Peste 15 ani de experiență în pregătirea șoferilor. Pasiune, 
            profesionalism și rezultate garantate.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black p-6 rounded-lg border border-gray-800"
              >
                <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Istoria noastră
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-red transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-red rounded-full transform md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                    }`}
                  >
                    <div className="bg-black p-6 rounded-lg border border-gray-800">
                      <div className="text-primary font-bold text-lg mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-black rounded-lg p-8 border border-gray-800">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Certificări și recunoașteri
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium">
                    {cert.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Alătură-te mii de șoferi pregătiți cu succes
          </h3>
          <p className="text-gray-400 mb-6">
            Contactează-ne pentru a începe drumul către permisul de conducere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-red text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Contactează-ne
            </a>
            <a
              href="tel:0764421141"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Sună: 0764421141
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

