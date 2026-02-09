'use client';

interface Props {
  checkIn: string;
  checkOut: string;
  cancellationTitle: string;
  cancellationPolicy: string[];
  bookingButtonText: string;
  bookingButtonLink: string;
}

export const RoomBookingSection = ({
  checkIn,
  checkOut,
  cancellationTitle,
  cancellationPolicy,
  bookingButtonText,
  bookingButtonLink,
}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col pl-3 border-l border-primary">
        <span className="font-albertSans font-semibold">
          <span className="font-normal">Check-in:</span> {checkIn}
        </span>
        <span className="font-albertSans font-semibold">
          <span className="font-normal">Check-out:</span> {checkOut}
        </span>
      </div>

      <span className="text-primary text-lg font-albertSans">
        {cancellationTitle}
      </span>

      <ul className="list-disc pl-5 space-y-2 text-secondary font-albertSans">
        {cancellationPolicy.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>

      <button
        className="mt-2 w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-white font-albertSans"
        onClick={() => (window.location.href = bookingButtonLink)}
      >
        {bookingButtonText}
      </button>
    </div>
  );
};