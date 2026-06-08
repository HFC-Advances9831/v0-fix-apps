"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { X, Maximize2, Minimize2, RotateCcw, Trash2 } from "lucide-react"
import { games } from "@/lib/games-data"

export default function PlayPage() {
  const params = useParams()
  const router = useRouter()
  const gameId = params.id as string
  
  const game = games.find(g => g.id === gameId)
  
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [key, setKey] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // IPAD TRACKER: Remembers this was the last active game if Safari gets forced closed
  useEffect(() => {
    if (!gameId) return

    const saveActiveSession = () => {
      localStorage.setItem("carey_network_last_game", gameId)
    }

    // Capture the exact moment they swipe up, lock the screen, or change tabs
    window.addEventListener("visibilitychange", saveActiveSession)
    window.addEventListener("pagehide", saveActiveSession)

    return () => {
      window.removeEventListener("visibilitychange", saveActiveSession)
      window.removeEventListener("pagehide", saveActiveSession)
    }
  }, [gameId])

  useEffect(() => {
    // Handle escape key to exit fullscreen
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isFullscreen])

  // Fallback: hide loading after 5 seconds in case onLoad doesn't fire
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [key])

  if (!game) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-[100]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Game not found</h1>
          <button 
            onClick={() => router.push("/games")}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Back to Games
          </button>
        </div>
      </div>
    )
  }

  const handleRefresh = () => {
    setIsLoading(true)
    setKey(prev => prev + 1)
  }

  const handleClearData = () => {
    if (confirm(`This will clear saved data for ${game.name}. Continue?`)) {
      // FIX: Only clear data matching this specific game's ID 
      // This protects your layout settings and wiiuMusicTime from getting deleted!
      localStorage.removeItem(`game_save_${gameId}`)
      localStorage.removeItem(`${gameId}_scores`)
      
      handleRefresh()
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col">
      {/* Header Controls */}
      <div className="flex items-center justify-between p-3 bg-card border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/games")}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            title="Back to Games"
          >
            <X className="w-5 h-5" />
          </button>
          <h1 className="font-semibold text-foreground truncate">{game.name}</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            title="Refresh"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          <button
            onClick={handleClearData}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            title="Clear Save Data"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Game Frame */}
      <div className="relative flex-1">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-muted-foreground">Loading {game.name}...</p>
            </div>
          </div>
        )}
        <iframe
          key={key}
          src={`/app/api/proxy?url=${encodeURIComponent(game.assetUrl)}`}
          className="absolute inset-0 w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-presentation allow-downloads"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; gamepad"
          title={game.name}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  )
}
