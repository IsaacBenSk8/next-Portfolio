export default function Card({children}: {children: React.ReactNode}) {
  return (
    <div className="flex items-center border border-gray-600/40 dark:border-indigo-400/80 roundlevel max-w-4xl h-fit py-14 px-9 overflow-hidden">
      {children}
    </div>
  )
}