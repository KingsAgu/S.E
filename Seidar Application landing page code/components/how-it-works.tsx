"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      number: "01",
      title: "Browse & Select Components",
      description:
        "Developers browse the marketplace to find components that match their needs, whether downloadable packages or live API services.",
      color: "#6c3baa",
    },
    {
      number: "02",
      title: "Payment Processing",
      description:
        "Pay with crypto via WalletConnect or fiat (converted to XLM through Stellar Anchors). Soroban smart contracts handle the transaction.",
      color: "#Fa5478",
    },
    {
      number: "03",
      title: "Component Access",
      description:
        "For downloadable components, get immediate access to download. For Live API components, receive API credentials for the Seidar unified API gateway.",
      color: "#00bb77",
    },
    {
      number: "04",
      title: "Integration & Usage",
      description:
        "Integrate components into your project. For Live API components, usage is tracked for subscription billing.",
      color: "#d7e464",
    },
    {
      number: "05",
      title: "Revenue Distribution",
      description:
        "Component creators receive payment automatically through Soroban smart contracts to their Stellar wallets.",
      color: "#6c3baa",
    },
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            How <span className="text-[#d7e464]">Seidar</span> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A seamless process from component discovery to integration
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6c3baa] via-[#Fa5478] to-[#00bb77] transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-10 sm:space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center md:gap-6 lg:gap-8`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right md:pr-6 lg:pr-8" : "md:text-left md:pl-6 lg:pl-8"
                  } mb-4 md:mb-0`}
                >
                  <div
                    className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{step.description}</p>
                </div>

                <div className="md:w-8 relative flex justify-center">
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full z-10 flex items-center justify-center"
                    style={{ backgroundColor: step.color }}
                  >
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
