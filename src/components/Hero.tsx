import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, MapPin, Landmark, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onHeritageClick: () => void;
  onOpenLostWords?: () => void;
  onOpenGrandma?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onHeritageClick,
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
      className="relative pt-24 sm:pt-28 pb-10 sm:pb-16 overflow-hidden bg-[#faf7f2] dark:bg-[#0c0805] bg-parchment-pattern border-b border-[#ebdcc7] dark:border-[#2e1d13]"
    >
      {/* Background Soft Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-20">
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[700px] h-[450px] bg-radial from-[#fdecdb] via-[#f7e6d2]/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#fde9d2]/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Heritage Canvas Banner matching Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl sm:rounded-[32px] overflow-hidden border border-[#e4d4be] dark:border-[#382417] shadow-[0_12px_45px_rgba(70,40,15,0.09)] dark:shadow-[0_12px_45px_rgba(0,0,0,0.5)] bg-[#f4ece0] dark:bg-[#18100b] min-h-[460px] sm:min-h-[520px] flex items-center"
        >
          {/* Background Cultural Heritage Composite Layer */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
            {/* Multi-image cultural montage: Kathakali / Temple Spire / Stone Carvings */}
            <div className="absolute inset-0 flex h-full w-full opacity-70 sm:opacity-80 dark:opacity-55 mix-blend-multiply dark:mix-blend-luminosity filter contrast-[1.12] saturate-[1.2]">
              {/* Left/Center: Kathakali / Classical Dance & Headdress Art */}
              <div className="w-1/2 sm:w-5/12 h-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599840309126-7ece88628ded?auto=format&fit=crop&w=1000&q=80"
                  alt="Indian Living Heritage"
                  className="w-full h-full object-cover object-center scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Middle: Ancient Temple Stone Carvings & Gopuram Spire */}
              <div className="w-1/4 sm:w-4/12 h-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
                  alt="Ancient Temple Gopuram"
                  className="w-full h-full object-cover object-center scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right: Golden Heritage Sandstone & Architectural Pillars */}
              <div className="w-1/4 sm:w-3/12 h-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80"
                  alt="Indian Heritage Architecture"
                  className="w-full h-full object-cover object-center scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Seamless Soft Sandstone / Terracotta Gradient Overlay to guarantee pristine typography contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf5ee]/95 via-[#faf5ee]/75 to-[#faf5ee]/15 dark:from-[#0f0a06]/95 dark:via-[#0f0a06]/80 dark:to-[#0f0a06]/25"></div>
            
            {/* Vertical Warm Light Accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf5ee]/80 via-transparent to-transparent dark:from-[#0f0a06]/85"></div>
          </div>

          {/* Foreground Hero Content Container */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-3xl">
            {/* Top Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-4 sm:mb-5 flex items-center gap-2"
            >
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#9b5123] dark:text-[#e58a4e]">
                SMART INDIA CULTURAL INITIATIVE
              </span>
            </motion.div>

            {/* Hero Heading strictly matching reference */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#23170f] dark:text-[#f8f1e7] leading-[1.14] tracking-tight"
            >
              The living heritage of India, <br className="hidden sm:inline" />
              one state at a time
            </motion.h1>

            {/* Subtitle description matching reference */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-[#554335] dark:text-[#cfbfb0] leading-relaxed max-w-2xl font-light"
            >
              Click any state to open its culture card — art styles, languages, signature food, dance, festivals and the buildings that carry its history.
            </motion.p>

            {/* Action Buttons matching reference */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="px-7 sm:px-8 py-3.5 rounded-full bg-[#b8501c] hover:bg-[#a04214] active:scale-[0.98] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore all states</span>
              </button>

              <button
                id="hero-heritage-btn"
                onClick={onHeritageClick}
                className="px-7 sm:px-8 py-3.5 rounded-full bg-white/95 dark:bg-[#1f150e]/95 hover:bg-white dark:hover:bg-[#281c13] active:scale-[0.98] text-[#2c1a10] dark:text-[#f5eee4] font-medium text-sm sm:text-base border border-[#d6c7b0] dark:border-[#3d2617] hover:border-[#b8501c]/50 shadow-2xs hover:shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Heritage buildings</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* 4 Stat Cards Row matching reference image */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              id={`hero-stat-card-${idx}`}
              className="bg-white dark:bg-[#17100b] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#e8decb] dark:border-[#332014] shadow-[0_4px_16px_rgba(70,40,15,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-[#b8501c]/40 hover:shadow-[0_8px_24px_rgba(70,40,15,0.08)] transition-all flex flex-col justify-between"
            >
              <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#b8501c] dark:text-[#df7239] tracking-tight">
                {stat.count}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#645244] dark:text-[#bda897] mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
