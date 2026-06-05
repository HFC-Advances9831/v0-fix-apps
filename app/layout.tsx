"use client";

import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

// ... (Keep your font imports and other layout code)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isBricked, setIsBricked] = useState(false);

  useEffect(() => {
    // Check for the flag
    if (localStorage.getItem('site_status') === 'bricked') {
      setIsBricked(true);
      window.location.href = 'about:blank';
    }
  }, []);

  // If bricked, don't render anything at all
  if (isBricked) return null;

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
