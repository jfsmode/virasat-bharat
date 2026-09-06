import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Music, Utensils, Languages, Sparkles, Gamepad2, Heart, Volume2, ChevronRight, Clock, Users, Play, Pause, Flame, ChevronDown, Disc3, Mic2, Video, ShieldCheck } from 'lucide-react';
import { statesData } from '../data/statesData';
import { LanguageGrandmaAI } from './LanguageGrandmaAI';
import { FolkMusicPlayer } from './FolkMusicPlayer';
import { StateCulturalData, FolkSong } from '../types';
import { enrichFolkSongWithOfficialLibrary, getOfficialFolkSong } from '../data/officialFolkMusicRegistry';

interface GrandmaArchiveProps {
  selectedStateId: string;
  onSelectState: (stateId: string) => void;
}

export const GrandmaArchive: React.FC<GrandmaArchiveProps> = ({
  selectedStateId,
  onSelectState
}) => {
  const [activeTab, setActiveTab] = useState<'songs' | 'recipes' | 'languages' | 'traditions' | 'games' | 'ai'>('songs');
  const [playingSongId, setPlayingSongId] = useState<string | null>(null);
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState<number>(0);

  // Find active state data or fallback
  const currentState: StateCulturalData = useMemo(() => {
    return statesData.find(s => s.id === selectedStateId) || statesData[0];
  }, [selectedStateId]);

  const tabs = [
    { id: 'songs', label: 'Folk Songs & Melodies', icon: Music, count: currentState.folkSongs.length },
    { id: 'recipes', label: 'Heirloom Recipes', icon: Utensils, count: currentState.recipes.length },
    { id: 'languages', label: 'Dialects & Phrases', icon: Languages, count: currentState.languages.phrases.length },
    { id: 'traditions', label: 'Living Traditions', icon: Heart, count: currentState.traditions.length },
    { id: 'games', label: 'Childhood Games', icon: Gamepad2, count: currentState.childhoodGames.length },
    { id: 'ai', label: 'Ask Grandma AI', icon: Sparkles, count: 'Live' }
  ];

  const handleSpeakPhrase = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const toggleSongPlay = (songName: string) => {
    if (playingSongId === songName) {
      setPlayingSongId(null);
    } else {
      setPlayingSongId(songName);
      handleSpeakPhrase(`Now listening to traditional folk melody: ${songName}`);
    }
  };

  return (
    <section id="grandma-archive" className="py-20 sm:py-24 bg-[#faf7f2] relative overflow-hidden border-b border-[#ebdcc7]">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#f9e9d9] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[#f5e3d0] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd9] border border-[#e2cca8] text-[#8c5225] text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#b8501c]" />
            <span>Intangible Heritage Repository</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23170f] tracking-tight">
            Grandma’s Archive: The Living Memory Chest
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5e4d3f] font-light leading-relaxed">
            India’s soul lives in the lullabies sung at dusk, the secret spice blends crushed on stone, the playground games that united villages, and the timeless words passed down across generations.
          </p>
        </div>

        {/* State Selector Dropdown */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4">
          <label htmlFor="state-selector" className="text-xs font-semibold text-[#7c6958] uppercase tracking-wider">
            Explore Heritage of:
          </label>
          <div className="relative w-full sm:w-80">
            <select
              id="state-selector"
              value={selectedStateId}
              onChange={(e) => {
                onSelectState(e.target.value);
                setSelectedRecipeIndex(0);
              }}
              className="appearance-none w-full bg-white border border-[#e8decb] text-[#23170f] font-semibold text-sm rounded-full px-5 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#b8501c]/40 focus:border-[#b8501c] cursor-pointer shadow-sm transition-all hover:bg-[#faf6ee]"
            >
              {statesData.map(st => (
                <option key={st.id} value={st.id}>
                  {st.name} • {st.languages.nativeLanguage}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c7a6b] pointer-events-none" />
          </div>
        </div>

        {/* State Banner Header */}
        <div className="relative rounded-3xl overflow-hidden border border-[#e8decb] mb-10 shadow-[0_6px_25px_rgba(70,40,15,0.05)] bg-white">
          <div className="h-44 sm:h-52 relative">
            <img
              src={currentState.heroImage}
              alt={currentState.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#23170f]/90 via-[#23170f]/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-200 bg-[#b8501c]/80 px-3 py-1 rounded-full">
                  {currentState.zone} India
                </span>
                <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mt-2">
                  {currentState.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-2xl mt-1 font-light line-clamp-2">
                  {currentState.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block text-white">
                  <div className="text-[10px] uppercase font-bold opacity-80">Primary Language</div>
                  <div className="text-sm font-semibold text-orange-200">{currentState.languages.nativeLanguage}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="p-3 bg-[#faf6ee] border-t border-[#ebdcc7] flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`archive-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#b8501c] text-white shadow-xs'
                      : 'text-[#5d4c3f] hover:text-[#23170f] hover:bg-white border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8c7a6b]'}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white font-bold' : 'bg-[#ebdcc7] text-[#5d4c3f]'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {/* TAB 1: FOLK SONGS */}
          {activeTab === 'songs' && (
            <motion.div
              key="songs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                {/* Active Interactive Folk Music Player Spotlight */}
                {playingSongId && (
                  <div className="mb-6">
                    {(() => {
                      const baseSong = currentState.folkSongs.find(s => s.songName === playingSongId) || currentState.folkSongs[0];
                      const activeSong = enrichFolkSongWithOfficialLibrary(currentState.id, baseSong);
                      return (
                        <FolkMusicPlayer
                          song={activeSong}
                          stateName={currentState.name}
                          stateId={currentState.id}
                          isPlaying={true}
                          onTogglePlay={() => setPlayingSongId(null)}
                        />
                      );
                    })()}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentState.folkSongs.map((baseSong) => {
                    const song = enrichFolkSongWithOfficialLibrary(currentState.id, baseSong);
                    const isPlaying = playingSongId === song.songName;
                    return (
                      <div
                        key={song.songName}
                        id={`song-card-${song.songName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className={`rounded-3xl border p-6 transition-all relative overflow-hidden bg-white dark:bg-[#1a120c] ${
                          isPlaying
                            ? 'border-[#b8501c] ring-2 ring-[#b8501c]/30 shadow-lg'
                            : 'border-[#e8decb] dark:border-[#38261a] hover:border-[#b8501c]/40 shadow-xs'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67] bg-[#f4ebd9] dark:bg-[#301c10] px-2.5 py-0.5 rounded-full border border-[#e2cca8] dark:border-[#422918]">
                                {song.culturalSignificance}
                              </span>
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[10px] font-semibold">
                                <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                                <span>Verified {currentState.name} Folk Heritage</span>
                              </span>
                            </div>

                            <h4 className="font-cinzel text-xl font-bold text-[#23170f] dark:text-[#f5eee4]">
                              {song.songName}
                            </h4>
                            {song.nativeScript && (
                              <div className="text-sm font-serif text-[#b8501c] dark:text-[#f3a875] mt-0.5">
                                {song.nativeScript}
                              </div>
                            )}
                          </div>

                          <button
                            id={`play-song-btn-${song.songName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            onClick={() => toggleSongPlay(song.songName)}
                            className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md transition-all cursor-pointer ${
                              isPlaying
                                ? 'bg-[#b8501c] text-white scale-105 shadow-md animate-[pulse_2s_infinite]'
                                : 'bg-[#faf6ee] dark:bg-[#281810] text-[#b8501c] dark:text-[#f3a875] hover:bg-[#f3e7d7] hover:scale-105 border border-[#e2d5c3] dark:border-[#3d2719]'
                            }`}
                            aria-label={isPlaying ? 'Pause Melody' : 'Play Melody'}
                          >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                          </button>
                        </div>

                        {/* Official Archival Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-3 text-[11px] text-[#6b5849] dark:text-[#c4b3a3]">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#faf6ee] dark:bg-[#261810] border border-[#ebdcc7] dark:border-[#382518]">
                            <Video className="w-3 h-3 text-[#b8501c]" />
                            <span>Archive: <strong>{song.officialSource || "National Cultural Archives"}</strong></span>
                          </span>
                          {song.performer && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#faf6ee] dark:bg-[#261810] border border-[#ebdcc7] dark:border-[#382518]">
                              <span>🎙️ {song.performer}</span>
                            </span>
                          )}
                        </div>

                        {/* Equalizer animation when playing */}
                        {isPlaying ? (
                          <div className="p-3 rounded-2xl bg-[#fdf3e7] dark:bg-[#2e1c12] border border-[#f0cbb0] dark:border-[#4a2e1d] mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1 bg-[#b8501c] dark:bg-[#f3a875] animate-[pulse_0.4s_ease-in-out_infinite] h-4"></span>
                              <span className="w-1 bg-[#b8501c] dark:bg-[#f3a875] animate-[pulse_0.7s_ease-in-out_infinite] h-6"></span>
                              <span className="w-1 bg-[#b8501c] dark:bg-[#f3a875] animate-[pulse_0.5s_ease-in-out_infinite] h-3"></span>
                              <span className="w-1 bg-[#b8501c] dark:bg-[#f3a875] animate-[pulse_0.9s_ease-in-out_infinite] h-5"></span>
                              <span className="w-1 bg-[#b8501c] dark:bg-[#f3a875] animate-[pulse_0.6s_ease-in-out_infinite] h-4"></span>
                            </div>
                            <span className="text-xs text-[#b8501c] dark:text-[#f3a875] font-mono font-medium">
                              Official Performance & Audio Active in Player Above
                            </span>
                          </div>
                        ) : (
                          <button
                            onClick={() => toggleSongPlay(song.songName)}
                            className="w-full mb-3 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#b8501c] to-[#9c3f12] hover:from-[#a04214] hover:to-[#85340d] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                          >
                            <Video className="w-3.5 h-3.5" />
                            <span>Play Official YouTube Performance & Heritage Lore</span>
                          </button>
                        )}

                        <div className="space-y-3 text-xs text-[#5e4d3f] dark:text-[#c4b3a3]">
                          <div className="p-3.5 rounded-2xl bg-[#faf6ee] dark:bg-[#22160d] border border-[#ebdcc7] dark:border-[#332014]">
                            <span className="font-semibold text-[#8c5225] dark:text-[#df9e67] block mb-1 text-[11px] uppercase tracking-wide">
                              When & Why Performed
                            </span>
                            <p className="text-[#3b2b20] dark:text-[#e4d6c7] leading-relaxed">{song.whenPerformed}</p>
                          </div>

                          <div>
                            <span className="font-semibold text-[#7c6958] dark:text-[#a89586] block mb-1.5 text-[11px] uppercase tracking-wide">
                              Featured Acoustic Instruments
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {song.instruments.map(inst => (
                                <span key={inst} className="px-3 py-1 rounded-full bg-[#faf6ee] dark:bg-[#24170f] border border-[#e2d5c3] dark:border-[#38261a] text-[#23170f] dark:text-[#f5eee4] text-xs font-medium">
                                  {inst}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: HEIRLOOM RECIPES */}
          {activeTab === 'recipes' && (
            <motion.div
              key="recipes"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              {currentState.recipes.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left: Recipe Selector Cards (5 cols) */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="text-xs uppercase font-bold text-[#8c5225] tracking-wider mb-2">
                      Heirloom Culinary Traditions ({currentState.recipes.length})
                    </div>
                    {currentState.recipes.map((rec, idx) => (
                      <div
                        key={rec.dishName}
                        onClick={() => setSelectedRecipeIndex(idx)}
                        className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer bg-white ${
                          selectedRecipeIndex === idx
                            ? 'border-[#b8501c] ring-1 ring-[#b8501c]/30 shadow-md bg-[#fffaf5]'
                            : 'border-[#e8decb] hover:bg-[#faf6ee]'
                        }`}
                      >
                        <img
                          src={rec.image}
                          alt={rec.dishName}
                          className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#e8decb]"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                              {rec.dietary}
                            </span>
                            <span className="text-[10px] text-[#7c6958]">
                              {rec.courseType}
                            </span>
                          </div>
                          <h4 className="font-cinzel text-sm font-bold text-[#23170f] truncate">
                            {rec.dishName}
                          </h4>
                          <p className="text-xs text-[#b8501c] truncate font-serif">
                            {rec.nativeName}
                          </p>
                        </div>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${selectedRecipeIndex === idx ? 'text-[#b8501c] translate-x-1' : 'text-[#8c7a6b]'}`} />
                      </div>
                    ))}
                  </div>

                  {/* Right: Detailed Recipe Blueprint (7 cols) */}
                  {currentState.recipes[selectedRecipeIndex] && (
                    <div className="lg:col-span-7 bg-white border border-[#e8decb] rounded-3xl p-6 sm:p-8 shadow-[0_6px_25px_rgba(70,40,15,0.05)]">
                      {(() => {
                        const rec = currentState.recipes[selectedRecipeIndex];
                        return (
                          <div>
                            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-[#e8decb]">
                              <img
                                src={rec.image}
                                alt={rec.dishName}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#23170f]/90 via-[#23170f]/30 to-transparent"></div>
                              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                <div>
                                  <div className="text-orange-200 font-serif text-sm font-medium">
                                    {rec.nativeName}
                                  </div>
                                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                                    {rec.dishName}
                                  </h3>
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#b8501c] text-white shadow-md">
                                  {rec.prepTime}
                                </span>
                              </div>
                            </div>

                            {/* Cultural Story / Grandma Wisdom */}
                            <div className="p-4 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7] mb-6">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5225] block mb-1">
                                Heirlooms & Cultural Background
                              </span>
                              <p className="text-xs sm:text-sm text-[#5e4d3f] leading-relaxed font-light">
                                {rec.culturalBackground}
                              </p>
                            </div>

                            {/* Ingredients */}
                            <div className="mb-6">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7c6958] mb-3 flex items-center gap-1.5">
                                <Utensils className="w-3.5 h-3.5 text-[#b8501c]" />
                                Key Traditional Ingredients
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {rec.ingredients.map(ing => (
                                  <span
                                    key={ing}
                                    className="px-3 py-1.5 rounded-full bg-[#faf6ee] border border-[#e2d5c3] text-[#23170f] text-xs font-medium"
                                  >
                                    {ing}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Cooking Steps */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7c6958] mb-3 flex items-center gap-1.5">
                                <Flame className="w-3.5 h-3.5 text-[#b8501c]" />
                                Step-by-Step Heritage Method
                              </h4>
                              <div className="space-y-2.5">
                                {rec.steps.map((step, sIdx) => (
                                  <div key={sIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7] text-xs text-[#4a3a2d]">
                                    <span className="w-5 h-5 rounded-full bg-[#b8501c] text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                                      {sIdx + 1}
                                    </span>
                                    <p className="leading-relaxed">{step}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 3: DIALECTS & PHRASES */}
          {activeTab === 'languages' && (
            <motion.div
              key="languages"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="bg-white border border-[#e8decb] rounded-3xl p-4 sm:p-6 mb-6 shadow-xs">
                <h4 className="font-cinzel text-lg font-bold text-[#23170f] mb-1">
                  {currentState.languages.nativeLanguage} Dialects & Linguistic Heritage
                </h4>
                <p className="text-xs sm:text-sm text-[#5e4d3f]">
                  Regional variants spoken in this state: {currentState.languages.dialects.join(' • ')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentState.languages.phrases.map((phrase, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-3xl bg-white border border-[#e8decb] hover:border-[#b8501c]/50 transition-all flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="font-serif text-2xl font-bold text-[#b8501c]">
                          {phrase.nativeScript}
                        </span>
                        <button
                          onClick={() => handleSpeakPhrase(phrase.nativeWord)}
                          className="w-8 h-8 rounded-full bg-[#faf6ee] hover:bg-[#f3e7d7] text-[#b8501c] border border-[#e2d5c3] flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                          title="Pronounce phrase"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <h4 className="text-base font-bold text-[#23170f]">
                        {phrase.nativeWord}
                      </h4>
                      <p className="text-xs text-[#8c5225] font-mono mt-0.5">
                        [{phrase.phonetics}]
                      </p>

                      <div className="my-3 p-3 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7] text-xs text-[#4a3a2d]">
                        <span className="text-[10px] font-semibold text-[#7c6958] uppercase tracking-wider block">Meaning</span>
                        "{phrase.englishMeaning}"
                      </div>
                    </div>

                    <p className="text-xs text-[#7c6958] italic pt-2 border-t border-[#ebdcc7]">
                      Context: {phrase.exampleSentence}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: LIVING TRADITIONS */}
          {activeTab === 'traditions' && (
            <motion.div
              key="traditions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentState.traditions.map((trad) => (
                <div
                  key={trad.title}
                  className="rounded-3xl bg-white border border-[#e8decb] overflow-hidden hover:border-[#b8501c]/50 transition-all shadow-xs"
                >
                  <div className="h-44 relative">
                    <img
                      src={trad.image}
                      alt={trad.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#23170f]/90 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-black/60 text-white backdrop-blur-xs">
                      {trad.category}
                    </span>
                    <h3 className="absolute bottom-3 left-4 right-4 font-cinzel text-xl font-bold text-white">
                      {trad.title}
                    </h3>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs sm:text-sm text-[#5e4d3f] leading-relaxed font-light">
                      {trad.description}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5225] block mb-1">
                        Significance in Community Life
                      </span>
                      <p className="text-xs text-[#3b2b20] leading-relaxed">
                        {trad.significance}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 5: CHILDHOOD GAMES */}
          {activeTab === 'games' && (
            <motion.div
              key="games"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentState.childhoodGames.map((game) => (
                <div
                  key={game.gameName}
                  className="rounded-3xl bg-white border border-[#e8decb] p-6 hover:border-[#b8501c]/50 transition-all shadow-xs"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="text-xs font-serif text-[#b8501c] mb-0.5">
                        {game.nativeName}
                      </div>
                      <h4 className="font-cinzel text-2xl font-bold text-[#23170f]">
                        {game.gameName}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4ebd9] border border-[#e2cca8] text-[#8c5225] text-xs font-semibold shrink-0">
                      <Users className="w-3.5 h-3.5" />
                      <span>{game.numberOfPlayers}</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs text-[#5e4d3f]">
                    <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                      <span className="font-semibold text-[#8c5225] block mb-1 text-[11px] uppercase tracking-wide">
                        How it is Played
                      </span>
                      <p className="text-[#3b2b20] leading-relaxed">{game.howItIsPlayed}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                      <span className="font-semibold text-[#7c6958] block mb-1 text-[11px] uppercase tracking-wide">
                        Historical Origins & Lore
                      </span>
                      <p className="text-[#3b2b20] leading-relaxed">{game.historicalOrigin}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-[#7c6958] block mb-1.5 text-[11px] uppercase tracking-wide">
                        Values & Skills Cultivated
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {game.skillsDeveloped.map(skill => (
                          <span key={skill} className="px-2.5 py-1 rounded-full bg-[#faf6ee] border border-[#e2d5c3] text-[#23170f] text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 6: GRANDMA AI TRANSLATOR */}
          {activeTab === 'ai' && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              <LanguageGrandmaAI
                stateName={currentState.name}
                nativeLanguageName={currentState.languages.nativeLanguage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
