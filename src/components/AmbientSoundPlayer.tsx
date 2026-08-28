import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AmbientSoundPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);

  const startTanpuraSynth = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.4, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Indian Tanpura resonant frequencies (Key of C# / Sa - Pa - Sa' drone)
      // Base fundamental ~138.59 Hz (C#3)
      const freqs = [
        138.59, // Sa (Root)
        207.65, // Pa (Fifth)
        277.18, // Sa (Octave)
        138.59 * 2.01, // Harmonic shimmer
        103.82  // Low resonance
      ];

      oscillatorsRef.current = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const oscGain = ctx.createGain();

        // Warm saw and triangle waves for rich Indian acoustic drone
        osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 1.5, ctx.currentTime);

        // Low pass filter for warm resonant temple sound
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, ctx.currentTime);
        filter.Q.setValueAtTime(3.5, ctx.currentTime);

        // Subtle amplitude pulsing to mimic plucked Tanpura strings
        oscGain.gain.setValueAtTime(0.12 / (idx + 1), ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        oscillatorsRef.current.push(osc);
      });

      // LFO for breathing harmonic modulation
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.25, ctx.currentTime); // 4 second gentle swell
      lfoGain.gain.setValueAtTime(0.08, ctx.currentTime);
      lfo.connect(masterGain.gain);
      lfo.start();
      lfoRef.current = lfo;

      setIsPlaying(true);
    } catch (e) {
      console.warn("Web Audio autoplay restricted or unavailable", e);
    }
  };

  const stopTanpuraSynth = () => {
    oscillatorsRef.current.forEach(osc => {
      try { osc.stop(); osc.disconnect(); } catch (e) {}
    });
    oscillatorsRef.current = [];

    if (lfoRef.current) {
      try { lfoRef.current.stop(); lfoRef.current.disconnect(); } catch (e) {}
      lfoRef.current = null;
    }

    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      audioCtxRef.current.close().catch(() => {});
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopTanpuraSynth();
    } else {
      startTanpuraSynth();
    }
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume * 0.4, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopTanpuraSynth();
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <button
        id="ambient-sound-toggle-btn"
        onClick={toggleSound}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
          isPlaying
            ? 'bg-[#f4ebd9] border-[#b8501c] text-[#b8501c] shadow-xs'
            : 'bg-white/80 border-[#e8decb] text-[#5d4c3f] hover:bg-white hover:text-[#23170f] hover:border-[#b8501c]/40'
        }`}
        title={isPlaying ? 'Pause Indian Heritage Tanpura Ambience' : 'Play Indian Heritage Tanpura Ambience'}
        aria-label="Toggle Indian Heritage Tanpura Drone Audio"
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3.5">
              <span className="w-0.5 bg-[#b8501c] animate-[pulse_0.6s_ease-in-out_infinite] h-2"></span>
              <span className="w-0.5 bg-[#b8501c] animate-[pulse_0.8s_ease-in-out_infinite] h-3.5"></span>
              <span className="w-0.5 bg-[#b8501c] animate-[pulse_0.5s_ease-in-out_infinite] h-2.5"></span>
            </div>
            <Volume2 className="w-3.5 h-3.5 text-[#b8501c]" />
            <span className="hidden sm:inline">Tanpura Active</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-[#8c7a6b]" />
            <span className="hidden sm:inline">Tanpura Drone</span>
          </>
        )}
      </button>
    </div>
  );
};
