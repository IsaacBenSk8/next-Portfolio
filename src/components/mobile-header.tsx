'use client'

import LightSwitch from './light-switch';
import Reveal from './reveal';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileHeader() {
  const navLinks = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
  const [isActive, setIsActive] = useState(false);

  return (
      <header className='anima z-[4] flex flex-row items-center justify-center xsm:w-full py-4'>
          <Link 
          href="#homeSection"
          scroll={true}>
            <Reveal className="">
              <h1 className='select-none xsm:text-3xl xsm:mr-[8rem] w-fit h-fit font-semibold'>if(C)</h1>
            </Reveal>
          </Link>
          <LightSwitch />
            <button onClick={() => {setIsActive(!isActive)}} className="button-one relative ml-4" aria-controls="primary-navigation" aria-expanded={isActive ? "true" : "false"}>
              <Reveal className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 24 24" width={24}>
                  <line className="line top" x1="2" x2="22" y1="6" y2="6" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}>
                  </line>
                  <line className="line middle" x1="2" x2="22" y1="12" y2="12" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}></line>
                  <line className="line bottom" x1="22" x2="2" y1="18" y2="18" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}></line>
                </svg>
              </Reveal>
              {isActive === true ?
              <Reveal className="absolute w-fit h-fit bg-slate-500/10 xsm:px-10 xsm:py-2 top-[2.86rem] right-1 rounded-b-lg">
                <ul>
                      {navLinks.map(e => 
                      <li key={crypto.randomUUID()}>
                        <Link 
                        href={`#${e.toLowerCase()}Section`}
                        className="font-semibold">
                          {e}
                        </Link>
                      </li>)}
                </ul> 
              </Reveal> :
              <></>
              }
            </button>
      </header>
  );
}