import type { Metadata } from 'next'
import GallerySection from '@/components/gallery/GallerySection'

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Galerie foto și video Drive Auto Focus. Vezi flota noastră, spațiile de instruire și momente din activitatea școlii.',
  openGraph: {
    title: 'Galerie | Drive Auto Focus',
    description: 'Galerie foto și video Drive Auto Focus. Vezi flota noastră și spațiile de instruire.',
  },
}

export default function GaleriePage() {
  return (
    <div className="pt-20">
      <GallerySection />
    </div>
  )
}

