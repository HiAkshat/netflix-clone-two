"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Tab({link, title}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Link className="flex items-center justify-center relative " href={link}>
        <motion.div initial={{
          scale: 0,
        }}

        animate={{
          scale: isHovered ? 1 : 0
        }}

        className="absolute z-[-1] w-[150%] h-[130%] bg-white rounded-full"></motion.div>
        <motion.span whileHover={{
          color: "#000000"
        }}
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`${!isHovered && "textShadow"} text-white`}>{title}</motion.span>
      </Link>
    </div>

  )
}
