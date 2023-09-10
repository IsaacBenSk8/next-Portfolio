'use client'

import Image from "next/image"
import moon from "@/img/moon_3.svg"
import sun from "@/img/sun_3.svg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, useAnimation, useCycle } from "framer-motion"
import Reveal from "./reveal"

export default function LightSwitch() {
  const {theme, setTheme} = useTheme();
  // const [darkMode, toggleDarkMode] = useCycle(false, true);
  const [mounted, setMounted] = useState(false);
  const mainControls = useAnimation();

  // useEffect(() => {
  //   if (darkMode) {
  //     mainControls.start("open");
  //   }
  // }, [darkMode, mainControls]);


  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return <Reveal className="flex justify-center">
      <button 
      className="ml-[1rem] w-6 h-6 2xl:m-0">
              <Image
              src={sun}
              alt="Light"
              className="scale-0"
              priority={true}
              />
      </button>
      </Reveal>
      
  }
  return (
    <Reveal className="flex justify-center relative z-10">
    <button
    aria-label={theme === 'light' ? 'Activate Dark Mode' : 'Activate Light Mode'}
    title={theme === 'light' ? 'Activate Dark Mode' : 'Activate Light Mode'}
    type="button"
    className="ml-[1rem] w-6 h-6 2xl:ml-20"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'light' ?
        // <motion.div
        // variants={{
        //   open: {
        //     scale: 1,
        //     rotate: 360,
        //   },
        //   close: {
        //     scale: 0,
        //     rotate: -360,
        //   }
        // }}
        // initial="close"
        // animate={mainControls}
        // exit="close">
          <Image
          src={sun}
          alt="Light"
          className="w-fit h-fit"
          priority={true}
          /> 
        // </motion.div>
        :
        <motion.div>
          <Image 
          src={moon}
          alt="Dark"
          className="w-fit h-fit"
          priority={true}
          />
        </motion.div>
      }
    </button>
    </Reveal>
  )
}