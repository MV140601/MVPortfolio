import React from 'react'
import { motion } from 'framer-motion'

const AnimatedL2 = () => {
    const lines = Array.from({ length: 10 }) // 10 random lines
  
    return (
      <div className="w-full h-full flex flex-col absolute justify-start items-start overflow-hidden opacity-10">
        {lines.map((_, index) => {
          const randomWidth = Math.floor(Math.random() * 150) + 50 // width: 50–200px
          const randomStartX = Math.floor(Math.random() * 200)     // initial X
          const randomDuration = Math.random() * 3 + 2             // duration: 2–5s
          const randomDelay = Math.random() * 3                    // delay: 0–3s
          const randomTop = Math.floor(Math.random() * 90) + '%'   // height position
          
          return (
            <motion.span
              key={index}
              className="absolute border border-amber-50 bg-amber-50"
              style={{ top: randomTop }}
              initial={{ width: randomWidth, x: randomStartX }}
              animate={{ x: '100vw' }}
              transition={{
                duration: randomDuration,
                delay: randomDelay,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'linear',
              }}
            />
          )
        })}
      </div>
    )
  }

export default AnimatedL2