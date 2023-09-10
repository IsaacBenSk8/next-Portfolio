import Card from "./card";
import Reveal from "./reveal";

export default function MobileProjects() {
  return (
    <section id="projectsSection" className="xsm:py-20 flex flex-col items-center xsm:space-y-8 2xl:w-[56rem] 2xl:py-[10rem]">
      <Reveal className="">
        <h2 className="xsm:text-4xl xsm:text-center text-emerald-400 font-medium 2xl:text-6xl 2xl:w-[56rem] 2xl:text-start">PROJECTS</h2>
      </Reveal>
      <Reveal className="">
        <Card />
      </Reveal>
      <Reveal className="">
        <Card />
      </Reveal>
      <Reveal className="">
        <Card />
      </Reveal>
      <Reveal className="">
        <Card />
      </Reveal>
    </section>
  )
}