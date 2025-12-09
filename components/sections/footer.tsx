"use client"

import { Instagram, Youtube, MessageCircle, Send } from "lucide-react"

const socialLinks = [
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "#",
    label: "X",
  },
  { icon: Instagram, href: "#", label: "Instagram" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: "#",
    label: "Facebook",
  },
  { icon: Youtube, href: "#", label: "YouTube" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    href: "#",
    label: "TikTok",
  },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Send, href: "#", label: "Telegram" },
]

const footerLinks = {
  servizi: {
    title: "Servizi",
    links: [
      { label: "Graphic Design", href: "#portfolio" },
      { label: "Video Editing", href: "#portfolio" },
      { label: "Minecraft Design", href: "#portfolio" },
      { label: "Web Development", href: "#portfolio" },
    ],
  },
  portfolio: {
    title: "Portfolio",
    links: [
      { label: "Lavori Recenti", href: "#portfolio" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Clienti", href: "#clients" },
      { label: "Recensioni", href: "#testimonials" },
    ],
  },
  business: {
    title: "Business",
    links: [
      { label: "Prezzi Individuali", href: "#pricing" },
      { label: "Pacchetti Business", href: "#business" },
      { label: "FAQ", href: "#faq" },
      { label: "Preventivo", href: "#cta" },
    ],
  },
  info: {
    title: "Info",
    links: [
      { label: "Chi Sono", href: "#about" },
      { label: "Contatti", href: "#cta" },
      { label: "Privacy Policy", href: "#" },
      { label: "Termini di Servizio", href: "#" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background via-primary/5 to-primary/10 pt-20 pb-8 overflow-hidden">
      {/* Top content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left side - Brand & Social */}
          <div className="lg:col-span-4 space-y-8">
            {/* Logo */}
            <div>
              <span className="text-3xl font-bold text-gradient">NotMatte</span>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xs">
                Creo esperienze visive uniche per il mondo gaming e digitale. Design che lascia il segno.
              </p>
            </div>

            {/* Social */}
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Social</span>
              <div className="flex items-center gap-3 mt-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {typeof social.icon === "function" ? <social.icon /> : <social.icon className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-foreground/80 hover:text-foreground hover:underline transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Separator line */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 NotMatte. Tutti i diritti riservati.</p>
          <p>P.IVA: 00000000000 | Made with passion</p>
        </div>
      </div>

      {/* Giant watermark text - Discord style */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="container mx-auto px-6">
          <span
            className="block text-[18vw] md:text-[14vw] font-black leading-none text-transparent"
            style={{
              WebkitTextStroke: "2px rgba(139, 92, 246, 0.15)",
              transform: "translateY(25%)",
            }}
          >
            NotMatte
          </span>
        </div>
      </div>

      {/* Gradient overlay for watermark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
    </footer>
  )
}
