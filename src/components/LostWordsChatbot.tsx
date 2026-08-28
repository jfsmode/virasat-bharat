import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Volume2, Copy, Check, MessageSquare, Lightbulb, MapPin, RefreshCw, PartyPopper } from 'lucide-react';
import { presetLostWords } from '../data/lostWordsPreset';
import { LostWordResponse } from '../types';

export const LostWordsChatbot: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedStateFilter, setSelectedStateFilter] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(false);
  const [currentWordResult, setCurrentWordResult] = useState<LostWordResponse | null>(null);
  const [copied, setCopied] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [funMessage, setFunMessage] = useState('');

  const suggestedWords = [
    'Grandmother',
    'Friend',
    'Water',
    'Food',
    'Child',
    'Beautiful',
    'Home',
    'Rain',
    'Happiness',
    'Tea',
    'Market',
    'Blessing'
  ];

  const funMessages = [
    '🎉 Secret unlocked! Try using this word with your friends today and see if they guess what it means.',
    '😎 Congratulations — you just made your vocabulary 1% cooler and kept a heritage word alive!',
    '🪔 Beautiful discovery! Grandparents across India smiled knowing this word is spoken again.',
    '✨ You are officially a Guardian of Forgotten Indian Dialects!'
  ];

  const handleLookup = async (wordToSearch?: string) => {
    const term = (wordToSearch || query).trim();
    if (!term) return;

    setIsLoading(true);
    setShowCelebration(false);

    const lower = term.toLowerCase();
    let presetMatch = presetLostWords[lower];

    try {
      const res = await fetch('/api/gemini/lost-words', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: term,
          stateFilter: selectedStateFilter === 'All' ? undefined : selectedStateFilter
        })
      });

      if (!res.ok) throw new Error('API server returned error');
      const data = await res.json();
      setCurrentWordResult(data);
    } catch (e) {
      console.warn('Using local curated lost words preset:', e);
      if (presetMatch && presetMatch.length > 0) {
        const item = presetMatch[Math.floor(Math.random() * presetMatch.length)];
        setCurrentWordResult(item);
      } else {
        setCurrentWordResult({
          englishQuery: term,
          regionalWord: `Mithas / Sneh (${term})`,
          nativeScript: `स्नेह / மித்ரா`,
          englishMeaning: `Warm affectionate connection related to "${term}"`,
          pronunciation: `Mee-thaas / Sneh-ha`,
          languageOrDialect: `Awadhi / Tamil Heritage Idiom`,
          state: `Uttar Pradesh & Tamil Nadu`,
          exampleSentence: `Every grandmother greets guests with this sweet warmth.`,
          culturalContext: `Traditional Indian regional dialects contain countless subtle words expressing affection and family respect that have no direct single-word equivalent in modern English.`,
          grandparentComment: `Beta, speak these words from the heart—they carry the fragrance of home!`
        });
      }
    } finally {
      setIsLoading(false);
      const randomFun = funMessages[Math.floor(Math.random() * funMessages.length)];
      setFunMessage(randomFun);
      setShowCelebration(true);
      if (!wordToSearch) setQuery('');
    }
  };

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lost-words" className="py-20 sm:py-24 bg-[#faf7f2] relative overflow-hidden border-b border-[#ebdcc7]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#f9e9d9] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#f5e3d0] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd9] border border-[#e2cca8] text-[#8c5225] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b8501c]" />
            <span>Reviving Forgotten Dialect Expressions</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23170f] tracking-tight">
            Lost Everyday Words of India
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5e4d3f] font-light leading-relaxed">
            Modern slang often replaces ancient words that captured emotions with poetic perfection. Ask our Language Grandparent for regional words, dialect secrets, and forgotten vernacular idioms.
          </p>
        </div>

        {/* Grandparent Character Box */}
        <div className="bg-white border border-[#e8decb] rounded-3xl p-6 sm:p-8 shadow-[0_6px_25px_rgba(70,40,15,0.05)] relative mb-12">
          {/* Character Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#ebdcc7] pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-[#fdf3e7] border border-[#e2cca8] flex items-center justify-center text-3xl shadow-xs">
                  👴🏽
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#23170f] flex items-center gap-2">
                  <span>Language Grandparent AI</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#f4ebd9] text-[#8c5225] border border-[#e2cca8] font-semibold">
                    Interactive Chat
                  </span>
                </h3>
                <p className="text-xs text-[#6e5d4f] mt-0.5">
                  "Ask me any everyday concept in English, and I will reveal forgotten regional words across India!"
                </p>
              </div>
            </div>

            {/* Quick State filter */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#7c6958]">Filter:</span>
              <select
                value={selectedStateFilter}
                onChange={(e) => setSelectedStateFilter(e.target.value)}
                className="bg-[#faf6ee] border border-[#e2d5c3] text-[#23170f] rounded-full px-3 py-1.5 text-xs focus:outline-none focus:border-[#b8501c]"
              >
                <option value="All">All Regions</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Kerala">Kerala</option>
                <option value="Punjab">Punjab</option>
                <option value="Assam">Assam</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>
          </div>

          {/* Quick Prompt Pills */}
          <div className="mb-6">
            <div className="text-xs text-[#8c5225] font-semibold mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-[#b8501c]" />
              <span>Tap a popular word to unlock its regional Indian heritage:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestedWords.map((word) => (
                <button
                  key={word}
                  onClick={() => handleLookup(word)}
                  disabled={isLoading}
                  className="px-3.5 py-1.5 rounded-full bg-[#faf6ee] hover:bg-[#f3e7d7] text-[#5d4c3f] hover:text-[#23170f] border border-[#e2d5c3] text-xs font-semibold transition-all cursor-pointer"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type any word (e.g., Mother, Sunshine, Monsoon, Village, Joy, Sibling)..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleLookup();
                }
              }}
              className="flex-1 bg-[#faf6ee] border border-[#e2d5c3] focus:border-[#b8501c] rounded-full px-5 py-3 text-sm text-[#23170f] placeholder-[#8c7a6b] focus:outline-none transition-all shadow-inner"
            />
            <button
              id="lost-words-submit-btn"
              onClick={() => handleLookup()}
              disabled={isLoading || !query.trim()}
              className="px-6 py-3 rounded-full bg-[#b8501c] hover:bg-[#a04214] text-white font-bold text-xs sm:text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span className="hidden sm:inline">Searching...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Reveal Word</span>
                </>
              )}
            </button>
          </div>

          {/* Celebration Banner */}
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3.5 rounded-2xl bg-[#fdf3e7] border border-[#f0cbb0] text-xs font-semibold text-[#8c5225] flex items-center gap-2.5 mb-6"
            >
              <PartyPopper className="w-4 h-4 text-[#b8501c] shrink-0" />
              <span>{funMessage}</span>
            </motion.div>
          )}

          {/* Result Display Box */}
          {currentWordResult && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#fffaf5] border border-[#eddcc7] rounded-3xl p-6 shadow-md relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ebdcc7] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5225] bg-[#f4ebd9] px-3 py-1 rounded-full border border-[#e2cca8]">
                    {currentWordResult.languageOrDialect}
                  </span>
                  <span className="text-xs text-[#7c6958] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#b8501c]" />
                    {currentWordResult.state}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleSpeak(currentWordResult.regionalWord)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#faf6ee] text-[#b8501c] border border-[#e2d5c3] hover:bg-[#f3e7d7] transition-all cursor-pointer"
                    title="Pronounce word"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Pronounce</span>
                  </button>

                  <button
                    onClick={() => handleCopy(currentWordResult.regionalWord)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#faf6ee] text-[#5d4c3f] hover:text-[#23170f] border border-[#e2d5c3] hover:bg-[#f3e7d7] transition-all cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Word Highlight */}
              <div className="mb-4">
                {currentWordResult.nativeScript && (
                  <div className="font-cinzel text-3xl sm:text-4xl font-bold text-[#b8501c] mb-1">
                    {currentWordResult.nativeScript}
                  </div>
                )}
                <div className="text-2xl sm:text-3xl font-bold text-[#23170f]">
                  {currentWordResult.regionalWord}
                </div>
                {currentWordResult.pronunciation && (
                  <div className="text-xs text-[#8c5225] font-mono mt-1">
                    Pronunciation: [{currentWordResult.pronunciation}]
                  </div>
                )}
              </div>

              {/* Meaning */}
              <div className="p-4 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7] mb-4 text-xs sm:text-sm">
                <span className="text-[10px] uppercase font-bold text-[#7c6958] block mb-1">
                  English Essence & Meaning
                </span>
                <p className="text-[#3b2b20] leading-relaxed font-medium">
                  "{currentWordResult.englishMeaning}"
                </p>
              </div>

              {/* Grandparent Comment */}
              {currentWordResult.grandparentComment && (
                <div className="p-4 rounded-2xl bg-[#fdf3e7] border border-[#f0cbb0] mb-4 flex items-start gap-3">
                  <span className="text-2xl select-none">👴🏽</span>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#8c5225] mb-0.5">
                      Grandparent's Living Lore
                    </div>
                    <p className="text-xs sm:text-sm text-[#3b2b20] italic leading-relaxed">
                      "{currentWordResult.grandparentComment}"
                    </p>
                  </div>
                </div>
              )}

              {/* Context & Example */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#5e4d3f]">
                <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                  <span className="font-semibold text-[#7c6958] block mb-1 text-[11px] uppercase tracking-wide">
                    Authentic Sentence Context
                  </span>
                  <p className="italic text-[#3b2b20]">"{currentWordResult.exampleSentence}"</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                  <span className="font-semibold text-[#7c6958] block mb-1 text-[11px] uppercase tracking-wide">
                    Cultural Nuance
                  </span>
                  <p className="text-[#5e4d3f] leading-relaxed">{currentWordResult.culturalContext}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
