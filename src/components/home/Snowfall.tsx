"use client";

import React, { useState, useEffect, useRef } from "react";

/* ---------------- TYPES ---------------- */

type Flake = {
  key: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
  kind: "dot" | "dendrite";
};

type CSSVars = React.CSSProperties & {
  "--drift"?: string;
  "--pageHeight"?: string;
};

/* ---------------- HELPERS ---------------- */

const createFlakes = (): Flake[] => {
  const total = 220;

  return Array.from({ length: total }).map((_, index) => ({
    key: index,
    left: Math.random() * 100,
    size: 6 + Math.random() * 10,
    opacity: 0.4 + Math.random() * 0.3,
    duration: 36 + Math.random() * 18,
    delay: Math.random() * -20,
    drift: -24 + Math.random() * 48,
    kind: Math.random() > 0.5 ? "dendrite" : "dot",
  }));
};

/* ---------------- COMPONENT ---------------- */

const Snowfall: React.FC = () => {
  const [flakes] = useState<Flake[]>(() => createFlakes());
  const containerRef = useRef<HTMLDivElement>(null);

  /* --------- TRACK PAGE HEIGHT --------- */

  useEffect(() => {
    const updateHeight = () => {
      const height = document.documentElement.scrollHeight;
      containerRef.current?.style.setProperty(
        "--pageHeight",
        `${height + 200}px`
      );
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute top-0 left-0 w-full z-60 overflow-hidden"
      aria-hidden="true"
      style={{ height: "var(--pageHeight)" }}
    >
      {/* Animations */}
      <style jsx>{`
        @keyframes snow-fall {
          0% {
            transform: translate3d(0, -100px, 0);
          }
          100% {
            transform: translate3d(
              var(--drift, 0px),
              var(--pageHeight, 200vh),
              0
            );
          }
        }

        @keyframes snow-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {flakes.map((flake) => {
        const style: CSSVars = {
          left: `${flake.left}%`,
          top: "0px",
          opacity: flake.opacity,
          animation: `snow-fall ${flake.duration}s linear ${flake.delay}s infinite`,
          "--drift": `${flake.drift}px`,
        };

        if (flake.kind === "dendrite") {
          return (
            <span key={flake.key} className="absolute" style={style}>
              <svg
                className="block text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                width={flake.size * 3.2}
                height={flake.size * 3.2}
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeOpacity="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  animation: `snow-spin ${
                    flake.duration * 1.4
                  }s linear infinite`,
                }}
              >
                <path d="M16 3v26M16 16l8-8M16 16l-8-8M16 16l8 8M16 16l-8 8" />
                <path d="M16 8l2.5-2.5M16 8l-2.5-2.5M16 24l2.5 2.5M16 24l-2.5 2.5" />
                <path d="M21 11l3-1M21 11l1-3M11 21l-3 1M11 21l-1 3" />
                <path d="M21 21l3 1M21 21l1 3M11 11l-3-1M11 11l-1-3" />
              </svg>
            </span>
          );
        }

        return (
          <span
            key={flake.key}
            className="absolute rounded-full bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.4)]"
            style={{
              ...style,
              width: flake.size,
              height: flake.size,
            }}
          />
        );
      })}
    </div>
  );
};

export default Snowfall;
