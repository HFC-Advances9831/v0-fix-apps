export interface Game {
  id: string
  name: string
  icon: string
  assetUrl: string
}

// Games use Carey Network's asset files hosted on GitHub Pages
// The HTML files contain <base href> tags pointing to jsdelivr CDN for actual game assets
// This allows games to load properly since GitHub Pages serves HTML correctly
const CAREY_ASSETS = "https://careynet.github.io/assets"
const CAREY_ICONS = "https://careynet.github.io/images/games"

export const games: Game[] = [
  { id: "2048", name: "2048", icon: `${CAREY_ICONS}/2048.png`, assetUrl: `${CAREY_ASSETS}/2048.html` },
  { id: "amongus", name: "Among Us", icon: `${CAREY_ICONS}/amongus.png`, assetUrl: `${CAREY_ASSETS}/amongus.html` },
  { id: "basketrandom", name: "Basket Random", icon: `${CAREY_ICONS}/basketrandom.png`, assetUrl: `${CAREY_ASSETS}/basketrandom.html` },
  { id: "bitlife", name: "BitLife", icon: `${CAREY_ICONS}/bitlife.png`, assetUrl: `${CAREY_ASSETS}/bitlife.html` },
  { id: "blockblast", name: "Block Blast", icon: `${CAREY_ICONS}/blockblast.png`, assetUrl: `${CAREY_ASSETS}/blockblast.html` },
  { id: "bouncemasters", name: "Bouncemasters", icon: `${CAREY_ICONS}/bouncemasters.png`, assetUrl: `${CAREY_ASSETS}/bouncemasters.html` },
  { id: "cookieclicker", name: "Cookie Clicker", icon: `${CAREY_ICONS}/cookieclicker.png`, assetUrl: `${CAREY_ASSETS}/cookieclicker.html` },
  { id: "crossyroad", name: "Crossy Road", icon: `${CAREY_ICONS}/crossyroad.png`, assetUrl: `${CAREY_ASSETS}/crossyroad.html` },
  { id: "deltarune", name: "Deltarune", icon: `${CAREY_ICONS}/deltarune.png`, assetUrl: `${CAREY_ASSETS}/deltarune.html` },
  { id: "driftboss", name: "Drift Boss", icon: `${CAREY_ICONS}/driftboss.png`, assetUrl: `${CAREY_ASSETS}/driftboss.html` },
  { id: "escaperoad", name: "Escape Road", icon: `${CAREY_ICONS}/escaperoad.png`, assetUrl: `${CAREY_ASSETS}/escaperoad.html` },
  { id: "fnaf", name: "Five Nights At Freddys", icon: `${CAREY_ICONS}/fnaf.png`, assetUrl: `${CAREY_ASSETS}/fnaf.html` },
  { id: "fnaf2", name: "Five Nights At Freddys 2", icon: `${CAREY_ICONS}/fnaf2.png`, assetUrl: `${CAREY_ASSETS}/fnaf2.html` },
  { id: "fnaf3", name: "Five Nights At Freddys 3", icon: `${CAREY_ICONS}/fnaf3.png`, assetUrl: `${CAREY_ASSETS}/fnaf3.html` },
  { id: "fnaf4", name: "Five Nights At Freddys 4", icon: `${CAREY_ICONS}/fnaf4.png`, assetUrl: `${CAREY_ASSETS}/fnaf4.html` },
  { id: "fnafsl", name: "FNAF Sister Location", icon: `${CAREY_ICONS}/fnafsl.png`, assetUrl: `${CAREY_ASSETS}/fnafsl.html` },
  { id: "gd-lite", name: "Geometry Dash", icon: `${CAREY_ICONS}/gd-lite.png`, assetUrl: `${CAREY_ASSETS}/gd-lite.html` },
  { id: "gd-subzero", name: "Geometry Dash Subzero", icon: `${CAREY_ICONS}/gd-subzero.png`, assetUrl: `${CAREY_ASSETS}/gd-subzero.html` },
  { id: "gd-world", name: "Geometry Dash World", icon: `${CAREY_ICONS}/gd-world.png`, assetUrl: `${CAREY_ASSETS}/gd-world.html` },
  { id: "gd-melt", name: "Geometry Dash Meltdown", icon: `${CAREY_ICONS}/gd-melt.png`, assetUrl: `${CAREY_ASSETS}/gd-melt.html` },
  { id: "gd-breeze", name: "Geometry Dash Breeze", icon: `${CAREY_ICONS}/gd-breeze.png`, assetUrl: `${CAREY_ASSETS}/gd-breeze.html` },
  { id: "justfall", name: "JustFall.lol", icon: `${CAREY_ICONS}/justfall.png`, assetUrl: `${CAREY_ASSETS}/justfall.html` },
  { id: "minecraft1.8.8", name: "Minecraft 1.8.8", icon: `${CAREY_ICONS}/minecraft1.8.8.png`, assetUrl: `${CAREY_ASSETS}/minecraft1.8.8.html` },
  { id: "mrracer", name: "Mr. Racer", icon: `${CAREY_ICONS}/mrracer.png`, assetUrl: `${CAREY_ASSETS}/mrracer.html` },
  { id: "paperio", name: "Paper.io", icon: `${CAREY_ICONS}/paperio.png`, assetUrl: `${CAREY_ASSETS}/paperio.html` },
  { id: "polytrack", name: "Polytrack", icon: `${CAREY_ICONS}/polytrack.png`, assetUrl: `${CAREY_ASSETS}/polytrack.html` },
  { id: "ragdollarchers", name: "Ragdoll Archers", icon: `${CAREY_ICONS}/ragdollarchers.png`, assetUrl: `${CAREY_ASSETS}/ragdollarchers.html` },
  { id: "retrobowl", name: "Retro Bowl", icon: `${CAREY_ICONS}/retrobowl.png`, assetUrl: `${CAREY_ASSETS}/retrobowl.html` },
  { id: "stickmanhook", name: "Stickman Hook", icon: `${CAREY_ICONS}/stickmanhook.png`, assetUrl: `${CAREY_ASSETS}/stickmanhook.html` },
  { id: "subwaysurfers", name: "Subway Surfers", icon: `${CAREY_ICONS}/subwaysurfers.png`, assetUrl: `${CAREY_ASSETS}/subwaysurfers.html` },
  { id: "territorialio", name: "Territorial.io", icon: `${CAREY_ICONS}/territorialio.png`, assetUrl: `${CAREY_ASSETS}/territorialio.html` },
  { id: "tinyfish", name: "Tiny Fishing", icon: `${CAREY_ICONS}/tinyfish.png`, assetUrl: `${CAREY_ASSETS}/tinyfish.html` },
  { id: "tom", name: "Tomb of the Mask", icon: `${CAREY_ICONS}/tom.png`, assetUrl: `${CAREY_ASSETS}/tom.html` },
  { id: "wordle", name: "Wordle", icon: `${CAREY_ICONS}/wordle.png`, assetUrl: `${CAREY_ASSETS}/wordle.html` },
  { id: "yohoho", name: "Yohoho.io", icon: `${CAREY_ICONS}/yohohoio.png`, assetUrl: `${CAREY_ASSETS}/yohohoio.html` },
  { id: "snowballio", name: "Snowball.io", icon: `${CAREY_ICONS}/snowballio.png`, assetUrl: `${CAREY_ASSETS}/snowballio.html` },
  { id: "solarsmash", name: "Solar Smash", icon: `${CAREY_ICONS}/solarsmash.png`, assetUrl: `${CAREY_ASSETS}/solarsmash.html` },
  { id: "spacewaves", name: "Space Waves", icon: `${CAREY_ICONS}/spacewaves.png`, assetUrl: `${CAREY_ASSETS}/spacewaves.html` },
  { id: "stacktris", name: "Stacktris", icon: `${CAREY_ICONS}/stacktris.png`, assetUrl: `${CAREY_ASSETS}/stacktris.html` },
  { id: "drivemad", name: "Drive Mad", icon: `${CAREY_ICONS}/drivemad.png`, assetUrl: `${CAREY_ASSETS}/drivemad.html` },
  { id: "fruitninja", name: "Fruit Ninja", icon: `${CAREY_ICONS}/fruitninja.png`, assetUrl: `${CAREY_ASSETS}/fruitninja.html` },
  { id: "googlebaseball", name: "Google Baseball", icon: `${CAREY_ICONS}/googlebaseball.png`, assetUrl: `${CAREY_ASSETS}/googlebaseball.html` },
  { id: "roblox", name: "Roblox", icon: `${CAREY_ICONS}/roblox.png`, assetUrl: `${CAREY_ASSETS}/roblox.html` },
  { id: "gunspin", name: "Gunspin", icon: `${CAREY_ICONS}/gunspin.png`, assetUrl: `${CAREY_ASSETS}/gunspin.html` },
  { id: "survivalrace", name: "Survival Race", icon: `${CAREY_ICONS}/survivalrace.png`, assetUrl: `${CAREY_ASSETS}/survivalrace.html` },
  { id: "monstertracks", name: "Monster Tracks", icon: `${CAREY_ICONS}/monstertracks.png`, assetUrl: `${CAREY_ASSETS}/monstertracks.html` },
  { id: "baseballbros", name: "Baseball Bros", icon: `${CAREY_ICONS}/baseballbros.png`, assetUrl: `${CAREY_ASSETS}/baseballbros.html` },
]
