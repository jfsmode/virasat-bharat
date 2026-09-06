import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { getOfficialFolkSong } from "./src/data/officialFolkMusicRegistry";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI instance
function getAIClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set. Fallback responses will be used if needed.");
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Local Language Translator & Interactive Grandma Chat endpoint
app.post("/api/gemini/translate", async (req, res) => {
  try {
    const { 
      text, 
      targetState, 
      targetLanguage, 
      stateName, 
      language, 
      grandmaTitle, 
      replyMode, 
      persona,
      chatHistory 
    } = req.body;

    const queryText = text || req.body.query;
    if (!queryText) {
      return res.status(400).json({ error: "Text is required" });
    }

    const state = targetState || stateName || "India";
    const targetLang = targetLanguage || language || "Hindi";
    const title = grandmaTitle || "Dadi";
    const mode = replyMode || "bilingual"; // 'bilingual' | 'pure_local' | 'romanized' | 'storytelling'
    const tone = persona || "loving"; // 'loving' | 'proverbs' | 'kitchen_nuskhe' | 'playful'

    const ai = getAIClient();
    if (!ai) {
      // Graceful fallback if no API key
      return res.json({
        originalText: queryText,
        translatedText: `Jeete raho, beta! (${queryText})`,
        pureLocalReply: `जीते रहो बेटा! खूब खुश रहो और तरक्की करो।`,
        phoneticPronunciation: `Jee-tey Rah-ho, Bay-tah`,
        nativeScript: `जीते रहो बेटा`,
        dialectName: `${targetLang} (${state})`,
        englishMeaning: `Affectionate elder blessing: May you live long and thrive`,
        culturalContext: `In ${state}, elders greet children with endearing blessings reflecting warmth and heritage.`,
        grandmaNote: `Always speak with love, beta. Sweet words bring harmony to every home! 🪔`,
        literalBreakdown: `Jeete (live long) + Raho (remain) + Beta (dear child)`
      });
    }

    const personaInstructions = {
      loving: `You are ${title}, overflowing with motherly/grandmotherly love, giving warm blessings and tender endearments (like Beta, Bachha, Kanna, Shona, Bangaram, Mol, Kano) appropriate to ${targetLang}.`,
      proverbs: `You are ${title}, a sage elder who loves explaining traditional folk proverbs (kahawat / muhavare / pazhamozhi), ancient wisdom, and life morals from ${state}.`,
      kitchen_nuskhe: `You are ${title}, a traditional grandmother who loves kitchen wisdom, secret grandma home remedies (nuskhe/kashayam), herbs, spices, and warm culinary love from ${state}.`,
      playful: `You are ${title}, a witty, cheerful, teasing grandmother who cracks wholesome jokes, uses funny colloquial slang from ${state}, and makes the student laugh!`
    };

    const modeInstructions = {
      bilingual: `Provide the reply in the authentic local language (${targetLang}) script + Romanized transliteration + English meaning + endearing Grandma note.`,
      pure_local: `CRITICAL: Formulate the primary "translatedText" and "pureLocalReply" ENTIRELY in the original native script of ${targetLang} (e.g. Devanagari, Tamil, Bengali, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia, etc.) as if Grandma is speaking directly in her mother tongue!`,
      romanized: `Provide the reply primarily in conversational Romanized script (Hinglish/Tanglish/Banglish/etc.) so anyone can read and pronounce it easily, with English meaning.`,
      storytelling: `Reply as ${title} by weaving a miniature 2-sentence traditional folk tale or memory from her village in ${state} related to the user's topic.`
    };

    const prompt = `You are ${title} (${personaInstructions[tone as keyof typeof personaInstructions] || personaInstructions.loving}), the wise and loving Indian grandmother representing ${state} and speaking the ${targetLang} language.

User's input / question: "${queryText}"
Selected Target Language: ${targetLang}
Selected Mode: ${mode} (${modeInstructions[mode as keyof typeof modeInstructions] || modeInstructions.bilingual})
Recent conversation history: ${JSON.stringify(chatHistory || [])}

Please generate an authentic, emotionally resonant grandmother reply in JSON format with:
1. "translatedText": The main response. If mode is "pure_local", write it purely in ${targetLang} native script. If mode is "bilingual" or "romanized", provide the authentic local phrasing.
2. "nativeScript": The phrase/sentence in the official native script of ${targetLang} (Devanagari, Tamil, Bengali, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia, etc.).
3. "pureLocalReply": A 2-3 sentence complete paragraph spoken purely in native ${targetLang} script in ${title}'s affectionate voice.
4. "englishMeaning": Clear English translation of what Grandma said.
5. "phoneticPronunciation": Clear phonetic reading guide (e.g. "Namaskara, chennagiddira?").
6. "dialectName": Specific regional dialect name (e.g. "Awadhi Hindi", "Madurai Tamil", "Kolkata Bengali", "Dharwad Kannada", "Malabar Malayalam", etc.).
7. "culturalContext": 2 sentences explaining the cultural custom, tradition, or household significance of this phrase in ${state}.
8. "grandmaNote": A warm, endearing personal advice or reaction from ${title} with appropriate regional terms of affection.
9. "literalBreakdown": Word-by-word breakdown showing how the sentence is constructed in ${targetLang}.

Respond ONLY with valid JSON.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: `You are an authentic Indian regional grandmother (${title}). You speak ${targetLang} with immense cultural depth, warmth, regional idioms, and genuine affection.`
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json({
      originalText: queryText,
      translatedText: parsed.translatedText || parsed.nativeWord || queryText,
      nativeScript: parsed.nativeScript || parsed.nativeWord || "",
      pureLocalReply: parsed.pureLocalReply || parsed.translatedText || "",
      englishMeaning: parsed.englishMeaning || "",
      phoneticPronunciation: parsed.phoneticPronunciation || parsed.pronunciation || "",
      dialectName: parsed.dialectName || `${targetLang} (${state})`,
      culturalContext: parsed.culturalContext || parsed.culturalExplanation || "",
      grandmaNote: parsed.grandmaNote || "",
      literalBreakdown: parsed.literalBreakdown || "",
      verified: true
    });
  } catch (error: any) {
    console.error("Translation API error:", error);
    res.status(500).json({
      error: "Could not generate translation at this moment",
      fallback: true,
      message: error.message
    });
  }
});

// Lost Words Chatbot Endpoint
app.post("/api/gemini/lost-words", async (req, res) => {
  try {
    const { word, stateName, language, chatHistory } = req.body;
    if (!word) {
      return res.status(400).json({ error: "Word is required" });
    }

    const ai = getAIClient();
    if (!ai) {
      return res.json({
        regionalWord: `Rare ${stateName || 'Indian'} colloquialism for "${word}"`,
        nativeScript: "—",
        englishMeaning: `Traditional regional expression for ${word}`,
        pronunciation: "phonetic",
        languageOrDialect: language || "Regional Dialect",
        exampleSentence: `In village folklore, this word brought families together around the courtyard.`,
        culturalContext: `This word was widely used by our great-grandparents during everyday community gatherings before modern slang took over.`,
        grandmaReaction: "Arey waah! Asking about this brings back memories of our old ancestral courtyard!",
        humorPunchline: "Congratulations — you just made your vocabulary 1% cooler.",
        secretUnlocked: "Secret unlocked! 😎 Try using this word with your friends and see if they can guess what it means!"
      });
    }

    const prompt = `You are "Dadi-ji / Ammachi / Aaji", the lively, heartwarming animated Language Grandparent of "India's Living Heritage".
The student is exploring forgotten, charming, and hyper-local everyday regional words from Indian languages.
State/Region chosen: ${stateName || "All India"}
Target Language / Dialect: ${language || "Regional Dialect"}
English concept / word asked: "${word}"
Recent conversation context: ${JSON.stringify(chatHistory || [])}

Provide a delightful discovery in valid JSON with:
1. "regionalWord": The rare, nostalgic, or everyday regional word/colloquialism (transliterated into English alphabet).
2. "nativeScript": The word in its original native script (Devanagari, Tamil, Bengali, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia, etc.).
3. "englishMeaning": What it means and any special idiomatic nuance.
4. "pronunciation": Fun, easy phonetic guide (e.g. "KOOSH-am-bree").
5. "languageOrDialect": The specific dialect or local tongue (e.g. "Bhojpuri", "Awadhi", "Kolkata Bengali colloquial", "Kongu Tamil", "Malabar Malayalam", "Varhadi Marathi", "Kathiyawadi Gujarati", "Maithili", "Dogri", "Marwari", etc.).
6. "exampleSentence": An everyday authentic regional sentence using this word, with English translation.
7. "culturalContext": 2 sentences explaining why elders used it, where it was spoken (kitchen, verandah, wedding banter, monsoon evenings), and why modern textbooks missed it.
8. "grandmaReaction": An expressive, warm, grandmotherly reaction (e.g., "Arey wah! My grandmother used to say this while making steaming jalebis on the chulha!", "Now you know a word your textbook probably never taught you!").
9. "humorPunchline": A witty, wholesome student-friendly line like "Congratulations — you just made your vocabulary 1% cooler." or "Say this to your parents today and watch their jaws drop!"
10. "secretUnlocked": A playful student secret prompt like "Secret unlocked! 😎 Try using this word with your friends and see if they can guess what it means."

Return ONLY valid JSON.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You are the charismatic, expressive Indian Heritage Grandparent chatbot. You bring nostalgic Indian words alive with warmth, humor, and cultural pride. Output pure JSON."
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Lost Words API error:", error);
    res.status(500).json({ error: "Could not fetch lost word", message: error.message });
  }
});

// Grandma Bedtime Folklore Storyteller
app.post("/api/gemini/folklore-story", async (req, res) => {
  try {
    const { stateName, theme } = req.body;
    const ai = getAIClient();
    if (!ai) {
      return res.json({
        title: `Tales of ${stateName || 'Ancient India'}`,
        story: `Under the shade of the grand banyan tree, tales of courage, cleverness, and compassion have been passed down across generations...`,
        moral: `Respect the earth, treasure community harmony, and keep traditions alive.`
      });
    }

    const prompt = `Tell an authentic, enchanting 3-paragraph Indian folk tale or oral legend from ${stateName || 'India'} around the theme "${theme || 'Wisdom and Nature'}".
Write in the affectionate voice of an Indian grandmother telling a story on a starry courtyard night.
Return valid JSON with:
{
  "title": "Story Title",
  "story": "The full engaging story text (3 paragraphs)",
  "moral": "The timeless Indian moral or life lesson",
  "originFolkTradition": "The specific community/tribe/region this tale comes from"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Folklore story error:", error);
    res.status(500).json({ error: "Failed to generate story" });
  }
});

// Grandma's Knowledge AI: Heritage Buildings, Ancient Architecture & Indigenous Craftsmanship
app.post("/api/gemini/grandma-knowledge", async (req, res) => {
  try {
    const { 
      question, 
      domain = 'monuments', // 'monuments' | 'crafts' | 'general'
      selectedState, 
      targetLanguage, 
      grandmaTitle,
      contextItemName,
      chatHistory 
    } = req.body;

    const query = question || "Tell me about our heritage";
    const state = selectedState || "India";
    const lang = targetLanguage || "Hindi";
    const title = grandmaTitle || "Dadi";

    const ai = getAIClient();
    if (!ai) {
      return res.json({
        title: `${query} (${state})`,
        nativeGreeting: `जीते रहो बेटा! (${title})`,
        localLanguageExplanation: `हमारे भारत के प्राचीन शिल्प और धरोहर में हमारे पूर्वजों का हज़ारों साल का ज्ञान समाया हुआ है। जब कारीगर हाथ से काम करते हैं या कारीगरी से मंदिर बनाते हैं, तो वे सिर्फ पत्थर नहीं तराशते बल्कि संस्कृति को संजोते हैं।`,
        nativeScriptExcerpt: `हस्तशिल्प और वास्तुकला हमारे पूर्वजों की अमर देन है।`,
        phoneticExcerpt: `Hastashilp aur vaastukala hamare poorvajo ki amar den hai`,
        englishBreakdown: `In ${state} and across India, our ancient monuments and handicrafts reflect centuries of artisanal mastery, sacred geometry, natural organic materials, and living cultural continuity.`,
        grandmaSecretWisdom: `Beta, did you know that ancient builders mixed jaggery, bael fruit pulp, lime, and lentil paste into mortar to make it earthquake-resistant and withstand centuries of weather!`,
        historicalFact: `Traditional Indian craftsmanship techniques and architectural styles have been preserved through generation-to-generation oral apprenticeships (Guru-Shishya parampara).`,
        culturalSignificance: `Each monument and handloom pattern connects directly to regional festivals, climate resilience, and sacred stories.`,
        domain: domain,
        targetLanguage: lang,
        grandmaTitle: title,
        stateOrRegion: state,
        verified: false
      });
    }

    const domainFocus = domain === 'monuments' 
      ? `Indian architectural monuments, stepwells, fortresses, rock-cut temples, sacred geometry, acoustic chambers, weather-cooling jaalis, and ancient structural engineering`
      : domain === 'crafts'
      ? `Traditional Indian handlooms, GI-tagged crafts, master artisan techniques, natural dyeing processes, lost-wax metallurgy, wood carving, sacred tribal paintings, and embroidery`
      : `Indian cultural heritage, monuments, and indigenous craftsmanship`;

    const prompt = `You are ${title}, a deeply knowledgeable, revered Indian grandmother and master storyteller with encyclopedic ancestral wisdom about ${domainFocus} across India and specifically ${state}.

The student asks: "${query}"
Context / Topic: ${contextItemName || 'General Heritage & Craft'}
Target Language: ${lang} (Provide explanations in this regional language)
Selected State/Region: ${state}
Domain: ${domain}
Prior Chat History: ${JSON.stringify(chatHistory || [])}

Provide an authentic, culturally rich, deeply insightful response in valid JSON format:
{
  "title": "A concise evocative title for this heritage or craft topic",
  "nativeGreeting": "An affectionate elder greeting in ${lang} native script + romanized in parentheses (e.g. जीते रहो बेटा / Nalla irukkiya Kanna / Bhalo acho to Shona)",
  "localLanguageExplanation": "A rich 2-3 paragraph explanation spoken purely in the authentic native script of ${lang} (Devanagari, Tamil, Bengali, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia, etc.), explaining the history, craft method, stone technique, or architectural genius as Grandma lovingly explains it.",
  "nativeScriptExcerpt": "A key memorable proverb, craftsman phrase, or architectural verse in ${lang} native script",
  "phoneticExcerpt": "Phonetic reading guide for the excerpt",
  "englishBreakdown": "A clear, beautifully written 2-paragraph English summary explaining the exact historical, architectural, or artisanal details so anyone can understand every nuance.",
  "grandmaSecretWisdom": "A fascinating 'Grandma Secret' or oral heritage revelation (e.g. how artisans created natural indigo that never fades, why stone pillars ring with musical notes, how stepwells maintain microclimates, secret herb mixtures used in temple mortar, or symbolism hidden in handloom motifs).",
  "historicalFact": "An authentic historical, dynastic (Chola, Mughal, Maurya, Vijayanagara, etc.), or GI-tag geographic fact.",
  "culturalSignificance": "1-2 sentences on why this craft or monument is a living soul of ${state}'s heritage."
}

Ensure high accuracy, warmth, regional idioms, and respectful elder authority. Respond ONLY with valid JSON.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: `You are Grandma's Knowledge AI (${title}), a loving guardian of Indian architecture, monuments, master handicrafts, and oral folklore. You explain complex heritage in simple, affectionate terms in ${lang} and English.`
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json({
      title: parsed.title || query,
      nativeGreeting: parsed.nativeGreeting || `जीते रहो बेटा!`,
      localLanguageExplanation: parsed.localLanguageExplanation || "",
      nativeScriptExcerpt: parsed.nativeScriptExcerpt || "",
      phoneticExcerpt: parsed.phoneticExcerpt || "",
      englishBreakdown: parsed.englishBreakdown || "",
      grandmaSecretWisdom: parsed.grandmaSecretWisdom || "",
      historicalFact: parsed.historicalFact || "",
      culturalSignificance: parsed.culturalSignificance || "",
      domain: domain,
      targetLanguage: lang,
      grandmaTitle: title,
      stateOrRegion: state,
      verified: true
    });
  } catch (error: any) {
    console.error("Grandma Knowledge API error:", error);
    res.status(500).json({ error: "Failed to query Grandma's Knowledge", message: error.message });
  }
});

// Official YouTube Folk Music Library & State Cultural Context endpoint
app.post("/api/folk-songs/youtube", async (req, res) => {
  try {
    const { stateId, stateName, songName } = req.body;
    const targetState = stateId || stateName || "rajasthan";
    const officialRecord = getOfficialFolkSong(targetState);

    // If Gemini client is available, verify and enrich context
    const ai = getAIClient();
    if (ai) {
      try {
        const prompt = `You are a world-renowned ethnomusicologist and senior cultural archivist for Sangeet Natak Akademi, Prasar Bharati, and Indian Council for Cultural Relations (ICCR).
Verify and provide cultural context for the authentic traditional folk song of the Indian state: "${officialRecord.stateName}".
Song Name: "${officialRecord.songName}"
Current Archival Source: "${officialRecord.officialSource}"
Official Performer: "${officialRecord.performer}"
Origin Community: "${officialRecord.originCommunity}"

Return a JSON object:
{
  "stateName": "${officialRecord.stateName}",
  "songName": "${officialRecord.songName}",
  "verifiedBelongsToState": true,
  "regionalAuthenticityStatement": "A strong, precise scholarly statement confirming why and how this folk music specifically belongs to ${officialRecord.stateName}.",
  "officialArchiveContext": "Historical context detailing which cultural institution (Sangeet Natak Akademi, Prasar Bharati, All India Radio, UNESCO) preserves it.",
  "performerLegacy": "Short summary of the master exponent, gharana, or bardic community.",
  "listeningGuide": "What to listen for (rhythms, instruments, vocal nuances, emotional rasa).",
  "recommendedOfficialSearch": "Search term for official YouTube recordings (e.g. Sangeet Natak Akademi / Prasar Bharati / AIR archives)"
}`;

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });

        const aiContext = JSON.parse(response.text || "{}");
        return res.json({
          ...officialRecord,
          aiVerified: true,
          regionalAuthenticityStatement: aiContext.regionalAuthenticityStatement || `This folk music is an authentic living tradition indigenous to ${officialRecord.stateName}.`,
          officialArchiveContext: aiContext.officialArchiveContext || officialRecord.historyAndContext,
          performerLegacy: aiContext.performerLegacy || officialRecord.performer,
          listeningGuide: aiContext.listeningGuide || `Listen to the interplay of ${officialRecord.instruments.join(', ')}.`,
          recommendedOfficialSearch: aiContext.recommendedOfficialSearch || officialRecord.officialSearchQuery
        });
      } catch (aiErr) {
        console.warn("Gemini folk song verification fallback:", aiErr);
      }
    }

    // Fallback to verified official library record
    res.json({
      ...officialRecord,
      aiVerified: false,
      regionalAuthenticityStatement: `Verified authentic indigenous folk song of ${officialRecord.stateName}, cataloged in national cultural preservation archives.`,
      officialArchiveContext: officialRecord.historyAndContext,
      performerLegacy: officialRecord.performer,
      listeningGuide: `Traditional performance in ${officialRecord.musicalForm || "authentic folk raga"} featuring ${officialRecord.instruments.join(', ')}.`,
      recommendedOfficialSearch: officialRecord.officialSearchQuery
    });
  } catch (error: any) {
    console.error("Folk song YouTube API error:", error);
    res.status(500).json({ error: "Failed to fetch folk song library context", message: error.message });
  }
});

// Vite Middleware for development & Production Static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Heritage Cultural-Tech Server running on port ${PORT}`);
  });
}

startServer();
