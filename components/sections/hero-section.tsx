"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react"

const showcaseImages = [
  { src: "/showcase/banner-1.jpg", rotate: -8, size: "lg" },
  { src: "/showcase/logo-1.jpg", rotate: 5, size: "md" },
  { src: "/showcase/trailer-1.jpg", rotate: -3, size: "lg" },
  { src: "/showcase/minecraft-1.jpg", rotate: 12, size: "md" },
  { src: "/showcase/social-1.jpg", rotate: -6, size: "sm" },
  { src: "/showcase/banner-2.jpg", rotate: 8, size: "md" },
  { src: "/showcase/logo-2.jpg", rotate: -10, size: "lg" },
  { src: "/showcase/web-1.jpg", rotate: 4, size: "md" },
]

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
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
        return "w-48 h-32 md:w-64 md:h-44"
      case "md":
        return "w-36 h-24 md:w-48 md:h-32"
      case "sm":
        return "w-28 h-20 md:w-36 md:h-24"
      default:
        return "w-40 h-28"
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top row - moving left */}
        <div
          className="absolute top-[8%] left-0 right-0 scroll-container"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="flex gap-6 animate-marquee-left" style={{ width: "200%" }}>
            {[...showcaseImages, ...showcaseImages].map((img, i) => (
              <div
                key={i}
                className={`${getSizeClasses(img.size)} rounded-2xl overflow-hidden opacity-20 hover:opacity-40 transition-opacity duration-500 flex-shrink-0 showcase-card`}
                style={
                  {
                    "--rotate": `${img.rotate}deg`,
                    transform: `rotate(${img.rotate}deg)`,
                    animationDelay: `${i * 0.5}s`,
                  } as React.CSSProperties
                }
              >
                <img src={img.src || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row - moving right */}
        <div
          className="absolute bottom-[12%] left-0 right-0 scroll-container"
          style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
        >
          <div className="flex gap-6 animate-marquee-right" style={{ width: "200%" }}>
            {[...showcaseImages.reverse(), ...showcaseImages].map((img, i) => (
              <div
                key={i}
                className={`${getSizeClasses(img.size)} rounded-2xl overflow-hidden opacity-15 hover:opacity-35 transition-opacity duration-500 flex-shrink-0`}
                style={{
                  transform: `rotate(${-img.rotate}deg)`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <img src={img.src || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Floating accent images - corners */}
        <div
          className="absolute top-[20%] left-[5%] w-32 h-24 md:w-48 md:h-36 rounded-2xl overflow-hidden opacity-25 animate-float-showcase hidden lg:block"
          style={
            {
              "--rotate": "-12deg",
              transform: `translateY(${scrollY * 0.2}px) rotate(-12deg) translateX(${mousePos.x * 30}px)`,
            } as React.CSSProperties
          }
        >
          <img src="/showcase/featured-1.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div
          className="absolute top-[25%] right-[8%] w-36 h-28 md:w-52 md:h-40 rounded-2xl overflow-hidden opacity-20 animate-float-showcase hidden lg:block"
          style={
            {
              "--rotate": "8deg",
              transform: `translateY(${scrollY * 0.15}px) rotate(8deg) translateX(${mousePos.x * -25}px)`,
              animationDelay: "1s",
            } as React.CSSProperties
          }
        >
          <img src="/showcase/featured-2.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div
          className="absolute bottom-[30%] left-[10%] w-28 h-20 md:w-40 md:h-28 rounded-2xl overflow-hidden opacity-20 animate-float-showcase hidden lg:block"
          style={
            {
              "--rotate": "15deg",
              transform: `translateY(${-scrollY * 0.12}px) rotate(15deg) translateX(${mousePos.x * 20}px)`,
              animationDelay: "2s",
            } as React.CSSProperties
          }
        >
          <img src="/showcase/featured-3.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div
          className="absolute bottom-[35%] right-[6%] w-32 h-24 md:w-44 md:h-32 rounded-2xl overflow-hidden opacity-15 animate-float-showcase hidden lg:block"
          style={
            {
              "--rotate": "-6deg",
              transform: `translateY(${-scrollY * 0.18}px) rotate(-6deg) translateX(${mousePos.x * -30}px)`,
              animationDelay: "0.5s",
            } as React.CSSProperties
          }
        >
          <img src="/showcase/featured-4.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

        {/* Center vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 20%, oklch(0.08 0.005 260) 70%)",
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
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-foreground font-medium">Disponibile per nuovi progetti</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>

          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-foreground">Ciao, sono </span>
            <span className="text-gradient relative">
              NotMatte
              <span className="absolute -inset-1 blur-2xl bg-primary/20 -z-10 rounded-full" />
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Designer e developer creativo che trasforma
            <span className="text-foreground font-medium"> idee in esperienze visive</span>
          </p>

          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              { label: "Graphic Design", icon: "🎨" },
              { label: "Video Editing", icon: "🎬" },
              { label: "Minecraft Design", icon: "⛏️" },
              { label: "Web Development", icon: "💻" },
            ].map((skill, i) => (
              <span
                key={skill.label}
                className="px-4 py-2 text-sm text-foreground/80 glass-subtle rounded-full flex items-center gap-2 hover:glass transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <span>{skill.icon}</span>
                {skill.label}
              </span>
            ))}
          </div>

          <div
            className={`flex items-center justify-center gap-8 mb-12 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">3+</div>
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
          </div>

          {/* CTA Buttons */}
          <div
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
          </div>
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
