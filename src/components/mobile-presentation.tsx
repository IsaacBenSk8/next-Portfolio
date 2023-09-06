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
    <main className="xsm:w-[20rem] xsm:h-fit flex flex-col items-center xsm:mb-10">
      <Reveal>
        <Image
        src={profile}
        alt="Perfil"
        className="xsm:w-[14rem] xsm:h-[14rem] xsm:my-8"
        priority={true}/>
      </Reveal>
      <Reveal>
      <section className="flex xsm:flex-col w-[20rem] items-center">
        <h3>Hi I&apos;m</h3>
        <h1 className="xsm:text-4xl">Isaac FC</h1>
        <TextType />
      </section>
      </Reveal>
      <section className="xsm:w-[20rem] xsm:h-[8rem] xsm:my-6 flex flex-col items-center space-y-6">
        <Reveal>
          <Link
          href="/2023_01_isaac_flores_carbajal_resume.pdf"
          target="_blank"
          className="flex flex-row rounded-full xsm:py-2 xsm:px-4 space-x-2 border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10">
            <h3 className="xsm:text-xl font-semibold">CV</h3>
            <Image
            src={download}
            alt="Download"
            />
          </Link>
        </Reveal>
        <Reveal>
          <div className="flex flex-row xsm:space-x-6 overflow-hidden">
            <div className="xsm:w-[2rem] xsm:h-[2rem] flex justify-center">
              <Link
              href="https://www.linkedin.com/in/isaac-flores-0ab8a6169/"
              target="_blank">
                <Image
                src={linkedin}
                alt="LinkedIn"
                width={32}
                height={32}
                />
              </Link>
            </div>
            <div className="xsm:w-[2rem] xsm:h-[2rem]">
              <Link
              href="https://github.com/IsaacBenSk8"
              target="_blank">
                <Image
                src={github}
                alt="Github"
                width={32}
                height={32}
                />
              </Link>
            </div>
            <div className="xsm:w-[2rem] xsm:h-[2rem]">
              <Link
              href="mailto:isaacflores590@gmail.com"
              target="_blank">
                <Image
                src={email}
                alt="Email"
                width={32}
                height={32}
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}