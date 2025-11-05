import type { Metadata } from 'next'
import ContactSection from '@/components/contact/ContactSection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează Drive Auto Focus. Telefon: 0764421141. Adresă: Strada Gheorghe Țițeica NR. 178, București 014192. Programează o lecție acum!',
  openGraph: {
    title: 'Contact | Drive Auto Focus',
    description: 'Contactează Drive Auto Focus. Telefon: 0764421141. Adresă: Strada Gheorghe Țițeica NR. 178, București.',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  )
}

