"use client";

import { useState, useEffect, useCallback } from "react";

const settingsConfig = [
  {
    id: "cloak",
    title: "Cloak",
    description: "Disguise tab as Google",
    type: "button" as const,
  },
  {
    id: "auto-cloak",
    title: "Auto Cloak",
    description: "Cloak on page load",
    type: "toggle" as const,
  },
  {
    id: "panic-button",
    title: "Panic Button",
    description: "Press ` or Esc to redirect to Google",
    type: "toggle" as const,
  },
  {
    id: "webapp-mode",
    title: "Web-App Mode",
    description: "Standalone experience",
    type: "toggle" as const,
  },
  {
    id: "mute-music",
    title: "Mute Menu Music",
    description: "Silences the background audio tracker",
    type: "toggle" as const,
  },
  {
    id: "stealth-panic",
    title: "Stealth Panic Button",
    description: "Adds a tiny red redirect core to top-left",
    type: "toggle" as const,
  },
  {
    id: "kill-switch",
    title: "Self-Destruct",
    description: "Permanently brick this site for this browser",
    type: "danger-button" as const,
  },
];

export default function SettingsPage() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    "auto-cloak": false,
    "panic-button": false,
    "webapp-mode": false,
    "mute-music": false,
    "stealth-panic": false,
  });
  const [notification, setNotification] = useState<string | null>(null);

  const getStorageKey = (id: string) => {
    if (id === "mute-music") return "wiiuMusicMuted";
    if (id === "stealth-panic") return "panicButtonEnabled";
    return `toggle_${id}`;
  };

  useEffect(() => {
    const savedToggles: Record<string, boolean> = {};
    settingsConfig.forEach((setting) => {
      if (setting.type === "toggle") {
        const key = getStorageKey(setting.id);
        const saved = localStorage.getItem(key);
        savedToggles[setting.id] = saved === "true";
      }
    });
    setToggles(savedToggles);
  }, []);

  const triggerPanic = useCallback(() => {
    window.location.href = "https://www.google.com";
  }, []);

  useEffect(() => {
    if (!toggles["panic-button"]) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "Escape") {
        triggerPanic();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [toggles, triggerPanic]);

  const handleToggle = (id: string) => {
    const newValue = !toggles[id];
    setToggles((prev) => ({ ...prev, [id]: newValue }));

    const key = getStorageKey(id);
    localStorage.setItem(key, String(newValue));

    showNotification(`${id.replace(/-/g, " ")} ${newValue ? "enabled" : "disabled"}`);
  };

  const activateCloak = () => {
    document.title = "Google";
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "https://www.google.com/favicon.ico";
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "shortcut icon";
      newLink.href = "https://www.google.com/favicon.ico";
      document.head.appendChild(newLink);
    }
    showNotification("Cloak activated!");
  };

  const handleKillSwitch = () => {
    if (confirm("WARNING: This will permanently disable the site for this browser. Continue?")) {
      localStorage.setItem("site_status", "bricked");
      window.location.reload();
    }
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
        SETTINGS
      </h1>

      {notification && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full gradient-btn text-primary-foreground font-semibold shadow-lg glow animate-in fade-in slide-in-from-top-4 duration-300">
          {notification}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {settingsConfig.map((setting) => (
          <div
            key={setting.id}
            className="bg-card rounded-3xl border border-border p-8 flex flex-col items-center gap-4 text-center hover:border-primary/50 transition-colors"
          >
            <h3 className="text-xl font-bold text-foreground">{setting.title}</h3>
            <p className="text-sm text-muted-foreground -mt-2 max-w-[250px]">
              {setting.description}
            </p>

            {setting.type === "button" ? (
              <button
                onClick={activateCloak}
                className="px-8 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors mt-auto"
              >
                Activate
              </button>
            ) : setting.type === "danger-button" ? (
              <button
                onClick={handleKillSwitch}
                className="px-8 py-3 rounded-lg font-semibold border-2 border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition-colors mt-auto"
              >
                Destroy
              </button>
            ) : (
              <button
                onClick={() => handleToggle(setting.id)}
                className={`toggle-switch mt-auto ${toggles[setting.id] ? "active" : ""}`}
                aria-label={`Toggle ${setting.title}`}
              >
                <div className="toggle-knob" />
              </button>
            )}
          </div>
        ))}
      </div>

      <footer className="text-center mt-16 text-muted-foreground text-sm">
        © 2026 Carey Network
      </footer>
    </main>
  );
}
