import GridPics from "@/components/grid-pics";
import MobileAbout from "@/components/mobile-about";
import MobileContact from "@/components/mobile-contact";
import MobileHeader from "@/components/mobile-header";
import MobilePresentation from "@/components/mobile-presentation";
import MobileProjects from "@/components/mobile-projects";

export default function Page() {
  return (
    <>
      <MobileHeader />
      <MobilePresentation />
      <MobileAbout />
      <GridPics />
      <MobileProjects />
      <MobileContact />
    </>
  )
}
