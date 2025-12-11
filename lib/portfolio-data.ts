import { Grid3X3, LayoutGrid, Layers, Calendar } from "lucide-react"

export type PortfolioItem = {
  id: number
  title: string
  category: string
  image: string
  description: string
  tools: string[]
  objective: string
  date: string
  client: string
  featured: boolean
  aspectRatio: "landscape" | "portrait" | "square" | "tall" | "wide"
}

export const categories = [
  { id: "all", label: "Tutti", icon: Layers, count: 12 },
  { id: "banner", label: "Banner", icon: LayoutGrid, count: 3 },
  { id: "loghi", label: "Loghi", icon: Grid3X3, count: 2 },
  { id: "trailer", label: "Trailer", icon: Layers, count: 2 },
  { id: "social", label: "Social", icon: Layers, count: 2 },
  { id: "minecraft", label: "Minecraft", icon: Layers, count: 3 },
]

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Server Banner Premium",
    category: "banner",
    image: "/minecraft-server-banner-gaming-dark-purple-neon.jpg",
    description:
      "Banner promozionale per server Minecraft survival con oltre 500 giocatori attivi. Design epico con elementi 3D e effetti particellari.",
    tools: ["Photoshop", "Illustrator", "Cinema 4D"],
    objective: "Creare un banner accattivante per attirare nuovi giocatori e aumentare le conversioni del 40%",
    date: "2024-01",
    client: "SurvivalCraft",
    featured: true,
    aspectRatio: "landscape", // 16:9
  },
  {
    id: 2,
    title: "Logo Gaming Studio",
    category: "loghi",
    image: "/gaming-studio-logo-esports-dark-minimal.jpg",
    description: "Logo moderno per studio di gaming indipendente. Concept minimalista con simbolismo forte.",
    tools: ["Illustrator", "Figma"],
    objective: "Sviluppare un'identità visiva professionale e riconoscibile",
    date: "2024-02",
    client: "NexGen Studios",
    featured: false,
    aspectRatio: "square", // 1:1
  },
  {
    id: 3,
    title: "Trailer Cinematico Epico",
    category: "trailer",
    image: "/cinematic-trailer-thumbnail-dark-epic.jpg",
    description:
      "Trailer epico per evento stagionale server con effetti cinematografici professionali e color grading avanzato.",
    tools: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
    objective: "Generare hype per il lancio della nuova stagione",
    date: "2024-03",
    client: "EpicRealms",
    featured: true,
    aspectRatio: "landscape", // 16:9 per video
  },
  {
    id: 4,
    title: "Pack Social Media Completo",
    category: "social",
    image: "/social-media-pack-gaming-content-dark.jpg",
    description:
      "Template completo per contenuti social: post, stories, banner YouTube, thumbnail e grafiche per streaming.",
    tools: ["Photoshop", "Canva", "Figma"],
    objective: "Uniformare la presenza social del brand su tutte le piattaforme",
    date: "2024-01",
    client: "StreamerPro",
    featured: false,
    aspectRatio: "portrait", // 9:16
  },
  {
    id: 5,
    title: "Spawn Design Fantasy",
    category: "minecraft",
    image: "/minecraft-spawn-design-fantasy-castle.jpg",
    description: "Design completo area spawn per server RPG con castello fantasy, NPC e sistema di tutorial integrato.",
    tools: ["WorldEdit", "VoxelSniper", "Axiom"],
    objective: "Creare un'area accogliente e immersiva per i nuovi giocatori",
    date: "2024-02",
    client: "FantasyRPG",
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: 6,
    title: "Brand Kit Completo",
    category: "loghi",
    image: "/brand-kit-complete-logo-variations-dark.jpg",
    description:
      "Identità visiva completa per network gaming: logo principale, varianti, palette colori, tipografia e linee guida.",
    tools: ["Illustrator", "Photoshop", "Figma"],
    objective: "Sviluppare un sistema di design coerente e scalabile",
    date: "2024-03",
    client: "GameNetwork",
    featured: false,
    aspectRatio: "square",
  },
  {
    id: 7,
    title: "Banner Evento PvP",
    category: "banner",
    image: "/pvp-event-banner-dark-action-gaming.jpg",
    description: "Banner dinamico per torneo PvP stagionale con effetti action e tipografia aggressiva.",
    tools: ["Photoshop", "After Effects"],
    objective: "Promuovere evento competitivo e aumentare le iscrizioni",
    date: "2023-12",
    client: "PvPMasters",
    featured: false,
    aspectRatio: "wide", // 21:9
  },
  {
    id: 8,
    title: "Instagram Stories Kit",
    category: "social",
    image: "/instagram-stories-gaming-dark-template.jpg",
    description: "Kit completo per stories Instagram con 20+ template animati e statici per engagement massimo.",
    tools: ["Photoshop", "Figma", "After Effects"],
    objective: "Aumentare engagement sui social media del 60%",
    date: "2024-02",
    client: "InstaGamer",
    featured: false,
    aspectRatio: "portrait",
  },
  {
    id: 9,
    title: "Arena Build Medievale",
    category: "minecraft",
    image: "/minecraft-arena-build-medieval-dark.jpg",
    description: "Arena PvP stile medievale con tribune, sistema di spawn e illuminazione cinematografica.",
    tools: ["WorldEdit", "VoxelSniper", "Axiom", "Replay Mod"],
    objective: "Creare arena competitiva immersiva per tornei",
    date: "2024-01",
    client: "MedievalPvP",
    featured: false,
    aspectRatio: "tall",
  },
  {
    id: 10,
    title: "Intro Animata YouTube",
    category: "trailer",
    image: "/youtube-intro-gaming-dark-animated.jpg",
    description: "Intro animata professionale 3D per canale YouTube gaming con logo reveal e sound design.",
    tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
    objective: "Creare branding video riconoscibile e professionale",
    date: "2024-03",
    client: "ProGamerYT",
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: 11,
    title: "Hub Server Futuristico",
    category: "minecraft",
    image: "/minecraft-hub-server-futuristic-scifi.jpg",
    description:
      "Hub centrale per network server con design sci-fi, portali animati e sistema di navigazione intuitivo.",
    tools: ["WorldEdit", "Axiom", "ModelEngine"],
    objective: "Centralizzare l'esperienza utente del network",
    date: "2024-02",
    client: "CyberNetwork",
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: 12,
    title: "Banner Lancio Stagione",
    category: "banner",
    image: "/season-launch-banner-gaming-epic.jpg",
    description: "Banner epico per lancio nuova stagione con countdown integrato e elementi 3D.",
    tools: ["Photoshop", "Cinema 4D", "Illustrator"],
    objective: "Creare hype per il lancio e massimizzare la retention",
    date: "2024-03",
    client: "SeasonalMC",
    featured: false,
    aspectRatio: "wide",
  },
]

// Helper: Ottieni solo progetti featured
export function getFeaturedProjects(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featured)
}

// Helper: Ottieni progetti featured con landscape aspect ratio
export function getFeaturedLandscapeProjects(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featured && item.aspectRatio === "landscape")
}
