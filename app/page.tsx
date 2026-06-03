'use client';

import React, { useState } from 'react';

export default function CareyNetworkTV() {
  const [view, setView] = useState<'browse' | 'player'>('browse');
  const [currentVideo, setCurrentVideo] = useState({ id: '', title: '' });
  const [inputValue, setInputValue] = useState('');

  // Extracts YouTube ID from links (handles normal links, mobile links, or raw IDs)
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
    <div style={{ minHeight: '100vh', background: '#0f0f0f', color: '#fff', fontFamily: 'sans-serif', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      
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

      {/* Home/Browse Mode - Clean Landing Page without Video Cards */}
      {view === 'browse' && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '40px', padding: '20px' }}>
          <div style={{ maxWidth: '500px', background: '#171717', border: '1px solid #222', borderRadius: '16px', padding: '40px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>📺</div>
            <h2 style={{ fontSize: '22px', fontWeight: '600', margin: '0 0 10px 0', color: '#fff' }}>Ready to Stream</h2>
            <p style={{ fontSize: '14px', color: '#aaa', margin: '0', lineHeight: '1.6' }}>
              Paste a standard YouTube URL, a mobile link, or a direct 11-character video ID into the bar above to launch the custom player framework instantly.
            </p>
          </div>
        </div>
      )}

      {/* Theater Player Mode */}
      {view === 'player' && (
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
          <button 
            onClick={() => setView('browse')}
            style={{ background: '#222', border: '1px solid #444', color: 'white', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', marginBottom: '20px', fontWeight: 'bold' }}
          >
            ← Return to Home
          </button>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, background: '#000', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.7)' }}>
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
