"use client";
import { usePathname } from "next/navigation";
import { roomDataMap } from "../constants";
import {
  Wifi,
  Tv,
  Shield,
  Home,
  BedDouble,
  Snowflake,
  Droplet,
  Zap,
} from "lucide-react";

export const RoomPriceSession = () => {
  const pathname = usePathname();
  const id = pathname?.split("/").pop() || "classic";
  const roomData = roomDataMap[id];

  const iconMap: {
    [key: string]: React.ComponentType<{ className?: string }>;
  } = {
    "Bunker Beds": BedDouble,
    "Air Conditioning (on request)": Snowflake,
    "Wi-Fi": Wifi,
    TV: Tv,
    "Hot Water": Droplet,
    "Electric Kettle": Zap,
    "Window Guards": Shield,
    Essentials: Home,
  };

  const getDisplayText = (offer: string) => {
    if (
      (id === "premium" || id === "deluxe") &&
      offer === "Air Conditioning (on request)"
    ) {
      return "Bunker Beds";
    }
    return offer;
  };

  return (
    <section className="px-4 pb-20 sm:px-[12%] sm:pb-32 large:px-[18%]">
      <div className="flex flex-col sm:flex-row gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-ivy text-[32px] sm:text-[44px]">
              {roomData.roomType}
            </h1>
            <p className="text-secondary text-base sm:text-xl font-albertSans">
              {roomData.description}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-12">
            <h2 className="text-primary font-ivy text-2xl sm:text-[32px]">
              {roomData.offersTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-primary font-albertSans">
              {roomData.offers.map((offer, i) => {
                const displayText = getDisplayText(offer);
                const Icon = iconMap[displayText] || Home;
                return (
                  <div key={`offer-${i}`} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 shrink-0" />
                    <span>{displayText}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="w-full sm:w-[358px] flex flex-col gap-6 sm:px-6 sm:py-11">
          <div className="flex flex-col gap-1">
            <span className="text-primary font-albertSans text-2xl font-medium">
              ₹{roomData.pricePerNight} /night
            </span>
            <span className="text-secondary text-base font-albertSans">
              {roomData.priceNote}
            </span>

            <ul className="mt-2 list-disc pl-5 space-y-1 text-secondary text-sm font-albertSans">
              {roomData.extraPerson.rules.map((rule, i) => (
                <li key={`extra-${i}`}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col pl-3 border-l border-primary">
            <span className="font-albertSans font-semibold">
              <span className="font-normal">Check-in:</span> {roomData.checkIn}
            </span>
            <span className="font-albertSans font-semibold">
              <span className="font-normal">Check-out:</span> {roomData.checkOut}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-primary text-lg font-albertSans">
              {roomData.cancellationPolicyTitle}
            </span>

            <ul className="list-disc pl-5 space-y-2 text-secondary font-albertSans">
              {roomData.cancellationPolicy.map((rule, i) => (
                <li key={`cancel-${i}`}>{rule}</li>
              ))}
            </ul>

            <button
              className="mt-2 w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-white font-albertSans"
              onClick={() => {
                window.location.href = roomData.bookingButtonLink;
              }}
            >
              {roomData.bookingButtonText}
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};
