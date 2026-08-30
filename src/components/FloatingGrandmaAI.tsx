import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Maximize2, 
  Minimize2, 
  Send, 
  Volume2, 
  Copy, 
  Check, 
  Heart, 
  Sparkles, 
  RefreshCw, 
  ChevronDown, 
  Languages, 
  ExternalLink,
  Trash2,
  Lightbulb
} from 'lucide-react';
import { GRANDMA_LANGUAGES } from '../data/grandmaLanguages';
import { 
  TranslationResponse, 
  GrandmaReplyMode, 
  GrandmaPersona, 
  GrandmaLanguageConfig, 
  GrandmaChatMessage 
} from '../types';

interface FloatingGrandmaAIProps {
  onNavigateToArchive?: () => void;
  initialStateId?: string;
}

export const FloatingGrandmaAI: React.FC<FloatingGrandmaAIProps> = ({
  onNavigateToArchive,
  initialStateId
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Find initial matching language
  const defaultLang = GRANDMA_LANGUAGES.find(l => l.id === initialStateId) || GRANDMA_LANGUAGES[0];
  const [selectedLang, setSelectedLang] = useState<GrandmaLanguageConfig>(defaultLang);
  const [replyMode, setReplyMode] = useState<GrandmaReplyMode>('bilingual');
  const [persona, setPersona] = useState<GrandmaPersona>('loving');
  const [inputPhrase, setInputPhrase] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingText, setSpeakingText] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(1);

  // Chat message history
  const [chatHistory, setChatHistory] = useState<GrandmaChatMessage[]>([]);

  // Update initial greeting on language change
  useEffect(() => {
    const welcomeMsg: GrandmaChatMessage = {
      id: `floating-welcome-${selectedLang.id}-${Date.now()}`,
      sender: 'grandma',
      text: `${selectedLang.sampleGreeting} I am your ${selectedLang.grandmaTitle} from ${selectedLang.stateOrRegion}. How can I bless or guide you today?`,
      replyData: {
        originalText: "Namaste Grandma!",
        translatedText: selectedLang.sampleGreeting,
        nativeScript: selectedLang.sampleGreeting.split('(')[0].trim(),
        phoneticPronunciation: selectedLang.sampleGreeting.includes('(') 
          ? selectedLang.sampleGreeting.split('(')[1].replace(')', '').trim() 
          : selectedLang.sampleGreeting,
        dialectName: `${selectedLang.name} (${selectedLang.grandmaTitle})`,
        englishMeaning: `Affectionate elder greeting: "Live long and be blessed, my dear ${selectedLang.endearment}!"`,
        culturalContext: `In ${selectedLang.stateOrRegion}, elders shower younger generations with blessings.`,
        grandmaNote: `Welcome, my child! Ask me anything in English or your language, and I will reply in sweet ${selectedLang.name}! 🪔`
      },
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory([welcomeMsg]);
  }, [selectedLang.id]);

  const handleAskGrandma = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputPhrase;
    if (!textToSend.trim()) return;

    const userMessage: GrandmaChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMessage]);
    if (!customPrompt) setInputPhrase('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: textToSend,
          targetState: selectedLang.stateOrRegion,
          targetLanguage: selectedLang.name,
          grandmaTitle: selectedLang.grandmaTitle,
          replyMode: replyMode,
          persona: persona,
          chatHistory: chatHistory.slice(-4).map(m => ({ sender: m.sender, text: m.text }))
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: TranslationResponse = await response.json();

      const grandmaReply: GrandmaChatMessage = {
        id: `grandma-${Date.now()}`,
        sender: 'grandma',
        text: data.pureLocalReply || data.translatedText,
        replyData: data,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistory(prev => [...prev, grandmaReply]);
    } catch (error: any) {
      console.warn("Using offline loving grandma response:", error);
      
      const fallbackReply: GrandmaChatMessage = {
        id: `grandma-${Date.now()}`,
        sender: 'grandma',
        text: `जीते रहो बेटा! (${textToSend})`,
        replyData: {
          originalText: textToSend,
          translatedText: `${selectedLang.sampleGreeting} (${textToSend})`,
          nativeScript: selectedLang.nativeName,
          phoneticPronunciation: `Aashirwaad from ${selectedLang.grandmaTitle}`,
          dialectName: `${selectedLang.name} (${selectedLang.grandmaTitle})`,
          englishMeaning: `Affectionate reply regarding "${textToSend}"`,
          culturalContext: `Grandmothers in ${selectedLang.stateOrRegion} always answer with blessings and ancestral warmth.`,
          grandmaNote: `Always cherish your roots, beta. Our mother tongue carries generations of love! 🪔`
        },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistory(prev => [...prev, fallbackReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = (text: string, langCode: string) => {
    if (!('speechSynthesis' in window)) return;
    
    if (speakingText === text) {
      window.speechSynthesis.cancel();
      setSpeakingText(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode || selectedLang.langCode || 'hi-IN';
    utterance.rate = 0.85;
    utterance.pitch = 1.05;

    utterance.onstart = () => setSpeakingText(text);
    utterance.onend = () => setSpeakingText(null);
    utterance.onerror = () => setSpeakingText(null);

    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const quickPrompts = [
    "Bless me for my studies & career",
    "What is your secret herbal remedy for cough?",
    "Teach me a sweet proverb in our language",
    "How do you say 'I miss you' with affection?"
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* PERSISTENT FLOATING BUTTON (ALWAYS VISIBLE ON RIGHT SIDE) */}
      {/* ========================================================= */}
      <div className="fixed right-4 sm:right-6 bottom-6 z-50 select-none">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              id="floating-grandma-trigger-btn"
              onClick={() => {
                setIsOpen(true);
                setUnreadCount(0);
              }}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-[#b8501c] via-[#cb6028] to-[#9b3f12] text-white shadow-[0_10px_30px_rgba(184,80,28,0.45)] hover:shadow-[0_14px_38px_rgba(184,80,28,0.6)] border-2 border-[#ffdecb]/30 cursor-pointer backdrop-blur-md transition-all"
              title="Talk with Grandma AI across 28 Indian States & Languages"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform shadow-inner">
                  👵🏽
                </div>
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#b8501c] rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#b8501c] rounded-full"></span>
              </div>

              <div className="text-left pr-1">
                <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm tracking-wide leading-tight">
                  <span>Grandma AI</span>
                  <span className="px-1.5 py-0.2 bg-white/25 rounded-md text-[9px] uppercase tracking-wider font-semibold">
                    28 States
                  </span>
                </div>
                <div className="text-[10px] text-orange-100/90 font-medium">
                  {selectedLang.grandmaTitle} ({selectedLang.name.split(' ')[0]})
                </div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* FLOATING INTERACTIVE CHAT WINDOW (FIXED ON RIGHT SIDE) */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="floating-grandma-chat-drawer"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className={`fixed right-3 sm:right-6 bottom-4 sm:bottom-6 z-50 bg-[#faf6ee] dark:bg-[#160f0a] border border-[#ebdcc7] dark:border-[#382417] shadow-[0_20px_60px_rgba(70,40,15,0.25)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ${
              isExpanded 
                ? 'w-[95vw] sm:w-[620px] h-[85vh] sm:h-[720px] max-w-full' 
                : 'w-[95vw] sm:w-[460px] h-[600px] max-h-[88vh]'
            }`}
          >
            {/* Header with Title & State/Language Quick Pill */}
            <div className="p-4 sm:p-4.5 bg-gradient-to-r from-[#b8501c] via-[#cb6028] to-[#9b3f12] text-white flex items-center justify-between gap-2 shadow-sm shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-2xl shadow-inner shrink-0">
                  👵🏽
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-cinzel text-sm sm:text-base font-bold leading-tight">
                      Grandma's AI
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30">
                      28 States
                    </span>
                  </div>
                  <p className="text-[11px] text-orange-100/90 leading-tight truncate max-w-[220px]">
                    {selectedLang.grandmaTitle} • {selectedLang.stateOrRegion}
                  </p>
                </div>
              </div>

              {/* Action Icons: Expand, Jump to Archive, Close */}
              <div className="flex items-center gap-1 text-white/90">
                {onNavigateToArchive && (
                  <button
                    onClick={() => {
                      onNavigateToArchive();
                      setIsOpen(false);
                    }}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                    title="Jump to Full Grandma's Courtyard Archive"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                )}
                
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                  title={isExpanded ? "Collapse" : "Expand"}
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                  title="Close Grandma AI"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick State/Language & Mode Switcher Bar */}
            <div className="p-3 bg-white dark:bg-[#1f150e] border-b border-[#ebdcc7] dark:border-[#38261a] grid grid-cols-2 gap-2 shrink-0">
              {/* 28 States Language Selector */}
              <div>
                <label className="text-[10px] font-bold text-[#8c5225] dark:text-[#df9e67] block uppercase tracking-wider mb-1">
                  1. State & Language (28 States):
                </label>
                <div className="relative">
                  <select
                    id="floating-grandma-lang-select"
                    value={selectedLang.id}
                    onChange={(e) => {
                      const found = GRANDMA_LANGUAGES.find(l => l.id === e.target.value);
                      if (found) setSelectedLang(found);
                    }}
                    className="w-full appearance-none bg-[#faf6ee] dark:bg-[#281c13] border border-[#e2d5c3] dark:border-[#472d1c] text-[#23170f] dark:text-[#f7efe4] font-medium text-xs rounded-xl px-3 py-1.5 pr-7 focus:outline-none focus:border-[#b8501c] cursor-pointer truncate"
                  >
                    {GRANDMA_LANGUAGES.map(lang => (
                      <option key={lang.id} value={lang.id}>
                        {lang.stateOrRegion}: {lang.name} ({lang.grandmaTitle})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8c7a6b] pointer-events-none" />
                </div>
              </div>

              {/* Reply Format Mode */}
              <div>
                <label className="text-[10px] font-bold text-[#8c5225] dark:text-[#df9e67] block uppercase tracking-wider mb-1">
                  2. Response Format:
                </label>
                <div className="relative">
                  <select
                    id="floating-grandma-mode-select"
                    value={replyMode}
                    onChange={(e) => setReplyMode(e.target.value as GrandmaReplyMode)}
                    className="w-full appearance-none bg-[#faf6ee] dark:bg-[#281c13] border border-[#e2d5c3] dark:border-[#472d1c] text-[#23170f] dark:text-[#f7efe4] font-medium text-xs rounded-xl px-3 py-1.5 pr-7 focus:outline-none focus:border-[#b8501c] cursor-pointer truncate"
                  >
                    <option value="bilingual">🪔 Bilingual (Native + English)</option>
                    <option value="pure_local">📜 Pure Local Tongue (मातृभाषा)</option>
                    <option value="romanized">🔤 Romanized Dialect (Phonetic)</option>
                    <option value="storytelling">📖 Folklore & Memories</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8c7a6b] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Quick Persona Pills Bar */}
            <div className="px-3 py-2 bg-[#fdf3e7] dark:bg-[#22170f] border-b border-[#ebdcc7] dark:border-[#38261a] flex items-center justify-between gap-1 shrink-0 overflow-x-auto">
              <span className="text-[10px] font-bold text-[#8c5225] dark:text-[#df9e67] uppercase tracking-wider shrink-0 mr-1">
                Mood:
              </span>
              <div className="flex items-center gap-1.5">
                {[
                  { id: 'loving', label: '❤️ Loving', title: 'Blessings & Warmth' },
                  { id: 'proverbs', label: '🦉 Proverbs', title: 'Folk Sayings' },
                  { id: 'kitchen_nuskhe', label: '🍲 Nuskhe', title: 'Kitchen Remedies' },
                  { id: 'playful', label: '😄 Playful', title: 'Witty Teasing' }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPersona(p.id as GrandmaPersona)}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                      persona === p.id 
                        ? 'bg-[#b8501c] text-white shadow-2xs' 
                        : 'bg-white dark:bg-[#2c1c13] text-[#5d4c3f] dark:text-[#cbb9a9] border border-[#e2cca8] dark:border-[#3d2719] hover:border-[#b8501c]'
                    }`}
                    title={p.title}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Message Scrollable Area */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  {msg.sender === 'user' ? (
                    <div className="max-w-[85%] bg-[#b8501c] text-white rounded-2xl rounded-tr-xs px-3.5 py-2 text-xs shadow-xs">
                      <p>{msg.text}</p>
                      <div className="text-[9px] text-orange-200 text-right mt-1 opacity-80">{msg.timestamp}</div>
                    </div>
                  ) : (
                    <div className="max-w-[95%] bg-white dark:bg-[#22170f] border border-[#ebdcc7] dark:border-[#3a2517] rounded-2xl p-3.5 shadow-xs space-y-2.5">
                      {/* Top Header of Reply */}
                      <div className="flex items-center justify-between gap-2 border-b border-[#ebdcc7] dark:border-[#38261a] pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm">👵🏽</span>
                          <span className="text-xs font-bold text-[#b8501c] dark:text-[#e58a4e] font-serif">
                            {selectedLang.grandmaTitle}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {/* Speak Button */}
                          <button
                            onClick={() => handleSpeak(
                              msg.replyData?.pureLocalReply || msg.replyData?.nativeScript || msg.replyData?.translatedText || msg.text,
                              selectedLang.langCode
                            )}
                            className={`p-1 rounded-md transition-colors cursor-pointer ${
                              speakingText === (msg.replyData?.pureLocalReply || msg.replyData?.nativeScript || msg.replyData?.translatedText || msg.text)
                                ? 'bg-[#b8501c] text-white animate-pulse'
                                : 'hover:bg-[#faf6ee] text-[#b8501c] dark:text-[#e58a4e]'
                            }`}
                            title="Listen in Native Voice"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>

                          {/* Copy Button */}
                          <button
                            onClick={() => handleCopy(msg.replyData?.pureLocalReply || msg.replyData?.translatedText || msg.text, msg.id)}
                            className="p-1 rounded-md hover:bg-[#faf6ee] text-[#7c6958] dark:text-[#a89586] transition-colors cursor-pointer"
                            title="Copy reply"
                          >
                            {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      {/* Native Script / Local Words */}
                      {msg.replyData?.nativeScript && (
                        <div className="font-cinzel text-base sm:text-lg font-bold text-[#b8501c] dark:text-[#e58a4e] leading-snug">
                          {msg.replyData.nativeScript}
                        </div>
                      )}

                      {/* Pure Local Spoken Reply */}
                      {msg.replyData?.pureLocalReply && msg.replyData.pureLocalReply !== msg.replyData.nativeScript && (
                        <div className="text-xs sm:text-sm font-medium text-[#23170f] dark:text-[#f8f1e7] leading-relaxed">
                          {msg.replyData.pureLocalReply}
                        </div>
                      )}

                      {/* English Meaning */}
                      {msg.replyData?.englishMeaning && (
                        <div className="p-2.5 rounded-xl bg-[#faf6ee] dark:bg-[#1a110a] border border-[#ebdcc7] dark:border-[#38261a] text-[11px] sm:text-xs">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#7c6958] dark:text-[#a89586] block">
                            Meaning:
                          </span>
                          <span className="text-[#3b2b20] dark:text-[#e4d8cb] italic font-medium">
                            "{msg.replyData.englishMeaning}"
                          </span>
                        </div>
                      )}

                      {/* Grandma's Affection Note */}
                      {msg.replyData?.grandmaNote && (
                        <div className="p-2.5 rounded-xl bg-[#fdf3e7] dark:bg-[#281b11] border border-[#f0cbb0] dark:border-[#4d301d] text-[11px] text-[#4d3a2d] dark:text-[#ede2d6] flex items-start gap-1.5">
                          <span className="text-sm shrink-0">🪔</span>
                          <span className="italic">"{msg.replyData.grandmaNote}"</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Prompt Pills */}
            <div className="px-3 py-1.5 bg-white dark:bg-[#1b120c] border-t border-[#ebdcc7] dark:border-[#38261a] flex gap-1.5 overflow-x-auto shrink-0">
              {quickPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => handleAskGrandma(p)}
                  disabled={isLoading}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-[#faf6ee] dark:bg-[#251810] hover:bg-[#f3e7d7] text-[#5d4c3f] dark:text-[#cfbfb0] border border-[#e2d5c3] dark:border-[#3d2719] whitespace-nowrap cursor-pointer shrink-0 transition-all"
                >
                  "{p}"
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white dark:bg-[#1f150e] border-t border-[#ebdcc7] dark:border-[#38261a] shrink-0">
              <div className="flex items-center gap-2">
                <input
                  id="floating-grandma-input"
                  type="text"
                  value={inputPhrase}
                  onChange={(e) => setInputPhrase(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAskGrandma();
                    }
                  }}
                  placeholder={`Ask ${selectedLang.grandmaTitle} in ${selectedLang.name}...`}
                  className="flex-1 bg-[#faf6ee] dark:bg-[#281c13] border border-[#e2d5c3] dark:border-[#472d1c] focus:border-[#b8501c] rounded-xl px-3.5 py-2 text-xs text-[#23170f] dark:text-[#f8f1e7] placeholder-[#8c7a6b] focus:outline-none transition-all"
                />

                <button
                  id="floating-grandma-send-btn"
                  onClick={() => handleAskGrandma()}
                  disabled={isLoading || !inputPhrase.trim()}
                  className="p-2 rounded-xl bg-[#b8501c] hover:bg-[#a04214] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0 shadow-sm"
                  title="Send message to Grandma"
                >
                  {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
