import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, MapPin, Calendar, Utensils, Music, Shirt, Lightbulb } from 'lucide-react';
import { Festival } from '../types';

interface FestivalModalProps {
  festival: Festival | null;
  onClose: () => void;
}

export const FestivalModal: React.FC<FestivalModalProps> = ({
  festival,
  onClose
}) => {
  if (!festival) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-3xl bg-[#faf7f2] border border-[#e8decb] rounded-3xl overflow-hidden shadow-2xl my-8 relative max-h-[90vh] flex flex-col"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 shrink-0">
            <img
              src={festival.image}
              alt={festival.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#23170f]/90 via-[#23170f]/30 to-transparent"></div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-[#b8501c] flex items-center justify-center transition-colors border border-white/20 z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 mb-1">
                {festival.nativeName && (
                  <span className="font-serif text-sm font-semibold text-orange-200">
                    {festival.nativeName}
                  </span>
                )}
                <span className="text-xs px-3 py-1 rounded-full bg-[#b8501c] text-white font-semibold shadow-xs">
                  {festival.whenCelebrated}
                </span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {festival.name}
              </h3>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto scrollbar-thin">
            <div className="p-4 rounded-2xl bg-white border border-[#e8decb]">
              <h4 className="font-cinzel text-sm font-bold text-[#8c5225] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b8501c]" />
                Origin & Mythological Context
              </h4>
              <p className="text-xs sm:text-sm text-[#5e4d3f] leading-relaxed">
                {festival.mythologicalOrigin}
              </p>
            </div>

            {/* Rituals & Community */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#e8decb]">
                <h4 className="font-cinzel text-xs font-bold text-[#23170f] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#b8501c]" />
                  Sacred Rituals & Customs
                </h4>
                <p className="text-xs text-[#5e4d3f] leading-relaxed">
                  {festival.rituals}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#e8decb]">
                <h4 className="font-cinzel text-xs font-bold text-[#23170f] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#b8501c]" />
                  Regional Celebration Hubs
                </h4>
                <p className="text-xs text-[#5e4d3f] leading-relaxed">
                  {festival.whereCelebrated}
                </p>
              </div>
            </div>

            {/* Cultural Delights: Food, Music, Attire */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {festival.traditionalFoods && (
                <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                  <span className="text-[10px] uppercase font-bold text-[#8c5225] flex items-center gap-1 mb-1">
                    <Utensils className="w-3 h-3 text-[#b8501c]" /> Festive Delicacies
                  </span>
                  <p className="text-xs text-[#3b2b20]">{Array.isArray(festival.traditionalFoods) ? festival.traditionalFoods.join(', ') : festival.traditionalFoods}</p>
                </div>
              )}

              {festival.traditionalAttire && (
                <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                  <span className="text-[10px] uppercase font-bold text-[#8c5225] flex items-center gap-1 mb-1">
                    <Shirt className="w-3 h-3 text-[#b8501c]" /> Festive Dress
                  </span>
                  <p className="text-xs text-[#3b2b20]">{festival.traditionalAttire}</p>
                </div>
              )}

              {festival.musicAndDance && (
                <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                  <span className="text-[10px] uppercase font-bold text-[#8c5225] flex items-center gap-1 mb-1">
                    <Music className="w-3 h-3 text-[#b8501c]" /> Music & Dance
                  </span>
                  <p className="text-xs text-[#3b2b20]">{festival.musicAndDance}</p>
                </div>
              )}
            </div>

            {/* Unique Fact */}
            {festival.uniqueTradition && (
              <div className="p-4 rounded-2xl bg-[#fdf3e7] border border-[#f0cbb0]">
                <span className="text-[10px] uppercase font-bold text-[#8c5225] flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-[#b8501c]" /> Unique Tradition
                </span>
                <p className="text-xs text-[#3b2b20] italic leading-relaxed">
                  "{festival.uniqueTradition}"
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
