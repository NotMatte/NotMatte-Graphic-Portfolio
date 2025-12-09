"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Pronto a dare vita al tuo <span className="text-gradient">progetto</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Contattami per discutere la tua idea. Rispondo entro 24 ore e sono sempre disponibile per una call
            conoscitiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground rounded-full px-8 py-6 text-lg glow-primary transition-all duration-300 hover:scale-105"
            >
              Richiedi Preventivo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg glass border-border hover:bg-secondary/50 transition-all duration-300 bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Entra su Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
