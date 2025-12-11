"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const clients = [
  { name: "AkaiMC Network", type: "Minecraft Server", logo: "/customer/akaimc.png" },
  { name: "AquariusMC", type: "Minecraft Server", logo: "/customer/aquarius.png" },
  { name: "Era-Roleplay", type: "GTA RP Server", logo: "/customer/eraroleplay.png" },
  { name: "CoralMC", type: "Minecraft Server", logo: "/customer/coralmc.png" },
  { name: "MetaMC", type: "Minecraft Server", logo: "/customer/metamc.png" },
  { name: "AtlantisRP", type: "Minecraft Server", logo: "/customer/atlantisrp.png" },
  { name: "Carpyy", type: "Content Creator", logo: "/customer/carpy.jpeg" },
  { name: "NoLifeGabbo", type: "Content Creator", logo: "/customer/nolifegabbo.png" },
  { name: "SvantaggioReal", type: "Content Creator", logo: "/customer/svantaggio.png" },
  { name: "GNG Events", type: "Organizzatori Eventi", logo: "/customer/gng.png" },
  { name: "ZKraft", type: "Minecraft Server", logo: "/customer/zkraft.png" },
  { name: "EverCraft", type: "Minecraft Server", logo: "/customer/evercraft.png" },
  { name: "DeadwoodMC", type: "Minecraft Server", logo: "/customer/deadwood.png" },
]

const featuredReviews = [
  {
    name: "Feryzz",
    role: "Owner @ CoralMC",
    avatar: "/avatars/feryzz.jpeg",
    content:
      "Direi che il servizio è ottimo, NotMatte disponibile e disposto ad apportare le modifiche richieste, non ho altro da aggiungere!",
    rating: 5,
    project: "Restylema, Banner, Social, e altro...",
    projectImage: "/customer/coralmc.png", // Immagine del server/progetto
  },
  {
    name: "Luca T.",
    role: "Content Creator",
    avatar: "/avatars/luca.jpg",
    content:
      "I trailer che crea sono di un altro livello. Ogni video genera un hype pazzesco nella community. Consiglio assolutamente per chi cerca qualità premium.",
    rating: 5,
    project: "Trailer Cinematici",
    projectImage: "/portfolio/trailer/Copertina-video-teaser.jpg", // Esempio thumbnail trailer
  },
  {
    name: "Sofia M.",
    role: "CEO @ GamersHQ",
    avatar: "/avatars/sofia.jpg",
    content:
      "Abbiamo commissionato il sito web e il branding completo. Risultato? Professionalità top, tempi rispettati e supporto continuo. Partner affidabile al 100%.",
    rating: 5,
    project: "Brand Identity + Web",
    projectImage: "/portfolio/logo/empiremc.png", // Esempio logo/branding
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
    <section ref={sectionRef} id="clients" className="py-35 relative overflow-hidden">
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
            Cosa ne pensa chi si è fidato di me?
          </span>
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Clienti <span className="text-gradient">Soddisfatti</span>
          </h2> */}
          <h2 className="text-7xl md:text-7xl font-bold mb-6">
            Parlo tanto, lo so…<br /><span className="text-gradient">Per fortuna i miei clienti<br />parlano meglio di me.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nel corso degli anni ho collaborato con server, creator e realtà gaming di tutta Italia, offrendo soluzioni su misura e risultati concreti. Ogni progetto è stata un’occasione per crescere, creare valore e lasciare un’impronta reale.
          </p>
        </div>

        {/* Client Logos Marquee */}
        <div className={`mb-20 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="scroll-container">
            <div className="flex gap-4 animate-marquee-left" style={{ width: "200%" }}>
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 glass-subtle rounded-2xl px-8 py-6 flex items-center gap-4 hover:glass transition-all duration-300 group cursor-default min-w-[220px]"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="w-15 h-15 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
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
              className={`glass rounded-3xl overflow-hidden relative group hover:glass-sharp transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Project Image Header */}
              <div className="relative h-32 overflow-hidden bg-secondary/30">
                <img
                  src={review.projectImage || "/placeholder.svg"}
                  alt={review.project}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Avatar positioned on the edge - OUTSIDE overflow container */}
              <div className="absolute top-[104px] left-6 z-10">
                <div className="w-16 h-16 rounded-full bg-secondary overflow-hidden ring-4 ring-background flex items-center justify-center p-1">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-full h-full object-contain rounded-full"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-10">
                {/* Author info */}
                <div className="mb-4">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review content */}
                <p className="text-foreground/90 mb-4 leading-relaxed text-sm">"{review.content}"</p>

                {/* Project tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {review.project}
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
