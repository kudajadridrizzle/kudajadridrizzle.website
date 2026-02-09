'use client';

import { usePathname } from 'next/navigation';
import { roomDataMap } from '../constants';
import { RoomInfoSection } from './RoomInfoSection';
import { RoomPricingSection } from './RoomPricingSection';
import { RoomBookingSection } from './RoomBookingSection';

export const RoomPriceSession = () => {
  const pathname = usePathname();
  const roomId = pathname?.split('/').pop() || 'classic';
  const roomData = roomDataMap[roomId];

  if (!roomData) return null;

  return (
    <section className="px-4 pb-20 sm:pb-32">
      <div className="flex flex-col sm:flex-row gap-12">
        <RoomInfoSection
          roomId={roomId}
          roomType={roomData.roomType}
          description={roomData.description}
          offersTitle={roomData.offersTitle}
          offers={roomData.offers}
        />

        <aside className="w-full sm:w-[358px] flex flex-col gap-6 sm:px-6 sm:py-11">
          <RoomPricingSection
            pricePerNight={roomData.pricePerNight}
            priceNote={roomData.priceNote}
            extraPersonRules={roomData.extraPerson.rules}
          />

          <RoomBookingSection
            checkIn={roomData.checkIn}
            checkOut={roomData.checkOut}
            cancellationTitle={roomData.cancellationPolicyTitle}
            cancellationPolicy={roomData.cancellationPolicy}
            bookingButtonText={roomData.bookingButtonText}
            bookingButtonLink={roomData.bookingButtonLink}
          />
        </aside>
      </div>
    </section>
  );
};