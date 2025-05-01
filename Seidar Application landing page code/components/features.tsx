"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, Code2, Coins, Download, Key, Lock, Search, Shield, Wallet } from "lucide-react"

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-[#Fa5478]" />,
      title: "Accelerated Development",
      description: "Save time by using ready-made components instead of building common features from scratch.",
    },
    {
      icon: <Coins className="h-5 w-5 sm:h-6 sm:w-6 text-[#d7e464]" />,
      title: "Monetize Your Expertise",
      description: "Component creators earn revenue through one-time payments or usage-based subscriptions.",
    },
    {
      icon: <Key className="h-5 w-5 sm:h-6 sm:w-6 text-[#6c3baa]" />,
      title: "Unified API Access",
      description: "Access all live components through a single Seidar-issued API key for simplified integration.",
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-[#00bb77]" />,
      title: "Smart Contract Payments",
      description: "Soroban smart contracts ensure automatic and transparent revenue sharing among creators.",
    },
    {
      icon: <Wallet className="h-5 w-5 sm:h-6 sm:w-6 text-[#Fa5478]" />,
      title: "Integrated Wallet System",
      description: "Component creators receive a Stellar wallet for revenue or can import existing wallets.",
    },
    {
      icon: <Download className="h-5 w-5 sm:h-6 sm:w-6 text-[#6c3baa]" />,
      title: "Flexible Payment Options",
      description: "Pay with crypto via WalletConnect or fiat (converted to XLM through Stellar Anchors).",
    },
    {
      icon: <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#d7e464]" />,
      title: "Versioned Components",
      description: "Components are versioned to ensure backward compatibility and seamless updates.",
    },
    {
      icon: <Search className="h-5 w-5 sm:h-6 sm:w-6 text-[#00bb77]" />,
      title: "Easy Discovery",
      description: "Find the exact components you need with intuitive search and filtering tools.",
    },
    {
      icon: <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-[#Fa5478]" />,
      title: "Security Validated",
      description: "All components undergo security scanning and compatibility testing.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            Why Choose <span className="text-[#Fa5478]">Seidar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Accelerate Stellar ecosystem growth by making development faster and more accessible
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 hover:border-[#6c3baa]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#6c3baa]/10"
            >
              <div className="rounded-full bg-white/10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
