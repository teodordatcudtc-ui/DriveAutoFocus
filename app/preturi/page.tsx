import type { Metadata } from 'next'
import PricingSection from '@/components/pricing/PricingSection'

export const metadata: Metadata = {
  title: 'Prețuri și Oferte',
  description: 'Prețuri competitive pentru școala de șoferi Drive Auto Focus. Oferte pentru programe standard și intensive. Transparență totală în prețuri.',
  openGraph: {
    title: 'Prețuri și Oferte | Drive Auto Focus',
    description: 'Prețuri competitive pentru școala de șoferi Drive Auto Focus. Oferte pentru programe standard și intensive.',
  },
}

export default function PreturiPage() {
  return (
    <div className="pt-20">
      <PricingSection />
    </div>
  )
}

