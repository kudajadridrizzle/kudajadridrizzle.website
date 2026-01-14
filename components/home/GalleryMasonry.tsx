const images = [
  "/assets/imageOne.jpg",
  "/assets/imageTwo.jpg",
  "/assets/imageThree.jpg",
  "/assets/heritage1.jpg",
  "/assets/heritage2.jpg",
  "/assets/heritage3.jpg",
  "/assets/nature1.jpg",
  "/assets/nature2.jpg",
  "/assets/nature3.jpg",
  "/assets/room1.jpeg",
  "/assets/room2.jpeg",
  "/assets/room3.jpeg",
];

export default function GalleryMasonry() {
  return (
    <div className="pb-14 sm:pb-32">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Wayanad homestay gallery image ${index + 1}`}
            className="w-full rounded-[16px] break-inside-avoid"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
