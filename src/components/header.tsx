import LightSwitch from "./light-switch";
import NavBar from "./navbar";
import Reveal from "./reveal";

export default function Header() {
  return (
    <>
    <header className="flex items-center my-16">
        <Reveal>
          <h1 className="select-none font-semibold text-6xl mx-32">if(C)</h1>
        </Reveal>
      <NavBar/>
      <LightSwitch />
    </header>
    </>
  )
}