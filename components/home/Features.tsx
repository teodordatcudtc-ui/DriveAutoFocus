import { Shield, Award, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Siguranță maximă',
    description: 'Prioritizăm siguranța ta și a celorlalți participanți la trafic. Metodologie dovedită și echipamente moderne.',
  },
  {
    icon: Award,
    title: 'Rezultate garantate',
    description: 'Rata de succes ridicată la examen. Instructori certificați cu ani de experiență în pregătirea șoferilor.',
  },
  {
    icon: Clock,
    title: 'Program flexibil',
    description: 'Lecții programate în funcție de disponibilitatea ta. Programe standard sau intensive, potrivite pentru orice stil de viață.',
  },
  {
    icon: Users,
    title: 'Instructori profesioniști',
    description: 'Echipă de instructori experimentați, răbdători și dedicați succesului tău. Suport personalizat în fiecare etapă.',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            De ce să alegi Drive Auto Focus?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferim o experiență completă de învățare, adaptată nevoilor tale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary transition-all shadow-sm hover:shadow-md group"
              >
                <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

