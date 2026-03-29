import { TopEvent } from '@/lib/events-data';
import { MapPin, Clock, Star } from 'lucide-react';

const rankColors = [
  'from-orange-500 to-amber-500',
  'from-pink-500 to-rose-400',
  'from-violet-500 to-purple-400',
  'from-cyan-500 to-teal-400',
  'from-emerald-500 to-green-400',
];

const rankBgColors = [
  'bg-orange-50 border-orange-200',
  'bg-pink-50 border-pink-200',
  'bg-violet-50 border-violet-200',
  'bg-cyan-50 border-cyan-200',
  'bg-emerald-50 border-emerald-200',
];

export default function TopEventsSection({ events }: { events: TopEvent[] }) {
  return (
    <section id="top-picks" className="py-16 scroll-mt-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <Star className="w-4 h-4" /> Editor&apos;s Top Picks
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Top 5 Must-See Events</h2>
        <p className="text-gray-500 mt-3 max-w-lg mx-auto">The most exciting, unique, and noteworthy happenings in the Antelope Valley this fortnight.</p>
      </div>

      <div className="space-y-6">
        {(events ?? []).map((event: TopEvent, idx: number) => (
          <div
            key={idx}
            className={`relative rounded-xl border p-6 sm:p-8 transition-shadow hover:shadow-lg ${rankBgColors?.[idx] ?? 'bg-gray-50 border-gray-200'}`}
          >
            {/* Rank badge */}
            <div className={`absolute -top-3 left-6 sm:left-8 bg-gradient-to-r ${rankColors?.[idx] ?? 'from-gray-500 to-gray-400'} text-white text-sm font-bold px-3 py-1 rounded-full shadow-md`}>
              #{event?.rank ?? idx + 1}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mt-2">
              <span className="text-4xl">{event?.emoji ?? '🎉'}</span>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{event?.title ?? 'Event'}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gray-400" />
                    {event?.date ?? ''}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {event?.location ?? ''}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{event?.description ?? ''}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
