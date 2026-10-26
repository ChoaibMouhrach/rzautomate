import { CallToAction } from "@/components/site/call-to-action";
import { Hero } from "./hero";
import { Process } from "./process";
import { ServicesOverview } from "./services-overview";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Process />
      <CallToAction />
    </>
  );
}
