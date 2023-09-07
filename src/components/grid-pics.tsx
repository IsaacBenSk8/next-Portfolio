import Image from "next/image"
import html from "@/skill-img/html_1.svg"
import css from "@/skill-img/css_1.svg"
import tailwind from "@/skill-img/tailwind_1.svg"
import js from "@/skill-img/js_1.svg"
import npm from "@/skill-img/npm_1.svg"
import jest from "@/skill-img/jest_1.svg"
import react from "@/skill-img/react_1.svg"
import git from "@/skill-img/git_1.svg"
import node from "@/skill-img/nodejs_1.svg"
import postgre from "@/skill-img/postgre_1.svg"
import mongo from "@/skill-img/mongo_1.svg"
import typescript from "@/skill-img/typescript_1.svg"
import Reveal from "./reveal"

export default function GridPics() {
  return (
    <div className="flex flex-col items-center xsm:w-[18rem]  h-fit">
      <Reveal>
        <h3 className="w-full xsm:text-4xl font-medium text-amber-400 xsm:my-6">SKILLS</h3>
      </Reveal>
      <div>
        <div className="w-full grid gap-10 grid-cols-3 grid-rows-4">
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 left-3 pointer-events-none bg-slate-500/10 backdrop-blur xsm:text-[0.6rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">HTML</p>
              <Image 
              src={html}
              alt="HTML"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none left-[0.85rem] bg-slate-500/10 backdrop-blur xsm:text-[0.6rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">CSS</p>
              <Image 
              src={css}
              alt="CSS"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none bg-slate-500/10 backdrop-blur xsm:text-[0.55rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">Javascript</p>
              <Image 
              src={js}
              alt="JavaScript"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none bg-slate-500/10 backdrop-blur xsm:text-[0.6rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">Typescript</p>
              <Image 
              src={typescript}
              alt="Typescript"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none left-3 bg-slate-500/10 backdrop-blur xsm:text-[0.6rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">NPM</p>
              <Image 
              src={npm}
              alt="NPM"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none left-[0.85rem] bg-slate-500/10 backdrop-blur xsm:text-[0.6rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">Jest</p>
              <Image 
              src={jest}
              alt="Jest"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none left-[0.65rem] bg-slate-500/10 backdrop-blur xsm:text-[0.6rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">React</p>
              <Image 
              src={react}
              alt="React"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none bg-slate-500/10 backdrop-blur xsm:text-[0.5rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">TailwindCSS</p>
              <Image 
              src={tailwind}
              alt="Tailwind"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none left-[1.05rem] bg-slate-500/10 backdrop-blur xsm:text-[0.6rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">Git</p>
              <Image 
              src={git}
              alt="GIT"
              className="h-16 w-16 z-[3]"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none left-[0.30rem] bg-slate-500/10 backdrop-blur xsm:text-[0.6rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">NodeJS</p>
              <Image 
              src={node}
              alt="NodeJS"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none bg-slate-500/10 backdrop-blur xsm:text-[0.5rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">PostgreSQL</p>
              <Image 
              src={postgre}
              alt="PostgreSQL"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="relative icon">
              <p className="absolute tooltip top-0 opacity-0 pointer-events-none bg-slate-500/10 backdrop-blur xsm:text-[0.6rem] xsm:px-[0.5rem] xsm:py-[0.25rem] rounded-full">MongoDB</p>
              <Image 
              src={mongo}
              alt="MongoDB"
              className="h-16 w-16"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}