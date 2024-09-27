import { motion } from 'framer-motion'
import React from 'react'

export const MotionTitle = () => {
  return (
    <motion.h1
        className="text-center"
        initial={{opacity:0, scale:0.5}}
        animate={{ x:[50, 150, 0], opacity:1, scale:1 }}
        transition={{duration:2, delay:0.3}}
    >
    <h1 className="h">Our Menus</h1>
    </motion.h1>
  )
}

