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

        {/* BULLETPROOF AUDIO ENGINE + PANIC SYSTEM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;

                // FIX 1: Attach to window to completely stop duplicate "ghost tracks"
                if (!window.careyAudio) {
                  window.careyAudio = new Audio('/wiiu.mp3');
                  window.careyAudio.loop = true;
                  window.careyAudio.preload = 'auto';
                  
                  var savedTime = sessionStorage.getItem('wiiuMusicTime');
                  if (savedTime) {
                    window.careyAudio.currentTime = parseFloat(savedTime);
                  }
                }
                
                var audio = window.careyAudio;

                audio.addEventListener('error', function() {
                  if (audio.src && audio.src.indexOf('.mp3.mp3') === -1) {
                    audio.src = '/wiiu.mp3.mp3';
                    audio.load();
                  }
                });

                audio.addEventListener('timeupdate', function() {
                  if (!audio.paused) {
                    sessionStorage.setItem('wiiuMusicTime', audio.currentTime);
                  }
                });

                function kickstartAudio() {
                  var isPlayPage = window.location.pathname.includes('/play');
                  var isMuted = localStorage.getItem('wiiuMusicMuted') === 'true';
                  
                  if (!isPlayPage && audio.paused && !isMuted) {
                    audio.play().then(function() {
                      window.removeEventListener('click', kickstartAudio);
                      window.removeEventListener('touchstart', kickstartAudio);
                    }).catch(function() {});
                  }
                }

                window.addEventListener('click', kickstartAudio, { passive: true });
                window.addEventListener('touchstart', kickstartAudio, { passive: true });

                // MAIN WATCHER LOOP (Runs every 400ms)
                setInterval(function() {
                  var isPlayPage = window.location.pathname.includes('/play');
                  var isMuted = localStorage.getItem('wiiuMusicMuted') === 'true';
                  
                  // FIX 2: Hard-pause audio on iPad if muted, rather than using audio.muted
                  if (isMuted || isPlayPage) {
                    if (!audio.paused) {
                      audio.pause();
                    }
                  } else {
                    // Only resume playing if unmuted and not on a game screen
                    if (audio.paused && audio.currentTime > 0) {
                      audio.play().catch(function() {});
                    }
                  }

                  // Stealth Panic Button System (Working flawlessly)
                  var panicEnabled = localStorage.getItem('panicButtonEnabled') === 'true';
                  var existingBtn = document.getElementById('stealth-panic-button');

                  if (panicEnabled && !existingBtn) {
                    var btn = document.createElement('button');
                    btn.id = 'stealth-panic-button';
                    btn.style.position = 'fixed';
                    btn.style.top = '10px';
                    btn.style.left = '10px';
                    btn.style.width = '16px';
                    btn.style.height = '16px';
                    btn.style.backgroundColor = '#ef4444';
                    btn.style.borderRadius = '50%';
                    btn.style.zIndex = '999999';
                    btn.style.cursor = 'pointer';
                    btn.style.border = '2px solid white';
                    btn.style.boxShadow = '0 0 6px rgba(0,0,0,0.4)';
                    
                    btn.onclick = function(e) {
                      e.preventDefault();
                      window.location.href = 'https://classroom.google.com';
                    };
                    
                    document.body.appendChild(btn);
                  } else if (!panicEnabled && existingBtn) {
                    existingBtn.remove();
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
