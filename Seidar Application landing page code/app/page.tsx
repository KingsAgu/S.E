import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Features from "@/components/features"
import ComponentTypes from "@/components/component-types"
import HowItWorks from "@/components/how-it-works"
import Waitlist from "@/components/waitlist"
import Footer from "@/components/footer"
import { StarField } from "@/components/star-field"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1b1b1b] text-white overflow-hidden">
      {/* Background animation */}
      <div className="fixed inset-0 z-0">
        <StarField />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <ComponentTypes />
        <HowItWorks />
        <Waitlist />
        <Footer />
      </div>
    </div>
  )
}
