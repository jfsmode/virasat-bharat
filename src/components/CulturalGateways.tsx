import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Scissors, Music, MapPin, Sparkles, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { GRANDMA_AI_AVATAR } from '../data/assets';

interface CulturalGatewaysProps {
  onNavigate: (page: string) => void;
}

export const CulturalGateways: React.FC<CulturalGatewaysProps> = ({ onNavigate }) => {
  const gateways = [
    {
      id: 'heritage',
      title: 'Heritage & Architecture',
      subtitle: 'Monuments & Living Festivals',
      description: 'Explore 110+ stone wonders—ancient rock-cut temples, royal stepwells, and forts alongside the ecstatic seasonal harvest festivals and living rituals of Bharat.',
      icon: Landmark,
      color: 'from-[#e87034]/15 to-[#b8501c]/25 dark:from-[#b8501c]/25 dark:to-[#e87034]/10',
      badge: 'Monuments & Festivals',
      linkText: 'Explore Heritage',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'crafts',
      title: 'Master Craftsmanship',
      subtitle: 'Sacred Weaves & Artisan Lineages',
      description: 'Journey through centuries of handcrafted heritage—GI-certified handlooms, Dhokra brass casting, Bidri metal inlays, and Blue Pottery.',
      icon: Scissors,
      color: 'from-[#d97706]/15 to-[#92400e]/25 dark:from-[#92400e]/25 dark:to-[#d97706]/10',
      badge: 'Living Artisans',
      linkText: 'Explore Crafts',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'folk-music',
      title: "Grandma's Archive",
      subtitle: 'Folk Music, Melodies & Oral Lore',
      description: 'Authentic oral music traditions across all 28 states—verified YouTube folk songs, devotional rāgas, indigenous instruments, and heirloom recipes.',
      icon: Music,
      color: 'from-[#059669]/15 to-[#047857]/25 dark:from-[#047857]/25 dark:to-[#059669]/10',
      badge: '28 States Folk Music',
      linkText: "Open Grandma's Archive",
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'states',
      title: 'States & UTs Atlas',
      subtitle: 'Interactive Cultural Cartography',
      description: 'Explore the 28 states and 8 union territories of Bharat. Click any territory to unveil its language, food, traditional dance, and crafts.',
      icon: MapPin,
      color: 'from-[#2563eb]/15 to-[#1d4ed8]/25 dark:from-[#1d4ed8]/25 dark:to-[#2563eb]/10',
      badge: '28 States & 8 UTs',
      linkText: 'Explore States Atlas',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'grandmas-ai',
      title: "Grandma’s AI",
      subtitle: 'Elder Cultural Knowledge Companion',
      description: 'Engage with our bilingual elder conversational AI in English. Ask about regional proverbs, temple architecture, forgotten rituals, and local folklore.',
      icon: Sparkles,
      color: 'from-[#7c3aed]/15 to-[#6d28d9]/25 dark:from-[#6d28d9]/25 dark:to-[#7c3aed]/10',
      badge: 'Bilingual AI Guide',
      linkText: 'Chat with Grandma AI',
      image: GRANDMA_AI_AVATAR,
      imageClassName: 'object-[center_20%]'
    },
    {
      id: 'more',
      title: 'Living Lore & Words',
      subtitle: 'Lost Everyday Words & Trivia',
      description: 'Discover endangered vernacular terms from regional dialects, heart-warming idioms, and verified historical trivia and cultural revelations.',
      icon: BookOpen,
      color: 'from-[#b8501c]/15 to-[#ea580c]/25 dark:from-[#ea580c]/25 dark:to-[#b8501c]/10',
      badge: 'Lost Words & Trivia',
      linkText: 'Explore Lore & Trivia',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#faf7f2] dark:bg-[#0c0805] relative overflow-hidden border-b border-[#ebdcc7] dark:border-[#2e1d13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd9] dark:bg-[#251810] border border-[#e2cca8] dark:border-[#3d2719] text-[#8c5225] dark:text-[#df945b] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b8501c]" />
            <span>Dedicated Collections</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#23170f] dark:text-[#f8f1e7] tracking-tight">
            Explore the Living Heritage of Bharat
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#615042] dark:text-[#bead9f] font-light leading-relaxed">
            Delve into dedicated collections spanning stone architecture, handcrafted heirlooms, authentic folk songs, regional states, and Grandma’s living knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {gateways.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => onNavigate(item.id)}
                className="group relative rounded-2xl sm:rounded-3xl border border-[#e8decb] dark:border-[#332014] bg-white dark:bg-[#160f0a] overflow-hidden shadow-[0_4px_20px_rgba(70,40,15,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_32px_rgba(184,80,28,0.12)] hover:border-[#b8501c]/50 transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Image Banner Header */}
                <div className="h-44 sm:h-48 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92] dark:brightness-[0.8] ${item.imageClassName || ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-[#1f150e]/90 backdrop-blur-md text-[#2a1a10] dark:text-[#f5eee4] shadow-xs">
                      <Icon className="w-3 h-3 text-[#b8501c]" />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <span className="text-[11px] font-medium text-[#ffd6b3] uppercase tracking-wider block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white drop-shadow-xs">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content description */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-[#5a483a] dark:text-[#bead9f] leading-relaxed font-light mb-4">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-[#f0e6d6] dark:border-[#281810] flex items-center justify-between text-xs font-semibold text-[#b8501c] dark:text-[#e0753d] group-hover:translate-x-0.5 transition-transform">
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
