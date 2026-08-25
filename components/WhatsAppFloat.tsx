"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919946354511";

const whatsappMessage = encodeURIComponent(
  `Hello 👋
I'm interested in booking a stay at Wayanad Homestay.

Check-in date:
Check-out date:
Number of guests:

Please share availability & tariff.`
);

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Booking"
      className="!fixed bottom-8 right-8 z-[9999] bg-[#25D366] text-white p-6 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
