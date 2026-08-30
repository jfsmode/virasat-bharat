import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Landmark, 
  Scissors, 
  Sparkles, 
  Send, 
  Volume2, 
  Copy, 
  Check, 
  Heart, 
  Lightbulb, 
  RefreshCw, 
  ChevronDown, 
  BookOpen, 
  ShieldCheck, 
  Compass, 
  Flame, 
  History,
  Languages,
  Trash2,
  HelpCircle
} from 'lucide-react';
import { GRANDMA_LANGUAGES } from '../data/grandmaLanguages';
import { 
  GrandmaKnowledgeDomain, 
  GrandmaKnowledgeResponse, 
  GrandmaKnowledgeMessage, 
  GrandmaLanguageConfig 
} from '../types';

interface GrandmasKnowledgeAIProps {
  defaultDomain?: GrandmaKnowledgeDomain;
  initialStateName?: string;
  contextItemName?: string;
  className?: string;
}

export const GrandmasKnowledgeAI: React.FC<GrandmasKnowledgeAIProps> = ({
  defaultDomain = 'monuments',
  initialStateName = 'India',
  contextItemName,
  className = ''
}) => {
  // Find matching initial language by state name or default to first
  const findMatchingLang = (stateStr: string) => {
    const matched = GRANDMA_LANGUAGES.find(
      l => l.stateOrRegion.toLowerCase().includes(stateStr.toLowerCase()) ||
           stateStr.toLowerCase().includes(l.stateOrRegion.toLowerCase()) ||
           l.name.toLowerCase().includes(stateStr.toLowerCase())
    );
    return matched || GRANDMA_LANGUAGES[0];
  };

  const [domain, setDomain] = useState<GrandmaKnowledgeDomain>(defaultDomain);
  const [selectedLang, setSelectedLang] = useState<GrandmaLanguageConfig>(findMatchingLang(initialStateName));
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  const [messages, setMessages] = useState<GrandmaKnowledgeMessage[]>([]);

  // Update language when state changes
  useEffect(() => {
    if (initialStateName && initialStateName !== 'India') {
      const matched = findMatchingLang(initialStateName);
      setSelectedLang(matched);
    }
  }, [initialStateName]);

  // Initial welcome message
  useEffect(() => {
    const domainTitle = domain === 'monuments' 
      ? "Ancient Architecture & Heritage Monuments" 
      : domain === 'crafts'
      ? "Master Craftsmanship, Handlooms & Sacred Arts"
      : "Indian Heritage & Cultural Traditions";

    const initialGreeting: GrandmaKnowledgeMessage = {
      id: `welcome-${domain}-${selectedLang.id}`,
      sender: 'grandma',
      question: `Explore ${domainTitle}`,
      response: {
        title: `Welcome to Grandma's Knowledge of ${domainTitle}`,
        nativeGreeting: `${selectedLang.sampleGreeting}`,
        localLanguageExplanation: domain === 'monuments'
          ? `जीते रहो बेटा! हमारे भारत के प्राचीन मंदिर, किले और बावड़ियां सिर्फ पत्थर की इमारतें नहीं हैं। इनमें हज़ारों साल पुराना विज्ञान, प्राकृतिक वातानुकूलन और दिव्य कला छिपी हुई है। मुझसे किसी भी स्मारक या निर्माण रहस्य के बारे में अपनी भाषा में पूछो!`
          : `जीते रहो बेटा! हमारे भारत का हर हथकरघा, कांसा ढलाई और पारंपरिक चित्रकारी हमारे पूर्वजों की अमूल्य साधना है। प्राकृतिक रंगों से लेकर हाथों के जादुई हुनर तक, जो भी पूछना चाहो पूछो!`,
        nativeScriptExcerpt: domain === 'monuments'
          ? `वास्तुशास्त्र और स्थापत्य कला हमारे इतिहास की अमर धरोहर हैं।`
          : `हस्तकला और हथकरघा भारत की आत्मा और पूर्वजों का आशीर्वाद हैं।`,
        phoneticExcerpt: domain === 'monuments'
          ? `Vaastushastra aur sthapatya kala hamare itihas ki amar dharohar hain`
          : `Hastakala aur hathkargha bharat ki aatma aur poorvajo ka aashirwad hain`,
        englishBreakdown: domain === 'monuments'
          ? `I am your ${selectedLang.grandmaTitle} from ${selectedLang.stateOrRegion}. I hold the ancient memories of how our ancestors engineered self-cooling stepwells, musical acoustic pillars, and mortar made of jaggery and lentils that withstood earthquakes. Ask me any question in English or ${selectedLang.name}!`
          : `I am your ${selectedLang.grandmaTitle} from ${selectedLang.stateOrRegion}. I will guide you through the secret methods of natural herbal dyeing, lost-wax bronze casting, pure silk weaving, and sacred tribal motifs across our 28 states!`,
        grandmaSecretWisdom: domain === 'monuments'
          ? `Ancient builders in India used herbal lime mortars mixed with urad dal, bael fruit, and jaggery which actually gained tensile strength as centuries passed!`
          : `Traditional vegetable dyes in Kalamkari and Ajrakh use alum, iron rust, and pomegranate peels which get brighter with every wash rather than fading!`,
        historicalFact: `Preserved through generational Guru-Shishya oral master lineages.`,
        culturalSignificance: `Connecting modern seekers with the living soul of ${selectedLang.stateOrRegion}'s heritage.`,
        domain: domain,
        targetLanguage: selectedLang.name,
        grandmaTitle: selectedLang.grandmaTitle,
        stateOrRegion: selectedLang.stateOrRegion,
        verified: true
      },
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([initialGreeting]);
  }, [domain, selectedLang.id]);

  // Suggested questions based on active domain
  const getPromptStarters = () => {
    if (domain === 'monuments') {
      return [
        "How did ancient builders make temple mortar without cement?",
        "Why do Stepwells (Baolis) in Rajasthan & Gujarat stay 5°C cooler?",
        "What is the acoustic secret behind musical stone pillars in temples?",
        "How was the monolithic Kailasa Temple in Ellora carved from the top down?",
        "Why do medieval fort jaalis accelerate cooling breezes?"
      ];
    } else if (domain === 'crafts') {
      return [
        "How are natural herbal and vegetable dyes prepared for Ajrakh & Kalamkari?",
        "What makes Chola bronze lost-wax casting immortal and seamless?",
        "How do weavers create intricate double-ikat Patola patterns on handlooms?",
        "Why do terracotta water pots keep water naturally sweet and alkaline?",
        "What is the sacred folklore symbolism behind Warli & Madhubani art?"
      ];
    } else {
      return [
        "What ancient architecture secrets were passed down by our ancestors?",
        "How do traditional handlooms preserve regional folklore stories?",
        "Why did ancient homes have central courtyards (Aangan / Thotti)?",
        "Teach me about India's most fascinating GI-tagged heritage arts"
      ];
    }
  };

  const handleAskKnowledge = async (customPrompt?: string) => {
    const textToSend = customPrompt || question;
    if (!textToSend.trim()) return;

    const userMsg: GrandmaKnowledgeMessage = {
      id: `user-q-${Date.now()}`,
      sender: 'user',
      question: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customPrompt) setQuestion('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/grandma-knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: textToSend,
          domain: domain,
          selectedState: selectedLang.stateOrRegion,
          targetLanguage: selectedLang.name,
          grandmaTitle: selectedLang.grandmaTitle,
          contextItemName: contextItemName || domain,
          chatHistory: messages.slice(-4).map(m => ({ 
            sender: m.sender, 
            text: m.question, 
            reply: m.response?.englishBreakdown 
          }))
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: GrandmaKnowledgeResponse = await response.json();

      const grandmaReply: GrandmaKnowledgeMessage = {
        id: `grandma-ans-${Date.now()}`,
        sender: 'grandma',
        question: textToSend,
        response: data,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, grandmaReply]);
    } catch (error: any) {
      console.warn("Grandma Knowledge offline fallback:", error);

      const fallbackReply: GrandmaKnowledgeMessage = {
        id: `grandma-ans-${Date.now()}`,
        sender: 'grandma',
        question: textToSend,
        response: {
          title: textToSend,
          nativeGreeting: `${selectedLang.sampleGreeting}`,
          localLanguageExplanation: `बेटा, हमारे पूर्वजों की बनाई धरोहर और शिल्प में प्रकृति के साथ एकाकार होकर जीने की अनोखी विद्या है। जब भी तुम किसी पुराने मंदिर या हाथ से बुनी साड़ी को देखते हो, तो याद रखो कि इसमें पीढ़ियों की साधना है।`,
          nativeScriptExcerpt: `प्राचीन शिल्प और वास्तुकला हमारे पूर्वजों की अमर साधना है।`,
          phoneticExcerpt: `Praacheen shilp aur vaastukala hamare poorvajo ki amar saadhana hai`,
          englishBreakdown: `In our ancestral heritage across ${selectedLang.stateOrRegion} and India, every building technique and craft discipline was designed in deep harmony with the local climate, sacred mathematics, and organic natural resources.`,
          grandmaSecretWisdom: `Generations of master builders and artisans never relied on synthetic chemicals; everything from natural tree resins to herbal extracts protected our monuments and textiles for centuries!`,
          historicalFact: `Passed down orally through master artisan and architect guilds across dynasties.`,
          culturalSignificance: `A living testament to the eternal spirit of Indian ingenuity.`,
          domain: domain,
          targetLanguage: selectedLang.name,
          grandmaTitle: selectedLang.grandmaTitle,
          stateOrRegion: selectedLang.stateOrRegion,
          verified: false
        },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, fallbackReply]);
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
    utterance.rate = 0.88;
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

  return (
    <div className={`bg-white dark:bg-[#150e09] border border-[#e8decb] dark:border-[#382417] rounded-3xl p-5 sm:p-8 shadow-[0_8px_30px_rgba(70,40,15,0.06)] relative overflow-hidden ${className}`}>
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#fdecdb]/40 to-transparent pointer-events-none rounded-full blur-3xl"></div>

      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#ebdcc7] dark:border-[#332014] pb-6 mb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-[#fdf3e7] dark:bg-[#28190f] border border-[#e2cca8] dark:border-[#4d2d18] flex items-center justify-center shadow-xs">
              <span className="text-3xl select-none">👵🏽</span>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 border-2 border-white dark:border-[#150e09] rounded-full"></span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#23170f] dark:text-[#f7efe4]">
                Grandma's Knowledge AI
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#f4ebd9] dark:bg-[#301c10] text-[#8c5225] dark:text-[#e58a4e] border border-[#e2cca8] dark:border-[#4d2d18]">
                Heritage & Crafts Intelligence
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6e5d4f] dark:text-[#bcaaa0] mt-0.5">
              Ask any question about monuments, architecture & artisan crafts in <span className="text-[#b8501c] dark:text-[#e58a4e] font-semibold">{selectedLang.name}</span> ({selectedLang.nativeName}) with <span className="font-serif italic font-semibold">{selectedLang.grandmaTitle}</span>
            </p>
          </div>
        </div>

        {/* Clear / Reset action */}
        <div className="flex items-center gap-2 self-end lg:self-center">
          <button
            onClick={() => setMessages([])}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#8c5225] dark:text-[#df9e67] bg-[#faf6ee] dark:bg-[#24170f] hover:bg-[#f3e7d7] border border-[#e2d5c3] dark:border-[#3d2719] transition-all cursor-pointer"
            title="Reset Knowledge Conversation"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SELECTION BAR: DOMAIN TOPIC & 28 STATES REGIONAL LANGUAGE */}
      {/* ========================================================= */}
      <div className="bg-[#faf6ee] dark:bg-[#1e140d] border border-[#e8decb] dark:border-[#38261a] rounded-2xl p-4 sm:p-5 mb-6 relative z-10 space-y-4">
        <div className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67]">
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-[#b8501c]" />
            <span>Select Domain & Any of 28 States' Languages</span>
          </div>
          <span className="text-[10px] text-[#7c6958] dark:text-[#a89586] font-medium lowercase">
            all 28 states supported
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* OPTION 1: KNOWLEDGE DOMAIN (MONUMENTS VS CRAFTS) */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#6e5d4f] dark:text-[#bda897] block">
              1. Choose Heritage or Craft Focus:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setDomain('monuments')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  domain === 'monuments'
                    ? 'bg-[#b8501c] text-white shadow-xs'
                    : 'bg-white dark:bg-[#281a11] text-[#6e5d4f] dark:text-[#cfbfb0] border border-[#e2d5c3] dark:border-[#422c1d] hover:border-[#b8501c]'
                }`}
              >
                <Landmark className="w-3.5 h-3.5" />
                <span className="truncate">Buildings & Forts</span>
              </button>

              <button
                type="button"
                onClick={() => setDomain('crafts')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  domain === 'crafts'
                    ? 'bg-[#b8501c] text-white shadow-xs'
                    : 'bg-white dark:bg-[#281a11] text-[#6e5d4f] dark:text-[#cfbfb0] border border-[#e2d5c3] dark:border-[#422c1d] hover:border-[#b8501c]'
                }`}
              >
                <Scissors className="w-3.5 h-3.5" />
                <span className="truncate">Master Crafts</span>
              </button>

              <button
                type="button"
                onClick={() => setDomain('general')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  domain === 'general'
                    ? 'bg-[#b8501c] text-white shadow-xs'
                    : 'bg-white dark:bg-[#281a11] text-[#6e5d4f] dark:text-[#cfbfb0] border border-[#e2d5c3] dark:border-[#422c1d] hover:border-[#b8501c]'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="truncate">All Heritage</span>
              </button>
            </div>
          </div>

          {/* OPTION 2: 28 STATES LOCAL LANGUAGE SELECTOR */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#6e5d4f] dark:text-[#bda897] block">
              2. Select Local Language (All 28 States & UTs):
            </label>
            <div className="relative">
              <select
                id="grandma-knowledge-lang-select"
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
        </div>

        {/* Selected Config Info Pill */}
        <div className="pt-2 border-t border-[#ebdcc7] dark:border-[#38261a] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#7c6958] dark:text-[#a89586]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>
              Active Grandma Guide: <strong className="text-[#23170f] dark:text-[#f5eee4]">{selectedLang.grandmaTitle}</strong> ({selectedLang.stateOrRegion})
            </span>
          </div>
          <span className="italic text-[#b8501c] dark:text-[#e58a4e]">
            Answering in native script & English with ancestral secrets
          </span>
        </div>
      </div>

      {/* Suggested Quick Question Starters */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 text-xs text-[#8c5225] dark:text-[#df9e67] font-semibold mb-2">
          <Lightbulb className="w-3.5 h-3.5 text-[#b8501c]" />
          <span>Ask {selectedLang.grandmaTitle} about ancient secrets & techniques:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {getPromptStarters().map((phrase) => (
            <button
              key={phrase}
              onClick={() => handleAskKnowledge(phrase)}
              disabled={isLoading}
              className="text-xs px-3.5 py-1.5 rounded-full bg-[#faf6ee] dark:bg-[#20150e] hover:bg-[#f3e7d7] dark:hover:bg-[#2c1c13] border border-[#e2d5c3] dark:border-[#3d2719] text-[#5d4c3f] dark:text-[#cfbfb0] hover:text-[#23170f] dark:hover:text-[#f8f1e7] transition-all text-left cursor-pointer shadow-2xs"
            >
              "{phrase}"
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* MESSAGES & KNOWLEDGE STREAM */}
      {/* ========================================================= */}
      <div className="space-y-4 mb-6 max-h-[560px] overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              {msg.sender === 'user' ? (
                /* User Question Bubble */
                <div className="max-w-xl bg-[#b8501c] text-white rounded-2xl rounded-tr-xs px-5 py-3 shadow-sm text-sm">
                  <div className="font-semibold">{msg.question}</div>
                  <div className="text-[10px] text-orange-200 text-right mt-1 opacity-80">{msg.timestamp}</div>
                </div>
              ) : (
                /* Grandma's Knowledge Rich Heritage & Craft Card */
                <div className="max-w-4xl w-full bg-[#fffaf5] dark:bg-[#1b120c] border border-[#eddcc7] dark:border-[#3a2517] rounded-3xl p-5 sm:p-7 shadow-sm relative space-y-5">
                  {/* Top Bar with Title & Voice / Copy */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ebdcc7] dark:border-[#38261a] pb-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">👵🏽</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#b8501c] dark:text-[#e58a4e]">
                            {msg.response?.title || "Grandma's Knowledge"}
                          </h4>
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-[#f4ebd9] dark:bg-[#2c1c13] text-[#8c5225] dark:text-[#df9e67] border border-[#e2cca8] dark:border-[#422a1a]">
                            {selectedLang.grandmaTitle} • {selectedLang.name}
                          </span>
                        </div>
                        <p className="text-xs text-[#7c6958] dark:text-[#a89586] italic">
                          {msg.response?.nativeGreeting}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Audio Button */}
                      <button
                        onClick={() => handleSpeak(
                          msg.response?.localLanguageExplanation || msg.response?.englishBreakdown || "",
                          selectedLang.langCode
                        )}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                          speakingText === (msg.response?.localLanguageExplanation || msg.response?.englishBreakdown)
                            ? 'bg-[#b8501c] text-white border-[#b8501c] animate-pulse'
                            : 'bg-[#faf6ee] dark:bg-[#251810] text-[#b8501c] dark:text-[#e58a4e] border-[#e2d5c3] dark:border-[#3d2719] hover:bg-[#f3e7d7]'
                        }`}
                        title="Listen to Grandma's voice in local language"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{speakingText === (msg.response?.localLanguageExplanation || msg.response?.englishBreakdown) ? 'Speaking...' : 'Listen in Local Voice'}</span>
                      </button>

                      {/* Copy Button */}
                      <button
                        onClick={() => handleCopy(
                          `${msg.response?.localLanguageExplanation}\n\nEnglish: ${msg.response?.englishBreakdown}`,
                          msg.id
                        )}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#faf6ee] dark:bg-[#251810] text-[#5d4c3f] dark:text-[#cfbfb0] hover:text-[#23170f] border border-[#e2d5c3] dark:border-[#3d2719] hover:bg-[#f3e7d7] transition-all cursor-pointer"
                        title="Copy knowledge"
                      >
                        {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  {/* 1. NATIVE LANGUAGE EXPLANATION (SPEAKING AS GRANDMA) */}
                  {msg.response?.localLanguageExplanation && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67] flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#b8501c]" />
                        <span>Grandma's Explanation in {selectedLang.name} ({selectedLang.nativeName}):</span>
                      </span>
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#faf6ee] dark:bg-[#23160e] border border-[#ebdcc7] dark:border-[#382417] text-[#24160d] dark:text-[#f8eee3] text-sm sm:text-base font-medium leading-relaxed whitespace-pre-line font-serif">
                        {msg.response.localLanguageExplanation}
                      </div>
                    </div>
                  )}

                  {/* 2. MEMORABLE NATIVE SCRIPT EXCERPT & PHONETICS */}
                  {msg.response?.nativeScriptExcerpt && (
                    <div className="p-3 sm:p-4 rounded-2xl bg-[#fdf3e7] dark:bg-[#281b11] border border-[#f0cbb0] dark:border-[#4d301d]">
                      <div className="font-cinzel text-lg sm:text-xl font-bold text-[#b8501c] dark:text-[#e58a4e] tracking-wide">
                        "{msg.response.nativeScriptExcerpt}"
                      </div>
                      {msg.response.phoneticExcerpt && (
                        <div className="text-xs text-[#8c5225] dark:text-[#d38753] font-mono mt-1">
                          Pronunciation: [{msg.response.phoneticExcerpt}]
                        </div>
                      )}
                    </div>
                  )}

                  {/* 3. ENGLISH COMPREHENSIVE ARCHITECTURAL / ARTISANAL BREAKDOWN */}
                  {msg.response?.englishBreakdown && (
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7c6958] dark:text-[#a89586] block">
                        Detailed Cultural & Technical Breakdown (English):
                      </span>
                      <p className="text-xs sm:text-sm text-[#3b2b20] dark:text-[#ece0d4] leading-relaxed font-normal bg-white/70 dark:bg-[#1a110a] p-4 rounded-2xl border border-[#ebdcc7] dark:border-[#38261a]">
                        {msg.response.englishBreakdown}
                      </p>
                    </div>
                  )}

                  {/* 4. GRANDMA'S SECRET ANCIENT WISDOM CARD (SPECIAL HIGHLIGHT) */}
                  {msg.response?.grandmaSecretWisdom && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#fff3e6] via-[#fdecdb] to-[#fce3cb] dark:from-[#2c1a0e] dark:via-[#26150b] dark:to-[#221208] border border-[#f5caa4] dark:border-[#522d14] flex items-start gap-3.5 shadow-2xs">
                      <span className="text-2xl shrink-0 mt-0.5">🪔</span>
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9b4013] dark:text-[#e58a4e] mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#b8501c]" />
                          <span>Grandma's Secret Ancestral Wisdom:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#3b2718] dark:text-[#f5e7da] leading-relaxed italic font-medium">
                          "{msg.response.grandmaSecretWisdom}"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 5. HISTORICAL FACT & CULTURAL SIGNIFICANCE PILLS */}
                  {(msg.response?.historicalFact || msg.response?.culturalSignificance) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {msg.response.historicalFact && (
                        <div className="p-3.5 rounded-2xl bg-[#faf6ee] dark:bg-[#20150e] border border-[#ebdcc7] dark:border-[#38261a]">
                          <span className="font-semibold text-[#7c6958] dark:text-[#a89586] block mb-1 text-[11px] uppercase tracking-wide flex items-center gap-1">
                            <History className="w-3.5 h-3.5 text-[#b8501c]" />
                            <span>Dynasty & Authenticity Fact</span>
                          </span>
                          <p className="text-[#5e4d3f] dark:text-[#c7b6a7] leading-relaxed">{msg.response.historicalFact}</p>
                        </div>
                      )}
                      {msg.response.culturalSignificance && (
                        <div className="p-3.5 rounded-2xl bg-[#faf6ee] dark:bg-[#20150e] border border-[#ebdcc7] dark:border-[#38261a]">
                          <span className="font-semibold text-[#7c6958] dark:text-[#a89586] block mb-1 text-[11px] uppercase tracking-wide flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#b8501c]" />
                            <span>Living Cultural Soul</span>
                          </span>
                          <p className="text-[#5e4d3f] dark:text-[#c7b6a7] leading-relaxed">{msg.response.culturalSignificance}</p>
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
      {/* INPUT BAR */}
      {/* ========================================================= */}
      <div className="relative">
        <textarea
          id="grandma-knowledge-input"
          rows={2}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={`Ask ${selectedLang.grandmaTitle} about ancient buildings, temple architecture, handloom secrets, or crafts in ${selectedLang.name}...`}
          className="w-full bg-[#faf6ee] dark:bg-[#1f150e] border border-[#e2d5c3] dark:border-[#3d2719] focus:border-[#b8501c] rounded-2xl p-4 text-sm text-[#23170f] dark:text-[#f8f1e7] placeholder-[#8c7a6b] focus:outline-none transition-all shadow-inner resize-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleAskKnowledge();
            }
          }}
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-3">
          <div className="flex items-center gap-2 text-[11px] text-[#7c6958] dark:text-[#a89586]">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Replies in authentic {selectedLang.name} with architecture/craft insights & audio</span>
          </div>

          <button
            id="grandma-knowledge-send-btn"
            onClick={() => handleAskKnowledge()}
            disabled={isLoading || !question.trim()}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#b8501c] hover:bg-[#a04214] text-white font-bold text-xs shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer ml-auto"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>{selectedLang.grandmaTitle} is explaining...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Ask Grandma's Knowledge</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
