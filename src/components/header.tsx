import LightSwitch from "./light-switch";
import NavBar from "./navbar";
import Reveal from "./reveal";

export default function Header() {
  return (
    <>
    <header className="flex flex-wrap items-center justify-evenly py-12">
        <Reveal>
          <h1 className="select-none font-semibold text-6xl px-28 py-4">if(C)</h1>
        </Reveal>
      <NavBar/>
      <LightSwitch />
    </header>
    </>
  )
}