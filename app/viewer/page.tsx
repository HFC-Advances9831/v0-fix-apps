"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Suspense, useState, useEffect } from "react"
import { X, Maximize2, Minimize2, RotateCcw, ExternalLink, Loader2 } from "lucide-react"

function ViewerContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const url = searchParams.get("url")
  const title = searchParams.get("title") || "Viewer"
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [key, setKey] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Create proxied URL - routes through our server to bypass blocks
  const proxiedUrl = url ? `/api/proxy?url=${encodeURIComponent(url)}` : null

  if (!url) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <p className="text-muted-foreground">No URL provided</p>
      </div>
    )
  }

  const handleClose = () => {
    router.back()
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleRefresh = () => {
    setIsLoading(true)
    setKey(prev => prev + 1)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="font-semibold text-sm truncate max-w-[200px] md:max-w-none">
            {title}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            title="Refresh"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}
        <iframe
          key={key}
          src={proxiedUrl || ""}
          className="absolute inset-0 w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-presentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; gamepad"
          title={title}
          onLoad={handleLoad}
        />
      </div>
    </div>
  )
}

export default function ViewerPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    }>
      <ViewerContent />
    </Suspense>
  )
}
