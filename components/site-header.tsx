"use client"

import { useEffect, useState } from "react"
import { VectrWordmark } from "./vectr-logo"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 md:px-10">
        {/* Left nav (desktop) */}
        <nav className="hidden flex-1 items-center gap-2 md:flex">
          <a
            href="#industries"
            className="group relative -ml-3 overflow-hidden rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.06em] text-foreground"
          >
            <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-background">Our Industries</span>
          </a>
          <a
            href="#mission"
            className="group relative overflow-hidden rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.06em] text-foreground"
          >
            <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-background">Our Mission</span>
          </a>
        </nav>

        {/* Wordmark */}
        <a href="#top" className="md:flex-1 md:text-center">
          <VectrWordmark className="text-xl text-foreground md:text-2xl" />
        </a>

        {/* Right actions (desktop) */}
        <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
          <a
            href="#apply"
            className="group relative overflow-hidden rounded-full bg-foreground/10 px-6 py-3 text-xs font-medium uppercase tracking-[0.06em] text-foreground"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-background">Apply</span>
          </a>
          <a
            href="#apply"
            className="rounded-full bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.06em] text-haze transition-opacity hover:opacity-90"
          >
            Request Crews
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="relative z-50 flex h-6 w-8 flex-col justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-[2px] w-full bg-foreground transition-transform duration-300 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-foreground transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-foreground transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-background px-8 transition-all duration-300 md:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {[
          { label: "Our Industries", href: "#industries" },
          { label: "Our Mission", href: "#mission" },
          { label: "Apply", href: "#apply" },
          { label: "Request Crews", href: "#apply" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-3xl font-medium tracking-tight text-foreground"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}
