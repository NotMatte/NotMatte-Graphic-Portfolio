"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marco R.",
    role: "Owner Server Survival",
    content:
      "NotMatte ha trasformato completamente l'immagine del nostro server. La qualità del lavoro è eccezionale e la comunicazione sempre perfetta.",
    rating: 5,
  },
  {
    name: "Giulia T.",
    role: "Content Creator",
    content:
      "Finalmente un designer che capisce davvero le esigenze del mondo gaming. Creatività, puntualità e professionalità al top!",
    rating: 5,
  },
  {
    name: "Alessandro M.",
    role: "Network Manager",
    content:
      "Collaboriamo da oltre un anno e ogni progetto supera le aspettative. Consigliatissimo per qualsiasi esigenza grafica.",
    rating: 5,
  },
  {
    name: "Sara L.",
    role: "Streamer",
    content:
      "I banner e le grafiche social che mi ha creato hanno dato un boost incredibile al mio canale. Professionale e veloce!",
    rating: 5,
  },
  {
    name: "Federico P.",
    role: "Owner Server Minigames",
    content:
      "Il trailer per il lancio del server è stato spettacolare. Ha superato ogni aspettativa e i numeri lo dimostrano!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cosa Dicono i <span className="text-gradient">Clienti</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Feedback reali da chi ha collaborato con me</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/20" />

            <div className="relative z-10">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{testimonials[activeIndex].name.charAt(0)}</span>
                </div>
                <p className="font-bold">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="glass rounded-full p-3 hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-primary" : "bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="glass rounded-full p-3 hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
