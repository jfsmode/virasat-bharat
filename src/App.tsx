import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CulturalGateways } from './components/CulturalGateways';
import { PageHeader } from './components/PageHeader';
import { InteractiveMap } from './components/InteractiveMap';
import { GrandmaArchive } from './components/GrandmaArchive';
import { HeritageCulture } from './components/HeritageCulture';
import { Craftsmanship } from './components/Craftsmanship';
import { GrandmaAICulturalGuide } from './components/GrandmaAICulturalGuide';
import { LostWordsChatbot } from './components/LostWordsChatbot';
import { DidYouKnowSection } from './components/DidYouKnowSection';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { FloatingGrandmaAI } from './components/FloatingGrandmaAI';
import { Footer } from './components/Footer';
import { statesData } from './data/statesData';
import { Sparkles, Landmark, Scissors, Music, MapPin, BookOpen } from 'lucide-react';

export function App() {
  // Requirement: initial state MUST strictly be "home"
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedStateId, setSelectedStateId] = useState<string>('rajasthan');
  const [grandmaArchiveTab, setGrandmaArchiveTab] = useState<'songs' | 'recipes' | 'languages' | 'traditions' | 'games' | 'ai'>('songs');
  const [heritageCultureTab, setHeritageCultureTab] = useState<'monuments' | 'festivals'>('monuments');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('vb_theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  // Sync theme to root element and localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('vb_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const pathToPage: Record<string, string> = {
    '/': 'home',
    '/home': 'home',
    '/states': 'states',
    '/heritage': 'heritage',
    '/heritage-culture': 'heritage',
    '/crafts': 'crafts',
    '/craftsmanship': 'crafts',
    '/folk-music': 'folk-music',
    '/grandma-archive': 'folk-music',
    '/festivals': 'heritage', // Festivals included in Heritage & Culture only
    '/grandmas-ai': 'grandmas-ai',
    '/more': 'more',
    '/lost-words': 'more',
    '/did-you-know': 'more'
  };

  const pageToPath: Record<string, string> = {
    'home': '/',
    'states': '/states',
    'heritage': '/heritage',
    'crafts': '/crafts',
    'folk-music': '/grandma-archive',
    'grandmas-ai': '/grandmas-ai',
    'more': '/more'
  };

  // Canonical page navigator handling URL synchronization and view switching
  const routeToPage = (pageName: string, updateUrl: boolean = true) => {
    let target = pageName;
    if (pageName === 'festivals') {
      setHeritageCultureTab('festivals');
      target = 'heritage';
    } else if (pageName === 'heritage') {
      target = 'heritage';
    } else if (pageName === 'folk-music' || pageName === 'grandma-archive' || pageName === 'folk-melodies') {
      setGrandmaArchiveTab('songs');
      target = 'folk-music';
    }

    setActivePage(target);

    if (updateUrl && typeof window !== 'undefined') {
      const targetPath = pageToPath[target] || '/';
      if (window.location.pathname !== targetPath) {
        window.history.pushState(null, '', targetPath);
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Backward-compatible handleNavigate supporting both route keys and legacy section IDs
  const handleNavigate = (sectionId: string) => {
    let target = sectionId;
    if (sectionId === 'hero' || sectionId === 'home') target = 'home';
    else if (sectionId === 'interactive-map' || sectionId === 'states') target = 'states';
    else if (sectionId === 'heritage-culture' || sectionId === 'heritage') target = 'heritage';
    else if (sectionId === 'craftsmanship' || sectionId === 'crafts') target = 'crafts';
    else if (sectionId === 'grandma-archive' || sectionId === 'folk-music' || sectionId === 'folk-melodies') target = 'folk-music';
    else if (sectionId === 'festivals') {
      setHeritageCultureTab('festivals');
      target = 'heritage';
    }
    else if (sectionId === 'grandmas-ai') target = 'grandmas-ai';
    else if (sectionId === 'more' || sectionId === 'lost-words' || sectionId === 'did-you-know') target = 'more';

    routeToPage(target, true);
  };

  // Initial load and URL browser back/forward router listener
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleLocationChange = () => {
      const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      const resolved = pathToPage[currentPath] || 'home';
      if (currentPath === '/festivals') {
        setHeritageCultureTab('festivals');
      }
      setActivePage(resolved);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Guarantee window scroll is reset to top whenever activePage changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activePage]);

  const handleStateSelectFromMap = (stateId: string) => {
    setSelectedStateId(stateId);
  };

  const handleNavigateToArchive = (stateId: string) => {
    setSelectedStateId(stateId);
    routeToPage('folk-music', true);
  };

  const currentStateName = statesData.find(s => s.id === selectedStateId)?.name || 'Rajasthan';

  // Keyboard shortcut Cmd+K or Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f2] dark:bg-[#0c0805] text-[#26180f] dark:text-[#f2ebe1] selection:bg-[#b8501c] selection:text-white font-sans antialiased relative overflow-x-hidden transition-colors duration-300">
      {/* Warm Ambient Heritage Canvas Lighting */}
      <div className="fixed inset-0 opacity-40 dark:opacity-25 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] bg-[#f5ede2] dark:bg-[#2e1c12] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#fbeada] dark:bg-[#29170e] rounded-full blur-[140px]"></div>
        <div className="absolute top-[35%] right-[10%] w-[400px] h-[400px] bg-[#fdf1e4] dark:bg-[#3d2315] rounded-full blur-[160px] opacity-50 dark:opacity-30"></div>
      </div>

      <div className="relative z-10">
        {/* Sticky Top Navbar */}
        <Navbar
          activeSection={activePage}
          onNavigate={handleNavigate}
          onOpenSearch={() => setIsSearchOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Dedicated Page Router View with Smooth Transitions */}
        <main className="min-h-[85vh]">
          <AnimatePresence mode="wait">
            {/* 1. Dedicated Home Page */}
            {activePage === 'home' && (
              <motion.div
                key="page-home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Hero Section */}
                <Hero
                  onExploreClick={() => handleNavigate('states')}
                  onHeritageClick={() => handleNavigate('heritage')}
                  onOpenGrandma={() => handleNavigate('grandmas-ai')}
                  onOpenLostWords={() => handleNavigate('more')}
                />

                {/* Gateway Portals to Dedicated Branches */}
                <CulturalGateways onNavigate={handleNavigate} />
              </motion.div>
            )}

            {/* 2. Dedicated States & UTs Atlas Page */}
            {activePage === 'states' && (
              <motion.div
                key="page-states"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="pt-20 sm:pt-24"
              >
                <PageHeader
                  title="Interactive States & UTs Atlas"
                  subtitle="Explore the 28 states and 8 union territories of Bharat. Unveil signature art styles, languages, cuisines, folk melodies, and architectural landmarks."
                  badge="National Cultural Cartography"
                  icon={MapPin}
                  onBackToHome={() => handleNavigate('home')}
                />
                <InteractiveMap
                  selectedStateId={selectedStateId}
                  onSelectState={handleStateSelectFromMap}
                  onNavigateToArchive={handleNavigateToArchive}
                />
              </motion.div>
            )}

            {/* 3. Dedicated Heritage & Architecture Page (Includes Monuments & Festivals) */}
            {activePage === 'heritage' && (
              <motion.div
                key="page-heritage"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="pt-20 sm:pt-24"
              >
                <PageHeader
                  title="Heritage & Architecture"
                  subtitle="Explore 110+ structural wonders—ancient rock-cut temples, royal stepwells, and forts alongside the ecstatic seasonal harvest festivals and living rituals of Bharat."
                  badge="Monuments & Festivals"
                  icon={Landmark}
                  onBackToHome={() => handleNavigate('home')}
                  actions={
                    <div className="flex items-center gap-1.5 p-1 bg-white/70 dark:bg-[#20150e]/70 rounded-full border border-[#ebdcc7] dark:border-[#382417] text-xs">
                      <button
                        onClick={() => setHeritageCultureTab('monuments')}
                        className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                          heritageCultureTab === 'monuments'
                            ? 'bg-[#b8501c] text-white shadow-xs'
                            : 'text-[#5e4d3f] dark:text-[#bead9f] hover:text-[#b8501c]'
                        }`}
                      >
                        Monuments
                      </button>
                      <button
                        onClick={() => setHeritageCultureTab('festivals')}
                        className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                          heritageCultureTab === 'festivals'
                            ? 'bg-[#b8501c] text-white shadow-xs'
                            : 'text-[#5e4d3f] dark:text-[#bead9f] hover:text-[#b8501c]'
                        }`}
                      >
                        Festivals & Celebrations
                      </button>
                    </div>
                  }
                />
                <HeritageCulture
                  targetTab={heritageCultureTab}
                  onTabChange={(tab) => setHeritageCultureTab(tab)}
                />
              </motion.div>
            )}

            {/* 4. Dedicated Crafts Page */}
            {activePage === 'crafts' && (
              <motion.div
                key="page-crafts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="pt-20 sm:pt-24"
              >
                <PageHeader
                  title="Master Craftsmanship & Artisans"
                  subtitle="Journey through centuries of handcrafted heritage—GI-certified handlooms, Dhokra brass casting, Bidri metal inlays, and Blue Pottery with master artisan lineages."
                  badge="Sacred Crafts & Lineages"
                  icon={Scissors}
                  onBackToHome={() => handleNavigate('home')}
                />
                <Craftsmanship />
              </motion.div>
            )}

            {/* 5. Dedicated Grandma's Archive Page (Folk Music & Melodies, Living Memory Chest) */}
            {activePage === 'folk-music' && (
              <motion.div
                key="page-folk-music"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="pt-20 sm:pt-24"
              >
                <PageHeader
                  title="Grandma’s Archive: Folk Music & Melodies"
                  subtitle="The Living Memory Chest of Bharat. Listen to authentic verified folk melodies, indigenous instruments, devotional rāgas, and oral folklore across all 28 states."
                  badge="Folk Music & Living Archives"
                  icon={Music}
                  onBackToHome={() => handleNavigate('home')}
                />
                <GrandmaArchive
                  selectedStateId={selectedStateId}
                  onSelectState={(id) => setSelectedStateId(id)}
                  targetTab={grandmaArchiveTab}
                />
              </motion.div>
            )}

            {/* 6. Dedicated Grandma's AI Cultural Guide Page */}
            {activePage === 'grandmas-ai' && (
              <motion.div
                key="page-grandmas-ai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="pt-20 sm:pt-24"
              >
                <PageHeader
                  title="Grandma’s AI Cultural Guide"
                  subtitle="Your conversational elder cultural companion. Ask about ancient folklore, temple architecture, traditional foods, or local dialects in English with bilingual translations."
                  badge="Living Heritage Knowledge Guide"
                  icon={Sparkles}
                  onBackToHome={() => handleNavigate('home')}
                />
                <section
                  id="grandmas-ai"
                  className="py-12 sm:py-16 bg-gradient-to-b from-[#faf7f2] via-[#f5ede2] to-[#faf7f2] dark:from-[#0c0805] dark:via-[#160f0a] dark:to-[#0c0805] relative overflow-hidden"
                >
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <GrandmaAICulturalGuide initialStateName={currentStateName} />
                  </div>
                </section>
              </motion.div>
            )}

            {/* 7. Dedicated More Page (Lost Everyday Words of India & Did You Know) */}
            {activePage === 'more' && (
              <motion.div
                key="page-more"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="pt-20 sm:pt-24"
              >
                <PageHeader
                  title="Lost Everyday Words & Cultural Revelations"
                  subtitle="Rediscover forgotten vernacular expressions from across India’s dialects and explore astonishing historical secrets, eco-wisdom, and verified cultural revelations."
                  badge="Living Lore & Words"
                  icon={BookOpen}
                  onBackToHome={() => handleNavigate('home')}
                />

                {/* Lost Everyday Words Interactive Section */}
                <LostWordsChatbot />

                {/* Curated Did You Know Insights */}
                <DidYouKnowSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        <GlobalSearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectState={(id) => setSelectedStateId(id)}
          onNavigateSection={handleNavigate}
        />

        {/* Persistent Floating Grandma's AI Assistant (Visible on all pages except dedicated AI page) */}
        {activePage !== 'grandmas-ai' && (
          <FloatingGrandmaAI
            initialStateName={currentStateName}
            onNavigateToArchive={() => handleNavigate('folk-music')}
            onNavigateToGrandmaAI={() => handleNavigate('grandmas-ai')}
          />
        )}
      </div>
    </div>
  );
}

export default App;
