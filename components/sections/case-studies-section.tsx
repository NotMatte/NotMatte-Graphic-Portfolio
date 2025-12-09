"use client"

import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Branding Server Survival",
    type: "Case Study",
    challenge: "Creare un'identità visiva completa per un nuovo server Minecraft survival con focus sulla community.",
    solution: "Sviluppo di logo, palette colori, template social e materiali promozionali coerenti.",
    results: [
      "Aumento del 150% dei nuovi giocatori",
      "Riconoscibilità immediata del brand",
      "Engagement social triplicato",
    ],
    image: "/minecraft-server-branding-case-study-dark-theme.jpg",
  },
  {
    title: "Trailer Evento Stagionale",
    type: "Video Production",
    challenge: "Produrre un trailer cinematico per il lancio della stagione estiva con tempo limitato.",
    solution: "Utilizzo di footage in-game, motion graphics avanzate e sound design immersivo.",
    results: ["50.000+ visualizzazioni in 48 ore", "Sold out evento in 2 giorni", "Virale su Discord e YouTube"],
    image: "/cinematic-game-trailer-production-dark-epic.jpg",
  },
  {
    title: "Rebranding Network Gaming",
    type: "Full Rebrand",
    challenge: "Modernizzare l'immagine di un network datato mantenendo l'eredità del brand.",
    solution: "Evoluzione graduale del logo, nuova palette e sistema di design scalabile.",
    results: ["Percezione premium del brand", "Coerenza su tutti i canali", "+200% partnership commerciali"],
    image: "/gaming-network-rebranding-modern-dark.jpg",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Approfondimenti su alcuni dei progetti più significativi
          </p>
        </div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="flex-1">
                <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full rounded-2xl glass" />
              </div>

              <div className="flex-1 space-y-6">
                <span className="text-sm text-primary font-medium">{study.type}</span>
                <h3 className="text-3xl font-bold">{study.title}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Challenge
                    </h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Soluzione
                    </h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Risultati
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
