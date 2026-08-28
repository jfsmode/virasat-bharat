import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, MapPin, Landmark, Sparkles, Utensils, Scissors, Languages, Gamepad2, ArrowRight } from 'lucide-react';
import { statesData } from '../data/statesData';
import { allIndiaEntities } from '../data/allStatesRegistry';
import { presetLostWords } from '../data/lostWordsPreset';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectState: (stateId: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectState,
  onNavigateSection
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    const results: {
      type: 'State' | 'Monument' | 'Festival' | 'Craft' | 'Food' | 'Game' | 'Language' | 'Lost Word';
      title: string;
      subtitle: string;
      stateName: string;
      stateId: string;
      targetSection: string;
      image?: string;
    }[] = [];

    // Search in all states registry
    allIndiaEntities.forEach(s => {
      if (s.name.toLowerCase().includes(q) || s.nativeName.includes(q) || s.capital.toLowerCase().includes(q)) {
        results.push({
          type: 'State',
          title: s.name,
          subtitle: `${s.type} • Capital: ${s.capital}`,
          stateName: s.name,
          stateId: s.id,
          targetSection: 'grandma-archive',
          image: s.image
        });
      }
    });

    // Search in rich statesData
    statesData.forEach(st => {
      // Monuments
      st.monuments.forEach(m => {
        if (m.name.toLowerCase().includes(q) || m.location.toLowerCase().includes(q) || m.builtBy.toLowerCase().includes(q) || m.tags.some(t => t.toLowerCase().includes(q))) {
          results.push({
            type: 'Monument',
            title: m.name,
            subtitle: `${m.location} (${m.historicalPeriod})`,
            stateName: st.name,
            stateId: st.id,
            targetSection: 'heritage-culture',
            image: m.image
          });
        }
      });

      // Festivals
      st.festivals.forEach(f => {
        if (f.name.toLowerCase().includes(q) || (f.nativeName && f.nativeName.includes(q)) || f.whereCelebrated.toLowerCase().includes(q)) {
          results.push({
            type: 'Festival',
            title: f.name,
            subtitle: `${f.whenCelebrated} in ${f.whereCelebrated}`,
            stateName: st.name,
            stateId: st.id,
            targetSection: 'heritage-culture',
            image: f.image
          });
        }
      });

      // Crafts
      st.crafts.forEach(c => {
        if (c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.region.toLowerCase().includes(q)) {
          results.push({
            type: 'Craft',
            title: c.name,
            subtitle: `${c.category} from ${c.region}`,
            stateName: st.name,
            stateId: st.id,
            targetSection: 'craftsmanship',
            image: c.image
          });
        }
      });

      // Recipes / Foods
      st.recipes.forEach(r => {
        if (r.dishName.toLowerCase().includes(q) || r.nativeName.includes(q) || r.ingredients.some(i => i.toLowerCase().includes(q))) {
          results.push({
            type: 'Food',
            title: r.dishName,
            subtitle: `${r.courseType} • ${r.dietary}`,
            stateName: st.name,
            stateId: st.id,
            targetSection: 'grandma-archive',
            image: r.image
          });
        }
      });

      // Childhood Games
      st.childhoodGames.forEach(g => {
        if (g.gameName.toLowerCase().includes(q) || g.nativeName.includes(q)) {
          results.push({
            type: 'Game',
            title: g.gameName,
            subtitle: `${g.numberOfPlayers} players • ${g.historicalOrigin}`,
            stateName: st.name,
            stateId: st.id,
            targetSection: 'grandma-archive'
          });
        }
      });
    });

    // Search in preset lost words
    Object.entries(presetLostWords).forEach(([key, items]) => {
      if (key.includes(q)) {
        items.forEach(item => {
          results.push({
            type: 'Lost Word',
            title: `${item.regionalWord} ("${key}")`,
            subtitle: `${item.englishMeaning} — ${item.languageOrDialect}`,
            stateName: item.state,
            stateId: 'rajasthan',
            targetSection: 'lost-words'
          });
        });
      } else {
        items.forEach(item => {
          if (item.regionalWord.toLowerCase().includes(q) || item.englishMeaning.toLowerCase().includes(q) || item.languageOrDialect.toLowerCase().includes(q)) {
            results.push({
              type: 'Lost Word',
              title: `${item.regionalWord} (${item.englishQuery})`,
              subtitle: `${item.englishMeaning} — ${item.languageOrDialect}`,
              stateName: item.state,
              stateId: 'rajasthan',
              targetSection: 'lost-words'
            });
          }
        });
      }
    });

    return results.slice(0, 16);
  }, [query]);

  if (!isOpen) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'State': return <MapPin className="w-4 h-4 text-emerald-600" />;
      case 'Monument': return <Landmark className="w-4 h-4 text-[#b8501c]" />;
      case 'Festival': return <Sparkles className="w-4 h-4 text-rose-600" />;
      case 'Craft': return <Scissors className="w-4 h-4 text-amber-600" />;
      case 'Food': return <Utensils className="w-4 h-4 text-orange-600" />;
      case 'Game': return <Gamepad2 className="w-4 h-4 text-purple-600" />;
      case 'Language': return <Languages className="w-4 h-4 text-blue-600" />;
      case 'Lost Word': return <Sparkles className="w-4 h-4 text-pink-600" />;
      default: return <Search className="w-4 h-4 text-[#7c6958]" />;
    }
  };

  const handleSelect = (item: any) => {
    if (item.stateId) {
      onSelectState(item.stateId);
    }
    onNavigateSection(item.targetSection);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-[#faf7f2] dark:bg-[#140e09] border border-[#e8decb] dark:border-[#382417] rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Search Header */}
          <div className="flex items-center px-5 py-4 border-b border-[#ebdcc7] dark:border-[#382417] bg-white dark:bg-[#1b120c]">
            <Search className="w-5 h-5 text-[#b8501c] shrink-0 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search states, monuments, festivals, crafts, foods, childhood games, or lost words..."
              autoFocus
              className="w-full bg-transparent text-[#23170f] dark:text-[#f5eee4] placeholder-[#8c7a6b] dark:placeholder-[#a08b79] focus:outline-none text-sm sm:text-base"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-[#8c7a6b] hover:text-[#23170f] dark:hover:text-white p-1 mr-2 cursor-pointer"
                aria-label="Clear query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-2.5 py-1 text-xs rounded-lg bg-[#faf6ee] dark:bg-[#251810] text-[#5d4c3f] dark:text-[#c4b3a3] hover:bg-[#f2e7d8] dark:hover:bg-[#332014] border border-[#e2d5c3] dark:border-[#3d2719] transition-colors cursor-pointer font-medium"
            >
              ESC
            </button>
          </div>

          {/* Quick Suggestions when empty */}
          {!query.trim() ? (
            <div className="p-6 text-sm text-[#5e4d3f] dark:text-[#c4b3a3]">
              <p className="text-xs uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67] font-semibold mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Mehrangarh Fort', 'Patan Patola', 'Durga Puja', 'Dal Baati Churma', 'Kanchipuram Silk', 'Gilli Danda', 'Brihadeeswara', 'Khamma Ghani', 'Lost Words'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1f150f] border border-[#e2d5c3] dark:border-[#382417] text-[#23170f] dark:text-[#ede2d2] hover:border-[#b8501c] hover:bg-[#fdf3e7] dark:hover:bg-[#2e1d13] hover:text-[#b8501c] transition-all text-xs cursor-pointer font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="text-xs text-[#7c6958] dark:text-[#a08b79] italic">
                Search across all 28 States, 8 UTs, monuments, UNESCO traditions, regional slang, foods, and master artisans.
              </p>
            </div>
          ) : (
            <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-[#ebdcc7] dark:divide-[#332014] scrollbar-thin">
              {searchResults.length === 0 ? (
                <div className="p-8 text-center text-[#7c6958] dark:text-[#a08b79]">
                  <p className="text-base font-medium text-[#23170f] dark:text-[#f5eee4] mb-1">No heritage results found for "{query}"</p>
                  <p className="text-xs text-[#7c6958] dark:text-[#a08b79]">Try searching for a state name, monument, recipe, or festival.</p>
                </div>
              ) : (
                searchResults.map((item, idx) => (
                  <div
                    key={`${item.type}-${item.title}-${idx}`}
                    onClick={() => handleSelect(item)}
                    className="flex items-center gap-3 p-3.5 rounded-2xl hover:bg-white dark:hover:bg-[#1e140d] border border-transparent hover:border-[#e8decb] dark:hover:border-[#382417] transition-all cursor-pointer group"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded-xl object-cover shrink-0 border border-[#e8decb] dark:border-[#382417]"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#23170f] flex items-center justify-center shrink-0 border border-[#e8decb] dark:border-[#382417]">
                        {getIcon(item.type)}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-[#f4ebd9] dark:bg-[#2d1e15] text-[#8c5225] dark:text-[#e09257]">
                          {item.type}
                        </span>
                        <span className="text-xs text-[#b8501c] font-medium truncate">
                          {item.stateName}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-[#23170f] dark:text-[#f5eee4] group-hover:text-[#b8501c] transition-colors truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#7c6958] dark:text-[#a08b79] truncate">
                        {item.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8c7a6b] dark:text-[#a08b79] group-hover:text-[#b8501c] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </div>
                ))
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
