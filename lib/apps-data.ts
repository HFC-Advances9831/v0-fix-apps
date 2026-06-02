export interface App {
  id: string
  name: string
  icon: string
  url: string
  embedUrl: string
  canEmbed: boolean
  proxyTarget?: string
}

const CAREY_ICONS = "https://careynet.github.io/images/apps"

// Direct CroxyProxy URLs with target sites
export const apps: App[] = [
  { id: "youtube", name: "YouTube", icon: `${CAREY_ICONS}/youtube.png`, url: "https://www.youtube.com/", embedUrl: "https://www.croxyproxy.rocks/", canEmbed: true },
  { id: "discord", name: "Discord", icon: `${CAREY_ICONS}/discord.png`, url: "https://discord.com/app", embedUrl: "https://www.croxyproxy.rocks/", canEmbed: true },
  { id: "gemini", name: "Gemini", icon: `${CAREY_ICONS}/gemini.png`, url: "https://gemini.google.com/", embedUrl: "https://www.croxyproxy.rocks/", canEmbed: true },
  { id: "twitch", name: "Twitch", icon: `${CAREY_ICONS}/twitch.png`, url: "https://www.twitch.tv/", embedUrl: "https://www.croxyproxy.rocks/", canEmbed: true },
  { id: "snapchat", name: "Snapchat", icon: `${CAREY_ICONS}/snapchat.png`, url: "https://web.snapchat.com/", embedUrl: "https://www.croxyproxy.rocks/", canEmbed: true },
]
