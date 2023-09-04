import profile from "@/img/profile_1.png"
import Image from "next/image";
import TextType from "./text-type";
import download from "@/img/download_3.svg";
import github from "@/img/github_2.svg";
import linkedin from "@/img/linkedin_2.svg";
import email from "@/img/mail_2.svg";
import Link from "next/link";

export default function MobilePresentation() {
  return (
    <main className="xsm:w-[20rem] xsm:h-[38rem] flex flex-col items-center border border-black">
      <Image
      src={profile}
      alt="Perfil"
      className="xsm:w-[16rem] xsm:h-[16rem] xsm:my-6 border border-black"/>
      <section className="flex xsm:flex-col w-[20rem] items-center border border-black">
        <h3>Hi I&apos;m</h3>
        <h1 className="xsm:text-4xl">Isaac FC</h1>
        <TextType />
      </section>
      <section className="xsm:w-[20rem] xsm:h-[8rem] xsm:my-6 border border-black">
        <button className="flex flex-row">
          <h3 className="text-xl">CV</h3>
          <Image
          src={download}
          alt="Download"
          />
        </button>
        <div className="flex flex-row border border-black">
          <div className="xsm:w-[2rem] xsm:h-[2rem] border border-black">
            <Image
            src={linkedin}
            alt="LinkedIn"
            className="object-contain"
            />
          </div>
          <div className="xsm:w-[2rem] xsm:h-[2rem] border border-black">
            <Image
            src={github}
            alt="Github"
            className="object-contain"
            />
          </div>
          <div className="xsm:w-[2rem] xsm:h-[2rem] border border-black">
            <Image
            src={email}
            alt="Email"
            className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  )
}