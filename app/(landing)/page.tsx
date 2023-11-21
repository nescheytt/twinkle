import { LandingContent } from "@/components/landing-content"
import { LandingHero } from "@/components/landing-hero"
import { LandingNavbar } from "@/components/landing-navbar"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}
