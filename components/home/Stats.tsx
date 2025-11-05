'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatItemProps {
  number: string
  label: string
  index: number
}

function StatItem({ number, label, index }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayNumber, setDisplayNumber] = useState('0')

  useEffect(() => {
    if (!isInView) return

    // Extract numeric value and suffix (handle % and +)
    const numericMatch = number.match(/(\d+)/)
    const suffix = number.replace(/\d+/, '')
    
    if (!numericMatch) {
      setDisplayNumber(number)
      return
    }

    const targetValue = parseInt(numericMatch[1])
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetValue) {
        current = targetValue
        clearInterval(timer)
      }
      const display = Math.floor(current)
      setDisplayNumber(suffix.includes('%') 
        ? `${display}${suffix}` 
        : `${display}${suffix}`)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, number])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {displayNumber}
      </div>
      <div className="text-white/90 text-sm md:text-base">
        {label}
      </div>
    </div>
  )
}

const stats = [
  { number: '5000+', label: 'Elevi pregătiți' },
  { number: '85%+', label: 'Rata de succes' },
  { number: '15+', label: 'Ani experiență' },
  { number: '10+', label: 'Instructori certificați' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

