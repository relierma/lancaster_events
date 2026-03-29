import { ExternalLink } from 'lucide-react';

const sources = [
  { name: 'City of Lancaster', url: 'https://www.cityoflancasterca.org' },
  { name: 'City of Palmdale', url: 'https://www.cityofpalmdaleca.gov' },
  { name: 'LPAC', url: 'https://www.lpac.org/events/' },
  { name: 'Eventbrite', url: 'https://www.eventbrite.com/d/ca--lancaster/events/' },
  { name: 'AllEvents', url: 'https://allevents.in/lancaster-ca/all' },
  { name: 'Meetup', url: 'https://www.meetup.com/find/us--ca--lancaster/' },
  { name: 'AntelopeValley.com', url: 'https://www.antelopevalley.com/events.html' },
  { name: 'The BLVD', url: 'https://www.theblvdlancaster.com/events.html' },
  { name: 'Quartz Hill Chamber', url: 'https://quartzhillchamber.com/' },
  { name: 'Destination Lancaster', url: 'https://www.destinationlancasterca.org/calendar' },
];

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-lg font-semibold mb-4">Sources</h3>
        <div className="flex flex-wrap gap-3 mb-8">
          {sources.map((s: { name: string; url: string }) => (
            <a
              key={s?.name ?? ''}
              href={s?.url ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-full transition-colors"
            >
              {s?.name ?? ''}
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 text-sm text-gray-500">
          <p>Compiled March 29, 2026 · Events are subject to change — verify details on the linked event pages before attending.</p>
          <p className="mt-2">Coverage: 20-mile radius around Lancaster, CA (Lancaster, Palmdale, Quartz Hill, Rosamond & surrounding Antelope Valley)</p>
        </div>
      </div>
    </footer>
  );
}
