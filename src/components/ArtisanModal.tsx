import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, MapPin, User, Sparkles, Heart, AlertTriangle, ShieldCheck } from 'lucide-react';
import { MasterArtisan, Craft } from '../types';

interface ArtisanModalProps {
  artisan: MasterArtisan | null;
  craft?: Craft | null;
  onClose: () => void;
}

export const ArtisanModal: React.FC<ArtisanModalProps> = ({
  artisan,
  craft,
  onClose
}) => {
  if (!artisan && !craft) return null;

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
          {/* Top Banner */}
          <div className="relative h-64 sm:h-72 shrink-0">
            <img
              src={artisan ? artisan.image : craft?.image}
              alt={artisan ? artisan.name : craft?.name}
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
              {artisan ? (
                <>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-0.5 rounded-full text-[10px] uppercase font-bold bg-[#b8501c] text-white flex items-center gap-1 shadow-xs">
                      <Award className="w-3 h-3" />
                      {artisan.awards[0] || 'Master Artisan'}
                    </span>
                    <span className="text-xs text-orange-200 font-medium">
                      {artisan.yearsOfExperience} of Mastery
                    </span>
                  </div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {artisan.name}
                  </h3>
                  <p className="text-xs text-orange-200/90 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-300" />
                    {artisan.location} • {artisan.craftType}
                  </p>
                </>
              ) : craft ? (
                <>
                  <span className="px-3 py-0.5 rounded-full text-[10px] uppercase font-bold bg-[#b8501c] text-white shadow-xs">
                    {craft.category}
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1">
                    {craft.name}
                  </h3>
                  <p className="text-xs text-orange-200/90 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-300" />
                    {craft.region}
                  </p>
                </>
              ) : null}
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto scrollbar-thin">
            {/* If Artisan detail */}
            {artisan && (
              <>
                {/* Artisan Quote */}
                <div className="p-4 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                  <span className="text-[10px] uppercase font-bold text-[#8c5225] block mb-1">
                    Words of the Master
                  </span>
                  <p className="text-sm text-[#3b2b20] italic font-serif leading-relaxed">
                    "{artisan.quote}"
                  </p>
                </div>

                {/* Biography */}
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#23170f] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#b8501c]" />
                    Life Story & Generational Lineage
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5e4d3f] leading-relaxed font-light">
                    {artisan.bio}
                  </p>
                </div>

                {/* Awards & Recognition */}
                <div className="p-4 rounded-2xl bg-white border border-[#e8decb]">
                  <h4 className="font-cinzel text-xs font-bold text-[#8c5225] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#b8501c]" />
                    Honors & State Recognitions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {artisan.awards.map((aw) => (
                      <span
                        key={aw}
                        className="px-3 py-1 rounded-full bg-[#f4ebd9] border border-[#e2cca8] text-xs text-[#8c5225] font-semibold"
                      >
                        {aw}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* If Craft detail or Craft info related */}
            {craft && (
              <>
                {/* Step by step process */}
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#23170f] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#b8501c]" />
                    Multi-Step Creation Process
                  </h4>
                  <div className="space-y-2">
                    {craft.processSteps?.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#e8decb]"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#f4ebd9] border border-[#e2cca8] text-[#b8501c] font-bold text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-[#5e4d3f] leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Raw Materials */}
                <div className="p-4 rounded-2xl bg-white border border-[#e8decb]">
                  <span className="text-[10px] uppercase font-bold text-[#8c7a6b] block mb-2">
                    Natural & Indigenous Materials Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {craft.materials.map((m) => (
                      <span key={m} className="px-3 py-1 rounded-full bg-[#faf6ee] border border-[#e2d5c3] text-xs text-[#4a3a2d]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Revival */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {craft.challenges && (
                    <div className="p-4 rounded-2xl bg-[#fdf3e7] border border-[#f0cbb0]">
                      <span className="text-[10px] uppercase font-bold text-[#8c5225] flex items-center gap-1.5 mb-1">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#b8501c]" />
                        Modern Preservation Challenges
                      </span>
                      <p className="text-xs text-[#3b2b20] leading-relaxed">
                        {craft.challenges}
                      </p>
                    </div>
                  )}

                  {craft.revivalEfforts && (
                    <div className="p-4 rounded-2xl bg-white border border-[#e8decb]">
                      <span className="text-[10px] uppercase font-bold text-[#8c7a6b] flex items-center gap-1.5 mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Student & Government Revival
                      </span>
                      <p className="text-xs text-[#5e4d3f] leading-relaxed">
                        {craft.revivalEfforts}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
