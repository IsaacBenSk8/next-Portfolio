import Reveal from "./reveal";
import GridPics from "./grid-pics";

export default function MobileAbout() {
  return (
    <section className="w-[20rem] h-[63rem] flex flex-col items-center">
      <Reveal>
        <h2 id="#aboutSection" className="xsm:text-4xl text-cyan-400 xsm:my-6 font-medium">ABOUT</h2>
      </Reveal>
      <Reveal>
      <div className="xsm:w-[18rem] xsm:h-fit xsm:space-y-4 border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10 roundlevel xsm:py-8 xsm:px-4">
        <Reveal>
          <p className="xsm:text-xs font-light">
          I started studying communications at university, but once the pandemic hit, I realized that it wasn&apos;t what I wanted. Since I was a child, I loved technology, but it was during the pandemic, until today, that I decided to investigate how it works so I found what I really love to do.
          </p>
        </Reveal>
        <Reveal>
          <p className="xsm:text-xs font-light">
          Since then, I have been engaged daily in researching the news, future projections, and most used technologies on this infinite technological universe. However, I decided to focus on web development and the creation of useful applications that can help people with any situation or need.
          </p>
        </Reveal>
        <Reveal>
          <p className="xsm:text-xs font-light">
          Additionally, I developed new skills and improved others, such as being self-taught, speaking fluent English (natively Spanish), commit, problem solving, leadership and teamwork.
          </p>
        </Reveal>
        <Reveal>
          <p className="xsm:text-xs font-light">
          Currently, I&apos;m looking to be part of a developer team where we can share ideas and bring them to life.
          </p>
        </Reveal>
      </div>
      </Reveal>
      <GridPics />
    </section>
  )
}