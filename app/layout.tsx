import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://driveautofocus.ro'),
  title: {
    default: 'Drive Auto Focus — Școala de șoferi București',
    template: '%s | Drive Auto Focus',
  },
  description: 'Drive Auto Focus — școala ta de încredere pentru condus. Instructori profesioniști, prețuri competitive, rezultate garantate. Programează lecția ta acum!',
  keywords: ['școală de șoferi', 'permis de conducere', 'București', 'instructori auto', 'Drive Auto Focus'],
  authors: [{ name: 'Drive Auto Focus' }],
  creator: 'Drive Auto Focus',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://driveautofocus.ro',
    siteName: 'Drive Auto Focus',
    title: 'Drive Auto Focus — Școala de șoferi București',
    description: 'Drive Auto Focus — școala ta de încredere pentru condus. Instructori profesioniști, prețuri competitive, rezultate garantate.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Drive Auto Focus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drive Auto Focus — Școala de șoferi București',
    description: 'Drive Auto Focus — școala ta de încredere pentru condus. Instructori profesioniști, prețuri competitive, rezultate garantate.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutomotiveSchool',
              name: 'Drive Auto Focus',
              description: 'Școala de șoferi Drive Auto Focus — siguranță, profesionalism, rezultate garantate.',
              url: 'https://driveautofocus.ro',
              telephone: '+40764421141',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Strada Gheorghe Țițeica NR. 178',
                addressLocality: 'București',
                postalCode: '014192',
                addressCountry: 'RO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 44.47015034510603,
                longitude: 26.11008780344617,
              },
              sameAs: [
                'https://www.facebook.com/p/Scoala-de-soferi-Drive-Auto-Focus-100040185049796/',
              ],
              priceRange: '$$',
              areaServed: {
                '@type': 'City',
                name: 'București',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}

