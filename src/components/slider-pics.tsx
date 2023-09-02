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
import styles from "@/components/slider-pics.module.css"

export default function SliderPics() {
  return (
    <div className="inline-block">
      <div className={`${styles.slider}`}>
        <Image 
        src={html}
        alt="HTML"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={css}
        alt="CSS"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={tailwind}
        alt="Tailwind"
        width={200}
        height={200}
        className="p-2"
        /> 
        <Image 
        src={js}
        alt="JavaScript"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={npm}
        alt="NPM"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={jest}
        alt="Jest"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={react}
        alt="React"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={git}
        alt="GIT"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={node}
        alt="NodeJS"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={postgre}
        alt="PostgreSQL"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={mongo}
        alt="MongoDB"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={typescript}
        alt="Typescript"
        width={200}
        height={200}
        className="p-2"
        />
      </div>
      <div className={`${styles.slider}`}>
        <Image 
        src={html}
        alt="HTML"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={css}
        alt="CSS"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={tailwind}
        alt="Tailwind"
        width={200}
        height={200}
        className="p-2"
        /> 
        <Image 
        src={js}
        alt="JavaScript"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={npm}
        alt="NPM"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={jest}
        alt="Jest"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={react}
        alt="React"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={git}
        alt="GIT"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={node}
        alt="NodeJS"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={postgre}
        alt="PostgreSQL"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={mongo}
        alt="MongoDB"
        width={200}
        height={200}
        className="p-2"
        />
        <Image 
        src={typescript}
        alt="Typescript"
        width={200}
        height={200}
        className="p-2"
        />
      </div>
    </div>
  )
}