import { useParams, useRouter } from 'next/navigation';
import { roomData } from '../constants';

interface AnotherRoomSessionProps {
  roomType?: string;
}

const AnotherRoomSession: React.FC<AnotherRoomSessionProps> = ({
  roomType = 'Classic',
}) => {
  const getSectionTitle = () => {
    switch (roomType.toLowerCase()) {
      case 'classic rooms':
        return 'More Room Options at Our Affordable Wayanad Homestays';
      case 'deluxe rooms':
        return 'More Room Options at Our Wayanad Cottages';
      case 'deluxe heritage rooms':
        return 'More Room Options at Our Heritage Wayanad Homestays';
      case 'premium rooms':
        return 'More Room Options at Our Premium Wayanad Homestays';
      default:
        return 'More Room Options at Our Affordable Wayanad Homestays';
    }
  };
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  return (
    <div className="px-4 py-14 sm:px-[12%] sm:py-32 flex flex-col sm:justify-between gap-[24px] lg:px-[12%] ">
      <div className="sm:pb-0 mobile:pb-8">
        <h2 className="text-[#000] text-[32px] sm:text-[44px] font-ivy">
          {getSectionTitle()}
        </h2>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="flex flex-col gap-8 sm:w-[412px] w-full ">
          <div>
            {id && (
              <img
                src={roomData[id]?.anotherRoomOne?.image}
                alt=""
                className="w-full"
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#000] text-lg font-albertSans">
              {id && roomData[id]?.anotherRoomOne?.title}
            </span>
            <div className="flex flex-col gap-3">
              <span className="text-[28px] sm:text-4xl font-light text-primary font-ivy">
                {id && roomData[id]?.anotherRoomOne.roomType}
              </span>
              <span className="text-lg text-secondary font-albertSans">
                {id && roomData[id].anotherRoomOne.description}
              </span>
            </div>
            <div>
              <button
                className="px-10 py-4 capitalize border rounded-full text-primary font-albertSans border-primary"
                onClick={() => {
                  if (id) {
                    router.push(roomData[id].anotherRoomOne.navigate as string);
                  }
                }}
              >
                See room
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:w-[412px] w-full">
          <div>
            <img
              src={id && roomData[id]?.anotherRoomTwo.image}
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[28px] sm:text-4xl font-light text-primary font-ivy">
              {id && roomData[id]?.anotherRoomTwo.roomType}
            </span>
            <span className="text-lg text-secondary font-albertSans">
              {id && roomData[id]?.anotherRoomTwo.description}
            </span>
            <div>
              <button
                className="px-10 py-4 capitalize border rounded-full text-primary font-albertSans border-primary"
                onClick={() => {
                  if (id) {
                    router.push(roomData[id].anotherRoomTwo.navigate as string);
                  }
                }}
              >
                See room
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:w-[412px] w-full">
          <div>
            <img
              src={id && roomData[id]?.anotherRoomThree.image}
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[28px] sm:text-4xl font-light text-primary font-ivy">
              {id && roomData[id]?.anotherRoomThree.roomType}
            </span>
            <span className="text-lg text-secondary font-albertSans">
              {id && roomData[id]?.anotherRoomThree.description}
            </span>
            <div>
              <button
                className="px-10 py-4 capitalize border rounded-full text-primary font-albertSans border-primary"
                onClick={() => {
                  if (id) {
                    router.push(roomData[id].anotherRoomThree.navigate as string);
                  }
                }}
              >
                See room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherRoomSession;
