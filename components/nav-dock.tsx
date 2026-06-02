"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LayoutGrid, Gamepad2, Settings, MoreHorizontal } from "lucide-react"

const navItems = [
  { href: "/", icon: "logo", label: "Home", page: "home" },
  { href: "/games", icon: Gamepad2, label: "Games", page: "games" },
  { href: "/apps", icon: LayoutGrid, label: "Apps", page: "apps" },
  { href: "/settings", icon: Settings, label: "Settings", page: "settings" },
  { href: "/extras", icon: MoreHorizontal, label: "More", page: "extras" },
]

export function NavDock() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-3 bg-card/95 backdrop-blur-xl rounded-full border border-border shadow-2xl z-50 glow">
      {navItems.map((item) => {
        const active = isActive(item.href)
        const Icon = item.icon
        
        return (
          <Link
            key={item.page}
            href={item.href}
            className={`
              flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300
              ${active 
                ? "gradient-btn text-primary-foreground" 
                : "hover:bg-primary/10 text-muted-foreground hover:text-primary"
              }
            `}
          >
            {item.icon === "logo" ? (
              <Image
                src="/logo.png"
                alt="Home"
                width={20}
                height={20}
                className={`w-5 h-5 ${active ? "" : "invert opacity-60"}`}
                style={{ filter: active ? "invert(1)" : undefined }}
              />
            ) : (
              <Icon className="w-5 h-5" />
            )}
            <span className="text-[10px] font-semibold uppercase tracking-wide">
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
