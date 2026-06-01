"use client"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

const games = [
  { name: "2048", url: "https://play2048.co/", image: "https://play2048.co/meta/apple-touch-icon.png" },
  { name: "Among Us", url: "https://krunker.io/", image: "https://static.wikia.nocookie.net/among-us-wiki/images/6/6e/Red.png" },
  { name: "Basket Random", url: "https://basketrandom.github.io/", image: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/94045614b9f68aa9fcd0e20f4d413622.png" },
  { name: "BitLife", url: "https://bitlifeonline.github.io/", image: "https://play-lh.googleusercontent.com/eBFg6MnhPHcuPfj7nY8wCpdTM0BX5OJvmOKIxkWfJRBH3bKU6Nh9kPXUNaH0HE7xLw=w240-h480-rw" },
  { name: "Block Puzzle", url: "https://www.blockpuzzle.io/", image: "https://www.blockpuzzle.io/android-chrome-192x192.png" },
  { name: "Crossy Road", url: "https://crossyroad.io/", image: "https://play-lh.googleusercontent.com/HhnKKMU6sAEBIQJVhPJ7uMhX6tnVdcVlGPaS6GbD67sDlEUfTWy5NfXaFyUgHjXAqw=w240-h480-rw" },
  { name: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/", image: "https://orteil.dashnet.org/cookieclicker/img/favicon.ico" },
  { name: "Crossy Road", url: "https://poki.com/en/g/crossy-road", image: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/d4e44be15e9fb0bb62f9a7bbf9d9a78a.png" },
  { name: "Deltarune", url: "https://deltarune.com/", image: "https://deltarune.com/assets/images/deltarune2.png" },
  { name: "Drift Boss", url: "https://driftboss.io/", image: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/25ad2d3d7d39c2d0a0dcd8e1c6df5c6d.png" },
  { name: "Escape Road", url: "https://escaperoad.io/", image: "https://escaperoad.io/upload/imgs/escape-road-200.png" },
  { name: "FNAF 1", url: "https://fnaf1.io/", image: "https://m.media-amazon.com/images/I/41bLNW6VVPL.png" },
  { name: "FNAF 2", url: "https://fnaf2.io/", image: "https://fnaf2.io/images/logo.png" },
  { name: "FNAF 3", url: "https://fnaf3.io/", image: "https://fnaf3.io/images/fnaf3-icon.png" },
  { name: "FNAF 4", url: "https://fnaf4.io/", image: "https://fnaf4.io/images/fnaf4-icon.png" },
  { name: "Sister Location", url: "https://fnafsisterlocation.io/", image: "https://upload.wikimedia.org/wikipedia/en/5/58/FNaF_Sister_Location_Steam_artwork.jpg" },
  { name: "Geometry Dash", url: "https://geometrydashonline.io/", image: "https://play-lh.googleusercontent.com/L7s3-CwqAWJJLwhAOCMPfj0BqWlCqLH5_Y3oDfkKlLXMoePkVdqMqTrUvNKlJFC0Jn8=w240-h480-rw" },
  { name: "Geometry Dash 2", url: "https://geometrydash2.io/", image: "https://geometrydash2.io/upload/imgs/geometry-dash-meltdown-200x200.png" },
  { name: "Geometry Dash Meltdown", url: "https://geometrydashmeltdown.io/", image: "https://play-lh.googleusercontent.com/cnIR8cqLCrXJGS6TpRv2klCU1P7y5KDXTVLrAdGHvKQYeFrBJqmrGbr4l4P_gBXqXEA=w240-h480-rw" },
  { name: "Geometry Dash SubZero", url: "https://geometrydashsubzero.io/", image: "https://play-lh.googleusercontent.com/AZ-5l84P-aLfDRdMEKg69GfEUdBsMkWHKXAKnKMHqEHl0m9NLQ0qN0-uCjMQpxC7gbc=w240-h480-rw" },
  { name: "Just Fall", url: "https://justfall.lol/", image: "https://justfall.lol/icon.png" },
  { name: "Minecraft", url: "https://eaglercraft.com/mc/1.8.8/", image: "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg" },
  { name: "Mr Racer", url: "https://www.crazygames.com/game/mr-racer", image: "https://imgs.crazygames.com/mr-racer_16x9/20220705141631/mr-racer_16x9-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=273&h=153&fit=crop" },
  { name: "Paper.io 2", url: "https://paper-io.com/", image: "https://paper-io.com/img/paper-io-2-icon.png" },
  { name: "PolyTrack", url: "https://polytrack.io/", image: "https://polytrack.io/images/polytrack-200.png" },
  { name: "Ragdoll Archers", url: "https://www.crazygames.com/game/ragdoll-archers", image: "https://imgs.crazygames.com/ragdoll-archers/20230919114019/ragdoll-archers-cover?auto=format%2Ccompress&q=45" },
  { name: "Retro Bowl", url: "https://retro-bowl.io/", image: "https://play-lh.googleusercontent.com/pOlAj7ZP_BF-5R6t2MkU1P0G9TDjvCGSkVmPklrnBH2CG4s7RQNBHBi3CJHb0SEqzQ=w240-h480-rw" },
  { name: "Slope", url: "https://slope-game.io/", image: "https://slope-game.io/data/image/slope-game-icon.png" },
  { name: "Subway Surfers", url: "https://poki.com/en/g/subway-surfers", image: "https://play-lh.googleusercontent.com/dTfmBL1ockKCOo3iKcGyzNfMrXNpNAqaUsJOWYR0FLgLacVXCsoIz4u_PvnMzXpkXw=w240-h480-rw" },
  { name: "Territorial.io", url: "https://territorial.io/", image: "https://territorial.io/favicon.png" },
  { name: "Tiny Fishing", url: "https://tinyfishing.io/", image: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/e2c5df3c07e5c3b5c5e3c3f5e7f5e7c5.png" },
  { name: "Tomb of the Mask", url: "https://poki.com/en/g/tomb-of-the-mask", image: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/2f8f9d7e2c0a2d3b4c5d6e7f8a9b0c1d.png" },
  { name: "Wordle", url: "https://wordleunlimited.org/", image: "https://www.nytimes.com/games-assets/v2/metadata/wordle-share-icon.png" },
  { name: "Yohoho.io", url: "https://yohoho.io/", image: "https://yohoho.io/images/skull.png" },
  { name: "Gun Spin", url: "https://gunspin.io/", image: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/gunspin.png" },
  { name: "Madalin Stunt Cars", url: "https://www.crazygames.com/game/madalin-stunt-cars-2", image: "https://imgs.crazygames.com/madalin-stunt-cars-2/20230427134814/madalin-stunt-cars-2-cover?auto=format" },
  { name: "Truck Simulator", url: "https://poki.com/en/g/off-road-truck-simulator", image: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/truck-sim.png" },
  { name: "Fruit Ninja", url: "https://poki.com/en/g/fruit-ninja", image: "https://play-lh.googleusercontent.com/P5e3H9BZZiclNe7VvOzHoF7l1HFhXiQ3kVoQKP6Q9Q7hPuQvXlW7l4Bi3Y3cYhQvK-s=w240-h480-rw" },
  { name: "Google Baseball", url: "https://www.google.com/logos/2019/july4th19/r5/july4th19.html", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" },
  { name: "Roblox", url: "https://now.gg/play/roblox-corporation/5349/roblox", image: "https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9PhZfXwDMYNn1VIM=w240-h480-rw" },
  { name: "Baseball Bros", url: "https://baseballbros.io/", image: "https://baseballbros.io/upload/imgs/baseball-bros-200.png" },
]

export default function GamesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
        GAMES
      </h1>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
        {games.map((game, index) => (
          <Link
            key={`${game.name}-${index}`}
            href={`/viewer?url=${encodeURIComponent(game.url)}&title=${encodeURIComponent(game.name)}`}
            className="game-card bg-card"
            title={game.name}
          >
            <Image
              src={game.image}
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
