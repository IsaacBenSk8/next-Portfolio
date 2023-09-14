'use client'

import LightSwitch from './light-switch';
import Reveal from './reveal';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function MobileHeader() {
  const navLinks = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
  const tabs = ["0", "1", "2", "3"];
  const [isActive, setIsActive] = useState(false);

  return (
      <header className='sticky top-0 z-10 inset-x-0 flex flex-row items-center justify-center xsm:w-full py-4 2xl:py-[4rem]'>
          <Link
          href="#homeSection"
          scroll={true}>
            <Reveal className="">
              <h1 className='static select-none xsm:text-3xl xsm:mr-[4rem] w-fit h-fit font-semibold 2xl:text-5xl 2xl:m-0'>if(C)</h1>
            </Reveal>
          </Link>
          <Reveal className="">
            <nav className="xsm:hidden 2xl:flex px-24 rounded-full border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/20 backdrop-blur 2xl:mx-[10rem]">
                  <ul className="flex flex-row items-center font-light">
                      {navLinks.map((element) =>
                        <li key={crypto.randomUUID()}>
                          <Link 
                          href={`#${element.toLowerCase()}Section`}
                          >
                            <h1 className="py-4 px-10 w-fit h-fit text-base transition-colors ease-in-out duration-300 hover:text-emerald-400 dark:hover:text-fuchsia-500">
                              {element}
                            </h1>
                          </Link>
                        </li>
                      )}
                  </ul>
            </nav>
          </Reveal>
          <div className='flex flex-row xsm:ml-[4rem] w-fit 2xl:m-0'>
            <LightSwitch />
              <button onClick={() => {setIsActive(!isActive)}} className="xl:hidden button-one relative ml-4" aria-label={isActive ? 'Close menu' : 'Open menu'} aria-controls="primary-navigation" aria-expanded={isActive ? "true" : "false"}>
                <Reveal className="">
                  <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10" viewBox="0 0 24 24" width={24}>
                    <line className="line top" x1="2" x2="22" y1="6" y2="6" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}>
                    </line>
                    <line className="line middle" x1="2" x2="22" y1="12" y2="12" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}></line>
                    <line className="line bottom" x1="22" x2="2" y1="18" y2="18" strokeWidth={3} strokeLinecap="round" strokeDasharray={20} strokeDashoffset={0}></line>
                  </svg>
                </Reveal>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                    key={crypto.randomUUID()}
                    variants={{
                      open: {
                        x: "0%",
                        transition: {
                          delayChildren: 0.3,
                          staggerChildren: 0.1
                        },
                      },
                      closed: {
                        x: "-100%",
                      },
                    }}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    tabIndex={-1}
                    className="inset-0 fixed h-[100dvh] color bg-white/90 dark:bg-black/90 flex flex-col justify-center touch-none">
                      <nav>
                        <ul className='space-y-4'>
                            {navLinks.map(e => 
                            <motion.li 
                            key={crypto.randomUUID()}
                            variants={{
                              closed: { y: 20, opacity: 0 },
                              open: { y: 0, opacity: 1 },
                            }}>
                              <Link   
                              href={`#${e.toLowerCase()}Section`}
                              className="text-4xl font-semibold">
                                {e}
                              </Link>
                            </motion.li>)}
                        </ul> 
                      </nav>
                    </motion.div> 
                  )}
                </AnimatePresence>
              </button>
          </div>
      </header>
  );
}