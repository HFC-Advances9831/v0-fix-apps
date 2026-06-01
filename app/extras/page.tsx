import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Extras - Carey Network",
  description: "More features coming soon",
}

export default function ExtrasPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
        EXTRAS
      </h1>
      
      <div className="relative bg-card rounded-3xl p-8 md:p-12 text-center border border-border overflow-hidden max-w-2xl mx-auto">
        <div className="welcome-glow" />
        
        <h2 className="text-2xl font-bold gradient-text mb-4 relative">
          Coming Soon
        </h2>
        <p className="text-muted-foreground mb-8 relative">
          More features and content are on the way!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
          <Link
            href="/dashboard"
            className="flex flex-col items-center gap-3 p-6 bg-secondary/50 rounded-2xl border border-border hover:border-primary hover:-translate-y-1 transition-all group"
          >
            <span className="text-3xl">📊</span>
            <span className="font-semibold text-muted-foreground group-hover:text-primary transition-colors">
              Dashboard
            </span>
          </Link>
          <Link
            href="/assets"
            className="flex flex-col items-center gap-3 p-6 bg-secondary/50 rounded-2xl border border-border hover:border-primary hover:-translate-y-1 transition-all group"
          >
            <span className="text-3xl">📁</span>
            <span className="font-semibold text-muted-foreground group-hover:text-primary transition-colors">
              Assets
            </span>
          </Link>
          <Link
            href="/images"
            className="flex flex-col items-center gap-3 p-6 bg-secondary/50 rounded-2xl border border-border hover:border-primary hover:-translate-y-1 transition-all group"
          >
            <span className="text-3xl">🖼️</span>
            <span className="font-semibold text-muted-foreground group-hover:text-primary transition-colors">
              Images
            </span>
          </Link>
        </div>
      </div>

      <footer className="text-center mt-16 text-muted-foreground text-sm">
        © 2026 Carey Network
      </footer>
    </main>
  )
}
