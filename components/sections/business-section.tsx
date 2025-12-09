"use client"

import { useState } from "react"
import {
  Building2,
  Users,
  Calendar,
  Video,
  Layers,
  ChevronDown,
  CreditCard,
  BarChart3,
  UserCheck,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const businessPackages = [
  {
    icon: Building2,
    title: "Branding Completo Server",
    description: "Identità visiva completa per il tuo server Minecraft",
    includes: ["Logo + Varianti", "Palette colori", "Banner principale", "Template social", "Favicon e icone"],
    price: "€399",
  },
  {
    icon: Users,
    title: "Kit Grafico Staff",
    description: "Materiali coordinati per tutto il team",
    includes: ["Badge staff personalizzati", "Signature email", "Template annunci", "Assets rank", "Guide stilistiche"],
    price: "€199",
  },
  {
    icon: Calendar,
    title: "Banner Eventi Mensili",
    description: "Abbonamento per banner promozionali",
    includes: [
      "4 banner/mese",
      "Revisioni incluse",
      "Adattamenti social",
      "Priorità nelle consegne",
      "Supporto dedicato",
    ],
    price: "€149/mese",
  },
  {
    icon: Video,
    title: "Trailer Premium",
    description: "Video cinematico professionale",
    includes: ["Durata 1-2 minuti", "Motion graphics", "Sound design", "3 revisioni", "Formati multipli"],
    price: "€299",
  },
  {
    icon: Layers,
    title: "Pacchetto All-In-One",
    description: "Tutto quello che serve per partire",
    includes: ["Branding completo", "5 banner", "Trailer", "Social kit", "Supporto 6 mesi"],
    price: "€899",
  },
]

const faqItems = [
  {
    icon: CreditCard,
    question: "Posso pagare a fine mese o con scadenze personalizzate?",
    answer:
      "Sì, per progetti business e collaborazioni continuative offro piani di pagamento flessibili. Puoi scegliere di pagare a fine mese, dividere il pagamento in rate, o concordare scadenze personalizzate in base alle tue esigenze. Per abbonamenti mensili, il pagamento avviene a inizio mese.",
  },
  {
    icon: BarChart3,
    question: "Come funziona il monitoraggio dei lavori?",
    answer:
      "Ogni cliente business ha accesso a report periodici sullo stato dei lavori. Per progetti complessi, fornisco aggiornamenti settimanali con preview e milestone raggiunte. Su richiesta, posso integrare anche dashboard condivise (Notion, Trello) per un monitoraggio in tempo reale.",
  },
  {
    icon: CreditCard,
    question: "È possibile pagare per singolo lavoro?",
    answer:
      "Assolutamente sì. Oltre ai pacchetti, ogni lavoro può essere richiesto e pagato singolarmente. Questo è ideale per esigenze occasionali o per testare la qualità del servizio prima di impegnarsi in un pacchetto più ampio. I prezzi singoli sono indicati nel listino.",
  },
  {
    icon: UserCheck,
    question: "Quali sono i vantaggi di avere un designer dedicato?",
    answer:
      "Con un designer dedicato hai: priorità assoluta nelle consegne, comunicazione diretta e immediata, profonda conoscenza del tuo brand che si traduce in coerenza visiva, tariffe preferenziali su tutti i lavori, e la garanzia di avere sempre lo stesso professionista che segue il tuo progetto.",
  },
  {
    icon: Shield,
    question: "Offrite supporto per server e aziende gaming?",
    answer:
      "Sì, sono specializzato nel supporto a server Minecraft, team esports e aziende nel settore gaming. Offro pacchetti dedicati che includono branding, materiali promozionali, gestione visiva degli eventi e supporto continuativo per mantenere una presenza grafica professionale e aggiornata.",
  },
]

export function BusinessSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm text-primary font-medium">Per Server & Aziende</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Soluzioni <span className="text-gradient">Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pacchetti strutturati per progetti di grandi dimensioni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {businessPackages.map((pkg, index) => (
            <div
              key={pkg.title}
              className="glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <pkg.icon className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <span className="text-2xl font-bold">{pkg.price}</span>
                <Button variant="outline" className="rounded-full bg-transparent">
                  Richiedi Info
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Domande <span className="text-gradient">Frequenti</span>
            </h3>
            <p className="text-muted-foreground">Tutto quello che devi sapere sui servizi business</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "glass rounded-2xl overflow-hidden transition-all duration-300",
                  openFaq === index && "glass-sharp",
                )}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <faq.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="flex-1 font-medium">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300",
                      openFaq === index && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
