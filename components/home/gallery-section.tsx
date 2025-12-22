

const GallarySession = () => {
  return (
    <>
      {/* Desktop / Tablet Layout */}
      <div className="flex overflow-x-auto">
        <div className="flex-1">
          <img src='assets/HomeAutoScroll/1.webp' className="h-full w-full object-cover" alt="Gallery image 1" />
        </div>
        <div className="flex-1">
          <img src='assets/HomeAutoScroll/2.webp' className="h-full w-full object-cover" alt="Gallery image 2" />
        </div>
        <div className="flex-1">
          <img src='assets/HomeAutoScroll/3.webp' className="h-full w-full object-cover" alt="Gallery image 3" />
        </div>
        <div className="flex-1">
          <img src='assets/HomeAutoScroll/4.webp' className="h-full w-full object-cover" alt="Gallery image 4" />
        </div>
      </div>

    </>
  );
};

export default GallarySession;
