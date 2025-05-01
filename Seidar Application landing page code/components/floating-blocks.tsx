"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Package, Code, Wallet } from "lucide-react"

export function FloatingBlocks() {
  const [blocks, setBlocks] = useState<Block[]>([])

  useEffect(() => {
    // Create blocks only on client-side
    const blockCount = 8
    const newBlocks: Block[] = []

    const icons = [
      <Package key="package" className="h-6 w-6 text-[#00bb77]" />,
      <Code key="code" className="h-6 w-6 text-[#Fa5478]" />,
      <Wallet key="wallet" className="h-6 w-6 text-[#d7e464]" />,
    ]

    for (let i = 0; i < blockCount; i++) {
      newBlocks.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 40,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        icon: icons[Math.floor(Math.random() * icons.length)],
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    setBlocks(newBlocks)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className="absolute rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center"
          style={{
            width: block.size,
            height: block.size,
            opacity: block.opacity,
            left: `${block.x}%`,
            top: `${block.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            rotate: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: block.duration,
            delay: block.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {block.icon}
        </motion.div>
      ))}
    </div>
  )
}

interface Block {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  icon: React.ReactNode
  opacity: number
}
