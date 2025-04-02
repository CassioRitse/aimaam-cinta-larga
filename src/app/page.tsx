import { GallerySection } from "@/components/carouselSection";
import CintaLargaInfo from "@/components/cintaLargaInfo";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/heroSection";
import { OrganizationSection } from "@/components/organizationSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection id="hero" />
      <OrganizationSection id="organization" />
      <GallerySection id="gallery" />
      <CintaLargaInfo id="info" />
      <Footer />
    </div>
  );
}
