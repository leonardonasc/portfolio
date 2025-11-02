"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"


export default function Links() {
    return (
        <div className="flex flex-col gap-y-6  text-[#2d261d] text-6xl md:text-9xl ">
            <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >ABOUT</motion.span>
            <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >CONTACT</motion.span>
        </div>
    )
}

