import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import MobileAbout from "@/components/mobile-about";
import MobileHeader from "@/components/mobile-header";
import MobilePresentation from "@/components/mobile-presentation";
import Presentation from "@/components/presentation";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <>
      <MobileHeader />
      <MobilePresentation />
      <MobileAbout />
      {/* <Header />
      <Presentation />
      <About />
      <Projects />
      <Contact /> */}
    </>
  )
}
