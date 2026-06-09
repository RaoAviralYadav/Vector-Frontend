"use client"

import { useState } from "react"

const FAQS = [
  {
    q: "How fast can crews be mobilized?",
    a: "We move at the speed of your schedule. Our platform maintains a deep network of verified industrial craft, eliminating the weeks wasted in traditional hiring cycles. One call activates our mobilization engine to source and deploy precision-matched crews in hours, not days, ensuring your most critical paths remain fully manned.",
  },
  {
    q: "How do you handle compliance & background checks?",
    a: "We use a Zero-Fail Compliance model. Before a worker is even cleared for dispatch, our system automates the verification of background checks, drug testing (FFD), and site-specific certifications including nuclear grade requirements. We block access to the gate for anyone who isn't 100% cleared, ensuring your badging office has zero headaches on Day 1.",
  },
  {
    q: "What is the coverage during outages?",
    a: 'We provide 24/7 active coordination to match the 24/7 nature of an outage. Our coverage spans the full range of outage craft: from general laborers and painters to specialized repairs and schedulers. More importantly, we manage the "last mile" of arrival, monitoring deployments in real-time to ensure your night and day shifts remain fully manned, even when field conditions shift.',
  },
  {
    q: "How does Vectr differ from traditional staffing vendors?",
    a: "Traditional vendors are reactive; Vectr is an operational engine. While legacy agencies rely on manual resumes and 'available' warm bodies, we use intelligent workflows and expert curation to deliver field-validated precision. We don't just find people who are looking for work; we deploy proven crews that are engineered for the high-tempo grind of a critical path environment.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#f4f6f8] px-5 pb-32 md:px-10">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-x-20 gap-y-12 border-t border-foreground/10 pt-20 lg:grid-cols-2">
        <h2 className="text-balance font-medium leading-[1.02] tracking-[-0.035em] text-foreground text-[clamp(2.25rem,4.5vw,3.75rem)]">
          How we work and how we deliver industrial-grade staffing.
        </h2>

        <div>
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-b border-foreground/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-normal text-foreground md:text-xl">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 15l6-6 6 6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 text-pretty text-base leading-relaxed text-foreground/60">{item.a}</p>
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
