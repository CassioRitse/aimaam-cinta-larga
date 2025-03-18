import { CarouselSection } from "@/components/carouselSection";
import { HeroSection } from "@/components/heroSection";
import { OrganizationSection } from "@/components/organizationSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OrganizationSection />
      <CarouselSection />
    </div>
  );
}
