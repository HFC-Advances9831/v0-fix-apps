import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NavDock } from '@/components/nav-dock'
import { Header } from '@/components/header'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
})

export const metadata: Metadata = {
  title: 'Carey Network',
  description: 'Your entertainment hub',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#dc2626',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased gradient-bg min-h-screen pb-24">
        <Header />
        {children}
        <NavDock />
        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* INSTANT INLINE AUDIO ENGINE - BYPASSES SAFARI BLOCKS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;

                // 1. Initialize audio with the standard filename path
                var audio = new Audio('/wiiu.mp3');
                audio.loop = true;
                audio.volume = 0.25;
                audio.preload = 'auto';

                // 2. Filename Safety Net: If wiiu.mp3 fails, hot-swap to the double-extension file automatically
                audio.addEventListener('error', function() {
                  if (audio.src && audio.src.indexOf('.mp3.mp3') === -1) {
                    console.log("Switching to double extension fallback path...");
                    audio.src = '/wiiu.mp3.mp3';
                    audio.load();
                  }
                });

                // 3. Track continuity across page loads
                var savedTime = sessionStorage.getItem('wiiuMusicTime');
                if (savedTime) {
                  audio.currentTime = parseFloat(savedTime);
                    }

                audio.addEventListener('timeupdate', function() {
                  if (!audio.paused) {
                    sessionStorage.setItem('wiiuMusicTime', audio.currentTime);
                  }
                });

                // 4. Synchronous user-gesture trigger (Directly authorized by Safari)
                function kickstartAudio() {
                  var isPlayPage = window.location.pathname.includes('/play');
                  
                  if (!isPlayPage && audio.paused) {
                    audio.play().then(function() {
                      // Once unlocked and running, clear global start hooks safely
                      window.removeEventListener('click', kickstartAudio);
                      window.removeEventListener('touchstart', kickstartAudio);
                    }).catch(function(err) {
                      console.log("Waiting for verified interaction...");
                    });
                  }
                }

                window.addEventListener('click', kickstartAudio, { passive: true });
                window.addEventListener('touchstart', kickstartAudio, { passive: true });

                // 5. Route Watcher: Pauses during apps/games, resumes on main menus
                setInterval(function() {
                  var isPlayPage = window.location.pathname.includes('/play');
                  if (isPlayPage) {
                    if (!audio.paused) audio.pause();
                  } else {
                    if (audio.paused && audio.currentTime > 0) {
                      audio.play().catch(function() {});
                    }
                  }
                }, 400);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
