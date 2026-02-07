type Section = {
  title: string;
  items: string[];
};

const SECTIONS: Section[] = [
  {
    title: 'Rooms',
    items: [
      'Spacious Rooms',
      'Shared Rooms',
      'Heritage Rooms',
      'Kitchen Access',
    ],
  },
  {
    title: 'Amenities',
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
    title: 'Dining',
    items: ['Kerala Cuisine', 'Home Meals'],
  },
  {
    title: 'Experiences',
    items: ['Nature Walks', 'Wildlife Spotting', 'Local Hosts'],
  },
  {
    title: 'Services',
    items: ['Housekeeping', 'Laundry', 'Pick-up Service', 'Drop-off Service'],
  },
  {
    title: 'Sustainability',
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
            className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-5"
          >
            {/* Left column */}
            <div className="sm:col-span-1 font-ivy text-lg">
              {section.title}
            </div>

            {/* Right column */}
            <div className="sm:col-span-3 text-primary/80 text-sm sm:text-base leading-relaxed">
              {section.items.join(' | ')}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default ListSession;
