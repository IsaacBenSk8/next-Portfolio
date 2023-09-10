import Reveal from "./reveal";
import GridPics from "./grid-pics";

export default function MobileAbout() {
  return (
    <section id="aboutSection" className="xsm:w-[20rem] xsm:h-fit flex flex-col items-center xsm:pt-20 space-y-6 2xl:w-[81rem] 2xl:py-[10rem]">
      <Reveal className="">
        <h2 className="xsm:text-4xl text-cyan-400 font-medium 2xl:text-6xl 2xl:w-[56rem] 2xl:text-end">ABOUT</h2>
      </Reveal>
      <Reveal className="">
      <div className="xsm:w-[18rem] xsm:h-fit xsm:space-y-4 border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10 roundlevel xsm:py-8 xsm:mb-6 xsm:px-4 2xl:w-[56rem] 2xl:py-14 2xl:px-9">
        <Reveal className="">
          <p className="xsm:text-xs font-light 2xl:text-xl">
          I started studying communications at university, but once the pandemic hit, I realized that it wasn&apos;t what I wanted. Since I was a child, I loved technology, but it was during the pandemic, until today, that I decided to investigate how it works so I found what I really love to do.
          </p>
        </Reveal>
        <Reveal className="">
          <p className="xsm:text-xs font-light 2xl:text-xl">
          Since then, I have been engaged daily in researching the news, future projections, and most used technologies on this infinite technological universe. However, I decided to focus on web development and the creation of useful applications that can help people with any situation or need.
          </p>
        </Reveal>
        <Reveal className="">
          <p className="xsm:text-xs font-light 2xl:text-xl">
          Additionally, I developed new skills and improved others, such as being self-taught, speaking fluent English (natively Spanish), commit, problem solving, leadership and teamwork.
          </p>
        </Reveal>
        <Reveal className="">
          <p className="xsm:text-xs font-light 2xl:text-xl">
          Currently, I&apos;m looking to be part of a developer team where we can share ideas and bring them to life.
          </p>
        </Reveal>
      </div>
      </Reveal>
    </section>
  )
}