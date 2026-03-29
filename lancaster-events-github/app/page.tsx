import { topEvents, calendarDays, recurringEvents } from '@/lib/events-data';
import HeroSection from './components/hero-section';
import TopEventsSection from './components/top-events-section';
import CalendarSection from './components/calendar-section';
import RecurringSection from './components/recurring-section';
import FooterSection from './components/footer-section';
import ScrollNav from './components/scroll-nav';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <ScrollNav />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <TopEventsSection events={topEvents} />
        <CalendarSection days={calendarDays} />
        <RecurringSection events={recurringEvents} />
      </div>
      <FooterSection />
    </main>
  );
}
