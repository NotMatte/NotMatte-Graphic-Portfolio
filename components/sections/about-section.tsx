"use client"

import { Palette, Video, Gamepad2, Code, Calendar } from "lucide-react"

const skills = [
  { icon: Palette, label: "Branding & Logo Design", description: "Identità visive uniche e memorabili" },
  { icon: Video, label: "Video Editing", description: "Trailer, motion graphics e contenuti social" },
  { icon: Gamepad2, label: "Minecraft Design", description: "Banner, assets e branding per server" },
  { icon: Code, label: "Web Development", description: "Siti moderni e performanti" },
]

const timeline = [
  { year: "2021", title: "Inizio Carriera", description: "Primi progetti di graphic design" },
  { year: "2022", title: "Espansione Servizi", description: "Video editing e Minecraft design" },
  { year: "2023", title: "Web Development", description: "Aggiunta sviluppo web al portfolio" },
  { year: "2024", title: "100+ Progetti", description: "Milestone di progetti completati" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Chi è <span className="text-gradient">NotMatte</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Designer creativo con oltre 3 anni di esperienza nel mondo del design digitale. Specializato in branding,
            video editing, Minecraft design e sviluppo web. Ogni progetto è un'opportunità per creare qualcosa di unico
            e memorabile.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Calendar className="w-6 h-6 text-primary" />
            Il Mio Percorso
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass-subtle rounded-xl p-6 inline-block">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h4 className="font-semibold mt-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary glow-primary relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
