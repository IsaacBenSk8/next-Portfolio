import Image from "next/image"
import profile from "@/img/profile_1.png"
import download from "@/img/download_3.svg"
import github from "@/img/github_1.svg"
import linkedin from "@/img/linkedin_1.svg"
import email from "@/img/email_4.svg"
import Link from "next/link"
import Reveal from "./reveal"

export default function Presentation() {
  return (
    <section className="flex justify-evenly items-center py-24 space-x-44">
      <div className="space-y-8">
        
        <div>
          <Reveal>
          <h3 className="px-1">Hi! I&apos;m</h3>
          </Reveal>
          <Reveal>
          <h1 className="text-6xl">Isaac FC</h1>
          </Reveal>
          <Reveal>
          <h1 className="text-6xl text-emerald-400">Full Stack Developer</h1>
          </Reveal>
        </div>
        <Reveal>
          <Link 
          href="/2023_01_isaac_flores_carbajal_resume.pdf"
          target="_blank"
          className="flex space-x-4 py-3 px-8 w-fit h-fit border rounded-full border-gray-600/40 dark:border-indigo-400/80 hover:bg-black/10 dark:hover:bg-white/10">
          <h2 className="font-semibold tracking-widest text-xl">
            DOWNLOAD CV
          </h2>
          <Image
          src={download}
          alt="Download"
          width={29}
          height={29}
          priority={true}
          />
          </Link>
        </Reveal>
          <div className="flex flex-wrap space-x-8 px-6">
            <Reveal>
              <Link 
              href="https://www.linkedin.com/in/isaac-flores-0ab8a6169/"
              target="_blank">
              <Image 
              src={linkedin}
              alt="LinkedIn"
              width={60}
              height={60}
              />
              </Link>
            </Reveal>
            <Reveal>
              <Link 
              href="https://github.com/IsaacBenSk8"
              target="_blank">
              <Image 
              src={github}
              alt="GitHub"
              width={60}
              height={60}
              />
              </Link>
            </Reveal>
            <Reveal>
              <Link href="mailto:isaacflores590@gmail.com"
              target="_blank">
              <Image 
              src={email}
              alt="Email"
              width={60}
              height={60}
              className=""
              />
              </Link>
            </Reveal>
          </div>
        </div>
      <Reveal>
        <Image
        src={profile}
        alt="profile"
        height={400}
        width={400}
        priority={true}
        />
      </Reveal>
    </section>
  )
}