import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Presentation from "@/components/presentation";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <>
      <Header />
      <Presentation />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
