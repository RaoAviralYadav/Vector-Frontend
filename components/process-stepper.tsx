"use client"

import { useEffect, useRef, useState } from "react"

const STEPS = [
  {
    n: "01",
    title: "Activation, simplified",
    body: "One call triggers mobilization. Your requirements: craft, count, and start date route directly to our verified crews. No hand-offs. No escalations. Just boots on the ground in minutes.",
  },
  {
    n: "02",
    title: "Cleared to count",
    body: "Our team handles all screening and verification before dispatch. Compliance, background, certifications, and fitness-for-duty — we enforce a zero-fail model to guarantee every worker clears the gate on Day 1.",
  },
  {
    n: "03",
    title: "Proven field match",
    body: "We don't just provide available workers. We deploy proven crews. By filtering for past performance, role fit, and reliability, we deliver teams engineered for endurance — ensuring your project stays fully manned from first break to completion.",
  },
  {
    n: "04",
    title: "Seamless arrival",
    body: 'We manage the "last mile" of mobilization. Every crew arrives site-ready with finalized reporting details. With real-time arrival monitoring and active coordination, we ensure your shift starts on time, even when field conditions shift.',
  },
]

export function ProcessStepper() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      // progress through the sticky scroll range (0..1)
      const progress = Math.min(Math.max(-rect.top / total, 0), 0.999)
      setActive(Math.floor(progress * STEPS.length))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="process" ref={sectionRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 flex h-screen items-end overflow-hidden px-5 pb-20 md:items-center md:px-10 md:pb-0">
        <div className="w-full max-w-[640px]">
          {STEPS.map((step, i) => {
            const isActive = i === active
            return (
              <div key={step.n} className="relative">
                <button
                  className="flex w-full items-center gap-5 py-4 text-left"
                  onClick={() => setActive(i)}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-sm font-medium transition-colors duration-500 ${
                      isActive ? "bg-haze text-ink shadow-sm" : "text-foreground"
                    }`}
                  >
                    {step.n}
                  </span>
                  <span
                    className={`font-medium tracking-tight transition-all duration-500 ${
                      isActive ? "text-2xl text-foreground md:text-3xl" : "text-base text-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-[26px] border-l border-foreground/30 pb-6 pl-7 pt-2">
                      <p className="max-w-md text-pretty text-base leading-relaxed text-foreground/60">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
