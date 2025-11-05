import Link from 'next/link'
import { Phone, MapPin, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Drive Auto Focus</h3>
            <p className="text-gray-400 text-sm">
              Școala ta de încredere pentru obținerea permisului de conducere. 
              Profesionalism, siguranță și rezultate garantate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link-uri rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/preturi" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Prețuri și Oferte
                </Link>
              </li>
              <li>
                <Link href="/instructori" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Instructori
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0764421141"
                  className="flex items-center text-gray-400 hover:text-primary transition-colors text-sm"
                  aria-label="Sună la 0764421141"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  0764421141
                </a>
              </li>
              <li>
                <address className="flex items-start text-gray-400 text-sm not-italic">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Strada Gheorghe Țițeica NR. 178<br />
                    București 014192
                  </span>
                </address>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Urmărește-ne</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/Scoala-de-soferi-Drive-Auto-Focus-100040185049796/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Pagina Facebook Drive Auto Focus"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Drive Auto Focus. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}

