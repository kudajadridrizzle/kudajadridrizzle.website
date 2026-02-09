'use client';

interface Props {
  pricePerNight: number;
  priceNote: string;
  extraPersonRules: string[];
}

export const RoomPricingSection = ({
  pricePerNight,
  priceNote,
  extraPersonRules,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-primary font-albertSans text-2xl font-medium">
        ₹{pricePerNight} /night
      </span>

      <span className="text-secondary text-base font-albertSans">
        {priceNote}
      </span>

      <ul className="mt-2 list-disc pl-5 space-y-1 text-secondary text-sm font-albertSans">
        {extraPersonRules.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};