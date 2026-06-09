export function VectrMark({ className }: { className?: string }) {
  // Pixel-arrow mark used in the intro loader and small contexts
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 18h18v4l8 6-8 6v4H2v-8h12l4-2-4-2H2z" />
      <rect x="30" y="6" width="7" height="7" />
      <rect x="38" y="20" width="7" height="7" />
      <rect x="30" y="35" width="7" height="7" />
      <rect x="14" y="40" width="7" height="7" />
    </svg>
  )
}

export function VectrWordmark({ className }: { className?: string }) {
  return (
    <span
      className={`font-sans font-black tracking-tight ${className ?? ''}`}
      style={{ letterSpacing: '0.04em' }}
    >
      VECTR
    </span>
  )
}
