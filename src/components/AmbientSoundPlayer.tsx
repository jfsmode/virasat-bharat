import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles, Sliders, Moon, Wind, Bell } from 'lucide-react';

export const AmbientSoundPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [activePreset, setActivePreset] = useState<'serene' | 'temple' | 'meditation'>('serene');
  const [showControls, setShowControls] = useState(false);
  const [currentRagaChord, setCurrentRagaChord] = useState<string>('Sa-Pa Peace (C#)');

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const padGainRef = useRef<GainNode | null>(null);
  const chimeGainRef = useRef<GainNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);

  const timerRef = useRef<number | null>(null);
  const droneOscsRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([]);
  const isPlayingRef = useRef<boolean>(false);
  const activePresetRef = useRef(activePreset);

  useEffect(() => {
    activePresetRef.current = activePreset;
  }, [activePreset]);

  // Peaceful Raga Bhupali & Yaman Ambient Harmony Scale
  // C#3 = 138.59, G#3 = 207.65, C#4 = 277.18, D#4 = 311.13, F4 = 349.23, G#4 = 415.30, A#4 = 466.16, C#5 = 554.37
  const chordProgressions = [
    { name: 'Sa-Pa Serenity (C# - G#)', base: 277.18, fifth: 415.30, third: 349.23, chime: 554.37 },
    { name: 'Ga-Dha Harmony (F - A#)', base: 349.23, fifth: 466.16, third: 277.18, chime: 698.46 },
    { name: 'Pa-Re Devotion (G# - D#)', base: 415.30, fifth: 622.25, third: 311.13, chime: 830.61 },
    { name: 'Sa\'-Ga\' Transcendence (High C# - F)', base: 554.37, fifth: 415.30, third: 349.23, chime: 1108.73 }
  ];

  // Soft Ambient Warm Pad Generator (Smooth, non-intrusive harmonic wash)
  const playSoftAmbientPad = (ctx: AudioContext, baseFreq: number, fifthFreq: number, thirdFreq: number, duration: number) => {
    if (!ctx || ctx.state === 'closed' || !padGainRef.current) return;
    const now = ctx.currentTime;

    const freqs = [baseFreq * 0.5, baseFreq, thirdFreq, fifthFreq];
    const attack = duration * 0.35; // Very slow gentle rise (1.5s - 2s)
    const release = duration * 0.45; // Gentle long release

    freqs.forEach((freq, idx) => {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Pure smooth sine and gentle warm triangle
      osc1.type = 'sine';
      osc2.type = 'triangle';

      // Subtle detune for rich warm chorus spread
      const detuneAmount = (idx - 1.5) * 2.8;
      osc1.frequency.setValueAtTime(freq + detuneAmount * 0.2, now);
      osc2.frequency.setValueAtTime(freq * 1.002, now);

      // Warm lowpass filter to remove any harshness
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + idx * 80, now);
      filter.frequency.linearRampToValueAtTime(650 + idx * 100, now + attack);
      filter.frequency.linearRampToValueAtTime(400, now + duration);
      filter.Q.setValueAtTime(1.2, now);

      // Ultra-soft breathing envelope
      const maxGain = (0.12 / (idx + 1)) * (activePresetRef.current === 'meditation' ? 1.2 : 0.8);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(maxGain, now + attack);
      gain.gain.setValueAtTime(maxGain * 0.9, now + duration - release);
      gain.gain.linearRampToValueAtTime(0.0001, now + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(padGainRef.current!);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration + 0.1);
      osc2.stop(now + duration + 0.1);
    });
  };

  // Soft Meditative Singing Bowl / Temple Chime Accent
  const playTempleChime = (ctx: AudioContext, freq: number) => {
    if (!ctx || ctx.state === 'closed' || !chimeGainRef.current) return;
    const now = ctx.currentTime;
    const chimeDuration = 4.5;

    // Singing bowl harmonics (1x, 2.76x, 5.4x)
    const partials = [
      { ratio: 1, gain: 0.15 },
      { ratio: 2.76, gain: 0.05 },
      { ratio: 5.4, gain: 0.015 }
    ];

    partials.forEach(p => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * p.ratio, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(p.gain * (activePresetRef.current === 'temple' ? 1.4 : 0.6), now + 0.08); // Soft tap
      gain.gain.exponentialRampToValueAtTime(0.0001, now + chimeDuration); // Long acoustic decay

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(chimeGainRef.current!);

      osc.start(now);
      osc.stop(now + chimeDuration + 0.1);
    });
  };

  // Continuous Calming Tanpura Foundation Drone (Sa-Pa in C#)
  const startSoftDrone = (ctx: AudioContext) => {
    if (!droneGainRef.current) return;
    const droneFreqs = [69.30, 138.59, 207.65, 277.18]; // C#2, C#3, G#3, C#4

    droneFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      // Slow subtle chorus pitch drift
      osc.frequency.setValueAtTime(freq + (idx * 0.15), ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260 + idx * 40, ctx.currentTime);
      filter.Q.setValueAtTime(1.0, ctx.currentTime);

      const droneLevel = 0.08 / (idx + 1.2);
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(droneLevel, ctx.currentTime + 3.0); // Gentle 3-second fade-in

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(droneGainRef.current!);

      osc.start();
      droneOscsRef.current.push({ osc, gain });
    });
  };

  // Smooth Ambient Music Loop
  const startMusicLoop = () => {
    let step = 0;

    const playNextBar = () => {
      if (!isPlayingRef.current || !audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        return;
      }

      const chord = chordProgressions[step % chordProgressions.length];
      setCurrentRagaChord(chord.name);

      const chordDuration = 5.5; // Long, slow relaxing duration per chord

      // 1. Play Soft Warm Ambient Pad
      playSoftAmbientPad(audioCtxRef.current, chord.base, chord.fifth, chord.third, chordDuration);

      // 2. Play gentle temple chime / bell accent on select bars or based on preset
      if (activePresetRef.current === 'temple' || step % 2 === 0) {
        setTimeout(() => {
          if (isPlayingRef.current && audioCtxRef.current) {
            playTempleChime(audioCtxRef.current, chord.chime);
          }
        }, 1200);
      }

      step++;
      const nextInterval = (chordDuration - 0.8) * 1000; // Crossfade smoothly into next chord
      timerRef.current = window.setTimeout(playNextBar, nextInterval);
    };

    playNextBar();
  };

  const startBackgroundMusic = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.45, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      const padGain = ctx.createGain();
      padGain.gain.setValueAtTime(0.85, ctx.currentTime);
      padGain.connect(masterGain);
      padGainRef.current = padGain;

      const chimeGain = ctx.createGain();
      chimeGain.gain.setValueAtTime(activePreset === 'meditation' ? 0.3 : 0.8, ctx.currentTime);
      chimeGain.connect(masterGain);
      chimeGainRef.current = chimeGain;

      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.55, ctx.currentTime);
      droneGain.connect(masterGain);
      droneGainRef.current = droneGain;

      // Start the soft foundational drone
      startSoftDrone(ctx);

      isPlayingRef.current = true;
      setIsPlaying(true);

      // Start gentle chord swells
      startMusicLoop();
    } catch (e) {
      console.warn("Web Audio autoplay restricted or unavailable", e);
    }
  };

  const stopBackgroundMusic = () => {
    isPlayingRef.current = false;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    droneOscsRef.current.forEach(({ osc, gain }) => {
      try {
        if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
          gain.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
          setTimeout(() => {
            try { osc.stop(); osc.disconnect(); } catch (e) {}
          }, 850);
        } else {
          osc.stop();
          osc.disconnect();
        }
      } catch (e) {}
    });
    droneOscsRef.current = [];

    setTimeout(() => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    }, 900);

    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopBackgroundMusic();
    } else {
      startBackgroundMusic();
    }
  };

  const changePreset = (preset: 'serene' | 'temple' | 'meditation') => {
    setActivePreset(preset);
    if (chimeGainRef.current && padGainRef.current && droneGainRef.current && audioCtxRef.current) {
      const now = audioCtxRef.current.currentTime;
      if (preset === 'serene') {
        padGainRef.current.gain.linearRampToValueAtTime(0.85, now + 0.5);
        chimeGainRef.current.gain.linearRampToValueAtTime(0.6, now + 0.5);
        droneGainRef.current.gain.linearRampToValueAtTime(0.5, now + 0.5);
      } else if (preset === 'temple') {
        padGainRef.current.gain.linearRampToValueAtTime(0.7, now + 0.5);
        chimeGainRef.current.gain.linearRampToValueAtTime(1.0, now + 0.5);
        droneGainRef.current.gain.linearRampToValueAtTime(0.45, now + 0.5);
      } else if (preset === 'meditation') {
        padGainRef.current.gain.linearRampToValueAtTime(1.0, now + 0.5);
        chimeGainRef.current.gain.linearRampToValueAtTime(0.2, now + 0.5);
        droneGainRef.current.gain.linearRampToValueAtTime(0.7, now + 0.5);
      }
    }
  };

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(volume * 0.45, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopBackgroundMusic();
    };
  }, []);

  return (
    <div className="relative flex items-center gap-1.5">
      {/* Main Music Toggle Button */}
      <button
        id="ambient-sound-toggle-btn"
        onClick={toggleSound}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
          isPlaying
            ? 'bg-[#f4ebd9] dark:bg-[#301c10] border-[#b8501c] text-[#b8501c] dark:text-[#f3a875] shadow-xs'
            : 'bg-white/90 dark:bg-[#1f150e]/90 border-[#e8decb] dark:border-[#38261a] text-[#5d4c3f] dark:text-[#c4b3a3] hover:bg-white hover:text-[#23170f] hover:border-[#b8501c]/40'
        }`}
        title={isPlaying ? 'Pause Soft Background Music' : 'Play Soft Background Music'}
        aria-label="Toggle Soft Background Music"
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3.5">
              <span className="w-0.5 bg-[#b8501c] dark:bg-[#f3a875] animate-[pulse_1.2s_ease-in-out_infinite] h-2"></span>
              <span className="w-0.5 bg-[#b8501c] dark:bg-[#f3a875] animate-[pulse_1.6s_ease-in-out_infinite] h-3.5"></span>
              <span className="w-0.5 bg-[#b8501c] dark:bg-[#f3a875] animate-[pulse_1.4s_ease-in-out_infinite] h-2.5"></span>
              <span className="w-0.5 bg-[#b8501c] dark:bg-[#f3a875] animate-[pulse_1.8s_ease-in-out_infinite] h-3"></span>
            </div>
            <Volume2 className="w-3.5 h-3.5 text-[#b8501c] dark:text-[#f3a875]" />
            <span className="hidden sm:inline">Soft Music</span>
          </>
        ) : (
          <>
            <Music className="w-3.5 h-3.5 text-[#8c7a6b] dark:text-[#9e8c7e]" />
            <span className="hidden sm:inline">Background Music</span>
          </>
        )}
      </button>

      {/* Preset & Settings button */}
      <button
        onClick={() => setShowControls(!showControls)}
        className={`p-1.5 rounded-full border transition-all cursor-pointer ${
          showControls || isPlaying
            ? 'bg-[#faf6ee] dark:bg-[#281810] border-[#b8501c]/40 text-[#b8501c] dark:text-[#f3a875]'
            : 'bg-white/80 dark:bg-[#1a120c] border-[#e8decb] dark:border-[#38261a] text-[#8c7a6b] hover:text-[#23170f]'
        }`}
        title="Soft Background Music Controls"
        aria-label="Soft Background Music Controls"
      >
        <Sliders className="w-3.5 h-3.5" />
      </button>

      {/* Expanded Audio Settings Modal Dropdown */}
      {showControls && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-[#1a120c] border border-[#e8decb] dark:border-[#3a271c] rounded-2xl p-4 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#ebdcc7] dark:border-[#332217]">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#b8501c]" />
              <span className="font-cinzel text-xs font-bold text-[#23170f] dark:text-[#f5eee4]">
                Soft Heritage Ambiance
              </span>
            </div>
            {isPlaying && (
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#f4ebd9] dark:bg-[#301c10] text-[#b8501c] dark:text-[#f3a875]">
                {currentRagaChord}
              </span>
            )}
          </div>

          {/* Ambient Tone Mood Preset Selector */}
          <div className="mb-3">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#8c5225] dark:text-[#df9e67] block mb-1.5">
              Ambient Harmony Mood
            </span>
            <div className="grid grid-cols-3 gap-1 bg-[#faf6ee] dark:bg-[#261810] p-1 rounded-xl border border-[#ebdcc7] dark:border-[#382518]">
              <button
                onClick={() => changePreset('serene')}
                className={`text-[11px] py-1.5 rounded-lg font-medium transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                  activePreset === 'serene'
                    ? 'bg-[#b8501c] text-white font-bold shadow-xs'
                    : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#23170f]'
                }`}
              >
                <Wind className="w-3 h-3" />
                <span>Serene</span>
              </button>
              <button
                onClick={() => changePreset('temple')}
                className={`text-[11px] py-1.5 rounded-lg font-medium transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                  activePreset === 'temple'
                    ? 'bg-[#b8501c] text-white font-bold shadow-xs'
                    : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#23170f]'
                }`}
              >
                <Bell className="w-3 h-3" />
                <span>Chimes</span>
              </button>
              <button
                onClick={() => changePreset('meditation')}
                className={`text-[11px] py-1.5 rounded-lg font-medium transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                  activePreset === 'meditation'
                    ? 'bg-[#b8501c] text-white font-bold shadow-xs'
                    : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#23170f]'
                }`}
              >
                <Moon className="w-3 h-3" />
                <span>Calm Pad</span>
              </button>
            </div>
          </div>

          {/* Volume Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] text-[#7c6958] dark:text-[#a89586]">
              <span>Background Volume</span>
              <span className="font-mono">{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-[#e8decb] dark:bg-[#38261a] rounded-lg appearance-none cursor-pointer accent-[#b8501c]"
            />
          </div>

          {/* Quick Play/Pause Action */}
          <div className="mt-3 pt-2 border-t border-[#ebdcc7] dark:border-[#332217]">
            <button
              onClick={toggleSound}
              className="w-full py-1.5 rounded-xl bg-[#b8501c] hover:bg-[#a04214] text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
            >
              {isPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              {isPlaying ? 'Mute Background Music' : 'Start Soft Background Music'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
