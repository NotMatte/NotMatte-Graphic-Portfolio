"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react"

const showcaseImages = [
  { src: "/portfolio/banner/coralmc/banner-halloween.jpg", rotate: -8, size: "lg" },
  { src: "/portfolio/logo/akaimc.jpg", rotate: 5, size: "md" },
  { src: "/portfolio/banner/coralmc/coralcup.jpg", rotate: -3, size: "lg" },
  { src: "/portfolio/banner/coralmc/communityevent.jpg", rotate: 12, size: "md" },
  { src: "/portfolio/banner/coralmc/skyprison-color.jpg", rotate: 0, size: "lg" },
  { src: "/portfolio/banner/coralmc/dragonupdate.jpg", rotate: 8, size: "md" },
  { src: "/portfolio/logo/akaimc.jpg", rotate: -10, size: "lg" },
  { src: "/portfolio/banner/coralmc/CoralMC-GW-2025-alternative-fixed.png", rotate: 9, size: "md" },
  { src: "/portfolio/banner/founderhunt.jpg", rotate: 4, size: "md" },
  { src: "/portfolio/logo/jackpot.jpg", rotate: -5, size: "sm" },
  { src: "/portfolio/logo/empiremc.png", rotate: 7, size: "md" },
  { src: "/portfolio/banner/dynastymc.png", rotate: -12, size: "lg" },
]

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [sectionProgress, setSectionProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Calculate section progress (0 = top, 1 = bottom of viewport)
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / (viewportHeight + rect.height))))
        setSectionProgress(progress)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "lg":
        return "w-56 h-40 md:w-72 md:h-52"
      case "md":
        return "w-44 h-32 md:w-56 md:h-40"
      case "sm":
        return "w-36 h-28 md:w-44 md:h-32"
      default:
        return "w-48 h-36"
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top row - moving left */}
        <div
          className="absolute top-[10%] left-0 right-0 transition-opacity duration-700"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: 1 - sectionProgress * 1.2,
            maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <div className="flex gap-6 animate-marquee-left" style={{ width: "200%" }}>
            {[...showcaseImages, ...showcaseImages].map((img, i) => (
              <div
                key={i}
                className={`${getSizeClasses(img.size)} rounded-2xl overflow-hidden opacity-60 hover:opacity-90 transition-all duration-500 flex-shrink-0 showcase-card`}
                style={
                  {
                    "--rotate": `${img.rotate}deg`,
                    transform: `rotate(${img.rotate + sectionProgress * 15}deg) scale(${1 - sectionProgress * 0.2})`,
                    animationDelay: `${i * 0.5}s`,
                  } as React.CSSProperties
                }
              >
                <img
                  src={img.src || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "crisp-edges" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/15 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row - moving right */}
        <div
          className="absolute bottom-[15%] left-0 right-0 transition-opacity duration-700"
          style={{
            transform: `translateY(${-scrollY * 0.2}px)`,
            opacity: 1 - sectionProgress * 1.1,
            maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <div className="flex gap-6 animate-marquee-right" style={{ width: "200%" }}>
            {[...showcaseImages].reverse().concat([...showcaseImages].reverse()).map((img, i) => (
              <div
                key={i}
                className={`${getSizeClasses(img.size)} rounded-2xl overflow-hidden opacity-55 hover:opacity-85 transition-all duration-500 flex-shrink-0 showcase-card`}
                style={{
                  transform: `rotate(${-img.rotate - sectionProgress * 12}deg) scale(${1 - sectionProgress * 0.15})`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <img
                  src={img.src || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "crisp-edges" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/15 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Floating accent images - sides only, no overlap with carousels */}
        <div
          className="absolute top-[35%] left-[3%] w-40 h-32 md:w-52 md:h-40 rounded-2xl overflow-hidden animate-float-showcase hidden xl:block showcase-card transition-all duration-700"
          style={
            {
              "--rotate": "-12deg",
              transform: `translateY(${scrollY * 0.5 - sectionProgress * 100}px) rotate(${-12 + sectionProgress * 20}deg) translateX(${mousePos.x * 30}px) scale(${1 - sectionProgress * 0.3})`,
              opacity: 0.65 - sectionProgress * 0.8,
            } as React.CSSProperties
          }
        >
          <img
            src="/portfolio/logo/CoralMC Halloween (Render).jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ imageRendering: "crisp-edges" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        <div
          className="absolute top-[32%] right-[3%] w-44 h-36 md:w-56 md:h-44 rounded-2xl overflow-hidden animate-float-showcase hidden xl:block showcase-card transition-all duration-700"
          style={
            {
              "--rotate": "8deg",
              transform: `translateY(${scrollY * 0.4 - sectionProgress * 120}px) rotate(${8 - sectionProgress * 25}deg) translateX(${mousePos.x * -25}px) scale(${1 - sectionProgress * 0.35})`,
              opacity: 0.6 - sectionProgress * 0.75,
              animationDelay: "1s",
            } as React.CSSProperties
          }
        >
          <img
            src="/portfolio/banner/Banner-AkaiMC-OPEN-BETA-KITPVP.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ imageRendering: "crisp-edges" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        <div
          className="absolute bottom-[32%] left-[4%] w-36 h-28 md:w-48 md:h-36 rounded-2xl overflow-hidden animate-float-showcase hidden xl:block showcase-card transition-all duration-700"
          style={
            {
              "--rotate": "15deg",
              transform: `translateY(${-scrollY * 0.35 + sectionProgress * 80}px) rotate(${15 + sectionProgress * 18}deg) translateX(${mousePos.x * 20}px) scale(${1 - sectionProgress * 0.25})`,
              opacity: 0.6 - sectionProgress * 0.75,
              animationDelay: "2s",
            } as React.CSSProperties
          }
        >
          <img
            src="/portfolio/banner/coralmc/bedwars-duels.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ imageRendering: "crisp-edges" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        <div
          className="absolute bottom-[30%] right-[4%] w-40 h-32 md:w-48 md:h-36 rounded-2xl overflow-hidden animate-float-showcase hidden xl:block showcase-card transition-all duration-700"
          style={
            {
              "--rotate": "-6deg",
              transform: `translateY(${-scrollY * 0.45 + sectionProgress * 90}px) rotate(${-6 - sectionProgress * 22}deg) translateX(${mousePos.x * -30}px) scale(${1 - sectionProgress * 0.28})`,
              opacity: 0.55 - sectionProgress * 0.7,
              animationDelay: "0.5s",
            } as React.CSSProperties
          }
        >
          <img
            src="/portfolio/logo/saturnscp.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ imageRendering: "crisp-edges" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        {/* Gradient overlays for depth */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background transition-opacity duration-700"
          style={{ opacity: 0.9 + sectionProgress * 0.3 }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 transition-opacity duration-700"
          style={{ opacity: 0.8 + sectionProgress * 0.5 }}
        />

        {/* Center vignette */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: "radial-gradient(ellipse at center, transparent 35%, oklch(0.08 0.005 260 / 0.6) 80%)",
            opacity: 0.9 + sectionProgress * 0.4,
          }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.5 0.03 270 / 0.5) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.5 0.03 270 / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground font-medium">Disponibile per nuovi progetti</span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-foreground">Ciao! Mi chiamo Matteo, in arte </span>
            <span className="text-gradient relative">
              NotMatte
              <span className="absolute -inset-1 blur-2xl bg-primary/20 -z-10 rounded-full" />
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Sono un Designer e developer che trasforma brand, creator e server Minecraft/FiveM in esperienze visive uniche, curate nei dettagli e pensate per lasciare il segno.
          </p>

          <div
            className={`flex items-center justify-center gap-8 mb-12 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">4+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Anni Esperienza</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">100+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Progetti</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">50+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Clienti</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">4.9/5 ★</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Valutazione</div>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-foreground/10 group"
            >
              <a href="#cta" className="flex items-center gap-2">
                Inizia un progetto
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base font-medium glass border-border/50 bg-transparent hover:bg-secondary/30 transition-all duration-300 hover:scale-105"
            >
              <a href="#portfolio">Esplora il portfolio</a>
            </Button>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
      >
        <span className="text-xs uppercase tracking-widest">Scopri di più</span>
        <div className="w-6 h-10 rounded-full border border-border/50 flex items-start justify-center p-2 group-hover:border-foreground/30 transition-colors">
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </div>
      </a>
    </section>
  )
}
