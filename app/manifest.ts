import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Drive Auto Focus — Școala de șoferi',
    short_name: 'Drive Auto Focus',
    description: 'Drive Auto Focus — școala ta de încredere pentru condus. Instructori profesioniști, prețuri competitive, rezultate garantate.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111111',
    theme_color: '#B30000',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

