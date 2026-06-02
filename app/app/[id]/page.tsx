"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { apps } from "@/lib/apps-data"

export default function AppViewerPage() {
  const params = useParams()
  const router = useRouter()
  const appId = params.id as string
  
  const app = apps.find(a => a.id === appId)

  useEffect(() => {
    if (app) {
      // Open the app URL in a new tab
      window.open(app.url, "_blank", "noopener,noreferrer")
      // Navigate back to apps page
      router.push("/apps")
    }
  }, [app, router])

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Opening {app.name}...</p>
      </div>
    </div>
  )
}
