import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

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

// AI Local Language Translator endpoint (Grandma personality)
app.post("/api/gemini/translate", async (req, res) => {
  try {
    const { text, stateName, language } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const ai = getAIClient();
    if (!ai) {
      // Graceful fallback if no API key
      return res.json({
        englishMeaning: `Translation of "${text}" in the context of ${stateName || 'India'}`,
        nativeWord: text,
        pronunciation: text,
        language: language || "Regional Language",
        culturalExplanation: "Translations often carry deeper emotional value when spoken by elders at home. In many Indian households, words for affection and daily life have special warmth.",
        grandmaNote: "Beta, always remember that in our heritage, how you say it with respect and warmth matters just as much as the word itself!",
        verified: false
      });
    }

    const prompt = `You are a loving, wise Indian grandmother (Dadi/Nani/Ammachi/Aaji) teaching younger generations about India's rich languages.
Selected State/Region: ${stateName || "India"}
Local Language / Dialect context: ${language || "Regional Language of the state"}
User input to translate/explain: "${text}"

Please provide a structured JSON response with:
1. "nativeWord": the word/phrase in native script (Devanagari, Tamil, Bengali, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia, etc. if applicable) and Romanized transliteration.
2. "englishMeaning": accurate English meaning and nuanced translation.
3. "pronunciation": phonetic pronunciation guide easy for students to read.
4. "language": specific language/dialect name.
5. "culturalExplanation": 2-3 sentences explaining the cultural background, when it is used (e.g. festivals, greeting elders, kitchen, folk rituals).
6. "exampleSentence": an authentic everyday sentence in the local language with English translation in parentheses.
7. "grandmaNote": a short, warm, endearing grandmotherly piece of advice or affection (using terms like 'Beta', 'Bachha', 'Kanna', 'Mol', 'Kano', etc. appropriate to the region).

Respond ONLY with valid JSON.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You are Grandma Dadi/Ammachi, a knowledgeable, affectionate elder sharing India's rich regional linguistic heritage. Always respond in strict JSON format."
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json({ ...parsed, verified: true });
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
