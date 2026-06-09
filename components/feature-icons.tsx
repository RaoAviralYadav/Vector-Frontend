export function IconActivation({ className }: { className?: string }) {
  // isometric opening box / lightning activation
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path d="M50 58 18 40 50 22 82 40 50 58Z" />
      <path d="M18 40v18l32 18 32-18V40" />
      <path d="M50 58v18" />
      <path d="M40 30l-8 14 12-2-6 14 18-18-12 2 8-12-12 0Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconSelection({ className }: { className?: string }) {
  // isometric globe on stacked plates
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <circle cx="50" cy="40" r="18" />
      <ellipse cx="50" cy="40" rx="8" ry="18" />
      <path d="M32 40h36" />
      <path d="M50 58 24 70l26 12 26-12-26-12Z" />
      <path d="M50 70 30 78" opacity="0" />
    </svg>
  )
}

export function IconVerified({ className }: { className?: string }) {
  // isometric people group
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="40" cy="34" r="11" />
      <path d="M22 70c0-12 8-20 18-20s18 8 18 20l-18 6-18-6Z" />
      <circle cx="66" cy="40" r="8" />
      <path d="M54 70c0-9 6-15 12-15s12 6 12 15l-12 4-12-4Z" />
    </svg>
  )
}

export function IconOutcomes({ className }: { className?: string }) {
  // isometric stacked cards / documents
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <g transform="rotate(-12 50 50)">
        <rect x="28" y="26" width="44" height="48" rx="3" opacity="0.45" />
        <rect x="34" y="30" width="44" height="48" rx="3" opacity="0.7" />
        <rect x="40" y="34" width="44" height="48" rx="3" />
        <g fill="var(--background)">
          <rect x="46" y="44" width="32" height="3" rx="1.5" />
          <rect x="46" y="52" width="32" height="3" rx="1.5" />
          <rect x="46" y="60" width="22" height="3" rx="1.5" />
        </g>
      </g>
    </svg>
  )
}
