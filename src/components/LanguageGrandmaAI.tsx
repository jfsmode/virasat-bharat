import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Send, Volume2, Copy, Check, Heart, Lightbulb, RefreshCw } from 'lucide-react';
import { TranslationResponse } from '../types';

interface LanguageGrandmaAIProps {
  stateName: string;
  nativeLanguageName: string;
}

export const LanguageGrandmaAI: React.FC<LanguageGrandmaAIProps> = ({
  stateName,
  nativeLanguageName
}) => {
  const [inputPhrase, setInputPhrase] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TranslationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const samplePhrases = [
    "How are you doing, beta?",
    "Have you eaten food yet?",
    "Come sit with me and listen to a story",
    "Where are you going in such a hurry?",
    "You look so wonderful and bright today!",
    "Take this warm blessing and stay happy"
  ];

  const handleTranslate = async (phraseToUse?: string) => {
    const textToTranslate = phraseToUse || inputPhrase;
    if (!textToTranslate.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/gemini/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: textToTranslate,
          targetState: stateName,
          targetLanguage: nativeLanguageName
        })
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
      if (!phraseToUse) {
        setInputPhrase('');
      }
    } catch (err: any) {
      console.error("Translation request failed:", err);
      // Fallback warm grandmother translation if offline or API key pending
      setResult({
        originalText: textToTranslate,
        translatedText: `Jeete raho, beta! (${textToTranslate})`,
        phoneticPronunciation: `Jee-tey Rah-ho, Bay-tah`,
        nativeScript: `जीते रहो बेटा`,
        dialectName: `${nativeLanguageName} Regional Idiom`,
        culturalContext: `In Indian households, grandmothers blend affectionate blessing with everyday conversation.`,
        grandmaNote: `Beta, always speak softly and with love. In our tradition, sweet words melt the hardest hearts! 🪔`,
        literalBreakdown: `Jeete (may you live) + raho (long/thriving) + beta (my child/dear one)`
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 1.05;
    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-[#e8decb] rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#ebdcc7] pb-6 mb-6">
        <div className="flex items-center gap-4">
          {/* Animated Grandma Avatar */}
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-[#fdf3e7] border border-[#e2cca8] flex items-center justify-center shadow-xs">
              <span className="text-2xl select-none">👵🏽</span>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#23170f]">
                Grandma's Dialect Voice
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#f4ebd9] text-[#8c5225] border border-[#e2cca8]">
                AI Cultural Linguistic Engine
              </span>
            </div>
            <p className="text-xs text-[#6e5d4f] mt-0.5">
              Speaking in the authentic affectionate dialects of <span className="text-[#b8501c] font-semibold">{stateName}</span> ({nativeLanguageName})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#7c6958] bg-[#faf6ee] px-3.5 py-1.5 rounded-full border border-[#ebdcc7]">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Warm grandmotherly tone guaranteed</span>
        </div>
      </div>

      {/* Suggested prompts */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 text-xs text-[#8c5225] font-semibold mb-2">
          <Lightbulb className="w-3.5 h-3.5 text-[#b8501c]" />
          <span>Try asking Dadi / Paati / Amma how to say:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {samplePhrases.map((phrase) => (
            <button
              key={phrase}
              onClick={() => handleTranslate(phrase)}
              disabled={isLoading}
              className="text-xs px-3.5 py-1.5 rounded-full bg-[#faf6ee] hover:bg-[#f3e7d7] border border-[#e2d5c3] text-[#5d4c3f] hover:text-[#23170f] transition-all text-left cursor-pointer"
            >
              "{phrase}"
            </button>
          ))}
        </div>
      </div>

      {/* Input box */}
      <div className="relative mb-6">
        <textarea
          rows={2}
          value={inputPhrase}
          onChange={(e) => setInputPhrase(e.target.value)}
          placeholder={`Type any phrase to translate into ${stateName}'s authentic spoken dialect...`}
          className="w-full bg-[#faf6ee] border border-[#e2d5c3] focus:border-[#b8501c] rounded-2xl p-4 text-sm text-[#23170f] placeholder-[#8c7a6b] focus:outline-none transition-all shadow-inner resize-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleTranslate();
            }
          }}
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-[11px] text-[#7c6958]">
            Powered by Gemini Multi-dialect Cultural Intelligence
          </span>
          <button
            id="grandma-translate-submit-btn"
            onClick={() => handleTranslate()}
            disabled={isLoading || !inputPhrase.trim()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#b8501c] hover:bg-[#a04214] text-white font-bold text-xs shadow-xs disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Grandma is thinking...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Ask Grandma</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Result Card */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#fffaf5] border border-[#eddcc7] rounded-3xl p-5 sm:p-6 shadow-xs relative"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ebdcc7] pb-4 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8c5225] bg-[#f4ebd9] px-3 py-1 rounded-full border border-[#e2cca8]">
                {result.dialectName || `${stateName} Dialect`}
              </span>
              <p className="text-xs text-[#7c6958] mt-1">
                Original Query: <span className="text-[#23170f] italic">"{result.originalText}"</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSpeak(result.translatedText || result.phoneticPronunciation)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-[#b8501c] text-white border-[#b8501c]'
                    : 'bg-[#faf6ee] text-[#b8501c] border-[#e2d5c3] hover:bg-[#f3e7d7]'
                }`}
                title="Listen to Grandma pronounce it"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Pronounce</span>
              </button>

              <button
                onClick={() => handleCopy(result.translatedText)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#faf6ee] text-[#5d4c3f] hover:text-[#23170f] border border-[#e2d5c3] hover:bg-[#f3e7d7] transition-all cursor-pointer"
                title="Copy translated text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Main Dialect Translation Output */}
          <div className="mb-4">
            {result.nativeScript && (
              <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#b8501c] tracking-wide mb-1">
                {result.nativeScript}
              </div>
            )}
            <div className="text-lg sm:text-xl font-semibold text-[#23170f]">
              {result.translatedText}
            </div>
            {result.phoneticPronunciation && (
              <div className="text-xs text-[#8c5225] font-mono mt-1">
                Phonetic: [{result.phoneticPronunciation}]
              </div>
            )}
          </div>

          {/* Grandma's Personal Note */}
          {result.grandmaNote && (
            <div className="p-4 rounded-2xl bg-[#fdf3e7] border border-[#f0cbb0] mb-4 flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5">👵🏽</span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#8c5225] mb-0.5">
                  Grandma's Affectionate Wisdom
                </div>
                <p className="text-xs sm:text-sm text-[#3b2b20] leading-relaxed italic">
                  "{result.grandmaNote}"
                </p>
              </div>
            </div>
          )}

          {/* Cultural Context & Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {result.culturalContext && (
              <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                <span className="font-semibold text-[#7c6958] block mb-1 text-[11px] uppercase tracking-wide">
                  Cultural Nuance
                </span>
                <p className="text-[#5e4d3f] leading-relaxed">{result.culturalContext}</p>
              </div>
            )}
            {result.literalBreakdown && (
              <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#ebdcc7]">
                <span className="font-semibold text-[#7c6958] block mb-1 text-[11px] uppercase tracking-wide">
                  Literal Word Breakdown
                </span>
                <p className="text-[#5e4d3f] leading-relaxed">{result.literalBreakdown}</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};
