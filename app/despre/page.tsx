import type { Metadata } from 'next'
import AboutSection from '@/components/about/AboutSection'

export const metadata: Metadata = {
  title: 'Despre noi',
  description: 'Află despre Drive Auto Focus — misiunea, valorile și istoria școlii noastre de șoferi din București. Peste 15 ani de experiență în pregătirea șoferilor.',
  openGraph: {
    title: 'Despre noi | Drive Auto Focus',
    description: 'Află despre Drive Auto Focus — misiunea, valorile și istoria școlii noastre de șoferi.',
  },
}

export default function DesprePage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  )
}

