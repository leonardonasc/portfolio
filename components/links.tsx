"use client"
import Link from 'next/link'
import { motion } from "motion/react"
import ReactLenis from 'lenis/react'


export default function Links() {
    return (
        <div className="flex flex-col gap-y-6  text-[#2d261d] text-6xl md:text-9xl ">
            <ReactLenis root>
                <section className='sticky top-1/4 flex flex-col gap-y-6'>
                    <motion.span
                        initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >SERVICES</motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >CONTACT</motion.span>
                </section>
            </ReactLenis>
        </div>
    )
}

