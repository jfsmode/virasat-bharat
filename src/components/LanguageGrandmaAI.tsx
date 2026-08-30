import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Send, 
  Volume2, 
  Copy, 
  Check, 
  Heart, 
  Lightbulb, 
  RefreshCw, 
  Globe2, 
  MessageSquare, 
  Utensils, 
  BookOpen, 
  Smile, 
  ChevronDown, 
  Languages as LanguagesIcon,
  VolumeX,
  Trash2
} from 'lucide-react';
import { 
  TranslationResponse, 
  GrandmaReplyMode, 
  GrandmaPersona, 
  GrandmaLanguageConfig, 
  GrandmaChatMessage 
} from '../types';
import { GRANDMA_LANGUAGES } from '../data/grandmaLanguages';

interface LanguageGrandmaAIProps {
  stateName: string;
  nativeLanguageName: string;
}

export const LanguageGrandmaAI: React.FC<LanguageGrandmaAIProps> = ({
  stateName,
  nativeLanguageName
}) => {
  // Find default matching language from state or default to Hindi
  const findDefaultLang = () => {
    const matched = GRANDMA_LANGUAGES.find(
      l => l.name.toLowerCase() === nativeLanguageName.toLowerCase() ||
           l.stateOrRegion.toLowerCase().includes(stateName.toLowerCase()) ||
           stateName.toLowerCase().includes(l.name.toLowerCase())
    );
    return matched || GRANDMA_LANGUAGES[0];
  };

  const [selectedLang, setSelectedLang] = useState<GrandmaLanguageConfig>(findDefaultLang());
  const [replyMode, setReplyMode] = useState<GrandmaReplyMode>('bilingual');
  const [persona, setPersona] = useState<GrandmaPersona>('loving');
  const [inputPhrase, setInputPhrase] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  // Chat message history
  const [chatHistory, setChatHistory] = useState<GrandmaChatMessage[]>([]);

  // Update language when state changes if user hasn't actively switched
  useEffect(() => {
    const matched = findDefaultLang();
    setSelectedLang(matched);
  }, [stateName, nativeLanguageName]);

  // Initial welcome greeting when language changes
  useEffect(() => {
    const welcomeMsg: GrandmaChatMessage = {
      id: `welcome-${selectedLang.id}-${Date.now()}`,
      sender: 'grandma',
      text: `${selectedLang.sampleGreeting} I am your ${selectedLang.grandmaTitle}. Ask me anything in English or your words, and I will reply in sweet ${selectedLang.name} (${selectedLang.nativeName})!`,
      replyData: {
        originalText: "Namaste Grandma!",
        translatedText: selectedLang.sampleGreeting,
        nativeScript: selectedLang.sampleGreeting.split('(')[0].trim(),
        phoneticPronunciation: selectedLang.sampleGreeting.includes('(') 
          ? selectedLang.sampleGreeting.split('(')[1].replace(')', '').trim() 
          : selectedLang.sampleGreeting,
        dialectName: `${selectedLang.name} (${selectedLang.grandmaTitle})`,
        englishMeaning: `Affectionate elder greeting: "Live long and be blessed, my dear ${selectedLang.endearment}!"`,
        culturalContext: `In ${selectedLang.stateOrRegion}, elders shower younger generations with blessings before starting any conversation.`,
        grandmaNote: `Welcome to my courtyard! I will speak to you in ${selectedLang.name}. Choose your preferred response format above and let's talk! 🪔`
      },
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory([welcomeMsg]);
  }, [selectedLang.id]);

  // Dynamic quick prompt pills tailored to persona and language
  const getDynamicPrompts = () => {
    switch (persona) {
      case 'loving':
        return [
          "Bless me for my upcoming exams and future",
          "How to lovingly ask 'Have you eaten food yet?'",
          "How to say 'I miss you so much' in our mother tongue",
          "What is the sweetest way to say 'Take care of yourself'?"
        ];
      case 'proverbs':
        return [
          "Tell me a timeless grandmother proverb from our heritage",
          "What is a wise saying about hard work and patience?",
          "How do elders explain 'What goes around comes around'?",
          "Share a witty proverb about friendship and unity"
        ];
      case 'kitchen_nuskhe':
        return [
          "What is Grandma's secret home remedy for cold & cough?",
          "How do you prepare comforting herbal kadha / kashayam?",
          "Why do our grandmothers put a pinch of turmeric in warm milk?",
          "What is an ancient spice blend for good digestion and energy?"
        ];
      case 'playful':
        return [
          "Teach me a funny regional idiom to surprise my cousins",
          "What do grandmothers say when a child makes mischief?",
          "How to playfully tease someone who is sleeping late?",
          "Tell me a cheerful village tongue twister!"
        ];
    }
  };

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
          targetState: stateName,
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
          grandmaNote: `Beta, always keep your mother tongue close to your heart. Language carries our family's love across generations! 🪔`
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

  const clearChat = () => {
    setChatHistory([]);
  };

  return (
    <div className="bg-white dark:bg-[#150e09] border border-[#e8decb] dark:border-[#382417] rounded-3xl p-5 sm:p-8 shadow-[0_8px_30px_rgba(70,40,15,0.06)] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#fdecdb]/40 to-transparent pointer-events-none rounded-full blur-2xl"></div>

      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#ebdcc7] dark:border-[#332014] pb-6 mb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-[#fdf3e7] dark:bg-[#28190f] border border-[#e2cca8] dark:border-[#4d2d18] flex items-center justify-center shadow-xs">
              <span className="text-3xl select-none">👵🏽</span>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-[#150e09] rounded-full"></span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#23170f] dark:text-[#f7efe4]">
                Grandma's Local Dialect AI
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#f4ebd9] dark:bg-[#301c10] text-[#8c5225] dark:text-[#e58a4e] border border-[#e2cca8] dark:border-[#4d2d18]">
                Native Voice & Living Tongue
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6e5d4f] dark:text-[#bcaaa0] mt-0.5">
              Speaking in <span className="text-[#b8501c] dark:text-[#e58a4e] font-semibold">{selectedLang.name}</span> ({selectedLang.nativeName}) as <span className="font-serif italic font-semibold">{selectedLang.grandmaTitle}</span>
            </p>
          </div>
        </div>

        {/* Quick Reset / Actions */}
        <div className="flex items-center gap-2 self-end lg:self-center">
          <button
            onClick={clearChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#8c5225] dark:text-[#df9e67] bg-[#faf6ee] dark:bg-[#24170f] hover:bg-[#f3e7d7] border border-[#e2d5c3] dark:border-[#3d2719] transition-all cursor-pointer"
            title="Reset conversation"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Chat</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SELECTION CONTROLS BAR: LANGUAGE, FORMAT & PERSONA OPTIONS */}
      {/* ========================================================= */}
      <div className="bg-[#faf6ee] dark:bg-[#1e140d] border border-[#e8decb] dark:border-[#38261a] rounded-2xl p-4 sm:p-5 mb-6 relative z-10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67]">
          <LanguagesIcon className="w-4 h-4 text-[#b8501c]" />
          <span>Grandma's Response Settings & Language Options</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* OPTION 1: SELECT LOCAL LANGUAGE & REGIONAL GRANDMA */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#6e5d4f] dark:text-[#bda897] block">
              1. Choose State & Local Tongue (All 28 States & UTs):
            </label>
            <div className="relative">
              <select
                id="grandma-language-selector"
                value={selectedLang.id}
                onChange={(e) => {
                  const found = GRANDMA_LANGUAGES.find(l => l.id === e.target.value);
                  if (found) setSelectedLang(found);
                }}
                className="appearance-none w-full bg-white dark:bg-[#281a11] border border-[#e2d5c3] dark:border-[#422c1d] text-[#23170f] dark:text-[#f8f0e5] font-semibold text-xs sm:text-sm rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:border-[#b8501c] shadow-2xs transition-all cursor-pointer truncate"
              >
                {GRANDMA_LANGUAGES.map(lang => (
                  <option key={lang.id} value={lang.id}>
                    {lang.stateOrRegion}: {lang.name} ({lang.nativeName}) — {lang.grandmaTitle}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c7a6b] pointer-events-none" />
            </div>
          </div>

          {/* OPTION 2: SELECT RESPONSE FORMAT / SCRIPT MODE */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#6e5d4f] dark:text-[#bda897] block">
              2. Reply Format / Script Mode:
            </label>
            <div className="relative">
              <select
                id="grandma-mode-selector"
                value={replyMode}
                onChange={(e) => setReplyMode(e.target.value as GrandmaReplyMode)}
                className="appearance-none w-full bg-white dark:bg-[#281a11] border border-[#e2d5c3] dark:border-[#422c1d] text-[#23170f] dark:text-[#f8f0e5] font-semibold text-xs sm:text-sm rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:border-[#b8501c] shadow-2xs transition-all cursor-pointer"
              >
                <option value="bilingual">🪔 Bilingual (Native Script + English Meaning)</option>
                <option value="pure_local">📜 Pure Local Language (पूर्ण मातृभाषा)</option>
                <option value="romanized">🔤 Romanized Dialect (Hinglish/Tanglish)</option>
                <option value="storytelling">📖 Grandma Storytelling & Memories</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c7a6b] pointer-events-none" />
            </div>
          </div>

          {/* OPTION 3: SELECT GRANDMA PERSONA / MOOD */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#6e5d4f] dark:text-[#bda897] block">
              3. Grandma's Persona & Mood:
            </label>
            <div className="relative">
              <select
                id="grandma-persona-selector"
                value={persona}
                onChange={(e) => setPersona(e.target.value as GrandmaPersona)}
                className="appearance-none w-full bg-white dark:bg-[#281a11] border border-[#e2d5c3] dark:border-[#422c1d] text-[#23170f] dark:text-[#f8f0e5] font-semibold text-xs sm:text-sm rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:border-[#b8501c] shadow-2xs transition-all cursor-pointer"
              >
                <option value="loving">❤️ Loving & Pampering (लाड प्यार व आशीष)</option>
                <option value="proverbs">🦉 Wise Proverbs & Morals (लोकोक्तियां व सीख)</option>
                <option value="kitchen_nuskhe">🍲 Kitchen Nuskhe & Spices (दादी के नुस्खे)</option>
                <option value="playful">😄 Playful & Witty Slang (हंसमुख व ठिठोली)</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c7a6b] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Selected Config Info Pill */}
        <div className="pt-2 border-t border-[#ebdcc7] dark:border-[#38261a] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#7c6958] dark:text-[#a89586]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>
              Active Grandma: <strong className="text-[#23170f] dark:text-[#f5eee4]">{selectedLang.grandmaTitle}</strong> ({selectedLang.name} • {selectedLang.stateOrRegion})
            </span>
          </div>
          <span className="italic text-[#b8501c] dark:text-[#e58a4e]">
            Endearment term: "{selectedLang.endearment}"
          </span>
        </div>
      </div>

      {/* Suggested Quick Question Pills */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 text-xs text-[#8c5225] dark:text-[#df9e67] font-semibold mb-2">
          <Lightbulb className="w-3.5 h-3.5 text-[#b8501c]" />
          <span>Tap an authentic prompt to ask your {selectedLang.grandmaTitle}:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {getDynamicPrompts().map((phrase) => (
            <button
              key={phrase}
              onClick={() => handleAskGrandma(phrase)}
              disabled={isLoading}
              className="text-xs px-3.5 py-1.5 rounded-full bg-[#faf6ee] dark:bg-[#20150e] hover:bg-[#f3e7d7] dark:hover:bg-[#2c1c13] border border-[#e2d5c3] dark:border-[#3d2719] text-[#5d4c3f] dark:text-[#cfbfb0] hover:text-[#23170f] dark:hover:text-[#f8f1e7] transition-all text-left cursor-pointer shadow-2xs"
            >
              "{phrase}"
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* INTERACTIVE CHAT STREAM CONTAINER */}
      {/* ========================================================= */}
      <div className="space-y-4 mb-6 max-h-[480px] overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {chatHistory.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              {msg.sender === 'user' ? (
                /* User Message Bubble */
                <div className="max-w-xl bg-[#b8501c] text-white rounded-2xl rounded-tr-xs px-5 py-3 shadow-sm text-sm">
                  <div className="font-medium">{msg.text}</div>
                  <div className="text-[10px] text-orange-200 text-right mt-1 opacity-80">{msg.timestamp}</div>
                </div>
              ) : (
                /* Grandma Reply Card with Local Language Rich Elements */
                <div className="max-w-3xl w-full bg-[#fffaf5] dark:bg-[#1b120c] border border-[#eddcc7] dark:border-[#3a2517] rounded-3xl p-5 sm:p-6 shadow-sm relative space-y-4">
                  {/* Top Bar with Language Tag & Audio / Copy Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ebdcc7] dark:border-[#38261a] pb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">👵🏽</span>
                      <div>
                        <span className="text-xs font-bold text-[#b8501c] dark:text-[#e58a4e] font-serif">
                          {selectedLang.grandmaTitle}
                        </span>
                        <span className="text-[10px] ml-2 px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#f4ebd9] dark:bg-[#2c1c13] text-[#8c5225] dark:text-[#df9e67] border border-[#e2cca8] dark:border-[#422a1a]">
                          {msg.replyData?.dialectName || `${selectedLang.name} Voice`}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Audio Pronunciation in Local Language */}
                      <button
                        onClick={() => handleSpeak(
                          msg.replyData?.pureLocalReply || msg.replyData?.nativeScript || msg.replyData?.translatedText || msg.text,
                          selectedLang.langCode
                        )}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                          speakingText === (msg.replyData?.pureLocalReply || msg.replyData?.nativeScript || msg.replyData?.translatedText || msg.text)
                            ? 'bg-[#b8501c] text-white border-[#b8501c] animate-pulse'
                            : 'bg-[#faf6ee] dark:bg-[#251810] text-[#b8501c] dark:text-[#e58a4e] border-[#e2d5c3] dark:border-[#3d2719] hover:bg-[#f3e7d7]'
                        }`}
                        title="Listen to Grandma pronounce in local language"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{speakingText === (msg.replyData?.pureLocalReply || msg.replyData?.nativeScript || msg.replyData?.translatedText || msg.text) ? 'Playing Voice...' : 'Listen Voice'}</span>
                      </button>

                      {/* Copy Button */}
                      <button
                        onClick={() => handleCopy(msg.replyData?.pureLocalReply || msg.replyData?.translatedText || msg.text, msg.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#faf6ee] dark:bg-[#251810] text-[#5d4c3f] dark:text-[#cfbfb0] hover:text-[#23170f] border border-[#e2d5c3] dark:border-[#3d2719] hover:bg-[#f3e7d7] transition-all cursor-pointer"
                        title="Copy text"
                      >
                        {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  {/* 1. PRIMARY LOCAL LANGUAGE REPLY IN NATIVE SCRIPT */}
                  <div>
                    {msg.replyData?.nativeScript && (
                      <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#b8501c] dark:text-[#e58a4e] tracking-wide mb-1 leading-snug">
                        {msg.replyData.nativeScript}
                      </div>
                    )}

                    {/* Spoken Pure Local Reply */}
                    {msg.replyData?.pureLocalReply && msg.replyData.pureLocalReply !== msg.replyData.nativeScript && (
                      <div className="text-base sm:text-lg font-medium text-[#23170f] dark:text-[#f5eee4] leading-relaxed my-2">
                        {msg.replyData.pureLocalReply}
                      </div>
                    )}

                    {/* Phonetic Pronunciation Guide */}
                    {msg.replyData?.phoneticPronunciation && (
                      <div className="text-xs text-[#8c5225] dark:text-[#d38753] font-mono mt-1">
                        Phonetic: [{msg.replyData.phoneticPronunciation}]
                      </div>
                    )}
                  </div>

                  {/* 2. ENGLISH MEANING & TRANSLATION */}
                  {msg.replyData?.englishMeaning && (
                    <div className="p-3.5 rounded-2xl bg-[#faf6ee] dark:bg-[#24170f] border border-[#ebdcc7] dark:border-[#382417] text-xs sm:text-sm">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c6958] dark:text-[#a89586] block mb-0.5">
                        English Essence & Meaning
                      </span>
                      <p className="text-[#2c1b11] dark:text-[#ece0d4] font-medium leading-relaxed">
                        "{msg.replyData.englishMeaning}"
                      </p>
                    </div>
                  )}

                  {/* 3. GRANDMA'S AFFECTIONATE WISDOM NOTE */}
                  {msg.replyData?.grandmaNote && (
                    <div className="p-4 rounded-2xl bg-[#fdf3e7] dark:bg-[#2a1b11] border border-[#f0cbb0] dark:border-[#4d301d] flex items-start gap-3">
                      <span className="text-xl shrink-0 mt-0.5">🪔</span>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#e58a4e] mb-0.5">
                          {selectedLang.grandmaTitle}'s Living Affection & Advice
                        </div>
                        <p className="text-xs sm:text-sm text-[#3b2b20] dark:text-[#f0e4d7] leading-relaxed italic">
                          "{msg.replyData.grandmaNote}"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 4. CULTURAL CONTEXT & WORD BREAKDOWN */}
                  {(msg.replyData?.culturalContext || msg.replyData?.literalBreakdown) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {msg.replyData.culturalContext && (
                        <div className="p-3.5 rounded-2xl bg-[#faf6ee] dark:bg-[#20150e] border border-[#ebdcc7] dark:border-[#38261a]">
                          <span className="font-semibold text-[#7c6958] dark:text-[#a89586] block mb-1 text-[11px] uppercase tracking-wide">
                            Cultural Context ({selectedLang.stateOrRegion})
                          </span>
                          <p className="text-[#5e4d3f] dark:text-[#c7b6a7] leading-relaxed">{msg.replyData.culturalContext}</p>
                        </div>
                      )}
                      {msg.replyData.literalBreakdown && (
                        <div className="p-3.5 rounded-2xl bg-[#faf6ee] dark:bg-[#20150e] border border-[#ebdcc7] dark:border-[#38261a]">
                          <span className="font-semibold text-[#7c6958] dark:text-[#a89586] block mb-1 text-[11px] uppercase tracking-wide">
                            Word-by-Word Breakdown
                          </span>
                          <p className="text-[#5e4d3f] dark:text-[#c7b6a7] leading-relaxed">{msg.replyData.literalBreakdown}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* INPUT BAR FOR CHATTING / ASKING GRANDMA */}
      {/* ========================================================= */}
      <div className="relative">
        <textarea
          id="grandma-chat-input"
          rows={2}
          value={inputPhrase}
          onChange={(e) => setInputPhrase(e.target.value)}
          placeholder={`Ask ${selectedLang.grandmaTitle} anything (in English or ${selectedLang.name})...`}
          className="w-full bg-[#faf6ee] dark:bg-[#1f150e] border border-[#e2d5c3] dark:border-[#3d2719] focus:border-[#b8501c] rounded-2xl p-4 text-sm text-[#23170f] dark:text-[#f8f1e7] placeholder-[#8c7a6b] focus:outline-none transition-all shadow-inner resize-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleAskGrandma();
            }
          }}
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-3">
          <div className="flex items-center gap-2 text-[11px] text-[#7c6958] dark:text-[#a89586]">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Replies in authentic {selectedLang.name} with audio voice & cultural notes</span>
          </div>

          <button
            id="grandma-send-btn"
            onClick={() => handleAskGrandma()}
            disabled={isLoading || !inputPhrase.trim()}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#b8501c] hover:bg-[#a04214] text-white font-bold text-xs shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer ml-auto"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>{selectedLang.grandmaTitle} is replying in {selectedLang.name}...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Talk to {selectedLang.grandmaTitle}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
