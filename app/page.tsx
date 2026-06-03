import Link from "next/link"

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-8">
      {/* Welcome Section */}
      <section className="mb-12">
        <div className="relative bg-card rounded-3xl p-8 md:p-12 text-center border border-border overflow-hidden">
          <div className="welcome-glow" />
          
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 gradient-text relative">
            Welcome to The Carey Network
          </h1>
          <p className="text-lg text-muted-foreground mb-8 relative">
            Your personal dashboard for apps, games, and more
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-12 mb-8 relative">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary">5</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wide">Apps</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary">12</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wide">Games</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-primary">4</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wide">Settings</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 flex-wrap relative">
            <Link 
              href="/apps" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold gradient-btn text-primary-foreground glow hover:scale-105 transition-transform"
            >
              Explore Apps
            </Link>
            <Link 
              href="/games" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold bg-secondary text-secondary-foreground border border-border hover:border-primary hover:bg-primary/10 transition-colors"
            >
              Play Games
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-foreground">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link 
            href="/apps" 
            className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all group"
          >
            <span className="text-4xl">📱</span>
            <span className="font-semibold text-muted-foreground group-hover:text-primary transition-colors">Apps</span>
          </Link>
          <Link 
            href="/games" 
            className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all group"
          >
            <span className="text-4xl">🎮</span>
            <span className="font-semibold text-muted-foreground group-hover:text-primary transition-colors">Games</span>
          </Link>
          <Link 
            href="/settings" 
            className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all group"
          >
            <span className="text-4xl">⚙️</span>
            <span className="font-semibold text-muted-foreground group-hover:text-primary transition-colors">Settings</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
