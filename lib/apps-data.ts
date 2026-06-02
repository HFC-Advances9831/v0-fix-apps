export interface App {
  id: string
  name: string
  icon: string
  url: string
  embedUrl: string
  canEmbed: boolean
}

const CAREY_ICONS = "https://careynet.github.io/images/apps"

export const apps: App[] = [
  { id: "youtube", name: "YouTube", icon: `${CAREY_ICONS}/youtube.png`, url: "https://www.youtube.com/", embedUrl: "https://www.youtube.com/embed?listType=playlist&list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf", canEmbed: true },
  { id: "discord", name: "Discord", icon: `${CAREY_ICONS}/discord.png`, url: "https://discord.com/app", embedUrl: "https://e.widgetbot.io/channels/1234567890/1234567890", canEmbed: false },
  { id: "gemini", name: "Gemini", icon: `${CAREY_ICONS}/gemini.png`, url: "https://gemini.google.com/", embedUrl: "https://gemini.google.com/", canEmbed: false },
  { id: "twitch", name: "Twitch", icon: `${CAREY_ICONS}/twitch.png`, url: "https://www.twitch.tv/", embedUrl: "https://player.twitch.tv/?channel=twitch&parent=localhost", canEmbed: true },
  { id: "snapchat", name: "Snapchat", icon: `${CAREY_ICONS}/snapchat.png`, url: "https://web.snapchat.com/", embedUrl: "https://web.snapchat.com/", canEmbed: false },
]
