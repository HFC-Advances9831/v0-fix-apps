'use client';

import React, { useState } from 'react';

// Pre-verified, frame-friendly unblocked mirrors & games
const UNBLOCKED_DIRECTORY: { [key: string]: string } = {
  'tetris': 'https://chvin.github.io/react-tetris/',
  '2048': 'https://play2048.co/',
  'minecraft': 'https://classic.minecraft.net/',
  'snake': 'https://wayou.github.io/html5-snake/',
  'google': 'https://www.bing.com', // Bing is often significantly more frame-friendly in portals
  'games': 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydigital/ot3@main/g.xml',
};

export default function CareyNetworkPortal() {
  const [activeTab, setActiveTab] = useState<'home' | 'games' | 'apps' | 'settings' | 'proxy'>('home');
  const [proxyUrl, setProxyUrl] = useState('');
  const [currentFrameUrl, setCurrentFrameUrl] = useState('');

  // Handle the proxy address bar input submission
  const handleProxySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let target = proxyUrl.trim().toLowerCase();
    
    if (!target) return;

    // Check if the user typed a keyword from our unblocked directory
    if (UNBLOCKED_DIRECTORY[target]) {
      setCurrentFrameUrl(UNBLOCKED_DIRECTORY[target]);
      setActiveTab('proxy');
    } else {
      // If it's a general URL, ensure it has the proper web protocol prefix
      if (!target.startsWith('http://') && !target.startsWith('https://')) {
        target = 'https://' + target;
      }
      setCurrentFrameUrl(target);
      setActiveTab('proxy');
    }
    setProxyUrl('');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#070707', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: '20px', paddingBottom: '160px', boxSizing: 'border-box' }}>
      
      {/* Top Header Branding */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #111' }}>
        <div style={{ background: '#e74c3c', width: '12px', height: '12px', borderRadius: '3px' }}></div>
        <div style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.5px', color: '#fff' }}>Carey Network</div>
      </div>

      {/* Main Viewport Content Layout */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        
        {/* TAB: HOME VIEW */}
        {activeTab === 'home' && (
          <div>
            <h2 style={{ fontSize: '22px', margin: '0 0 10px 0', fontWeight: '600' }}>Welcome back</h2>
            <p style={{ color: '#666', margin: '0 0 25px 0', fontSize: '14px' }}>Select a node category below or launch an unblocked node via the proxy bar.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
              <div onClick={() => setActiveTab('games')} style={{ background: '#111', border: '1px solid #1c1c1c', padding: '25px', borderRadius: '14px', cursor: 'pointer', transition: 'transform 0.2s' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>🎮</div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Arcade Deck</h3>
                <p style={{ margin: 0, color: '#555', fontSize: '12px' }}>Launch integrated web layouts and optimized retro ports.</p>
              </div>
              <div onClick={() => setActiveTab('apps')} style={{ background: '#111', border: '1px solid #1c1c1c', padding: '25px', borderRadius: '14px', cursor: 'pointer', transition: 'transform 0.2s' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>⚡</div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>System Utilities</h3>
                <p style={{ margin: 0, color: '#555', fontSize: '12px' }}>Access tools, styling engines, and network dashboards.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB: GAMES GRID */}
        {activeTab === 'games' && (
          <div>
            <h2 style={{ fontSize: '20px', margin: '0 0 20px 0' }}>Arcade Node Repository</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
              {Object.keys(UNBLOCKED_DIRECTORY).map((key) => (
                <div 
                  key={key}
                  onClick={() => { setCurrentFrameUrl(UNBLOCKED_DIRECTORY[key]); setActiveTab('proxy'); }}
                  style={{ background: '#111', padding: '15px', borderRadius: '10px', border: '1px solid #1a1a1a', cursor: 'pointer', textAlign: 'center' }}
                >
                  <span style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '13px', letterSpacing: '1px', color: '#e74c3c' }}>{key}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: APPS */}
        {activeTab === 'apps' && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#444' }}>
            <p>No external system apps registered inside this directory node yet.</p>
          </div>
        )}

        {/* TAB: SETTINGS */}
        {activeTab === 'settings' && (
          <div>
            <h2 style={{ fontSize: '20px', margin: '0 0 15px 0' }}>Portal Properties</h2>
            <div style={{ background: '#111', padding: '20px', borderRadius: '12px', border: '1px solid #1a1a1a' }}>
              <p style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Client Framework Status: <span style={{ color: '#2ecc71' }}>Online</span></p>
              <p style={{ margin: 0, fontSize: '12px', color: '#444' }}>Core Build: Vercel Production Server Routing Node</p>
            </div>
          </div>
        )}

        {/* PROXY STREAM DISPLAY VIEW */}
        {activeTab === 'proxy' && (
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ fontSize: '12px', color: '#666', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '70%' }}>
                Active Connection: <span style={{ color: '#aaa' }}>{currentFrameUrl}</span>
              </div>
              <button 
                onClick={() => { setCurrentFrameUrl(''); setActiveTab('home'); }}
                style={{ background: '#1c1c1c', border: '1px solid #333', color: '#fff', padding: '6px 14px', borderRadius: '15px', cursor: 'pointer', fontSize: '12px' }}
              >
                ✕ Terminate Frame
              </button>
            </div>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, background: '#000', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1f1f1f' }}>
              <iframe 
                src={currentFrameUrl}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>

      {/* FIXED BOTTOM UTILITY HUB BAR */}
      <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, #050505 40%)', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', zIndex: '9999' }}>
        
        {/* Integrated Floating Proxy Address Bar */}
        <form onSubmit={handleProxySubmit} style={{ width: '100%', maxWidth: '420px', display: 'flex', background: '#121212', borderRadius: '20px', border: '1px solid #222', padding: '4px 6px', boxShadown: '0 8px 24px rgba(0,0,0,0.6)' }}>
          <input 
            type="text" 
            placeholder="Type 'tetris', 'minecraft' or paste any unblocked link..."
            value={proxyUrl}
            onChange={(e) => setProxyUrl(e.target.value)}
            style={{ flex: 1, background: 'transparent', border: 'none', padding: '8px 12px', color: '#fff', outline: 'none', fontSize: '13px' }}
          />
          <button type="submit" style={{ background: '#e74c3c', border: 'none', borderRadius: '16px', color: '#fff', padding: '6px 14px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
            Go
          </button>
        </form>

        {/* System Navigation Console Dock */}
        <div style={{ background: 'rgba(18, 18, 18, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: '5px', padding: '6px', borderRadius: '24px', boxShadow: '0 10px 35px rgba(0,0,0,0.8)' }}>
          <button onClick={() => setActiveTab('home')} style={{ background: activeTab === 'home' ? '#e74c3c' : 'transparent', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', transition: 'background 0.2s' }}>
            HOME
          </button>
          <button onClick={() => setActiveTab('games')} style={{ background: activeTab === 'games' ? '#e74c3c' : 'transparent', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', transition: 'background 0.2s' }}>
            GAMES
          </button>
          <button onClick={() => setActiveTab('apps')} style={{ background: activeTab === 'apps' ? '#e74c3c' : 'transparent', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', transition: 'background 0.2s' }}>
            APPS
          </button>
          <button onClick={() => setActiveTab('settings')} style={{ background: activeTab === 'settings' ? '#e74c3c' : 'transparent', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', transition: 'background 0.2s' }}>
            SETTINGS
          </button>
        </div>

      </div>

    </div>
  );
}
