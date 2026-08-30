import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveMap } from './components/InteractiveMap';
import { GrandmaArchive } from './components/GrandmaArchive';
import { HeritageCulture } from './components/HeritageCulture';
import { Craftsmanship } from './components/Craftsmanship';
import { LostWordsChatbot } from './components/LostWordsChatbot';
import { DidYouKnowSection } from './components/DidYouKnowSection';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { FloatingGrandmaAI } from './components/FloatingGrandmaAI';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedStateId, setSelectedStateId] = useState<string>('rajasthan');
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

  // Smooth scroll to target section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStateSelectFromMap = (stateId: string) => {
    setSelectedStateId(stateId);
  };

  const handleNavigateToArchive = (stateId: string) => {
    setSelectedStateId(stateId);
    handleNavigate('grandma-archive');
  };

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
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenSearch={() => setIsSearchOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Hero Section */}
        <Hero
          onExploreClick={() => handleNavigate('interactive-map')}
          onHeritageClick={() => handleNavigate('heritage-culture')}
          onOpenGrandma={() => handleNavigate('grandma-archive')}
          onOpenLostWords={() => handleNavigate('lost-words')}
        />

        {/* Interactive Map & All States Atlas */}
        <InteractiveMap
          selectedStateId={selectedStateId}
          onSelectState={handleStateSelectFromMap}
          onNavigateToArchive={handleNavigateToArchive}
        />

        {/* Grandma's Archive: The Living Memory Chest */}
        <GrandmaArchive
          selectedStateId={selectedStateId}
          onSelectState={(id) => setSelectedStateId(id)}
        />

        {/* Heritage & Culture: Monuments & Living Celebrations */}
        <HeritageCulture />

        {/* Craftsmanship & Meet the Makers */}
        <Craftsmanship />

        {/* Lost Everyday Words Interactive Chatbot */}
        <LostWordsChatbot />

        {/* Curated Did You Know Insights */}
        <DidYouKnowSection />

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        <GlobalSearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectState={(id) => setSelectedStateId(id)}
          onNavigateSection={handleNavigate}
        />

        {/* Persistent Floating Grandma's AI on Right-Hand Side */}
        <FloatingGrandmaAI
          initialStateId={selectedStateId}
          onNavigateToArchive={() => handleNavigate('grandma-archive')}
        />
      </div>
    </div>
  );
}

export default App;
