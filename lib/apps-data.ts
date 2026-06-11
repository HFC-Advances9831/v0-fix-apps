export interface App {
  id: string
  name: string
  icon: string
  url: string
  embedUrl: string
  canEmbed: boolean
}

export const apps: App[] = [
  {
    id: "youtube",
    name: "YouTube",
    icon: "https://www.youtube.com/favicon.ico",
    url: "https://www.youtube.com/",
    embedUrl: "/embeds/youtube.html",
    canEmbed: true,
  },
  {
    id: "twitch",
    name: "Twitch",
    icon: "https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c1b.png",
    url: "https://www.twitch.tv/",
    embedUrl: "/embeds/twitch.html",
    canEmbed: true,
  },
  {
    id: "discord",
    name: "Discord",
    icon: "https://discord.com/assets/favicon.ico",
    url: "https://discord.com/app",
    embedUrl: "/embeds/discord.html",
    canEmbed: true,
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: "https://web.snapchat.com/favicon.ico",
    url: "https://web.snapchat.com/",
    embedUrl: "/embeds/proxy.html?url=https://web.snapchat.com&name=Snapchat",
    canEmbed: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    icon: "https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06.svg",
    url: "https://gemini.google.com/",
    embedUrl: "/embeds/proxy.html?url=https://gemini.google.com&name=Gemini",
    canEmbed: true,
  },
  {
    id: "croxyproxy",
    name: "CroxyProxy",
    icon: "https://cdn.croxyproxy.rocks/images/logo.png",
    url: "https://www.croxyproxy.rocks/",
    embedUrl: "/embeds/proxy.html?url=https://www.croxyproxy.rocks&name=CroxyProxy",
    canEmbed: true,
  },
]
