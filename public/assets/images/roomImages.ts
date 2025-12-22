// Room Images - Centralized image imports for CMS
// Fixed image paths to correctly reference public/assets directory

// Image mapping for CMS
// All images are in public directory, so we reference them as public URLs
export const roomImages = {
  roomOne: '/assets/roomOne.jpg',
  roomTwo: '/assets/roomTwo.jpg',
  roomThree: '/assets/roomThree.jpg',
  PremiumImg1: '/assets/PremiumImg1.jpg',
  aboutHero: '/assets/aboutLegacyImage.jpg', // Using an existing image from public/assets
} as const;

// Type for image keys
export type RoomImageKey = keyof typeof roomImages;

// Helper function to get image by key
export const getRoomImage = (imageKey: RoomImageKey): string => {
  return roomImages[imageKey];
};