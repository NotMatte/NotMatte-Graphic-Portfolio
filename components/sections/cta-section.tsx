"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "€49",
    description: "Perfetto per iniziare",
    features: ["1 Logo", "2 Revisioni", "Consegna 3-5 giorni", "File sorgenti", "Supporto email"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "€149",
    description: "Il più richiesto",
    features: [
      "Brand Identity completo",
      "3 Banner social",
      "Revisioni illimitate",
      "Consegna prioritaria",
      "Supporto dedicato",
      "Kit assets",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Per progetti complessi",
    features: [
      "Tutto in Professional",
      "Progetti su misura",
      "Designer dedicato",
      "Supporto continuativo",
      "Consulenza strategica",
      "NDA disponibile",
    ],
    highlighted: false,
  },
]

export function CTASection() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(ellipse, oklch(0.65 0.12 275), transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Disponibile per nuovi progetti
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Pronto a dare vita<br />al tuo <span className="text-gradient">progetto</span>?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Scegli il piano perfetto per te o richiedi un preventivo personalizzato per il tuo progetto.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`glass rounded-3xl p-8 relative transition-all duration-700 hover:scale-105 ${
                plan.highlighted ? "glass-sharp ring-2 ring-primary/20" : ""
              }`}
            >
              {/* Highlighted badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Più popolare
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-5xl font-bold text-gradient mb-1">{plan.price}</div>
                {plan.price !== "Custom" && <p className="text-sm text-muted-foreground">una tantum</p>}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full rounded-full h-12 font-medium transition-all duration-300 group ${
                  plan.highlighted
                    ? "bg-foreground text-background hover:bg-foreground/90 hover:scale-105"
                    : "bg-transparent border-2 border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                {plan.price === "Custom" ? "Richiedi preventivo" : "Inizia ora"}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Non sei sicuro quale piano fa per te? Parliamone insieme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <a href="/pricing">
                Vedi tutti i prezzi
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">oppure</p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-lg glass border-border hover:glass-sharp transition-all duration-300 bg-transparent"
            >
              <a href="mailto:contact@notmatte.it">Contattami direttamente</a>
            </Button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>Risposta entro 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>Preventivo gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>Nessun impegno</span>
          </div>
        </div>
      </div>
    </section>
  )
}
