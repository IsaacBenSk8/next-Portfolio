'use client'

import LightSwitch from './light-switch';
import Reveal from './reveal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MobileHeader() {
  const navLinks = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
  const [isActive, setIsActive] = useState(false);

  return (
      <header className='anima sticky top-0 z-10 inset-x-0 flex flex-row items-center justify-between xsm:w-full py-4'>
          <Link
          href="#homeSection"
          scroll={true}>
            <Reveal className="">
              <h1 className='select-none xsm:text-3xl xsm:ml-[2rem] w-fit h-fit font-semibold'>if(C)</h1>
            </Reveal>
          </Link>
          <div className='flex flex-row xsm:mr-[2rem] w-fit'>
            <LightSwitch />
              <button onClick={() => {setIsActive(!isActive)}} className="xl:hidden button-one relative ml-4" aria-controls="primary-navigation" aria-expanded={isActive ? "true" : "false"}>
                <Reveal className="">
                  <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10" viewBox="0 0 24 24" width={24}>
                    <line className="line top" x1="2" x2="22" y1="6" y2="6" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}>
                    </line>
                    <line className="line middle" x1="2" x2="22" y1="12" y2="12" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}></line>
                    <line className="line bottom" x1="22" x2="2" y1="18" y2="18" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}></line>
                  </svg>
                </Reveal>
                {isActive === true ?
                <motion.div className="inset-0 fixed h-[100dvh] bg-white/80 dark:bg-black/80 flex flex-col justify-center bac">
                  <ul className='space-y-4'>
                      {navLinks.map(e => 
                      <li key={crypto.randomUUID()}>
                        <Link 
                        href={`#${e.toLowerCase()}Section`}
                        className="text-4xl font-semibold">
                          {e}
                        </Link>
                      </li>)}
                  </ul> 
                </motion.div> :
                <></>
                }
              </button>
          </div>
      </header>
  );
}