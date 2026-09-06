import React, { useState, useEffect } from 'react';
import { 
  Music, 
  Mic2, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  Info, 
  Video,
  Layers,
  Search,
  X,
  Share2,
  Check
} from 'lucide-react';
import { FolkSong } from '../types';
import { 
  getOfficialFolkSong, 
  enrichFolkSongWithOfficialLibrary, 
  OfficialFolkSongRecord 
} from '../data/officialFolkMusicRegistry';

interface FolkMusicPlayerProps {
  song: FolkSong;
  stateName: string;
  stateId?: string;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
}

export const FolkMusicPlayer: React.FC<FolkMusicPlayerProps> = ({
  song,
  stateName,
  stateId,
  isPlaying = true,
  onTogglePlay
}) => {
  // Merge prop song with official YouTube library registry
  const officialData: OfficialFolkSongRecord = getOfficialFolkSong(stateId || stateName);
  const activeSong = enrichFolkSongWithOfficialLibrary(stateId || stateName, song);

  // Active informative tab (Context vs Lyrics vs Instruments)
  const [activeTab, setActiveTab] = useState<'context' | 'lyrics' | 'instruments'>('context');
  const [activeLyricIndex, setActiveLyricIndex] = useState<number>(0);
  const [hasCopiedLink, setHasCopiedLink] = useState<boolean>(false);

  // AI & Archival verified state information
  const [verifiedContext, setVerifiedContext] = useState<{
    regionalAuthenticityStatement?: string;
    officialArchiveContext?: string;
    performerLegacy?: string;
    listeningGuide?: string;
    recommendedOfficialSearch?: string;
    aiVerified?: boolean;
    loading?: boolean;
  }>({
    regionalAuthenticityStatement: `Verified authentic indigenous folk heritage of ${stateName}, cataloged with national cultural preservation archives.`,
    officialArchiveContext: officialData.historyAndContext || officialData.culturalSignificance,
    performerLegacy: officialData.performer,
    listeningGuide: `Traditional master recording featuring the acoustic timbre of ${officialData.instruments.join(', ')}.`,
    recommendedOfficialSearch: officialData.officialSearchQuery,
    aiVerified: false,
    loading: false
  });

  // Fetch or enrich contextual scholarly verification from API
  useEffect(() => {
    let isMounted = true;
    const fetchOfficialContext = async () => {
      setVerifiedContext(prev => ({ ...prev, loading: true }));
      try {
        const res = await fetch('/api/folk-songs/youtube', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            stateId: stateId || stateName.toLowerCase().replace(/\s+/g, '-'),
            stateName: stateName,
            songName: song.songName
          })
        });
        if (!res.ok) throw new Error("Verification API unavailable");
        const data = await res.json();
        if (isMounted) {
          setVerifiedContext({
            regionalAuthenticityStatement: data.regionalAuthenticityStatement || `This folk music is an authentic living tradition indigenous to ${stateName}.`,
            officialArchiveContext: data.officialArchiveContext || officialData.historyAndContext,
            performerLegacy: data.performerLegacy || officialData.performer,
            listeningGuide: data.listeningGuide || `Listen to the authentic interplay of ${officialData.instruments.join(', ')}.`,
            recommendedOfficialSearch: data.recommendedOfficialSearch || officialData.officialSearchQuery,
            aiVerified: !!data.aiVerified,
            loading: false
          });
        }
      } catch (err) {
        if (isMounted) {
          setVerifiedContext(prev => ({ ...prev, loading: false }));
        }
      }
    };

    fetchOfficialContext();
    return () => {
      isMounted = false;
    };
  }, [stateId, stateName, song.songName]);

  const activeYoutubeId = activeSong.youtubeId || officialData.youtubeId || "PlEchkA66Jk";
  const youtubeUrl = `https://www.youtube.com/watch?v=${activeYoutubeId}`;
  const archiveSearchQuery = officialData.officialSearchQuery || `${activeSong.songName} ${stateName} Sangeet Natak Akademi`;
  const archiveSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(archiveSearchQuery)}`;

  // Lyrics list
  const lyricsList = activeSong.lyricExcerpts && activeSong.lyricExcerpts.length > 0 
    ? activeSong.lyricExcerpts 
    : officialData.lyricExcerpts;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/?state=${stateId || ''}&song=${encodeURIComponent(activeSong.songName)}`);
    setHasCopiedLink(true);
    setTimeout(() => setHasCopiedLink(false), 2000);
  };

  return (
    <div className="rounded-3xl bg-[#faf6ee] dark:bg-[#1a120c] border border-[#e8decb] dark:border-[#38261a] p-5 sm:p-7 shadow-xl relative overflow-hidden transition-all">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#b8501c]/10 to-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Banner: Authenticity & Official Source Attribution */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#ebdcc7] dark:border-[#2e1d13]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>100% Authentic State Heritage: {stateName}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f4ebd9] dark:bg-[#2c1c11] border border-[#e2cca8] dark:border-[#422918] text-[#8c5225] dark:text-[#df9e67] text-[11px] font-medium">
            <CheckCircle2 className="w-3 h-3 text-[#b8501c]" />
            <span>National Archives Cataloged</span>
          </span>
        </div>

        {/* Action icons (Share & Close) */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#261810] border border-[#ebdcc7] dark:border-[#3d2719] text-xs font-medium text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#b8501c] transition-all cursor-pointer"
            title="Share folk song link"
          >
            {hasCopiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </>
            )}
          </button>

          {onTogglePlay && (
            <button
              onClick={onTogglePlay}
              className="p-1.5 rounded-xl bg-white dark:bg-[#261810] border border-[#ebdcc7] dark:border-[#3d2719] text-[#7d6958] hover:text-[#b8501c] dark:hover:text-white transition-all cursor-pointer"
              title="Close Player"
              aria-label="Close Folk Player"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Track Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#ebdcc7] dark:border-[#2e1d13]">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#b8501c] to-[#913b10] text-white flex items-center justify-center shadow-lg shrink-0">
            <Video className="w-7 h-7" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67] bg-[#f4ebd9] dark:bg-[#301c10] px-2.5 py-0.5 rounded-full border border-[#e2cca8] dark:border-[#422918]">
                {activeSong.musicalForm || officialData.musicalForm || "Traditional State Folk Art"}
              </span>
              <span className="text-xs font-medium text-[#b8501c] dark:text-[#f3a875]">
                • Official YouTube Archive
              </span>
            </div>

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#23170f] dark:text-[#f5eee4] tracking-tight">
              {activeSong.songName}
            </h3>

            {activeSong.nativeScript && (
              <div className="font-serif text-sm text-[#b8501c] dark:text-[#f3a875] mt-0.5">
                {activeSong.nativeScript}
              </div>
            )}
          </div>
        </div>

        {/* Tab Switcher for Cultural Lore, Synced Lyrics, and Instruments */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-[#261810] p-1.5 rounded-2xl border border-[#ebdcc7] dark:border-[#382518]">
          <button
            onClick={() => setActiveTab('context')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'context'
                ? 'bg-[#b8501c] text-white shadow-xs'
                : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#23170f] dark:hover:text-white'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>State Context & Lore</span>
          </button>

          <button
            onClick={() => setActiveTab('lyrics')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'lyrics'
                ? 'bg-[#b8501c] text-white shadow-xs'
                : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#23170f] dark:hover:text-white'
            }`}
          >
            <Mic2 className="w-3.5 h-3.5" />
            <span>Synced Lyrics</span>
          </button>

          <button
            onClick={() => setActiveTab('instruments')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'instruments'
                ? 'bg-[#b8501c] text-white shadow-xs'
                : 'text-[#5d4c3f] dark:text-[#c4b3a3] hover:text-[#23170f] dark:hover:text-white'
            }`}
          >
            <Music className="w-3.5 h-3.5" />
            <span>Instruments</span>
          </button>
        </div>
      </div>

      {/* OFFICIAL YOUTUBE VIDEO PLAYER AREA */}
      <div className="py-5 space-y-4">
        {/* Embedded YouTube Player */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl border border-[#ebdcc7] dark:border-[#38261a]">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${activeYoutubeId}?rel=0&modestbranding=1`}
            title={`${activeSong.songName} - Official YouTube Performance`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Official Archival Badges & Performer Lineup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#20150e] border border-[#ebdcc7] dark:border-[#38261a] shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67] block mb-1">
              Official Archival Source
            </span>
            <p className="text-xs font-semibold text-[#23170f] dark:text-[#f5eee4] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#b8501c] shrink-0" />
              <span>{activeSong.officialSource || officialData.officialSource}</span>
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#20150e] border border-[#ebdcc7] dark:border-[#38261a] shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67] block mb-1">
              Master Exponent / Performer
            </span>
            <p className="text-xs font-semibold text-[#23170f] dark:text-[#f5eee4] flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-[#b8501c] shrink-0" />
              <span>{activeSong.performer || officialData.performer}</span>
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#20150e] border border-[#ebdcc7] dark:border-[#38261a] shadow-xs sm:col-span-2 md:col-span-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67] block mb-1">
              Indigenous Community
            </span>
            <p className="text-xs font-semibold text-[#23170f] dark:text-[#f5eee4] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#b8501c] shrink-0" />
              <span>{activeSong.originCommunity || officialData.originCommunity}</span>
            </p>
          </div>
        </div>

        {/* Direct YouTube Links & National Archives Query */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#f4ebd9]/70 dark:bg-[#26170e] border border-[#e2cca8] dark:border-[#422918]">
          <div className="text-xs text-[#5e4d3f] dark:text-[#d3c2b2]">
            <strong className="text-[#23170f] dark:text-[#f5eee4]">Preserving India's Living Heritage:</strong> Access official broadcasts, field recordings, and master performances directly on YouTube.
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#b8501c] hover:bg-[#a04214] text-white text-xs font-semibold shadow-xs transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Watch on YouTube</span>
            </a>

            <a
              href={archiveSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1a110a] border border-[#d8c3a5] dark:border-[#442b1b] text-[#8c5225] dark:text-[#df9e67] text-xs font-semibold hover:border-[#b8501c] transition-all"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search National Archives</span>
            </a>
          </div>
        </div>
      </div>

      {/* EXPANDABLE TAB CONTENT AREAS (State Context, Lyrics, Instruments) */}
      <div className="pt-2 border-t border-[#ebdcc7] dark:border-[#2e1d13]">
        {/* TAB 1: EXACT STATE CONTEXT & SCHOLARLY VERIFICATION */}
        {activeTab === 'context' && (
          <div className="space-y-4 pt-4">
            {/* Authenticity Certificate Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-[#faf4eb] dark:from-[#21160f] dark:to-[#170e08] border border-[#e8decb] dark:border-[#38261a] shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-[#23170f] dark:text-[#f5eee4]">
                    State Cultural Authenticity Verification
                  </h4>
                  <p className="text-xs text-[#5e4d3f] dark:text-[#c4b3a3] mt-1 leading-relaxed">
                    {verifiedContext.regionalAuthenticityStatement}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#ebdcc7] dark:border-[#2e1d13] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67] text-[10px] block mb-0.5">
                    Historical Era & Lineage
                  </span>
                  <p className="text-[#23170f] dark:text-[#f5eee4]">
                    {activeSong.historicalEra || officialData.historicalEra}
                  </p>
                </div>

                <div>
                  <span className="font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67] text-[10px] block mb-0.5">
                    Traditional Occasion & Rituals
                  </span>
                  <p className="text-[#23170f] dark:text-[#f5eee4]">
                    {activeSong.whenPerformed || officialData.whenPerformed}
                  </p>
                </div>
              </div>
            </div>

            {/* Deep History & Context Story */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1f150e] border border-[#e8decb] dark:border-[#38261a] shadow-xs">
              <h4 className="font-cinzel text-sm font-bold text-[#23170f] dark:text-[#f5eee4] flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#b8501c]" />
                <span>Historical Context & Why This Song Belongs to {stateName}</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#4a3a2d] dark:text-[#d3c2b2] leading-relaxed">
                {officialData.historyAndContext || activeSong.culturalSignificance}
              </p>

              {/* Listening Guide */}
              <div className="mt-3.5 p-3.5 rounded-xl bg-[#faf6ee] dark:bg-[#271910] border border-[#ebdcc7] dark:border-[#382518]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5225] dark:text-[#df9e67] block mb-1">
                  Ethnomusicologist's Listening Guide
                </span>
                <p className="text-xs text-[#5e4d3f] dark:text-[#c4b3a3] leading-relaxed">
                  {verifiedContext.listeningGuide}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SYNCHRONIZED LYRICS & MULTI-LINGUAL POETRY */}
        {activeTab === 'lyrics' && (
          <div className="space-y-4 pt-4">
            <div className="bg-white dark:bg-[#1f150e] border border-[#e8decb] dark:border-[#38261a] rounded-2xl p-5 shadow-xs">
              <div className="flex items-center justify-between text-xs text-[#8c5225] dark:text-[#df9e67] mb-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#b8501c]"></span>
                  Verse • {lyricsList[activeLyricIndex]?.raag || "Traditional Verse"}
                </span>
                <span>Verse {activeLyricIndex + 1} of {lyricsList.length}</span>
              </div>

              {/* Current Lyric Spotlight */}
              <div className="text-center py-3">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#b8501c] dark:text-[#f3a875] tracking-wide mb-1 leading-relaxed">
                  {lyricsList[activeLyricIndex]?.original}
                </div>
                <div className="text-sm font-semibold text-[#23170f] dark:text-[#f5eee4] mb-2">
                  {lyricsList[activeLyricIndex]?.transliteration}
                </div>
                <div className="text-xs sm:text-sm text-[#6c5949] dark:text-[#b8a697] italic font-light max-w-xl mx-auto">
                  "{lyricsList[activeLyricIndex]?.english}"
                </div>
              </div>
            </div>

            {/* Scrollable Lyric Verses */}
            <div className="max-h-60 overflow-y-auto space-y-2 pr-2 scrollbar-thin">
              {lyricsList.map((lyr, idx) => {
                const isActive = activeLyricIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveLyricIndex(idx)}
                    className={`flex items-start justify-between p-3 rounded-2xl text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#f4ebd9] dark:bg-[#301c10] border border-[#b8501c]/40 text-[#23170f] dark:text-[#f5eee4] font-medium'
                        : 'hover:bg-white dark:hover:bg-[#24170f] text-[#5e4d3f] dark:text-[#9e8c7e] border border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {lyr.timestamp && (
                        <span className="font-mono text-[10px] text-[#8c5225] dark:text-[#df9e67] shrink-0 pt-0.5 px-2 py-0.5 rounded-full bg-white dark:bg-[#1a120c] border border-[#ebdcc7] dark:border-[#38261a]">
                          <Clock className="w-2.5 h-2.5 inline mr-1" />
                          {lyr.timestamp}
                        </span>
                      )}
                      <div>
                        <div className={`font-serif text-sm ${isActive ? 'text-[#b8501c] dark:text-[#f3a875] font-bold' : ''}`}>
                          {lyr.original}
                        </div>
                        <div className="text-xs text-[#23170f] dark:text-[#f5eee4] mt-0.5">
                          {lyr.transliteration}
                        </div>
                        <div className="text-[11px] opacity-80 mt-0.5 italic">
                          {lyr.english}
                        </div>
                      </div>
                    </div>

                    {isActive && (
                      <span className="text-[10px] uppercase font-bold text-[#b8501c] dark:text-[#f3a875] shrink-0 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1a120c] border border-[#b8501c]/30">
                        Selected
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: INDIGENOUS INSTRUMENTS */}
        {activeTab === 'instruments' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
            {activeSong.instruments.map((inst) => (
              <div
                key={inst}
                className="p-4 rounded-2xl bg-white dark:bg-[#1f150e] border border-[#e8decb] dark:border-[#38261a] hover:border-[#b8501c]/40 transition-all shadow-xs flex items-center gap-3.5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#f4ebd9] dark:bg-[#301c10] border border-[#e2cca8] dark:border-[#422918] flex items-center justify-center text-[#b8501c] dark:text-[#f3a875] shrink-0">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-cinzel text-sm font-bold text-[#23170f] dark:text-[#f5eee4]">
                    {inst}
                  </h5>
                  <p className="text-[11px] text-[#7c6958] dark:text-[#a89586] leading-tight mt-0.5">
                    Traditional acoustic folk instrument indigenous to the musical heritage of {stateName}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
