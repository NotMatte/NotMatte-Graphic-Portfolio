import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { BusinessSection } from "@/components/sections/business-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Header */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full opacity-[0.04]"
            style={{
              background: "radial-gradient(ellipse, oklch(0.65 0.12 275), transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Pricing & Business Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Soluzioni su misura per il<br />
              <span className="text-gradient">tuo progetto</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pacchetti pensati per server, creator e aziende gaming che vogliono distinguersi con una presenza visiva professionale e coordinata.
            </p>
          </div>
        </div>
      </section>

      <BusinessSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
