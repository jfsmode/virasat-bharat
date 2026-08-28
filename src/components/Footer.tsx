import React from 'react';
import { Compass, BookOpen, Landmark, Scissors, Sparkles, MapPin, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f5ede2] border-t border-[#e2d5c3] relative text-[#5e4d3f]">
      {/* Tricolor Top Accent Line */}
      <div className="h-1.5 w-full flex">
        <div className="flex-1 bg-[#FF9933]"></div>
        <div className="flex-1 bg-[#FFFFFF]"></div>
        <div className="flex-1 bg-[#138808]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#b8501c] flex items-center justify-center font-cinzel font-bold text-white shadow-md text-sm">
                VB
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8c5225] tracking-wider">
                  CULTURE OF EVERY STATE
                </span>
                <h3 className="font-cinzel text-base font-bold text-[#23170f]">
                  Virasat Bharat
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#6e5d4f] leading-relaxed font-light">
              "India’s heritage is not just found in stone monuments. It lives in the words our grandparents spoke, the games children played, the food families cooked, the songs communities sang, and the hands of artisans who kept traditions alive."
            </p>

            <div className="pt-1 text-xs text-[#b8501c] font-semibold italic">
              "Preserve the past. Explore the present. Inspire the future."
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-[#23170f] uppercase tracking-wider mb-4 border-b border-[#ebdcc7] pb-2">
              Explore Collections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#b8501c] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-[#b8501c]" />
                  <span>Discover India (Home)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('interactive-map')}
                  className="hover:text-[#b8501c] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#b8501c]" />
                  <span>28 States & 8 UTs Interactive Atlas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('grandma-archive')}
                  className="hover:text-[#b8501c] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#b8501c]" />
                  <span>Grandma’s Memory Chest & Recipes</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('heritage-culture')}
                  className="hover:text-[#b8501c] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Landmark className="w-3.5 h-3.5 text-[#b8501c]" />
                  <span>Monuments & Living Celebrations</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('craftsmanship')}
                  className="hover:text-[#b8501c] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Scissors className="w-3.5 h-3.5 text-[#b8501c]" />
                  <span>Sacred Crafts & Master Makers</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lost-words')}
                  className="hover:text-[#b8501c] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#b8501c]" />
                  <span>Lost Everyday Words Chatbot</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Cultural Pillars */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-[#23170f] uppercase tracking-wider mb-4 border-b border-[#ebdcc7] pb-2">
              Heritage Pillars
            </h4>
            <div className="space-y-3 text-xs text-[#6e5d4f]">
              <div className="p-3 rounded-2xl bg-white border border-[#e8decb]">
                <div className="font-semibold text-[#23170f] mb-0.5">22 Scheduled Languages</div>
                <p className="text-[11px]">Over 19,500 mother tongues spoken across 28 states and 8 union territories.</p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#e8decb]">
                <div className="font-semibold text-[#23170f] mb-0.5">42 UNESCO World Heritage Sites</div>
                <p className="text-[11px]">Ancient rock-cut caves, medieval stepwells, living Chola temples and ecosystems.</p>
              </div>
            </div>
          </div>

          {/* Col 4: Innovation & Credits */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-[#23170f] uppercase tracking-wider mb-4 border-b border-[#ebdcc7] pb-2">
              Platform Initiative
            </h4>
            <p className="text-xs text-[#6e5d4f] leading-relaxed">
              Created for the <strong>Smart India Hackathon / Student Innovation Showcase</strong> to digitize, celebrate, and preserve the intangible cultural heritage of India through modern web technologies.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#fdf3e7] border border-[#f0cbb0] text-xs">
              <span className="text-[10px] uppercase font-bold text-[#8c5225] block mb-1">
                Student Heritage Pledge
              </span>
              <p className="text-[#3b2b20] italic">
                "We pledge to celebrate India’s diversity and preserve our ancestral traditions for the generations to come."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e2d5c3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7c6958]">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#b8501c] fill-current" />
            <span>for India’s Living Cultural Heritage • Virasat Bharat</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#23170f] hover:text-[#b8501c] hover:bg-[#faf6ee] transition-all border border-[#e2d5c3] shadow-2xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
