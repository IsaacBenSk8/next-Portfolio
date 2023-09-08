'use client'

import LightSwitch from './light-switch';
import Reveal from './reveal';
import Link from 'next/link';
import { useState } from 'react';
// import styles from '@/components/header.module.css'

export default function MobileHeader() {

  const [isActive, setIsActive] = useState(false);

  return (
    <header className='anima z-[4] flex flex-row items-center justify-center xsm:w-full  xsm:space-x-32 py-4'>
      <Reveal>
        <Link 
        href="#homeSection"
        scroll={true}>
          <h1 className='select-none xsm:text-3xl w-fit h-fit font-semibold'>if(C)</h1>
        </Link>
      </Reveal>
      <Reveal>
        <div className='flex flex-row items-center space-x-4'>
          <LightSwitch />
          {/* <button onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </button> */}
          <button onClick={() => {setIsActive(!isActive)}} className="button-one" aria-controls="primary-navigation" aria-expanded={isActive ? "true" : "false"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="burger" viewBox="0 0 24 24" width={24}>
              <line className="line top" x1="2" x2="22" y1="6" y2="6" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}>
              </line>
              <line className="line middle" x1="2" x2="22" y1="12" y2="12" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}></line>
              <line className="line bottom" x1="22" x2="2" y1="18" y2="18" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}></line>
            </svg>
          </button>
        </div>
      </Reveal>
    </header>
  );
}