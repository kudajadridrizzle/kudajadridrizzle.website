"use client";

interface ReviewSectionProps {
  rating?: string;
  title: string;
  description: React.ReactNode;
  showButton?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ReviewSectionComponent = ({
  rating = "4.7",
  title,
  description,
  showButton = true,
  className = "",
  children
}: ReviewSectionProps) => {
  return (
    <div className={`sm:py-32 sm:px-[12%] flex flex-col gap-6 items-center mobile:px-4 mobile:py-14 large:px-[12%] bg-gray-50 ${className}`}>
      <div className="flex gap-4 items-center justify-center">
        <div><img src='assets/ReviwLeaf1.svg' alt="" /></div>
        <span className="block sm:text-[100px] mobile:text-[52px] font-albertSans text-primary">
          {rating}
        </span>
        <div><img src='assets/ReviwLeaf2.svg' alt="" /></div>
      </div>
      
      <div className="flex flex-col gap-2 items-center max-w-4xl">
        <h2 className="text-primary font-ivy sm:text-[44px] mobile:text-[32px] font-normal text-center">
          {title}
        </h2>
        <p className="sm:text-xl text-secondary text-center font-albertSans">
          {description}
        </p>
      </div>
      
      {children && (
        <div className="w-full mt-8">
          {children}
        </div>
      )}
      
      {showButton && (
        <div className="mt-8">
          <button
            className="px-6 py-3 rounded-full border border-primary text-primary font-albertSans font-medium text-base hover:bg-primary hover:text-white transition-colors"
            onClick={() => {
              window.open(
                'https://www.google.com/maps/place/Kudajadri+Drizzle+-+Best+Wayanad+Homestays/@11.6944682,76.0899646,17z/data=!4m11!3m10!1s0x3ba6752bf8e8c185:0x5bf951fa893c48b4!5m2!4m1!1i2!8m2!3d11.6944682!4d76.0925395!9m1!1b1!16s%2Fg%2F1ptwp6yd6?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D',
                '_blank'
              );
            }}
          >
            Read More Reviews
          </button>
        </div>
      )}
    </div>
  );
};


const ReviewSession = () => {
  return (
    <ReviewSectionComponent 
      rating="4.6"
      title="Why Guests Choose Our Wayanad Homestay"
      description={
        <>
          Discover why guests recommend us among the best <strong>homestays in Wayanad</strong>. From the warm welcome to the peaceful surroundings, many share how our hospitality, authentic home-cooked meals, and personal attention made their visit truly special. Read their reviews, feel their experiences, and see why they keep coming back. If you’ve stayed with us, we’d love to hear your story too. Share your review and help fellow travelers find comfort, culture, and memorable moments at our homestay. Your words could inspire someone to choose the perfect stay in the beautiful hills of Wayanad.
        </>
      }
      className="bg-white"
    >
      {/* <div className="grid md:grid-cols-2 gap-8 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Perfect Getaway</h3>
          <p className="text-secondary">"An amazing experience! The perfect blend of comfort and nature. Can't wait to come back!" - Ravi K.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Excellent Hospitality</h3>
          <p className="text-secondary">"The staff went above and beyond to make our stay memorable. The food was delicious!" - Priya M.</p>
        </div>
      </div> */}
    </ReviewSectionComponent>
  );
};

export default ReviewSession;