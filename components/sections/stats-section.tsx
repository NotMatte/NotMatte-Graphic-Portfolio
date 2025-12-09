"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 100, suffix: "+", label: "Progetti Completati" },
  { value: 50, suffix: "+", label: "Clienti Soddisfatti" },
  { value: 3, suffix: "+", label: "Anni di Esperienza" },
  { value: 4.9, suffix: "", label: "Valutazione Media" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current * 10) / 10)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-gradient">
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            I <span className="text-gradient">Numeri</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Risultati concreti che parlano da soli</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
