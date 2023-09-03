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
    return <button 
    className="w-fit h-fit mx-28"
    ><Reveal>
      <Image
              src={sun}
              alt="Light"
              width={38}
              height={38}
              className="scale-0"
              priority={true}
              />
    </Reveal>   
          </button>
  }
  return (
    <button
    aria-label="Toggle Dark Mode"
    type="button"
    className="w-fit h-fit mx-32"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <Reveal>
        {theme === 'light' ?
        <Image
        src={sun}
        alt="Light"
        width={38}
        height={38}
        className=""
        priority={true}
        /> :
        <Image 
        src={moon}
        alt="Dark"
        width={38}
        className=""
        priority={true}
        />
      }
      </Reveal>
      
    </button>
  )
}