import { IntroLoader } from "@/components/intro-loader"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProcessStepper } from "@/components/process-stepper"
import { FeatureGrid } from "@/components/feature-grid"
import { StandardsSection } from "@/components/standards-section"
import { FaqSection } from "@/components/faq-section"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <>
      <IntroLoader />
      <SiteHeader />
      <main>
        <Hero />
        <ProcessStepper />
        <FeatureGrid />
        <StandardsSection />
        <FaqSection />
        <CtaFooter />
      </main>
    </>
  )
}
