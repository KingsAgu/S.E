"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1b1b1b]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/seidar-logo-white.svg"
                alt="Seidar Logo"
                width={180}
                height={48}
                className="h-12 sm:h-14 w-auto drop-shadow-lg mex"
                style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))" }}
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how-it-works">How It Works</NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-[#Fa5478] hover:bg-[#Fa5478]/80 text-white shadow-md hover:shadow-lg hover:shadow-[#Fa5478]/20 transition-all duration-300"
              onClick={() => (window.location.href = "#waitlist")}
            >
              Join the Waitlist
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#Fa5478] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#1b1b1b]/95 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>
              Features
            </MobileNavLink>
            <MobileNavLink href="#how-it-works" onClick={() => setIsOpen(false)}>
              How It Works
            </MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-[#6c3baa]/30">
            <div className="flex items-center px-5 space-y-3 flex-col">
              <Button
                className="w-full bg-[#Fa5478] hover:bg-[#Fa5478]/80 text-white shadow-md hover:shadow-lg hover:shadow-[#Fa5478]/20 transition-all duration-300"
                onClick={() => {
                  setIsOpen(false)
                  window.location.href = "#waitlist"
                }}
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#Fa5478] transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-[#6c3baa]/20 rounded-md transition-colors duration-300"
    >
      {children}
    </Link>
  )
}
