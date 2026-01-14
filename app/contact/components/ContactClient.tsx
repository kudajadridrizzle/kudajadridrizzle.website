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

    window.open(
      `https://wa.me/${phone}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="mt-[52px] sm:mt-[90px] pb-24 sm:pb-32">
      <main className="px-4 flex flex-col items-center">
        {/* Heading */}
        <section className="text-center flex flex-col gap-4 pt-10 sm:pt-12">
          <h2 className="tracking-[1.6px] uppercase text-sm sm:text-base">
            Contact Us
          </h2>

          <h1 className="text-[32px] sm:text-[72px] font-staylista leading-tight">
            Online Booking of Wayanad Homestays & Cottages
          </h1>
        </section>

        {/* Content */}
        <section className="flex flex-col sm:flex-row gap-16 sm:py-24 max-w-6xl w-full mt-12 sm:mt-0">
          {/* Message Form */}
          <div className="flex-1 order-1 sm:order-3">
            <h3 className="uppercase tracking-[1.6px] text-sm">Message</h3>
            <p className="font-ivy text-[24px] sm:text-[32px]">Write</p>

            <div className="flex flex-col gap-4 mt-6">
              <Input label="Name" value={form.name} onChange={handleChange("name")} />
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
                className="bg-black text-white px-6 py-4 rounded-full font-medium transition hover:opacity-90 w-full"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Address */}
          <div className="flex-1 order-2 sm:order-1">
            <h3 className="uppercase tracking-[1.6px] text-sm">Address</h3>
            <p className="font-ivy text-[24px] sm:text-[32px]">Come</p>

            <a
              href={
                process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
                "https://www.google.com/maps/search/?api=1&query=Kudajadri+Drizzle+Homestay+Wayanad"
              }
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-secondary hover:underline block mt-2"
            >
              Kudajadri Drizzle Homestay, Kayakkandy House, MR School Road,
              Kaniyambetta, Wayanad, Kerala - 673122, India.
            </a>

            <div className="mt-8">
              <h3 className="uppercase tracking-[1.6px] text-sm">Email</h3>
              <a href={`mailto:${email}`} className="text-secondary hover:underline">
                {email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex-1 order-3 sm:order-2">
            <h3 className="uppercase tracking-[1.6px] text-sm">Phone</h3>
            <p className="font-ivy text-[24px] sm:text-[32px]">Call</p>
            <a href={`tel:${whatsappNumber}`} className="text-secondary hover:underline">
              {whatsappNumber}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

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
