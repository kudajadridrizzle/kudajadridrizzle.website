'use client';

import { useRouter } from 'next/navigation';
import {
  Users,
  User,
  Clock,
  FileText,
  Info,
} from 'lucide-react';
import { RoomBookingCard } from '@/lib/contentful';

type BookingCardProps = {
  card: RoomBookingCard;
};

export default function BookingCard({ card }: BookingCardProps) {
  const router = useRouter();

  // Safety check
  if (!card || !card.priceLabel) {
    console.error('BookingCard: Invalid card data', card);
    return (
      <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white p-6">
        <p className="text-gray-500">Booking information not available</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white">
      <div className="space-y-5 p-6">
        {/* Price */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-3xl font-semibold text-black">
            {card.priceLabel}
          </span>
          {card.pricingBadge && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              {card.pricingBadge}
            </span>
          )}
        </div>

        {/* Charges */}
        <div className="space-y-1 text-sm text-gray-700">
          {card.extraPersonCharge && (
            <p className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {card.extraPersonCharge}
            </p>
          )}
          {card.childPricing && (
            <p className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {card.childPricing}
            </p>
          )}
          {card.agePolicy && (
            <p className="flex items-center gap-2 font-medium">
              <Info className="h-4 w-4" />
              {card.agePolicy}
            </p>
          )}
        </div>

        {/* Check-in / Check-out */}
        {(card.checkInTime || card.checkOutTime) && (
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            {card.checkInTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Check-in: {card.checkInTime}
              </div>
            )}
            {card.checkOutTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Check-out: {card.checkOutTime}
              </div>
            )}
          </div>
        )}

        {/* Policies */}
        {card.policies && card.policies.length > 0 && (
          <div className="space-y-2 text-sm text-gray-700">
            {card.policies.map((policy, index) => (
              <div key={index} className="flex items-start gap-2">
                <FileText className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{policy}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <button
          type="button"
          onClick={() => router.push(card.ctaRoute || '/contact')}
          className="w-full rounded-full bg-black py-3 text-lg text-white transition hover:bg-gray-900"
        >
          {card.ctaLabel || 'Book Now'}
        </button>
      </div>
    </div>
  );
}