"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      quote:
        "Seidar has completely transformed how we build on Stellar. We've cut our development time in half by using pre-built components.",
      author: "Alex Chen",
      role: "CTO, StellarPay",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a component creator, I'm now earning passive income from my expertise. The smart contract integration makes payments seamless.",
      author: "Maria Rodriguez",
      role: "Lead Developer, BlockchainLabs",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The quality and security of components on Seidar is impressive. We trust the platform for our enterprise blockchain solutions.",
      author: "James Wilson",
      role: "VP Engineering, Enterprise Solutions Inc.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -top-12 left-0 text-[#6c3baa] opacity-20">
              <Quote size={80} />
            </div>

            <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                >
                  <blockquote className="text-xl md:text-2xl text-gray-200 mb-8">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full bg-[#6c3baa]/20"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-[#Fa5478]" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16 hidden md:block">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-16 hidden md:block">
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
