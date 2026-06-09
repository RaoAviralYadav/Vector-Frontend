export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 pb-24 pt-32 text-center md:px-10"
    >
      <h1 className="max-w-[1100px] text-balance font-medium leading-[0.92] tracking-[-0.04em] text-foreground text-[clamp(3.25rem,11vw,6rem)]">
        The New Standard
        <br />
        in Staffing
      </h1>

      <p className="mt-8 max-w-[640px] text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
        AI driven speed. Expert curation.
        <br className="hidden sm:block" /> We mobilize verified crews to protect your schedule and your bottom line in
        high-consequence environments.
      </p>

      <a
        href="#process"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 border-b border-foreground/50 pb-1 text-[11px] font-normal uppercase tracking-[0.06em] text-foreground/80 transition-colors hover:text-foreground"
      >
        Scroll to discover our process
      </a>
    </section>
  )
}
