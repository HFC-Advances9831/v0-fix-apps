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
const CAREY_EMBEDS = "https://careynet.github.io/assets/embeds"

export const apps: App[] = [
  { id: "youtube", name: "YouTube", icon: `${CAREY_ICONS}/youtube.png`, url: "https://www.youtube.com/", embedUrl: `${CAREY_EMBEDS}/youtube.html`, canEmbed: true },
  { id: "discord", name: "Discord", icon: `${CAREY_ICONS}/discord.png`, url: "https://discord.com/app", embedUrl: `${CAREY_EMBEDS}/discord.html`, canEmbed: true },
  { id: "gemini", name: "Gemini", icon: `${CAREY_ICONS}/gemini.png`, url: "https://gemini.google.com/", embedUrl: `${CAREY_EMBEDS}/gemini.html`, canEmbed: true },
  { id: "twitch", name: "Twitch", icon: `${CAREY_ICONS}/twitch.png`, url: "https://www.twitch.tv/", embedUrl: `${CAREY_EMBEDS}/twitch.html`, canEmbed: true },
  { id: "snapchat", name: "Snapchat", icon: `${CAREY_ICONS}/snapchat.png`, url: "https://web.snapchat.com/", embedUrl: `${CAREY_EMBEDS}/snapchat.html`, canEmbed: true },
  { id: "croxyproxy", name: "CroxyProxy", icon: "https://cdn.croxyproxy.rocks/images/logo.png", url: "https://www.croxyproxy.rocks/", embedUrl: "https://www.croxyproxy.rocks/", canEmbed: true },
]
