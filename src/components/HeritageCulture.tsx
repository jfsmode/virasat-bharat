import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Landmark, Sparkles, MapPin, Search, ArrowRight, Eye } from 'lucide-react';
import { statesData } from '../data/statesData';
import { Monument, Festival } from '../types';
import { MonumentModal } from './MonumentModal';
import { FestivalModal } from './FestivalModal';

export const HeritageCulture: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monuments' | 'festivals'>('monuments');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(null);
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  // Aggregate all monuments from all states
  const allMonuments = useMemo(() => {
    const list: (Monument & { stateName: string; stateId: string })[] = [];
    statesData.forEach(st => {
      st.monuments.forEach(m => {
        list.push({ ...m, stateName: st.name, stateId: st.id });
      });
    });
    return list;
  }, []);

  // Aggregate all festivals from all states
  const allFestivals = useMemo(() => {
    const list: (Festival & { stateName: string; stateId: string })[] = [];
    statesData.forEach(st => {
      st.festivals.forEach(f => {
        list.push({ ...f, stateName: st.name, stateId: st.id });
      });
    });
    return list;
  }, []);

  const filteredMonuments = useMemo(() => {
    if (!searchQuery.trim()) return allMonuments;
    const q = searchQuery.toLowerCase();
    return allMonuments.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.location.toLowerCase().includes(q) ||
      m.builtBy.toLowerCase().includes(q) ||
      m.tags.some(t => t.toLowerCase().includes(q)) ||
      m.stateName.toLowerCase().includes(q)
    );
  }, [allMonuments, searchQuery]);

  const filteredFestivals = useMemo(() => {
    if (!searchQuery.trim()) return allFestivals;
    const q = searchQuery.toLowerCase();
    return allFestivals.filter(f =>
      f.name.toLowerCase().includes(q) ||
      (f.nativeName && f.nativeName.includes(q)) ||
      f.whereCelebrated.toLowerCase().includes(q) ||
      f.whenCelebrated.toLowerCase().includes(q) ||
      f.stateName.toLowerCase().includes(q)
    );
  }, [allFestivals, searchQuery]);

  return (
    <section id="heritage-culture" className="py-20 sm:py-24 bg-[#faf7f2] relative overflow-hidden border-b border-[#ebdcc7]">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#f9e9d9] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#f5e3d0] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd9] border border-[#e2cca8] text-[#8c5225] text-xs font-semibold uppercase tracking-wider mb-3">
            <Landmark className="w-3.5 h-3.5 text-[#b8501c]" />
            <span>Monuments & Living Celebrations</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23170f] tracking-tight">
            Heritage & Culture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5e4d3f] font-light leading-relaxed">
            From millennia-old rock-cut sanctums and royal stepwells to ecstatic harvest festivals, discover the timeless stone and spirit of the subcontinent.
          </p>
        </div>

        {/* Tab & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-white p-3.5 sm:p-4 rounded-3xl border border-[#e8decb] shadow-xs">
          {/* Tabs */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              id="heritage-tab-monuments"
              onClick={() => setActiveTab('monuments')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all flex-1 sm:flex-none justify-center cursor-pointer ${
                activeTab === 'monuments'
                  ? 'bg-[#b8501c] text-white shadow-xs'
                  : 'bg-[#faf6ee] text-[#5d4c3f] hover:bg-[#f2e7d8] border border-[#e8decb]'
              }`}
            >
              <Landmark className="w-4 h-4" />
              <span>Architectural Monuments ({allMonuments.length})</span>
            </button>

            <button
              id="heritage-tab-festivals"
              onClick={() => setActiveTab('festivals')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all flex-1 sm:flex-none justify-center cursor-pointer ${
                activeTab === 'festivals'
                  ? 'bg-[#b8501c] text-white shadow-xs'
                  : 'bg-[#faf6ee] text-[#5d4c3f] hover:bg-[#f2e7d8] border border-[#e8decb]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Festivals & Celebrations ({allFestivals.length})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8c7a6b] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={activeTab === 'monuments' ? "Search monuments, dynasties..." : "Search festivals, origins..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#faf6ee] border border-[#e2d5c3] rounded-full text-[#23170f] placeholder-[#8c7a6b] focus:outline-none focus:border-[#b8501c]"
            />
          </div>
        </div>

        {/* Content Display */}
        {activeTab === 'monuments' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMonuments.map((monument) => (
              <div
                key={monument.id}
                id={`monument-card-${monument.id}`}
                onClick={() => setSelectedMonument(monument)}
                className="group bg-white border border-[#e8decb] hover:border-[#b8501c]/50 rounded-3xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={monument.image}
                      alt={monument.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#23170f]/90 via-transparent to-transparent"></div>

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {monument.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-black/60 text-white backdrop-blur-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold bg-[#b8501c] text-white shadow-xs">
                      {monument.historicalPeriod}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-[#8c5225] font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{monument.location}</span>
                    </div>

                    <h3 className="font-cinzel text-xl font-bold text-[#23170f] group-hover:text-[#b8501c] transition-colors">
                      {monument.name}
                    </h3>

                    <p className="text-xs text-[#5e4d3f] mt-2 line-clamp-3 leading-relaxed font-light">
                      {monument.historicalBackground}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-[#ebdcc7] flex items-center justify-between text-xs text-[#b8501c] font-semibold group-hover:translate-x-1 transition-transform">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> View Architectural Insights
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFestivals.map((festival) => (
              <div
                key={festival.id}
                id={`festival-card-${festival.id}`}
                onClick={() => setSelectedFestival(festival)}
                className="group bg-white border border-[#e8decb] hover:border-[#b8501c]/50 rounded-3xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={festival.image}
                      alt={festival.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#23170f]/90 via-transparent to-transparent"></div>

                    {festival.nativeName && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-serif font-bold bg-black/60 text-white backdrop-blur-xs">
                        {festival.nativeName}
                      </span>
                    )}

                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold bg-[#b8501c] text-white shadow-xs">
                      {festival.whenCelebrated}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-[#8c5225] font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#b8501c]" />
                      <span>{festival.whereCelebrated}</span>
                    </div>

                    <h3 className="font-cinzel text-xl font-bold text-[#23170f] group-hover:text-[#b8501c] transition-colors">
                      {festival.name}
                    </h3>

                    <p className="text-xs text-[#5e4d3f] mt-2 line-clamp-3 leading-relaxed font-light">
                      {festival.origins}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-[#ebdcc7] flex items-center justify-between text-xs text-[#b8501c] font-semibold group-hover:translate-x-1 transition-transform">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Explore Festivities & Food
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modals */}
        <MonumentModal
          monument={selectedMonument}
          onClose={() => setSelectedMonument(null)}
        />
        <FestivalModal
          festival={selectedFestival}
          onClose={() => setSelectedFestival(null)}
        />
      </div>
    </section>
  );
};
