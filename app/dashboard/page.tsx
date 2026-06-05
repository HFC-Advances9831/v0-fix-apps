import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - The Carey Network",
  description: "Live usage data and player traffic metrics",
}

export default function DashboardPage() {
  // These are static placeholders. Once you connect a database (like Firebase or Vercel Postgres), 
  // you can fetch the real global numbers here!
  const visitorStats = {
    averageDailyUsers: 148,
    topPlayedGame: "2048",
    peakActiveHour: "3:00 PM - 5:00 PM",
  }

  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2 gradient-text">
        NETWORK ANALYTICS
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-12">
        Live usage data and player traffic metrics
      </p>

      {/* Grid Layout for Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        
        {/* Card 1: Average Traffic */}
        <div className="bg-card rounded-3xl border border-border p-8 flex flex-col items-center justify-center text-center shadow-lg hover:border-primary/30 transition-all">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Avg. Daily Users
          </span>
          <h2 className="text-5xl font-black text-foreground mb-2">
            {visitorStats.averageDailyUsers}
          </h2>
          <p className="text-xs text-muted-foreground">
            Unique players per school day
          </p>
        </div>

        {/* Card 2: Most Popular Game */}
        <div className="bg-card rounded-3xl border border-border p-8 flex flex-col items-center justify-center text-center shadow-lg border-primary/20 hover:border-primary/40 transition-all">
          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
            👑 Top Played Game
          </span>
          <h2 className="text-4xl font-black text-foreground mb-2">
            {visitorStats.topPlayedGame}
          </h2>
          <p className="text-xs text-muted-foreground">
            Most launched network application
          </p>
        </div>

        {/* Card 3: Peak Usage Times */}
        <div className="bg-card rounded-3xl border border-border p-8 flex flex-col items-center justify-center text-center shadow-lg hover:border-primary/30 transition-all">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Peak Activity Hub
          </span>
          <h2 className="text-xl font-bold text-foreground mb-2 py-3">
            {visitorStats.peakActiveHour}
          </h2>
          <p className="text-xs text-muted-foreground">
            Highest sustained traffic hours
          </p>
        </div>
      </div>

      <footer className="text-center mt-16 text-muted-foreground text-sm">
        © 2026 The Carey Network
      </footer>
    </main>
  )
}
