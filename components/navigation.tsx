"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Chi Sono", href: "#about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Business", href: "#business" },
  { label: "FAQ", href: "#faq" },
  { label: "Recensioni", href: "#testimonials" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Track active section
      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass-subtle py-4" : "py-6 bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center">
          <img src="/logo_completo_white.png" alt="NotMatte Logo" className="h-10 transition-opacity group-hover:opacity-80" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm transition-all duration-300 rounded-full",
                activeSection === item.href.slice(1)
                  ? "text-foreground bg-secondary/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/30",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 h-10 text-sm font-medium"
          >
            <a href="#cta" className="flex items-center gap-2">
              Contattami
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="glass-strong mx-4 mt-2 rounded-2xl p-5">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-foreground bg-secondary/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-border">
              <Button asChild className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full h-11">
                <a href="#cta" onClick={() => setIsMobileMenuOpen(false)}>
                  Contattami
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
