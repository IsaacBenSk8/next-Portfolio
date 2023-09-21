import profile from "@/img/profile_1.png"
import Image from "next/image";
import TextType from "./text-type";
import Link from "next/link";
import Reveal from "./reveal";

export default function MobilePresentation() {
  return (
    <main className="xsm:w-[20rem] xsm:h-fit xsm:space-y-8 flex xsm:flex-col justify-center items-center 2xl:flex-row-reverse 2xl:w-[81rem] 2xl:justify-between 2xl:my-[4rem]">
      <Reveal className="">
        <Image
        src={profile}
        alt="Perfil"
        className="xsm:w-[16rem] xsm:h-fit xsm:my-6 2xl:w-[30rem] 2xl:m-0"
        priority={true}/>
      </Reveal>
      <div className="xsm:w-fit 2xl:flex 2xl:flex-col 2xl:w-[40rem]">
        <section className="flex xsm:flex-col xsm:w-fit items-center 2xl:items-start">
          <Reveal className="">
            <h3 className="2xl:px-1">Hi I&apos;m</h3>
          </Reveal>
          <Reveal className="">
            <h1 className="xsm:text-4xl 2xl:text-6xl">Isaac FC</h1>
          </Reveal>
          <Reveal className="">
            <TextType />
          </Reveal>
        </section>
        <section className="xsm:w-fit xsm:h-[8rem] xsm:mx-auto xsm:mt-6 flex flex-col items-center xsm:space-y-6 2xl:mx-0 2xl:items-start">
          <Reveal className="">
            <Link
            href="/2023_isaac_flores_carbajal_resume.pdf"
            target="_blank"
            className="flex flex-row rounded-full xsm:py-2 xsm:px-4 border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10 2xl:py-3 2xl:px-8 2xl:my-4">
              <h2 className="xsm:hidden 2xl:flex font-semibold tracking-widest text-xl 2xl:mr-2">
                DOWNLOAD CV
              </h2>
              <h2 className="xsm:text-xl xsm:mr-2 font-semibold 2xl:hidden">CV</h2>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download svgStrokeDiff" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                <path d="M7 11l5 5l5 -5"></path>
                <path d="M12 4l0 12"></path>
              </svg>
            </Link>
          </Reveal>
          <Reveal className="">
            <div className="flex flex-row justify-between xsm:w-[10rem] 2xl:w-[14rem] 2xl:mx-[1.65rem]">
                <Link
                href="https://github.com/IsaacBenSk8"
                target="_blank"
                className="flex items-end justify-center xsm:w-[2rem] xsm:h-[2rem] 2xl:w-[3rem] 2xl:h-[3rem] glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github glow svgStroke" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </Link>
                <Link
                href="https://www.linkedin.com/in/isaac-flores-0ab8a6169/"
                target="_blank"
                className="flex items-center justify-center xsm:w-[2rem] xsm:h-[2rem] 2xl:w-[3rem] 2xl:h-[3rem] glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin xsm:w-[32px] xsm:h-[32px] 2xl:w-[48px] 2xl:h-[48px] glow svgStroke" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </Link>
                <Link
                href="mailto:isaacflores590@gmail.com"
                target="_blank"
                className="xsm:w-[2rem] xsm:h-[2rem] 2xl:w-[3rem] 2xl:h-[3rem] glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail glow svgStroke" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  )
}