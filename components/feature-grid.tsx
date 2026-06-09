"use client"

import { useEffect, useRef, useState } from "react"
import { IconActivation, IconSelection, IconVerified, IconOutcomes } from "./feature-icons"

const FEATURES = [
  {
    Icon: IconActivation,
    title: "Rapid Activation",
    body: "We believe speed is a skill. Our platform uses machine learning to turn staffing into instant logistics, deploying a precisely matched workforce the moment demand strikes.",
  },
  {
    Icon: IconSelection,
    title: "Rigorous Selection",
    body: "Geography is a core metric. Our engine uses AI to find and contact qualified talent within defined radii, securing top local contractors first, filtered for cost and skill.",
  },
  {
    Icon: IconVerified,
    title: "100% Verified Before Arrival",
    body: "We use a Zero-Trust verification model with secure API integrations to run automated background checks and drug testing, blocking dispatch access until fully cleared.",
  },
  {
    Icon: IconOutcomes,
    title: "Controlled Outcomes",
    body: "We guarantee controlled outcomes by managing staffing's biggest variables—cost and compliance—prioritizing local mobilization and automating safety for every dispatch.",
  },
]

export function FeatureGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="mission"
      ref={ref}
      className="bg-background px-5 py-28 md:px-10 md:py-40"
      style={{
        background: "linear-gradient(180deg, var(--haze) 0%, var(--haze) 35%, #f4f6f8 100%)",
      }}
    >
      <h2 className="max-w-[1100px] text-balance font-medium leading-[0.98] tracking-[-0.035em] text-foreground text-[clamp(2.25rem,6vw,5rem)]">
        Designed for today&apos;s operations, beyond legacy staffing workflows.
      </h2>

      <div className="mt-20 grid grid-cols-1 gap-px border-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`relative px-0 py-2 transition-all duration-700 ease-out lg:px-8 ${
              i > 0 ? "lg:border-l lg:border-foreground/10" : ""
            } ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: `${i * 160}ms` }}
          >
            <f.Icon className="h-16 w-16 text-foreground" />
            <h3 className="mt-10 text-xl font-medium tracking-tight text-foreground">{f.title}</h3>
            <p className="mt-4 max-w-xs text-pretty text-base leading-relaxed text-foreground/60">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
