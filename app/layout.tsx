import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NavDock } from '@/components/nav-dock'
import { Header } from '@/components/header'
import Script from 'next/script' // Safe native Next.js script engine
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

        {/* Next.js Compiler Safe Audio Engine */}
        <Script id="wiiu-audio-engine" strategy="afterInteractive">
          {`
            (function() {
              if (typeof window === 'undefined') return;

              // Connects perfectly to the exact filename in your repository
              const audio = new Audio('/wiiu.mp3.mp3');
              audio.loop = true;
              audio.volume = 0.20; // 20% background balance
              audio.preload = 'auto';

              const savedTime = sessionStorage.getItem('wiiuMusicTime');
              if (savedTime) {
                audio.currentTime = parseFloat(savedTime);
              }

              audio.addEventListener('timeupdate', function() {
                if (!audio.paused) {
                  sessionStorage.setItem('wiiuMusicTime', audio.currentTime);
                }
              });

              function syncAudioState() {
                const isPlayPage = window.location.pathname.includes('/play');
                if (isPlayPage) {
                  if (!audio.paused) audio.pause();
                } else {
                  if (audio.paused) {
                    audio.play().catch(function() {});
                  }
                }
              }

              // Overrides strict iOS Safari auto-mute blocks on the first interaction
              window.addEventListener('click', syncAudioState, { passive: true });
              window.addEventListener('touchstart', syncAudioState, { passive: true });

              // Watches page transitions dynamically
              let currentPath = window.location.pathname;
              setInterval(function() {
                if (window.location.pathname !== currentPath) {
                  currentPath = window.location.pathname;
                  syncAudioState();
                }
              }, 400);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
