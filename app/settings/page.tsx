"use client";

import { useState } from "react";

export default function SettingsPage() {
  
  const handleKillSwitch = () => {
    // 1. Force the value into localStorage
    localStorage.setItem('site_status', 'bricked');
    
    // 2. Verify it was set
    const check = localStorage.getItem('site_status');
    
    if (check === 'bricked') {
      // 3. If it worked, wipe the screen
      window.location.href = 'about:blank';
    } else {
      alert("Error: Could not brick. Check browser permissions.");
    }
  };

  return (
    <main className="p-10">
      <button 
        onClick={handleKillSwitch}
        className="bg-red-600 text-white p-4 rounded-lg font-bold"
      >
        Self-Destruct
      </button>
    </main>
  );
}
