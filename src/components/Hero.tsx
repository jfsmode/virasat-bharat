import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, MapPin, Landmark, BookOpen, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onHeritageClick: () => void;
  onOpenLostWords: () => void;
  onOpenGrandma: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onHeritageClick,
  onOpenLostWords,
  onOpenGrandma
}) => {
  const stats = [
    { label: 'States', count: '28' },
    { label: 'Union Territories', count: '8' },
    { label: 'Heritage buildings', count: '110+' },
    { label: 'Scheduled languages', count: '22' }
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden bg-[#faf7f2] bg-parchment-pattern border-b border-[#ebdcc7]"
    >
      {/* Background Subtle Warm Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-radial from-[#fdecdb] via-[#f7e6d2]/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#fde9d2]/40 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Content Row */}
        <div className="relative z-10 max-w-4xl">
          {/* Eyebrow tag matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4"
          >
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9a5223]">
              SMART INDIA HACKATHON / STUDENT INNOVATION
            </span>
          </motion.div>

          {/* Majestic Serif Headline matching reference */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#23170f] leading-[1.12] tracking-tight"
          >
            The living heritage of India, <br className="hidden sm:inline" />
            one state at a time
          </motion.h1>

          {/* Subtitle description matching reference */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-[#5b4a3c] max-w-3xl leading-relaxed font-light"
          >
            Click any state to open its culture card — art styles, languages, signature food, dance, festivals and the buildings that carry its history.
          </motion.p>

          {/* Action Buttons matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
          >
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="px-7 sm:px-8 py-3.5 rounded-full bg-[#b8501c] hover:bg-[#a04214] active:scale-[0.98] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore all states</span>
            </button>

            <button
              id="hero-heritage-btn"
              onClick={onHeritageClick}
              className="px-7 sm:px-8 py-3.5 rounded-full bg-white/90 hover:bg-white active:scale-[0.98] text-[#2c1a10] font-medium text-sm sm:text-base border border-[#d6c7b0] hover:border-[#b8501c]/60 shadow-2xs hover:shadow-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Heritage buildings</span>
            </button>
          </motion.div>
        </div>

        {/* Indian Cultural Panorama Banner matching reference image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 sm:mt-12 rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(70,40,15,0.08)] border border-[#e6d8c4] bg-[#f5ede2] relative"
        >
          {/* Panoramic Composite Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 h-60 sm:h-72 md:h-80 relative">
            {/* 1. Taj Mahal (Uttar Pradesh) */}
            <div className="relative h-full overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80"
                alt="Taj Mahal Agra"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a170a]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#2a170a]/20"></div>
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                  Taj Mahal • Uttar Pradesh
                </span>
              </div>
            </div>

            {/* 2. Hawa Mahal (Rajasthan) */}
            <div className="relative h-full overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80"
                alt="Hawa Mahal Jaipur"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a170a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                  Hawa Mahal • Rajasthan
                </span>
              </div>
            </div>

            {/* 3. Brihadeeswara Temple (Tamil Nadu) */}
            <div className="relative h-full overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80"
                alt="Brihadeeswara & Meenakshi Temple Dravidian Gopuram"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a170a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                  Brihadeeswara Temple • Tamil Nadu
                </span>
              </div>
            </div>

            {/* 4. Harmandir Sahib Golden Temple (Punjab) */}
            <div className="relative h-full overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1599840309126-7ece88628ded?auto=format&fit=crop&w=700&q=80"
                alt="Harmandir Sahib Golden Temple Amritsar"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a170a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                  Golden Temple • Punjab
                </span>
              </div>
            </div>
          </div>

          {/* Warm Golden Atmosphere Film */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#faf7f2]/10 via-transparent to-[#faf7f2]/20 mix-blend-overlay"></div>
        </motion.div>

        {/* Stat Cards Row matching reference image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#e8decb] shadow-[0_4px_16px_rgba(70,40,15,0.04)] hover:border-[#b8501c]/40 hover:shadow-[0_8px_24px_rgba(70,40,15,0.08)] transition-all flex flex-col justify-between"
            >
              <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#b8501c] tracking-tight">
                {stat.count}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#645244] mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
