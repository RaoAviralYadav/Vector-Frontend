import Image from "next/image"

export function StandardsSection() {
  return (
    <section
      id="industries"
      className="bg-[#f4f6f8] px-5 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/industrial-crew.png"
            alt="Industrial crew in hard hats and orange safety vests at a refinery"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <h2 className="text-balance font-medium leading-[0.98] tracking-[-0.035em] text-foreground text-[clamp(2.5rem,5.5vw,5rem)]">
            Nuclear-grade standards across every site.
          </h2>
          <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-foreground/70">
            Modeled on nuclear-grade environments, our process enforces badge compliance, protected timelines and
            zero-error tolerance.
          </p>
          <a
            href="#industries"
            className="mt-10 inline-flex rounded-full bg-ink px-7 py-4 text-xs font-medium uppercase tracking-[0.06em] text-haze transition-opacity hover:opacity-90"
          >
            Explore Our Industries
          </a>
        </div>
      </div>
    </section>
  )
}
