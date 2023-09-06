import Reveal from "./reveal";
import SliderPics from "./grid-pics";

export default function About() {
  return (
    <Reveal>
    <div id="aboutSection" className="flex flex-col items-end max-w-4xl space-y-8 py-44 w-fit">
      <Reveal>
      <h2 className="text-cyan-400 text-6xl"><span className="hover:after:content-['ME_<3']">ABOUT </span></h2>
      </Reveal> 
      <Reveal>
      <section className="flex items-center  dark:bg-black/10">
        <div className="space-y-7 border border-gray-600/40 dark:border-indigo-400/80 roundlevel py-14 px-9">
          <Reveal>
          <p className="text-xl font-light">
          I started studying communications at university, but once the pandemic hit, I realized that it wasn&apos;t what I wanted. Since I was a child, I loved technology, but it was during the pandemic, until today, that I decided to investigate how it works so I found what I really love to do.
          </p>
          </Reveal>
          <Reveal>
          <p className="text-xl font-light">
          Since then, I have been engaged daily in researching the news, future projections, and most used technologies on this infinite technological universe. However, I decided to focus on web development and the creation of useful applications that can help people with any situation or need.
          </p>
          </Reveal>
          <Reveal>
          <p className="text-xl font-light">
          Additionally, I developed new skills and improved others, such as being self-taught, speaking fluent English (natively Spanish), commit, problem solving, leadership and teamwork.
          </p>
          </Reveal>
          <Reveal>
          <p className="text-xl font-light">
          Currently, I&apos;m looking to be part of a developer team where we can share ideas and bring them to life.
          </p>
          </Reveal>
        </div>
      </section>
      </Reveal> 
    </div> 
    </Reveal>
  )
}