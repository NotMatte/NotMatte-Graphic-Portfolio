"use client"

import Link from "next/link"

// Riga 1: Slide verso DESTRA
const row1Images = [
  { src: "/portfolio/banner/Banner-AkaiMC-OPEN-BETA-KITPVP.png", title: "AkaiMC OPEN BETA KITPVP" },
  { src: "/portfolio/logo/jackpot.jpg", title: "Logo per il gruppo telegram Destinazione Jackpot" },
  { src: "/portfolio/banner/coralmc/dragonupdate.jpg", title: "Dragon Update della survival di CoralMC" },
  { src: "/portfolio/banner/coralmc/CoralMC-GW-2025-alternative-fixed.png", title: "Partecipazione al Gamesweek 2025 di CoralMC" },
  { src: "/portfolio/logo/CoralMC Halloween (Render).jpg", title: "Versione Halloween del logo di CoralMC" },
  { src: "/portfolio/logo/neocosmic.png", title: "Logo di NeoCosmic" },
  { src: "/portfolio/banner/deadwoodmc-head.jpg", title: "Banner Header per DeadwoodMC" },
]

// Riga 2: Slide verso SINISTRA
const row2Images = [
  { src: "/portfolio/banner/coralmc/coralcup-live.jpg", title: "Annuncio CoralCUP in live" },
  { src: "/portfolio/logo/akaimc.jpg", title: "Logo di AkaiMC" },
  { src: "/portfolio/banner/founderhunt.jpg", title: "Evento live al GamesWeek, FounderHunt 2024" },
  { src: "/portfolio/banner/era-banner-2.png", title: "Banner tabellone per Era-Roleplay" },
  { src: "/portfolio/logo/robodeals.jpg", title: "Logo di RoboDeals, gruppo telegram di offerte" },
  { src: "/portfolio/trailer/Copertina-video-teaser.jpg", title: "Copertina per il teaser dell'evento Squid Game di AkaiMC" },
  { src: "/portfolio/social/dinello-overlay.jpg", title: "Overlay webcam per Dinello" },
]

// Riga 3: Slide verso DESTRA
const row3Images = [
  { src: "/portfolio/banner/dynastymc.png", title: "Banner annuncio apertura di DynastyMC" },
  { src: "/portfolio/banner/coralmc/valentine.jpg", title: "Aggiornamento di San Valentino della survival di CoralMC" },
  { src: "/portfolio/banner/era-banner-1.png", title: "Banner tabellone per Era-Roleplay" },
  { src: "/portfolio/social/svantaggio.png", title: "Banner Twitch di Svantaggio" },
  { src: "/portfolio/social/GNG-Events-Post-PAG1.jpg", title: "Post instagram per annungiare una serata organizzata da GNG Night" },
  { src: "/portfolio/social/GNG-Events-Post-PAG2.jpg", title: "Post instagram per annungiare una serata organizzata da GNG Night" },
  { src: "/portfolio/logo/empiremc.png", title: "Logo di EmpireMC" },
]

export function ShowcaseSliderSection() {
  const renderRow = (images: typeof row1Images, animationClass: string) => (
    <div className="relative overflow-hidden">
      <div className={`flex gap-6 items-center ${animationClass}`} style={{ width: "300%" }}>
        {[...images, ...images, ...images].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-40 sm:h-44 md:h-48 lg:h-52 rounded-2xl overflow-hidden glass hover:glass-sharp transition-all duration-300 group relative"
          >
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.title}
              className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <h4 className="text-sm font-semibold text-foreground">{img.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )

  return (
    <section id="showcase" className=" relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Vetrina dei Lavori e portfolio
          </span>
          {/* <h2 className="text-4xl md:text-6xl font-bold mb-6">
            I Miei Lavori In <span className="text-gradient">Evidenza</span>
          </h2> */}
          <h2 className="text-7xl md:text-7xl font-bold mb-6">
            {/* Benvenuti nella mia <br /><span className="text-gradient">vetrina dei lavori</span> */}
            Curioso di vedere<br />qualche mio lavoro?<br /><span className="text-gradient">Allora sei nel posto giusto!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Questi lavori rappresentano una parte del mio viaggio come designer e developer, mostrando la mia passione per la creatività e l'innovazione.
          </p>
        </div>

        {/* Slider Container */}
        <div className="w-full space-y-8 mb-20">
          {/* Riga 1: Slide verso DESTRA */}
          {renderRow(row1Images, "animate-marquee-slow-right")}

          {/* Riga 2: Slide verso SINISTRA */}
          {renderRow(row2Images, "animate-marquee-slow-left")}

          {/* Riga 3: Slide verso DESTRA */}
          {renderRow(row3Images, "animate-marquee-slow-right")}
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="glass-subtle rounded-3xl p-8 md:p-12 text-center">
            {/* <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Vuoi Vedere <span className="text-gradient">Tutto il Portfolio</span>?
            </h3> */}
            <h2 className="text-4xl md:text-4xl font-bold mb-5">
              Difficile guardare tutti i progetti mentre si muovono vero? 😵‍💫<br /><span className="text-gradient">Dai un occhio al portfolio completo!</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Esplora tutti i miei progetti attraverso filtri avanzati, ricerche dettagliate e schede complete di ogni informazione. Scopri il mio percorso creativo in una versione più approfondita e organizzata!
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 ease-out hover:gap-5 hover:shadow-xl hover:scale-105 group/btn"
            >
              <span>Scopri e Esplora tutti i miei lavori</span>
              <svg
                className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500 ease-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
