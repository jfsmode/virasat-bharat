import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Maximize2, 
  Minimize2, 
  Send, 
  Volume2, 
  VolumeX,
  Copy, 
  Check, 
  Sparkles, 
  RefreshCw, 
  Globe2, 
  ExternalLink,
  Lightbulb,
  AlertCircle,
  Landmark,
  Music,
  Scissors,
  Flame,
  Compass
} from 'lucide-react';
import { GRANDMA_AI_AVATAR } from '../data/assets';
import { MarkdownRenderer } from './MarkdownRenderer';

interface FloatingGrandmaAIProps {
  onNavigateToArchive?: () => void;
  onNavigateToGrandmaAI?: () => void;
  initialStateName?: string;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'grandma';
  text: string;
  timestamp: string;
}

export const FloatingGrandmaAI: React.FC<FloatingGrandmaAIProps> = ({
  onNavigateToArchive,
  onNavigateToGrandmaAI,
  initialStateName
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputPhrase, setInputPhrase] = useState('');
  const [lastSentPrompt, setLastSentPrompt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingTextId, setSpeakingTextId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Exact same initial welcome message as GrandmaAICulturalGuide
  const initialGreeting: ChatMessage = {
    id: `floating-welcome-1`,
    sender: 'grandma',
    text: `Namaste, my dear child! Welcome to my courtyard of living memories.

I am **Grandma’s AI**, your elder companion and heritage storyteller. Across our 28 states and Union Territories, our ancestors left behind breathtaking rock-cut temples, self-cooling stepwells, handloom weaves, and oral folk songs passed from voice to voice.

Feel free to ask me anything about:
- **Traditional Architectural Wonders**: Historic forts, stepwells (*baolis*), and sacred acoustics
- **Indigenous Crafts & Weaves**: Handlooms, natural dyeing secrets, and artisan lineages
- **Regional Folk Music & Instruments**: Rare folk instruments like the *Kamayacha* and seasonal melodies
- **Vibrant Festivals & Folk Dances**: Harvest celebrations and temple rituals
- **Time-Honored Culinary Heritage**: Ancient grandmother recipes across India

How may I guide your curiosity through our incredible *Bharat* today?`,
    timestamp: 'Just now'
  };

  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([initialGreeting]);

  // Exact same suggestion cards as GrandmaAICulturalGuide
  const suggestionCards = [
    { title: "Rajasthan’s Folk Music", query: "What is the cultural significance of Rajasthan’s folk music?", icon: Music },
    { title: "Indian Handicrafts", query: "What are the traditional crafts of Gujarat and Odisha?", icon: Scissors },
    { title: "Indian Forts Architecture", query: "Tell me about the architecture of Hawa Mahal and Rajasthan forts.", icon: Landmark },
    { title: "Traditional Folk Instruments", query: "What instruments are commonly used in Rajasthani folk music?", icon: Compass },
    { title: "Festivals of Bharat", query: "Tell me about India's major regional harvest and temple festivals.", icon: Sparkles },
    { title: "Indian Folk Dances", query: "What are the major folk dances of Punjab and Kerala?", icon: Flame }
  ];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatHistory, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = (customPrompt || inputPhrase).trim();
    if (!textToSend || isLoading) return;

    setErrorMessage(null);
    setLastSentPrompt(textToSend);

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMessage]);
    if (!customPrompt) setInputPhrase('');
    setIsLoading(true);

    let grandmaMsgId = `grandma-${Date.now()}`;
    let accumulatedText = "";
    let hasAddedMessage = false;

    try {
      const streamResponse = await fetch('/api/grandma/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          chatHistory: chatHistory.slice(-6).map(m => ({ sender: m.sender, text: m.text }))
        })
      });

      if (streamResponse.ok && streamResponse.body) {
        const reader = streamResponse.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('data: ')) {
              try {
                const data = JSON.parse(trimmed.slice(6));
                if (data.chunk) {
                  accumulatedText += data.chunk;
                  if (!hasAddedMessage) {
                    hasAddedMessage = true;
                    setChatHistory(prev => [
                      ...prev,
                      {
                        id: grandmaMsgId,
                        sender: 'grandma',
                        text: accumulatedText,
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      }
                    ]);
                  } else {
                    setChatHistory(prev =>
                      prev.map(m => m.id === grandmaMsgId ? { ...m, text: accumulatedText } : m)
                    );
                  }
                }
              } catch (parseErr) {
                // Ignore partial JSON parse errors
              }
            }
          }
        }
      } else {
        // Fallback to standard endpoint if streaming fails
        const response = await fetch('/api/grandma/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: textToSend,
            chatHistory: chatHistory.slice(-6).map(m => ({ sender: m.sender, text: m.text }))
          })
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        const grandmaReply: ChatMessage = {
          id: grandmaMsgId,
          sender: 'grandma',
          text: data.reply || "Let me share with you the deep cultural wisdom of our land.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setChatHistory(prev => [...prev, grandmaReply]);
      }
    } catch (error: any) {
      console.warn("Communication glitch:", error);
      if (!accumulatedText) {
        setErrorMessage("Grandma's connection encountered a momentary hiccup. Please click Retry to ask again!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastSentPrompt) {
      handleSendMessage(lastSentPrompt);
    } else {
      const lastUserMsg = [...chatHistory].reverse().find(m => m.sender === 'user');
      if (lastUserMsg) {
        handleSendMessage(lastUserMsg.text);
      }
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (id: string, text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingTextId === id) {
      window.speechSynthesis.cancel();
      setSpeakingTextId(null);
    } else {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[*_•]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.onend = () => setSpeakingTextId(null);
      utterance.onerror = () => setSpeakingTextId(null);
      setSpeakingTextId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleResetChat = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingTextId(null);
    setChatHistory([initialGreeting]);
    setErrorMessage(null);
  };

  return (
    <>
      {/* Floating Trigger Pill on bottom-right */}
      <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              id="floating-grandma-trigger-btn"
              onClick={() => setIsOpen(true)}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-3 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-[#b8501c] via-[#cb6028] to-[#9b3f12] text-white shadow-[0_10px_30px_rgba(184,80,28,0.4)] hover:shadow-[0_14px_38px_rgba(184,80,28,0.55)] border-2 border-[#ffdecb]/30 cursor-pointer backdrop-blur-md transition-all"
              title="Open Grandma's AI Cultural Guide"
            >
              <div className="relative shrink-0">
                <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-300 via-amber-100 to-amber-500 shadow-md group-hover:scale-105 transition-transform overflow-hidden ring-1.5 ring-white/60">
                  <img
                    src={GRANDMA_AI_AVATAR}
                    alt="Grandma AI"
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#b8501c] rounded-full animate-ping"></span>
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#b8501c] rounded-full"></span>
              </div>

              <div className="text-left pr-1">
                <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm tracking-wide leading-tight font-cinzel">
                  <span>Grandma’s AI</span>
                  <span className="px-1.5 py-0.2 bg-white/25 rounded-md text-[9px] uppercase tracking-wider font-semibold">
                    Guide
                  </span>
                </div>
                <div className="text-[10px] text-orange-100/90 font-medium flex items-center gap-1 mt-0.5">
                  <span>🌐 English Only</span>
                  <span>•</span>
                  <span>Cultural Guide</span>
                </div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Soft mobile backdrop overlay for immersive feel and easy dismissal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 sm:hidden"
              aria-hidden="true"
            />

            <motion.div
              id="floating-grandma-chat-drawer"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.96 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className={`fixed right-3 sm:right-6 bottom-4 sm:bottom-6 z-50 bg-[#faf6ee] dark:bg-[#160f0a] border border-[#ebdcc7] dark:border-[#382417] shadow-[0_20px_60px_rgba(70,40,15,0.25)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ${
                isExpanded 
                  ? 'w-[95vw] sm:w-[620px] h-[85vh] sm:h-[720px] max-w-full' 
                  : 'w-[95vw] sm:w-[480px] h-[620px] max-h-[88vh]'
              }`}
            >
              {/* Header with Title & Fixed English Indicator */}
              <div className="p-4 sm:p-4.5 bg-gradient-to-r from-[#b8501c] via-[#cb6028] to-[#9b3f12] text-white flex items-center justify-between gap-2 shadow-sm shrink-0">
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    className="w-11 h-11 rounded-2xl p-0.5 bg-gradient-to-tr from-amber-200 via-white to-amber-300 shadow-md ring-2 ring-white/40 shrink-0 overflow-hidden"
                  >
                    <img
                      src={GRANDMA_AI_AVATAR}
                      alt="Grandma AI"
                      className="w-full h-full rounded-xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-cinzel text-sm sm:text-base font-bold leading-tight">
                        Grandma’s AI
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30">
                        Cultural Guide
                      </span>
                    </div>
                    <p className="text-[11px] text-orange-100/90 leading-tight">
                      Your guide to India’s heritage & culture
                    </p>
                  </div>
                </div>

                {/* Action Controls */}
                <div className="flex items-center gap-1 text-white/90">
                  {onNavigateToGrandmaAI && (
                    <button
                      onClick={() => {
                        onNavigateToGrandmaAI();
                        setIsOpen(false);
                      }}
                      className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                      title="Open Dedicated Grandma's AI Page"
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

              {/* Language & Controls: Fixed 🌐 English Only + Reset */}
              <div className="px-3.5 py-2.5 bg-white dark:bg-[#1f150e] border-b border-[#ebdcc7] dark:border-[#38261a] flex items-center justify-between gap-2 shrink-0">
                {/* Mandatory Fixed English Indicator */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8c5225] dark:text-[#df9e67] bg-[#faf4ec] dark:bg-[#2b1d14] px-2.5 py-1 rounded-full border border-[#ebdcc7] dark:border-[#422b1c] select-none" title="Grandma communicates strictly in English">
                  <Globe2 className="w-3.5 h-3.5 text-[#b8501c]" />
                  <span>🌐 English Only</span>
                </div>

                {/* Reset Chat */}
                <button
                  onClick={handleResetChat}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs text-[#8c7a6b] hover:text-[#b8501c] rounded-full hover:bg-[#faf4ec] dark:hover:bg-[#2a1c14] border border-transparent hover:border-[#e2d5c3] dark:hover:border-[#422b1c] transition-colors cursor-pointer"
                  title="Start a new conversation"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>New Chat</span>
                </button>
              </div>

              {/* Chat Body */}
              <div
                ref={chatContainerRef}
                className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3 bg-[#faf7f2]/50 dark:bg-[#0f0a06]/40 text-xs sm:text-sm"
              >
                {chatHistory.map((msg) => {
                  const isUser = msg.sender === 'user';
                  return (
                    <div
                      key={msg.id}
                      className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      {!isUser && (
                        <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1 shadow-xs ring-1.5 ring-[#b8501c]/40">
                          <img
                            src={GRANDMA_AI_AVATAR}
                            alt="Grandma"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}

                      <div
                        className={`relative max-w-[85%] rounded-2xl p-3.5 shadow-2xs ${
                          isUser
                            ? 'bg-[#b8501c] text-white rounded-tr-xs'
                            : 'bg-white dark:bg-[#1e130c] border border-[#e8decb] dark:border-[#382417] text-[#241810] dark:text-[#f5eee4] rounded-tl-xs'
                        }`}
                      >
                        {!isUser && (
                          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#ebdcc7]/60 dark:border-[#382417]">
                            <span className="text-[10px] font-semibold text-[#8c5225] dark:text-[#df9e67] flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5 text-[#b8501c]" />
                              Grandma’s Cultural Lore
                            </span>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleSpeak(msg.id, msg.text)}
                                className={`p-1 rounded transition-colors ${
                                  speakingTextId === msg.id ? 'text-[#b8501c]' : 'text-[#8c7a6b] hover:text-[#b8501c]'
                                }`}
                                title={speakingTextId === msg.id ? "Stop audio" : "Read aloud"}
                              >
                                {speakingTextId === msg.id ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                              </button>
                              <button
                                onClick={() => handleCopy(msg.id, msg.text)}
                                className="p-1 text-[#8c7a6b] hover:text-[#b8501c] rounded transition-colors"
                                title="Copy response"
                              >
                                {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="text-xs">
                          <MarkdownRenderer content={msg.text} isUser={isUser} />
                        </div>

                        <div className={`mt-1.5 text-[9px] text-right ${isUser ? 'text-orange-100' : 'text-[#8c7a6b]'}`}>
                          {msg.timestamp}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {isLoading && (
                  <div className="flex gap-2.5 justify-start">
                    <div className="w-7 h-7 rounded-full bg-[#b8501c] text-white flex items-center justify-center font-cinzel font-bold text-[10px] shrink-0 mt-1 animate-pulse">
                      GA
                    </div>
                    <div className="rounded-2xl rounded-tl-xs p-3 bg-white dark:bg-[#1e130c] border border-[#e8decb] dark:border-[#382417] flex items-center gap-2">
                      <span className="text-xs text-[#7c6958] dark:text-[#c4b3a3] italic">
                        Grandma is recalling ancient lore...
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b8501c] animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a04214] animate-bounce"></span>
                      </div>
                    </div>
                  </div>
                )}

                {errorMessage && (
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 flex items-center justify-between text-xs text-amber-800 dark:text-amber-200">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <button onClick={handleRetry} className="font-semibold underline ml-2 hover:text-amber-900 cursor-pointer">
                      Retry
                    </button>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestions Cards */}
              <div className="px-3 py-2 bg-[#fdfbf7] dark:bg-[#18110b] border-t border-[#ebdcc7] dark:border-[#382417] overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] uppercase font-bold text-[#8c5225] dark:text-[#df9e67] shrink-0 mr-1 flex items-center gap-1">
                  <Lightbulb className="w-3 h-3 text-[#b8501c]" /> Suggestions:
                </span>
                {suggestionCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(card.query)}
                      disabled={isLoading}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white dark:bg-[#20150e] hover:bg-[#faf4ec] dark:hover:bg-[#2b1d14] border border-[#e2d5c3] dark:border-[#382417] text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#b8501c] shrink-0 whitespace-nowrap transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1"
                    >
                      <Icon className="w-3 h-3 text-[#b8501c]" />
                      <span>{card.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Message Input Box */}
              <div className="p-3 bg-white dark:bg-[#17100b] border-t border-[#ebdcc7] dark:border-[#382417] shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputPhrase}
                    onChange={(e) => setInputPhrase(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Ask Grandma about monuments, crafts, music, dance..."
                    className="flex-1 px-3.5 py-2.5 text-xs rounded-full bg-[#faf6ee] dark:bg-[#20150e] border border-[#e2d5c3] dark:border-[#382417] focus:border-[#b8501c] text-[#241810] dark:text-[#f5eee4] placeholder-[#8c7a6b] focus:outline-none"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputPhrase.trim()}
                    className="w-9 h-9 rounded-full bg-[#b8501c] hover:bg-[#a04214] text-white flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0 cursor-pointer shadow-xs"
                    title="Send question"
                    aria-label="Send question"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

