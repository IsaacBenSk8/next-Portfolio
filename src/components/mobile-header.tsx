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
            <svg className="burguer" viewBox="0 0 24 24" width={24}>
              <rect className="line top" width={20} height={3} x={2} y={4} rx={2}></rect>
              <rect className="line middle" width={20} height={3} x={2} y={10} rx={2}></rect>
              <rect className="line bottom" width={20} height={3} x={2} y={16} rx={2}></rect>
            </svg>
          </button>
        </div>
      </Reveal>
    </header>
  );
}