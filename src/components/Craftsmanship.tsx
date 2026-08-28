import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, MapPin, Award, ArrowRight, Eye } from 'lucide-react';
import { statesData } from '../data/statesData';
import { Craft, MasterArtisan } from '../types';
import { ArtisanModal } from './ArtisanModal';

export const Craftsmanship: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCraft, setSelectedCraft] = useState<Craft | null>(null);
  const [selectedArtisan, setSelectedArtisan] = useState<MasterArtisan | null>(null);

  const categories = [
    'All',
    'Textiles',
    'Weaving',
    'Embroidery',
    'Pottery',
    'Metalwork',
    'Painting',
    'Sculpture',
    'Wood carving'
  ];

  // Aggregate all crafts
  const allCrafts = useMemo(() => {
    const list: (Craft & { stateName: string; stateId: string })[] = [];
    statesData.forEach(st => {
      st.crafts.forEach(c => {
        list.push({ ...c, stateName: st.name, stateId: st.id });
      });
    });
    return list;
  }, []);

  // Aggregate all master artisans
  const allArtisans = useMemo(() => {
    const list: MasterArtisan[] = [];
    statesData.forEach(st => {
      st.artisans.forEach(a => {
        list.push(a);
      });
    });
    return list;
  }, []);

  const filteredCrafts = useMemo(() => {
    if (selectedCategory === 'All') return allCrafts;
    return allCrafts.filter(c =>
      c.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [allCrafts, selectedCategory]);

  return (
    <section id="craftsmanship" className="py-20 sm:py-24 bg-[#faf7f2] relative overflow-hidden border-b border-[#ebdcc7]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-[#f9e9d9] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/3 -left-24 w-[500px] h-[500px] bg-[#f5e3d0] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd9] border border-[#e2cca8] text-[#8c5225] text-xs font-semibold uppercase tracking-wider mb-3">
            <Scissors className="w-3.5 h-3.5 text-[#b8501c]" />
            <span>Living Artisans & Sacred Craftsmanship</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23170f] tracking-tight">
            Indian Craftsmanship & Master Hands
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5e4d3f] font-light leading-relaxed">
            Every thread woven on a handloom and every drop of lost-wax bronze metal poured carries thousand-year-old wisdom. Explore India's indigenous crafts and the living legends keeping them alive.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-thin">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#b8501c] text-white shadow-xs'
                    : 'bg-white text-[#5d4c3f] hover:bg-[#f3e7d7] hover:text-[#23170f] border border-[#e8decb]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Crafts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredCrafts.map((craft) => (
            <div
              key={craft.id}
              id={`craft-card-${craft.id}`}
              onClick={() => setSelectedCraft(craft)}
              className="group bg-white border border-[#e8decb] hover:border-[#b8501c]/50 rounded-3xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={craft.image}
                    alt={craft.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#23170f]/90 via-transparent to-transparent"></div>

                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-black/60 text-white backdrop-blur-xs">
                    {craft.category}
                  </span>

                  <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold bg-[#b8501c] text-white shadow-xs">
                    {craft.stateName}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-[#8c5225] font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{craft.region}</span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-[#23170f] group-hover:text-[#b8501c] transition-colors">
                    {craft.name}
                  </h3>

                  <p className="text-xs text-[#5e4d3f] mt-2 line-clamp-2 leading-relaxed font-light">
                    {craft.culturalSignificance}
                  </p>

                  {/* Materials & Technique pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {craft.materials.slice(0, 3).map(m => (
                      <span key={m} className="px-2.5 py-0.5 rounded-full bg-[#faf6ee] border border-[#e2d5c3] text-[10px] text-[#4a3a2d]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#ebdcc7] flex items-center justify-between text-xs text-[#b8501c] font-semibold group-hover:translate-x-1 transition-transform">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> View Process & Challenges
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Meet the Makers: Artisan Spotlight */}
        <div className="mt-16 pt-16 border-t border-[#ebdcc7]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd9] border border-[#e2cca8] text-[#8c5225] text-xs font-semibold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-[#b8501c]" />
                <span>Living Heritage Legends</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#23170f]">
                Meet the Makers: Guardians of Indian Craft
              </h3>
              <p className="text-xs sm:text-sm text-[#5e4d3f] mt-1 font-light">
                Honoring the master craftspeople carrying forward generational skill and national awards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArtisans.map((artisan) => (
              <div
                key={artisan.id}
                id={`artisan-card-${artisan.id}`}
                onClick={() => setSelectedArtisan(artisan)}
                className="group bg-white border border-[#e8decb] hover:border-[#b8501c]/50 rounded-3xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-16 h-16 rounded-2xl object-cover border border-[#e8decb] shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#8c5225] bg-[#f4ebd9] px-2.5 py-0.5 rounded-full border border-[#e2cca8]">
                        {artisan.craftType}
                      </span>
                      <h4 className="font-cinzel text-lg font-bold text-[#23170f] mt-1 group-hover:text-[#b8501c] transition-colors">
                        {artisan.name}
                      </h4>
                      <p className="text-xs text-[#7c6958] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#b8501c]" />
                        {artisan.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#4a3a2d] italic bg-[#faf6ee] p-3.5 rounded-2xl border border-[#ebdcc7] line-clamp-3 leading-relaxed mb-4">
                    "{artisan.quote}"
                  </p>

                  <div className="space-y-1 text-xs text-[#6e5d4f]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#8c7a6b] text-[11px]">Experience:</span>
                      <span className="text-[#23170f] font-medium">{artisan.yearsOfExperience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8c7a6b] text-[11px]">Honors:</span>
                      <span className="text-[#23170f] font-medium truncate">{artisan.awards[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#ebdcc7] flex items-center justify-between text-xs text-[#b8501c] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Artisan's Story</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <ArtisanModal
          artisan={selectedArtisan}
          craft={selectedCraft}
          onClose={() => {
            setSelectedArtisan(null);
            setSelectedCraft(null);
          }}
        />
      </div>
    </section>
  );
};
