export type RegionZone = 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East' | 'Union Territory';

export interface FolkSong {
  songName: string;
  nativeScript?: string;
  culturalSignificance: string;
  whenPerformed: string;
  instruments: string[];
  audioScale?: string;
  youtubeId?: string;
  youtubeTitle?: string;
  officialSource?: string;
  performer?: string;
  historicalEra?: string;
  originCommunity?: string;
  musicalForm?: string;
  officialSearchQuery?: string;
  lyricExcerpts?: {
    original: string;
    transliteration?: string;
    english: string;
    timestamp?: string;
    raag?: string;
  }[];
}

export interface TraditionalRecipe {
  dishName: string;
  nativeName?: string;
  image: string;
  courseType: string;
  dietary: 'Vegetarian' | 'Specialty' | 'Heirloom';
  prepTime: string;
  ingredients: string[];
  steps: string[];
  culturalBackground: string;
}

export interface LanguagePhrase {
  nativeWord: string;
  nativeScript: string;
  englishMeaning: string;
  phonetics: string;
  exampleSentence: string;
}

export interface LocalTradition {
  title: string;
  category: string;
  description: string;
  significance: string;
  image: string;
}

export interface ChildhoodGame {
  gameName: string;
  nativeName?: string;
  image?: string;
  howItIsPlayed: string;
  numberOfPlayers: string;
  historicalOrigin: string;
  skillsDeveloped: string[];
}

export interface Monument {
  id: string;
  name: string;
  location: string;
  historicalPeriod: string;
  builtBy: string;
  image: string;
  historicalBackground: string;
  architecturalSignificance: string;
  culturalImportance: string;
  interestingFacts: string[];
  tags: string[];
}

export interface Festival {
  id: string;
  name: string;
  nativeName?: string;
  whenCelebrated: string;
  whereCelebrated: string;
  image: string;
  origins: string;
  culturalSignificance: string;
  traditionalFood: string;
  traditionalClothing: string;
  musicAndDance: string;
  interestingFacts: string[];
}

export interface Craft {
  id: string;
  name: string;
  category: string;
  region: string;
  image: string;
  materials: string[];
  techniques: string[];
  culturalSignificance: string;
  processSteps?: string[];
  challengesFaced?: string;
}

export interface MasterArtisan {
  id: string;
  name: string;
  craftType: string;
  location: string;
  image: string;
  quote: string;
  story: string;
  yearsOfExperience: string;
  awards: string[];
}

export interface StateCulturalData {
  id: string;
  name: string;
  nativeName: string;
  capital: string;
  zone: RegionZone;
  tagline: string;
  heroImage: string;
  languages: {
    nativeLanguage: string;
    dialects: string[];
    phrases: LanguagePhrase[];
  };
  folkSongs: FolkSong[];
  recipes: TraditionalRecipe[];
  traditions: LocalTradition[];
  childhoodGames: ChildhoodGame[];
  monuments: Monument[];
  festivals: Festival[];
  crafts: Craft[];
  artisans: MasterArtisan[];
}

export interface DidYouKnowFact {
  id: string;
  title?: string;
  fact: string;
  category: string;
  state: string;
  sourceOrContext?: string;
  image?: string;
}

export type DidYouKnowItem = DidYouKnowFact;

export interface LostWordResponse {
  englishQuery: string;
  regionalWord: string;
  nativeScript?: string;
  englishMeaning: string;
  pronunciation?: string;
  languageOrDialect: string;
  state: string;
  exampleSentence: string;
  culturalContext: string;
  grandparentComment?: string;
  humorPunchline?: string;
  secretUnlocked?: string;
}

export type LostWordItem = LostWordResponse;

export interface TranslationResponse {
  originalText: string;
  translatedText: string;
  phoneticPronunciation?: string;
  nativeScript?: string;
  dialectName?: string;
  culturalContext?: string;
  grandmaNote?: string;
  literalBreakdown?: string;
  pureLocalReply?: string;
  englishMeaning?: string;
  audioLanguageCode?: string;
}

export type GrandmaReplyMode = 'bilingual' | 'pure_local' | 'romanized' | 'storytelling';
export type GrandmaPersona = 'loving' | 'proverbs' | 'kitchen_nuskhe' | 'playful';

export interface GrandmaLanguageConfig {
  id: string;
  name: string;
  nativeName: string;
  grandmaTitle: string;
  stateOrRegion: string;
  langCode: string;
  sampleGreeting: string;
  endearment: string;
}

export interface GrandmaChatMessage {
  id: string;
  sender: 'user' | 'grandma';
  text: string;
  replyData?: TranslationResponse;
  timestamp: string;
}

export type GrandmaKnowledgeDomain = 'monuments' | 'crafts' | 'general';

export interface GrandmaKnowledgeResponse {
  title: string;
  nativeGreeting: string;
  localLanguageExplanation: string;
  nativeScriptExcerpt?: string;
  phoneticExcerpt?: string;
  englishBreakdown: string;
  grandmaSecretWisdom: string;
  historicalFact?: string;
  culturalSignificance?: string;
  domain: GrandmaKnowledgeDomain;
  targetLanguage: string;
  grandmaTitle: string;
  stateOrRegion: string;
  verified?: boolean;
}

export interface GrandmaKnowledgeMessage {
  id: string;
  sender: 'user' | 'grandma';
  question: string;
  response?: GrandmaKnowledgeResponse;
  timestamp: string;
}

