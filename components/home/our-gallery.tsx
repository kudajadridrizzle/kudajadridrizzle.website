import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 1, label: 'All' },
  { id: 2, label: 'Heritage & Architecture' },
  { id: 3, label: 'Nature & Serenity' },
  { id: 4, label: 'Rooms & Interiors' },
];

const galleryImages: Record<number, string[]> = {
  1: ['/assets/imageOne.jpg', '/assets/imageTwo.jpg', '/assets/imageThree.jpg', '/assets/imageOne.jpg'],
  2: ['/assets/heritage1.jpg', '/assets/heritage2.jpg', '/assets/heritage3.jpg'],
  3: ['/assets/nature1.jpg', '/assets/nature2.jpg', '/assets/nature3.jpg'],
  4: ['/assets/room1.jpeg', '/assets/room2.jpeg', '/assets/room3.jpeg'],
};

const OurGallery = () => {
  const [navItem, setNavItem] = useState<number>(1);
  const [currentImages, setCurrentImages] = useState(galleryImages[1]);
  const heading = 'Our Gallery - Wayanad Homestays Visual Tour';
  const content = "Take a visual tour of our beautiful property through our gallery and video tour. Explore images of our well-appointed rooms, traditional architecture, and serene outdoor spaces surrounded by lush greenery. See the inviting dining area where guests enjoy authentic home-cooked meals and the cozy corners perfect for relaxation. Our video tour offers a complete walkthrough, showcasing every detail that makes our **homestay in Wayanad** truly unique. From landscaped gardens to charming interiors, each photo captures the comfort, warmth, and natural beauty you’ll find here. Let our property gallery inspire your next stay at one of the finest homestays in Wayanad.";

  const [expanded, setExpanded] = useState(false);
  const maxChars = 400;

  const isLong = content.length > maxChars;
  const preview = isLong ? content.slice(0, maxChars) + '...' : content;

  useEffect(() => {
    setCurrentImages(galleryImages[navItem]);
  }, [navItem]);

  return (
    <div className="px-4 py-14 sm:px-[12%] sm:py-32 lg:px-[12%] flex flex-col gap-[66px]">
      <div className="flex flex-col sm:flex-row">
        <h2 className="flex-1 text-primary font-ivy text-[32px] sm:text-[44px]">
          {heading}
        </h2>
        <div className="flex-1 text-secondary sm:text-xl font-albertSans">
          <p>
            {expanded || !isLong ? (
              <>
                Take a visual tour of our beautiful property through our gallery and video tour. Explore images of our well-appointed rooms, traditional architecture, and serene outdoor spaces surrounded by lush greenery. See the inviting dining area where guests enjoy authentic home-cooked meals and the cozy corners perfect for relaxation. Our video tour offers a complete walkthrough, showcasing every detail that makes our <strong>homestay in Wayanad</strong> truly unique. From landscaped gardens to charming interiors, each photo captures the comfort, warmth, and natural beauty you’ll find here. Let our property gallery inspire your next stay at one of the finest homestays in Wayanad.
              </>
            ) : (
              preview
            )}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 block text-sm text-primary hover:underline focus:outline-none"
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>

      <div className="hidden sm:flex justify-center">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            className={`px-3.5 py-2 cursor-pointer transition-colors font-albertSans ${
              navItem === id
                ? 'border-b border-primary text-primary'
                : 'text-secondary'
            }`}
            onClick={() => setNavItem(id)}
          >
            {label}
          </a>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={navItem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex flex-col gap-2"
        >
          <div className="hidden sm:block h-[536px]">
            <img
              src={currentImages[0]}
              alt=""
              className="object-cover size-full rounded-[16px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:h-[342px]">
            <img
              src={currentImages[1]}
              alt=""
              className="h-full rounded-[16px] flex-1 object-cover"
            />
            <img
              src={currentImages[2]}
              alt=""
              className="h-full rounded-[16px] flex-1 object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OurGallery;
