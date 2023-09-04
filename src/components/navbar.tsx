import Link from "next/link"
import Reveal from "./reveal";

export default function NavBar() {
  const navLinks = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  return (
    <Reveal>
    <nav className="2xl:flex px-24 rounded-full border border-gray-600/40 dark:border-indigo-400/80">
            <ul className="flex flex-row items-center font-light">
              {navLinks.map((element) =>
                <li key={crypto.randomUUID()}>
                  <Link 
                  href={`#${element.toLowerCase()}Section`}
                  >
                    <h1 className="py-4 px-10 w-fit h-fit text-base transition-colors ease-in-out duration-300 hover:text-emerald-400 dark:hover:text-fuchsia-500">
                      {element}
                    </h1>
                  </Link>
                </li>
              )}
            </ul>
    </nav>
    </Reveal>
  )
}