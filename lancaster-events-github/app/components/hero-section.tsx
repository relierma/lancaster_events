import { MapPin, Calendar } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[420px] sm:h-[480px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5a5986b2cf81e095e172ce87/0c8df753-e82e-4fc8-8255-d6d3fa6d9a78/flyingdawnmarie-antelope-valley-poppy-reserve-08.jpg')`,
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-5">
          <MapPin className="w-4 h-4 text-orange-300" />
          <span className="text-sm text-white/90 font-medium">Lancaster, Palmdale, Quartz Hill & Antelope Valley</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
          Upcoming Events
        </h1>
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-5 h-5 text-orange-300" />
          <p className="text-lg sm:text-xl text-white/90 font-medium">
            March 29 – April 12, 2026
          </p>
        </div>
        <p className="text-white/70 max-w-xl text-sm sm:text-base">
          Discover 40+ events across the Antelope Valley — festivals, live music, community gatherings, family fun, and more.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#top-picks" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            ⭐ Top 5 Picks
          </a>
          <a href="#full-calendar" className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm border border-white/20">
            📅 Full Calendar
          </a>
        </div>
      </div>
    </section>
  );
}
