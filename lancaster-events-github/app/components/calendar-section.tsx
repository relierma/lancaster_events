import { DayEvents, CalendarEvent } from '@/lib/events-data';
import { MapPin, Clock, ExternalLink, Star, DollarSign } from 'lucide-react';

function PriceBadge({ price }: { price: string }) {
  const p = price?.toLowerCase?.() ?? '';
  if (p === 'free') return <span className="inline-flex items-center gap-1 text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Free</span>;
  if (p === 'ticketed') return <span className="inline-flex items-center gap-1 text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"><DollarSign className="w-3 h-3" />Ticketed</span>;
  return <span className="inline-flex items-center gap-1 text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{price ?? ''}</span>;
}

function EventCard({ event }: { event: CalendarEvent }) {
  return (
    <div className={`group bg-white rounded-lg border p-5 hover:shadow-md transition-all hover:border-teal-300 ${
      event?.isTopPick ? 'ring-2 ring-orange-300 border-orange-200' : 'border-gray-200'
    }`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-900 text-base truncate">{event?.name ?? 'Event'}</h4>
            {event?.isTopPick && (
              <span className="flex-shrink-0 inline-flex items-center gap-1 text-[10px] font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                <Star className="w-3 h-3" />TOP PICK
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-3">{event?.details ?? ''}</p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {event?.time ?? ''}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {event?.location ?? ''}
            </span>
            <PriceBadge price={event?.price ?? ''} />
          </div>
        </div>
        {event?.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-teal-600 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-3 py-2 rounded-lg transition-colors"
          >
            {event?.linkLabel ?? 'Details'}
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function CalendarSection({ days }: { days: DayEvents[] }) {
  return (
    <section id="full-calendar" className="py-16 scroll-mt-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          📅 Day-by-Day
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Full Event Calendar</h2>
        <p className="text-gray-500 mt-3 max-w-lg mx-auto">Every event happening in the Lancaster area over the next two weeks, organized by date.</p>
      </div>

      <div className="space-y-10">
        {(days ?? []).map((day: DayEvents) => (
          <div key={day?.date ?? ''}>
            <div className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur-sm py-3">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                {day?.dayLabel ?? ''}
                <span className="text-sm font-normal text-gray-400">— {day?.events?.length ?? 0} event{(day?.events?.length ?? 0) !== 1 ? 's' : ''}</span>
              </h3>
            </div>
            <div className="grid gap-3 mt-3">
              {(day?.events ?? []).map((event: CalendarEvent, idx: number) => (
                <EventCard key={idx} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
