'use client'

import Image from "next/image"
import moon from "@/img/moon_3.svg"
import sun from "@/img/sun_3.svg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Reveal from "./reveal"

export default function LightSwitch() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Reveal>
      <button 
      className="w-6 h-6">
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
    <button
    aria-label={theme === 'light' ? 'Toggle Dark Mode' : 'Toggle Light Mode'}
    type="button"
    className="ml-[3rem] w-6 h-6"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'light' ?
        <Image
        src={sun}
        alt="Light"
        className="object-contain"
        priority={true}
        /> :
        <Image 
        src={moon}
        alt="Dark"
        className="object-contain"
        priority={true}
        />
      }
    </button>
  )
}