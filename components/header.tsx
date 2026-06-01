"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background to-background/95 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Carey Network"
            width={36}
            height={36}
            className="invert"
          />
          <span className="text-xl font-bold gradient-text">Carey Network</span>
        </Link>
      </div>
    </header>
  )
}
