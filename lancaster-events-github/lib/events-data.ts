export interface TopEvent {
  rank: number;
  emoji: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface CalendarEvent {
  name: string;
  time: string;
  location: string;
  details: string;
  price: string;
  link: string;
  linkLabel: string;
  isTopPick?: boolean;
}

export interface DayEvents {
  date: string;
  dayLabel: string;
  events: CalendarEvent[];
}

export interface RecurringEvent {
  name: string;
  day: string;
  location: string;
  details: string;
  price: string;
}

export const topEvents: TopEvent[] = [
  {
    rank: 1,
    emoji: '🎸',
    title: "Broadway's Rock of Ages Band®",
    date: 'April 4 | 8:00 PM',
    location: 'Lancaster Performing Arts Center',
    description: 'Featuring American Idol alum Constantine Maroulis alongside Whitesnake\'s Joel Hoekstra and Blondie\'s Tommy Kessler. A rare chance to see legitimate rock royalty perform Broadway-meets-arena-rock hits in an intimate 784-seat venue. This isn\'t a tribute act — it\'s the real deal.',
  },
  {
    rank: 2,
    emoji: '🌸',
    title: '74th Annual Almond Blossom Festival',
    date: 'April 11–12',
    location: 'George Lane Park, Quartz Hill',
    description: 'A beloved 74-year tradition that defines the Quartz Hill community. Includes a parade, pet parade, car show, live music (On Tap Band), food, and family activities. Its longevity and authenticity make it a true hidden gem among SoCal festivals.',
  },
  {
    rank: 3,
    emoji: '🎻',
    title: 'Black Violin: Full Circle Tour',
    date: 'April 10 | 7:00 PM',
    location: 'Lancaster Performing Arts Center',
    description: 'GRAMMY®-nominated duo Wil Baptiste (viola) and Kev Marcus (violin) fuse classical music with hip-hop in a genre-defying performance. Their shows regularly sell out nationwide — seeing them in a small-venue setting is a special opportunity.',
  },
  {
    rank: 4,
    emoji: '⛸️',
    title: 'Wizard of Oz on Ice',
    date: 'April 11 | 7:00 PM',
    location: 'Lancaster Performing Arts Center',
    description: 'A dazzling ice-skating production of the classic tale by Ice Creative Entertainment. Perfect for families and anyone who loves theatrical spectacle. Unique because full ice shows rarely tour to mid-size venues like LPAC.',
  },
  {
    rank: 5,
    emoji: '🎶',
    title: "Funky Lil' Somethin'",
    date: 'March 29 | 1:00–7:00 PM',
    location: 'Apollo Community Regional Park, Lancaster',
    description: 'A free outdoor music event by Bass Blown Entertainment — six hours of live entertainment in the park. This is the kind of grassroots community event that brings neighborhoods together, and you can\'t beat the price.',
  },
];

export const calendarDays: DayEvents[] = [
  {
    date: '2026-03-29',
    dayLabel: 'Sunday, March 29',
    events: [
      { name: 'HHSCV & HBSCV: Antelope Poppy Reserve Hike', time: '9:00 AM', location: 'AV California Poppy Reserve', details: 'Free intermediate hike through the poppy fields', price: 'Free', link: 'https://allevents.in/lancaster-ca/all', linkLabel: 'AllEvents' },
      { name: "Disney's Frozen — The Broadway Musical", time: '1:00–4:00 PM', location: 'Palmdale Playhouse', details: 'Community theater production of the hit Broadway show', price: 'Ticketed', link: 'https://www.cityofpalmdaleca.gov/Calendar.aspx', linkLabel: 'City of Palmdale' },
      { name: "Funky Lil' Somethin'", time: '1:00–7:00 PM', location: 'Apollo Community Regional Park, Lancaster', details: 'Free outdoor music event by Bass Blown Entertainment', price: 'Free', link: 'https://allevents.in/lancaster-ca/all', linkLabel: 'AllEvents', isTopPick: true },
      { name: 'Basic Financial Class', time: '2:00–3:00 PM', location: 'Palmdale City Library', details: 'Free financial literacy class', price: 'Free', link: 'https://www.cityofpalmdaleca.gov/Calendar.aspx', linkLabel: 'City of Palmdale' },
      { name: "The Dreamboats: Rock n' Roll Show", time: '2:00 PM', location: 'Lancaster Performing Arts Center', details: "1950s rock 'n' roll revue presented by AVCCA", price: 'Ticketed', link: 'https://www.lpac.org/events/', linkLabel: 'LPAC' },
      { name: 'AV ALTA FC vs Chattanooga Red Wolves SC', time: '2:30 PM', location: 'Lancaster Municipal Stadium', details: 'USL League One professional soccer match', price: 'Ticketed', link: 'https://allevents.in/lancaster-ca/all', linkLabel: 'AllEvents' },
      { name: 'OPEN SEASON 2', time: '3:30 PM', location: 'Pioneer Event Center, Lancaster', details: 'Live entertainment event', price: 'Ticketed', link: 'https://allevents.in/lancaster-ca/all', linkLabel: 'AllEvents' },
    ],
  },
  {
    date: '2026-03-30',
    dayLabel: 'Monday, March 30',
    events: [
      { name: 'Movers & Shakers Senior Walking Club', time: '8:00–11:00 AM', location: 'Prime Desert Woodland, Lancaster', details: 'Leisurely nature walk for seniors', price: 'Free', link: 'https://www.cityoflancasterca.org/our-city/departments-services/parks-recreation-arts/special-events', linkLabel: 'City of Lancaster' },
      { name: 'Advanced Writing Class', time: '5:00–6:00 PM', location: 'Palmdale City Library', details: 'Free creative writing class', price: 'Free', link: 'https://www.cityofpalmdaleca.gov/Calendar.aspx', linkLabel: 'City of Palmdale' },
      { name: 'We Run Monday', time: '6:30 PM', location: 'Rayburn Park, Lancaster', details: 'Community run/hike/walk group', price: 'Free', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
      { name: 'Monday Night Bingo', time: 'Evening', location: 'St. Joseph Hall, Paraclete Campus', details: 'Weekly community bingo night', price: 'Varies', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
    ],
  },
  {
    date: '2026-03-31',
    dayLabel: 'Tuesday, March 31',
    events: [
      { name: 'Books and Barks', time: '3:30–5:00 PM', location: 'Palmdale City Library', details: 'Kids read to therapy dogs — great for young readers', price: 'Free', link: 'https://www.cityofpalmdaleca.gov/Calendar.aspx', linkLabel: 'City of Palmdale' },
      { name: 'Taco Tuesdays', time: 'Evening', location: 'Various venues, Lancaster', details: 'Smokehouse tacos with drink specials', price: 'Varies', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
      { name: 'AV Pick-Up Soccer (Tuesday)', time: 'Evening', location: 'Palmdale', details: 'Weekly casual soccer game — all skill levels', price: 'Free', link: 'https://www.meetup.com/find/us--ca--lancaster/', linkLabel: 'Meetup' },
    ],
  },
  {
    date: '2026-04-01',
    dayLabel: 'Wednesday, April 1',
    events: [
      { name: 'Wednesdays at the Trucks', time: 'Evening', location: 'Lancaster/Palmdale', details: 'Weekly food truck gathering', price: 'Pay-as-you-eat', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
      { name: 'Canyon Country Farmers Market', time: 'Evening', location: 'Canyon Country', details: 'Local farmers and artisans market', price: 'Free entry', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
      { name: 'Family Night & Beginner Linedance Lessons', time: 'Evening', location: 'Buckle & Boots, Lancaster', details: 'Linedance lessons + half-off pizza dine-in special', price: 'Varies', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
      { name: 'Board, Card & Video Game Night', time: 'Evening', location: 'The OUTReach Center, Lancaster', details: 'LGBT+ affirming safe-space game night', price: 'Free', link: 'https://www.meetup.com/antelope-valley-board-game-group/', linkLabel: 'Meetup' },
    ],
  },
  {
    date: '2026-04-02',
    dayLabel: 'Thursday, April 2',
    events: [
      { name: 'Opening & Award Ceremony: 41st Annual High School Student Art Exhibition', time: '2:00 PM', location: 'MOAH: CEDAR, Lancaster', details: 'Student art showcase and awards ceremony', price: 'Free', link: 'https://allevents.in/lancaster-ca/all', linkLabel: 'AllEvents' },
      { name: 'The BLVD Market', time: '4:00–9:00 PM', location: 'The BLVD, Lancaster', details: 'Weekly certified farmers market with artisan vendors', price: 'Free entry', link: 'https://www.theblvdlancaster.com/events.html', linkLabel: 'The BLVD' },
      { name: 'AV Board Game Night', time: 'Evening', location: 'Transplants Brewery, Palmdale', details: 'Bi-weekly board game meetup — all ages welcome', price: 'Free', link: 'https://www.meetup.com/antelope-valley-board-game-group/', linkLabel: 'Meetup' },
    ],
  },
  {
    date: '2026-04-03',
    dayLabel: 'Friday, April 3',
    events: [
      { name: 'Bring Your Own Vinyl (BYOV) Night', time: 'Evening', location: 'Lucky Luke Brewing, Palmdale', details: 'Bring your records to be spun — craft beer on tap', price: 'Free entry', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
      { name: 'Drink & Draw (hosted by Gus Beeler)', time: 'Evening', location: 'Lancaster area', details: 'Social art + drinks event', price: 'Free', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
    ],
  },
  {
    date: '2026-04-04',
    dayLabel: 'Saturday, April 4',
    events: [
      { name: 'Speak to Release: Journal & Spoken Word Workshop', time: '1:00 PM', location: '548 W Lancaster Blvd, Lancaster', details: 'Creative expression through journaling and spoken word', price: 'Ticketed', link: 'https://www.eventbrite.com/d/ca--lancaster/events/', linkLabel: 'Eventbrite' },
      { name: "Broadway's Rock of Ages Band®", time: '8:00 PM', location: 'Lancaster Performing Arts Center', details: 'Constantine Maroulis, Joel Hoekstra, Tommy Kessler perform arena-rock hits', price: 'Ticketed', link: 'https://www.lpac.org/events/', linkLabel: 'LPAC', isTopPick: true },
    ],
  },
  {
    date: '2026-04-05',
    dayLabel: 'Sunday, April 5',
    events: [
      { name: 'Easter Extravaganza', time: '1:30 PM', location: '1051 Columbia Way, Lancaster', details: 'Free community Easter celebration — family friendly', price: 'Free', link: 'https://www.eventbrite.com/d/ca--lancaster/events/', linkLabel: 'Eventbrite' },
    ],
  },
  {
    date: '2026-04-08',
    dayLabel: 'Wednesday, April 8',
    events: [
      { name: 'Wednesdays at the Trucks', time: 'Evening', location: 'Lancaster/Palmdale', details: 'Weekly food truck gathering', price: 'Pay-as-you-eat', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
      { name: 'Canyon Country Farmers Market', time: 'Evening', location: 'Canyon Country', details: 'Weekly farmers market', price: 'Free entry', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
      { name: 'Family Night & Beginner Linedance Lessons', time: 'Evening', location: 'Buckle & Boots, Lancaster', details: 'Linedance + pizza deal', price: 'Varies', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
    ],
  },
  {
    date: '2026-04-09',
    dayLabel: 'Thursday, April 9',
    events: [
      { name: 'Exact Staff Recruitment Event', time: '9:00 AM', location: '1420 W Ave I, Lancaster', details: 'Job fair / recruitment event', price: 'Free', link: 'https://www.eventbrite.com/d/ca--lancaster/events/', linkLabel: 'Eventbrite' },
      { name: 'The BLVD Market', time: '4:00–9:00 PM', location: 'The BLVD, Lancaster', details: 'Weekly certified farmers market', price: 'Free entry', link: 'https://www.theblvdlancaster.com/events.html', linkLabel: 'The BLVD' },
    ],
  },
  {
    date: '2026-04-10',
    dayLabel: 'Friday, April 10',
    events: [
      { name: 'Black Violin: Full Circle Tour', time: '7:00 PM', location: 'Lancaster Performing Arts Center', details: 'GRAMMY-nominated classical/hip-hop fusion duo', price: 'Ticketed', link: 'https://www.lpac.org/events/', linkLabel: 'LPAC', isTopPick: true },
      { name: 'El Fantasma y Su Equipo Armado & Legado 7', time: '8:00 PM', location: 'AV Event Center, Lancaster', details: 'Regional Mexican music concert', price: 'Ticketed', link: 'https://allevents.in/lancaster-ca/all', linkLabel: 'AllEvents' },
      { name: 'Bring Your Own Vinyl (BYOV) Night', time: 'Evening', location: 'Lucky Luke Brewing, Palmdale', details: 'Vinyl night at the taproom', price: 'Free entry', link: 'https://www.antelopevalley.com/events.html', linkLabel: 'AntelopeValley.com' },
    ],
  },
  {
    date: '2026-04-11',
    dayLabel: 'Saturday, April 11',
    events: [
      { name: '74th Almond Blossom Festival Parade & Pet Parade', time: '9:00 AM', location: 'M & 50th St W, Quartz Hill', details: 'Historic community parade — 74th year!', price: 'Free', link: 'https://quartzhillchamber.com/events/almond-blossom-festival/', linkLabel: 'Quartz Hill Chamber', isTopPick: true },
      { name: 'OYHFS Career & Job Fair (Ages 18–25)', time: '10:00 AM', location: 'AV Family YMCA, Lancaster', details: 'Job fair for transition-age youth', price: 'Free', link: 'https://www.eventbrite.com/d/ca--lancaster/events/', linkLabel: 'Eventbrite' },
      { name: 'Almond Blossom Festival Car Show', time: '11:00 AM', location: 'George Lane Park, Quartz Hill', details: 'Classic car show as part of the festival', price: 'Free', link: 'https://allevents.in/lancaster-ca/all', linkLabel: 'AllEvents' },
      { name: 'On Tap Band AV LIVE — Almond Blossom Festival', time: '12:00 PM', location: 'George Lane Park, Quartz Hill', details: 'Live music at the festival', price: 'Free', link: 'https://allevents.in/lancaster-ca/all', linkLabel: 'AllEvents' },
      { name: '2026 Spring Dinner & Dance', time: '3:00 PM', location: '642 W Jackman St, Lancaster', details: 'Community dinner and dance party', price: 'Ticketed', link: 'https://www.eventbrite.com/d/ca--lancaster/events/', linkLabel: 'Eventbrite' },
      { name: 'Wizard of Oz on Ice', time: '7:00 PM', location: 'Lancaster Performing Arts Center', details: 'Classic tale performed entirely on ice', price: 'Ticketed', link: 'https://www.lpac.org/events/', linkLabel: 'LPAC', isTopPick: true },
    ],
  },
  {
    date: '2026-04-12',
    dayLabel: 'Sunday, April 12',
    events: [
      { name: '74th Almond Blossom Festival (Day 2)', time: 'All Day', location: 'George Lane Park, Quartz Hill', details: 'Festival continues with food, vendors, and entertainment', price: 'Free', link: 'https://quartzhillchamber.com/events/almond-blossom-festival/', linkLabel: 'Quartz Hill Chamber', isTopPick: true },
      { name: 'Cousins Maine Lobster', time: '11:00 AM', location: 'George Lane Park, Quartz Hill', details: 'Famous food truck — lobster rolls and more', price: 'Pay-as-you-eat', link: 'https://allevents.in/lancaster-ca/all', linkLabel: 'AllEvents' },
      { name: 'Poppy Photography Workshop', time: '12:00 PM', location: '138 Ave G-4, Lancaster', details: 'Outdoor photography workshop with Anabel DFlux', price: 'Ticketed', link: 'https://allevents.in/lancaster-ca/all', linkLabel: 'AllEvents' },
    ],
  },
];

export const recurringEvents: RecurringEvent[] = [
  { name: 'Monday Night Bingo', day: 'Mon', location: 'St. Joseph Hall, Lancaster', details: 'Community bingo', price: 'Varies' },
  { name: 'We Run Monday', day: 'Mon', location: 'Rayburn Park, Lancaster', details: 'Run/walk/hike group, 6:30 PM', price: 'Free' },
  { name: 'AV Pick-Up Soccer', day: 'Tue/Thu/Sat', location: 'Palmdale', details: 'Drop-in soccer for all levels', price: 'Free' },
  { name: 'Taco Tuesdays', day: 'Tue', location: 'Various, Lancaster', details: 'Tacos + drink specials', price: 'Varies' },
  { name: 'Wednesdays at the Trucks', day: 'Wed', location: 'Lancaster/Palmdale', details: 'Food truck rally', price: 'Pay-as-you-eat' },
  { name: 'Canyon Country Farmers Market', day: 'Wed', location: 'Canyon Country', details: 'Fresh produce + artisans', price: 'Free entry' },
  { name: 'Linedance Lessons + Family Night', day: 'Wed', location: 'Buckle & Boots, Lancaster', details: 'Lessons + half-off pizza', price: 'Varies' },
  { name: 'Board/Card/Video Game Night', day: 'Wed', location: 'OUTReach Center, Lancaster', details: 'LGBT+ affirming game night', price: 'Free' },
  { name: 'The BLVD Market', day: 'Thu', location: 'The BLVD, Lancaster', details: 'Certified farmers market, 4–9 PM', price: 'Free entry' },
  { name: 'BYOV Night', day: 'Fri', location: 'Lucky Luke Brewing, Palmdale', details: 'Bring your own vinyl records', price: 'Free entry' },
  { name: 'Tranquil Tuesdays Yoga', day: 'Tue', location: 'Lotus of the Valley, Lancaster', details: 'Wellness yoga session', price: 'Varies' },
  { name: 'Sound Bath Meditation', day: 'Various', location: 'Lotus of the Valley, Lancaster', details: 'Sound healing sessions', price: 'Varies' },
];
