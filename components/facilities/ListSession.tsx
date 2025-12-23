const ROOMS = [
  'Spacious Rooms',
  'Shared Rooms',
  'Heritage Rooms',
  'Kitchen Access',
];

const AMENITIES = [
  'Hot Water',
  'Power Backup',
  'Free Wifi',
  'Verandahs',
  'Private Parking',
  'Indoor Games',
  'CCTV Security',
  'Rainwater Supply',
  'Common Pool',
  'Campfire Setup',
  'Kids’ Play Area',
  'Organic Garden',
  'Nature Walks',
  'Housekeeping',
  'Laundry',
  'Pick-up Service',
  'Drop-off Service',
  'Local Guidance',
  'Tourist Access',
];

const DINING = ['Kerala Cuisine', 'Home Meals'];

const EXPERIENCES = ['Nature Walks', 'Wildlife Spotting', 'Local Hosts'];

const SERVICES = ['Housekeeping', 'Laundry', 'Pick-up Service', 'Drop-off Service'];

const SUSTAINABILITY = ['Composting', 'Organic Garden'];

const ListSession = () => {
  return (
    <section className="mobile:p-4 sm:p-20 mx-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      
        {/* Rooms */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-xl sm:text-2xl font-ivy">Room Options</h2>
          <ul className="list-disc pl-5 space-y-2">
            {ROOMS.map(room => (
              <li
                key={room}
                className="text-base sm:text-lg leading-relaxed text-primary/80"
              >
                {room}
              </li>
            ))}
          </ul>
        </div>

        {/* Amenities */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-xl sm:text-2xl font-ivy">Facilities & Amenities</h2>
          <ul className="list-disc pl-5 space-y-2">
            {AMENITIES.map(item => (
              <li
                key={item}
                className="text-base sm:text-lg leading-relaxed text-primary/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Dining & Experiences */}
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-xl sm:text-2xl font-ivy">Dining Options</h2>
            <ul className="list-disc pl-5 space-y-2">
              {DINING.map(item => (
                <li
                  key={item}
                  className="text-base sm:text-lg leading-relaxed text-primary/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3">
            <h2 className="text-xl sm:text-2xl font-ivy">Experiences & Activities</h2>
            <ul className="list-disc pl-5 space-y-2">
              {EXPERIENCES.map(item => (
                <li
                  key={item}
                  className="text-base sm:text-lg leading-relaxed text-primary/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services & Sustainability */}
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-xl sm:text-2xl font-ivy">Guest Services</h2>
            <ul className="list-disc pl-5 space-y-2">
              {SERVICES.map(item => (
                <li
                  key={item}
                  className="text-base sm:text-lg leading-relaxed text-primary/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3">
            <h2 className="text-xl sm:text-2xl font-ivy">Sustainable Practices</h2>
            <ul className="list-disc pl-5 space-y-2">
              {SUSTAINABILITY.map(item => (
                <li
                  key={item}
                  className="text-base sm:text-lg leading-relaxed text-primary/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListSession;
