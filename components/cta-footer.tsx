export function CtaFooter() {
  return (
    <footer id="apply" className="bg-ink text-haze">
      {/* CTA */}
      <div className="flex min-h-screen flex-col justify-center px-5 pt-32 md:px-10">
        <h2 className="max-w-[1200px] text-balance font-medium leading-[0.95] tracking-[-0.035em] text-haze text-[clamp(2.5rem,7vw,6rem)]">
          Staff your outage with fast response, and crews you can rely on.
        </h2>
        <a
          href="#top"
          className="mt-10 inline-flex w-fit rounded-full bg-haze px-7 py-4 text-xs font-medium uppercase tracking-[0.06em] text-ink transition-opacity hover:opacity-90"
        >
          Request Crews
        </a>
      </div>

      {/* nav blocks */}
      <div className="grid grid-cols-1 border-t border-haze/15 md:grid-cols-3">
        {[
          { label: "Our Industries", href: "#industries" },
          { label: "Our Mission", href: "#mission" },
          { label: "Apply", href: "#apply" },
        ].map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className={`group relative isolate flex items-center justify-between overflow-hidden px-6 py-12 md:px-12 ${
              i > 0 ? "border-t border-haze/15 md:border-l md:border-t-0" : ""
            }`}
          >
            {/* directional fill: sweeps in left to right on hover, retracts right to left on leave */}
            <span
              aria-hidden
              className="absolute inset-0 -z-10 origin-left scale-x-0 bg-haze transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100"
            />
            <span className="text-3xl font-medium tracking-tight text-haze transition-colors duration-300 group-hover:text-ink md:text-4xl">
              {item.label}
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 text-electric transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        ))}
      </div>

      {/* giant wordmark */}
      <div className="overflow-hidden px-3 pt-10">
        <div
          className="select-none text-center font-black leading-none tracking-tight text-haze"
          style={{ fontSize: "clamp(6rem, 23vw, 22rem)", letterSpacing: "0.02em" }}
        >
          VECTR
        </div>
      </div>

      {/* bottom bar */}
      <div className="flex flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-haze/60 md:flex-row md:px-10">
        <span>© 2026 Vectr, Inc.</span>
        <div className="flex items-center gap-8">
          <a href="#" className="transition-colors hover:text-haze">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-haze">
            ToS
          </a>
          <span>Made by Utsubo</span>
        </div>
      </div>
    </footer>
  )
}
