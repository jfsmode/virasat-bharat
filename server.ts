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
      model: "gemini-3.1-flash-lite",
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
      model: "gemini-3.1-flash-lite",
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
      model: "gemini-3.1-flash-lite",
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
      model: "gemini-3.1-flash-lite",
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

// Helper function: Factual heritage fallback response engine when Gemini encounters quota limit or network timeout
function getCuratedHeritageAnswer(query: string, inferredState: string): string {
  const lower = query.toLowerCase();

  if (lower.includes("rajasthan") && (lower.includes("music") || lower.includes("folk") || lower.includes("significance"))) {
    return `Namaste, my dear child! Let me tell you about the magical folk music of Rajasthan.

Introduction:
Rajasthani folk music is not merely entertainment; it is the living breath and oral soul of the Thar Desert. For centuries, hereditary bardic communities preserved genealogies, heroic ballads, seasonal cycles, and desert legends through song.

Important Facts:
• Hereditary Bardic Communities: The music is sustained primarily by hereditary Muslim and Hindu caste musicians, including the Manganiyars, Langas, Mirasis, Dhadhis, and Kalbeliyas. Manganiyars traditionally served Rajput patrons, while Langas performed for Muslim Sindhi patrons.
• Diverse Musical Genres: Classical-folk ballads such as Maand (famed for songs like 'Kesariya Balam' welcoming travelers), Panihari (poignant melodies sung by women walking miles to desert wells), and Pabuji ki Phad ballads sung with epic scroll paintings.

Traditional Instruments:
• Kamayacha: A magnificent 17-string bowed instrument with a round parchment belly made from mango wood, strung with goat gut and steel strings.
• Sarangi & Sindhi Sarangi: Expressive bowed instruments capable of mimicking the microtonal nuances of the human crying or rejoicing voice.
• Khartal: Four handheld sheesham or rosewood clappers that Manganiyar masters play with astonishing velocity and complex polyrhythms.
• Algoza: Double-barrel bamboo flutes played simultaneously using continuous circular breathing.

Cultural Significance:
In the arid sands where written texts were scarce, folk melodies served as community records, weather forecasts, devotional poetry of Mirabai and Kabir, and psychological solace against the harsh desert environment.

Interesting Fact:
The kamayacha is one of the oldest bowed string instruments on Earth. In Manganiyar families, sacred kamayachas are preserved as family heirlooms and handed down across 7 to 8 generations!`;
  }

  if (lower.includes("gujarat") && (lower.includes("craft") || lower.includes("handicraft") || lower.includes("traditional"))) {
    return `Welcome, my child! Gujarat is a treasure trove of indigenous craftsmanship, where every thread, mirror, and pot carries generations of mathematical and artistic mastery.

Introduction:
From the salt flats of Kutch to the historic textile mills of Ahmedabad, Gujarat’s handicrafts reflect vibrant pastoralist identities, trade guild traditions, and desert resourcefulness.

Major Traditional Crafts:
• Patan Patola: The pinnacle of double-ikat silk weaving. Both warp and weft threads are dyed with microscopic precision before weaving. Even if the fabric tears after centuries, the colors never fade.
• Rogan Art (Nirona, Kutch): A rare 400-year-old art where boiled castor oil is blended with natural pigments into a sticky paste. The master artisan uses a 6-inch brass rod to draw intricate motifs onto fabric without his hands ever touching the cloth.
• Bandhani (Tie & Dye): Practiced in Jamnagar and Bhuj, women tie thousands of tiny knots using fingernail rings (bhadbhunja) before dipping the fabric in natural dyes.
• Ajrakh Block Printing: A complex 14-to-16-step resist-dyeing process using carved wooden blocks, river water, tamarind seeds, and indigo.
• Sankheda Lacquered Furniture: Hand-turned teakwood finished with molten shellac and tin foil motifs in Chhota Udaipur.
• Kutch Embroidery & Mud-Mirror Work (Lippan Kaam): White clay and tiny mirrors adorning desert bhunga huts to reflect cooling daylight.

Cultural Significance:
In pastoral Kutchi communities, embroidered motifs in Rabari, Ahir, and Mutwa styles conveyed a woman’s marital status, community lineage, and clan history.

Interesting Fact:
An authentic double-ikat Patan Patola sari takes between 6 months to an entire year to weave by 3 to 4 master craftsmen, and has an ancient proverb: "Padi Patole Bhaat, Phate Pan Fitey Nahi" (The design on a Patola may tear with age, but the color and pattern will never wash away)!`;
  }

  if (lower.includes("madhubani") || lower.includes("mithila")) {
    return `Namaste, beta! Madhubani painting (also known as Mithila art) is one of the most sacred and ancient folk art traditions of our motherland.

Introduction:
Originating in the Mithila region of Bihar and southern Nepal, this art form was traditionally practiced by village women on freshly plastered mud walls of their courtyards (Kohbar ghar) during weddings, births, and harvest festivals.

Important Facts:
• Ancient Origins: According to oral folklore, King Janaka of Mithila commissioned local artists to paint his daughter Sita’s wedding to Lord Rama, establishing this art form thousands of years ago.
• Purely Natural Pigments: Black is made from soot mixed with cow dung, yellow from turmeric and banyan sap, blue from indigo, white from ground rice powder, and saffron from palash flowers.
• Organic Tools: Artists do not use synthetic brushes; they paint using bamboo twigs, frayed matchsticks, cotton-wrapped nibs, and even bare fingers.

The Three Classic Styles:
1. Bharni: Rich, vibrant colors filling mythological depictions of deities, peacocks, and fish.
2. Katchni: Delicate, intricate monochromatic or duo-tone line drawings and geometric patterns.
3. Godna: Tribal tattoo-like concentric circles, floral rings, and auspicious motifs.

Cultural Significance:
Every Madhubani painting is an environmental prayer. There is zero negative empty space—every gap is filled with fish (symbols of fertility), turtles (stability), lotus flowers (purity), and birds celebrating cosmic unity.

Interesting Fact:
In the 1960s, a severe drought in Bihar led the All India Handicrafts Board to encourage Mithila women to transfer their wall paintings onto handmade paper, saving thousands of families from poverty and introducing Madhubani to art galleries worldwide!`;
  }

  if ((lower.includes("indian folk music") || lower.includes("folk music")) && (lower.includes("special") || lower.includes("importance") || lower.includes("what is"))) {
    return `Namaste! Indian folk music is extraordinarily special because it represents the unfiltered, heartfelt voice of our people across thousands of villages.

Introduction:
While Indian classical music (Hindustani and Carnatic) is strictly codified by ragas and talas, Indian folk music is organic, communal, and directly tied to the rhythms of the earth, seasons, and daily labor.

What Makes Indian Folk Music So Special:
• Oral Continuity: Songs have been passed down across millennia purely through oral transmission (Shravana tradition) from grandmothers, mothers, and village bards without written notation.
• Rooted in Nature & Seasons: There are songs specifically for sowing rice (Ropani), harvesting wheat (Baisakhi songs), the onset of monsoon clouds (Kajari and Sawani), and river navigation (Bhatiali).
• Eco-friendly Acoustic Instruments: Instruments are crafted from locally found materials—dried gourds (Ektara, Tumbi), bamboo (Bansuri), clay pots (Ghatam, Ghumat), coconut shells (Ravanhatta), and animal parchment (Dholak, Khol, Thavil).
• Foundation of Classical Ragas: Great classical ragas like Raga Desh, Raga Pahadi, Raga Pilu, and Raga Maand were directly adapted and refined from regional folk melodies.
• Communal Unity: In Indian villages, folk songs are participatory—everyone joins in the chorus, hand-clapping, and circular dancing.

Interesting Fact:
In Bengal, boatmen singing the Bhatiali folk songs sing with protracted, sustained high notes designed so their voices would carry for miles across the wide, roaring rivers to other passing boats!`;
  }

  if (lower.includes("hawa mahal") || (lower.includes("palace") && lower.includes("winds"))) {
    return `Namaste, my child! Let me tell you about Hawa Mahal, the world-famous 'Palace of Winds' standing proudly in Jaipur, Rajasthan.

Introduction:
Built in 1799 by Maharaja Sawai Pratap Singh and designed by the master architect Lal Chand Ustad, Hawa Mahal is one of the finest syntheses of Rajput and Mughal architecture in existence.

Architectural Genius:
• Krishna's Crown: The five-storey pyramidal facade is built in the divine form of the crown (mukut) of Lord Krishna, of whom the Maharaja was a devoted worshipper.
• 953 Jharokhas: The monument features 953 intricately carved latticework stone windows (jharokhas) made of red and pink sandstone.
• Natural Venturi Air-Cooling: The miniature windows act on the Venturi aerodynamic principle. As desert winds enter the narrow jaali openings, the air accelerates, drops in pressure, and cools the interior chambers naturally by several degrees during scorching 45°C summers!
• No Direct Ground Foundation: Despite towering 50 feet high, Hawa Mahal has no deep foundation; its unique curved pyramidal design and slender masonry walls provide structural stability.

Cultural Significance:
The palace was constructed for the royal ladies of the Zenana. Through the screened stone jaalis, women could freely watch the colorful processions, festivals, and bustling life of Johari Bazaar without being seen by onlookers.

Interesting Fact:
Hawa Mahal has no staircases between its five storeys! Instead, the floors are connected entirely by gentle ramps, allowing royal palanquins (palkis) to be carried effortlessly to the top floors!`;
  }

  if (lower.includes("gujarat") && (lower.includes("dance") || lower.includes("folk dance") || lower.includes("garba"))) {
    return `Namaste, beta! Gujarat's folk dances are among the most colorful, rhythmic, and high-energy communal celebrations anywhere in the world.

Major Folk Dances of Gujarat:
• Garba: The internationally celebrated circle dance performed during the nine nights of Navratri. Dancers move counter-clockwise around a perforated terracotta lantern (Garbha Deep) containing a sacred oil lamp, symbolizing the cosmic womb and the cycle of life.
• Dandiya Raas: An energetic dance performed with polished wooden sticks (dandiyas) representing the swords of Goddess Durga defeating the demon Mahishasura. Dancers strike their partners' sticks in complex syncopated meters.
• Bhavai: An ancient, witty folk theatre and dance form of northern Gujarat. Skilled performers balance up to 7 to 9 brass or earthen pots (kalash) on their heads while balancing atop the edge of a sword or glass tumbler!
• Tippani: A unique folk dance of the Kharva fisherwomen of coastal Chorwad. Women dance while beating long wooden mallets (tippani) against the ground, originating from the labor of pounding lime into building floors.
• Padhar Dance: Performed by the Padhar community near Nal Sarovar, where dancers mimic the swaying waves of the lake and the rowing of boats.

Cultural Significance:
These dances celebrate seasonal harvests, feminine divine energy (Shakti), and community bonding where all social barriers dissolve under the rhythmic beat of the dhol.

Interesting Fact:
In 2023, UNESCO officially inscribed the 'Garba of Gujarat' onto the Representative List of the Intangible Cultural Heritage of Humanity!`;
  }

  // General contextual Indian cultural response
  return `Namaste, my dear child! Let me share the timeless heritage of ${inferredState !== 'India' ? inferredState : 'our sacred motherland India'} with you.

Cultural Background:
Indian culture is characterized by unbroken civilizational continuity. Across our 28 states and Union Territories, traditions are not preserved behind glass in museums—they live every day in our family courtyards, handloom looms, festival fires, and folk songs.

Key Facets of Our Heritage:
• Indigenous Craftsmanship: Master artisans across every region use natural, sustainable materials—vegetable dyes, terracotta clay, hand-spun cotton (Khadi), bell metal, and stone carvings.
• Living Folk Music & Dance: Each season has its own melody and rhythm—celebrating sowing, monsoon showers, harvests, and weddings.
• Ancient Architectural Science: Historic stepwells (baolis), rock-cut shrines, and desert forts were engineered with seismic flexibility, acoustic resonance, and natural microclimate cooling centuries before modern blueprints existed.

Cultural Significance:
Our heritage teaches us reverence for nature, hospitality to all guests (Atithi Devo Bhava), and deep gratitude for the wisdom passed down through generations.

Interesting Fact:
India is home to over 40 UNESCO World Heritage Sites, more than 300 distinctive folk and tribal dances, and hundreds of living musical instruments found nowhere else in the world!`;
}

// In-memory cache for common cultural questions to ensure sub-10ms instant responses
const culturalAnswersCache = new Map<string, { reply: string; stateName: string }>();

function normalizeCacheKey(q: string): string {
  return q.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

// Pre-seed common questions
(function seedCommonCulturalQuestions() {
  const commonSeeds: Array<{ queries: string[]; state: string; reply: string }> = [
    {
      queries: [
        "what is the cultural significance of rajasthan s folk music",
        "what is the cultural significance of rajasthan folk music",
        "rajasthan folk music cultural significance",
        "tell me about rajasthan folk music",
        "rajasthan folk music"
      ],
      state: "Rajasthan",
      reply: `Namaste, my dear child! Rajasthani folk music is the living heartbeat and oral memory of the Thar Desert.

- **Living Bardic Tradition**: Kept alive for generations by hereditary musician communities—the *Manganiyars*, *Langas*, and *Kalbeliyas*—who served as oral historians and community poets.
- **Iconic Indigenous Instruments**: Masterpieces like the bowed *Kamayacha* (made from single-piece mango wood), the emotive *Sindhi Sarangi*, rhythmic *Khartal* clappers, and double-flute *Algoza*.
- **Songs of Life & Land**: From welcoming ballads like *'Kesariya Balam'* (Maand style) to water-fetching songs like *'Panihari'*, the music expresses devotion, desert resilience, and royal folklore.

**Cultural Secret:**
Did you know? The *Kamayacha* is considered one of the oldest bowed instruments in existence—passed down through 7+ generations within Manganiyar families!`
    },
    {
      queries: [
        "what is hawa mahal",
        "tell me about hawa mahal",
        "palace of winds jaipur",
        "hawa mahal jaipur"
      ],
      state: "Rajasthan",
      reply: `Namaste, beta! Hawa Mahal, or the *'Palace of Winds'*, is an architectural marvel standing in Jaipur since 1799.

- **Designed like Krishna's Crown**: Built by Maharaja Sawai Pratap Singh and architect Lal Chand Ustad in the shape of Lord Krishna’s crown (*mukut*).
- **953 Jharokhas**: Features 953 intricately latticed stone casements that act on the Venturi aerodynamic effect, naturally funneling cool breezes during 45°C desert summers.
- **Royal Zenana Viewing**: Allowed royal women to observe city festivals and processions in Johari Bazaar while observing purdah.

**Cultural Secret:**
Hawa Mahal has no stairs inside! Five storeys are connected entirely by gentle ramps, allowing royal palanquins (*palkis*) to glide effortlessly to the highest chambers.`
    },
    {
      queries: [
        "what is madhubani painting",
        "tell me about madhubani art",
        "mithila painting bihar",
        "madhubani art"
      ],
      state: "Bihar",
      reply: `Namaste, my child! Madhubani (*Mithila*) art is a sacred folk tradition from the Mithila region of Bihar.

- **Mythological Roots**: According to folklore, King Janaka commissioned artists to paint Lord Rama and Sita’s wedding thousands of years ago.
- **100% Natural Pigments**: Colors are extracted from lamp soot (black), turmeric (yellow), indigo (blue), rice flour (white), and palash flowers. Painted with bamboo twigs and fingers.
- **Symbolism & Harmony**: Depicts deities, sacred fish (fertility), turtles (longevity), and peacocks with double-line borders and zero empty space.

**Cultural Secret:**
Traditionally created on mud walls of the bridal chamber (*Kohbar Ghar*), Madhubani was introduced to world galleries in the 1960s to support artisans during a regional drought.`
    },
    {
      queries: [
        "what are the folk dances of rajasthan",
        "rajasthan folk dances",
        "folk dance of rajasthan",
        "ghoomar kalbeliya"
      ],
      state: "Rajasthan",
      reply: `Namaste, beta! Rajasthan's folk dances reflect the boundless valor and desert colors of its people:

- **Ghoomar**: Performed by women in flowing ghagras gracefully twirling in circles, traditionally initiated by the Bhil tribe and later embraced by Rajput royalty.
- **Kalbeliya**: The hypnotic serpent dance of the nomadic Kalbeliya community, recognized on UNESCO’s Intangible Cultural Heritage list.
- **Bhavai**: Dancers balance 7 to 9 brass pitchers on their heads while balancing barefoot on naked sword blades or glass rims.
- **Chari**: Dancers balance brass pots with flaming cotton seeds on their heads, honoring water-bearing rituals.

**Cultural Secret:**
The swirling ghagras of Ghoomar dancers can span up to 80 *kali* (panels) of embroidered cloth, blooming into a kaleidoscope as they pirouette!`
    },
    {
      queries: [
        "what is indian folk music",
        "tell me about indian folk music",
        "importance of indian folk music"
      ],
      state: "India",
      reply: `Namaste, my dear child! Indian folk music is the authentic, unadorned voice of our motherland's soil and soul.

- **Rooted in Earth & Seasons**: Unlike classical ragas, folk songs arise directly from village life—monsoon songs (*Kajari*), harvest anthems (*Bhangra*), and boatmen chants (*Bhatiali*).
- **Eco-friendly Instruments**: Handcrafted from gourds (*Ektara*, *Tumbi*), clay (*Ghatam*), bamboo (*Bansuri*), and bell-metal (*Manjira*).
- **Mother of Classical Music**: Classical ragas like *Desh*, *Pahadi*, and *Maand* drew their timeless melodies directly from regional village folk songs.

**Cultural Secret:**
Oral transmission across millennia without written notation means songs sung today carry the exact lyrical inflections grandmothers sang centuries ago!`
    },
    {
      queries: [
        "what are the crafts of gujarat",
        "gujarat handicrafts",
        "handicrafts of gujarat"
      ],
      state: "Gujarat",
      reply: `Namaste, beta! Gujarat is a wonderland of textile and artisanal mastery:

- **Patan Patola**: Double-ikat silk weaves where warp and weft are dyed before weaving. The design never fades even if the cloth wears out over centuries!
- **Rogan Art**: 400-year-old castor-oil paint craft of Kutch drawn onto fabric using only a brass stylus without hands touching the cloth.
- **Bandhani**: Micro-knot tie-and-dye patterns from Jamnagar and Bhuj.
- **Ajrakh**: 16-stage hand-block printing using river water, indigo, and hand-carved teakwood blocks.

**Cultural Secret:**
*Lippan Kaam* (mud-mirror work) on Kutchi round mud huts (*bhungas*) keeps desert interiors cool by deflecting midday desert heat!`
    },
    {
      queries: [
        "what are the folk dances of gujarat",
        "gujarat folk dance",
        "garba dandiya raas"
      ],
      state: "Gujarat",
      reply: `Namaste, my child! Gujarat's folk dances are ecstatic, communal celebrations of life and the divine feminine:

- **Garba**: UNESCO-inscribed circular dance celebrating Goddess Shakti. Dancers circle a pierced earthen lamp (*Garbha Deep*) symbolizing the cosmic womb.
- **Dandiya Raas**: High-energy partner dance with wooden sticks depicting Goddess Durga’s swords overcoming darkness.
- **Bhavai**: Dynamic folk theater featuring dancers balancing multiple brass pots on their heads while walking on swords.
- **Tippani**: Pounding stick dance born from coastal women beating chalk lime into architectural floors.

**Cultural Secret:**
The word Garba comes from the Sanskrit *'Garbha'* (womb), honoring the universal mother and the sacred spark within all beings!`
    }
  ];

  for (const item of commonSeeds) {
    for (const q of item.queries) {
      culturalAnswersCache.set(normalizeCacheKey(q), { reply: item.reply, stateName: item.state });
    }
  }
})();

// Real Grandma's AI Cultural Guide Chat Endpoint (English Only, Factual Heritage Knowledge)
app.post("/api/grandma/chat", async (req, res) => {
  try {
    const { message, stateName, chatHistory } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: "A question or message is required" });
    }

    const query = message.trim();
    const normalizedKey = normalizeCacheKey(query);

    // Check fast cache first for instant sub-10ms response
    if (culturalAnswersCache.has(normalizedKey)) {
      const cached = culturalAnswersCache.get(normalizedKey)!;
      return res.json({
        reply: cached.reply,
        stateName: cached.stateName,
        isCultural: true,
        cached: true
      });
    }

    const lowerQuery = query.toLowerCase();

    // Automatically infer state/region from user query text
    const statesMap: Record<string, string> = {
      rajasthan: "Rajasthan",
      gujarat: "Gujarat",
      bihar: "Bihar",
      mithila: "Bihar",
      madhubani: "Bihar",
      punjab: "Punjab",
      kerala: "Kerala",
      odisha: "Odisha",
      karnataka: "Karnataka",
      tamil: "Tamil Nadu",
      bengal: "West Bengal",
      kolkata: "West Bengal",
      assam: "Assam",
      kashmir: "Jammu & Kashmir",
      ladakh: "Ladakh",
      maharashtra: "Maharashtra",
      goa: "Goa",
      haryana: "Haryana",
      himachal: "Himachal Pradesh",
      uttarakhand: "Uttarakhand",
      telangana: "Telangana",
      andhra: "Andhra Pradesh",
      chhattisgarh: "Chhattisgarh",
      jharkhand: "Jharkhand",
      madhya: "Madhya Pradesh",
      manipur: "Manipur",
      meghalaya: "Meghalaya",
      mizoram: "Mizoram",
      nagaland: "Nagaland",
      sikkim: "Sikkim",
      tripura: "Tripura"
    };

    let inferredState = stateName && stateName !== "All India" ? stateName : "India";
    for (const [key, name] of Object.entries(statesMap)) {
      if (lowerQuery.includes(key)) {
        inferredState = name;
        break;
      }
    }

    // Specific landmark / craft inferences
    if (lowerQuery.includes("hawa mahal") || lowerQuery.includes("amer fort") || lowerQuery.includes("jodhpur") || lowerQuery.includes("jaipur")) {
      inferredState = "Rajasthan";
    } else if (lowerQuery.includes("garba") || lowerQuery.includes("patola") || lowerQuery.includes("rogan art") || lowerQuery.includes("kutch")) {
      inferredState = "Gujarat";
    } else if (lowerQuery.includes("kathakali") || lowerQuery.includes("theyyam") || lowerQuery.includes("kalaripayattu")) {
      inferredState = "Kerala";
    }

    // Check for completely off-topic questions (programming, math, crypto, generic tech)
    const isCompletelyOffTopic = 
      /^(write|show|give|generate)\s+(code|python|javascript|java|c\+\+|html|css|sql|script)/i.test(query) ||
      /\b(programming language|best coding|debug this code|cryptocurrency|bitcoin|stock market prediction|nfl scores|premier league)\b/i.test(lowerQuery);

    if (isCompletelyOffTopic) {
      return res.json({
        reply: "I’m Grandma’s AI, your guide to Indian heritage and culture. I’m best at answering questions about India’s traditions, crafts, folk music, architecture, festivals, and cultural history. Try asking me about a heritage site, traditional craft, or folk melody!",
        stateName: inferredState,
        isCultural: false
      });
    }

    // Attempt generation with Gemini AI using the modern @google/genai SDK
    const ai = getAIClient();
    if (ai) {
      try {
        const systemPrompt = `You are "Grandma's AI", a loving, culturally knowledgeable Indian grandmother and cultural guide for Virasat Bharat.

CRITICAL MANDATES:
1. STRICTLY ENGLISH ONLY: Communicate ONLY in clear, warm English. Regional terms must be in Latin script with brief context.
2. CONCISE & FAST: Aim for 120-220 words. No repetitive fluff or filler sentences.
3. BEAUTIFULLY STRUCTURED:
   - Warm greeting ("Namaste, my dear child!" or "Namaste, beta!")
   - 2-3 crisp bullet points with fascinating facts / craftsmanship / architecture
   - Short "Cultural Secret" or "Did you know?" section
4. TONE: Warm, affectionate, authentic, and elder-storyteller oriented.
5. FORMATTING: Use Markdown formatting (such as **bold** for key craft/place names, *italic* for vernacular terms, and bullet lists).`;

        const chatContext = Array.isArray(chatHistory) 
          ? chatHistory.slice(-4).map((m: any) => `${m.sender === 'user' ? 'User' : "Grandma's AI"}: ${m.text}`).join('\n')
          : '';

        const userPrompt = `Context: ${inferredState !== 'India' ? `Region: ${inferredState}` : 'India'}
${chatContext ? `Recent Conversation:\n${chatContext}\n` : ''}
Question: "${query}"

Provide your warm, concise, beautifully structured answer in ENGLISH ONLY:`;

        const response = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents: userPrompt,
          config: {
            systemInstruction: systemPrompt
          }
        });

        const aiText = response.text ? response.text.trim() : "";
        if (aiText) {
          // Cache response for future queries
          culturalAnswersCache.set(normalizedKey, { reply: aiText, stateName: inferredState });
          return res.json({
            reply: aiText,
            stateName: inferredState,
            isCultural: true
          });
        }
      } catch (geminiError: any) {
        console.warn("Gemini API call warning (falling back to curated heritage answer):", geminiError.message || geminiError);
      }
    }

    // Curated high-quality heritage answer fallback (never fails, instant, 100% authentic English)
    const curatedAnswer = getCuratedHeritageAnswer(query, inferredState);
    culturalAnswersCache.set(normalizedKey, { reply: curatedAnswer, stateName: inferredState });
    return res.json({
      reply: curatedAnswer,
      stateName: inferredState,
      isCultural: true
    });

  } catch (error: any) {
    console.error("Grandma Chat API error:", error);
    const fallbackAnswer = getCuratedHeritageAnswer(req.body?.message || "Indian heritage", "India");
    res.json({
      reply: fallbackAnswer,
      stateName: "India",
      isCultural: true
    });
  }
});

// ULTRA-FAST STREAMING ENDPOINT for Grandma's AI
app.post("/api/grandma/chat/stream", async (req, res) => {
  const { message, stateName, chatHistory } = req.body;

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: "A question or message is required" });
  }

  const query = message.trim();
  const lowerQuery = query.toLowerCase();
  const normalizedKey = normalizeCacheKey(query);

  // Set SSE Headers immediately with zero buffering
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  if (typeof (res as any).flushHeaders === 'function') {
    (res as any).flushHeaders();
  }

  // Helper to send SSE event
  const sendChunk = (chunk: string) => {
    res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
  };

  const sendDone = (finalState: string, fullText?: string) => {
    if (fullText) {
      culturalAnswersCache.set(normalizedKey, { reply: fullText, stateName: finalState });
    }
    res.write(`data: ${JSON.stringify({ done: true, stateName: finalState })}\n\n`);
    res.end();
  };

  // State inference
  const statesMap: Record<string, string> = {
    rajasthan: "Rajasthan",
    gujarat: "Gujarat",
    bihar: "Bihar",
    mithila: "Bihar",
    madhubani: "Bihar",
    punjab: "Punjab",
    kerala: "Kerala",
    odisha: "Odisha",
    karnataka: "Karnataka",
    tamil: "Tamil Nadu",
    bengal: "West Bengal",
    kolkata: "West Bengal",
    assam: "Assam",
    kashmir: "Jammu & Kashmir",
    ladakh: "Ladakh",
    maharashtra: "Maharashtra",
    goa: "Goa",
    haryana: "Haryana",
    himachal: "Himachal Pradesh",
    uttarakhand: "Uttarakhand",
    telangana: "Telangana",
    andhra: "Andhra Pradesh",
    chhattisgarh: "Chhattisgarh",
    jharkhand: "Jharkhand",
    madhya: "Madhya Pradesh"
  };

  let inferredState = stateName && stateName !== "All India" ? stateName : "India";
  for (const [key, name] of Object.entries(statesMap)) {
    if (lowerQuery.includes(key)) {
      inferredState = name;
      break;
    }
  }

  if (lowerQuery.includes("hawa mahal") || lowerQuery.includes("amer fort") || lowerQuery.includes("jodhpur") || lowerQuery.includes("jaipur")) {
    inferredState = "Rajasthan";
  } else if (lowerQuery.includes("garba") || lowerQuery.includes("patola") || lowerQuery.includes("rogan art") || lowerQuery.includes("kutch")) {
    inferredState = "Gujarat";
  } else if (lowerQuery.includes("kathakali") || lowerQuery.includes("theyyam") || lowerQuery.includes("kalaripayattu")) {
    inferredState = "Kerala";
  }

  // Handle off-topic queries immediately
  const isCompletelyOffTopic = 
    /^(write|show|give|generate)\s+(code|python|javascript|java|c\+\+|html|css|sql|script)/i.test(query) ||
    /\b(programming language|best coding|debug this code|cryptocurrency|bitcoin|stock market prediction|nfl scores|premier league)\b/i.test(lowerQuery);

  if (isCompletelyOffTopic) {
    const offTopicMsg = "I’m Grandma’s AI, your guide to Indian heritage and culture. I’m best at answering questions about India’s traditions, crafts, folk music, architecture, festivals, and cultural history. Try asking me about a heritage site, traditional craft, or folk melody!";
    sendChunk(offTopicMsg);
    sendDone(inferredState);
    return;
  }

  // 1. FAST CACHE HIT: If answer is cached, stream it immediately
  if (culturalAnswersCache.has(normalizedKey)) {
    const cached = culturalAnswersCache.get(normalizedKey)!;
    // Stream cached words in ultra-fast rhythmic bursts so UI animates smoothly
    const words = cached.reply.split(" ");
    let i = 0;
    const interval = setInterval(() => {
      if (i < words.length) {
        const nextBatch = words.slice(i, i + 6).join(" ") + (i + 6 < words.length ? " " : "");
        sendChunk(nextBatch);
        i += 6;
      } else {
        clearInterval(interval);
        sendDone(cached.stateName, cached.reply);
      }
    }, 25);
    return;
  }

  // 2. GEMINI STREAMING with @google/genai SDK
  const ai = getAIClient();
  if (ai) {
    try {
      const systemPrompt = `You are "Grandma's AI", a loving, culturally knowledgeable Indian grandmother and guide for Virasat Bharat.

CRITICAL INSTRUCTIONS:
1. ENGLISH ONLY: Always communicate in clear, warm English.
2. CONCISE & FAST: Aim for 120-220 words. Be direct, informative, and engaging.
3. STRUCTURE:
   - Warm grandmotherly opening ("Namaste, my dear child!" or "Namaste, beta!")
   - 2-3 crisp bullet points with authentic cultural facts, instruments, or architecture
   - Short "Cultural Secret" or "Did you know?"
4. TONE: Affectionate, proud of Indian heritage, and culturally authentic.
5. FORMATTING: Use clean Markdown (such as **bold** for names/terms, *italic* for vernacular words, and bullet lists).`;

      const chatContext = Array.isArray(chatHistory) 
        ? chatHistory.slice(-4).map((m: any) => `${m.sender === 'user' ? 'User' : "Grandma's AI"}: ${m.text}`).join('\n')
        : '';

      const userPrompt = `Context: ${inferredState !== 'India' ? `Region: ${inferredState}` : 'India'}
${chatContext ? `Recent Conversation:\n${chatContext}\n` : ''}
Question: "${query}"

Provide your warm, concise, beautifully structured answer in ENGLISH ONLY:`;

      const stream = await ai.models.generateContentStream({
        model: "gemini-3.1-flash-lite",
        contents: userPrompt,
        config: {
          systemInstruction: systemPrompt
        }
      });

      let accumulatedText = "";
      for await (const chunk of stream) {
        const text = chunk.text || "";
        if (text) {
          accumulatedText += text;
          sendChunk(text);
        }
      }

      if (accumulatedText.trim()) {
        sendDone(inferredState, accumulatedText.trim());
        return;
      }
    } catch (geminiError: any) {
      console.warn("Gemini streaming error (falling back to curated answer):", geminiError.message || geminiError);
    }
  }

  // 3. FALLBACK: Curated factual answer streamed smoothly
  const fallback = getCuratedHeritageAnswer(query, inferredState);
  const words = fallback.split(" ");
  let idx = 0;
  const timer = setInterval(() => {
    if (idx < words.length) {
      const chunk = words.slice(idx, idx + 5).join(" ") + (idx + 5 < words.length ? " " : "");
      sendChunk(chunk);
      idx += 5;
    } else {
      clearInterval(timer);
      sendDone(inferredState, fallback);
    }
  }, 20);
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
          model: "gemini-3.1-flash-lite",
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
