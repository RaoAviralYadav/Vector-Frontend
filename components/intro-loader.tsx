"use client"

import { VectrMark } from "./vectr-logo"

export function IntroLoader() {
  return (
    <div
      className="intro-overlay pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background"
      aria-hidden="true"
    >
      {/* dotted orbital ellipses */}
      <div className="animate-spin-slow absolute" style={{ width: "min(120vw, 1300px)", aspectRatio: "1.8 / 1" }}>
        <div className="absolute inset-0 rounded-[50%] border border-dashed border-foreground/30" />
        <div className="absolute inset-0 rounded-[50%] border border-dashed border-foreground/30 -rotate-[18deg] scale-90" />
      </div>
      <VectrMark className="animate-intro-pulse relative h-12 w-12 text-electric" />
    </div>
  )
}
