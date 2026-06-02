"use client"

import Link from "next/link"
import Image from "next/image"
import { apps } from "@/lib/apps-data"

export default function AppsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
        APPS
      </h1>
      
      <div className="flex justify-center gap-6 md:gap-8 flex-wrap px-4">
        {apps.map((app) => (
          <Link
            key={app.id}
            href={`/app/${app.id}`}
            className="flex items-center justify-center w-32 h-32 md:w-36 md:h-36 rounded-3xl bg-card border border-border hover:-translate-y-2 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
            title={app.name}
          >
            <Image
              src={app.icon}
              alt={app.name}
              width={144}
              height={144}
              className="w-full h-full object-cover"
              unoptimized
            />
          </Link>
        ))}
      </div>

      <footer className="text-center mt-16 text-muted-foreground text-sm">
        © 2026 Carey Network
      </footer>
    </main>
  )
}
