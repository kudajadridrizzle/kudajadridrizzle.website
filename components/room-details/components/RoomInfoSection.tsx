'use client';

import {
  Wifi,
  Tv,
  Shield,
  Home,
  BedDouble,
  Snowflake,
  Droplet,
  Zap,
} from 'lucide-react';

const iconMap: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  'Bunker Beds': BedDouble,
  'Air Conditioning (on request)': Snowflake,
  'Wi-Fi': Wifi,
  TV: Tv,
  'Hot Water': Droplet,
  'Electric Kettle': Zap,
  'Window Guards': Shield,
  Essentials: Home,
};

interface Props {
  roomId: string;
  roomType: string;
  description: string;
  offersTitle: string;
  offers: string[];
}

export const RoomInfoSection = ({
  roomId,
  roomType,
  description,
  offersTitle,
  offers,
}: Props) => {
  const getDisplayText = (offer: string) => {
    if (
      (roomId === 'premium' || roomId === 'deluxe') &&
      offer === 'Air Conditioning (on request)'
    ) {
      return 'Bunker Beds';
    }
    return offer;
  };

  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-primary font-ivy text-[32px] sm:text-[44px]">
          {roomType}
        </h1>
        <p className="text-secondary text-base sm:text-xl font-albertSans">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:gap-12">
        <h2 className="text-primary font-ivy text-2xl sm:text-[32px]">
          {offersTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-primary font-albertSans">
          {offers.map((offer, i) => {
            const displayText = getDisplayText(offer);
            const Icon = iconMap[displayText] || Home;

            return (
              <div key={i} className="flex items-center gap-2">
                <Icon className="w-5 h-5 shrink-0" />
                <span>{displayText}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};