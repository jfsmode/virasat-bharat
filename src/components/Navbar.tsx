import React, { useState, useEffect } from 'react';
import { motion, LayoutGroup } from 'motion/react';
import { Search, Menu, X, Compass, BookOpen, Landmark, Scissors, Sparkles, Map, Sun, Moon } from 'lucide-react';
import { AmbientSoundPlayer } from './AmbientSoundPlayer';
import { GRANDMA_AI_AVATAR } from '../data/assets';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch,
  theme,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'heritage', label: 'Heritage & Architecture' },
    { id: 'crafts', label: 'Crafts' },
    { id: 'folk-music', label: "Grandma's Archive" },
    { id: 'grandmas-ai', label: "Grandma’s AI" },
    { id: 'more', label: 'More' }
  ];

  const isLinkActive = (linkId: string) => {
    if (activeSection === linkId) return true;
    if (linkId === 'home' && (activeSection === 'hero' || !activeSection)) return true;
    if (linkId === 'states' && activeSection === 'interactive-map') return true;
    if (linkId === 'heritage' && (activeSection === 'heritage-culture' || activeSection === 'festivals' || activeSection === 'monuments')) return true;
    if (linkId === 'crafts' && activeSection === 'craftsmanship') return true;
    if (linkId === 'folk-music' && (activeSection === 'grandma-archive' || activeSection === 'folk-melodies')) return true;
    if (linkId === 'grandmas-ai' && activeSection === 'grandmas-ai') return true;
    if (linkId === 'more' && (activeSection === 'more' || activeSection === 'lost-words' || activeSection === 'did-you-know')) return true;
    return false;
  };

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf7f2]/95 dark:bg-[#0c0805]/95 backdrop-blur-xl border-b border-[#e8decb] dark:border-[#2e1d13] py-3 shadow-[0_4px_25px_rgba(70,40,15,0.06)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
          : 'bg-[#faf7f2]/80 dark:bg-[#0c0805]/80 backdrop-blur-md py-4 border-b border-[#f0e6d6]/60 dark:border-[#2e1d13]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo matching Reference Image: VB circle + Virasat Bharat */}
        <div
          id="navbar-brand-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          {/* Terracotta Circular Emblem with "VB" */}
          <div className="w-10 h-10 rounded-full bg-[#b8501c] flex items-center justify-center shadow-md text-white font-bold text-sm tracking-wider font-cinzel shrink-0 group-hover:bg-[#a04214] transition-colors">
            VB
          </div>

          <div className="flex flex-col">
            <h1 className="font-cinzel text-lg sm:text-xl font-bold text-[#23170f] dark:text-[#f5eee4] tracking-tight leading-none group-hover:text-[#b8501c] transition-colors">
              Virasat Bharat
            </h1>
            <span className="text-[9px] uppercase font-bold tracking-widest text-[#8c5225] dark:text-[#df9e67] mt-0.5">
              CULTURE OF EVERY STATE
            </span>
          </div>
        </div>

        {/* Desktop Nav Items matching reference */}
        <LayoutGroup id="navbar-nav-group">
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.id);
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-2.5 lg:px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'text-[#241810] dark:text-[#f5eee4] font-semibold'
                      : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#241810] dark:hover:text-[#f5eee4] hover:bg-[#f2e7d8]/60 dark:hover:bg-[#23170f]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-[#eddcc7] dark:bg-[#2b1d14] shadow-xs pointer-events-none"
                      transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.id === 'grandmas-ai' && (
                      <span className="w-4 h-4 rounded-full overflow-hidden shrink-0 ring-1 ring-[#b8501c]/40 inline-block">
                        <img
                          src={GRANDMA_AI_AVATAR}
                          alt="Grandma AI"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </span>
                    )}
                    <span>{link.label}</span>
                  </span>
                </button>
              );
            })}
          </nav>
        </LayoutGroup>

        {/* Right Controls: Ambient Tanpura Audio, Search, Theme Toggle, Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          <AmbientSoundPlayer />

          {/* Search Button */}
          <button
            id="navbar-search-btn"
            onClick={onOpenSearch}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-[#1f150f] border border-[#e2d5c3] dark:border-[#382417] hover:border-[#b8501c] text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#b8501c] hover:bg-[#faf4ec] dark:hover:bg-[#2a1c14] transition-all shadow-2xs cursor-pointer"
            title="Search Indian Heritage (States, Monuments, Festivals, Foods...)"
            aria-label="Open Heritage Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Light / Dark Mode Toggle Button near search bar */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-[#1f150f] border border-[#e2d5c3] dark:border-[#382417] hover:border-[#b8501c] text-[#5d4c3f] dark:text-[#f59e0b] hover:text-[#b8501c] dark:hover:text-[#fbbf24] hover:bg-[#faf4ec] dark:hover:bg-[#2a1c14] transition-all shadow-2xs cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#fbbf24] animate-[spin_10s_linear_infinite]" />
            ) : (
              <Moon className="w-4 h-4 text-[#7c6958]" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-[#1f150f] border border-[#e2d5c3] dark:border-[#382417] text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#241810] dark:hover:text-white cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-[#faf7f2] dark:bg-[#140e09] border-b border-[#e8decb] dark:border-[#2e1d13] shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.id);
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-[#eddcc7] dark:bg-[#2b1d14] text-[#241810] dark:text-[#f5eee4] font-semibold'
                      : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:bg-[#f2e7d8]/60 dark:hover:bg-[#1f150f]'
                  }`}
                >
                  {link.id === 'grandmas-ai' && (
                    <span className="w-5 h-5 rounded-full overflow-hidden shrink-0 ring-1 ring-[#b8501c]/40 inline-block">
                      <img
                        src={GRANDMA_AI_AVATAR}
                        alt="Grandma AI"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </span>
                  )}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
