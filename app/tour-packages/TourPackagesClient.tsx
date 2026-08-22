'use client'
import Direction from "@/components/direction";
import TourHeroContent from "@/components/tour-package/hero-content";
import { Packages } from "@/components/tour-package/packages";
import HeroSection from "@/components/HeroSection";
import TravelPackagesInfo from "@/components/tour-package/tour-catogory";
import Header from "@/components/Header";

export default function TourPackagesClient() {
  return (
    <div>
      <Header />
      <HeroSection
        preTitle="Kudajadri Drizzle"
        title="Wayanad Tour Packages"
        bgImage="WayanadTourPackages.jpg"
        headingLevel="h1"
        showButton={true}
        buttonLabel="Book Now"
        redirectTo="/contact"
      />
      <TourHeroContent />
      <Packages />
      <TravelPackagesInfo />
      <Direction />
      
    </div>
  );
}

