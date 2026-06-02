"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { X, Maximize2, Minimize2, RotateCcw, ExternalLink } from "lucide-react"
import { apps } from "@/lib/apps-data"

export default function AppViewerPage() {
  const params = useParams()
  const router = useRouter()
  const appId = params.id as string
  
  const app = apps.find(a => a.id === appId)
  
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [key, setKey] = useState(0)
  const [isLoading, setIsLoading] = useState(app?.canEmbed ?? false)
  const [embedError, setEmbedError] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isFullscreen])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [key])

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
    setEmbedError(false)
    setKey(prev => prev + 1)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const handleOpenExternal = () => {
    window.open(app.url, "_blank", "noopener,noreferrer")
  }

  const handleIframeError = () => {
    setEmbedError(true)
    setIsLoading(false)
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
          <button
            onClick={handleOpenExternal}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            title="Open in New Tab"
          >
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* App Frame */}
      <div className={`relative ${isFullscreen ? "h-[calc(100vh-60px)]" : "h-[calc(100vh-120px)]"}`}>
        {isLoading && app.canEmbed && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-muted-foreground">Loading {app.name}...</p>
            </div>
          </div>
        )}
        
        {embedError || !app.canEmbed ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background">
            <div className="text-center p-8 max-w-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                {app.name} cannot be embedded
              </h2>
              <p className="text-muted-foreground mb-6">
                This app doesn&apos;t allow embedding. Click below to open it in a new tab.
              </p>
              <button
                onClick={handleOpenExternal}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Open {app.name}
              </button>
            </div>
          </div>
        ) : (
          <iframe
            key={key}
            src={app.embedUrl}
            className="absolute inset-0 w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-presentation allow-downloads"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            title={app.name}
            onLoad={() => setIsLoading(false)}
            onError={handleIframeError}
          />
        )}
      </div>
    </div>
  )
}
