import profile from "@/img/profile_1.png"
import Image from "next/image";
import TextType from "./text-type";
import download from "@/img/download_3.svg";
import github from "@/img/github_2.svg";
import linkedin from "@/img/linkedin_2.svg";
import email from "@/img/mail_2.svg";
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
            className="flex flex-row rounded-full xsm:py-2 xsm:px-4 space-x-2 border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10 2xl:py-3 2xl:px-8 2xl:my-4">
              <h2 className="xsm:hidden 2xl:flex font-semibold tracking-widest text-xl ">
                DOWNLOAD CV
              </h2>
              <h2 className="xsm:text-xl font-semibold 2xl:hidden">CV</h2>
              <Image
              src={download}
              alt="Download"
              className="w-6 h-6"
              />
            </Link>
          </Reveal>
          <Reveal className="">
            <div className="flex flex-row justify-between xsm:w-[10rem] 2xl:w-[14rem] 2xl:mx-[1.65rem]">
                <Link
                href="https://github.com/IsaacBenSk8"
                target="_blank"
                className="flex items-end justify-center xsm:w-[2rem] xsm:h-[2rem] 2xl:w-[3rem] 2xl:h-[3rem] glow">
                  <Image
                  src={github}
                  alt="Github"
                  className="xsm:w-[1.8rem] xsm:h-[1.8em] 2xl:w-[2.6rem] 2xl:h-[2.6rem] glow"
                  />
                </Link>
                <Link
                href="https://www.linkedin.com/in/isaac-flores-0ab8a6169/"
                target="_blank"
                className="flex items-center justify-center xsm:w-[2rem] xsm:h-[2rem] 2xl:w-[3rem] 2xl:h-[3rem] glow">
                  <Image
                  src={linkedin}
                  alt="LinkedIn"
                  className="xsm:w-[1.6rem] xsm:h-[1.6rem] 2xl:w-[2.4rem] 2xl:h-[2.4rem] glow"
                  />
                </Link>
                <Link
                href="mailto:isaacflores590@gmail.com"
                target="_blank"
                className="xsm:w-[2rem] xsm:h-[2rem] 2xl:w-[3rem] 2xl:h-[3rem] glow">
                  <Image
                  src={email}
                  alt="Email"
                  className="w-fit h-fit glow"
                  />
                </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  )
}