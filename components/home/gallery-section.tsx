

const GallarySession = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative aspect-[4/3] sm:aspect-[3/2]">
            <img
              src={`/assets/HomeAutoScroll/${item}.webp`}
              className="absolute inset-0 h-full w-full object-cover"
              alt={`Gallery image ${item}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

    </>
  );
};

export default GallarySession;
