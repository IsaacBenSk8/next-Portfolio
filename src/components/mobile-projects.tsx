import Reveal from "./reveal";

export default function MobileProjects() {
  return (
    <section className="xsm:my-20 flex flex-col items-center space-y-8">
      <Reveal>
        <h2 className="xsm:text-4xl text-emerald-400 font-medium">PROJECTS</h2>
      </Reveal>
      <Reveal>
        <div className="relative overflow-hidden xsm:w-[18rem] xsm:h-[18rem] border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10 roundlevel xsm:p-4">
          ta vacío
        </div>
      </Reveal>
      <Reveal>
        <div className="relative overflow-hidden xsm:w-[18rem] xsm:h-[18rem] border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10 roundlevel xsm:p-4">
          gladi pig
        </div>
      </Reveal>
      <Reveal>
        <div className="relative overflow-hidden xsm:w-[18rem] xsm:h-[18rem] border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10 roundlevel xsm:p-4">
          me la paso pensando en chamba
        </div>
      </Reveal>
      <Reveal>
        <div className="relative overflow-hidden xsm:w-[18rem] xsm:h-[18rem] border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10 roundlevel xsm:p-4">
          en progreso...
        </div>
      </Reveal>
    </section>
  )
}