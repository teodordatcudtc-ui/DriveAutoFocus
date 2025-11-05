import { CheckCircle } from 'lucide-react'

const advantages = [
  'Instructori certificați cu peste 10 ani experiență',
  'Flota modernă de mașini, întreținute regulat',
  'Rata de succes la examen peste 85%',
  'Programe flexibile: standard sau intensiv',
  'Suport complet pentru examenul teoretic și practic',
  'Prețuri competitive și transparente',
  'Locație centrală, ușor accesibilă',
  'Mediu de învățare prietenos și profesional',
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Avantajele noastre
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              La Drive Auto Focus, ne concentrăm pe succesul tău. Oferim 
              toate resursele și suportul necesar pentru a obține permisul 
              de conducere cu încredere.
            </p>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="bg-gradient-red p-8 rounded-lg shadow-xl">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Rezultatul nostru
                </h3>
                <p className="text-gray-700 mb-6">
                  Mii de șoferi au obținut permisul cu succes alături de noi. 
                  Fii următorul!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">85%+</div>
                    <div className="text-gray-600 text-sm">Rata de succes</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-gray-600 text-sm">Elevi pregătiți</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

