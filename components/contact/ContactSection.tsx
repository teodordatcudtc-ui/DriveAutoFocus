'use client'

import { useState } from 'react'
import { Phone, MapPin, Mail, Facebook, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className="py-20 bg-black-deep min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contactează-ne
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Suntem aici să răspundem la întrebările tale și să te ajutăm să începi drumul către permisul de conducere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Informații de contact
              </h2>
              <div className="space-y-6">
                <a
                  href="tel:0764421141"
                  className="flex items-start group"
                  aria-label="Sună la 0764421141"
                >
                  <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefon</h3>
                    <p className="text-primary text-lg font-medium">0764421141</p>
                    <p className="text-gray-400 text-sm">Luni-Duminică: 8:00-20:00</p>
                  </div>
                </a>

                <address className="flex items-start not-italic">
                  <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Adresă</h3>
                    <p className="text-gray-300">
                      Strada Gheorghe Țițeica NR. 178<br />
                      București 014192
                    </p>
                  </div>
                </address>

                <a
                  href="https://www.facebook.com/p/Scoala-de-soferi-Drive-Auto-Focus-100040185049796/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group"
                  aria-label="Pagina Facebook Drive Auto Focus"
                >
                  <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Facebook</h3>
                    <p className="text-primary hover:underline">Pagina noastră</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Locația noastră
              </h2>
              <div className="rounded-lg overflow-hidden border border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.1962290116253!2d26.11008780344617!3d44.47015034510603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2027cb3300001%3A0x341fb4f7b0deff09!2sDrive%20Auto%20Focus!5e0!3m2!1sen!2sro!4v1762337170141!5m2!1sen!2sro"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Drive Auto Focus"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Trimite un mesaj
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

