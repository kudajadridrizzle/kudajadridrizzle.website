'use client'
import PackageCard, {
  BodyCard,
} from "@/components/tour-package-deatils/package-detail-card";
import packageDetails from "@/data/package-details.json";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
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
  price: PackagePrice;
  details: PackageDetail[];
}

interface PackageDetailsData {
  tour_package: TourPackage[];
}

interface PackageDetailsClientProps {
  packageTitle: string;
}

export default function PackageDetailsClient({ packageTitle }: PackageDetailsClientProps) {
  const router = useRouter();
  const selectedPackage = (
    packageDetails as PackageDetailsData
  ).tour_package.find(
    (pkg) => pkg.title.toLowerCase() === packageTitle.toLowerCase()
  );

  return (
    <div className="package-details mt-[60px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16">
      <Header variant="solid" />
      {selectedPackage && (
        <PackageCard
          title={selectedPackage.title}
          description={selectedPackage.description}
          price={selectedPackage.price}
          duration={selectedPackage.duration}
          pickupDrop={selectedPackage.pickup_drop}
          navigate={(path: string) => router.push(path)}
        />
      )}
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        {selectedPackage?.details?.map((detail, index) => (
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

