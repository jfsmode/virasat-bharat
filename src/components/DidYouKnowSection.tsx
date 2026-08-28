import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Lightbulb, MapPin } from 'lucide-react';
import { didYouKnowFacts, DidYouKnowFact } from '../data/didYouKnowData';

export const DidYouKnowSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Architecture', 'Science & Engineering', 'Crafts', 'Food & Cuisine', 'Language & Dialects', 'Festivals & Culture', 'Nature & Ecology'];

  const filteredFacts = useMemo(() => {
    if (selectedCategory === 'All') return didYouKnowFacts;
    return didYouKnowFacts.filter(f => f.category.toLowerCase().includes(selectedCategory.toLowerCase()));
  }, [selectedCategory]);

  const handleCopy = (fact: DidYouKnowFact) => {
    navigator.clipboard.writeText(`Did you know? ${fact.title}: ${fact.fact} (${fact.state})`);
    setCopiedId(fact.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="did-you-know" className="py-20 sm:py-24 bg-[#faf7f2] relative overflow-hidden border-b border-[#ebdcc7]">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f9e9d9] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd9] border border-[#e2cca8] text-[#8c5225] text-xs font-semibold uppercase tracking-wider mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-[#b8501c]" />
            <span>Curated Historical Revelations</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23170f] tracking-tight">
            Did You Know?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5e4d3f] font-light leading-relaxed">
            Astonishing engineering, ancient eco-wisdom, and hidden secrets embedded in India’s living cultural fabric.
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

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacts.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-[#e8decb] hover:border-[#b8501c]/50 rounded-3xl p-6 shadow-xs hover:shadow-md flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8c5225] bg-[#f4ebd9] px-2.5 py-0.5 rounded-full border border-[#e2cca8]">
                    {item.category}
                  </span>
                  <button
                    onClick={() => handleCopy(item)}
                    className="p-1.5 rounded-full bg-[#faf6ee] hover:bg-[#f3e7d7] text-[#7c6958] hover:text-[#23170f] transition-colors cursor-pointer"
                    title="Copy Fact"
                  >
                    {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-[#23170f] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5e4d3f] leading-relaxed font-light mb-4">
                  {item.fact}
                </p>
              </div>

              <div className="pt-3 border-t border-[#ebdcc7] flex items-center justify-between text-xs text-[#7c6958]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#b8501c]" />
                  {item.state}
                </span>
                <span className="text-[11px] text-[#b8501c] font-medium">Verified Lore</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
