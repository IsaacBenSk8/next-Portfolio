import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import MobileAbout from "@/components/mobile-about";
import MobileContact from "@/components/mobile-contact";
import MobileHeader from "@/components/mobile-header";
import MobilePresentation from "@/components/mobile-presentation";
import MobileProjects from "@/components/mobile-projects";
import Presentation from "@/components/presentation";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <>
      <MobileHeader />
      <MobilePresentation />
      <MobileAbout />
      <MobileProjects />
      <MobileContact />
      {/* <Header />
      <Presentation />
      <About />
      <Projects />
      <Contact /> */}
    </>
  )
}
