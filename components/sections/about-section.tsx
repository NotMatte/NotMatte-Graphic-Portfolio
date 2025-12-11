"use client"

import { Palette, Video, Gamepad2, CarFront, LayoutTemplate, Code, Smartphone, Shirt, BotMessageSquare, MonitorSmartphone, Play } from "lucide-react"

const skills = [
  {
    icon: Palette,
    label: "Branding & Logo Design",
    description: "Creo identità visive moderne e coerenti che raccontano il valore del tuo brand. Dai loghi ai sistemi grafici, progetto elementi pensati per essere riconoscibili e memorabili.",
    images: [
      "/portfolio/logo/akaimc.jpg",
      "/portfolio/logo/CoralMC Halloween (Render).jpg",
      "/portfolio/logo/jackpot.jpg",
    ]
  },
  {
    icon: Video,
    label: "Video Editing & Trailer Maker",
    description: "Realizzo trailer e contenuti dinamici progettati per catturare l'attenzione e trasmettere emozioni. Ogni video è curato nel ritmo, nello stile e nel messaggio che vuoi comunicare.",
    images: [
      "/portfolio/trailer/tridentbox2.jpg",
      "/portfolio/trailer/akaimc.jpg",
      "/portfolio/trailer/ninfea.jpg"
    ],
    videoLinks: [
      "https://youtu.be/AhtCqW9ktq0",
      "https://youtu.be/YV5X8edXN_s",
      "https://youtu.be/G67tc4Xs9tg"
    ],
    videoDurations: ["1:11", "1:52", "0:58"]
  },
  {
    icon: Smartphone,
    label: "Contenuti Social",
    description: "Creazione di contenuti ottimizzati per i social: stories, post, reel e annunci. Design accattivanti e coerenti con la tua brand identity per aumentare engagement e impatto visivo.",
    images: [
      "/portfolio/social/GNG-Events-Post-PAG1.jpg",
      "/portfolio/social/Carpy-GW-2025-Story.png",
      "/portfolio/social/AkaiMC-LARGE-LOBBY-JUICY-Banner.png",
    ]
  },
  {
    icon: Gamepad2,
    label: "Minecraft Design",
    description: "Sviluppo banner, branding e asset professionali per server Minecraft che vogliono distinguersi. Ogni design è pensato per valorizzare il progetto e renderlo immediatamente riconoscibile.",
    images: [
      "/portfolio/banner/coralmc/gemme.jpg",
      "/portfolio/banner/deadwoodmc-head.jpg",
      "/portfolio/banner/coralmc/CoralMC-GW-2025-alternative-fixed.png",
    ]
  },
  {
    icon: CarFront,
    label: "FiveM Design",
    description: "Creo asset grafici e branding curati nei dettagli per server FiveM di ogni tipologia. Il risultato è un'immagine pulita, moderna e perfettamente allineata alla tua community. (Modifico e personalizzo anche dds file)",
    images: [
      "/portfolio/banner/era-banner-1.png",
      "/portfolio/banner/era-banner-2.png",
      "/portfolio/banner/screen-menu.png",
    ]
  },
  {
    icon: LayoutTemplate,
    label: "Web Design",
    description: "Progetto interfacce moderne e intuitive che rendono la navigazione fluida e piacevole. Un mix di estetica, usabilità e attenzione al dettaglio.",
    images: []
  },
  {
    icon: MonitorSmartphone,
    label: "Web Development",
    description: "Sviluppo siti performanti, responsive e pensati per crescere insieme al tuo progetto. Codice pulito, ottimizzazione e affidabilità al centro di ogni soluzione.",
    images: []
  },
  {
    icon: BotMessageSquare,
    label: "Discord Bot Development",
    description: "Sviluppo bot Discord completi, strutturati e integrati con database. Funzionalità su misura, stabilità e gestione ottimizzata per community, server professionali e qualsiasi cosa tu possa immaginare.",
    images: []
  },
  {
    icon: Shirt,
    label: "Poster & Apparel Design",
    description: "Creo design per poster, maglie e merchandising con uno stile moderno e riconoscibile. Progetti pensati per esprimere identità, creatività e un’estetica che lascia il segno.",
    images: []
  },
]

const timeline = [
  { year: "2021", title: "Inizio Carriera", description: "Primi progetti di graphic design" },
  { year: "2022", title: "Espansione Servizi", description: "Video editing e Minecraft design" },
  { year: "2023", title: "Web Development", description: "Aggiunta sviluppo web al portfolio" },
  { year: "2024", title: "100+ Progetti", description: "Milestone di progetti completati" },
]

  // const skills = [
    
  //   { name: "HTML", image: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", level: 95, category: "Frontend" },
  //   { name: "CSS", image: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", level: 90, category: "Frontend" },
  //   { name: "JavaScript", image: "https://img.icons8.com/?size=100&id=PVRwpTTPMITk&format=png&color=000000", level: 75, category: "Frontend" },

  //   { name: "TypeScript", image: "https://img.icons8.com/?size=100&id=HcQEdKCkXUs3&format=png&color=000000", level: 75, category: "Frontend" },
  //   { name: "Node.js", image: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", level: 80, category: "Backend & Frontend" },
  //   { name: "NPM", image: "https://img.icons8.com/?size=100&id=24895&format=png&color=000000", level: 80, category: "DevOps" },

  //   { name: "ReactJS", image: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000", level: 65, category: "Frontend" },
  //   { name: "AngularJS", image: "https://img.icons8.com/?size=100&id=6SWtW8hxZWSo&format=png&color=000000", level: 70, category: "Frontend" },
  //   { name: "NextJS", image: "https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=FFFFFF", level: 15, category: "Frontend" },

  //   { name: "C#", image: "https://img.icons8.com/?size=100&id=mhwmyz1eu7T5&format=png&color=000000", level: 60, category: "Backend" },
  //   { name: ".NET", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png", level: 45, category: "Backend" },
  //   { name: "Entity Framework", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5h6u20sNjD6JFopjIztwjRfQWrZQ-L5ZQ1w&s", level: 45, category: "Backend" },

  //   { name: "C", image: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000", level: 60, category: "Backend" },
  //   { name: "Github", image: "https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF", level: 70, category: "DevOps" },
  //   { name: "GitLab", image: "https://img.icons8.com/?size=100&id=epZz7YMDqqwA&format=png&color=000000", level: 60, category: "DevOps" },
    
  //   { name: "MongoDB", image: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000", level: 80, category: "Database" },
  //   { name: "MySQL", image: "https://img.icons8.com/?size=100&id=hYoELNwniGhi&format=png&color=000000", level: 70, category: "Database" },
  //   { name: "MariaDB", image: "https://img.icons8.com/?size=100&id=DakakaPez2uy&format=png&color=000000", level: 70, category: "Database" },

  //   { name: "Express.js", image: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF", level: 85, category: "Backend" },
  //   { name: "Bootstrap", image: "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000", level: 70, category: "Frontend" },
  //   // { name: "Adobe Photoshop", image: "https://img.icons8.com/?size=100&id=NeNPFdj7MzXi&format=png&color=000000", level: 90, category: "Design" },
  //   // { name: "Adobe After Effects", image: "https://img.icons8.com/?size=100&id=XJqAuI8VfoCe&format=png&color=000000", level: 80, category: "Design" },

  // ]

  // const software = [
  //   { name: "Visual Studio Code", image: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000", level: 90, category: "Sviluppo" },
  //   { name: "Visual Studio", image: "https://img.icons8.com/?size=100&id=ezj3zaVtImPg&format=png&color=000000", level: 70, category: "Sviluppo" },
  //   { name: "IntelliJ IDEA", image: "https://img.icons8.com/?size=100&id=61466&format=png&color=000000", level: 65, category: "Sviluppo" },

  //   { name: "DBeaver", image: "https://icon.icepanel.io/Technology/svg/DBeaver.svg", level: 70, category: "Database" },
  //   { name: "SQL Server", image: "https://brandlogos.net/wp-content/uploads/2025/03/microsoft_sql_server-logo_brandlogos.net_wykhq.png", level: 65, category: "Database" },
  //   { name: "MongoDB GUI", image: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000", level: 70, category: "Database" },

  //   { name: "Source Tree", image: "https://i.ibb.co/TBcRYJpp/sourcetree-seeklogo.png", level: 85, category: "DevOps" },
  //   { name: "Notion", image: "https://img.icons8.com/?size=100&id=uVERmCBZZACL&format=png&color=FFFFFF", level: 85, category: "Organizzazione, Gestione, Documentazione, ecc" },
  //   { name: "Figma", image: "https://img.icons8.com/?size=100&id=W0YEwBDDfTeu&format=png&color=000000", level: 10, category: "UI/UX Design" },

  //   { name: "Excel", image: "https://img.icons8.com/?size=100&id=117561&format=png&color=000000", level: 75, category: "Organizzazione e Gestione" },
  //   { name: "World", image: "https://img.icons8.com/?size=100&id=pGHcje298xSl&format=png&color=000000", level: 80, category: "Organizzazione, Gestione, Documentazione, ecc" },
  //   { name: "PowerPoint", image: "https://img.icons8.com/?size=100&id=ifP93G7BXUhU&format=png&color=000000", level: 70, category: "Presentazioni e Documentazioni" },

  //   { name: "Adobe Photoshop", image: "https://img.icons8.com/?size=100&id=NeNPFdj7MzXi&format=png&color=000000", level: 85, category: "Design" },
  //   { name: "Adobe After Effects", image: "https://img.icons8.com/?size=100&id=XJqAuI8VfoCe&format=png&color=000000", level: 70, category: "Video Editing" },
  //   { name: "Premiere Pro", image: "https://img.icons8.com/?size=100&id=87ZqKgnPMW8m&format=png&color=000000", level: 25, category: "Video Editing" },

  // ]

const devTools = [
  { name: "Visual Studio Code", icon: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000", premium: false },
  { name: "Visual Studio", icon: "https://img.icons8.com/?size=100&id=ezj3zaVtImPg&format=png&color=000000", premium: false },
  { name: "IntelliJ IDEA", icon: "https://img.icons8.com/?size=100&id=61466&format=png&color=000000", premium: false },
  { name: "DBeaver", icon: "https://icon.icepanel.io/Technology/svg/DBeaver.svg", premium: false },
  { name: "SQL Server", icon: "https://brandlogos.net/wp-content/uploads/2025/03/microsoft_sql_server-logo_brandlogos.net_wykhq.png", premium: false },
  { name: "MongoDB GUI", icon: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000", premium: false },
  { name: "Source Tree", icon: "https://i.ibb.co/TBcRYJpp/sourcetree-seeklogo.png", premium: false },

  { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", premium: true },
  { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", premium: true },
  { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=PVRwpTTPMITk&format=png&color=000000", premium: true },
  { name: "TypeScript", icon: "https://img.icons8.com/?size=100&id=HcQEdKCkXUs3&format=png&color=000000", premium: true },
  { name: "Node.js", icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", premium: true },
  { name: "NPM", icon: "https://img.icons8.com/?size=100&id=24895&format=png&color=000000", premium: false },
  { name: "ReactJS", icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000", premium: true },
  { name: "AngularJS", icon: "https://img.icons8.com/?size=100&id=6SWtW8hxZWSo&format=png&color=000000", premium: true },
  { name: "NextJS", icon: "https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=FFFFFF", premium: false },
  { name: "C#", icon: "https://img.icons8.com/?size=100&id=mhwmyz1eu7T5&format=png&color=000000", premium: true },
  { name: ".NET", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png", premium: false },
  { name: "Entity Framework", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5h6u20sNjD6JFopjIztwjRfQWrZQ-L5ZQ1w&s", premium: false },
  { name: "C", icon: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000", premium: false },
  { name: "Github", icon: "https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF", premium: false },
  { name: "GitLab", icon: "https://img.icons8.com/?size=100&id=epZz7YMDqqwA&format=png&color=000000", premium: false },
  { name: "MongoDB", icon: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000", premium: true },
  { name: "MySQL", icon: "https://img.icons8.com/?size=100&id=hYoELNwniGhi&format=png&color=000000", premium: false },
  { name: "MariaDB", icon: "https://img.icons8.com/?size=100&id=DakakaPez2uy&format=png&color=000000", premium: false },
  { name: "Express.js", icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF", premium: true },
  { name: "Bootstrap", icon: "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000", premium: false },
]


export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Floating background images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-40 h-40 opacity-[0.08] animate-float-bg-1">
          <img src="/images/photoshop.png" alt="" className="w-full h-full object-contain rounded-xl" />
        </div>
        <div className="absolute top-[30%] right-[8%] w-32 h-32 opacity-[0.06] animate-float-bg-2">
          <img src="/images/ae.png" alt="" className="w-full h-full object-contain rounded-xl" />
        </div>
        <div className="absolute bottom-[25%] left-[10%] w-36 h-36 opacity-[0.07] animate-float-bg-3">
          <img src="/images/capcut.webp" alt="" className="w-full h-full object-contain rounded-xl" />
        </div>
        <div className="absolute bottom-[15%] right-[12%] w-44 h-44 opacity-[0.05] animate-float-bg-4">
          <img src="/images/vscode.png" alt="" className="w-full h-full object-contain rounded-xl" />
        </div>
        <div className="absolute top-[60%] left-[15%] w-28 h-28 opacity-[0.06] animate-float-bg-1" style={{ animationDelay: '5s' }}>
          <img src="/images/canva.png" alt="" className="w-full h-full object-contain rounded-xl" />
        </div>
        <div className="absolute top-[20%] right-[20%] w-38 h-38 opacity-[0.07] animate-float-bg-3" style={{ animationDelay: '3s' }}>
          <img src="/images/covid.png" alt="" className="w-full h-full object-contain rounded-xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Chi sono e cosa faccio
          </span>
          <h2 className="text-7xl md:text-7xl font-bold mb-6">
            Si va bene, ma chi è realmente <span className="text-gradient">NotMatte</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Dietro NotMatte c'è realmente Matteo, un designer creativo che ha trasformato una semplice curiosità in una vera e propria professione.</p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-3">Ho iniziato durante la pandemia del 2020, sperimentando Photoshop giorno dopo giorno, quasi per gioco. Quella passione è cresciuta rapidamente, portandomi a collaborare con alcuni dei brand e server Minecraft più importanti della scena italiana.</p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-3">In oltre 4 anni di esperienza ho affinato competenze in branding, video editing, Minecraft design e sviluppo web, costruendo un percorso solido e in continua evoluzione.</p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-3">Ad oggi ogni progetto è per me un’occasione per creare qualcosa di unico, curato, memorabile e per superare sempre me stesso.</p>
          
          <h2 className="text-4xl md:text-4xl font-bold mb-4 mt-25">
            Lo so, è noioso parlare di me stesso... <span className="text-gradient">Parliamo delle mie competenze!</span>
          </h2>
        </div>

        {/* Skills with Images - Row Layout */}
        <div className="space-y-12 mb-20">
          {/* {skills.filter(skill => skill.label !== "Web Design" && skill.label !== "Web Development").map((skill, index) => ( */}
          {skills.filter(skill => skill.images.length > 0).map((skill, index) => (
            <div
              key={skill.label}
              className="flex flex-col lg:flex-row gap-8 items-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="p-8 transition-all duration-300 group lg:w-[35%] w-full">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{skill.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>

              {/* Images Gallery */}
              <div className="lg:w-[65%] w-full relative h-[320px]">
                <div className="relative w-full h-full">
                    {/* Branding & Logo Design - Smaller images with Photoshop effect */}
                    {skill.label === "Branding & Logo Design" && (
                      <>
                        <div className="absolute top-0 left-[5%] w-[28%] rotate-[-8deg] hover:scale-110 hover:rotate-[-4deg] transition-all duration-500 cursor-pointer z-10">
                          <div className="relative">
                            <img
                              src={skill.images[0]}
                              alt={`${skill.label} example 1`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                        <div className="absolute top-[15%] right-[8%] w-[30%] rotate-[6deg] hover:scale-110 hover:rotate-[3deg] transition-all duration-500 cursor-pointer z-20">
                          <div className="relative">
                            <img
                              src={skill.images[1]}
                              alt={`${skill.label} example 2`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-[5%] left-[30%] w-[32%] rotate-[-4deg] hover:scale-110 hover:rotate-[-1deg] transition-all duration-500 cursor-pointer z-30">
                          <div className="relative">
                            <img
                              src={skill.images[2]}
                              alt={`${skill.label} example 3`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Video Editing - YouTube style with progress bar */}
                    {skill.label === "Video Editing & Trailer Maker" && (
                      <>
                        <a
                          href={skill.videoLinks?.[0] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-0 left-[5%] w-[35%] rotate-[-8deg] hover:scale-110 hover:rotate-[-4deg] transition-all duration-500 cursor-pointer z-10 group/video"
                        >
                          <div className="relative bg-black rounded-sm overflow-hidden shadow-2xl">
                            <img
                              src={skill.images[0]}
                              alt={`${skill.label} example 1`}
                              className="w-full h-auto"
                            />
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 bg-black/30">
                              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                              </div>
                            </div>
                            {/* Duration badge */}
                            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                              {skill.videoDurations?.[0] || "0:00"}
                            </div>
                            {/* YouTube progress bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/50">
                              <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-[#FF0000]"></div>
                              <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF0000] rounded-full"></div>
                            </div>
                          </div>
                        </a>
                        <a
                          href={skill.videoLinks?.[1] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-[8%] right-[4%] w-[38%] rotate-[6deg] hover:scale-110 hover:rotate-[3deg] transition-all duration-500 cursor-pointer z-20 group/video"
                        >
                          <div className="relative bg-black rounded-sm overflow-hidden shadow-2xl">
                            <img
                              src={skill.images[1]}
                              alt={`${skill.label} example 2`}
                              className="w-full h-auto"
                            />
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 bg-black/30">
                              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                              </div>
                            </div>
                            {/* Duration badge */}
                            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                              {skill.videoDurations?.[1] || "0:00"}
                            </div>
                            {/* YouTube progress bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/50">
                              <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-[#FF0000]"></div>
                              <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF0000] rounded-full"></div>
                            </div>
                          </div>
                        </a>
                        <a
                          href={skill.videoLinks?.[2] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-[12%] left-[30%] w-[40%] rotate-[-3deg] hover:scale-110 hover:rotate-[-1deg] transition-all duration-500 cursor-pointer z-30 group/video"
                        >
                          <div className="relative bg-black rounded-sm overflow-hidden shadow-2xl">
                            <img
                              src={skill.images[2]}
                              alt={`${skill.label} example 3`}
                              className="w-full h-auto"
                            />
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 bg-black/30">
                              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                              </div>
                            </div>
                            {/* Duration badge */}
                            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                              {skill.videoDurations?.[2] || "0:00"}
                            </div>
                            {/* YouTube progress bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/50">
                              <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-[#FF0000]"></div>
                              <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF0000] rounded-full"></div>
                            </div>
                          </div>
                        </a>
                      </>
                    )}

                    {/* Social */}
                    {(skill.label === "Contenuti Social") && (
                      <>
                        <div className="absolute top-[5%] left-[13%] w-[27%] rotate-[-10deg] hover:scale-110 hover:rotate-[-4deg] transition-all duration-500 cursor-pointer z-10">
                          <div className="relative">
                            <img
                              src={skill.images[0]}
                              alt={`${skill.label} example 1`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                        <div className="absolute top-[-15%] right-[15%] w-[25%] rotate-[6deg] hover:scale-110 hover:rotate-[3deg] transition-all duration-500 cursor-pointer z-20">
                          <div className="relative">
                            <img
                              src={skill.images[1]}
                              alt={`${skill.label} example 2`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-[-18%] left-[40%] w-[20%] rotate-[-2deg] hover:scale-110 hover:rotate-[-1deg] transition-all duration-500 cursor-pointer z-30">
                          <div className="relative">
                            <img
                              src={skill.images[2]}
                              alt={`${skill.label} example 3`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Minecraft Design */}
                    {(skill.label === "Minecraft Design") && (
                      <>
                        <div className="absolute top-[20%] left-[2%] w-[35%] rotate-[-8deg] hover:scale-110 hover:rotate-[-4deg] transition-all duration-500 cursor-pointer z-10">
                          <div className="relative">
                            <img
                              src={skill.images[0]}
                              alt={`${skill.label} example 1`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                        <div className="absolute top-[25%] right-[2%] w-[38%] rotate-[6deg] hover:scale-110 hover:rotate-[3deg] transition-all duration-500 cursor-pointer z-20">
                          <div className="relative">
                            <img
                              src={skill.images[1]}
                              alt={`${skill.label} example 2`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-[13%] left-[25%] w-[45%] rotate-[-4deg] hover:scale-110 hover:rotate-[-1deg] transition-all duration-500 cursor-pointer z-30">
                          <div className="relative">
                            <img
                              src={skill.images[2]}
                              alt={`${skill.label} example 3`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* FiveM Design - Keep Photoshop effect */}
                    {(skill.label === "FiveM Design") && (
                      <>
                        <div className="absolute top-0 left-[2%] w-[35%] rotate-[-8deg] hover:scale-110 hover:rotate-[-4deg] transition-all duration-500 cursor-pointer z-10">
                          <div className="relative">
                            <img
                              src={skill.images[0]}
                              alt={`${skill.label} example 1`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                        <div className="absolute top-[15%] right-[0%] w-[38%] rotate-[8deg] hover:scale-110 hover:rotate-[3deg] transition-all duration-500 cursor-pointer z-20">
                          <div className="relative">
                            <img
                              src={skill.images[1]}
                              alt={`${skill.label} example 2`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-[-5%] left-[30%] w-[40%] rotate-[-2deg] hover:scale-110 hover:rotate-[-1deg] transition-all duration-500 cursor-pointer z-30">
                          <div className="relative">
                            <img
                              src={skill.images[2]}
                              alt={`${skill.label} example 3`}
                              className="w-full h-auto shadow-2xl border-2 border-[#00A3FF]"
                            />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#00A3FF]"></div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
            </div>
          ))}
        </div>

        {/* Skills without Images - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <h2 className="text-4xl md:text-4xl font-bold mb-10 mt-25">
            Pensi che le mie competenze siano soltanto queste? <span className="text-gradient">Ti sbagli di grosso!</span>
          </h2>
          <h2></h2>
          {/* {skills.filter(skill => skill.label === "Web Design" || skill.label === "Web Development") */}
          {/* Controllo che l'array delle immagini sia vuoto per mostrare queste competenze in un layout a griglia. */}
          {skills.filter(skill => skill.images.length === 0)
          .map((skill, index) => (
            <div
              key={skill.label}
              className="glass rounded-2xl p-8 hover:scale-101 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{skill.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Developer Portfolio Redirect Section */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="glass-subtle rounded-[5rem] p-12 text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-700 ease-out">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 opacity-100 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-primary/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"></div>

            <div className="relative z-10">
              {/* Icon with smooth animation */}
              <div className="inline-block mb-6 transform group-hover:scale-110 transition-transform duration-500 ease-out">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-500 group-hover:rotate-6">
                  <Code className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4 px-[10%] transform group-hover:scale-101 transition-transform duration-500 ease-out">
                Hai per caso sentito la parola "development"? <span className="text-gradient">E se ti dicessi che non sono solo un grafico?</span>
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-101 transition-transform duration-500 ease-out">
                La mia carriera da sviluppatore merita uno spazio dedicato! Visita il mio portfolio developer per esplorare progetti, competenze tecniche e tutto ciò che riguarda il mondo dello sviluppo.
              </p>

              {/* Dev Tools Icons - Infinite Scroll Carousel */}
              <div className="relative w-full overflow-hidden mb-8 py-4">
                {/* Scrolling container */}
                <div className="flex items-center gap-6 animate-scroll-infinite">
                  {/* First set of tools */}
                  {devTools.map((tool, index) => (
                    <div
                      key={`tool-1-${index}`}
                      className="flex-shrink-0 w-14 h-14 rounded-xl bg-background/50 backdrop-blur-sm p-2.5 transform hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-lg hover:z-20 group/tool"
                      title={tool.name}
                    >
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-full h-full object-contain opacity-70 group-hover/tool:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {devTools.map((tool, index) => (
                    <div
                      key={`tool-2-${index}`}
                      className="flex-shrink-0 w-14 h-14 rounded-xl bg-background/50 backdrop-blur-sm p-2.5 transform hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-lg hover:z-20 group/tool"
                      title={tool.name}
                    >
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-full h-full object-contain opacity-70 group-hover/tool:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://notmatte.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 ease-out hover:gap-5 hover:shadow-xl hover:scale-105 group/btn"
              >
                <span>Visita il Portfolio Developer</span>
                <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Timeline */}
        {/* <div className="max-w-4xl mx-auto">
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
        </div> */}
      </div>
    </section>
  )
}
