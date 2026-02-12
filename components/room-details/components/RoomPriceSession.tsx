'use client';

import { RoomBookingCard, SectionIntro } from '@/lib/contentful';
import { RoomInfoSection } from './RoomInfoSection';
import BookingCard from './BookingCard';

type RoomPriceSessionProps = {
  card: RoomBookingCard;
  description: SectionIntro;
};

export const RoomPriceSession = ({ card, description }: RoomPriceSessionProps) => {
  return (
    <section className="pb-20 sm:pb-32">
      <div className="flex flex-col gap-12 sm:flex-row">
        <RoomInfoSection
          description={description}
        />

        <aside className="sm:sticky sm:top-24 self-start">
          <BookingCard card={card} />
        </aside>
      </div>
    </section>
  );
};