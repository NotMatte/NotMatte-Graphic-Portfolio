"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Come funziona il pagamento?",
    answer:
      "Per i servizi continuativi, il pagamento avviene a fine mese dopo la consegna di tutti i lavori concordati. Per progetti singoli, richiedo un acconto del 50% all'inizio e il saldo alla consegna. Accetto bonifico bancario e PayPal.",
  },
  {
    question: "Posso monitorare lo stato dei miei lavori?",
    answer:
      "Assolutamente sì. Ogni cliente ha accesso a un sistema di tracking dove può vedere lo stato di avanzamento di ogni progetto, lasciare feedback e comunicare direttamente con me. Riceverai anche aggiornamenti regolari via Discord o email.",
  },
  {
    question: "È possibile pagare per singolo lavoro invece di un pacchetto mensile?",
    answer:
      "Certo! Offro sia pacchetti mensili per chi ha esigenze continuative, sia preventivi per singoli progetti. Contattami con i dettagli del tuo progetto e ti fornirò un preventivo personalizzato senza impegno.",
  },
  {
    question: "Quali sono i tempi di consegna?",
    answer:
      "I tempi variano in base alla complessità del progetto. Un logo semplice richiede 3-5 giorni, un video editing completo 5-10 giorni, una build Minecraft 1-3 settimane. Per i clienti con pacchetto mensile, garantisco priorità nelle consegne.",
  },
  {
    question: "Offri revisioni e assistenza post-consegna?",
    answer:
      "Ogni progetto include un numero di revisioni concordate (solitamente 2-3). Per i clienti business con pacchetto mensile, offro revisioni illimitate e assistenza continua. Sono sempre disponibile per piccole modifiche anche dopo la consegna.",
  },
  {
    question: "Come funziona la comunicazione durante il progetto?",
    answer:
      "Preferisco Discord per comunicazioni rapide e feedback, ma sono disponibile anche via email. Per i clienti business organizzo call settimanali di aggiornamento. Rispondo sempre entro 24 ore nei giorni lavorativi.",
  },
  {
    question: "Gestisci progetti complessi o di grandi dimensioni?",
    answer:
      "Sì, ho esperienza con progetti complessi come rebranding completi, serie di video, build Minecraft elaborate e siti web articolati. Per progetti molto grandi, creiamo insieme una roadmap con milestone e consegne progressive.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] bg-gradient-to-br from-primary to-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-primary font-medium tracking-wide uppercase mb-4 block">FAQ</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Domande frequenti
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tutto quello che devi sapere sui miei servizi, pagamenti e processo di lavoro.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "glass rounded-2xl overflow-hidden transition-all duration-300",
                  openIndex === index ? "bg-secondary/30" : "hover:bg-secondary/20",
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-base font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional help */}
        <div className="mt-12 max-w-3xl">
          <div className="glass-subtle rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-medium text-foreground mb-1">Hai altre domande?</p>
              <p className="text-sm text-muted-foreground">Contattami direttamente, rispondo sempre entro 24 ore.</p>
            </div>
            <a
              href="#cta"
              className="px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors flex-shrink-0"
            >
              Contattami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
