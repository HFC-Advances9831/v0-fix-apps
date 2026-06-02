"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { X, Maximize2, Minimize2, RotateCcw, AlertCircle } from "lucide-react"
import { apps } from "@/lib/apps-data"
import Image from "next/image"

export default function AppViewerPage() {
  const params = useParams()
  const router = useRouter()
  const appId = params.id as string
  
  const app = apps.find(a => a.id === appId)
  
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [key, setKey] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [hasFailed, setHasFailed] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isFullscreen])

  // 15-second timeout for app failure
  useEffect(() => {
    if (!isLoading) return
    
    const failureTimeout = setTimeout(() => {
      if (isLoading) {
        setHasFailed(true)
        setIsLoading(false)
      }
    }, 15000)
    
    return () => clearTimeout(failureTimeout)
  }, [isLoading, key])

  if (!app) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-[100]">
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
    setHasFailed(false)
    setKey(prev => prev + 1)
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
      <div className="relative flex-1">
        {/* Red/Black themed loading overlay with app icon */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            {/* Background glow effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
            </div>
            
            <div className="relative flex flex-col items-center gap-6">
              {/* App icon with loading ring */}
              <div className="relative">
                {/* Outer spinning ring */}
                <div className="absolute -inset-4 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
                {/* Inner pulsing glow */}
                <div className="absolute -inset-2 rounded-2xl bg-primary/20 animate-pulse" />
                {/* App icon */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/30">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Loading text */}
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground mb-1">
                  Loading {app.name}
                </p>
                <div className="flex items-center justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
              
              {/* Status text */}
              <p className="text-sm text-muted-foreground">
                Connecting to proxy...
              </p>
            </div>
          </div>
        )}

        {/* Failure screen after 15 seconds */}
        {hasFailed && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            {/* Background glow effect - red for error */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-destructive/20 rounded-full blur-[100px]" />
            </div>
            
            <div className="relative flex flex-col items-center gap-6 text-center px-4">
              {/* App icon with error state */}
              <div className="relative">
                {/* Error ring */}
                <div className="absolute -inset-4 rounded-full border-4 border-destructive/50" />
                {/* App icon */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-destructive/50 shadow-lg shadow-destructive/30 opacity-60">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                {/* Error badge */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive-foreground" />
                </div>
              </div>
              
              {/* Error text */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  App Failed to Load
                </h2>
                <p className="text-muted-foreground max-w-sm">
                  {app.name} could not be loaded. Please try again later or check your connection.
                </p>
              </div>
              
              {/* Retry button */}
              <button
                onClick={handleRefresh}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          </div>
        )}

        <iframe
          key={key}
          src={app.embedUrl}
          className="absolute inset-0 w-full h-full border-0"
          sandbox="allow-scripts allow-forms allow-same-origin allow-pointer-lock allow-downloads allow-popups"
          allow="fullscreen; autoplay; clipboard-read; clipboard-write"
          allowFullScreen
          title={app.name}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  )
}
