'use client';

import React, { useState } from 'react';

export default function CareyNetworkTV() {
  const [view, setView] = useState<'browse' | 'player'>('browse');
  const [currentVideo, setCurrentVideo] = useState({ id: '', title: '' });
  const [inputValue, setInputValue] = useState('');

  // Curated fallback videos that browsers won't block
  const featuredVideos = [
    { id: "jfKfPfyJRdk", title: "Lofi Girl - Chill Lofi Beats Stream", author: "Lofi Girl", badge: "LIVE" },
    { id: "CoZ438mPz9M", title: "24/7 Custom Gaming Mixture Hub", author: "Gaming Network", badge: "POPULAR" },
    { id: "t70h9ub8B7o", title: "Satisfying Minecraft Timelapses & Creative Builds", author: "BlockCraft", badge: "MINECRAFT" },
    { id: "dQw4w9WgXcQ", title: "Rick Astley - Never Gonna Give You Up", author: "Rick Astley", badge: "CLASSIC" },
    { id: "n95S6o2N2S0", title: "ASMR Retro Gaming Longplay Lounge", author: "Nostalgia Vibes", badge: "RELAX" },
    { id: "2Vv-BfVoq4g", title: "Ed Sheeran - Perfect (Official Music Video)", author: "Ed Sheeran", badge: "MUSIC" }
  ];

  // Extracts YouTube ID from links
  const parseYouTubeId = (input: string) => {
    const urlRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = input.match(urlRegex);
    return match ? match[1] : (input.length === 11 ? input : null);
  };

  const handleWatchNow = () => {
    const videoId = parseYouTubeId(inputValue.trim());
    if (videoId) {
      setCurrentVideo({ id: videoId, title: "Custom Network Stream" });
      setView('player');
      setInputValue('');
    } else {
      alert("Please paste a valid YouTube link or direct 11-digit Video ID!");
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f0f', color: '#fff', fontFamily: 'sans-serif', padding: '20px' }}>
      
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '30px', borderBottom: '1px solid #222', paddingBottom: '20px' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#e74c3c' }}>Carey Network TV</div>
        <div style={{ display: 'flex', width: '100%', maxWidth: '550px' }}>
          <input 
            type="text" 
            placeholder="Paste any YouTube video link or ID..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ flex: 1, padding: '12px 15px', border: '1px solid #333', borderRadius: '24px 0 0 24px', background: '#121212', color: 'white', outline: 'none' }}
          />
          <button 
            onClick={handleWatchNow}
            style={{ padding: '12px 24px', border: 'none', background: '#e74c3c', color: 'white', borderRadius: '0 24px 24px 0', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Watch Now
          </button>
        </div>
      </div>

      {/* Browse Mode */}
      {view === 'browse' && (
        <div>
          <h2 style={{ fontSize: '18px', color: '#aaa', marginBottom: '20px', fontWeight: 500 }}>Featured Hub Channels</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
            {featuredVideos.map((video) => (
              <div 
                key={video.id} 
                onClick={() => { setCurrentVideo({ id: video.id, title: video.title }); setView('player'); }}
                style={{ background: '#171717', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #222' }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                    alt="thumbnail" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <span style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.8)', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
                    {video.badge}
                  </span>
                </div>
                <div style={{ padding: '14px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px 0', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.4 }}>
                    {video.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#aaa' }}>{video.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Theater Player Mode */}
      {view === 'player' && (
        <div>
          <button 
            onClick={() => setView('browse')}
            style={{ background: '#222', border: '1px solid #444', color: 'white', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', marginBottom: '20px', fontWeight: 'bold' }}
          >
            ← Return to Dashboard
          </button>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, background: '#000', borderRadius: '12px', overflow: 'hidden' }}>
            <iframe 
              src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&modestbranding=1`}
              allowFullScreen 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
          <h2 style={{ marginTop: '20px', fontSize: '22px', fontWeight: 600 }}>{currentVideo.title}</h2>
        </div>
      )}

    </div>
  );
}
