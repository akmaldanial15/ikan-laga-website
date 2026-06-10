"use client";

import React, { useEffect, useState } from "react";

interface Bubble {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

interface Fish {
  id: number;
  top: string;
  scale: string;
  delay: string;
  duration: string;
  direction: "lr" | "rl";
}

export default function OceanBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [fishes, setFishes] = useState<Fish[]>([]);

  useEffect(() => {
    // Generate random bubble values to prevent hydration mismatches
    const tempBubbles: Bubble[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 12 + 6}px`,
      delay: `${Math.random() * 8}s`,
      duration: `${Math.random() * 15 + 10}s`,
    }));
    setBubbles(tempBubbles);

    // Generate random fish tracks
    const tempFishes: Fish[] = [
      { id: 1, top: "20%", scale: "0.45", delay: "0s", duration: "28s", direction: "lr" },
      { id: 2, top: "45%", scale: "0.6", delay: "8s", duration: "34s", direction: "rl" },
      { id: 3, top: "70%", scale: "0.35", delay: "4s", duration: "24s", direction: "lr" },
      { id: 4, top: "85%", scale: "0.55", delay: "15s", duration: "40s", direction: "rl" },
    ];
    setFishes(tempFishes);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Ambient swaying light rays at the top */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-primary/8 via-primary/2 to-transparent opacity-65 blur-3xl animate-[sway_12s_ease-in-out_infinite] origin-top" />

      {/* Floating Bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0 rounded-full border border-primary/25 bg-primary/5 shadow-[0_0_6px_rgba(0,229,255,0.1)] opacity-35 animate-[float-up_15s_linear_infinite]"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}

      {/* Glowing Fish Silhouettes */}
      {fishes.map((f) => (
        <div
          key={f.id}
          className={`absolute opacity-20 filter drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] ${
            f.direction === "lr" ? "animate-[swim-lr_30s_linear_infinite]" : "animate-[swim-rl_30s_linear_infinite]"
          }`}
          style={{
            top: f.top,
            transform: `scale(${f.scale})`,
            animationDelay: f.delay,
            animationDuration: f.duration,
          }}
        >
          {/* Detailed elegant wild betta fish SVG silhouette */}
          <svg
            width="120"
            height="50"
            viewBox="0 0 120 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary fill-current"
          >
            <path d="M15,25 C30,12 55,15 75,22 C85,25 95,20 100,16 C95,25 98,32 105,38 C90,34 85,28 75,26 C55,30 30,35 15,25 Z" />
            {/* Top dorsal fin */}
            <path d="M40,16 Q58,-2 72,12 Q60,16 40,16 Z" opacity="0.85" />
            {/* Elegant long flowing tail fin of wild betta */}
            <path d="M100,16 C110,8 122,2 114,22 C125,28 120,44 105,38 C102,34 98,28 100,16 Z" opacity="0.9" />
            {/* Ventral flowing fin */}
            <path d="M45,26 Q60,45 78,35 Q65,28 45,26 Z" opacity="0.8" />
            {/* Pectoral tiny fin */}
            <path d="M28,26 C31,29 34,35 32,38 C30,35 28,30 28,26 Z" opacity="0.95" />
          </svg>
        </div>
      ))}
    </div>
  );
}
