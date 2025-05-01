"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/logos/seidar-logo-white.svg"
                alt="Seidar Logo"
                width={150}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Component Marketplace for Stellar Developers
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={18} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
              <SocialLink href="mailto:info@seidar.io" icon={<Mail size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Platform</h3>
            <ul className="space-y-2 sm:space-y-4">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#components">Components</FooterLink>
              <FooterLink href="#how-it-works">How It Works</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
            <ul className="space-y-2 sm:space-y-4">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">API Reference</FooterLink>
              <FooterLink href="#">Tutorials</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-4">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Press Kit</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 mt-6 sm:mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Seidar. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            <FooterLink href="#" className="text-xs sm:text-sm">
              Terms of Service
            </FooterLink>
            <FooterLink href="#" className="text-xs sm:text-sm">
              Privacy Policy
            </FooterLink>
            <FooterLink href="#" className="text-xs sm:text-sm">
              Cookie Policy
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
    >
      {icon}
    </a>
  )
}

function FooterLink({
  href,
  className = "",
  children,
}: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className={`text-gray-400 hover:text-white transition-colors duration-300 ${className}`}>
        {children}
      </Link>
    </li>
  )
}
