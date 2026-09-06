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
    <section id="did-you-know" className="py-16 sm:py-20 bg-[#faf7f2] dark:bg-[#0c0805] relative overflow-hidden border-b border-[#ebdcc7] dark:border-[#2e1d13] transition-colors duration-300">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f9e9d9] dark:bg-[#2b190f] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd9] dark:bg-[#251810] border border-[#e2cca8] dark:border-[#3d2719] text-[#8c5225] dark:text-[#df945b] text-xs font-semibold uppercase tracking-wider mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-[#b8501c]" />
            <span>Curated Historical Revelations</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23170f] dark:text-[#f8f1e7] tracking-tight">
            Did You Know?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5e4d3f] dark:text-[#bead9f] font-light leading-relaxed">
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
                    : 'bg-white dark:bg-[#1a110a] text-[#5d4c3f] dark:text-[#c4b3a3] hover:bg-[#f3e7d7] dark:hover:bg-[#2a1b11] hover:text-[#23170f] dark:hover:text-white border border-[#e8decb] dark:border-[#382417]'
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
              className="bg-white dark:bg-[#17100b] border border-[#e8decb] dark:border-[#382417] hover:border-[#b8501c]/50 dark:hover:border-[#b8501c]/60 rounded-3xl p-6 shadow-xs hover:shadow-md flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8c5225] dark:text-[#df945b] bg-[#f4ebd9] dark:bg-[#251810] px-2.5 py-0.5 rounded-full border border-[#e2cca8] dark:border-[#3d2719]">
                    {item.category}
                  </span>
                  <button
                    onClick={() => handleCopy(item)}
                    className="p-1.5 rounded-full bg-[#faf6ee] dark:bg-[#251810] hover:bg-[#f3e7d7] dark:hover:bg-[#332014] text-[#7c6958] dark:text-[#c4b3a3] hover:text-[#23170f] dark:hover:text-white transition-colors cursor-pointer"
                    title="Copy Fact"
                  >
                    {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-[#23170f] dark:text-[#f8f1e7] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5e4d3f] dark:text-[#bead9f] leading-relaxed font-light mb-4">
                  {item.fact}
                </p>
              </div>

              <div className="pt-3 border-t border-[#ebdcc7] dark:border-[#2e1d13] flex items-center justify-between text-xs text-[#7c6958] dark:text-[#a8988a]">
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
