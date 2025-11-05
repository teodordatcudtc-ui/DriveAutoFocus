import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import MobileStudentsCarousel from '@/components/home/MobileStudentsCarousel'
import Features from '@/components/home/Features'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import PhotoGallery from '@/components/home/PhotoGallery'
import ReviewsCarousel from '@/components/home/ReviewsCarousel'
import Stats from '@/components/home/Stats'
import CTA from '@/components/home/CTA'

export const metadata: Metadata = {
  title: 'Acasă',
  description: 'Drive Auto Focus — școala ta de încredere pentru condus. Instructori profesioniști, prețuri competitive, rezultate garantate. Programează lecția ta acum!',
  openGraph: {
    title: 'Drive Auto Focus — Școala de șoferi București',
    description: 'Drive Auto Focus — școala ta de încredere pentru condus. Instructori profesioniști, prețuri competitive, rezultate garantate.',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="lg:hidden py-8 bg-gradient-to-br from-gray-900 via-black-deep to-gray-900">
        <MobileStudentsCarousel />
      </div>
      <Features />
      <WhyChooseUs />
      <PhotoGallery />
      <ReviewsCarousel />
      <Stats />
      <CTA />
    </>
  )
}

