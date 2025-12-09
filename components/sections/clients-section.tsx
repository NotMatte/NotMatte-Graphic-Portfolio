"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const clients = [
  { name: "NexusMC Network", type: "Minecraft Server", logo: "/clients/nexusmc.jpg" },
  { name: "GamersHQ", type: "Gaming Community", logo: "/clients/gamershq.jpg" },
  { name: "PixelCraft Studios", type: "Content Creator", logo: "/clients/pixelcraft.jpg" },
  { name: "SkyBlock Italia", type: "Minecraft Server", logo: "/clients/skyblock.jpg" },
  { name: "EsportLive", type: "Esports Organization", logo: "/clients/esportlive.jpg" },
  { name: "CraftZone", type: "Gaming Network", logo: "/clients/craftzone.jpg" },
  { name: "Nova Gaming", type: "YouTube Channel", logo: "/clients/novagaming.jpg" },
  { name: "MineWorld", type: "Minecraft Server", logo: "/clients/mineworld.jpg" },
]

const featuredReviews = [
  {
    name: "Marco R.",
    role: "Owner @ NexusMC",
    avatar: "/avatars/marco.jpg",
    content:
      "NotMatte ha trasformato completamente l'immagine del nostro server. Il branding è professionale e i giocatori adorano il nuovo look. Collaborazione eccezionale!",
    rating: 5,
    project: "Rebrand Completo",
  },
  {
    name: "Luca T.",
    role: "Content Creator",
    avatar: "/avatars/luca.jpg",
    content:
      "I trailer che crea sono di un altro livello. Ogni video genera un hype pazzesco nella community. Consiglio assolutamente per chi cerca qualità premium.",
    rating: 5,
    project: "Trailer Cinematici",
  },
  {
    name: "Sofia M.",
    role: "CEO @ GamersHQ",
    avatar: "/avatars/sofia.jpg",
    content:
      "Abbiamo commissionato il sito web e il branding completo. Risultato? Professionalità top, tempi rispettati e supporto continuo. Partner affidabile al 100%.",
    rating: 5,
    project: "Brand Identity + Web",
  },
]

export function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="clients" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(ellipse, oklch(0.65 0.12 275), transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Chi si è fidato di me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Clienti <span className="text-gradient">Soddisfatti</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ho avuto il piacere di collaborare con server, creator e aziende gaming di tutta Italia
          </p>
        </div>

        {/* Client Logos Marquee */}
        <div className={`mb-20 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="scroll-container">
            <div className="flex gap-8 animate-marquee-left" style={{ width: "200%" }}>
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 glass-subtle rounded-2xl px-8 py-6 flex items-center gap-4 hover:glass transition-all duration-300 group cursor-default min-w-[220px]"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                        e.currentTarget.nextElementSibling?.classList.remove("hidden")
                      }}
                    />
                    <span className="hidden text-lg font-bold text-muted-foreground">{client.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-gradient transition-all">
                      {client.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{client.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((review, index) => (
            <div
              key={review.name}
              className={`glass rounded-3xl p-8 relative overflow-hidden group hover:glass-sharp transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 mb-6 leading-relaxed relative z-10">"{review.content}"</p>

              {/* Project tag */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
                {review.project}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 glass-subtle rounded-2xl p-8 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Clienti Soddisfatti</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Rating Medio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">72h</div>
              <div className="text-sm text-muted-foreground">Tempo Risposta</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Clienti Ricorrenti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
