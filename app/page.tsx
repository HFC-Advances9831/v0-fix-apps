'use client';

import React, { useState, useRef } from 'react';

// Pre-verified frame-friendly unblocked system links & retro ports
const UNBLOCKED_DIRECTORY: { [key: string]: { url: string; title: string } } = {
  'tetris': { url: 'https://chvin.github.io/react-tetris/', title: 'Tetris Arcade Port' },
  '2048': { url: 'https://play2048.co/', title: '2048 Puzzle Node' },
  'minecraft': { url: 'https://classic.minecraft.net/', title: 'Minecraft Classic v0.0.23a' },
  'snake': { url: 'https://wayou.github.io/html5-snake/', title: 'Retro Snake Engine' },
  'google': { url: 'https://www.bing.com', title: 'Search Engine Mirror Node' },
  'youtube': { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'YouTube Media Stream' }
};

export default function CareyNetworkPortal() {
  const [activeTab, setActiveTab] = useState<'home' | 'games' | 'apps' | 'settings' | 'proxy'>('home');
  const [proxyUrl, setProxyUrl] = useState('');
  const [currentFrameUrl, setCurrentFrameUrl] = useState('');
  const [currentFrameTitle, setCurrentFrameTitle] = useState('System Web Node');
  const [iframeKey, setIframeKey] = useState(0); // Tracking key to force-refresh frames cleanly

  const handleProxySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let target = proxyUrl.trim().toLowerCase();
    
    if (!target) return;

    if (UNBLOCKED_DIRECTORY[target]) {
      setCurrentFrameUrl(UNBLOCKED_DIRECTORY[target].url);
      setCurrentFrameTitle(UNBLOCKED_DIRECTORY[target].title);
      setActiveTab('proxy');
    } else {
      // Format raw text inputs into clean web URLs
      if (!target.startsWith('http://') && !target.startsWith('https://')) {
        target = 'https://' + target;
      }
      setCurrentFrameUrl(target);
      setCurrentFrameTitle('External Web Proxy Portal');
      setActiveTab('proxy');
    }
    setProxyUrl('');
  };

  const reloadIframe = () => {
    setIframeKey(prev => prev + 1); // Increments key to trigger instant browser frame reload
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000000', color: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', boxSizing: 'border-box', position: 'relative' }}>
      
      {/* Top Branding Header - Only visible when not browsing full-screen nodes */}
      {activeTab !== 'proxy' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '20px 24px', borderBottom: '1px solid #111' }}>
          <div style={{ background: '#e74c3c', width: '10px', height: '10px', borderRadius: '50%' }}></div>
          <div style={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '0.5px', color: '#ff3333' }}>Carey Network</div>
        </div>
      )}

      {/* Main Framework Body Viewports */}
      <div style={{ padding: activeTab === 'proxy' ? '0' : '20px', paddingBottom: '180px' }}>
        
        {/* TAB 1: HOME VIEW (Restored Hero Display Style) */}
        {activeTab === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', pt: '40px', marginTop: '60px' }}>
            <h1 style={{ fontSize: '3.2rem', fontWeight: '800', margin: '0 0 8px 0', color: '#e74c3c', letterSpacing: '-1px' }}>
              Welcome to Carey Network
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#666', margin: '0 0 45px 0', fontWeight: '400' }}>
              Your entertainment hub
            </p>

            {/* Live Infrastructure Metrics */}
            <div style={{ display: 'flex', gap: '50px', marginBottom: '45px', background: 'rgba(10,10,10,0.4)', padding: '15px 30px', borderRadius: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#e74c3c', fontSize: '2.4rem', fontWeight: '800' }}>5</div>
                <div style={{ color: '#444', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', marginTop: '2px' }}>APPS</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#e74c3c', fontSize: '2.4rem', fontWeight: '800' }}>50+</div>
                <div style={{ color: '#444', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', marginTop: '2px' }}>GAMES</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#e74c3c', fontSize: '2.4rem', fontWeight: '800' }}>4</div>
                <div style={{ color: '#444', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', marginTop: '2px' }}>SETTINGS</div>
              </div>
            </div>

            {/* Explore Core Navigation Callout */}
            <button 
              onClick={() => setActiveTab('games')}
              style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '14px 40px', borderRadius: '25px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)', transition: 'transform 0.2s' }}
            >
              Explore
            </button>
          </div>
        )}

        {/* TAB 2: GAMES DECK */}
        {activeTab === 'games' && (
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px' }}>Arcade Software Repositories</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
              {Object.keys(UNBLOCKED_DIRECTORY).map((key) => (
                <div 
                  key={key}
                  onClick={() => { 
                    setCurrentFrameUrl(UNBLOCKED_DIRECTORY[key].url); 
                    setCurrentFrameTitle(UNBLOCKED_DIRECTORY[key].title); 
                    setActiveTab('proxy'); 
                  }}
                  style={{ background: '#0a0a0a', border: '1px solid #151515', padding: '20px', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', transition: 'border 0.2s' }}
                >
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎮</div>
                  <span style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '12px', letterSpacing: '1px', color: '#e74c3c' }}>{key}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: UTILITY APPS */}
        {activeTab === 'apps' && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#444', fontSize: '14px' }}>
            <p>No external background system utilities compiled inside this directory node yet.</p>
          </div>
        )}

        {/* TAB 4: SYSTEM PROPERTIES */}
        {activeTab === 'settings' && (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '15px', fontWeight: '600' }}>System Configuration</h2>
            <div style={{ background: '#0a0a0a', padding: '20px', borderRadius: '12px', border: '1px solid #161616' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Portal Terminal Core: <span style={{ color: '#2ecc71', fontWeight: 'bold' }}>ONLINE</span></p>
              <p style={{ margin: 0, fontSize: '12px', color: '#555' }}>Framework Interface: Next.js + React Virtual Frame Router V2</p>
            </div>
          </div>
        )}

        {/* ACTIVE PROXY IFRAME INTERFACE NODE */}
        {activeTab === 'proxy' && (
          <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', background: '#000' }}>
            
            {/* Custom Interactive Utility Header (Matches UI Screen Details) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#090909', padding: '12px 20px', borderBottom: '1px solid #141414' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button 
                  onClick={() => { setCurrentFrameUrl(''); setActiveTab('home'); }} 
                  style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '16px', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                >
                  ✕
                </button>
                <span style={{ fontWeight: '600', fontSize: '14px', color: '#ffffff', letterSpacing: '0.3px' }}>{currentFrameTitle}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {/* Working Refresh Button */}
                <button 
                  onClick={reloadIframe}
                  style={{ background: 'transparent', border: 'none', color: '#aaaaaa', fontSize: '16px', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                  title="Reload System Frame"
                >
                  circlearrowright;
                </button>
                {/* Visual Viewport Scaler */}
                <button 
                  style={{ background: 'transparent', border: 'none', color: '#aaaaaa', fontSize: '14px', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                >
                  ⤢
                </button>
              </div>
            </div>

            {/* Embedded Active Application Frame Window */}
            <div style={{ flex: 1, width: '100%', height: 'calc(100vh - 45px)', background: '#000' }}>
              <iframe 
                key={iframeKey}
                src={currentFrameUrl}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        )}

      </div>

      {/* FIXED BASE NAVIGATION SYSTEM AND ADDRESS CONSOLE */}
      {activeTab !== 'proxy' && (
        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, #000000 35%)', padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', zIndex: 9999 }}>
          
          {/* Main Floating Proxy Router Address Bar Container */}
          <form 
            onSubmit={handleProxySubmit} 
            style={{ width: '100%', maxWidth: '440px', display: 'flex', background: '#0f0f0f', borderRadius: '24px', border: '1px solid #222222', padding: '4px 6px', boxShadow: '0 10px 30px rgba(0,0,0,0.7)' }}
          >
            <input 
              type="text" 
              placeholder="Type 'tetris', 'minecraft' or paste any unblocked link..."
              value={proxyUrl}
              onChange={(e) => setProxyUrl(e.target.value)}
              style={{ flex: 1, background: 'transparent', border: 'none', padding: '10px 14px', color: '#ffffff', outline: 'none', fontSize: '13px' }}
            />
            <button 
              type="submit" 
              style={{ background: '#e74c3c', border: 'none', borderRadius: '50%', color: '#ffffff', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}
            >
              Go
            </button>
          </form>

          {/* Core System App Dock Overlay */}
          <div style={{ background: 'rgba(15, 15, 15, 0.96)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '4px', padding: '6px', borderRadius: '28px', boxShadow: '0 12px 40px rgba(0,0,0,0.9)' }}>
            <button onClick={() => setActiveTab('home')} style={{ background: activeTab === 'home' ? '#e74c3c' : 'transparent', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '22px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
              HOME
            </button>
            <button onClick={() => setActiveTab('games')} style={{ background: activeTab === 'games' ? '#e74c3c' : 'transparent', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '22px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
              GAMES
            </button>
            <button onClick={() => setActiveTab('apps')} style={{ background: activeTab === 'apps' ? '#e74c3c' : 'transparent', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '22px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
              APPS
            </button>
            <button onClick={() => setActiveTab('settings')} style={{ background: activeTab === 'settings' ? '#e74c3c' : 'transparent', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '22px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
              SETTINGS
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
