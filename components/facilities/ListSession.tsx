type Section = {
  title: string;
  items: string[];
};

const SECTIONS: Section[] = [
  {
    title: 'Room Options',
    items: [
      'Spacious Rooms',
      'Shared Rooms',
      'Heritage Rooms',
      'Kitchen Access',
    ],
  },
  {
    title: 'Facilities & Amenities',
    items: [
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
    ],
  },
  {
    title: 'Dining Options',
    items: ['Kerala Cuisine', 'Home Meals'],
  },
  {
    title: 'Experiences & Activities',
    items: ['Nature Walks', 'Wildlife Spotting', 'Local Hosts'],
  },
  {
    title: 'Guest Services',
    items: ['Housekeeping', 'Laundry', 'Pick-up Service', 'Drop-off Service'],
  },
  {
    title: 'Sustainable Practices',
    items: ['Composting', 'Organic Garden'],
  },
];

const ListSession = () => {
  return (
    <section className="bg-white">
      <div className="divide-y divide-gray-200">

        {SECTIONS.map(section => (
          <div
            key={section.title}
            className="py-5"
          >
            <div>
              <h2 className="font-ivy text-xl text-primary sm:text-2xl">
                {section.title}
              </h2>
              <p className="mt-2 text-primary/80 text-sm sm:text-base leading-relaxed">
                {section.items.join(' | ')}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default ListSession;
