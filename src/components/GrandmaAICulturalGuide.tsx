import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Send, 
  RefreshCw, 
  Copy, 
  Check, 
  Volume2, 
  VolumeX, 
  Globe2, 
  Heart, 
  BookOpen, 
  Compass, 
  AlertCircle,
  Landmark,
  Music,
  Scissors,
  Flame,
  Lightbulb
} from 'lucide-react';
import { GRANDMA_AI_AVATAR } from '../data/assets';
import { MarkdownRenderer } from './MarkdownRenderer';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'grandma';
  text: string;
  timestamp: string;
}

interface GrandmaAICulturalGuideProps {
  initialStateName?: string;
  className?: string;
}

export const GrandmaAICulturalGuide: React.FC<GrandmaAICulturalGuideProps> = ({
  initialStateName,
  className = ''
}) => {
  const [inputQuery, setInputQuery] = useState('');
  const [lastSentQuery, setLastSentQuery] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Suggested prompt cards as requested by the user
  const suggestionCards = [
    { title: "Explore Rajasthan’s Folk Music", query: "What is the cultural significance of Rajasthan’s folk music?", icon: Music },
    { title: "Discover Indian Handicrafts", query: "What are the traditional crafts of Gujarat and Odisha?", icon: Scissors },
    { title: "Tell Me About Indian Forts", query: "Tell me about the architecture of Hawa Mahal and Rajasthan forts.", icon: Landmark },
    { title: "Traditional Folk Instruments", query: "What instruments are commonly used in Rajasthani folk music?", icon: Compass },
    { title: "Discover India’s Festivals", query: "Tell me about India's major regional harvest and temple festivals.", icon: Sparkles },
    { title: "Learn About Indian Folk Dance", query: "What are the major folk dances of Punjab and Kerala?", icon: Flame }
  ];

  // Initial welcome message from Grandma's AI
  const initialWelcomeMessage: ChatMessage = {
    id: 'welcome-1',
    sender: 'grandma',
    text: `Namaste, my dear child! Welcome to my courtyard of living memories.

I am **Grandma’s AI**, your elder companion and heritage storyteller. Across our 28 states and Union Territories, our ancestors left behind breathtaking rock-cut temples, self-cooling stepwells, handloom weaves, and oral folk songs passed from voice to voice.

Feel free to ask me anything about:
- **Traditional Architectural Wonders**: Historic forts, stepwells (*baolis*), and sacred temple acoustics
- **Indigenous Crafts & Weaves**: Handlooms, natural dyeing secrets, and GI-tagged artisan traditions
- **Regional Folk Music & Instruments**: Rare strings like the *Kamayacha*, percussion, and seasonal melodies
- **Vibrant Festivals & Folk Dances**: Harvest rituals, temple celebrations, and sacred legends
- **Time-Honored Culinary Heritage**: Ancient recipes and regional grandmother secrets

How may I guide your curiosity through our incredible *Bharat* today?`,
    timestamp: 'Just now'
  };

  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([initialWelcomeMessage]);

  // Scroll messages container on user input / new responses (without scrolling the main page window)
  useEffect(() => {
    // If it's the initial render when opening the page, do NOT scroll down
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = 0;
      }
      return;
    }

    // On subsequent new messages or during AI streaming, scroll ONLY the internal chat container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatHistory, isLoading]);

  const handleSendMessage = async (customQuery?: string) => {
    const textToSend = (customQuery || inputQuery).trim();
    if (!textToSend || isLoading) return;

    setErrorMessage(null);
    setLastSentQuery(textToSend);

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMsg]);
    if (!customQuery) setInputQuery('');
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
                // Ignore parse errors on partial chunks
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

        if (!response.ok) throw new Error(`Server returned status ${response.status}`);
        const data = await response.json();
        const fallbackReply: ChatMessage = {
          id: grandmaMsgId,
          sender: 'grandma',
          text: data.reply || "Let me share with you the deep cultural wisdom of our land.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatHistory(prev => [...prev, fallbackReply]);
      }
    } catch (err: any) {
      console.error("Grandma AI communication error:", err);
      // If we already received partial tokens, keep them; otherwise show retry error
      if (!accumulatedText) {
        setErrorMessage("Grandma's connection encountered a momentary hiccup. Please click Retry to ask again!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastSentQuery) {
      handleSendMessage(lastSentQuery);
    } else {
      const lastUserMsg = [...chatHistory].reverse().find(m => m.sender === 'user');
      if (lastUserMsg) {
        handleSendMessage(lastUserMsg.text);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetConversation = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingMessageId(null);
    setChatHistory([initialWelcomeMessage]);
    setErrorMessage(null);
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMessageId(id);
    setTimeout(() => setCopiedMessageId(null), 2000);
  };

  const handleSpeak = (id: string, text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingMessageId === id) {
      window.speechSynthesis.cancel();
      setSpeakingMessageId(null);
    } else {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[*_•]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.onend = () => setSpeakingMessageId(null);
      utterance.onerror = () => setSpeakingMessageId(null);
      setSpeakingMessageId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      id="grandmas-ai-panel"
      className={`relative w-full rounded-3xl overflow-hidden bg-white dark:bg-[#150e09] border border-[#e8decb] dark:border-[#382417] shadow-[0_12px_45px_rgba(70,40,15,0.08)] dark:shadow-[0_12px_45px_rgba(0,0,0,0.6)] ${className}`}
    >
      {/* Top Header Card: Grandma Avatar, Title, Subtitle, Indicators */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-[#faf5ee] via-[#f7eee2] to-[#faf5ee] dark:from-[#1a110a] dark:via-[#22160d] dark:to-[#1a110a] border-b border-[#ebdcc7] dark:border-[#382417] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Grandma Avatar with cultural halo & ring */}
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-[#b8501c] via-[#d4af37] to-[#782806] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#2a170d] relative flex items-center justify-center ring-2 ring-white/60">
                <img
                  src={GRANDMA_AI_AVATAR}
                  alt="Grandma AI Cultural Guide"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Pulsing online status indicator */}
            <span
              className="absolute bottom-0 right-0 w-4.5 h-4.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#150e09] shadow-xs"
              title="Grandma is online and ready to guide you"
            >
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#23170f] dark:text-[#f5eee4]">
                Grandma’s AI
              </h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Online Cultural Guide
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#7c6958] dark:text-[#c4b3a3] font-light mt-0.5">
              Your guide to India’s heritage & culture
            </p>
          </div>
        </div>

        {/* Status badges & Controls: Fixed English badge + Reset */}
        <div className="flex items-center gap-2.5 flex-wrap self-start sm:self-auto">
          {/* Fixed English Indicator (Mandatory: No language dropdown, English only) */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#20150e] border border-[#e4d6c3] dark:border-[#382417] text-xs font-semibold text-[#8c5225] dark:text-[#df9e67] shadow-2xs select-none"
            title="Grandma communicates strictly in English"
          >
            <Globe2 className="w-3.5 h-3.5 text-[#b8501c]" />
            <span>🌐 English Only</span>
          </div>

          {/* Reset / New Conversation button */}
          <button
            onClick={handleResetConversation}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white dark:bg-[#20150e] border border-[#e4d6c3] dark:border-[#382417] hover:border-[#b8501c] text-[#7c6958] dark:text-[#c4b3a3] hover:text-[#b8501c] text-xs font-medium transition-colors shadow-2xs cursor-pointer"
            title="Start a new conversation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">New Chat</span>
          </button>
        </div>
      </div>

      {/* Chat Messages Container */}
      <div
        ref={chatContainerRef}
        className="p-4 sm:p-6 min-h-[380px] max-h-[480px] overflow-y-auto space-y-4 bg-[#faf7f2]/50 dark:bg-[#0f0a06]/40 scroll-smooth"
      >
        {chatHistory.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-xs mt-1 ring-1.5 ring-[#b8501c]/40">
                  <img
                    src={GRANDMA_AI_AVATAR}
                    alt="Grandma"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div
                className={`relative max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 sm:p-5 shadow-xs transition-all ${
                  isUser
                    ? 'bg-[#b8501c] text-white rounded-tr-xs'
                    : 'bg-white dark:bg-[#1c120b] border border-[#e8decb] dark:border-[#382417] text-[#241810] dark:text-[#f5eee4] rounded-tl-xs'
                }`}
              >
                {/* Header info in Grandma Bubble */}
                {!isUser && (
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#ebdcc7]/60 dark:border-[#382417]">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8c5225] dark:text-[#df9e67]">
                      <Sparkles className="w-3 h-3 text-[#b8501c]" />
                      <span>Grandma's Cultural Lore</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {/* Audio Read-aloud button */}
                      <button
                        onClick={() => handleSpeak(msg.id, msg.text)}
                        className={`p-1 rounded-md transition-colors ${
                          speakingMessageId === msg.id
                            ? 'text-[#b8501c] bg-[#f9eee2] dark:bg-[#2e1d14]'
                            : 'text-[#8c7a6b] hover:text-[#b8501c]'
                        }`}
                        title={speakingMessageId === msg.id ? "Stop reading" : "Read aloud in English"}
                      >
                        {speakingMessageId === msg.id ? (
                          <VolumeX className="w-3.5 h-3.5" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* Copy response */}
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="p-1 text-[#8c7a6b] hover:text-[#b8501c] rounded-md transition-colors"
                        title="Copy text"
                      >
                        {copiedMessageId === msg.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Message Body */}
                <div className="text-xs sm:text-sm font-normal">
                  <MarkdownRenderer content={msg.text} isUser={isUser} />
                </div>

                {/* Timestamp */}
                <div
                  className={`mt-2 text-[10px] text-right font-light ${
                    isUser ? 'text-orange-100' : 'text-[#8c7a6b] dark:text-[#887464]'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing / Loading animation */}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-[#b8501c] text-white flex items-center justify-center font-cinzel font-bold text-xs shrink-0 shadow-xs mt-1 animate-pulse">
              GA
            </div>
            <div className="rounded-2xl rounded-tl-xs p-4 bg-white dark:bg-[#1c120b] border border-[#e8decb] dark:border-[#382417] shadow-xs flex items-center gap-2">
              <span className="text-xs text-[#7c6958] dark:text-[#c4b3a3] italic">
                Grandma is recalling ancient lore...
              </span>
              <div className="flex items-center gap-1 ml-1">
                <span className="w-2 h-2 rounded-full bg-[#b8501c] animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 rounded-full bg-[#a04214] animate-bounce"></span>
              </div>
            </div>
          </div>
        )}

        {/* Error notification banner if any */}
        {errorMessage && (
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 flex items-center justify-between text-xs text-amber-800 dark:text-amber-200">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
            <button
              onClick={handleRetry}
              className="font-semibold underline ml-2 hover:text-amber-900 cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Clickable Suggestion Cards as requested by user prompt */}
      <div className="px-4 sm:px-6 pt-3 pb-2 bg-[#fdfbf7] dark:bg-[#18110b] border-t border-[#ebdcc7] dark:border-[#382417]">
        <div className="flex items-center gap-1.5 mb-2 text-[11px] uppercase tracking-wider font-bold text-[#8c5225] dark:text-[#df9e67]">
          <Lightbulb className="w-3 h-3 text-[#b8501c]" />
          <span>Quick Cultural Suggestions</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {suggestionCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <button
                key={idx}
                onClick={() => handleSendMessage(card.query)}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-white dark:bg-[#20150e] hover:bg-[#faf4ec] dark:hover:bg-[#2a1c14] border border-[#e2d5c3] dark:border-[#382417] hover:border-[#b8501c] text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#b8501c] whitespace-nowrap transition-all shadow-2xs shrink-0 cursor-pointer disabled:opacity-50"
              >
                <Icon className="w-3.5 h-3.5 text-[#b8501c]" />
                <span>{card.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 sm:p-5 bg-white dark:bg-[#17100b] border-t border-[#ebdcc7] dark:border-[#382417]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Grandma about monuments, crafts, folk melodies, instruments, or regional festivals..."
              className="w-full px-4 py-3 text-xs sm:text-sm rounded-full bg-[#faf6ee] dark:bg-[#20150e] border border-[#e2d5c3] dark:border-[#382417] focus:border-[#b8501c] dark:focus:border-[#b8501c] text-[#241810] dark:text-[#f5eee4] placeholder-[#8c7a6b] dark:placeholder-[#887464] focus:outline-none transition-all shadow-inner"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !inputQuery.trim()}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#b8501c] hover:bg-[#a04214] text-white transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed shrink-0 cursor-pointer"
            title="Send your question to Grandma's AI"
            aria-label="Send question"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center justify-between mt-2 px-2 text-[10px] text-[#8c7a6b] dark:text-[#887464]">
          <span>English only • Grounded in authentic Indian cultural history</span>
          <span className="hidden sm:inline">Press Enter to send</span>
        </div>
      </div>
    </div>
  );
};
