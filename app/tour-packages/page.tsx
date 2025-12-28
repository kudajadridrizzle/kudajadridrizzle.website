'use client'
import Direction from "@/components/direction";
import Faq from "@/components/faq";
import TourHeroContent from "@/components/tour-package/hero-content";
import { Packages } from "@/components/tour-package/packages";
import HeroSection from "@/components/HeroSection";
import TravelPackagesInfo from "@/components/tour-package/tour-catogory";
import Header from "@/components/Header";


export default function TourPackages() {
  return (
    <div>
      <Header/>
      <HeroSection
        preTitle="Kudajadri Drizzle"
        title="Wayanad Tour Packages"
        bgImage="WayanadTourPackages.jpg"
        showButton={true}
        buttonLabel="Book Now"
        redirectTo="/contact"
      />
        <TourHeroContent/>
        <Packages/>
        <TravelPackagesInfo/>
        <Direction/>
    </div>
  );
}


