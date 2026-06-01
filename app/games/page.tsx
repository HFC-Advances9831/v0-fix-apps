import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Games - The Carey Network",
  description: "Play your favorite games",
}

const games = [
  { id: 1, emoji: "🎮" },
  { id: 2, emoji: "🎯" },
  { id: 3, emoji: "🏎️" },
  { id: 4, emoji: "⚽" },
  { id: 5, emoji: "🎲" },
  { id: 6, emoji: "🃏" },
  { id: 7, emoji: "🧩" },
  { id: 8, emoji: "♟️" },
  { id: 9, emoji: "🎰" },
  { id: 10, emoji: "🏀" },
  { id: 11, emoji: "🎱" },
  { id: 12, emoji: "🏈" },
]

export default function GamesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
        GAMES
      </h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {games.map((game) => (
          <button
            key={game.id}
            className="aspect-square bg-card rounded-3xl border border-border flex items-center justify-center hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
          >
            <span className="text-4xl md:text-5xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
              {game.emoji}
            </span>
          </button>
        ))}
      </div>
    </main>
  )
}
