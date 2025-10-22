"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Package, Wallet } from "lucide-react"
import { FloatingBlocks } from "@/components/floating-blocks"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FloatingBlocks />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Component Marketplace for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c3baa] via-[#Fa5478] to-[#d7e464]">
                  Stellar Developers
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl">
                Seidar provides developers with ready-made components—smart contract templates, UI tools, payment
                modules, and analytics—designed to speed up development in the Stellar ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#Fa5478] hover:bg-[#Fa5478]/80 text-white shadow-md hover:shadow-lg hover:shadow-[#Fa5478]/20 transition-all duration-300 w-full sm:w-auto text-base"
                >
                  Explore Components <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  className="bg-[#d7e464] hover:bg-[#d7e464]/80 text-[#1b1b1b] font-medium shadow-md hover:shadow-lg hover:shadow-[#d7e464]/20 transition-all duration-300 w-full sm:w-auto text-base"
                >
                  Become a Creator
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4"
            >
              <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                <Package className="h-6 w-6 sm:h-8 sm:w-8 text-[#00bb77] mb-2" />
                <span className="text-xs sm:text-sm font-medium">Downloadable Components</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                <Code className="h-6 w-6 sm:h-8 sm:w-8 text-[#Fa5478] mb-2" />
                <span className="text-xs sm:text-sm font-medium">Live API Components</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:w-1/2 mt-10 sm:mt-12 lg:mt-0 w-full"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6c3baa]/20 via-[#Fa5478]/20 to-[#00bb77]/20 rounded-lg blur-xl"></div>
              <div className="relative bg-[#1b1b1b]/80 border border-white/10 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#Fa5478]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#d7e464]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#00bb77]"></div>
                  </div>
                  <div className="ml-4 text-xs sm:text-sm text-gray-400">Component Marketplace</div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="p-3 sm:p-4 rounded bg-white/5 border border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-[#6c3baa]/30 flex items-center justify-center">
                        <Package className="h-4 w-4 sm:h-5 sm:w-5 text-[#6c3baa]" />
                      </div>
                      <div className="ml-3">
                        <div className="text-xs sm:text-sm font-medium">Stellar Wallet Connector</div>
                        <div className="text-xs text-gray-400">by StellarDevs</div>
                      </div>
                      <div className="ml-auto">
                        <Button
                          size="sm"
                          className="bg-[#00bb77] hover:bg-[#00bb77]/80 text-white shadow-md hover:shadow-lg hover:shadow-[#00bb77]/20 transition-all duration-300 text-xs px-2 sm:px-3 h-8"
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 rounded bg-white/5 border border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-[#Fa5478]/30 flex items-center justify-center">
                        <Code className="h-4 w-4 sm:h-5 sm:w-5 text-[#Fa5478]" />
                      </div>
                      <div className="ml-3">
                        <div className="text-xs sm:text-sm font-medium">Soroban Contract API</div>
                        <div className="text-xs text-gray-400">by BlockchainLabs</div>
                      </div>
                      <div className="ml-auto">
                        <Button
                          size="sm"
                          className="bg-[#00bb77] hover:bg-[#00bb77]/80 text-white shadow-md hover:shadow-lg hover:shadow-[#00bb77]/20 transition-all duration-300 text-xs px-2 sm:px-3 h-8"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 rounded bg-white/5 border border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-[#d7e464]/30 flex items-center justify-center">
                        <Wallet className="h-4 w-4 sm:h-5 sm:w-5 text-[#d7e464]" />
                      </div>
                      <div className="ml-3">
                        <div className="text-xs sm:text-sm font-medium">Payment Module</div>
                        <div className="text-xs text-gray-400">by PaymentSolutions</div>
                      </div>
                      <div className="ml-auto">
                        <Button
                          size="sm"
                          className="bg-[#00bb77] hover:bg-[#00bb77]/80 text-white shadow-md hover:shadow-lg hover:shadow-[#00bb77]/20 transition-all duration-300 text-xs px-2 sm:px-3 h-8"
                        >
                          Get Access
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
