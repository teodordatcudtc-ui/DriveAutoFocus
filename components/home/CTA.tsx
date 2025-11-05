import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
          Gata să începi drumul către permisul de conducere?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Contactează-ne astăzi și programează prima ta lecție. 
          Răspundem la întrebări și îți oferim toate detaliile necesare.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-red text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Programează lecția
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <a
            href="tel:0764421141"
            className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            <Phone className="mr-2 w-5 h-5" />
            Sună acum: 0764421141
          </a>
        </div>
      </div>
    </section>
  )
}

