import type { Metadata } from 'next'
import InstructorsSection from '@/components/instructors/InstructorsSection'

export const metadata: Metadata = {
  title: 'Instructori',
  description: 'Cunoaște echipa noastră de instructori profesioniști. Experiență, răbdare și dedicare pentru succesul tău la examenul de șofer.',
  openGraph: {
    title: 'Instructori | Drive Auto Focus',
    description: 'Cunoaște echipa noastră de instructori profesioniști. Experiență, răbdare și dedicare pentru succesul tău.',
  },
}

export default function InstructoriPage() {
  return (
    <div className="pt-20">
      <InstructorsSection />
    </div>
  )
}

