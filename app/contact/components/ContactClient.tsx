"use client";

import { useState } from "react";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "kudajadri@ymail.com";
  const whatsappNumber = "+91 9946 354 511";

  const handleChange =
    (field: "name" | "email" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    const { name, email, message } = form;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const encodedMessage = encodeURIComponent(
      `Hello! I'd like to get in touch.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    const phone = whatsappNumber.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="sm:mt-[90px] mt-[52px]">
      <main className="px-4 flex flex-col items-center">
        {/* Heading */}
        <section className="text-center flex flex-col gap-6 pt-12">
          <h2 className="tracking-[1.6px] uppercase text-base">Contact Us</h2>
          <h1 className="sm:text-[72px] text-[32px] font-staylista">
            Online Booking of Wayanad Homestays & Cottages
          </h1>
        </section>

        {/* Content */}
        <section className="flex flex-col sm:flex-row gap-12 sm:py-24 max-w-6xl w-full">
          {/* Address */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h3 className="uppercase tracking-[1.6px]">Address</h3>
              <p className="font-ivy text-[32px]">Come</p>
              <a
                href={process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                Kudajadri Drizzle Homestay, Kayakkandy House, MR School Road,
                Kaniyambetta, Wayanad, Kerala - 673122, India.
              </a>
            </div>

            {/* Email */}
            <div>
              <h3 className="uppercase tracking-[1.6px]">Email</h3>
              <a
                href={`mailto:${email}`}
                className="text-secondary hover:underline"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex-1">
            <h3 className="uppercase tracking-[1.6px]">Phone</h3>
            <p className="font-ivy text-[32px]">Call</p>
            <a
              href={`tel:${whatsappNumber}`}
              className="text-secondary hover:underline"
            >
              {whatsappNumber}
            </a>
          </div>

          {/* Message Form */}
          <div className="flex-1">
            <h3 className="uppercase tracking-[1.6px]">Message</h3>
            <p className="font-ivy text-[32px]">Write</p>

            <div className="flex flex-col gap-4 mt-4">
              <Input
                label="Name"
                value={form.name}
                onChange={handleChange("name")}
              />
              <Input
                label="Email"
                value={form.email}
                onChange={handleChange("email")}
              />
              <Textarea
                label="Message"
                value={form.message}
                onChange={handleChange("message")}
              />

              <button
                onClick={handleSubmit}
                className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#666] font-medium">{label}</label>
      <input
        value={value}
        onChange={onChange}
        className="border border-[#BFBFBF] p-3 rounded-lg h-[54px]"
      />
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#666] font-medium">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        rows={4}
        className="border border-[#BFBFBF] p-3 rounded-lg resize-none"
      />
    </div>
  );
}
