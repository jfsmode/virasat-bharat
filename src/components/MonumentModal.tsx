import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Landmark, MapPin, Calendar, UserCheck, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { Monument } from '../types';

interface MonumentModalProps {
  monument: Monument | null;
  onClose: () => void;
}

export const MonumentModal: React.FC<MonumentModalProps> = ({
  monument,
  onClose
}) => {
  if (!monument) return null;

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
              src={monument.image}
              alt={monument.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#23170f]/90 via-[#23170f]/30 to-transparent"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-[#b8501c] flex items-center justify-center transition-colors border border-white/20 z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Tags on Image */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {monument.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#b8501c] text-white shadow-xs backdrop-blur-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Location */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-1.5 text-xs text-orange-200 font-medium mb-1">
                <MapPin className="w-3.5 h-3.5 text-orange-300" />
                <span>{monument.location}</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {monument.name}
              </h3>
            </div>
          </div>

          {/* Scrollable Details Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto scrollbar-thin">
            {/* Meta Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white border border-[#e8decb]">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#b8501c] shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#8c7a6b] tracking-wider">Era / Dynasty</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#23170f]">{monument.historicalPeriod}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <UserCheck className="w-4 h-4 text-[#b8501c] shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#8c7a6b] tracking-wider">Commissioned By</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#23170f]">{monument.builtBy}</div>
                </div>
              </div>
            </div>

            {/* Historical Background */}
            <div>
              <h4 className="font-cinzel text-base font-bold text-[#23170f] mb-2 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#b8501c]" />
                Historical Chronicle & Origin
              </h4>
              <p className="text-xs sm:text-sm text-[#5e4d3f] leading-relaxed font-light">
                {monument.historicalBackground}
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="p-4 rounded-2xl bg-white border border-[#e8decb]">
              <h4 className="font-cinzel text-sm font-bold text-[#23170f] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#b8501c]" />
                Architectural Genius
              </h4>
              <p className="text-xs sm:text-sm text-[#5e4d3f] leading-relaxed">
                {monument.architecturalStyle}
              </p>
            </div>

            {/* Cultural & Spiritual Significance */}
            <div className="p-4 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
              <h4 className="font-cinzel text-sm font-bold text-[#8c5225] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b8501c]" />
                Cultural & Living Significance
              </h4>
              <p className="text-xs sm:text-sm text-[#3b2b20] leading-relaxed">
                {monument.significance}
              </p>
            </div>

            {/* Hidden Legend & UNESCO status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {monument.hiddenLegend && (
                <div className="p-4 rounded-2xl bg-[#fdf3e7] border border-[#f0cbb0]">
                  <span className="text-[10px] uppercase font-bold text-[#8c5225] block mb-1">
                    Hidden Mystery & Folklore
                  </span>
                  <p className="text-xs text-[#3b2b20] italic leading-relaxed">
                    "{monument.hiddenLegend}"
                  </p>
                </div>
              )}

              {monument.preservationStatus && (
                <div className="p-4 rounded-2xl bg-white border border-[#e8decb]">
                  <span className="text-[10px] uppercase font-bold text-[#8c7a6b] flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Conservation & Heritage Status
                  </span>
                  <p className="text-xs text-[#5e4d3f] leading-relaxed">
                    {monument.preservationStatus}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
