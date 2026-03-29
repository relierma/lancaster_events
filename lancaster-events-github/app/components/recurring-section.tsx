import { RecurringEvent } from '@/lib/events-data';
import { Repeat, MapPin } from 'lucide-react';

const dayColors: Record<string, string> = {
  Mon: 'bg-blue-100 text-blue-700',
  Tue: 'bg-green-100 text-green-700',
  Wed: 'bg-purple-100 text-purple-700',
  Thu: 'bg-amber-100 text-amber-700',
  Fri: 'bg-rose-100 text-rose-700',
  Sat: 'bg-cyan-100 text-cyan-700',
  Various: 'bg-gray-100 text-gray-600',
  'Tue/Thu/Sat': 'bg-teal-100 text-teal-700',
};

export default function RecurringSection({ events }: { events: RecurringEvent[] }) {
  return (
    <section id="recurring" className="py-16 scroll-mt-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <Repeat className="w-4 h-4" /> Every Week
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Recurring Weekly Events</h2>
        <p className="text-gray-500 mt-3 max-w-lg mx-auto">These events happen every week throughout the two-week window and beyond.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(events ?? []).map((event: RecurringEvent, idx: number) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-purple-300 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900 text-sm">{event?.name ?? ''}</h4>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${dayColors?.[event?.day ?? ''] ?? 'bg-gray-100 text-gray-600'}`}>
                {event?.day ?? ''}
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-2">{event?.details ?? ''}</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {event?.location ?? ''}
              </span>
              <span className="font-medium">{event?.price ?? ''}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
