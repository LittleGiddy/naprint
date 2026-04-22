import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import MissionVision from "@/components/MissionVision";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <MissionVision />
      <ContactCTA />
    </>
  );
}