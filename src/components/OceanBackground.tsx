"use client";

import React, { useEffect, useState } from "react";

interface Bubble {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
}



export default function OceanBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

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

    </div>
  );
}
