'use client'

import styles from "@/components/text-type.module.css"
import { Typewriter } from "react-simple-typewriter"

export default function TextType() {
  return (
      <div className="xsm:text-4xl xsm:text-center  xsm:w-[16.5rem] xsm:h-[5rem] text-emerald-400 2xl:text-left 2xl:text-6xl 2xl:w-[40rem] 2xl:h-fit">
        <Typewriter 
          words={['Full Stack Developer', 'Codeoholic', 'Workoholic', 'Achievement Hunter', 'Full Stack Developer']}
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