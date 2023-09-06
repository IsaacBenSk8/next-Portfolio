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
    <div className="flex flex-col items-center xsm:w-[18rem] h-fit my-8 xsm:space-y-6">
      <Reveal>
        <h3 className="w-full xsm:text-4xl font-medium text-amber-400">SKILLS</h3>
      </Reveal>
      <div>
        <div className="grid gap-6 grid-cols-4 grid-rows-3">
          <Reveal>
            <Image 
            src={html}
            alt="HTML"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={css}
            alt="CSS"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={tailwind}
            alt="Tailwind"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={js}
            alt="JavaScript"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={npm}
            alt="NPM"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={jest}
            alt="Jest"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={react}
            alt="React"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={git}
            alt="GIT"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={node}
            alt="NodeJS"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={postgre}
            alt="PostgreSQL"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={mongo}
            alt="MongoDB"
            className="h-16 w-16"
            />
          </Reveal>
          <Reveal>
            <Image 
            src={typescript}
            alt="Typescript"
            className="h-16 w-16"
            />
          </Reveal>
        </div>
      </div>
    </div>
  )
}