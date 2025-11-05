'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

interface PricingPlan {
  name: string
  price: number | string
  description?: string
  features: string[]
  licenseTypes: string[]
  paymentPlan?: {
    type: string
    details: string[]
  }
  pricePerSession?: boolean
}

const plans: PricingPlan[] = [
  // Categoria B
  {
    name: 'TOTUL INCLUS',
    price: 2900,
    features: [
      '24 ore legislație',
      '30 ore practice',
      'Materiale didactice',
      'Analize medicale',
      'Aviz psihologic',
      'Dosar D.R.P.C.I.V',
      'Mașină pentru examen',
    ],
    licenseTypes: ['B'],
  },
  {
    name: 'PLATA ÎN RATE',
    price: 3200,
    paymentPlan: {
      type: 'rate',
      details: [
        'Avans 1000 lei',
        'Rata 1 – 1100 lei',
        'Rata 2 – 1100 lei',
      ],
    },
    features: [
      '24 ore legislație',
      '30 ore practice',
      'Materiale didactice',
      'Analize medicale',
      'Aviz psihologic',
      'Dosar D.R.P.C.I.V',
      'Mașină pentru examen',
    ],
    licenseTypes: ['B'],
  },
  // Categoria A
  {
    name: 'TOTUL INCLUS',
    price: 3200,
    features: [
      '24 ore legislație',
      '25 ore practice',
      'Materiale didactice',
      'Analize medicale',
      'Aviz psihologic',
      'Dosar D.R.P.C.I.V',
      'Motocicletă pentru examen',
    ],
    licenseTypes: ['A'],
  },
  {
    name: 'PLATA ÎN RATE',
    price: 3500,
    paymentPlan: {
      type: 'rate',
      details: [
        'Avans 1200 lei',
        'Rata 1 – 1150 lei',
        'Rata 2 – 1150 lei',
      ],
    },
    features: [
      '24 ore legislație',
      '25 ore practice',
      'Materiale didactice',
      'Analize medicale',
      'Aviz psihologic',
      'Dosar D.R.P.C.I.V',
      'Motocicletă pentru examen',
    ],
    licenseTypes: ['A'],
  },
  // Categoria A2
  {
    name: 'TOTUL INCLUS',
    price: 2800,
    features: [
      '24 ore legislație',
      '25 ore practice',
      'Materiale didactice',
      'Analize medicale',
      'Aviz psihologic',
      'Dosar D.R.P.C.I.V',
      'Motocicletă pentru examen',
    ],
    licenseTypes: ['A2'],
  },
  {
    name: 'PLATA ÎN RATE',
    price: 3100,
    paymentPlan: {
      type: 'rate',
      details: [
        'Avans 1100 lei',
        'Rata 1 – 1000 lei',
        'Rata 2 – 1000 lei',
      ],
    },
    features: [
      '24 ore legislație',
      '25 ore practice',
      'Materiale didactice',
      'Analize medicale',
      'Aviz psihologic',
      'Dosar D.R.P.C.I.V',
      'Motocicletă pentru examen',
    ],
    licenseTypes: ['A2'],
  },
  // Sedințe suplimentare (toate categoriile)
  {
    name: 'SEDINȚE SUPLIMENTARE',
    price: 250,
    pricePerSession: true,
    description: 'Prețul este per sedință',
    features: [],
    licenseTypes: ['B', 'A', 'A2'],
  },
]

export default function PricingSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('B')

  const categories = ['B', 'A', 'A2']

  const filteredPlans = plans.filter((plan) =>
    plan.licenseTypes.includes(selectedCategory)
  )

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Prețuri și Oferte
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transparență totală în prețuri. Alege pachetul potrivit pentru tine.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-lg inline-flex shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-red text-white'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Categoria {category}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan, index) => {
            return (
              <motion.div
                key={index}
                className="relative bg-white rounded-lg border-2 border-gray-200 overflow-hidden h-full flex flex-col shadow-lg"
                style={{
                  minHeight: '600px',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                  {/* Content */}
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-black mb-2">
                        {plan.name}
                      </h3>
                      {plan.description && (
                        <p className="text-gray-600 text-sm mb-4">
                          {plan.description}
                        </p>
                      )}
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-primary">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 ml-2">
                          {plan.pricePerSession ? 'RON/sedință' : 'RON'}
                        </span>
                      </div>
                      {plan.paymentPlan && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-black font-semibold text-sm mb-2">
                            {plan.paymentPlan.type === 'rate' ? 'Plată în rate:' : ''}
                          </p>
                          <ul className="space-y-1">
                            {plan.paymentPlan.details.map((detail, i) => (
                              <li key={i} className="text-gray-700 text-sm">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {plan.features.length > 0 && (
                      <ul className="space-y-3 mb-6 flex-grow">
                        {plan.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                        {plan.features.length > 4 && (
                          <li className="text-gray-500 text-sm">
                            + {plan.features.length - 4} caracteristici
                          </li>
                        )}
                      </ul>
                    )}

                    <div className="mt-auto">
                      <div className="mb-4">
                        <p className="text-gray-500 text-xs mb-2">Categorii disponibile:</p>
                        <div className="flex flex-wrap gap-2">
                          {plan.licenseTypes.map((type) => (
                            <span
                              key={type}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
                            >
                              Cat. {type}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href="/contact"
                        className="block w-full py-3 bg-gradient-red text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
                      >
                        Alege acest pachet
                      </a>
                    </div>
                  </div>
                </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Toate prețurile sunt în RON și includ TVA.
          </p>
          <p className="text-gray-600 text-sm">
            Pentru oferte personalizate sau întrebări, ne poți contacta la{' '}
            <a
              href="tel:0764421141"
              className="text-primary hover:underline font-semibold"
            >
              0764421141
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
