import { Navigation } from "@/components/navigation"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { Footer } from "@/components/sections/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio Completo | NotMatte - Graphic Designer",
  description:
    "Esplora tutti i progetti di NotMatte: banner, loghi, video editing, Minecraft design e molto altro. Filtri avanzati e dettagli completi per ogni lavoro realizzato.",
  keywords: [
    "portfolio",
    "graphic design",
    "minecraft",
    "banner",
    "loghi",
    "video editing",
    "gaming design",
    "NotMatte",
  ],
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <PortfolioSection />
      <Footer />
    </main>
  )
}
