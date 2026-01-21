import Header from "@/components/Header";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/terms-and-conditions`;

/* ⛔ META TEXT IS UNCHANGED */
const META_TITLE =
  "Terms & Conditions | Kudajadri Drizzle Homestay";

const META_DESCRIPTION =
  "Read the booking rules, check-in policy, extra person charges, and cancellation terms for staying at Kudajadri Drizzle Homestay in Wayanad.";

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,

  alternates: {
    canonical: CANONICAL_URL,
  },

  openGraph: {
    title: META_TITLE,             // SAME AS META
    description: META_DESCRIPTION, // SAME AS META
    url: CANONICAL_URL,
    siteName: "Kudajadri Drizzle",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: META_TITLE,             // SAME AS META
    description: META_DESCRIPTION, // SAME AS META
  },
};

export default function TermsAndConditions() {
  return (
    <>
      <Header variant="solid" />

      <div className="px-4 py-14 sm:px-[12%] sm:py-32">
        <div className="flex flex-col sm:flex-row gap-12">
          {/* LEFT – Sticky Heading */}
          <div className="sm:w-[35%]">
            <div className="sm:sticky sm:top-32">
              <p className="text-primary font-albertSans text-sm tracking-[1.6px] uppercase mb-4">
                Policies
              </p>
              <h1 className="sm:text-[44px] text-[32px] font-ivy text-primary leading-tight">
                Terms & Conditions
              </h1>
            </div>
          </div>

          {/* RIGHT – Content */}
          <div className="sm:w-[65%] flex flex-col gap-10 text-secondary font-albertSans sm:text-lg leading-relaxed">
            <section className="flex flex-col gap-4">
              <h2 className="font-ivy text-2xl text-primary">
                Booking Rules
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Rates are on a twin share basis (Non-AC & EP plan).</li>
                <li>Applicable for adults aged 10 years and above.</li>
                <li>Children aged 5–9 years: ₹500 per night.</li>
                <li>Children aged 10 years and above are considered adults.</li>
                <li>
                  Guests must present a printout of the booking confirmation
                  email along with a photocopy of a valid photo ID at check-in.
                </li>
                <li>
                  For group bookings, the minimum payable amount at check-in
                  will be the amount quoted at the time of reservation.
                </li>
                <li>Pets are not allowed on the property.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-ivy text-2xl text-primary">
                Check-in & Check-out
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Check-in time: 12:00 PM</li>
                <li>Check-out time: 10:00 AM</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-ivy text-2xl text-primary">
                Extra Person Charges
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Classic Rooms: ₹1,000 per extra person per night</li>
                <li>Deluxe Heritage Rooms: ₹1,250 per extra person per night</li>
                <li>Deluxe Rooms: ₹1,250 per extra person per night</li>
                <li>Premium Rooms: ₹1,500 per extra person per night</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-ivy text-2xl text-primary">
                Cancellation Policy
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  In case of cancellations (natural or other reasons), the
                  advance payment will be retained as credit for your next
                  visit.
                </li>
                <li>No refunds will be issued.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
