'use client'
import Direction from "@/components/direction";
import Faq from "@/components/faq";
import TourPackageHero from "@/components/tour-package/hero";
import TourHeroContent from "@/components/tour-package/hero-content";
import { Packages } from "@/components/tour-package/packages";
import TravelPackagesInfo from "@/components/tour-package/tour-catogory";
import aboutFaqData from "@/data/aboutFaqs.json";


export default function TourPackages() {
  return (
    <div>
        <TourPackageHero/>
        <TourHeroContent/>
        <Packages/>
        <TravelPackagesInfo/>
        <Direction/>
        <Faq {...aboutFaqData} />
    </div>
  );
}
