"use client"

import Image from "next/image"
import Link from "next/link"
import { games } from "@/lib/games-data"

export default function GamesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
        GAMES
      </h1>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/play/${game.id}`}
            className="game-card bg-card"
            title={game.name}
          >
            <Image
              src={game.icon}
              alt={game.name}
              width={200}
              height={200}
              className="w-full h-full object-cover"
              unoptimized
            />
          </Link>
        ))}
      </div>

      <footer className="text-center mt-12 text-muted-foreground text-sm">
        © 2026 Carey Network
      </footer>
    </main>
  )
}
