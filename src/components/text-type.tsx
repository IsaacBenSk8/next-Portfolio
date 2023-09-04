'use client'

import styles from "@/components/text-type.module.css"
import { Typewriter } from "react-simple-typewriter"

export default function TextType() {
  return (
      <div className="xsm:text-4xl xsm:text-center xsm:w-[16.5rem] xsm:h-[5rem] text-emerald-400">
        <Typewriter 
          words={['Full Stack Developer', 'Codeoholic', 'Gamer', 'Achievement Hunter', 'Full Stack Developer']}
          loop={1}
          cursor={true}
          cursorStyle={'|'}
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
  )
}