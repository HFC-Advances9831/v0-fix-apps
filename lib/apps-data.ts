export interface App {
  id: string
  name: string
  icon: string
  url: string
}

const CAREY_ICONS = "https://careynet.github.io/images/apps"

export const apps: App[] = [
  { id: "youtube", name: "YouTube", icon: `${CAREY_ICONS}/youtube.png`, url: "https://www.youtube.com/" },
  { id: "discord", name: "Discord", icon: `${CAREY_ICONS}/discord.png`, url: "https://discord.com/app" },
  { id: "gemini", name: "Gemini", icon: `${CAREY_ICONS}/gemini.png`, url: "https://gemini.google.com/" },
  { id: "twitch", name: "Twitch", icon: `${CAREY_ICONS}/twitch.png`, url: "https://www.twitch.tv/" },
  { id: "snapchat", name: "Snapchat", icon: `${CAREY_ICONS}/snapchat.png`, url: "https://web.snapchat.com/" },
]
