"use client"

import { motion } from "motion/react"

export default function About() {
    return (
        <div className='text-[#2d261d] flex flex-col gap-y-6'>
            <motion.h1
                initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5 }}
                className='text-2xl'>Leonardo Nascimento</motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5 }}
                className='mb-10 w-[300px]'>Full Stack Developer who loves building beautiful, fast, and visually appealing web experiences that feel great to use.</motion.p>
        </div>
    )
}
