'use client'
import PackageCard, {
  BodyCard,
} from "@/components/tour-package-deatils/package-detail-card";
import packageDetails from "../../../data/package-details.json";
import { useParams, useRouter } from "next/navigation";

interface PackageMeta {
  title: string;
  description: string;
  keywords: string;
}

interface PackagePrice {
  current_price: string;
  original_price: string;
  note: string;
}

interface PackageDetail {
  title: string;
  body: string[];
}
interface TourPackage {
  title: string;
  description: string;
  duration: string;
  pickup_drop: string;
  meta?: PackageMeta;
  price: PackagePrice;
  details: PackageDetail[];
}

interface PackageDetailsData {
  tour_package: TourPackage[];
}

export default function TourPackageDetails() {
  const { id } = useParams();
  const navigate=useRouter()
  const getOriginalTitle = (urlTitle: string) => {
    const decodedTitle = decodeURIComponent(urlTitle);
    return decodedTitle
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const originalTitle = id ? getOriginalTitle(id) : "";
  const selectedPackage = (
    packageDetails as PackageDetailsData
  ).tour_package.find(
    (pkg) => pkg.title.toLowerCase() === originalTitle.toLowerCase()
  );
  return (
    <div className="package-details mt-[60px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16">
      <PackageCard
        title={selectedPackage?.title}
        description={selectedPackage?.description}
        price={selectedPackage?.price}
        duration={selectedPackage?.duration}
        pickupDrop={selectedPackage?.pickup_drop}
        navigate={navigate} // ✅ pass navigate down
      />
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        {selectedPackage.details &&
          selectedPackage.details.map((detail, index) => (
            <BodyCard
              key={index}
              title={detail.title}
              description={detail.body}
            />
          ))}
      </div>
    </div>
  );
}
