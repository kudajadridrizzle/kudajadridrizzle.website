const TourPackageHero = () => {
  return (
    // Replaced Tailwind arbitrary values with inline styles for better reliability
    <div 
      className="relative h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/assets/aboutHero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Content */}
      <div className="relative z-10">
        {/* <Header /> */}
        <div className="text-[#ffff] font-staylista sm:text-[72px] h-[100vh] flex flex-col items-center justify-end mobile:text-5xl">
          <span className="text-center">Kudajdri Drizzle</span>
          <h2 className="mb-[120px] text-center">Your Ideal Choice for Homestays in Kalpetta</h2>
        </div>
      </div>
    </div>
  );
};

export default TourPackageHero;