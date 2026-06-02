"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { X, Maximize2, Minimize2, RotateCcw } from "lucide-react"
import { apps } from "@/lib/apps-data"

export default function AppViewerPage() {
  const params = useParams()
  const router = useRouter()
  const appId = params.id as string
  
  const app = apps.find(a => a.id === appId)
  
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [key, setKey] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isFullscreen])

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">App not found</h1>
          <button 
            onClick={() => router.push("/apps")}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Back to Apps
          </button>
        </div>
      </div>
    )
  }

  const handleRefresh = () => {
    setIsLoading(true)
    setKey(prev => prev + 1)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={`bg-background ${isFullscreen ? "fixed inset-0 z-50" : "min-h-screen"}`}>
      {/* Header Controls */}
      <div className="flex items-center justify-between p-3 bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/apps")}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            title="Back to Apps"
          >
            <X className="w-5 h-5" />
          </button>
          <h1 className="font-semibold text-foreground truncate">{app.name}</h1>
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
        </div>
      </div>

      {/* App Frame */}
      <div className={`relative ${isFullscreen ? "h-[calc(100vh-60px)]" : "h-[calc(100vh-120px)]"}`}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-muted-foreground">Loading {app.name}...</p>
            </div>
          </div>
        )}
        <iframe
          key={key}
          src={app.url}
          className="absolute inset-0 w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-presentation allow-downloads allow-modals"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; camera; microphone"
          title={app.name}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  )
}
