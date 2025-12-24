import {
  Baby,
  MapPin,
  Tv,
  ChefHat,
  Home,
  Mountain,
  Wifi,
  Shield,
  Car,
  Droplets,
} from "lucide-react";

const AMENITIES = [
  { icon: Home, label: "Heritage Stay" },
  { icon: Droplets, label: "Swimming Pool" },
  { icon: ChefHat, label: "Kerala Cuisine" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Tv, label: "Television" },
  { icon: Car, label: "Ample Parking" },
  { icon: Wifi, label: "Fast Wi-Fi" },
  { icon: MapPin, label: "Tourist Access" },
  { icon: Mountain, label: "Paddy Field View" },
  { icon: Shield, label: "Enhanced Safety" },
];

const Amenities = () => {
  return (
    <section
      id="amenities"
      className="bg-primary px-4 py-14 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-12 sm:space-y-20">
        {/* Heading */}
        <header className="mx-auto max-w-3xl space-y-4 text-center sm:text-center">
          <p className="text-sm uppercase tracking-wide text-white font-albertSans">
            Amenities
          </p>

          <h2 className="font-ivy text-3xl sm:text-4xl lg:text-5xl text-white">
            Wayanad Homestays Highlights
          </h2>

          <p className="font-albertSans text-secondary text-base sm:text-lg leading-relaxed">
            Discover a perfect blend of heritage, comfort, and nature at our
            Wayanad homestays. Enjoy heritage-inspired rooms, scenic paddy field
            views, peaceful surroundings, and modern amenities designed for
            families, relaxation, and unforgettable experiences.
          </p>
        </header>


        {/* Amenities Grid */}
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
        >
          {AMENITIES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <span className="font-albertSans text-sm sm:text-base text-white">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Amenities;
