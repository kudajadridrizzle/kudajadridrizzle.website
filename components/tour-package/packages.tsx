'use client'
import data from './data.json';
import { PackageCard } from './package-card';
import { useRouter } from 'next/navigation';

// Image paths for tour packages
const img1 = '/assets/Image (1).jpg';
const img2 = '/assets/Image (2).jpg';
const img3 = '/assets/Image (3).jpg';

export const Packages = () => {
  const router = useRouter();
  return (
    <div className="px-4 py-14 sm:px-[12%] sm:py-32 lg:px-[12%] flex flex-col gap-10">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-ivy text-center text-black">
        Best Wayanad Tour Packages
      </h2>

      {/* Package Cards */}
      <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
        {data.packages.map((pkg, index) => (
          <PackageCard
            key={index}
            {...pkg}
            image={index === 0 ? img1 : index === 1 ? img2 : img3}
            onClick={() => {
              router.push(`/tour-packages/${pkg.urlSlug}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};
