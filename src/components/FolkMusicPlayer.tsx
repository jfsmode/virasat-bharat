import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles, Music, Mic2, Disc3, ShieldAlert, Award } from 'lucide-react';
import { FolkSong } from '../types';

interface FolkMusicPlayerProps {
  song: FolkSong;
  stateName: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const FolkMusicPlayer: React.FC<FolkMusicPlayerProps> = ({
  song,
  stateName,
  isPlaying,
  onTogglePlay
}) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [activeLyricIndex, setActiveLyricIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'visualizer' | 'lyrics' | 'instruments'>('lyrics');

  const isKesariya = song.songName.toLowerCase().includes('kesariya');
  const isGhoomar = song.songName.toLowerCase().includes('ghoomar');

  const songDuration = isKesariya ? 296 : isGhoomar ? 204 : 180; // 4:56 for Kesariya Balam, 3:24 for Ghoomar

  // Lyrics timeline database
  const kesariyaLyrics = [
    { time: 0, marwari: "केसरिया... बालम...", hindi: "केसरिया बालम...", english: "O saffron-hued beloved... O gracious traveler...", raag: "Maand Alaap" },
    { time: 14, marwari: "आवो नी... पधारो म्हारे देश रे...", hindi: "आओ नी... पधारो म्हारे देश रे...", english: "Please grace my land with your auspicious presence...", raag: "Maand Mukhda" },
    { time: 32, marwari: "केसरिया बालम, आवो नी पधारो म्हारे देश...", hindi: "केसरिया बालम, आओ नी पधारो म्हारे देश...", english: "O beloved sovereign, step into our royal golden sands...", raag: "Maand Sthayi" },
    { time: 55, marwari: "पधारो म्हारे देश... हो... पधारो म्हारे देश रे...", hindi: "पधारो म्हारे देश... हो... पधारो म्हारे देश रे...", english: "Step into our sacred home... Welcome to our land...", raag: "Desert Call" },
    { time: 82, marwari: "साजन साजन मैं करूँ, म्हारा साजन हिये जड़ीत...", hindi: "साजन साजन मैं करूँ, म्हारे साजन हिये जड़ित...", english: "Endlessly I call my beloved, who is encrusted like a jewel in my heart...", raag: "Antara 1" },
    { time: 110, marwari: "साजन नैणां में बस्यो, म्हारे पलकां बीच समेट...", hindi: "साजन नयनों में बस्यो, म्हारे पलकों बीच समेट...", english: "My beloved dwells in my eyes, gently held within my fluttering eyelashes...", raag: "Antara 2" },
    { time: 140, marwari: "केसरिया बालम... आवो नी पधारो म्हारे देश रे...", hindi: "केसरिया बालम... आओ नी पधारो म्हारे देश रे...", english: "O beloved of Rajasthan... We welcome you with open arms...", raag: "Manganiyar Climax" },
    { time: 180, marwari: "ढोला थारे कारणे, मैं तो जागूं सारी रात...", hindi: "ढोला थारे कारणे, मैं तो जागूं सारी रात...", english: "For your sight, my companion, I remain awake under the star-strewn desert...", raag: "Desert Night Ballad" },
    { time: 220, marwari: "पधारो म्हारे देश रे... केसरिया बालम...", hindi: "पधारो म्हारे देश रे... केसरिया बालम...", english: "Grace our doorstep... O dear beloved...", raag: "Maand Finale" }
  ];

  const ghoomarLyrics = [
    { time: 0, marwari: "माथे साजे बोरलो, पैरां में पायल बाजणी...", hindi: "माथे साजे बोरलो, पैरों में पायल बाजणी...", english: "The golden Borla adorns my forehead, silver anklets chime on my feet...", raag: "Ghoomar Intro" },
    { time: 16, marwari: "चूडलो चम चम चमके सा हाथां में मेहंदी राचणी...", hindi: "चूड़लो चम चम चमके सा हाथों में मेहंदी राचणी...", english: "My bangles shimmer brightly, crimson henna blooms upon my hands...", raag: "Keherwa Beat" },
    { time: 34, marwari: "ओढ़ के चूनर पचरंगी सज धज कर आई सा...", hindi: "ओढ़ के चूनर पचरंगी सज धज कर आई सा...", english: "Draped in five-colored silk Chunari, embellished in royal splendor I arrive...", raag: "Royal Stanza" },
    { time: 52, marwari: "म्हारे सायबा जी मैं तो घूमर रमवा आई सा!", hindi: "म्हारा सायबा जी मैं तो घूमर रमवा आई सा!", english: "O my esteemed Lord, I have stepped forward to dance the Ghoomar!", raag: "Chorus Surge" },
    { time: 76, marwari: "घूमर घालूं मैं पिया जी ढोल नगाड़ा बाजे जी...", hindi: "घूमर घालूं मैं पिया जी ढोल नगाड़ा बाजे जी...", english: "I spin in graceful circles as the folk Dhol and Nagada drums thunder...", raag: "Folk Swirl" },
    { time: 102, marwari: "देवरानी जेठानी सागे घूम घूम के नाचे जी...", hindi: "देवरानी जेठानी सागे घूम घूम के नाचे जी...", english: "Together with our sisters and family, we twirl in celebratory unity...", raag: "Courtyard Dance" },
    { time: 130, marwari: "घणै कोड सूं घूमर घाले, दणदण पाई सा...", hindi: "घने कोड से घूमर घाले, दनदन पाई सा...", english: "With boundless joy the skirts flare wide like blooming desert lotuses...", raag: "Twirling Climax" },
    { time: 165, marwari: "म्हारा सायबा जी मैं तो घूमर रमवा आई सा!", hindi: "म्हारा सायबा जी मैं तो घूमर रमवा आई सा!", english: "O my Lord, behold the timeless grace of Rajasthan's living Ghoomar!", raag: "Grand Finale" }
  ];

  const lyrics = isKesariya ? kesariyaLyrics : isGhoomar ? ghoomarLyrics : [
    { time: 0, marwari: song.nativeScript || song.songName, hindi: song.songName, english: song.culturalSignificance, raag: song.audioScale || "Traditional Folk Raga" }
  ];

  // Audio Context & Synthesizer references
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const sequenceTimerRef = useRef<number | null>(null);
  const clockIntervalRef = useRef<number | null>(null);
  const isPlayingAudioRef = useRef<boolean>(false);

  // Play a realistic folk instrument note
  const triggerFolkTone = (
    ctx: AudioContext,
    freq: number,
    duration: number,
    timbre: 'sarangi' | 'shehnai' | 'flute' | 'dholak_bass' | 'dholak_rim' | 'khartal'
  ) => {
    if (!ctx || ctx.state === 'closed' || !masterGainRef.current) return;
    const now = ctx.currentTime;

    if (timbre === 'sarangi' || timbre === 'shehnai') {
      // Bowed / Reedy rich harmonic tone
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc1.type = timbre === 'shehnai' ? 'sawtooth' : 'triangle';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(freq, now);
      osc2.frequency.setValueAtTime(freq * 1.004, now);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(timbre === 'shehnai' ? 1800 : 950, now);
      filter.Q.setValueAtTime(timbre === 'shehnai' ? 4.2 : 2.5, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.28, now + 0.08);
      gain.gain.setValueAtTime(0.24, now + duration * 0.7);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(masterGainRef.current);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration + 0.05);
      osc2.stop(now + duration + 0.05);
    } else if (timbre === 'flute') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.3, now + 0.1);
      gain.gain.setValueAtTime(0.25, now + duration * 0.7);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGainRef.current);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } else if (timbre === 'dholak_bass') {
      // Dholak Low Bass Thump (Dha / Dhin)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(65, now + 0.18);

      gain.gain.setValueAtTime(0.45, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      osc.connect(gain);
      gain.connect(masterGainRef.current);

      osc.start(now);
      osc.stop(now + 0.25);
    } else if (timbre === 'dholak_rim' || timbre === 'khartal') {
      // Khartal wood clack or Dholak high treble rim (Ta / Tin)
      const bufferSize = ctx.sampleRate * 0.08;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.015));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(timbre === 'khartal' ? 3200 : 1800, now);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(timbre === 'khartal' ? 0.35 : 0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(masterGainRef.current);
      noise.start(now);
      noise.stop(now + 0.08);
    }
  };

  // Run the acoustic musical composition for the song
  const startFolkScore = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.65, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      isPlayingAudioRef.current = true;

      // Note frequency mapping (D minor / Maand Raag base)
      const notes = {
        C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, Bb3: 233.08, C4: 261.63,
        Cs4: 277.18, D4: 293.66, E4: 329.63, F4: 349.23, Fs4: 369.99, G4: 392.00, A4: 440.00, Bb4: 466.16, B4: 493.88,
        C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99
      };

      // Signature Kesariya Balam Maand Melody (6/8 rhythm)
      const kesariyaNotes = [
        { freq: notes.D4, dur: 1.2, inst: 'shehnai' as const, perc: 'dholak_bass' as const },
        { freq: notes.G4, dur: 1.0, inst: 'shehnai' as const, perc: 'khartal' as const },
        { freq: notes.Fs4, dur: 0.8, inst: 'sarangi' as const, perc: 'dholak_rim' as const },
        { freq: notes.E4, dur: 0.9, inst: 'shehnai' as const, perc: 'dholak_bass' as const },
        { freq: notes.D4, dur: 1.4, inst: 'sarangi' as const, perc: 'khartal' as const },
        { freq: notes.Cs4, dur: 0.9, inst: 'shehnai' as const, perc: 'dholak_rim' as const },
        { freq: notes.D4, dur: 2.2, inst: 'sarangi' as const, perc: 'dholak_bass' as const },
        // Alaap
        { freq: notes.A4, dur: 1.1, inst: 'shehnai' as const, perc: 'khartal' as const },
        { freq: notes.B4, dur: 1.4, inst: 'flute' as const, perc: 'dholak_bass' as const },
        { freq: notes.D5, dur: 1.8, inst: 'shehnai' as const, perc: 'khartal' as const },
        { freq: notes.B4, dur: 0.9, inst: 'sarangi' as const, perc: 'dholak_rim' as const },
        { freq: notes.A4, dur: 1.2, inst: 'flute' as const, perc: 'dholak_bass' as const },
        { freq: notes.G4, dur: 1.0, inst: 'shehnai' as const, perc: 'khartal' as const },
        { freq: notes.Fs4, dur: 0.8, inst: 'sarangi' as const, perc: 'dholak_rim' as const },
        { freq: notes.E4, dur: 0.9, inst: 'flute' as const, perc: 'dholak_bass' as const },
        { freq: notes.D4, dur: 2.5, inst: 'shehnai' as const, perc: 'dholak_bass' as const }
      ];

      // Signature Ghoomar Fast 8-beat Keherwa Melody (~125 BPM)
      const ghoomarNotes = [
        { freq: notes.G4, dur: 0.45, inst: 'shehnai' as const, perc: 'dholak_bass' as const },
        { freq: notes.G4, dur: 0.45, inst: 'shehnai' as const, perc: 'dholak_rim' as const },
        { freq: notes.A4, dur: 0.45, inst: 'flute' as const, perc: 'khartal' as const },
        { freq: notes.B4, dur: 0.7, inst: 'shehnai' as const, perc: 'dholak_bass' as const },
        { freq: notes.A4, dur: 0.45, inst: 'flute' as const, perc: 'dholak_rim' as const },
        { freq: notes.G4, dur: 0.45, inst: 'shehnai' as const, perc: 'khartal' as const },
        { freq: notes.E4, dur: 0.5, inst: 'sarangi' as const, perc: 'dholak_bass' as const },
        { freq: notes.G4, dur: 0.8, inst: 'flute' as const, perc: 'dholak_bass' as const },
        // High Swirl Chorus
        { freq: notes.D5, dur: 0.6, inst: 'shehnai' as const, perc: 'dholak_bass' as const },
        { freq: notes.B4, dur: 0.5, inst: 'flute' as const, perc: 'khartal' as const },
        { freq: notes.A4, dur: 0.5, inst: 'shehnai' as const, perc: 'dholak_rim' as const },
        { freq: notes.G4, dur: 0.6, inst: 'sarangi' as const, perc: 'dholak_bass' as const },
        { freq: notes.A4, dur: 0.5, inst: 'shehnai' as const, perc: 'khartal' as const },
        { freq: notes.G4, dur: 1.1, inst: 'flute' as const, perc: 'dholak_bass' as const }
      ];

      const activeScore = isKesariya ? kesariyaNotes : isGhoomar ? ghoomarNotes : kesariyaNotes;
      let noteIndex = 0;

      const scheduleNextNote = () => {
        if (!isPlayingAudioRef.current || !audioCtxRef.current || audioCtxRef.current.state === 'closed') {
          return;
        }

        const item = activeScore[noteIndex % activeScore.length];
        const ctxCurrent = audioCtxRef.current;

        // Trigger melody note
        triggerFolkTone(ctxCurrent, item.freq, item.dur, item.inst);

        // Trigger rhythm percussion
        if (item.perc) {
          triggerFolkTone(ctxCurrent, 100, 0.2, item.perc);
        }

        // Secondary rhythm syncopation for authentic folk groove
        setTimeout(() => {
          if (isPlayingAudioRef.current && audioCtxRef.current) {
            triggerFolkTone(audioCtxRef.current, 100, 0.1, isGhoomar ? 'dholak_rim' : 'khartal');
          }
        }, item.dur * 480);

        noteIndex++;
        const nextDelay = (item.dur * 1000) / playbackRate;
        sequenceTimerRef.current = window.setTimeout(scheduleNextNote, Math.max(nextDelay, 280));
      };

      scheduleNextNote();
    } catch (e) {
      console.warn("Folk synthesizer error", e);
    }
  };

  const stopFolkScore = () => {
    isPlayingAudioRef.current = false;
    if (sequenceTimerRef.current) {
      clearTimeout(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      audioCtxRef.current.close().catch(() => {});
    }
  };

  // Sync playback state with prop
  useEffect(() => {
    if (isPlaying) {
      startFolkScore();
      // Track playback progress clock
      clockIntervalRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 1;
          if (next >= songDuration) {
            return 0; // Loop song
          }
          return next;
        });
      }, 1000 / playbackRate);
    } else {
      stopFolkScore();
      if (clockIntervalRef.current) {
        clearInterval(clockIntervalRef.current);
        clockIntervalRef.current = null;
      }
    }

    return () => {
      stopFolkScore();
      if (clockIntervalRef.current) {
        clearInterval(clockIntervalRef.current);
      }
    };
  }, [isPlaying, song.songName, playbackRate]);

  // Sync lyrics with current playback time
  useEffect(() => {
    const idx = lyrics.reduce((acc, curr, index) => {
      if (currentTime >= curr.time) return index;
      return acc;
    }, 0);
    setActiveLyricIndex(idx);
  }, [currentTime, lyrics]);

  // Volume updates
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(
        isMuted ? 0 : volume * 0.65,
        audioCtxRef.current.currentTime
      );
    }
  }, [volume, isMuted]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = Math.floor(secs % 60);
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  return (
    <div className="rounded-3xl bg-[#faf6ee] dark:bg-[#1a120c] border border-[#e8decb] dark:border-[#38261a] p-5 sm:p-6 shadow-md relative overflow-hidden">
      {/* Ambient decorative glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#b8501c]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ebdcc7] dark:border-[#2e1d13]">
        <div className="flex items-center gap-3.5">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-transform ${isPlaying ? 'bg-[#b8501c] text-white scale-105 animate-[pulse_2s_infinite]' : 'bg-white dark:bg-[#281810] text-[#b8501c] border border-[#e2cca8]'}`}>
            <Disc3 className={`w-6 h-6 ${isPlaying ? 'animate-spin [animation-duration:6s]' : ''}`} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8c5225] dark:text-[#df9e67] bg-[#f4ebd9] dark:bg-[#301c10] px-2.5 py-0.5 rounded-full border border-[#e2cca8] dark:border-[#422918]">
                {isKesariya ? "Royal Welcome Ballad • Maand Raag" : isGhoomar ? "Rajput Royal Folk Symphony • Keherwa" : "Living Heritage Melody"}
              </span>
              <span className="text-xs font-serif text-[#b8501c] dark:text-[#f3a875]">
                {stateName}
              </span>
            </div>
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#23170f] dark:text-[#f5eee4] mt-0.5">
              {song.songName}
            </h3>
          </div>
        </div>

        {/* Tab Nav: Lyrics / Visualizer / Instruments */}
        <div className="flex items-center gap-1 bg-white dark:bg-[#261810] p-1 rounded-xl border border-[#ebdcc7] dark:border-[#382518] self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('lyrics')}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'lyrics'
                ? 'bg-[#b8501c] text-white shadow-xs'
                : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#23170f]'
            }`}
          >
            <Mic2 className="w-3.5 h-3.5" />
            <span>Synced Lyrics</span>
          </button>

          <button
            onClick={() => setActiveTab('visualizer')}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'visualizer'
                ? 'bg-[#b8501c] text-white shadow-xs'
                : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#23170f]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Acoustic Raga</span>
          </button>

          <button
            onClick={() => setActiveTab('instruments')}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'instruments'
                ? 'bg-[#b8501c] text-white shadow-xs'
                : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#23170f]'
            }`}
          >
            <Music className="w-3.5 h-3.5" />
            <span>Instruments ({song.instruments.length})</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="py-5">
        {/* TAB 1: SYNCHRONIZED LYRICS & KARAOKE */}
        {activeTab === 'lyrics' && (
          <div className="space-y-4">
            <div className="bg-white dark:bg-[#1f150e] border border-[#e8decb] dark:border-[#38261a] rounded-2xl p-5 shadow-xs transition-all">
              <div className="flex items-center justify-between text-xs text-[#8c5225] dark:text-[#df9e67] mb-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#b8501c] animate-ping"></span>
                  Active Stanza • {lyrics[activeLyricIndex]?.raag}
                </span>
                <span>Verse {activeLyricIndex + 1} of {lyrics.length}</span>
              </div>

              {/* Current Lyric Spotlight */}
              <div className="text-center py-3">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#b8501c] dark:text-[#f3a875] tracking-wide mb-1 leading-relaxed">
                  {lyrics[activeLyricIndex]?.marwari}
                </div>
                <div className="text-sm font-semibold text-[#23170f] dark:text-[#f5eee4] mb-2">
                  {lyrics[activeLyricIndex]?.hindi}
                </div>
                <div className="text-xs sm:text-sm text-[#6c5949] dark:text-[#b8a697] italic font-light max-w-xl mx-auto">
                  "{lyrics[activeLyricIndex]?.english}"
                </div>
              </div>
            </div>

            {/* Scrollable Lyric List */}
            <div className="max-h-40 overflow-y-auto space-y-1.5 pr-2 scrollbar-thin">
              {lyrics.map((lyr, idx) => {
                const isActive = activeLyricIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setCurrentTime(lyr.time)}
                    className={`flex items-start justify-between p-2.5 rounded-xl text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#f4ebd9] dark:bg-[#301c10] border border-[#b8501c]/40 text-[#23170f] dark:text-[#f5eee4] font-medium'
                        : 'hover:bg-white dark:hover:bg-[#24170f] text-[#5e4d3f] dark:text-[#9e8c7e]'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="font-mono text-[10px] text-[#8c5225] dark:text-[#df9e67] shrink-0 pt-0.5">
                        {formatTime(lyr.time)}
                      </span>
                      <div>
                        <div className={`font-serif text-sm ${isActive ? 'text-[#b8501c] dark:text-[#f3a875] font-bold' : ''}`}>
                          {lyr.marwari}
                        </div>
                        <div className="text-[11px] opacity-80 mt-0.5">
                          {lyr.english}
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <span className="text-[10px] uppercase font-bold text-[#b8501c] dark:text-[#f3a875] shrink-0 px-2 py-0.5 rounded-full bg-white dark:bg-[#1a120c] border border-[#b8501c]/30">
                        Playing
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: ACOUSTIC RAGA & VISUALIZER */}
        {activeTab === 'visualizer' && (
          <div className="bg-white dark:bg-[#1f150e] border border-[#e8decb] dark:border-[#38261a] rounded-2xl p-6 shadow-xs">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8c5225] dark:text-[#df9e67] bg-[#f4ebd9] dark:bg-[#301c10] px-3 py-1 rounded-full border border-[#e2cca8] dark:border-[#422918]">
                {song.audioScale || "Desert Pentatonic Harmony"}
              </span>
              <h4 className="font-cinzel text-xl font-bold text-[#23170f] dark:text-[#f5eee4] mt-2">
                Traditional Raga & Microtonal Lore
              </h4>
              <p className="text-xs sm:text-sm text-[#5e4d3f] dark:text-[#c4b3a3] max-w-xl mx-auto mt-1">
                {song.culturalSignificance}
              </p>
            </div>

            {/* Dynamic Equalizer Waves */}
            <div className="h-20 bg-[#faf6ee] dark:bg-[#150d08] rounded-2xl border border-[#ebdcc7] dark:border-[#2e1d13] flex items-end justify-center gap-1.5 p-4 overflow-hidden mb-4">
              {Array.from({ length: 28 }).map((_, i) => {
                const heightPercent = isPlaying
                  ? Math.sin((currentTime * 3) + i * 0.4) * 40 + 50
                  : 12;
                return (
                  <div
                    key={i}
                    style={{ height: `${heightPercent}%` }}
                    className={`w-1.5 rounded-full transition-all duration-150 ${
                      isPlaying
                        ? 'bg-gradient-to-t from-[#b8501c] to-[#f3a875]'
                        : 'bg-[#ebdcc7] dark:bg-[#382518]'
                    }`}
                  />
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-[#faf6ee] dark:bg-[#261810] border border-[#ebdcc7] dark:border-[#382518] text-xs text-[#5e4d3f] dark:text-[#c4b3a3] flex items-center justify-between">
              <span>Performance Context:</span>
              <span className="font-semibold text-[#23170f] dark:text-[#f5eee4]">{song.whenPerformed}</span>
            </div>
          </div>
        )}

        {/* TAB 3: ACOUSTIC INSTRUMENT MATRIX */}
        {activeTab === 'instruments' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {song.instruments.map((inst) => (
              <div
                key={inst}
                className="p-4 rounded-2xl bg-white dark:bg-[#1f150e] border border-[#e8decb] dark:border-[#38261a] hover:border-[#b8501c]/40 transition-all shadow-xs flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f4ebd9] dark:bg-[#301c10] border border-[#e2cca8] dark:border-[#422918] flex items-center justify-center text-[#b8501c] dark:text-[#f3a875] shrink-0">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-cinzel text-sm font-bold text-[#23170f] dark:text-[#f5eee4]">
                    {inst}
                  </h5>
                  <p className="text-[11px] text-[#7c6958] dark:text-[#a89586] leading-tight mt-0.5">
                    {inst.toLowerCase().includes('kamayacha')
                      ? "Rare 17-string bowed instrument carved from single mango wood log"
                      : inst.toLowerCase().includes('ravanhatha')
                      ? "Ancient 2-string bowed chordophone said to originate from Ravana"
                      : inst.toLowerCase().includes('khartal')
                      ? "Hand-held resonant acacia hardwood clapping castanets"
                      : inst.toLowerCase().includes('shehnai')
                      ? "Sacred double-reed conical wind instrument marking auspicious milestones"
                      : inst.toLowerCase().includes('dholak')
                      ? "Two-headed folk hand drum anchoring the heartbeat of the desert"
                      : "Traditional acoustic folk heritage instrument"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Audio Playback Controls & Progress Bar */}
      <div className="pt-4 border-t border-[#ebdcc7] dark:border-[#2e1d13] space-y-3">
        {/* Progress Bar & Timers */}
        <div className="space-y-1">
          <input
            type="range"
            min="0"
            max={songDuration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-[#e8decb] dark:bg-[#38261a] rounded-lg appearance-none cursor-pointer accent-[#b8501c]"
          />
          <div className="flex items-center justify-between text-[11px] font-mono text-[#7c6958] dark:text-[#a89586]">
            <span>{formatTime(currentTime)}</span>
            <span className="text-[#8c5225] dark:text-[#df9e67] font-semibold">
              {isPlaying ? "Acoustic Melody Playing" : "Paused"}
            </span>
            <span>{formatTime(songDuration)}</span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Main Play/Pause */}
          <div className="flex items-center gap-2">
            <button
              onClick={onTogglePlay}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#b8501c] hover:bg-[#a04214] text-white font-bold text-xs shadow-md transition-all cursor-pointer hover:scale-105"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? 'Pause Melody' : 'Play Full Melody'}</span>
            </button>

            <button
              onClick={() => setCurrentTime(0)}
              className="p-2 rounded-full bg-white dark:bg-[#281810] border border-[#e8decb] dark:border-[#38261a] text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#b8501c] transition-colors cursor-pointer"
              title="Restart from beginning"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Speed & Volume */}
          <div className="flex items-center gap-3">
            {/* Speed Selector */}
            <div className="flex items-center gap-1 bg-white dark:bg-[#261810] p-1 rounded-lg border border-[#ebdcc7] dark:border-[#382518]">
              {[0.75, 1.0, 1.25].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setPlaybackRate(rate)}
                  className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold transition-all cursor-pointer ${
                    playbackRate === rate
                      ? 'bg-[#b8501c] text-white'
                      : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#23170f]'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-1.5 bg-white dark:bg-[#261810] px-3 py-1.5 rounded-full border border-[#ebdcc7] dark:border-[#382518]">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-[#8c7a6b] hover:text-[#b8501c] transition-colors cursor-pointer"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  setIsMuted(false);
                }}
                className="w-16 h-1 bg-[#e8decb] dark:bg-[#38261a] rounded-lg appearance-none cursor-pointer accent-[#b8501c]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
