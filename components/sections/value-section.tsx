"use client"

import { Award, Layout, Gamepad2, Zap, MessageSquare, HeartHandshake } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Qualità Premium",
    description: "Ogni progetto è curato nei minimi dettagli per risultati eccellenti",
  },
  {
    icon: Layout,
    title: "Focus sulla UX",
    description: "Design che non solo appare bello, ma funziona perfettamente",
  },
  {
    icon: Gamepad2,
    title: "Esperienza Gaming",
    description: "Anni di esperienza nel mondo Minecraft e gaming in generale",
  },
  {
    icon: Zap,
    title: "Consegna Rapida",
    description: "Tempi di consegna veloci senza compromettere la qualità",
  },
  {
    icon: MessageSquare,
    title: "Comunicazione Chiara",
    description: "Aggiornamenti costanti e feedback loop efficiente",
  },
  {
    icon: HeartHandshake,
    title: "Supporto Post-Consegna",
    description: "Assistenza anche dopo la conclusione del progetto",
  },
]

export function ValueSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perché <span className="text-gradient">Scegliermi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Valori e vantaggi che mi distinguono</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
