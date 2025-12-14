"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote, TrendingUp, Award, Clock, Users } from "lucide-react"

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
    project: "Restyle, Banner, Social, e altro...",
    projectImage: "/customer/coralmc.png", // Immagine del server/progetto
  },
  {
    name: "Beta",
    role: "Owner @ MetaMC",
    avatar: "/avatars/beta.png",
    content:
      "Lavorare con NotMatte è stato semplicemente eccezionale. Il suo lavoro è stato veloce, preciso e professionale, fornendo un prodotto di qualità che ha superato le nostre aspettative.",
    rating: 5,
    project: "Banner MC-ITA e Banner vari",
    projectImage: "/customer/metamc.png", // Immagine del server/progetto
  },
  {
    name: "NoLifeGabbo",
    role: "Content Creator",
    avatar: "/avatars/nolifegabbo.png",
    content:
      "Ottima qualità e abbastanza tempestivo, non mi lamento di certo del risultato!",
    rating: 4,
    project: "Assets e Banner per Twitch e YouTube",
    projectImage: "/avatars/nolifegabbo.png", // Esempio thumbnail trailer
  },
  {
    name: "Sk Manux",
    role: "CEO @ Era-Roleplay",
    avatar: "/avatars/skmanux.png",
    content:
      "Lavoro eccezionale. Ogni elemento, dai menu ai loghi, è curato nei minimi dettagli rendendo tutto più chiaro e intuitivo. Molto puntuale e disponibile. Prezzi più che giusti.",
    rating: 5,
    project: "Brand Identity + Fivem Texturing + Assets Web",
    projectImage: "/customer/eraroleplay.png", // Esempio logo/branding
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
              className={`glass rounded-3xl p-6 relative group hover:glass-sharp transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Quote icon decorativo in basso a destra */}
              <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-10 transition-all duration-700 ease-out pointer-events-none">
                <Quote className="w-16 h-16 text-foreground" />
              </div>

              {/* Header con avatar + logo progetto */}
              <div className="flex items-start gap-5 mb-4">
                {/* Avatar group: foto profilo + logo progetto sovrapposti */}
                <div className="relative flex-shrink-0">
                  {/* Avatar principale */}
                  <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden ring-2 ring-background flex items-center justify-center">
                    <img
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                  {/* Logo progetto sovrapposto in basso a destra - solo per chi NON è Content Creator */}
                  {!review.role.includes("Content Creator") && (
                    <div className="absolute -bottom-1 -right-2 w-7 h-7 rounded-full bg-background overflow-hidden ring-2 ring-background flex items-center justify-center p-0.5">
                      <img
                        src={review.projectImage || "/placeholder.svg"}
                        alt={review.project}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none"
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Info autore */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground truncate">{review.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{review.role}</div>
                </div>

                {/* Rating spostato in alto a sinistra */}
                <div className="flex gap-0.5 flex-shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-primary text-primary' : 'fill-none text-muted-foreground/30'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Contenuto recensione */}
              <p className="text-foreground/90 mb-4 leading-relaxed text-sm italic">
                "{review.content}"
              </p>

              {/* Project tag in basso */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                {review.project}
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none rounded-3xl" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-40">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-4xl font-bold mb-5 text-center max-w-3xl mx-auto">
              Noiosi anche i feedback dei clienti? 😤<br />
              <span className="text-gradient">Lascia che siano i numeri a parlare!</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto text-center">
              Dati reali, risultati tangibili e zero chiacchiere: questi numeri raccontano la costanza, la qualità e
              la passione che metto in ogni progetto. Non opinioni, non promesse: solo prove concrete.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 - Clienti Soddisfatti */}
            <div
              className={`glass rounded-3xl p-6 relative group hover:glass-sharp transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-all duration-700 ease-out">
                <TrendingUp className="w-12 h-12 text-primary" />
              </div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-700 ease-out">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-5xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-700 ease-out">
                  98%
                </div>
                <div className="text-sm font-medium text-muted-foreground">Clienti Soddisfatti</div>
                <div className="text-xs text-muted-foreground/60 mt-1">Chi torna è soddisfatto</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none rounded-3xl" />
            </div>

            {/* Stat 2 - Rating Medio */}
            <div
              className={`glass rounded-3xl p-6 relative group hover:glass-sharp transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-all duration-700 ease-out">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-700 ease-out">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-5xl font-bold text-gradient group-hover:scale-105 transition-transform duration-700 ease-out">
                    4.9
                  </div>
                  <div className="text-xl text-muted-foreground">/5</div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Rating Medio</div>
                <div className="flex gap-0.5 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none rounded-3xl" />
            </div>

            {/* Stat 3 - Tempo Risposta */}
            <div
              className={`glass rounded-3xl p-6 relative group hover:glass-sharp transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-all duration-700 ease-out">
                <Clock className="w-12 h-12 text-primary" />
              </div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-700 ease-out">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-5xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-700 ease-out">
                  72h
                </div>
                <div className="text-sm font-medium text-muted-foreground">Tempo Risposta</div>
                <div className="text-xs text-muted-foreground/60 mt-1">Media consegna progetti</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none rounded-3xl" />
            </div>

            {/* Stat 4 - Clienti Ricorrenti */}
            <div
              className={`glass rounded-3xl p-6 relative group hover:glass-sharp transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "900ms" }}
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-all duration-700 ease-out">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-700 ease-out">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-5xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-700 ease-out">
                  85%
                </div>
                <div className="text-sm font-medium text-muted-foreground">Clienti Ricorrenti</div>
                <div className="text-xs text-muted-foreground/60 mt-1">Tornano per nuovi progetti</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
