import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ShowcaseSliderSection } from "@/components/sections/showcase-slider-section"
import { ClientsSection } from "@/components/sections/clients-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ShowcaseSliderSection />
      <ClientsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
