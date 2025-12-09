"use client"

import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  X,
  ExternalLink,
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  LayoutGrid,
  Layers,
  Calendar,
  ArrowUpDown,
} from "lucide-react"

const categories = [
  { id: "all", label: "Tutti", icon: Layers, count: 12 },
  { id: "banner", label: "Banner", icon: LayoutGrid, count: 3 },
  { id: "loghi", label: "Loghi", icon: Grid3X3, count: 2 },
  { id: "trailer", label: "Trailer", icon: Layers, count: 2 },
  { id: "social", label: "Social", icon: Layers, count: 2 },
  { id: "minecraft", label: "Minecraft", icon: Layers, count: 3 },
]

const portfolioItems = [
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
    aspectRatio: "tall", // 3:4
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
    aspectRatio: "square",
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

type SortOption = "newest" | "oldest" | "name"
type ViewMode = "grid" | "masonry"

const ITEMS_PER_PAGE = 6

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioItems)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<SortOption>("newest")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>("masonry") // default to masonry
  const [currentPage, setCurrentPage] = useState(1)
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  const allTools = useMemo(() => {
    const tools = new Set<string>()
    portfolioItems.forEach((item) => item.tools.forEach((tool) => tools.add(tool)))
    return Array.from(tools).sort()
  }, [])

  const filteredAndSortedItems = useMemo(() => {
    let items = portfolioItems

    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.client.toLowerCase().includes(query) ||
          item.tools.some((tool) => tool.toLowerCase().includes(query)),
      )
    }

    if (selectedTools.length > 0) {
      items = items.filter((item) => selectedTools.some((tool) => item.tools.includes(tool)))
    }

    switch (sortBy) {
      case "newest":
        items = [...items].sort((a, b) => b.date.localeCompare(a.date))
        break
      case "oldest":
        items = [...items].sort((a, b) => a.date.localeCompare(b.date))
        break
      case "name":
        items = [...items].sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return items
  }, [activeCategory, searchQuery, sortBy, selectedTools])

  const totalPages = Math.ceil(filteredAndSortedItems.length / ITEMS_PER_PAGE)
  const paginatedItems = filteredAndSortedItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  useMemo(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery, sortBy, selectedTools])

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) => (prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]))
  }

  const sortOptions = [
    { value: "newest", label: "Più recenti", icon: Calendar },
    { value: "oldest", label: "Meno recenti", icon: Calendar },
    { value: "name", label: "Nome A-Z", icon: ArrowUpDown },
  ]

  const getAspectClass = (ratio: string) => {
    switch (ratio) {
      case "landscape":
        return "aspect-video" // 16:9
      case "portrait":
        return "aspect-[9/16]" // 9:16
      case "square":
        return "aspect-square" // 1:1
      case "tall":
        return "aspect-[3/4]" // 3:4
      case "wide":
        return "aspect-[21/9]" // 21:9
      default:
        return "aspect-[4/3]"
    }
  }

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-subtle text-sm text-primary font-medium mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            I Miei <span className="text-gradient">Lavori</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selezione curata dei progetti più significativi. Ogni lavoro racconta una storia di creatività e
            dedizione.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="glass rounded-2xl p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cerca per nome, cliente o strumento..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Controls Group */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-xl transition-all font-medium",
                  showFilters
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80",
                )}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filtri</span>
                {selectedTools.length > 0 && (
                  <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-accent text-accent-foreground">
                    {selectedTools.length}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all font-medium"
                >
                  <ArrowUpDown className="w-4 h-4" />
                  <span className="hidden sm:inline">{sortOptions.find((o) => o.value === sortBy)?.label}</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", showSortDropdown && "rotate-180")} />
                </button>

                {showSortDropdown && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowSortDropdown(false)} />
                    <div className="absolute right-0 top-full mt-2 z-50 glass rounded-xl p-2 min-w-[180px] animate-in fade-in slide-in-from-top-2 duration-200">
                      {sortOptions.map((option) => {
                        const Icon = option.icon
                        return (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value as SortOption)
                              setShowSortDropdown(false)
                            }}
                            className={cn(
                              "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all",
                              sortBy === option.value
                                ? "bg-primary/20 text-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                            )}
                          >
                            <Icon className="w-4 h-4" />
                            {option.label}
                          </button>
                        )
                      })}
                    </div>
                  </>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center rounded-xl bg-secondary/50 p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-2 rounded-lg transition-all",
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={cn(
                    "p-2 rounded-lg transition-all",
                    viewMode === "masonry"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-muted-foreground">Filtra per strumento</h4>
                {selectedTools.length > 0 && (
                  <button
                    onClick={() => setSelectedTools([])}
                    className="text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    Cancella tutti
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allTools.map((tool) => (
                  <button
                    key={tool}
                    onClick={() => toggleTool(tool)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm transition-all",
                      selectedTools.includes(tool)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80",
                    )}
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "glass-subtle text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4",
                    isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground",
                  )}
                />
                <span>{category.label}</span>
                <span
                  className={cn(
                    "px-2 py-0.5 rounded-full text-xs",
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-secondary/80 text-muted-foreground",
                  )}
                >
                  {category.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{filteredAndSortedItems.length}</span>{" "}
            {filteredAndSortedItems.length === 1 ? "progetto" : "progetti"} trovati
          </p>
          {totalPages > 1 && (
            <p className="text-sm text-muted-foreground">
              Pagina <span className="text-foreground font-medium">{currentPage}</span> di{" "}
              <span className="text-foreground font-medium">{totalPages}</span>
            </p>
          )}
        </div>

        {/* Portfolio Grid - using CSS columns for true masonry effect */}
        <div
          className={cn(
            viewMode === "masonry"
              ? "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          )}
        >
          {paginatedItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(viewMode === "masonry" && "break-inside-avoid")}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="group glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:glass-sharp hover:-translate-y-2 animate-fade-up"
                onClick={() => setSelectedProject(item)}
              >
                {/* Image Container - using dynamic aspect ratio */}
                <div
                  className={cn(
                    "relative overflow-hidden",
                    viewMode === "masonry" ? getAspectClass(item.aspectRatio) : "aspect-[4/3]",
                  )}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                      Featured
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <Button size="sm" className="rounded-full bg-primary hover:bg-primary/80">
                      Visualizza Dettagli <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {categories.find((c) => c.id === item.category)?.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(item.date).toLocaleDateString("it-IT", { month: "short", year: "numeric" })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Client */}
                  <p className="text-sm text-muted-foreground mb-3">
                    Cliente: <span className="text-foreground">{item.client}</span>
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{item.description}</p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.slice(0, 3).map((tool) => (
                      <span key={tool} className="text-xs px-2.5 py-1 rounded-lg bg-secondary/60 text-muted-foreground">
                        {tool}
                      </span>
                    ))}
                    {item.tools.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-secondary/60 text-muted-foreground">
                        +{item.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedItems.length === 0 && (
          <div className="text-center py-20 glass rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/50 flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nessun risultato</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Nessun progetto corrisponde ai criteri di ricerca. Prova a modificare i filtri.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedTools([])
                setActiveCategory("all")
              }}
              className="rounded-full"
            >
              Cancella tutti i filtri
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "w-10 h-10 rounded-full text-sm font-medium transition-all",
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                  )}
                >
                  {page}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Project Modal - Removed views/likes from modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 glass rounded-full p-3 hover:bg-secondary/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Featured Badge */}
              {selectedProject.featured && (
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Progetto in Evidenza
                </div>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Category & Date */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  {categories.find((c) => c.id === selectedProject.category)?.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {new Date(selectedProject.date).toLocaleDateString("it-IT", { month: "long", year: "numeric" })}
                </span>
              </div>

              {/* Title & Client */}
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Realizzato per <span className="text-primary font-medium">{selectedProject.client}</span>
              </p>

              {/* Info Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Descrizione
                    </h4>
                    <p className="text-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Obiettivo
                    </h4>
                    <p className="text-foreground leading-relaxed">{selectedProject.objective}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Strumenti Utilizzati
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span key={tool} className="px-4 py-2 rounded-xl bg-secondary/60 text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 rounded-full bg-primary hover:bg-primary/80 py-6">
                  Richiedi un Progetto Simile
                </Button>
                <Button variant="outline" className="flex-1 rounded-full py-6 bg-transparent">
                  Contattami per Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
