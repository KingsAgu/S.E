"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Code, Briefcase } from "lucide-react"

export default function Ecosystem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const audiences = [
    {
      icon: <Code className="h-10 w-10 text-[#Fa5478]" />,
      title: "Component Creators",
      description:
        "Developers with expertise in specific areas who can create reusable components and earn ongoing revenue.",
      benefits: [
        "Monetize your expertise",
        "Build once, earn continuously",
        "Reach the entire Stellar ecosystem",
        "Focus on what you do best",
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-[#6c3baa]" />,
      title: "Integrators",
      description: "Teams building applications on Stellar who need to accelerate their development process.",
      benefits: [
        "Reduce development time",
        "Access specialized expertise",
        "Scale with confidence",
        "Focus on your core product",
      ],
    },
    {
      icon: <Briefcase className="h-10 w-10 text-[#00bb77]" />,
      title: "Enterprise Users",
      description: "Organizations requiring reliable, maintained components with SLAs and professional support.",
      benefits: [
        "Enterprise-grade reliability",
        "Dedicated support options",
        "Compliance and security",
        "Predictable pricing",
      ],
    },
  ]

  return (
    <section id="ecosystem" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ecosystem <span className="text-[#6c3baa]">Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Seidar creates value for everyone in the Stellar ecosystem
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="rounded-full bg-white/10 w-16 h-16 flex items-center justify-center mb-6">
                {audience.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{audience.title}</h3>
              <p className="text-gray-300 mb-6">{audience.description}</p>

              <ul className="space-y-3 mb-8">
                {audience.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full border-white/20 hover:bg-white/10 shadow-md hover:shadow-lg hover:border-white/40 hover:shadow-white/10 transition-all duration-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
