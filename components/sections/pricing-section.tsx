"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Base",
    price: "€29",
    period: "da",
    description: "Perfetto per progetti singoli",
    features: ["1 Banner o Visual", "2 Revisioni incluse", "File sorgente", "Consegna 3-5 giorni"],
    popular: false,
  },
  {
    name: "Pro",
    price: "€79",
    period: "da",
    description: "Per progetti più complessi",
    features: [
      "3 Banner o Visual",
      "Logo design incluso",
      "5 Revisioni incluse",
      "File sorgente",
      "Consegna prioritaria",
      "Supporto 30 giorni",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "€199",
    period: "da",
    description: "Pacchetto completo",
    features: [
      "Branding completo",
      "5+ Visual personalizzati",
      "Social media kit",
      "Revisioni illimitate",
      "File sorgente editabili",
      "Supporto 90 giorni",
      "Consulenza inclusa",
    ],
    popular: false,
  },
]

const additionalServices = [
  { name: "Video Editing Base", price: "€49" },
  { name: "Trailer Cinematico", price: "€149" },
  { name: "Motion Graphics", price: "€99" },
  { name: "Minecraft Spawn Design", price: "€199" },
  { name: "Landing Page", price: "€299" },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Listino <span className="text-gradient">Prezzi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pacchetti trasparenti per ogni esigenza</p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "glass rounded-3xl p-8 relative transition-all duration-300 hover:scale-[1.02]",
                plan.popular && "ring-2 ring-primary glow-primary",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Più Popolare
                </span>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full rounded-full",
                  plan.popular
                    ? "bg-primary hover:bg-primary/80 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80",
                )}
              >
                Inizia Ora
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="glass rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Servizi Aggiuntivi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {additionalServices.map((service) => (
              <div
                key={service.name}
                className="glass-subtle rounded-xl p-4 text-center hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <p className="font-medium text-sm mb-1">{service.name}</p>
                <p className="text-primary font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
