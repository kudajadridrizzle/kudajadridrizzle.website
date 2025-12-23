"use client";
import Faq from "@/components/faq";
import Header from "@/components/Header";
import type { FaqFrontMatterAttributes } from "@/components/faq";
import AnotherRoomSession from "@/components/room-details/components/AnotherRoomSession";
import DeluxeRoomTips from "@/components/room-details/components/DeluxeRoomOverview";
import Hero from "@/components/room-details/components/Hero";
import RoomExperiences from "@/components/room-details/components/LocalExperiences";
import MorningSession from "@/components/room-details/components/MorningSession";
import { RoomPriceSession } from "@/components/room-details/components/room-priceing";
import RoomBookingCTA from "@/components/room-details/components/RoomBookingCTA";
import RoomExperience from "@/components/room-details/components/RoomExperience";
import RoomDetails from "@/components/room-details/components/RoomOverview";
import RoomServices from "@/components/room-details/components/RoomServices";
import RoomTips from "@/components/room-details/components/roomtips";
import WhoShouldBook from "@/components/room-details/components/WhoShouldBook";
import WhyThisRoom from "@/components/room-details/components/WhyThisRoom";
import { roomData } from "@/components/room-details/constants";
import { useParams } from "next/navigation";

const roomFaqs: Record<string, FaqFrontMatterAttributes> = {
  'classic': {
    title: 'Affordable Homestays in Wayanad - FAQs',
    faqs: [
      {
        question: <span><strong>What is the price range for affordable homestays in Wayanad?</strong></span>,
        answer: <span><strong>Affordable homestays in Wayanad</strong> usually range from ₹800 to ₹2,000 per night. These budget-friendly options offer clean rooms, basic amenities, and a peaceful atmosphere—perfect for solo travelers, couples, or families looking for a low-cost stay without compromising comfort.</span>,
      },
      {
        question: <span><strong>Are affordable Wayanad homestays clean and safe?</strong></span>,
        answer: <span>Yes, many <strong>budget homestays in Wayanad</strong> are family-run and well-maintained. They prioritize cleanliness and guest safety, offering a secure environment, friendly hosts, and essential services, making them ideal even for solo and women travelers.</span>,
      },
      {
        question: <span><strong>What amenities can I expect at a budget homestay in Wayanad?</strong></span>,
        answer: <span>Affordable <a href="https://www.kudajadridrizzle.com/">homestays in Wayanad</a> typically include basic furniture, attached bathrooms, hot water, parking, and Wi-Fi. While they may not have <a href="https://www.kudajadridrizzle.com/rooms/premium">luxury homestay</a> features, they provide all the essentials for a comfortable and relaxing stay close to nature.</span>,
      },
      {
        question: <span><strong>Are meals included at low-cost homestays in Wayanad?</strong></span>,
        answer: <span>Many <strong>budget-friendly Wayanad homestays</strong> include breakfast and offer home-cooked lunch or dinner at an extra cost. Meals are usually traditional Kerala dishes, prepared fresh by the host family using local ingredients.</span>,
      },
      {
        question: <span><strong>How can I find the best affordable homestay in Wayanad?</strong></span>,
        answer: <span>Use trusted booking platforms, filter by price, and check guest reviews for cleanliness and service. Look for homestays slightly away from town centers for better rates, and contact the property directly to ask about discounts or offers.</span>,
      },
      {
        question: <span><strong>Are affordable homestays in Wayanad suitable for families?</strong></span>,
        answer: <span>Yes, several affordable homestays in <a href="https://www.kudajadridrizzle.com/wayanad">Wayanad</a> offer family rooms or cottages with enough space and basic facilities. These stays offer privacy, safety, and a welcoming environment, making them a great choice for families on a budget.</span>,
      },
      {
        question: <span><strong>Can I book a low cost Wayanad homestay online?</strong></span>,
        answer: <span>Yes, most affordable homestays in Wayanad are listed on travel websites or have their own booking options via WhatsApp or phone. Early booking is recommended, especially during weekends and holidays when rooms fill up quickly.</span>,
      },
      {
        question: <span><strong>Are there affordable homestays near Wayanad tourist spots?</strong></span>,
        answer: <span>Yes, many budget homestays are located near popular attractions like Edakkal Caves, Pookode Lake, and Soochipara Falls. Staying nearby helps reduce travel costs and allows you to explore more with less time on the road.</span>,
      },
      {
        question: <span><strong>Do affordable homestays in Wayanad allow pets?</strong></span>,
        answer: <span>Some budget homestays in <a href="https://www.kudajadridrizzle.com/wayanad">Wayanad</a> are pet-friendly, but policies vary. Always check with the property before booking to confirm if pets are allowed and whether any extra charges apply.</span>,
      },
      {
        question: <span><strong>Why choose an affordable homestay over a hotel in Wayanad?</strong></span>,
        answer: <span>Affordable homestays in Wayanad offer a more local and personalized experience than hotels. With friendly hosts, traditional food, and a peaceful setting, they provide excellent value for money and a chance to connect with the region's culture.</span>,
      },
    ],
  },
  'deluxe-heritage': {
    title: 'Heritage Homestays in  Wayanad - FAQs',
    faqs: [
      { question: 'What is a traditional homestay in Wayanad?', answer: 'A traditional homestay in Wayanad offers accommodation in locally built homes, often made of wood or mud with tiled roofs. These stays provide an authentic Kerala village experience, home-cooked food, and warm hospitality rooted in culture and simplicity.' },
      { question: 'What defines a heritage homestay in Wayanad?', answer: "Heritage homestays in Wayanad are usually old ancestral homes preserved with original architecture, antique furniture, and cultural significance. Staying in one allows guests to experience the history, charm, and traditions of Wayanad's past while enjoying comfortable, well-maintained interiors." },
      { question: 'What kind of food is served at traditional or heritage homestays?', answer: 'Traditional and heritage homestays in Wayanad often serve home-cooked Kerala cuisine, including dishes made from locally sourced rice, coconut, and spices. Meals reflect the local lifestyle and are usually vegetarian or include simple non-vegetarian options on request.' },
      { question: 'Are traditional homestays in Wayanad suitable for modern travelers?', answer: "Yes, most traditional homestays combine rustic charm with modern essentials like clean bathrooms, Wi-Fi, and power backup. While they retain cultural authenticity, they still cater to the basic expectations of today's travelers looking for comfort with character." },
      { question: 'What experiences can I expect in a heritage homestay in Wayanad?', answer: "Guests can enjoy guided plantation walks, learn about the home's history, engage in cooking or cultural activities, and relax in a peaceful natural setting. A heritage homestay in Wayanad offers more than accommodation—it's a cultural immersion." },
      { question: 'Are these homestays safe for solo travelers and families?', answer: 'Yes, traditional and heritage homestays in Wayanad are usually family-run and provide a safe, welcoming atmosphere. Hosts are locals who ensure guest comfort and security, making them ideal for solo travelers, families, and senior citizens.' },
      { question: 'How do I book a traditional homestay in Wayanad?', answer: "You can book traditional or heritage Wayanad homestays through online travel platforms or directly via the homestay's website or WhatsApp. It's best to check guest reviews, amenities, and photos before confirming your stay." },
      { question: 'What is the price range of heritage and traditional homestays in Wayanad?', answer: 'Prices typically range from ₹1,000 to ₹4,000 per night depending on location, heritage value, and facilities. Despite their uniqueness, traditional and heritage homestays in Wayanad remain budget-friendly compared to resorts and hotels.' },
      { question: 'Do these homestays offer cultural activities?', answer: 'Yes, many heritage and traditional homestays in Wayanad offer experiences like cooking demos, folklore storytelling, farming participation, or traditional art and dance performances, depending on the host and season.' },
      { question: 'Why choose a heritage or traditional homestay over a hotel?', answer: "These homestays offer deeper cultural connection, personalized service, and a peaceful setting not found in typical hotels. Staying in a traditional or heritage homestay in Wayanad means living like a local, not just visiting." },
    ],
  },
  'deluxe': {
    title: 'Kudajadri Drizzle Cottages in Wayanad - FAQs',
    faqs: [
      { question: 'What makes Wayanad cottages a popular choice among travelers?', answer: 'Wayanad cottages are nestled in lush greenery, offering peaceful surroundings, traditional charm, and a relaxing environment. Ideal for nature lovers, they provide the perfect setting for a scenic and comfortable escape in the Western Ghats.' },
    { question: 'Are private cottages in Wayanad suitable for honeymooners?', answer: 'Yes, private cottages in Wayanad are perfect for honeymooners seeking a secluded and intimate stay. These cottages offer privacy, natural views, cozy interiors, and romantic vibes that make them ideal for couples.' },
    { question: 'Do cottages in Wayanad offer modern facilities?', answer: 'Yes, most cottages include essentials like attached bathrooms, hot water, Wi-Fi, and parking. Premium cottages may also feature private sit-outs, balconies, and access to gardens or campfire areas.' },
    { question: 'Can I find cottages within Wayanad homestays?', answer: 'Absolutely. Many Wayanad homestays include cottage-style stays that offer a homely feel along with privacy, personalized care, and local hospitality rooted in Kerala traditions.' },
    { question: 'Are there options for premium stays in cottages?', answer: 'Yes, travelers seeking a high-end experience can explore luxury homestays in Wayanad, where cottage stays come with refined interiors, scenic views, and elevated service standards.' },
    { question: 'What is the price range of cottage stays?', answer: 'Cottage stays range from ₹1,500 to ₹8,000 per night. Guests looking for value deals can check budget homestays in Wayanad, which offer clean, comfortable cottages with essential amenities.' },
    { question: 'Are cottages listed under Wayanad Room Accommodations?', answer: 'Yes, many cottages are part of Wayanad Room Accommodations, offering options for couples, families, and solo travelers with various layouts and styles to suit every budget and need.' },
    { question: 'Can groups or families stay in these cottages?', answer: 'Definitely. Several properties offer multi-room cottages or adjacent units suitable for families or groups. These often include open areas, bonfire zones, and kitchen access to enhance group stays.' },
    { question: 'Are tourist spots easily accessible from cottages?', answer: 'Yes, most cottages in Wayanad are located near top tourist attractions like Edakkal Caves, Pookode Lake, Soochipara Falls, and Banasura Sagar Dam, offering convenience for Wayanad sightseeing and day trips.' },
    { question: 'How can I book a cottage stay in Wayanad?', answer: 'You can book online through the property\'s official website or trusted platforms. Always check photos, amenities, and guest reviews to choose the right cottage that fits your needs and budget.' },
    ],
  },
  'premium': {
    title: 'Luxury Homestays in Wayanad - FAQs',
    faqs: [
      { question: 'What defines a premium homestay in Wayanad?', answer: 'Premium homestays in Wayanad offer upscale amenities, stylish interiors, and personalized hospitality in serene natural settings. These properties often include private cottages, scenic views, modern comforts, and curated local experiences, delivering a luxury homestay with the warmth of a homestay.' },
      { question: 'What facilities can I expect at a premium homestay in Wayanad?', answer: 'Premium Wayanad homestays typically offer spacious rooms, attached bathrooms, free Wi-Fi, hot water, private balconies, fine interiors, traditional meals, and extras like swimming pools, campfire setups, guided tours, or spa services—all designed to elevate your comfort and travel experience.' },
      { question: 'Are premium homestays in Wayanad suitable for honeymooners?', answer: 'Yes, premium homestays in Wayanad are a top choice for honeymooners. They offer privacy, romantic ambiance, beautiful views, and add-ons like candlelight dinners, flower decorations, and honeymoon packages in peaceful surroundings.' },
      { question: 'What is the average cost of a premium homestay in Wayanad?', answer: 'Premium homestay rates in Wayanad usually range from ₹4,000 to ₹10,000 per night, depending on the location, facilities, and season. These stays deliver excellent value for those seeking a high-end yet culturally rooted travel experience.' },
      { question: 'Can I book a premium homestay in Wayanad online?', answer: 'Yes, most premium homestays in Wayanad offer online booking through travel websites or their official pages. You can check availability, view photos, read guest reviews, and reserve your preferred dates in advance.' },
      { question: 'Are premium homestays better than resorts in Wayanad?', answer: 'While resorts offer hotel-style service, premium homestays in Wayanad combine comfort with cultural charm. You get the privacy and luxury of a resort along with local experiences, home-cooked food, and personalized hosting in a quieter, more natural setting.' },
      { question: 'Do premium homestays in Wayanad provide local experiences?', answer: "Yes, many premium homestays offer curated experiences like plantation walks, heritage tours, cooking sessions, or yoga classes. These add-ons allow guests to connect with Wayanad's culture, people, and environment beyond a typical tourist visit." },
      { question: 'Are these homestays ideal for weekend getaways?', answer: 'Absolutely. Premium Wayanad homestays are perfect for short luxury escapes. With comfort, privacy, and stunning locations, they offer a peaceful weekend retreat for couples, families, or groups seeking a relaxing break from city life.' },
      { question: 'Do premium homestays offer food and dining options?', answer: 'Yes, premium homestays in Wayanad typically serve homemade Kerala cuisine, often with the option of customizing meals. Some even provide private dining setups, barbecue options, or candlelit dinners for a more exclusive experience.' },
      { question: 'Is parking available at premium homestays in Wayanad?', answer: 'Yes, almost all premium homestays provide free and secure parking for guests. Properties located on estates or hilltops often have private driveways with enough space for multiple vehicles.' },
    ],
  },
};
export default function ClassicRooms() {
  const { id: roomId } = useParams();
    const faqContent = roomFaqs[roomId as keyof typeof roomFaqs] || roomFaqs['classic'];

  const roomDataItem =
    roomData[roomId as keyof typeof roomData] || roomData["classic"];

  return (
    <div>
      <Header variant="solid" />
      <Hero />
      <RoomPriceSession />
      <MorningSession roomData={roomDataItem} />
      <WhyThisRoom />
      <RoomServices />
      <RoomExperiences />
      <RoomDetails />
      <WhoShouldBook/>
      <RoomExperience />
      <DeluxeRoomTips />
      <RoomTips />
      <RoomBookingCTA />
      <AnotherRoomSession roomType={roomDataItem.roomType} />
      <Faq {...faqContent} />








    </div>
  );
}
