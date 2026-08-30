import { StateCulturalData } from '../types';

export const statesData: StateCulturalData[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    nativeName: "राजस्थान",
    capital: "Jaipur",
    zone: "West",
    tagline: "Land of Kings, Timeless Hill Forts, Vibrant Bandhani & Desert Ballads",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/960px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    languages: {
      nativeLanguage: "Rajasthani / Marwari",
      dialects: [
        "Marwari",
        "Mewari",
        "Dhundhari",
        "Shekhawati",
        "Harauti"
      ],
      phrases: [
        {
          nativeWord: "Khamma Ghani",
          nativeScript: "खम्मा घणी",
          englishMeaning: "May you be blessed with abundant forgiveness and peace (Supreme royal greeting)",
          phonetics: "Kham-maa Gha-nee",
          exampleSentence: "Khamma Ghani sa, padharo mhare desh! (Welcome to our royal land!)"
        },
        {
          nativeWord: "Padharo Mhare Desh",
          nativeScript: "पधारो म्हारे देश",
          englishMeaning: "Please grace my land with your auspicious presence",
          phonetics: "Puh-dhaa-ro Mhaa-ray Daysh",
          exampleSentence: "Atithi devo bhava—padharo mhare desh!"
        },
        {
          nativeWord: "Hukum",
          nativeScript: "हुकुम",
          englishMeaning: "As per your esteemed wish / Order accepted with deep honor",
          phonetics: "Hoo-koom",
          exampleSentence: "Jaisa aapka hukum, saheb. (As you command, sir.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Kesariya Balam (Aao Ni Padharo Mhare Des)",
        nativeScript: "केसरिया बालम आवो नी पधारो म्हारे देश",
        culturalSignificance: "Ancient welcoming ballad in the classical Maand folk raag, originally sung by Manganiyar bards welcoming weary desert voyagers and beloved kings.",
        whenPerformed: "Royal greetings, evening desert campfires under starlit sands, and festive gatherings.",
        instruments: [
          "Kamayacha",
          "Ravanhatha",
          "Morchang (Jaw harp)",
          "Khartal (Wooden castanets)",
          "Dholak"
        ],
        audioScale: "Maand Raag (Folk Pentatonic Blend)"
      },
      {
        songName: "Ghoomar Folk Symphony",
        nativeScript: "घूमर",
        culturalSignificance: "Traditional dance-song of the Bhil tribe later adopted by Rajput queens to welcome newly wedded brides into the royal courtyard.",
        whenPerformed: "Teej, Gangaur festival, and wedding celebrations.",
        instruments: [
          "Dholak",
          "Nagada",
          "Manjira",
          "Shehnai"
        ],
        audioScale: "Rhythmic 8-beat Keherwa"
      }
    ],
    recipes: [
      {
        dishName: "Dal Baati Churma",
        nativeName: "दाल बाटी चूरमा",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/%22Delectable_Dal_Baati_Churma%22.jpg/960px-%22Delectable_Dal_Baati_Churma%22.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        courseType: "Royal Thali Masterpiece",
        dietary: "Vegetarian",
        prepTime: "60 mins",
        ingredients: [
          "Panchmel Dal (Moong, Chana, Toor, Urad, Masoor)",
          "Coarse whole wheat flour",
          "Pure Desi Ghee (clarified butter)",
          "Dry ginger & cardamom powder",
          "Jaggery & Bura sugar",
          "Asafoetida (Hing) & Cumin"
        ],
        steps: [
          "Knead coarse wheat flour with ghee, ajwain, and water into round balls (Baatis).",
          "Bake over cow dung embers or earthen tandoor until cracked and golden brown.",
          "Dip hot baatis in bubbling desi ghee.",
          "Simmer 5 lentils with ghee tadka of hing, garlic, and red chilies.",
          "Crush baked baatis with powdered cardamom and jaggery into sweet Churma."
        ],
        culturalBackground: "Invented during Rajput military expeditions: soldiers buried raw dough in desert sands before battles; the desert heat baked them naturally by evening."
      },
      {
        dishName: "Gatte ki Sabzi",
        nativeName: "गट्टे की सब्ज़ी",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Gatte_ki_sabzi_served_with_aamras_and_garlic_chutney.jpg/960px-Gatte_ki_sabzi_served_with_aamras_and_garlic_chutney.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        courseType: "Curry / Gravy",
        dietary: "Vegetarian",
        prepTime: "40 mins",
        ingredients: [
          "Gram flour (Besan)",
          "Curd (Yogurt)",
          "Fennel seeds (Saunf)",
          "Dry fenugreek (Kasuri methi)",
          "Mustard seeds",
          "Coriander"
        ],
        steps: [
          "Make spiced dough logs of besan and boil in seasoned water.",
          "Slice boiled logs into circular dumplings (Gatte).",
          "Prepare a spiced sour yogurt gravy infused with roasted cumin and fenugreek.",
          "Simmer gatte in gravy until luscious."
        ],
        culturalBackground: "Created by desert communities when fresh vegetables were scarce in summer droughts, showcasing genius use of stored pulses and dairy."
      }
    ],
    traditions: [
      {
        title: "Gangaur & Ghoomar Procession",
        category: "Ritual & Dance",
        description: "Women carry brass water pots on their heads while swirling in 80-kali flowing lehengas, praying for marital bliss and harvest rain.",
        significance: "Celebrates the divine union of Lord Shiva and Goddess Parvati (Gauri).",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gangaur_Celebration_in_Rajasthan%2C_India.jpg/960px-Gangaur_Celebration_in_Rajasthan%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      },
      {
        title: "Phad Scroll Storytelling",
        category: "Oral Folk Narrative",
        description: "30-foot hand-painted scroll paintings sung overnight by priest-singers (Bhopas) depicting the folk deity Pabuji.",
        significance: "Ancient portable folk theatre safeguarding local military and spiritual legends.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Stamp_of_India_-_1992_-_Colnect_164323_-_Phad_Scroll_Paintings_from_Rajasthan.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    ],
    childhoodGames: [
      {
        gameName: "Gilli Danda",
        nativeName: "गिल्ली डंडा",
        howItIsPlayed: "Played with a long wooden stick (Danda) and a small oval peg tapered at both ends (Gilli). The player strikes the gilli off the ground and hits it mid-air.",
        numberOfPlayers: "4 to 12 players",
        historicalOrigin: "Over 2,500 years old, mentioned in ancient Sanskrit texts and popular across village commons.",
        skillsDeveloped: [
          "Hand-eye agility",
          "Kinetic judgment",
          "Team sportsmanship"
        ]
      },
      {
        gameName: "Satoliya (Pithu / Seven Stones)",
        nativeName: "सातोलिया / पिठू",
        howItIsPlayed: "Two teams take turns knocking down a stack of seven flat stones with a rubber ball and rebuilding it while avoiding being tagged.",
        numberOfPlayers: "6 to 14 players",
        historicalOrigin: "Traditional street game played across Rajasthani pols (alleys) and courtyards.",
        skillsDeveloped: [
          "Agility",
          "Strategic teamwork",
          "Reflexes"
        ]
      }
    ],
    monuments: [
      {
        id: "mon-mehrangarh",
        name: "Mehrangarh Fort",
        location: "Jodhpur, Rajasthan",
        historicalPeriod: "1459 CE (Rathore Dynasty)",
        builtBy: "Rao Jodha",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mehrangarh_Fort_sanhita.jpg/960px-Mehrangarh_Fort_sanhita.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        historicalBackground: "Perched 410 feet above the Blue City of Jodhpur, this imposing citadel guarded the lucrative silk route across the Thar Desert.",
        architecturalSignificance: "Carved directly from living rhyolite rock with intricate stone lattice (Jali) windows, expansive courtyards, and mirror-work palaces.",
        culturalImportance: "Houses sacred folk music archives, royal palanquins, and cannons that withstood multiple sieges.",
        interestingFacts: [
          "Rudyard Kipling described it as \"A palace that might have been built by Titans and colored by the morning sun.\"",
          "The handprints of Rajput queens who committed Sati are still preserved near the Iron Gate."
        ],
        tags: [
          "UNESCO Nominee",
          "Hill Fort",
          "Living Museum"
        ]
      },
      {
        id: "mon-hawa-mahal",
        name: "Hawa Mahal (Palace of Winds)",
        location: "Jaipur, Rajasthan",
        historicalPeriod: "1799 CE (Kachwaha Dynasty)",
        builtBy: "Maharaja Sawai Pratap Singh",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Hawa_Mahal_%28The_Palace_of_Winds%29_in_Jaipur%2C_20191218_1201_9174.jpg/960px-Hawa_Mahal_%28The_Palace_of_Winds%29_in_Jaipur%2C_20191218_1201_9174.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        historicalBackground: "Designed as an extension of the City Palace to allow royal women to witness daily street festivals without being observed.",
        architecturalSignificance: "A 5-story pink and red sandstone crown resembling Lord Krishna's mukut, featuring 953 jharokhas with natural cooling airflow.",
        culturalImportance: "Masterpiece of Rajput-Mughal fusion architecture harnessing Bernoulli's fluid dynamics for air conditioning.",
        interestingFacts: [
          "The entire 50-foot structure stands without a standard solid foundation on a base less than a foot thick.",
          "There are no stairs leading to the upper floors—only inclined ramps for royal palanquins."
        ],
        tags: [
          "Jaipur Heritage",
          "Sandstone Art",
          "Ventilation Marvel"
        ]
      }
    ],
    festivals: [
      {
        id: "fest-pushkar",
        name: "Pushkar Camel Fair & Kartik Purnima",
        nativeName: "पुष्कर मेला",
        whenCelebrated: "October / November (Kartik Purnima)",
        whereCelebrated: "Pushkar, Rajasthan",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/The_Pushkar_Mela.jpg/960px-The_Pushkar_Mela.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        origins: "Ancient gathering at the only major Lord Brahma temple in the world, combining livestock trading with holy dips in Pushkar Lake.",
        culturalSignificance: "50,000 decorated camels, mustache competitions, bridal contests, and evening Maha Aarti with thousands of earthen lamps floating on water.",
        traditionalFood: "Malpua dipped in saffron rabri, Dal Kachori, Masala Chai.",
        traditionalClothing: "Vibrant saffron turbans (Safas), mirror-work Ghagras, and heavy silver hasli necklaces.",
        musicAndDance: "Kalbelia serpent dance, Nagada drum battles, and Shehnai serenades.",
        interestingFacts: [
          "Camels are groomed with intricate fur-shaving patterns resembling paisley and mandalas."
        ]
      }
    ],
    crafts: [
      {
        id: "craft-blue-pottery",
        name: "Jaipur Blue Pottery",
        category: "Pottery",
        region: "Jaipur & Sanganer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrHU2fig_c1e5zcnjOAHtR4LMj78jf2RmYPKPU6yV-H1qs5w1wgs33sxA&s=10",
        materials: [
          "Quartz powder",
          "Fuller’s earth (Multani Mitti)",
          "Glass cullet",
          "Natural gum",
          "Cobalt oxide (Blue dye)"
        ],
        techniques: [
          "Non-clay dough kneading",
          "Mould shaping",
          "Hand-painting floral motifs with squirrel-hair brushes",
          "Wood-fired kiln glazing"
        ],
        culturalSignificance: "A unique low-fired pottery tradition brought from Turko-Persian traditions by Sawai Ram Singh II.",
        processSteps: [
          "Crush quartz stone and mix with glass and natural plant gum without clay.",
          "Shape into moulds and dry naturally under desert sun.",
          "Brush with floral Arabesque patterns using copper and cobalt minerals.",
          "Apply glaze coating and fire once at 800°C."
        ],
        challengesFaced: "Fragility in transportation and rising costs of authentic quartz minerals."
      }
    ],
    artisans: [
      {
        id: "art-kripal-kumbh",
        name: "Kripal Singh Shekhawat (Legacy Studio)",
        craftType: "Blue Pottery & Fresco Master",
        location: "Jaipur, Rajasthan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7OZFewwi5TPlgUy3NVLH0lGHCDPeYwrXLeuHIvrUn9lBIjgB9A3Buk&s=10",
        quote: "Pottery is the art of giving immortality to humble quartz dust through color and patience.",
        story: "Padma Shri awardee who single-handedly resurrected the dying art of Jaipur Blue Pottery in the 1960s by introducing 25+ new colors beyond traditional turquoise blue.",
        yearsOfExperience: "60+ Years Legacy",
        awards: [
          "Padma Shri 1974",
          "National Master Craftsman Award"
        ]
      }
    ]
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    nativeName: "தமிழ்நாடு",
    capital: "Chennai",
    zone: "South",
    tagline: "Cradle of Classical Sangam Literature, Chola Granitic Gopurams & Kanchipuram Wefts",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9czOynuxLXU9zB7DB_GIUYZYFOT_tWzT_70GpoCzV78eyPZszCjJ2tl0&s=10",
    languages: {
      nativeLanguage: "Tamil (தமிழ்)",
      dialects: [
        "Madurai Tamil",
        "Kongu Tamil",
        "Tirunelveli Nellai",
        "Chennai Madras Bashai",
        "Thanjavur"
      ],
      phrases: [
        {
          nativeWord: "Vanakkam",
          nativeScript: "வணக்கம்",
          englishMeaning: "Respectful greeting honoring the divine spirit within you",
          phonetics: "Vuh-nuhk-kum",
          exampleSentence: "Ungal anaivarukkum en idhayam kanindha vanakkam. (My heartfelt greetings to everyone.)"
        },
        {
          nativeWord: "Saaptingala?",
          nativeScript: "சாப்பிட்டீங்களா?",
          englishMeaning: "Have you eaten? (The most common expression of deep care and warmth)",
          phonetics: "Saap-teeng-guh-laa",
          exampleSentence: "Vaanga, vandhu saaptingala? (Welcome! Have you had food?)"
        },
        {
          nativeWord: "Romba Nandri",
          nativeScript: "ரொம்ப நன்றி",
          englishMeaning: "Heartfelt thank you / Deep gratitude",
          phonetics: "Rom-buh Nun-dree",
          exampleSentence: "Ungal anbukku romba nandri! (Many thanks for your genuine love!)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Nattupura Pattu & Villu Paatu (Bow Song)",
        nativeScript: "நாட்டுப்புறப் பாட்டு மற்றும் வில்லுப்பாட்டு",
        culturalSignificance: "Centuries-old oral musical storytelling performed by striking a giant strung wooden bow with bronze bells, recounting temple mythologies and heroic ancestors.",
        whenPerformed: "Village temple festivals (Thiruvizha) and harvest celebrations.",
        instruments: [
          "Villu (Musical Bow)",
          "Urumee",
          "Nadaswaram",
          "Thavil",
          "Kanjira"
        ],
        audioScale: "Carnatic Folk Hybrid (Karaharapriya)"
      }
    ],
    recipes: [
      {
        dishName: "Authentic Thanjavur Sambhar & Medu Vada",
        nativeName: "தஞ்சாவூர் சாம்பார் மற்றும் மெது வடை",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH9QxeYwNwaHmYFZB0zyJFN1j_W_XGJZshFQqANOSuovl_K-WFQjfW3_c&s=10",
        courseType: "Breakfast & Feast",
        dietary: "Vegetarian",
        prepTime: "45 mins",
        ingredients: [
          "Toor dal & Shallots (Chinna Vengayam)",
          "Drumsticks & Brinjal",
          "Freshly ground Coriander, Cumin, Chana dal & Fenugreek spice paste",
          "Tamarind pulp & Hing",
          "Crisp soaked Urad dal batter with crushed black pepper & curry leaves"
        ],
        steps: [
          "Roast dry whole spices and fresh coconut on iron tawa, grind into Thanjavur masala paste.",
          "Cook toor dal with turmeric until creamy.",
          "Boil drumsticks and shallots in tamarind extract, add dal and spice paste.",
          "Temper in sesame oil with mustard seeds, curry leaves, and dried red chilies.",
          "Drop donut-shaped urad dal batter into hot oil until crispy golden."
        ],
        culturalBackground: "Originated in the Maratha-ruled Thanjavur palace kitchen and evolved into Tamil Nadu’s iconic culinary emblem."
      }
    ],
    traditions: [
      {
        title: "Kolam Drawing at Dawn",
        category: "Sacred Art & Ritual",
        description: "Women draw geometrical mandala grids on threshold floors using coarse rice flour to welcome Goddess Lakshmi and feed ants and birds.",
        significance: "A daily practice of charity, sacred geometry, and mental focus.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKTVnoxZD9IXLww99GzWK43T3XJspRo0qfTUro3iylWFtUcjgOiaZyxlA&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Pallanguzhi (Mancala of the South)",
        nativeName: "பல்லாங்குழி",
        howItIsPlayed: "Played on a 14-pit carved wooden board using cowrie shells or tamarind seeds to capture pits through mathematical distribution.",
        numberOfPlayers: "2 players",
        historicalOrigin: "Dating back to the Sangam era (c. 3rd Century BCE); mentioned in ancient poems.",
        skillsDeveloped: [
          "Mental arithmetic",
          "Strategic planning",
          "Fine motor coordination"
        ]
      }
    ],
    monuments: [
      {
        id: "mon-brihadeeswara",
        name: "Brihadeeswara Temple (Peruvudaiyar Kovil)",
        location: "Thanjavur, Tamil Nadu",
        historicalPeriod: "1010 CE (Great Chola Dynasty)",
        builtBy: "Emperor Raja Raja Chola I",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HRxLsY-ywB2ER57ApDB3NBTfuN2W11BzD3p7NTM3TTmrsiWdno_C2-M&s=10",
        historicalBackground: "A world-heritage crowning jewel of Dravidian architecture celebrating the supreme spiritual dominion of Lord Shiva.",
        architecturalSignificance: "Built entirely of 130,000 tonnes of granite without mortar. The vimana tower rises 216 feet capped by an 80-tonne monolithic Kumbam carved from a single stone block.",
        culturalImportance: "Preserves the oldest extant Chola frescos, bronze casting iconography, and epigraphic records of temple dancers.",
        interestingFacts: [
          "Granite is not found naturally within 60 km of Thanjavur; elephants hauled stones across rivers.",
          "The 80-tonne apex stone was rolled up a 6-kilometre-long inclined earth ramp to the summit."
        ],
        tags: [
          "UNESCO World Heritage",
          "Great Living Chola Temple",
          "Granite Engineering"
        ]
      }
    ],
    festivals: [
      {
        id: "fest-pongal",
        name: "Pongal (Thai Pongal Harvest Festival)",
        nativeName: "பொங்கல் திருநாள்",
        whenCelebrated: "Mid-January (Thai Month)",
        whereCelebrated: "Across Tamil Nadu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ltD8KQGcaLORvNdMLz7HY2HPp5NRjjp-_6LbrrhwIQjtL6xHCI6S696h&s=10",
        origins: "Ancient solar thanksgiving festival celebrating the northward journey of the sun (Uttarayana) and honoring cattle.",
        culturalSignificance: "Boiling freshly harvested rice, milk, and jaggery in clay pots until it overflows, accompanied by the joyful chant \"Pongalo Pongal!\"",
        traditionalFood: "Sweet Sakkarai Pongal, Ven Pongal, Medu Vada, sugarcane.",
        traditionalClothing: "Pattu Veshti (Silk dhoti) and Kanchipuram silk sarees.",
        musicAndDance: "Karakattam pot dance, Oyilattam, and Nadaswaram recital.",
        interestingFacts: [
          "On Mattu Pongal, bulls and cows are garlanded and their horns painted in bright colors in gratitude for agricultural labor."
        ]
      }
    ],
    crafts: [
      {
        id: "craft-kanchipuram-silk",
        name: "Kanchipuram Silk Weaving",
        category: "Weaving",
        region: "Kanchipuram",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsU5GcH7Drg2PzRZuqTgReD2oEFhe6NTyQO2av7-6ymuIyKd5dJJonYk8&s=10",
        materials: [
          "Pure Mulberry Silk",
          "Silver Zari thread electroplated with 24k gold",
          "Traditional pit looms"
        ],
        techniques: [
          "Korvai interlocking technique (joint between body and border)",
          "Petni pallu joinery",
          "Three-shuttle weaving"
        ],
        culturalSignificance: "Recognized with GI status; woven by descendants of Sage Markandeya, the master weaver of the Gods.",
        processSteps: [
          "Dye raw mulberry silk skeins in boiling botanical and mineral dyes.",
          "Spin silk threads onto wooden bobbins.",
          "Set warp and weft with two weavers sitting together on either side for Korvai interlocking.",
          "Weave temple gopuram motifs using real silver-gold zari."
        ],
        challengesFaced: "Competition from power looms and rising cost of real gold-silver bullion."
      }
    ],
    artisans: [
      {
        id: "art-b-krishnamoorthy",
        name: "B. Krishnamoorthy",
        craftType: "Master Kanchipuram Handloom Weaver",
        location: "Kanchipuram, Tamil Nadu",
        image: "https://th-i.thgim.com/public/society/history-and-culture/74quob/article35582709.ece/alternates/FREE_1200/29MPWeaverKirhsnamoorthysaridesigncatalogue",
        quote: "A true Kanchi saree is woven not with threads, but with prayers, mathematics, and devotion.",
        story: "National award-winning master weaver whose family has kept the complex Korvai three-shuttle interlocking technique alive for six generations.",
        yearsOfExperience: "50+ Years",
        awards: [
          "National Award for Master Craftsmen",
          "Sant Kabir Award"
        ]
      }
    ]
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    nativeName: "পশ্চিমবঙ্গ",
    capital: "Kolkata",
    zone: "East",
    tagline: "Land of Baul Mystics, Terracotta Terraces, Durga Puja Art & Rabindrasangeet",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zQSuU86dPya_Tu6xn4Q85_R4GY0E8Mwp1LPkP9UPpLUoinC2QBvwC1i4&s=10",
    languages: {
      nativeLanguage: "Bengali (বাংলা)",
      dialects: [
        "Rarhi (Standard Kolkata)",
        "Varendri",
        "Manbhumi",
        "Rajbanshi"
      ],
      phrases: [
        {
          nativeWord: "Nomoshkar",
          nativeScript: "নমস্কার",
          englishMeaning: "Peaceful and respectful cultural greeting",
          phonetics: "No-mosh-kaar",
          exampleSentence: "Nomoshkar, kemon achhen? (Greetings, how are you doing?)"
        },
        {
          nativeWord: "Bhalo Achi",
          nativeScript: "ভালো আছি",
          englishMeaning: "I am doing very well / In good spirits",
          phonetics: "Bhaa-lo Aa-chhee",
          exampleSentence: "Ami khub bhalo achi. (I am doing very well.)"
        },
        {
          nativeWord: "Khub Mishti",
          nativeScript: "খুব মিষ্টি",
          englishMeaning: "Extremely sweet and lovely (often describing people, music, or food)",
          phonetics: "Khoob Meesh-tee",
          exampleSentence: "Ei gaan-ti khub mishti! (This melody is so sweet!)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Baul Gaan (Songs of the Wandering Mystics)",
        nativeScript: "বাউল গান",
        culturalSignificance: "UNESCO Intangible Cultural Heritage. Soul-searching devotional poetry celebrating the \"Moner Manush\" (the Divine residing inside every human heart), transcending religious barriers.",
        whenPerformed: "Poush Mela in Shantiniketan, village Baul Akhras, and under banyan trees.",
        instruments: [
          "Ektara (Single-string lute)",
          "Dotara",
          "Dubki (Small tambourine)",
          "Khamak",
          "Ghungroo"
        ],
        audioScale: "Bhatiali & Baul Mystical Scales"
      }
    ],
    recipes: [
      {
        dishName: "Kosha Mangsho & Luchi",
        nativeName: "কষা মাংস ও ফুলকো লুচি",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bp2u8B0z1ZoO3EyHHtDND0Ir1sSQ577XJ3SsoAqfUYIT3K_-vZMGBImp&s=10",
        courseType: "Main Course / Festive",
        dietary: "Specialty",
        prepTime: "75 mins",
        ingredients: [
          "Mutton / Goat meat",
          "Mustard oil",
          "Caramelized onions",
          "Ginger-garlic paste",
          "Bengali Garam Masala",
          "Maida for puffed luchis"
        ],
        steps: [
          "Slowly braise marinated meat in pure mustard oil and caramelized onion paste for 60 minutes until oil separates.",
          "Add whole green cardamoms, cinnamon, and cloves.",
          "Fry refined flour bread (Luchi) in hot oil until it puffs into golden spheres."
        ],
        culturalBackground: "The quintessential Sunday afternoon feast and festive icon of Bengali hospitality."
      }
    ],
    traditions: [
      {
        title: "Alpona Floor Painting & Dhunuchi Dance",
        category: "Ritual Art & Dance",
        description: "Women paint flowing white rice-paste motifs on floors, while youth perform ecstatic dances holding smoking clay censers with burning coconut husk and camphor.",
        significance: "Performed before Goddess Durga to invoke courage, dispelling negative energies.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGigb4-YmKgulsUkMtBpyLAGGVShzoz74dTReM--mBPuwvpd-aY1tHXjub&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Kitta Kitta (Hopscotch of Bengal)",
        nativeName: "কিতকিত",
        howItIsPlayed: "Children draw numbered chalk grids on the street, throw a stone token, and hop on one leg without touching grid lines.",
        numberOfPlayers: "2 to 8 players",
        historicalOrigin: "Generations-old rural playground pastime.",
        skillsDeveloped: [
          "Balance",
          "Spatial awareness",
          "Stamina"
        ]
      }
    ],
    monuments: [
      {
        id: "mon-bishnupur",
        name: "Bishnupur Terracotta Temples",
        location: "Bankura, West Bengal",
        historicalPeriod: "17th–18th Century CE (Malla Dynasty)",
        builtBy: "Malla Kings of Mallabhum",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwf511JPK5vhX-1iaQwS668mqlaaBI6RZrtqJWEtNyRrm2eKFFmqx3fam&s=10",
        historicalBackground: "When stone was unavailable in alluvial Bengal plains, Malla kings transformed local river clay into breathtaking burnt terracotta temple tiles.",
        architecturalSignificance: "Features the unique curved roof Chala style (mimicking thatched bamboo huts) decorated with intricate terracotta relief tiles of Mahabharata scenes.",
        culturalImportance: "Epicenter of Vaishnavite temple culture and the classical Bishnupur Gharana of music.",
        interestingFacts: [
          "The temples were built using a mortar made from brick dust, lime, lentils, and molasses.",
          "Each tile was individually hand-sculpted before firing in wood kilns."
        ],
        tags: [
          "UNESCO Tentative",
          "Terracotta Wonder",
          "Chala Architecture"
        ]
      }
    ],
    festivals: [
      {
        id: "fest-durga-puja",
        name: "Durga Puja (UNESCO Intangible Heritage)",
        nativeName: "শারদোৎসব দুর্গাপূজা",
        whenCelebrated: "September / October (Ashwin Month)",
        whereCelebrated: "Kolkata & Across Bengal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRukc4n0FLBPVhTVGRJtIbFV-pFLtEqRfYFMlHViee4z6Xt9vfYW4vEbxe4&s=10",
        origins: "Commemorates the triumph of Goddess Durga over the demon Mahishasura, symbolizing the eternal victory of good over evil.",
        culturalSignificance: "The world's largest public art festival where neighborhoods create colossal architectural pandals, welcoming the Goddess as a beloved daughter coming home.",
        traditionalFood: "Bhog Khichuri, Labra, Payesh, Rosogolla, Sandesh.",
        traditionalClothing: "Garad silk saree with red borders, Kurta-Pajama with Uttariyo.",
        musicAndDance: "Dhaak drum rhythms, Dhunuchi Naach, and Rabindrasangeet.",
        interestingFacts: [
          "Inscribed on the UNESCO Representative List of Intangible Cultural Heritage in 2021."
        ]
      }
    ],
    crafts: [
      {
        id: "craft-kantha-embroidery",
        name: "Nakshi Kantha Quilt Embroidery",
        category: "Embroidery",
        region: "Bolpur & Murshidabad",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyQG--lVnuY7ZAHpSjB4hzSCkEFtyk90d8A8nPZW3jQ&s=10",
        materials: [
          "Recycled old cotton sarees",
          "Colored cotton threads",
          "Fine embroidery needles"
        ],
        techniques: [
          "Running stitch (Kantha)",
          "Floral mandalas",
          "Geometric spiral stitching"
        ],
        culturalSignificance: "Mothers and grandmothers historically stitched life stories and protective mantras into quilts for newborn babies.",
        processSteps: [
          "Layer 4-5 vintage soft cotton sarees.",
          "Baste borders to fix layers together.",
          "Draw freehand folk motifs of peacocks, lotus, and trees of life.",
          "Embroider tightly with thousand running stitches creating rippled textures."
        ],
        challengesFaced: "Time intensity; a single heirloom quilt takes 3 to 6 months of continuous handwork."
      }
    ],
    artisans: [
      {
        id: "art-sanatan-rudra-paul",
        name: "Sanatan Rudra Paul (Kumartuli)",
        craftType: "Master Clay Idol Sculptor",
        location: "Kumartuli, Kolkata",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWoa2jaNY5iqHTlDkePGEHa6Uk6fuAjgWVwQba1QpvvS09bgfza5TEUA&s=10",
        quote: "We breathe life into sacred Ganga clay so that millions may experience divine grace.",
        story: "Renowned master idol maker whose workshop in Kumartuli has sculpted Durga idols for prime pandals across the world for over 45 years.",
        yearsOfExperience: "48 Years",
        awards: [
          "State Master Craftsman Award",
          "Shilpa Ratna"
        ]
      }
    ]
  },
  {
    id: "kerala",
    name: "Kerala",
    nativeName: "കേരളം",
    capital: "Thiruvananthapuram",
    zone: "South",
    tagline: "God’s Own Country, Kathakali Mask Dramas, Backwaters & Sacred Groves",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVOixtc0Y1-m0ZKmkW-CdsFM-qQawiDMVv1_GqB1TPH7XPMz225y504g&s=10",
    languages: {
      nativeLanguage: "Malayalam (മലയാളം)",
      dialects: [
        "Travancore Malayalam",
        "Malabar",
        "Cochin",
        "Wayanad Tribal"
      ],
      phrases: [
        {
          nativeWord: "Namaskaram",
          nativeScript: "നമസ്കാരം",
          englishMeaning: "Respectful cultural greeting",
          phonetics: "Nuh-mus-kaa-rum",
          exampleSentence: "Ellavarkkum hridayam niranjo namaskaram. (Heartfelt greetings to all.)"
        },
        {
          nativeWord: "Sugham Aano?",
          nativeScript: "സുഖമാണോ?",
          englishMeaning: "Are you doing fine and healthy?",
          phonetics: "Soo-kham Aa-no",
          exampleSentence: "Ammummakku sugham aano? (Grandmother, are you in good health?)"
        },
        {
          nativeWord: "Nanni",
          nativeScript: "നന്ദി",
          englishMeaning: "Gratitude / Thank you very much",
          phonetics: "Nun-nee",
          exampleSentence: "Valare nanni! (Thank you very much!)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Vanchipattu (Boat Race Songs) & Sopana Sangeetham",
        nativeScript: "വഞ്ചിപ്പാട്ട്",
        culturalSignificance: "Rhythmic rowing chants sung by 100+ oarsmen powering snake boats (Chundan Vallam) in unison during the Nehru Trophy Boat Race on Punnamada Lake.",
        whenPerformed: "Onam harvest season and temple water processions.",
        instruments: [
          "Chenda (Cylindrical drum)",
          "Elathalam (Hand cymbals)",
          "Edakka (Hourglass drum)"
        ],
        audioScale: "Vanchippattu Metric Rhythm"
      }
    ],
    recipes: [
      {
        dishName: "Grand Onam Sadya Feast (Avial & Payasam)",
        nativeName: "ഓണ സദ്യ (അവിയൽ & അടപ്രഥമൻ)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVYSc-zKlbPWAS0f35fwEBXbPj2juVG8_4qk7y7FJLV3vDw4EgsVLoToj&s=10",
        courseType: "Plantain Leaf Festive Banquet",
        dietary: "Vegetarian",
        prepTime: "90 mins",
        ingredients: [
          "13 wild native vegetables (Raw banana, Yam, Drumstick, Ash gourd)",
          "Crushed coconut & Green chili cumin paste",
          "Curd (Yogurt)",
          "Fresh cold-pressed coconut oil & Curry leaves",
          "Ada Pradhaman (Rice flakes simmered in coconut milk and palm jaggery)"
        ],
        steps: [
          "Chop indigenous vegetables into uniform matchsticks.",
          "Cook gently with turmeric and minimal water.",
          "Fold in freshly ground raw coconut-cumin paste and whisked yogurt.",
          "Drizzle aromatic raw coconut oil and fresh curry leaves over the steaming pot.",
          "Serve across 24 distinct positions on a fresh banana leaf."
        ],
        culturalBackground: "Served during Onam to honor King Mahabali, representing prosperity, harmony, and complete egalitarian equality."
      }
    ],
    traditions: [
      {
        title: "Theyyam: The Dance of the Living Gods",
        category: "Ritual Performance",
        description: "Performers from indigenous communities undergo arduous fasting, wear towering sacred crowns (Mudi) up to 30 feet tall, and incarnate ancestral deities in village shrines.",
        significance: "An ancient pre-Vedic ritual that breaks caste hierarchies as all devotees seek blessings from the performer.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGMqRKq9-wrAsH0sffxVdohtLq0qTVU05DePjOjI-E6p2DKD1cqdQj7-5&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Kuttiyum Kolum (Kerala Gilli Danda)",
        nativeName: "കുട്ടിയും കോലും",
        howItIsPlayed: "Played in coconut groves where a small peg is flicked from a pit using a wooden baton and caught by fielders.",
        numberOfPlayers: "4 to 10 players",
        historicalOrigin: "Generations-old playground game played after monsoon rains.",
        skillsDeveloped: [
          "Hand-eye agility",
          "Reflexes"
        ]
      }
    ],
    monuments: [
      {
        id: "mon-padmanabhaswamy",
        name: "Sree Padmanabhaswamy Temple",
        location: "Thiruvananthapuram, Kerala",
        historicalPeriod: "8th–18th Century CE (Travancore Dynasty)",
        builtBy: "Marthanda Varma & Chera Kings",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksxIGlwpUcaQHpqrtO74YkjiWAoQzyixu7AEOBYcQGgSFiRDkQBoOai_m&s=10",
        historicalBackground: "The principal shrine of the Travancore Royal Family, who famously surrendered their kingdom to rule as \"Padmanabha Dasas\" (servants of the Lord).",
        architecturalSignificance: "A dramatic fusion of Kerala timber architecture and Tamil Dravidian stone Gopurams with 365 carved granite pillars.",
        culturalImportance: "Regarded as one of the world's wealthiest religious institutions holding centuries of consecrated gold and diamond treasures.",
        interestingFacts: [
          "The 18-foot deity reclines on the serpent Anantha, viewed through three separate sanctum doors.",
          "Vault B remains sealed by ancient tantric lore and legend."
        ],
        tags: [
          "Travancore Heritage",
          "Dravidian-Kerala Blend",
          "Sacred Vaults"
        ]
      }
    ],
    festivals: [
      {
        id: "fest-onam",
        name: "Onam (Thiruvonam)",
        nativeName: "തിരുവോണം",
        whenCelebrated: "August / September (Chingam Month)",
        whereCelebrated: "Across Kerala",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXq7_Gsh4JkQXfWj_t3Eu6Vk2HcEZS2rkNs3cmV7N78BGnBVhujnnubNA&s=10",
        origins: "Mythological homecoming of King Mahabali, during whose reign all citizens were said to be joyful, truthful, and free of sorrow.",
        culturalSignificance: "10 days of laying floral carpet mandalas (Pookalam), snake boat races, Pulikkali tiger dances, and eating the 24-dish Onam Sadya.",
        traditionalFood: "Avial, Sambar, Olan, Thoran, Kalan, Ada Pradhaman, Banana chips.",
        traditionalClothing: "Kasavu Mundu and Kasavu Sarees with gold borders.",
        musicAndDance: "Kathakali, Mohiniyattam, Thiruvathirakali, and Chenda Melam.",
        interestingFacts: [
          "Pulikkali (Tiger Dance) in Thrissur sees hundreds of performers paint their bellies like roaring tigers."
        ]
      }
    ],
    crafts: [
      {
        id: "craft-aranmula-mirror",
        name: "Aranmula Kannadi (Sacred Metal Mirror)",
        category: "Metalwork",
        region: "Aranmula, Pathanamthitta",
        image: "https://aranmulakannadi.org/wp-content/uploads/2020/07/AMS1510.png",
        materials: [
          "Secret copper-tin alloy (Speculum metal)",
          "Earthen clay moulds",
          "Jute polishing cloth",
          "Velvet"
        ],
        techniques: [
          "Lost-wax casting",
          "Front-surface reflective metallurgy",
          "Manual polishing for 14+ days with velvet and oil"
        ],
        culturalSignificance: "Unlike glass mirrors where reflection occurs on the silver coating at the back, this creates zero refraction on the metal surface itself.",
        processSteps: [
          "Melt copper and tin in exact secret ancestral ratio.",
          "Cast into an elliptical metal disc using river silt moulds.",
          "Hand-polish with abrasive mud and velvet for days until pristine reflectivity is achieved.",
          "Mount on ornate brass filigree frame."
        ],
        challengesFaced: "Secret alloy recipe known to only a few master artisan families in Aranmula village."
      }
    ],
    artisans: [
      {
        id: "art-g-radhakrishnan",
        name: "G. Radhakrishnan Achari",
        craftType: "Master Metal Mirror Caster (Aranmula Kannadi)",
        location: "Aranmula, Kerala",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtIQ6WFfR2HwMbHzhkFT_jRuep1085FtyOKey2u3EPWjNXgYc6BNEUB6M&s=10",
        quote: "The mirror does not lie, and neither does the fire. When the metal alloy is pure, the reflection shines like the sun.",
        story: "Senior national master craftsman who has preserved the 500-year-old front-surface metallurgical mirror technique.",
        yearsOfExperience: "45 Years",
        awards: [
          "National Crafts Award",
          "Kerala State Heritage Award"
        ]
      }
    ]
  },
  {
    id: "punjab",
    name: "Punjab",
    nativeName: "ਪੰਜਾਬ",
    capital: "Chandigarh",
    zone: "North",
    tagline: "Land of Five Rivers, Golden Temple Sanctum, Phulkari Embroidery & Bhangra Beats",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mU6LElqcyRTEPJW3nIlYdzEmIXZ6tk6-ZksI6hc2Vg&s=10",
    languages: {
      nativeLanguage: "Punjabi (ਪੰਜਾਬੀ)",
      dialects: [
        "Majhi",
        "Doabi",
        "Malwai",
        "Powadhi"

      ],
      phrases: [
        {
          nativeWord: "Sat Sri Akaal",
          nativeScript: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",
          englishMeaning: "Truth is the Timeless Immortal Lord (Sacred universal greeting)",
          phonetics: "Sut Sree Uh-kaal",
          exampleSentence: "Sat Sri Akaal ji, sab nu mera pyar. (Greetings of truth and love to all.)"
        },
        {
          nativeWord: "Ki Haal Chaal?",
          nativeScript: "ਕੀ ਹਾਲ ਚਾਲ?",
          englishMeaning: "How are you and what is the news with your life?",
          phonetics: "Kee Haal Chaal",
          exampleSentence: "Veer ji, ki haal chaal hai? (Brother, how are things going?)"
        },
        {
          nativeWord: "Chardi Kala",
          nativeScript: "ਚੜ੍ਹਦੀ ਕਲਾ",
          englishMeaning: "Ever-rising high spirits, resilience, and optimism in all circumstances",
          phonetics: "Chur-dee Kuh-laa",
          exampleSentence: "Hamesha chardi kala vich raho! (Always remain in elevated, joyful spirits!)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Bhangra Dhol Rhythms & Heer Ranjha Tappe",
        nativeScript: "ਭੰਗੜਾ ਅਤੇ ਹੀਰ ਵਾਰਿਸ ਸ਼ਾਹ",
        culturalSignificance: "Harvest ecstasy celebrating golden wheat crops alongside poignant spiritual love ballads written by Sufi poet Waris Shah.",
        whenPerformed: "Baisakhi festival, Lohri bonfires, and village fairs.",
        instruments: [
          "Dhol",
          "Tumbi (Single-string instrument)",
          "Chimta (Fire tongs with jingles)",
          "Algoza (Double flute)",
          "Bugchu"
        ],
        audioScale: "Bhangra 4/4 Chaal"
      }
    ],
    recipes: [
      {
        dishName: "Sarson Da Saag & Makki Di Roti with White Butter",
        nativeName: "ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ ਅਤੇ ਮੱਕੀ ਦੀ ਰੋਟੀ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQJT2Ga22L_puBf46vKsVLLOp3IIDB-0xwP1_y0CMfa3WvDd4_UP1boOB&s=10",
        courseType: "Winter Heritage Feast",
        dietary: "Vegetarian",
        prepTime: "60 mins",
        ingredients: [
          "Fresh Mustard greens (Sarson)",
          "Bathua (Chenopodium) & Spinach (Palak)",
          "Yellow cornmeal flour (Makki da atta)",
          "Fresh homemade white butter (Makkhan)",
          "Jaggery (Gud)",
          "Green chilies, ginger, and garlic"
        ],
        steps: [
          "Slowly simmer chopped mustard, bathua, and spinach greens with ginger and green chilies in an earthen handi for 2 hours.",
          "Mash with a wooden churner (Madani) while adding maize flour to thicken.",
          "Temper with sizzling desi ghee, sliced garlic, and dry red chilies.",
          "Hand-pat cornmeal dough onto flat discs and roast on cast iron tawa.",
          "Top generously with fresh white churning butter and jaggery chunks."
        ],
        culturalBackground: "The supreme winter dish of agrarian Punjab, providing warming nutrients to farmers working in chilly December morning fields."
      }
    ],
    traditions: [
      {
        title: "Langar: The Universal Community Kitchen",
        category: "Community Practice",
        description: "Every Gurdwara serves free, freshly cooked vegetarian meals to hundreds and thousands of visitors daily, regardless of religion, caste, or wealth.",
        significance: "Instituted by Guru Nanak Dev Ji to establish equality, humility, and selfless service (Seva).",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfz9GTiFCiKQz46uBT9L58db91NQFOLW89MRt8aSnQGRCMDoQMunpBg&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Kokla Chhapaki (Ring-a-Ring of Punjab)",
        nativeName: "ਕੋਕਲਾ ਛਪਾਕੀ",
        howItIsPlayed: "Children sit in a circle while one runs around chanting \"Kokla Chhapaki Jumme Raat Aayi Ae\", secretly dropping a cloth knot behind someone who must catch them.",
        numberOfPlayers: "6 to 15 players",
        historicalOrigin: "Generations-old outdoor chanting game.",
        skillsDeveloped: [
          "Attentiveness",
          "Sprinting speed",
          "Rhythmic participation"
        ]
      }
    ],
    monuments: [
      {
        id: "mon-golden-temple",
        name: "Sri Harmandir Sahib (The Golden Temple)",
        location: "Amritsar, Punjab",
        historicalPeriod: "1577–1604 CE (Sikh Gurus Era)",
        builtBy: "Guru Ram Das Ji & Guru Arjan Dev Ji",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-harmandir-sahib-(golden-temple)-amritsar-punjab-attr-hero?qlt=82&ts=1726662069037",
        historicalBackground: "The spiritual heart of Sikhism, designed with entrances on all four sides to welcome people from every direction and walk of life.",
        architecturalSignificance: "Built on a lower level than the surrounding land so devotees step downward in humility; covered in 500 kg of pure 24-karat gold leaf by Maharaja Ranjit Singh.",
        culturalImportance: "Houses the sacred Guru Granth Sahib; operates the world’s largest free kitchen feeding 100,000+ souls daily.",
        interestingFacts: [
          "The foundation stone was laid by the venerable Sufi saint Hazrat Mian Mir of Lahore in 1589.",
          "The sanctum sits in the middle of the sacred Amrit Sarovar (Pool of Nectar)."
        ],
        tags: [
          "Spiritual Sanctum",
          "Golden Architecture",
          "World Peace Emblem"
        ]
      }
    ],
    festivals: [
      {
        id: "fest-baisakhi",
        name: "Baisakhi (Vaisakhi Harvest & Khalsa Day)",
        nativeName: "ਵੈਸਾਖੀ",
        whenCelebrated: "April 13 / 14",
        whereCelebrated: "Across Punjab",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXt8Q2hStMQTNxuTqz2kxBhdgmnGQlPB6LfItKNwPU7AgnX9v39J0xwqP&s=10",
        origins: "Marks the winter rabi harvest and commemorates the founding of the Khalsa Panth by Guru Gobind Singh Ji in 1699.",
        culturalSignificance: "Farmers celebrate bountiful golden crops, perform energetic Bhangra and Giddha dances, and attend grand Nagar Kirtan processions.",
        traditionalFood: "Kada Prasad, Makki di Roti, Lassi, Kheer, Chole Bhature.",
        traditionalClothing: "Bright yellow and orange Turbans (Pagri), Kurta-Chadhar, and embroidered Phulkari dupattas.",
        musicAndDance: "Bhangra, Giddha, Dhol solos, and Gatka martial arts.",
        interestingFacts: [
          "Gatka martial artists display incredible balance with wooden sticks and curved swords."
        ]
      }
    ],
    crafts: [
      {
        id: "craft-phulkari",
        name: "Phulkari Silk Embroidery",
        category: "Embroidery",
        region: "Patiala & Amritsar",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaU37p6cAqhpVufW7VyYwdKN8uITmN2c3m5DR_pvoq7nCWul8xevm5qmm2&s=10",
        materials: [
          "Khaddar (Coarse homespun cotton cloth)",
          "Pat (Untwisted lustrous floss silk thread)",
          "Darning needles"
        ],
        techniques: [
          "Darning stitch worked entirely from the reverse side of fabric",
          "Bagh (Garden) full coverage geometric style"
        ],
        culturalSignificance: "Grandmothers historically embroidered Phulkari shawls for their granddaughters upon birth, presenting them as sacred wedding heirlooms.",
        processSteps: [
          "Weave coarse handspun khaddar in rustic terracotta or indigo shades.",
          "Count warp and weft threads manually without drawing any stencil markings.",
          "Embroider dense geometric triangles, peacock feathers, and marigold gardens with untwisted silk.",
          "Finished work reflects light dynamically like stained glass."
        ],
        challengesFaced: "Commercial synthetic printed fabrics imitating hand-embroidered Phulkari."
      }
    ],
    artisans: [
      {
        id: "art-harjeet-kaur",
        name: "Harjeet Kaur",
        craftType: "Master Phulkari Artisan",
        location: "Patiala, Punjab",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fXGXGKf7rLTNIC9L7AZrJRLgvUqN160xRjw73wjYuEHXUznMXI-Pyoq9&s=10",
        quote: "Each stitch on the khaddar is a blessing for the daughter who will wear it.",
        story: "Has trained over 300 rural women in Patiala to revive ancient counted-thread Bagh Phulkari patterns without synthetic stencils.",
        yearsOfExperience: "38 Years",
        awards: [
          "National Merit Certificate for Handicrafts",
          "State Artisan Award"
        ]
      }
    ]
  },
  {
    id: "gujarat",
    name: "Gujarat",
    nativeName: "ગુજરાત",
    capital: "Gandhinagar",
    zone: "West",
    tagline: "Land of the White Rann, Rani ki Vav Stepwell, Patola Double Ikat & Garba Ecstasy",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAEXmHQh8e0GeINhGOIM4ZyTw3Q56I2y8qvYQIfukPcNIr1gpERhTIl4&s=10",
    languages: {
      nativeLanguage: "Gujarati (ગુજરાતી)",
      dialects: [
        "Kathiyawadi",
        "Surati",
        "Charotari",
        "Kutchi"
      ],
      phrases: [
        {
          nativeWord: "Jai Shree Krishna / Kem Cho?",
          nativeScript: "કેમ છો?",
          englishMeaning: "How are you? / May divine peace and joy be with you",
          phonetics: "KEM CHHO",
          exampleSentence: "Kem cho? Badha maja ma chho ne? (How are you? Is everyone having fun?)"
        },
        {
          nativeWord: "Maja Ma",
          nativeScript: "મજા માં",
          englishMeaning: "I am totally joyful, prosperous, and fine!",
          phonetics: "MUH-jaa MAA",
          exampleSentence: "Aapna aashirwaad thi badhu maja ma chhe. (With your blessings, everything is wonderful.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Garba & Dayro Folk Ballads",
        nativeScript: "ગરબા અને ડાયરો",
        culturalSignificance: "Circular devotional folk dances honoring Goddess Amba, symbolizing the eternal cycle of time and cosmic life.",
        whenPerformed: "Navratri festival for 9 continuous nights and village Dayro gatherings.",
        instruments: [
          "Dhol",
          "Manjira",
          "Harmonium",
          "Tabla",
          "Dholak"
        ],
        audioScale: "Garba 3-Clap (Tran Taali) Rhythm"
      }
    ],
    recipes: [
      {
        dishName: "Gujarati Undhiyu & Puri",
        nativeName: "ઊંધિયું અને પૂરી",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFCCYNZP7ky5kiHRQc10JXG8X2Szl7-PoozfUhOr4etL_7q_H_LXJtTJZ&s=10",
        courseType: "Winter Festival Stew",
        dietary: "Vegetarian",
        prepTime: "60 mins",
        ingredients: [
          "Surti Papdi beans",
          "Purple yam (Kand)",
          "Small eggplants",
          "Raw banana",
          "Fenugreek dumplings (Muthiya)",
          "Green garlic & coconut"
        ],
        steps: [
          "Stuff small eggplants and potatoes with freshly grated coconut, green garlic, and coriander spice paste.",
          "Fry fenugreek and gram flour dumplings (Muthiyas) until crisp.",
          "Layer vegetables in earthen pots and slow-cook in peanut oil with ajwain.",
          "Traditionally cooked upside down (Undhu) underground over glowing embers."
        ],
        culturalBackground: "Celebrated during Uttarayan (Kite Festival) as a tribute to winter harvest crops."
      }
    ],
    traditions: [
      {
        title: "Navratri Garba: 9 Nights of Devotion",
        category: "Community Dance",
        description: "World's longest dance festival where millions dance in concentric circles around an earthen lamp (Garbha Deep).",
        significance: "Celebrates the victory of the Mother Goddess over inner darkness.",
        image: "https://images.hindustantimes.com/img/2022/09/26/1600x900/20220924-KPT-SK-MN-54-0_1664180820199_1664180820199_1664180981399_1664180981399.JPG"
      }
    ],
    childhoodGames: [
      {
        gameName: "Bhammardo (Wooden Lattoo Top)",
        nativeName: "ભમરડો",
        howItIsPlayed: "Winding a cotton cord around a pointed wooden spinning top and whipping it to spin steadily on smooth stone surfaces.",
        numberOfPlayers: "2 to 6 players",
        historicalOrigin: "Centuries-old folk craft and coordination game.",
        skillsDeveloped: [
          "Hand dexterity",
          "Precision",
          "Patience"
        ]
      }
    ],
    monuments: [
      {
        id: "mon-rani-ki-vav",
        name: "Rani ki Vav (The Queen’s Stepwell)",
        location: "Patan, Gujarat",
        historicalPeriod: "1063 CE (Solanki Dynasty)",
        builtBy: "Queen Udayamati in memory of King Bhima I",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRKk9RFxXmtdvDOw-4CAcquLG4uluiVMK4T5f3igvf_PBYdlJKQ04Ygay&s=10",
        historicalBackground: "Designed as an inverted subterranean temple worshipping the sacred sanctity of water in drought-prone western India.",
        architecturalSignificance: "Seven levels of stepped stairs decorated with over 500 principal sculptures and 1,000 minor mythological panels carved in Maru-Gurjara style.",
        culturalImportance: "UNESCO World Heritage site demonstrating ancient water engineering, filtration, and sacred underground art.",
        interestingFacts: [
          "Features all ten avatars (Dashavatara) of Lord Vishnu, including Lord Buddha and Kalki.",
          "Depicted on the reverse of India’s modern 100-rupee currency note."
        ],
        tags: [
          "UNESCO World Heritage",
          "Subterranean Masterpiece",
          "Maru-Gurjara Art"
        ]
      }
    ],
    festivals: [
      {
        id: "fest-navratri",
        name: "Navratri & International Kite Festival",
        nativeName: "નવરાત્રી મહોત્સવ",
        whenCelebrated: "September / October & January 14 (Uttarayan)",
        whereCelebrated: "Across Gujarat",
        image: "https://www.ravenouslegs.com/uploads/4/2/3/4/42340821/img-0660_1_orig.jpg",
        origins: "Nine sacred nights invoking the cosmic power of Goddess Durga.",
        culturalSignificance: "High-energy dancing with wooden Dandiya sticks, mirror-work chaniya cholis, and midnight feasts of jalebi and fafda.",
        traditionalFood: "Fafda Jalebi, Undhiyu, Sev Khamani, Handvo.",
        traditionalClothing: "Embroidered Chaniya Choli with mirror-work and Kediyu kurtas.",
        musicAndDance: "Dandiya Raas, Garba, Sanedo, and Shenai.",
        interestingFacts: [
          "During Uttarayan, millions take to rooftops in Ahmedabad chanting \"Kai Po Che!\" as colorful kites fill the sky."
        ]
      }
    ],
    crafts: [
      {
        id: "craft-patan-patola",
        name: "Patan Patola Double Ikat Weaving",
        category: "Weaving",
        region: "Patan, Gujarat",
        image: "https://kapaaskatha.in/cdn/shop/files/red-blue-handloom-silk-double-ikat-dupatta-05.jpg?v=1734087937&width=1024",
        materials: [
          "Pure Mulberry Silk",
          "Natural dyes (Indigo, Turmeric, Madder, Pomegranate skin)"
        ],
        techniques: [
          "Double Ikat warp and weft tie-dye mathematics",
          "Hand-knotting on rosewood slanted handlooms"
        ],
        culturalSignificance: "So precise and colorfast that a Gujarati proverb declares: \"The cloth may tear with age, but the Patola color will never fade.\"",
        processSteps: [
          "Tie and dye both warp and weft threads before weaving using complex geometry.",
          "Align dyed threads on handloom with needle point precision.",
          "A single saree takes 6 months to 1 year of work by 3 master weavers."
        ],
        challengesFaced: "Only four families in Patan (Salvi family) still practice this authentic centuries-old craft."
      }
    ],
    artisans: [
      {
        id: "art-salvi-family",
        name: "Master Rohit Salvi (Patolawala)",
        craftType: "Patan Patola Double Ikat Master",
        location: "Patan, Gujarat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zNYF1DTl3EZ7M9Q6q3rOvr1VKEr1AJNsPgYsINyyDYH1FC0P0v_RtPE&s=10",
        quote: "In Double Ikat, we do not weave patterns on cloth; we calculate the mathematics of threads before weaving even begins.",
        story: "Custodian of the 900-year-old double ikat lineage invited by King Kumarapala in the 12th century.",
        yearsOfExperience: "40+ Years",
        awards: [
          "Padma Shri 2023",
          "National Master Craftsperson Award"
        ]
      }
    ]
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    nativeName: "ఆంధ్రప్రదేశ్",
    capital: "Amaravati",
    zone: "South",
    tagline: "The Rice Bowl of India",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMu9a9l36dpTgV62Ckd-f3qzalov9OPUO_IPILNGOPDJ1lVkByjbZ310JT&s=10",
    languages: {
      nativeLanguage: "Telugu",
      dialects: [
        "Rayalaseema",
        "Kosta",
        "Telangana-adjacent"
      ],
      phrases: [
        {
          nativeWord: "Namaskaram",
          nativeScript: "నమస్కారం",
          englishMeaning: "Greetings / Hello",
          phonetics: "Nuh-mus-kar-um",
          exampleSentence: "Andariki Namaskaram, elaa unnaru?"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Burra Katha",
        nativeScript: "బుర్రకథ",
        culturalSignificance: "Storytelling genre in Andhra Pradesh village traditions depicting mythology and moral stories.",
        whenPerformed: "Festivals and community gatherings",
        instruments: [
          "Tambura",
          "Dakki"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Gongura Pachadi",
        nativeName: "గోంగుర పచ్చడి",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdy54TUheNVuLedBdV4Jff4w5foY2i8vDJ5QQB_CWpQ-Jw1vgrkVJGG8&s=10",
        courseType: "Side Dish",
        dietary: "Vegetarian",
        prepTime: "25 mins",
        ingredients: [
          "Roselle leaves (Gongura)",
          "Red chillies",
          "Garlic",
          "Coriander seeds",
          "Mustard seeds"
        ],
        steps: [
          "Sauté gongura leaves until soft.",
          "Roast chillies and spices in oil.",
          "Grind leaves and spices into a coarse paste and temper with mustard seeds."
        ],
        culturalBackground: "Known as the Andhra Matha (Mother of Andhra cuisine), Gongura is iconic to the state's fiery culinary identity."
      }
    ],
    traditions: [
      {
        title: "Kalamkari Art",
        category: "Handicraft",
        description: "Ancient hand-painted or block-printed cotton textile art using natural dyes.",
        significance: "Historically used to depict mythological tales on temple hangings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO1-xs11vtNTfWm5b0lf4PH2pi0Om-Q0V1z3FsiJxnzDBeLaHS4Geqam3&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Vamana Guntalu",
        nativeName: "వామన గుంటలు",
        howItIsPlayed: "Played on a wooden board with fourteen pits, moving seeds counter-clockwise to capture opponent seeds.",
        numberOfPlayers: "2",
        historicalOrigin: "Traditional Mancala variant dating back centuries across South India.",
        skillsDeveloped: [
          "Counting",
          "Strategic planning",
          "Math skills"
        ]
      }
    ],
    monuments: [
      {
        id: "lepakshi-temple",
        name: "Veerabhadra Temple Lepakshi",
        location: "Lepakshi, Anantapur district",
        historicalPeriod: "16th Century",
        builtBy: "Virupanna and Veeranna (Vijayanagara Empire)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEOchk6XHthSj8tfGZozzfWD80M2TGH2TSaXmazjNWaZwAm6KlfQYyDA&s=10",

        historicalBackground: "Built during the Vijayanagara empire, famous for its hanging pillar and monolith Nandi.",
        architecturalSignificance: "Exquisite Vijayanagara architectural style with intricate stone carvings and ceiling mural paintings.",
        culturalImportance: "Major Shaivite pilgrimage and cultural heritage center.",
        interestingFacts: [
          "Features a famous hanging pillar that barely touches the ground.",
          "Houses one of the largest monolithic Nandi bull statues in India."
        ],
        tags: [
          "Vijayanagara",
          "Temple",
          "Heritage"
        ]
      }
    ],
    festivals: [
      {
        id: "sankranti-ap",
        name: "Makara Sankranti",
        nativeName: "మకర సంక్రాంతి",
        whenCelebrated: "January",
        whereCelebrated: "Statewide",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9d-sqa2JxvMrsjj4cCCSmOEGwW-o9ggMFgEBV0qZ7g&s=10",

        origins: "Harvest festival celebrating the sun god's transition into Capricorn.",
        culturalSignificance: "Marks harvest, prosperity, and family reunions with Rangoli patterns.",
        traditionalFood: "Ariselu, Pulhora, Bobbatlu",
        traditionalClothing: "Silk Dhotis and Handloom Sarees",
        musicAndDance: "Haridasu devotional singing and Gobbi dance",
        interestingFacts: [
          "Villages host vibrant traditional sports and colorful kite flying competitions."
        ]
      }
    ],
    crafts: [
      {
        id: "kondapalli-toys",
        name: "Kondapalli Toys",
        category: "Wooden Craft",
        region: "Kondapalli, Vijayawada",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgz-IB7DX8D9uktdjJkXN_5yPf5dZv6dkOuh29hu85g&s=10",
        materials: [
          "Tella Poniki wood",
          "Végétal dyes",
          "Oil paints"
        ],
        techniques: [
          "Hand carving",
          "Chiseling",
          "Natural coloring"
        ],
        culturalSignificance: "400-year-old traditional craft depicting village life, animals, and deities.",
        processSteps: [
          "Wood seasoning",
          "Rough carving",
          "Detailed chiseling",
          "Assembling with glue",
          "Painting"
        ],
        challengesFaced: "Competition from cheap plastic toys and scarcity of soft Tella Poniki wood."
      }
    ],
    artisans: [
      {
        id: "venkateswara-rao-kondapalli",
        name: "K. Venkateswara Rao",
        craftType: "Kondapalli Toy Making",
        location: "Kondapalli, NTR District",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-t5QDtAzImjF7Z1OUb6V1y3a9kyGFTQoqdGocKGPnHcHjBuA-3gJ8nGZ&s=10",
        quote: "Every piece of Poniki wood holds a story of our ancestors waiting to be carved out.",
        story: "Inherited the art form from his grandfather and has preserved traditional natural dye techniques for over 40 years.",
        yearsOfExperience: "42 years",
        awards: [
          "National Handicrafts Award",
          "State Master Craftsman Award"
        ]
      }
    ]
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    nativeName: "अरुणाचल प्रदेश",
    capital: "Itanagar",
    zone: "North-East",
    tagline: "Land of the Dawn-Lit Mountains",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJefTOWIj7vU6GZ6oJ9ugMy6Xe3gN392fUAgApC8Z6MnXloO4BwYTZhKyn&s=10",
    languages: {
      nativeLanguage: "Nishi",
      dialects: [
        "Monpa",
        "Adi",
        "Apatani",
        "Mishmi"
      ],
      phrases: [
        {
          nativeWord: "Kapa",
          nativeScript: "कपा",
          englishMeaning: "Hello / Greetings (Nishi)",
          phonetics: "Kah-pah",
          exampleSentence: "Kapa, nolu ho-ying?"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Ja-Jin-Ja",
        nativeScript: "जा-जिन-जा",
        culturalSignificance: "Traditional Adi community song sung during social gatherings to invoke blessings.",
        whenPerformed: "Marriages and Solung festival",
        instruments: [
          "Tapu",
          "Drums",
          "Cymbals"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Zan",
        nativeName: "ज़ान",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpm7_w5k8IDYIICIhtYzfOXg1p0SQJvJKre8J1ChW1p_4lM711xHFMTSn&s=10",
        courseType: "Main Course",
        dietary: "Heirloom",
        prepTime: "20 mins",
        ingredients: [
          "Millet flour",
          "Water",
          "Boiled vegetables",
          "Fermented cheese (Chhurpi)"
        ],
        steps: [
          "Boil water in a pot.",
          "Slowly add millet flour while stirring continuously until thick porridge consistency is achieved.",
          "Serve warm with seasoned fermented vegetables or cheese."
        ],
        culturalBackground: "A staple dish among the Monpa tribe, essential for endurance in cold high-altitude mountain climates."
      }
    ],
    traditions: [
      {
        title: "Apatani Tribal Weaving",
        category: "Textile",
        description: "Loin-loom textile weaving done traditionally by women using geometric designs.",
        significance: "Reflects tribal identity and marital status through unique color patterns.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTfFccW-7A68RYcrb6Bv5JV_BAENvPst-Np2C8t5OlU5iwImb7RL4zX0&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Majong",
        nativeName: "माजोंग",
        howItIsPlayed: "Indigenous wrestling variation where balance and grip strength are tested on soft terrain.",
        numberOfPlayers: "2",
        historicalOrigin: "Ancient indigenous warrior fitness ritual of northeastern tribes.",
        skillsDeveloped: [
          "Physical endurance",
          "Balance",
          "Agility"
        ]
      }
    ],
    monuments: [
      {
        id: "tawang-monastery",
        name: "Tawang Monastery",
        location: "Tawang",
        historicalPeriod: "17th Century (1680-1681)",
        builtBy: "Merak Lama Lodre Gyatso",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3JdyLSZppHkLg2x--NHLA769vM4gCDb6IEOQC-bxxToM5X9F8atSYbyi&s=10",
        historicalBackground: "The largest monastery in India and second largest in the world, belonging to the Gelug school of Mahayana Buddhism.",
        architecturalSignificance: "Fortress-like three-story building constructed on a hilltop with a 28-foot high golden Buddha statue.",
        culturalImportance: "Spiritual center for Mahayana Buddhists across the Eastern Himalayas.",
        interestingFacts: [
          "It houses a priceless library with thousands of ancient Buddhist manuscripts.",
          "Known in Tibetan as 'Gaden Namgyal Lhatse', meaning celestial paradise."
        ],
        tags: [
          "Buddhism",
          "Monastery",
          "Himalayas"
        ]
      }
    ],
    festivals: [
      {
        id: "losar-arunachal",
        name: "Losar",
        nativeName: "लोसार",
        whenCelebrated: "February / March",
        whereCelebrated: "Tawang and West Kameng",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsUliutuPdFsDoZir111adMe7g33g36I8IKFUku5khKAcl5-fNZW3Gkg&s=10",
        origins: "Monpa tribal Tibetan New Year festival.",
        culturalSignificance: "Cleansing the old year's evil spirits and welcoming health, prosperity, and peace.",
        traditionalFood: "Kapse (fried snack), Butter tea",
        traditionalClothing: "Chuba (Traditional woolen robe)",
        musicAndDance: "Cham masked dance performed by monks",
        interestingFacts: [
          "Preparations start weeks in advance by cleaning homes and painting auspicious symbols."
        ]
      }
    ],
    crafts: [
      {
        id: "monpa-wooden-masks",
        name: "Monpa Wooden Mask Making",
        category: "Woodwork",
        region: "Tawang & Bomdila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGiiSae4yPnwpxUP33mUlwgaEOS0cJkCQnJYohePjuZEXEHE4KsJGQbcA&s=10",
        materials: [
          "Local softwood",
          "Natural pigments",
          "Varnish"
        ],
        techniques: [
          "Hand carving",
          "Natural pigment painting"
        ],
        culturalSignificance: "Used in monastic Cham dances representing mythological gods and demons.",
        processSteps: [
          "Wood selection",
          "Outline carving",
          "Chiseling facial features",
          "Drying",
          "Color application"
        ],
        challengesFaced: "High skill barrier and declining interest among younger generations."
      }
    ],
    artisans: [
      {
        id: "dorjee-norbu",
        name: "Dorjee Norbu Monpa",
        craftType: "Mask Carver",
        location: "Tawang",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoTgMor6GwssOdCb6gpbBj74r4up-k8gDalhQaq7oQPHbABfWXBqEyQDp&s=10",
        quote: "Every mask gives voice to spiritual guardians of the valley.",
        story: "Learned mask making in monastery workshops and has dedicated 35 years to preserving Monpa sacred masks.",
        yearsOfExperience: "35 years",
        awards: [
          "State Tribal Artisan Recognition"
        ]
      }
    ]
  },
  {
    id: "assam",
    name: "Assam",
    nativeName: "অসম",
    capital: "Dispur",
    zone: "North-East",
    tagline: "Land of the Red River and Blue Hills",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGSdbXl25ln5pOLmu8yZAn53q8v6HvqbLYP-uyOIJf5CuGFJZV7pZEgf2&s=10",
    languages: {
      nativeLanguage: "Assamese",
      dialects: [
        "Kamrupi",
        "Goalpariya",
        "Upper Assamese"
      ],
      phrases: [
        {
          nativeWord: "Nomoskar",
          nativeScript: "নমস্কাৰ",
          englishMeaning: "Greetings / Hello",
          phonetics: "No-mos-kar",
          exampleSentence: "Kene ase? Nomoskar!"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Bihu Geet",
        nativeScript: "বিহু গীত",
        culturalSignificance: "Expresses joy, nature's rebirth, and romantic themes during springtime.",
        whenPerformed: "Rongali Bihu in April",
        instruments: [
          "Dhol",
          "Pepa",
          "Gogona",
          "Taka"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Masor Tenga",
        nativeName: "মাছৰ টেঙা",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltZMMWCJwJPGjAqDwmu7XmZ-zJmK76PLpmUdrvZpkgYjw3OPsoBpy9OM&s=10",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "30 mins",
        ingredients: [
          "Freshwater fish",
          "Elephant apple (Ou Tenga) or Tomatoes",
          "Mustard oil",
          "Fenugreek seeds",
          "Turmeric"
        ],
        steps: [
          "Lightly fry seasoned fish in mustard oil.",
          "Prepare light tangy broth with tomatoes or elephant apple.",
          "Simmer fish in broth until subtle sour flavors blend into the gravy."
        ],
        culturalBackground: "Signature Assamese light sour curry essential to summer meals."
      }
    ],
    traditions: [
      {
        title: "Muga Silk Weaving",
        category: "Textile",
        description: "Weaving naturally golden-tinted Muga silk unique to Assam.",
        significance: "GI-tagged silk worn during festivals and royal ceremonies since Ahom dynasty.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3LpcgJX6BUxhdvqc1-WgtDUVcN9Kn14SOpjs1bNTNw&s"
      }
    ],
    childhoodGames: [
      {
        gameName: "Tang-Guti",
        nativeName: "টাং-গুটি",
        howItIsPlayed: "Similar to Tip-Cat; a small wooden stick (guti) is struck into air using a longer stick (tang).",
        numberOfPlayers: "2 or more",
        historicalOrigin: "Rural traditional outdoor game played across Assamese plains.",
        skillsDeveloped: [
          "Hand-eye coordination",
          "Precision",
          "Physical stamina"
        ]
      }
    ],
    monuments: [
      {
        id: "rang-ghar",
        name: "Rang Ghar",
        location: "Sivasagar",
        historicalPeriod: "18th Century (1746)",
        builtBy: "Pramatta Singha (Ahom Dynasty)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfPTQiD0R9cksl8pZeYyr9QpX4_I5ytBrGcYX-DfW0jzEt-UdIBsAAEM&s=10",
        historicalBackground: "Two-story royal amphitheater used by Ahom kings to watch traditional sports and buffalo fights.",
        architecturalSignificance: "Roof shaped like an inverted Ahom royal boat, built with indigenous bricks and sticky rice mortar.",
        culturalImportance: "One of Asia's oldest surviving amphitheaters, representing Ahom architectural genius.",
        interestingFacts: [
          "Mortar was made from rice, duck eggs, and fish paste.",
          "Served as royal pavilion during Rongali Bihu."
        ],
        tags: [
          "Ahom",
          "Heritage",
          "Amphitheater"
        ]
      }
    ],
    festivals: [
      {
        id: "bohag-bihu",
        name: "Bohag Bihu (Rongali Bihu)",
        nativeName: "ব'হাগ বিহু",
        whenCelebrated: "Mid-April",
        whereCelebrated: "Statewide",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3bsd8GEdyEA7LHjRGYlZ3yjVyOQO6j2nj0gxZT3Jrn-8jnXqoO4UPnk&s=10",
        origins: "Agricultural spring harvest festival marking the Assamese New Year.",
        culturalSignificance: "Celebrates life, romance, and agricultural renewal across communities.",
        traditionalFood: "Pitha, Laru, Jolpan with curd",
        traditionalClothing: "Muga Silk Mekhela Chador",
        musicAndDance: "Energetic Bihu Dance with Dhol and Pepa",
        interestingFacts: [
          "First day is dedicated to cattle (Goru Bihu) where cows are washed and honored."
        ]
      }
    ],
    crafts: [
      {
        id: "sarthebari-bell-metal",
        name: "Sarthebari Bell Metal Craft",
        category: "Metalwork",
        region: "Sarthebari, Barpeta",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTNy7RmdXpcBpS8MahRRIr0otJBvo7Ul1H1aqny-wG-oRuF5Q2YJJCj4&s=10",
        materials: [
          "Copper",
          "Tin",
          "Charcoal"
        ],
        techniques: [
          "Hand beating",
          "Molding",
          "Polishing"
        ],
        culturalSignificance: "Traditional utensils like Kahi (plate) and Bati (bowl) integral to Assamese hospitality.",
        processSteps: [
          "Melting alloy",
          "Casting into ingot",
          "Repeated heating and hammering",
          "Scraping and polishing"
        ],
        challengesFaced: "Rising raw material costs and competition from mass-manufactured steel."
      }
    ],
    artisans: [
      {
        id: "hemen-bholey",
        name: "Hemen Das",
        craftType: "Bell Metal Artisan",
        location: "Sarthebari",
        image: "https://upload.wikimedia.org/wikipedia/as/d/d9/Hemen_Das_Director.jpg?utm_source=as.wikipedia.org&utm_campaign=index&utm_content=original",
        quote: "The rhythmic sound of hammer on bell metal is the heartbeat of Sarthebari.",
        story: "Carrying forward five generations of bell metal crafting in his family atelier.",
        yearsOfExperience: "30 years",
        awards: [
          "State Craftsperson Award"
        ]
      }
    ]
  },
  {
    id: "bihar",
    name: "Bihar",
    nativeName: "बिहार",
    capital: "Patna",
    zone: "East",
    tagline: "Land of Enlightenment",
    heroImage: "https://cdn.britannica.com/12/94612-050-B4EEB84A/temple-Buddhist-Mahabodhi-Bihar-India-Bodh-Gaya.jpg?w=400&h=300&c=crop",
    languages: {
      nativeLanguage: "Hindi",
      dialects: [
        "Bhojpuri",
        "Maithili",
        "Magahi"
      ],
      phrases: [
        {
          nativeWord: "Pranam",
          nativeScript: "प्रणाम",
          englishMeaning: "Respectful Greeting",
          phonetics: "Pruh-naam",
          exampleSentence: "Kaisan bani? Sab Pranam!"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Videshiya",
        nativeScript: "विदेशिया",
        culturalSignificance: "Created by Bhikhari Thakur, deals with themes of migration, separation, and social reform.",
        whenPerformed: "Folk theatre and evening village gatherings",
        instruments: [
          "Dholak",
          "Harmonium",
          "Jhanjh"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Litti Chokha",
        nativeName: "लिट्टी चोखा",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkjV9G8tYCqvLHgM2l12ilUH0ttTXlBTcLcA4GKcP5tZwyQcvzuaja01e&s=10",
        courseType: "Main Course",
        dietary: "Vegetarian",
        prepTime: "45 mins",
        ingredients: [
          "Whole wheat flour",
          "Sattu (roasted gram flour)",
          "Mustard oil",
          "Nigella seeds",
          "Brinjal",
          "Tomatoes"
        ],
        steps: [
          "Stuff spiced sattu mix inside wheat dough balls.",
          "Roast dough balls over cow-dung fire or charcoal until crisp.",
          "Dunk in ghee and serve with mashed roasted brinjal-tomato chokha."
        ],
        culturalBackground: "Ancient food eaten by farmers and warriors due to high nutritional value and long shelf life."
      }
    ],
    traditions: [
      {
        title: "Madhubani Painting",
        category: "Visual Art",
        description: "Traditional painting using twigs, fingers, and natural dyes with bold line work.",
        significance: "Practiced by women of Mithila region to decorate mud walls for spiritual occasions.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfOhnrMtlq4-ng-FFY2w7fikaN8LThDexMYoCITtNPZHj151rwJZco4OD&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Gilli Danda",
        nativeName: "गिल्ली डंडा",
        howItIsPlayed: "A small wooden peg (gilli) is flicked into air using a longer wooden stick (danda) and hit as far as possible.",
        numberOfPlayers: "2 or more",
        historicalOrigin: "Ancient Indian street game originating over 2500 years ago.",
        skillsDeveloped: [
          "Hand-eye coordination",
          "Precision striking",
          "Team spirit"
        ]
      }
    ],
    monuments: [
      {
        id: "mahabodhi-temple",
        name: "Mahabodhi Temple Complex",
        location: "Bodh Gaya",
        historicalPeriod: "3rd Century BCE (Rebuilt 5th-6th Century CE)",
        builtBy: "Emperor Ashoka",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUP5oClLiSv8D-csaEreciB0fac9i8Fwqqyxqe5dIV-NCghDzUunYb70UU&s=10",
        historicalBackground: "UNESCO World Heritage Site marking the spot where Gautama Buddha attained enlightenment.",
        architecturalSignificance: "One of the earliest brick structures surviving in India, exemplifying classical Indian temple architecture.",
        culturalImportance: "Global epicenter for Buddhist pilgrimage.",
        interestingFacts: [
          "Houses the descendant of the original sacred Bodhi tree.",
          "The central spire rises to 55 meters height."
        ],
        tags: [
          "UNESCO",
          "Buddhism",
          "Heritage"
        ]
      }
    ],
    festivals: [
      {
        id: "chhath-puja",
        name: "Chhath Puja",
        nativeName: "छठ पूजा",
        whenCelebrated: "October / November",
        whereCelebrated: "Statewide along riverbanks",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-c12SBVe6rxNjBINuXHnlOCRyN_BwFbwmVOxF8OlT-udrHsxd9vtBco&s=10",
        origins: "Vedic festival dedicated to Surya (Sun God) and Chhathi Maiya.",
        culturalSignificance: "Promotes purity, extreme austerity, gratitude to nature, and non-priestly community devotion.",
        traditionalFood: "Thekua, Rasiya (Jaggery kheer)",
        traditionalClothing: "Unstitched Cotton Saree / Dhoti",
        musicAndDance: "Devotional Chhath folk songs sung by women in groups",
        interestingFacts: [
          "Involves a 36-hour strict fast without even drinking water (Nirjala)."
        ]
      }
    ],
    crafts: [
      {
        id: "sikki-grass-craft",
        name: "Sikki Grass Craft",
        category: "Weaving",
        region: "Mithila region",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltuYz7wSBWkniQ2w2R1EQJ26aGtDpGC7BMUN0YUF1Jw5baD75MwYM4wOV&s=10",
        materials: [
          "Golden Sikki grass",
          "Natural dyes",
          "Takua (needle)"
        ],
        techniques: [
          "Coiling",
          "Dyeing",
          "Hand weaving"
        ],
        culturalSignificance: "Sikki items are given as traditional wedding gifts symbolic of good luck.",
        processSteps: [
          "Harvesting grass",
          "Drying in sun",
          "Boiling with colors",
          "Weaving into boxes and figures"
        ],
        challengesFaced: "Disappearing wetland habitats of wild Sikki grass."
      }
    ],
    artisans: [
      {
        id: "bua-devi",
        name: "Bua Devi",
        craftType: "Madhubani Painting",
        location: "Jitwarpur, Madhubani",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMpH_Bbc4mzjx7ATKeRh1gKPrLEewENGwLdhnN8xzcA&s=10",
        quote: "Our brush carries lines that connect ancient myths with modern life.",
        story: "Pioneer Madhubani artist who brought wall paintings on canvas to international prominence.",
        yearsOfExperience: "50+ years",
        awards: [
          "Padma Shri",
          "National Award"
        ]
      }
    ]
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    nativeName: "छत्तीसगढ़",
    capital: "Raipur",
    zone: "Central",
    tagline: "Full of Surprises",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEtUvtvJvFWY7TWnECSfg6_z7Pww8y1odnIEH9rswPyaWvlf0wbkG7XY&s=10",
    languages: {
      nativeLanguage: "Chhattisgarhi",
      dialects: [
        "Surgujia",
        "Halbi",
        "Gondi"
      ],
      phrases: [
        {
          nativeWord: "Jai Johar",
          nativeScript: "जय जोहार",
          englishMeaning: "Salutations to nature and all beings",
          phonetics: "Jai Jo-haar",
          exampleSentence: "Sabmo la Jai Johar!"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Pandavani",
        nativeScript: "पंडवानी",
        culturalSignificance: "Lyrical ballad performance depicting stories from the epic Mahabharata with folk music.",
        whenPerformed: "Community festivals and cultural nights",
        instruments: [
          "Ektara",
          "Manjira"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Chhela Roti",
        nativeName: "चीला रोटी",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_G1EG6svaL_MjLAY5A4yhAu_SrK2SQdKIhxOlJw3ag&s=10",
        courseType: "Breakfast",
        dietary: "Vegetarian",
        prepTime: "15 mins",
        ingredients: [
          "Rice flour",
          "Water",
          "Cumin seeds",
          "Green chillies",
          "Salt",
          "Oil"
        ],
        steps: [
          "Make smooth watery batter with rice flour, spices, and water.",
          "Pour over hot skillet to make thin crepe.",
          "Cook until golden crispy and serve with tomato chutney."
        ],
        culturalBackground: "A staple savory breakfast across rice-rich Chhattisgarhi households."
      }
    ],
    traditions: [
      {
        title: "Dhokra Metal Casting",
        category: "Craft",
        description: "Non-ferrous metal casting using lost-wax casting technique.",
        significance: "4,000-year-old continuous metallurgy tradition practiced by tribal artisans.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvE43FucyLFs8PBSdn5qq7Mwx84UXjYjVmEWa4Kwl5D-ni6wNA4d_MX3x&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Bati (Kanchha)",
        nativeName: "बाटी",
        howItIsPlayed: "Marbles game played by aiming and striking target glass marbles inside a drawn circle.",
        numberOfPlayers: "2 to 6",
        historicalOrigin: "Ancient rural game popular in central Indian forest hamlets.",
        skillsDeveloped: [
          "Aim precision",
          "Hand-eye control",
          "Focus"
        ]
      }
    ],
    monuments: [
      {
        id: "bhoramdeo-temple",
        name: "Bhoramdeo Temple",
        location: "Chauragram, Kabirdham district",
        historicalPeriod: "11th Century (1089 CE)",
        builtBy: "King Gopal Dev (Nagavanshi Dynasty)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-G0CxkjaegCU4aB3UECtoh47LsDjwbrlWK0_KbnMG-xNgUsBVJu_xG32&s=10",
        historicalBackground: "Dedicated to Lord Shiva, known as the 'Khajuraho of Chhattisgarh'.",
        architecturalSignificance: "Nagara style architecture adorned with detailed erotic and spiritual stone sculptures.",
        culturalImportance: "Key historical temple nestled in the Maikal hills.",
        interestingFacts: [
          "Set against the backdrop of dense green forests and hills.",
          "Hosts the annual Bhoramdeo Mahotsav in March."
        ],
        tags: [
          "Nagavanshi",
          "Temple",
          "Heritage"
        ]
      }
    ],
    festivals: [
      {
        id: "bastar-dussehra",
        name: "Bastar Dussehra",
        nativeName: "बस्तर दशहरा",
        whenCelebrated: "September / October (75 days)",
        whereCelebrated: "Jagdalpur, Bastar",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuvVuIpk8cgfkMHi_mfJhShfOn8M8HxeolsYTeojf9w&s=10",
        origins: "Initiated in 15th century by King Purushottam Deo of Katiya dynasty.",
        culturalSignificance: "World's longest festival dedicated to Goddess Danteshwari, involving all local tribal clans.",
        traditionalFood: "Mahuwa drink, Poha, Pej",
        traditionalClothing: "Tribal traditional attire with feather headgear",
        musicAndDance: "Dandari dance and tribal drum drumming",
        interestingFacts: [
          "Unlike standard Dussehra, it does not celebrate Rama's victory over Ravana but honors local deity."
        ]
      }
    ],
    crafts: [
      {
        id: "bastar-iron-craft",
        name: "Bastar Iron Craft (Loha Shilp)",
        category: "Metalwork",
        region: "Bastar region",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfABZXnpmFO5YltZLj3rj4jO0ma668KY90XkZhxQ1Srd7G9zGS5RnT7vB&s=10",
        materials: [
          "Wrought iron",
          "Scrap metal",
          "Charcoal fire"
        ],
        techniques: [
          "Forging",
          "Hammering",
          "Hand shaping without molds"
        ],
        culturalSignificance: "Crafted by the Agaria tribe, historically used to make deity idols and farming tools.",
        processSteps: [
          "Heating scrap metal",
          "Beating hot iron with heavy hammers",
          "Joining pieces with rivets",
          "Finishing with wax coating"
        ],
        challengesFaced: "Hard physical labor and fluctuating scrap iron prices."
      }
    ],
    artisans: [
      {
        id: "tijan-bai",
        name: "Teejan Bai",
        craftType: "Pandavani Musician / Performer",
        location: "Ganiari, Durg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtTlvFdLsrs7P-31UuGCknzpgV0UUqCNxTLyxl2Q9R_kbXMBz6bznxhavX4TX9ORR8BUWoEQlKlSykJhSGScYisnlsWRU21vVozoFaA&s=10",
        quote: "The Tambura is my companion; through it, the Mahabharata lives in my voice.",
        story: "Broke gender barriers to perform the Kapalik style of Pandavani, gaining global acclaim.",
        yearsOfExperience: "50+ years",
        awards: [
          "Padma Vibhushan",
          "Padma Bhushan",
          "Sangeet Natak Akademi Award"
        ]
      }
    ]
  },
  {
    id: "goa",
    name: "Goa",
    nativeName: "गोंय",
    capital: "Panaji",
    zone: "West",
    tagline: "Pearl of the Orient",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRthOYWGM9e8uz_Un3hkAuSRWSaftY-AJAxcKT23pmHsBJErWeEhI-9mow&s=10",
    languages: {
      nativeLanguage: "Konkani",
      dialects: [
        "Bardeskari",
        "Saxtti",
        "Pednekani"
      ],
      phrases: [
        {
          nativeWord: "Deu Boren Karum",
          nativeScript: "देव बरेन करूं",
          englishMeaning: "Thank you (May God do good to you)",
          phonetics: "Dev Bo-ren Ka-room",
          exampleSentence: "Mojo Mog Asso, Deu Boren Karum!"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Mando",
        nativeScript: "मांडो",
        culturalSignificance: "Musical genre reflecting blend of Goan Konkani folk themes and Portuguese musical harmonies.",
        whenPerformed: "Weddings and social celebrations",
        instruments: [
          "Ghumot",
          "Violin",
          "Guitar"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Goan Fish Curry",
        nativeName: "शीत कडी",
        image: "https://static.toiimg.com/thumb/55224612.cms?imgsize=539861&width=800&height=800",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "30 mins",
        ingredients: [
          "Kingfish or Pomfret",
          "Grated coconut",
          "Kashmiri red chillies",
          "Tamarind / Kokum",
          "Coriander seeds"
        ],
        steps: [
          "Grind coconut, chillies, spices, and tamarind into smooth orange paste.",
          "Simmer paste with water and kokum.",
          "Add fish pieces and gently cook until tender."
        ],
        culturalBackground: "Daily staple dish (Xitt Kody) central to Goan cultural culinary identity."
      }
    ],
    traditions: [
      {
        title: "Shigmo Festival Celebrations",
        category: "Folk Festival",
        description: "Spring celebration with vibrant street parades, elaborate floats, and traditional folk dances.",
        significance: "Honors home-coming of warriors and welcoming spring harvest.",
        image: "https://seawatersports.com/images/places/shigmo-festival.jpg"
      }
    ],
    childhoodGames: [
      {
        gameName: "Logori",
        nativeName: "लगोरी",
        howItIsPlayed: "One team tries to knock down a stack of flat stones with a ball and rebuild it while dodging hits from defenders.",
        numberOfPlayers: "6 to 12",
        historicalOrigin: "Traditional street game widely popular across coastal Konkan region.",
        skillsDeveloped: [
          "Aiming",
          "Teamwork",
          "Agility"
        ]
      }
    ],
    monuments: [
      {
        id: "basilica-of-bom-jesus",
        name: "Basilica of Bom Jesus",
        location: "Old Goa",
        historicalPeriod: "16th-17th Century (1605)",
        builtBy: "Portuguese Jesuite Order",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx3vW688BGH3BH8QU7F5IFQO_LIlD_wiMwEDlKy8LlJzBV6Wy8DaJul_-&s=10",
        historicalBackground: "UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier.",
        architecturalSignificance: "Masterpiece of Baroque architecture with unplastered black granite facade and gilded altars.",
        culturalImportance: "Global Catholic pilgrimage destination.",
        interestingFacts: [
          "Contains the preserved body of St. Francis Xavier exposed once every 10 years.",
          "Floor is made of marble inlaid with precious stones."
        ],
        tags: [
          "UNESCO",
          "Baroque",
          "Church"
        ]
      }
    ],
    festivals: [
      {
        id: "goa-carnival",
        name: "Goa Carnival",
        nativeName: "कार्निव्हाल",
        whenCelebrated: "February (before Lent)",
        whereCelebrated: "Panaji, Margao, Vasco",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloMjKYbQn67uOJdQNBG4Y3RfEYqxtZ0QW9QSsSMuRpiuL_xT6Kt7NIOom&s=10",
        origins: "Introduced by Portuguese rule in 18th century.",
        culturalSignificance: "Four days of music, dance, colorful parade led by King Momo before 40 days of Lent.",
        traditionalFood: "Feijoada, Bebinca, Sorpotel",
        traditionalClothing: "Vibrant costumes, masks, bright shirts",
        musicAndDance: "Fado songs, Samba, and local Konkani brass bands",
        interestingFacts: [
          "Led by the fictional King Momo who proclaims 'Eat, drink and be merry'."
        ]
      }
    ],
    crafts: [
      {
        id: "goan-azulejos",
        name: "Azulejos Ceramic Tile Painting",
        category: "Pottery",
        region: "Panaji, Goa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIXs7B4TvYn7_-iue5DRgYdja3SshGaEEzPgaPGb28Ff0TIhqSylbhAs&s=10",
        materials: [
          "Ceramic tiles",
          "Glaze paints",
          "Kiln"
        ],
        techniques: [
          "Hand painting",
          "Glazing",
          "High-temperature firing"
        ],
        culturalSignificance: "Indo-Portuguese heritage craft seen on Goan house names, walls, and churches.",
        processSteps: [
          "Tile preparation",
          "Transferring line sketch",
          "Painting with blue/yellow glazes",
          "Kiln firing"
        ],
        challengesFaced: "High raw material costs and specialized skill training required."
      }
    ],
    artisans: [
      {
        id: "orlando-de-noronha",
        name: "Orlando de Noronha",
        craftType: "Azulejos Tile Artist",
        location: "Panaji",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwzNiHzkKkF_E3pNAMuqSvrRXT4ZwxPA8iUKC8lB4laazKsH-5dmBH9-d&s=10",
        quote: "Azulejos are the blue memories of Goa painted on clay.",
        story: "Trained in Portugal to revive the dying art of hand-painted ceramic tiles in Goa.",
        yearsOfExperience: "28 years",
        awards: [
          "Goa State Cultural Heritage Award"
        ]
      }
    ]
  },
  {
    id: "haryana",
    name: "Haryana",
    nativeName: "हरियाणा",
    capital: "Chandigarh",
    zone: "North",
    tagline: "Land of Rotis and Reshlma",
    heroImage: "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_Destinatoin_img_Gurgaon_1_l_689_1034.jpg",
    languages: {
      nativeLanguage: "Haryanvi",
      dialects: [
        "Bangaruk",
        "Deswali",
        "Mewati"
      ],
      phrases: [
        {
          nativeWord: "Ram Ram",
          nativeScript: "राम राम",
          englishMeaning: "Greetings / Hello",
          phonetics: "Raam Raam",
          exampleSentence: "Ram Ram bhai, ke haal se?"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Ragini",
        nativeScript: "रागिनी",
        culturalSignificance: "Narrative folk songs sung during Saang traditional folk theatre, depicting heroism and morality.",
        whenPerformed: "Village fairs and evening Saang gatherings",
        instruments: [
          "Harmonium",
          "Dholak",
          "Sarangi"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Bajra Roti with White Butter",
        nativeName: "बाजरा रोटी और मक्खन",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LY7JxpzeTIzLV8HqBv6ivS0zepHXVT8CvuK1WbhuF3f9aMyGsMfUB1Ve&s=10",
        courseType: "Main Course",
        dietary: "Vegetarian",
        prepTime: "20 mins",
        ingredients: [
          "Pearl millet (Bajra) flour",
          "Warm water",
          "Fresh homemade white butter",
          "Jaggery"
        ],
        steps: [
          "Knead bajra flour with warm water into soft dough.",
          "Flatten dough by hand into thick rotis.",
          "Roast on earthenware tawa and serve piping hot with dollops of white butter."
        ],
        culturalBackground: "Essential winter energy food across Haryana's agrarian countryside."
      }
    ],
    traditions: [
      {
        title: "Phulkari Embroidery",
        category: "Textile Art",
        description: "Flowered embroidery done with bright silk threads on coarse cotton cloth.",
        significance: "Crafted by women as heirlooms for weddings and birth ceremonies.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTH8I8rX6Hc6Uf0Oh54ZV0q2XgrUBxQj822KH6cDPfsNZy5DbClV1r6k&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Kabbadi (Circle Style)",
        nativeName: "कबड्डी",
        howItIsPlayed: "Raiders enter opponent's circle, touch a defender, and try to escape back within 30 seconds.",
        numberOfPlayers: "16 (8 per team)",
        historicalOrigin: "Ancient rural combat training sport deeply rooted in Haryanvi wrestling culture.",
        skillsDeveloped: [
          "Strength",
          "Tactical defense",
          "Lung capacity"
        ]
      }
    ],
    monuments: [
      {
        id: "tomb-of-ibrahim-lodi",
        name: "Tomb of Ibrahim Lodi",
        location: "Panipat",
        historicalPeriod: "16th Century (1526)",
        builtBy: "British Administration / Earlier Memorial rebuilt",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIyXo5LsgyuIyiZTsxdg0ngFe5PDHkWcwzzLy_5SbmV-v8xFgHPna2p5J&s=10",
        historicalBackground: "Marks the site of the historic First Battle of Panipat where Babur defeated Ibrahim Lodi.",
        architecturalSignificance: "Simple rectangular red sandstone tomb structure set in a park.",
        culturalImportance: "Historical landmark denoting the beginning of Mughal Empire in India.",
        interestingFacts: [
          "Panipat was the battlefield for three decisive battles in Indian history.",
          "Renovated by District Administration in 1849."
        ],
        tags: [
          "History",
          "Panipat",
          "Mughal"
        ]
      }
    ],
    festivals: [
      {
        id: "surajkund-crafts-mela",
        name: "Surajkund International Crafts Mela",
        nativeName: "सूरजकुंड मेला",
        whenCelebrated: "February",
        whereCelebrated: "Surajkund, Faridabad",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdT9-iKpT6a7SO4g_mrMpYrvoAeCOxKXvzVXyLnRBuvXktpUiHvjvt0Q&s=10",
        origins: "Initiated in 1987 to showcase Indian handicrafts and handlooms.",
        culturalSignificance: "World's largest crafts fair promoting Indian artisan heritage and international cultural exchange.",
        traditionalFood: "Gond laddu, Bajra khichdi, Jalebi",
        traditionalClothing: "Kurta with Ghagra and Orhna",
        musicAndDance: "Dhamal dance and Haryanvi folk songs",
        interestingFacts: [
          "Features over 1,000 national and international artisans annually."
        ]
      }
    ],
    crafts: [
      {
        id: "panipat-handloom-durries",
        name: "Panipat Handloom Durries",
        category: "Weaving",
        region: "Panipat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5tpuLRIcM51XXKMVPbc4VtbbAa7gtZpeourKMWtmODEbsAE9__x5QCGQ&s=10",
        materials: [
          "Cotton yarn",
          "Wool",
          "Natural/Synthetic dyes"
        ],
        techniques: [
          "Pit loom weaving",
          "Geometric pattern interlock"
        ],
        culturalSignificance: "Panipat is globally renowned as the 'Textile City' for durable woven carpets and flat-weave durries.",
        processSteps: [
          "Yarn dyeing",
          "Warping loom",
          "Manual interlock weaving",
          "Trimming edges"
        ],
        challengesFaced: "Automation and power loom competition."
      }
    ],
    artisans: [
      {
        id: "dharambir-singh",
        name: "Dharambir Singh",
        craftType: "Master Weaver",
        location: "Panipat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ep83ErwdTC9CzsadBIuimGswAMuxyydMO4kYLNFN1ZUxoF7MCPGNIVc&s=10.",
        quote: "Every thread on our loom carries the warp and weft of Haryanvi endurance.",
        story: "Preserving handloom flat-weave technique passed down through 4 generations.",
        yearsOfExperience: "38 years",
        awards: [
          "National Handloom Award"
        ]
      }
    ]
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    nativeName: "हिमाचल प्रदेश",
    capital: "Shimla",
    zone: "North",
    tagline: "Land of the Gods",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDFeIWvWUChTHUheH8NcL6Foam9fv7oh9qE3OjYowv6HdHVEHTXr2QAm0&s=10",
    languages: {
      nativeLanguage: "Pahari",
      dialects: [
        "Mandeali",
        "Kangri",
        "Kinnauri",
        "Kullui"
      ],
      phrases: [
        {
          nativeWord: "Ji Ramji",
          nativeScript: "जी रामजी",
          englishMeaning: "Respectful Greeting",
          phonetics: "Jee Raam-jee",
          exampleSentence: "Sabhi ko Ji Ramji!"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Jhoori",
        nativeScript: "झूरी",
        culturalSignificance: "Traditional Pahari love song featuring rhythmic rhyming couplets.",
        whenPerformed: "Folk festivals and agricultural gatherings",
        instruments: [
          "Bishansi",
          "Dhol",
          "Nagara"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Dham (Chana Madra)",
        nativeName: "चना मदरा",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_Cy37kvwPEJB1bQ97gqIUq9-s7_5-2azQZELeJ7bA9cwIUzLVMn3e7M&s=10",
        courseType: "Main Course",
        dietary: "Vegetarian",
        prepTime: "40 mins",
        ingredients: [
          "Kabuli chana (Chickpeas)",
          "Yogurt",
          "Ghee",
          "Cardamom",
          "Cinnamon",
          "Asafoetida"
        ],
        steps: [
          "Soak and boil chickpeas.",
          "Slow cook yogurt sauce in pure ghee with whole spices till oil separates.",
          "Add chickpeas and simmer on low heat."
        ],
        culturalBackground: "Crown jewel dish served during traditional Himachali festive feasts called 'Dham'."
      }
    ],
    traditions: [
      {
        title: "Chamba Rumal Craft",
        category: "Embroidery",
        description: "Double-sided embroidery on square silk/cotton fabric with untwisted silk thread.",
        significance: "Historically gifted as royal presents depicting scenes from Raslila and Pahari miniatures.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRstkXNcv5M_AhFxnqgzls95JitvA465EAVIwIjcpLQ&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Pittu (Seven Stones)",
        nativeName: "पिठू",
        howItIsPlayed: "Stack seven flat stones; one team attempts to knock it with a ball and restack while avoiding being hit.",
        numberOfPlayers: "4 to 10",
        historicalOrigin: "Traditional mountain village pastime played across Western Himalayas.",
        skillsDeveloped: [
          "Aim",
          "Agility",
          "Quick reflexes"
        ]
      }
    ],
    monuments: [
      {
        id: "hidimba-devi-temple",
        name: "Hidimba Devi Temple",
        location: "Manali",
        historicalPeriod: "16th Century (1553 CE)",
        builtBy: "Raja Bahadur Singh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpM8JS_ffe3cyEpf9Hk7i57gxEne4EcWou2wDVotkhjkKGHxHqNBP8d_x8&s=10",
        historicalBackground: "Dedicated to Hidimbi Devi from Mahabharata, situated inside a dense cedar forest.",
        architecturalSignificance: "Unique four-tiered wooden pagoda style architecture with intricate wood carvings.",
        culturalImportance: "Major spiritual shrine and center for annual Kullu fair rituals.",
        interestingFacts: [
          "Sanctum sanctorum is built over a natural cave rock.",
          "Features carved wooden brass doors depicting Hindu deities."
        ],
        tags: [
          "Pagoda",
          "Manali",
          "Wooden Architecture"
        ]
      }
    ],
    festivals: [
      {
        id: "kullu-dussehra",
        name: "Kullu Dussehra",
        nativeName: "कुल्लू दशहरा",
        whenCelebrated: "October (Starts on Vijayadashami)",
        whereCelebrated: "Dhalpur Maidan, Kullu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqm858uEu-KIUAv4S8Sg10SunATH29i3LsH-EzO-BqxRvsy7ktp2n16P6i&s=10",
        origins: "Dates back to 17th century when King Jagat Singh installed Lord Raghunath idol.",
        culturalSignificance: "Over 200 local village deities gather in decorated palanquins for week-long grand assembly.",
        traditionalFood: "Siddu, Babru, Mittha",
        traditionalClothing: "Pattu, Kullui Topi",
        musicAndDance: "Nati folk dance with Shehnai and Karnal horns",
        interestingFacts: [
          "Unlike elsewhere in India, effigies of Ravana are NOT burnt here."
        ]
      }
    ],
    crafts: [
      {
        id: "kullu-shawl",
        name: "Kullu Shawl Weaving",
        category: "Textile",
        region: "Kullu Valley",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FxH0AJiuvrKOz-cBEE6YwUgKPm0s-z-QUnSQYGas4Q&s=10",
        materials: [
          "Pashmina wool",
          "Angora wool",
          "Merino wool"
        ],
        techniques: [
          "Handloom slit-tapestry",
          "Geometric border weaving"
        ],
        culturalSignificance: "Famous GI-tagged woolen shawl with distinct colorful geometric border patterns.",
        processSteps: [
          "Spinning wool",
          "Dyeing yarn",
          "Setting warp",
          "Weaving pattern borders on frame loom"
        ],
        challengesFaced: "Imitation acrylic shawls sold by power looms."
      }
    ],
    artisans: [
      {
        id: "lalita-wakil",
        name: "Lalita Vakil",
        craftType: "Chamba Rumal Embroiderer",
        location: "Chamba",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lalita_Vakil_in_2022.jpg/250px-Lalita_Vakil_in_2022.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        quote: "The needle moves like a brush, turning simple threads into living Pahari art.",
        story: "Dedicated over fifty years to reviving and teaching the rare double-sided Chamba Rumal embroidery.",
        yearsOfExperience: "50+ years",
        awards: [
          "Padma Shri",
          "Shilp Guru Award",
          "National Award"
        ]
      }
    ]
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    nativeName: "झारखंड",
    capital: "Ranchi",
    zone: "East",
    tagline: "The Land of Forests",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMjYarlrNSuvYFfCx9HcGllqMDRrcxP4AYGpSqcnYRj0mnwPbpJZuHl6i&s=10",
    languages: {
      nativeLanguage: "Santhali",
      dialects: [
        "Mundari",
        "Kurukh",
        "Nagpuri"
      ],
      phrases: [
        {
          nativeWord: "Johar",
          nativeScript: "जोहार",
          englishMeaning: "Traditional Tribal Greeting",
          phonetics: "Jo-haar",
          exampleSentence: "Sanam ko Johar!"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Jhumair",
        nativeScript: "झूमर",
        culturalSignificance: "Rhythmic harvest folk song performance sung in groups to celebrate seasons and community joy.",
        whenPerformed: "Karam festival and harvest season",
        instruments: [
          "Mandar",
          "Dhol",
          "Bansi"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Dhuska with Aloo Chana Curry",
        nativeName: "धुसका",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Rv8pWKS_u-YMQPDD7MT32dBH7oQOglNG-4daui8o1A&s=10",
        courseType: "Breakfast",
        dietary: "Heirloom",
        prepTime: "30 mins",
        ingredients: [
          "Rice",
          "Chana dal",
          "Urad dal",
          "Garlic",
          "Green chillies",
          "Mustard oil"
        ],
        steps: [
          "Soak and grind rice and lentils into smooth batter.",
          "Deep fry ladlefuls in hot oil until puffed and golden.",
          "Serve warm with spicy potato and black chickpea curry."
        ],
        culturalBackground: "Iconic traditional fried savory snack central to festive breakfasts in Jharkhand."
      }
    ],
    traditions: [
      {
        title: "Sohrai and Khovar Painting",
        category: "Mural Art",
        description: "Indigenous ritualistic mud wall arts practiced by tribal women using natural earths.",
        significance: "Sohrai celebrates harvest and cattle; Khovar marks marriage season.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqi9RMhGMQfGVls3mjP78Lgkin5hM0eRtALqiT0XocIMFKeeCDJo_QQVA&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Kati",
        nativeName: "काटी",
        howItIsPlayed: "Played using semi-circular wooden discs struck using foot maneuvers to knock down opponents' discs.",
        numberOfPlayers: "2 to 8",
        historicalOrigin: "Ancient tribal strategy sport of Santhal and Munda communities.",
        skillsDeveloped: [
          "Leg balance",
          "Aim accuracy",
          "Focus"
        ]
      }
    ],
    monuments: [
      {
        id: "baidyanath-temple",
        name: "Baidyanath Temple Complex",
        location: "Deoghar",
        historicalPeriod: "16th Century",
        builtBy: "Raja Puran Mal (Gidhaur Dynasty)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4IQziUyaeB0sueH4JCMEA4Xd41xB3gMrigqOyNflGw&s=10",
        historicalBackground: "One of the twelve sacred Jyotirlingas in India.",
        architecturalSignificance: "Lotus-shaped dome spire rising 72 feet high surrounded by 21 accessory temples.",
        culturalImportance: "Hub of annual Shravani Mela pilgrimage where millions bring holy Ganges water.",
        interestingFacts: [
          "Pilgrims carry Kanwar pitchers on foot over 100 kilometers.",
          "Cap of the main temple is joined to the neighboring Parvati temple by red ribbons."
        ],
        tags: [
          "Jyotirlinga",
          "Deoghar",
          "Pilgrimage"
        ]
      }
    ],
    festivals: [
      {
        id: "sarhul",
        name: "Sarhul",
        nativeName: "सरहुल",
        whenCelebrated: "March / April (Spring)",
        whereCelebrated: "Statewide tribal villages",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3bVGJucvkMM3oIf4ahUkRgpBfQtUDVYbHT6zh_H0sVqu7a7B3h-XZJK2&s=10",
        origins: "Nature worship festival celebrated by Oraon, Munda, and Santhal tribes.",
        culturalSignificance: "Worship of Sal tree blossoms marking the start of the new agricultural year.",
        traditionalFood: "Handia (Rice beer), Pitha, Fish curry",
        traditionalClothing: "White saree with red border (Panchi Parhan)",
        musicAndDance: "Sarhul group dance around Sal trees accompanied by Mandar drums",
        interestingFacts: [
          "Villagers use Sal flowers to predict the rain quality for upcoming crops."
        ]
      }
    ],
    crafts: [
      {
        id: "pykar-comb-craft",
        name: "Paitkar Painting",
        category: "Visual Art",
        region: "Amadubi village, East Singhbhum",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhagi_J3wmHRUs8GwD0cNmYRADdo7kioAtH_Lrn0aWm40_LY-9PAnjcMh1&s=10",
        materials: [
          "Natural leaf/stone dyes",
          "Paper scroll",
          "Goat hair brush"
        ],
        techniques: [
          "Scroll painting",
          "Storytelling narration"
        ],
        culturalSignificance: "One of the oldest scroll painting traditions in India depicting tribal life and life after death.",
        processSteps: [
          "Extracting natural colors",
          "Preparing paper scroll",
          "Painting sequential stories",
          "Singing accompanying narration"
        ],
        challengesFaced: "Extremely low number of surviving master scroll painters."
      }
    ],
    artisans: [
      {
        id: "subhadra-devi-sohrai",
        name: "Justin Ekka",
        craftType: "Sohrai Mural Artist",
        location: "Hazaribagh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAkmGx2Gx4kvyyoyooSD-bqAQten9JrrJ5eNX3z1wdIJAncARpEyIras&s=10",
        quote: "Our mud art connects the soil of our homes with the wild nature outside.",
        story: "Promoted traditional GI-tagged Sohrai-Khovar mud wall paintings onto canvas for museum exhibits globally.",
        yearsOfExperience: "26 years",
        awards: [
          "State Tribal Art Excellence Award"
        ]
      }
    ]
  },
  {
    id: "karnataka",
    name: "Karnataka",
    nativeName: "ಕರ್ನಾಟಕ",
    capital: "Bengaluru",
    zone: "South",
    tagline: "One State, Many Worlds",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLRKGS3AKfbOrauk_CTdjO4_p7L48e20E0c9ekw47ypYG3iOcMwbtcqej&s=10",
    languages: {
      nativeLanguage: "Kannada",
      dialects: [
        "Kundagannada",
        "Dharwad",
        "Arebhashe"
      ],
      phrases: [
        {
          nativeWord: "Namaskara",
          nativeScript: "ನಮಸ್ಕಾರ",
          englishMeaning: "Greetings / Hello",
          phonetics: "Nuh-mus-kar-ah",
          exampleSentence: "Ellarigoo Namaskara, hegiddira?"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Dollu Kunitha Songs",
        nativeScript: "ಡೊಳ್ಳು ಕುಣಿತ",
        culturalSignificance: "High-energy devotional drum performance dedicated to Lord Beereshwara.",
        whenPerformed: "Temple festivals and cultural processions",
        instruments: [
          "Dollu (Drum)",
          "Tala",
          "Flute"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Bisi Bele Bath",
        nativeName: "ಬಿಸಿ ಬೇಳೆ ಭಾತ್",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJMjNg6mHj1wDwc07LVpx2CcAPGyzMUZJI96q7FT5EA&s=10",
        courseType: "Main Course",
        dietary: "Vegetarian",
        prepTime: "40 mins",
        ingredients: [
          "Rice",
          "Toor dal",
          "Mixed vegetables",
          "Tamarind",
          "Bisi Bele Bath spice powder",
          "Ghee",
          "Cashews"
        ],
        steps: [
          "Cook rice, lentil, and vegetables together.",
          "Prepare spice blend with roasted spices and coconut.",
          "Combine cooked mixture with tamarind extract and spice powder; temper generously with cashews fried in ghee."
        ],
        culturalBackground: "Originated in Mysore Palace kitchens, now an essential comforting Kannadiga dish."
      }
    ],
    traditions: [
      {
        title: "Yakshagana Theatre",
        category: "Performing Art",
        description: "Traditional dance-drama performance with elaborate face makeup and vibrant headgear.",
        significance: "Depicts epics like Mahabharata and Ramayana throughout coastal Karnataka nights.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTx8vsHzpDn6GdEPW9ftNbADeD2ZsQHBPT0BpBITOVJA&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Chowka Bara",
        nativeName: "ಚೌಕಾ ಬಾರಾ",
        howItIsPlayed: "Traditional board game played with cowrie shells where players race pawns to reach the center square.",
        numberOfPlayers: "2 to 4",
        historicalOrigin: "Ancient race game referenced in regional historical folklore.",
        skillsDeveloped: [
          "Strategy",
          "Probability evaluation",
          "Counting"
        ]
      }
    ],
    monuments: [
      {
        id: "hampi-stone-chariot",
        name: "Stone Chariot at Vijaya Vittala Temple",
        location: "Hampi, Vijayanagara",
        historicalPeriod: "16th Century",
        builtBy: "King Krishnadevaraya (Vijayanagara Empire)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLB21ufZBPhXhOvX6CRpCJvcVHujknC-t8GJWT_Ikp5vYAw1nvh6AOQpUG&s=10",
        historicalBackground: "Iconic shrine dedicated to Garuda inside the Vittala temple complex in UNESCO World Heritage site Hampi.",
        architecturalSignificance: "Carved from giant granite blocks designed to resemble a moving ceremonial chariot.",
        culturalImportance: "Symbol of South Indian architectural pinnacle during the Vijayanagara Empire.",
        interestingFacts: [
          "The stone wheels of the chariot were once capable of rotating.",
          "Featured on the Indian ₹50 currency note."
        ],
        tags: [
          "UNESCO",
          "Hampi",
          "Vijayanagara"
        ]
      }
    ],
    festivals: [
      {
        id: "mysore-dasara",
        name: "Mysuru Dasara",
        nativeName: "ಮೈಸೂರು ದಸರಾ",
        whenCelebrated: "September / October (10 days)",
        whereCelebrated: "Mysuru",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMcaFf2ca7FIRoYOccJNnO9OVGOsFdk9Cf5FcG8bwXYnOZU1bgUOIWbCC&s=10",
        origins: "Started by Vijayanagara kings in 15th century, continued by Wodeyar royal dynasty of Mysore.",
        culturalSignificance: "Celebrates victory of Goddess Chamundeshwari over demon Mahishasura; highlights state culture.",
        traditionalFood: "Mysore Pak, Obbattu",
        traditionalClothing: "Silk Sarees, Royal Mysore Peta turban",
        musicAndDance: "Jamboo Savari elephant parade and Carnatic music concerts",
        interestingFacts: [
          "Mysore Palace is illuminated with over 100,000 light bulbs during the 10 days."
        ]
      }
    ],
    crafts: [
      {
        id: "channapatna-toys",
        name: "Channapatna Wooden Toys",
        category: "Woodcraft",
        region: "Channapatna, Ramanagara",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZH3hIg1vlqfwyPjEQllcu5fakzNrtdwzMIExdKoHW9aAFcMUmmiVY4nkj&s=10",
        materials: [
          "Ivory Wood (Aale Mara)",
          "Vegetable dyes",
          "Lacquer",
          "Palm leaf polish"
        ],
        techniques: [
          "Wood turning",
          "Lacquer coating on lathe"
        ],
        culturalSignificance: "GI-tagged 200-year-old non-toxic traditional toy making patronized by Tipu Sultan.",
        processSteps: [
          "Wood cutting and seasoning",
          "Lathe turning into shape",
          "Applying natural lacquer",
          "Polishing with palm leaf"
        ],
        challengesFaced: "Competition from cheap plastic imported toys."
      }
    ],
    artisans: [
      {
        id: "c-gowda-channapatna",
        name: "C. Ramalingegowda",
        craftType: "Channapatna Toy Craftsman",
        location: "Channapatna",
        image:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl6BqxLZoiAu-maqeCoDy5WxyLhdXM4qzFWRYKGAVFEA&s=10",
        quote: "Our lac-turnery ensures children play with natural colors and smooth wooden warmth.",
        story: "Preserved traditional non-toxic lac-turnery techniques for over 3 decades and trained hundreds of artisans.",
        yearsOfExperience: "35 years",
        awards: [
          "State Craftsman Award"
        ]
      }
    ]
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    nativeName: "मध्य प्रदेश",
    capital: "Bhopal",
    zone: "Central",
    tagline: "The Heart of Incredible India",
    heroImage: "https://cdn.ibpbooks.com/images/sdf/madhya-pradesh-from-above.jpg",
    languages: {
      nativeLanguage: "Hindi",
      dialects: [
        "Malvi",
        "Nimadi",
        "Bundeli",
        "Bagheli"
      ],
      phrases: [
        {
          nativeWord: "नमस्ते",
          nativeScript: "नमस्ते",
          englishMeaning: "Greetings / Hello",
          phonetics: "Na-mas-te",
          exampleSentence: "आपका मध्य प्रदेश में स्वागत है। (Welcome to Madhya Pradesh.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Relo Song",
        nativeScript: "रेलो गीत",
        culturalSignificance: "Sung by the Muria and Gond tribes during tribal gatherings and youth dormitories (Ghotul).",
        whenPerformed: "Festivals and youth gatherings",
        instruments: [
          "Mandhar",
          "Todi",
          "Manjira"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Bhutte Ka Kees",
        nativeName: "भुट्टे का कीस",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ50BlZ2tLntKPZlvbmNNqQY6T7EAA8JPZR3oImWJvFQ&s=10",
        courseType: "Snack",
        dietary: "Vegetarian",
        prepTime: "25 mins",
        ingredients: [
          "Grated Sweet Corn",
          "Milk",
          "Mustard Seeds",
          "Green Chilies",
          "Ghee",
          "Asafoetida"
        ],
        steps: [
          "Grate fresh corn kernels.",
          "Sauté mustard seeds and spices in ghee.",
          "Add grated corn and simmer with milk until creamy."
        ],
        culturalBackground: "A beloved Malwa street food item originating from Indore's famous night food market, Sarafa Bazaar."
      }
    ],
    traditions: [
      {
        title: "Bhagoria Haat Festival Tradition",
        category: "Tribal Heritage",
        description: "A traditional tribal courtship and harvest festival of the Bhil and Bhilala tribes.",
        significance: "Fosters community bonding and marital alliances among young tribal men and women.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0uxFoiUuSaMvGfES8-hlOWvqCcllP_s42x-BkPtrpNHoCkaafmJigPQ&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Pitthu",
        nativeName: "पिठ्ठू",
        howItIsPlayed: "One team tries to stack flat stones and hit them with a ball while the defending team attempts to tag players out.",
        numberOfPlayers: "6-12 players",
        historicalOrigin: "Ancient rural game popular across central India.",
        skillsDeveloped: [
          "Aiming",
          "Teamwork",
          "Agility"
        ]
      }
    ],
    monuments: [
      {
        id: "khajuraho-temples",
        name: "Khajuraho Group of Monuments",
        location: "Chhatarpur",
        historicalPeriod: "950 AD - 1050 AD",
        builtBy: "Chandela Dynasty",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7oK8i6fOZP6t2mP0j42APSa3kINYGLWY732iOn4zTg&s=10",
        historicalBackground: "Built by the Chandela rulers, these temples celebrate nagara-style architecture and intricate stone carvings.",
        architecturalSignificance: "Famous for Nagara-style architecture and expressive sculptures depicting human emotions and divine forms.",
        culturalImportance: "UNESCO World Heritage site showcasing classical Indian sculpture art.",
        interestingFacts: [
          "Only 20 of the original 85 temples survive today.",
          "Constructed using hard sandstone joined without mortar."
        ],
        tags: [
          "UNESCO",
          "Temple",
          "History",
          "Nagara Style"
        ]
      }
    ],
    festivals: [
      {
        id: "lokrang-festival",
        name: "Lokrang Festival",
        nativeName: "लोकरंग उत्सव",
        whenCelebrated: "January 26-30 annually",
        whereCelebrated: "Bhopal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMBTkeD41_HgtluUfx8pxpqycMFGmbA2qbTZD7xLoOw&s=10",
        origins: "Organized by Madhya Pradesh Tribal Museum to celebrate folk and tribal arts.",
        culturalSignificance: "Highlights rich tribal cultures, music, dance forms, and handicrafts across India.",
        traditionalFood: "Bafla Roti, Laddu",
        traditionalClothing: "Traditional tribal attire with mirror work",
        musicAndDance: "Matki dance, Gond dance performances",
        interestingFacts: [
          "Each day is dedicated to a specific regional theme, including tribal crafts."
        ]
      }
    ],
    crafts: [
      {
        id: "gond-art",
        name: "Gond Painting",
        category: "Painting",
        region: "Dindori & Mandla",
        image: "https://theindiacraftproject.com/cdn/shop/files/WhatsApp_Image_2025-03-07_at_3.52.58_PM_10.jpg?v=1744803901",
        materials: [
          "Natural pigments",
          "Canvas",
          "Handmade paper"
        ],
        techniques: [
          "Dotting",
          "Fine line patterns",
          "Intricate textures"
        ],
        culturalSignificance: "Reflects the Gond tribe's spiritual connection with flora, fauna, and local mythology.",
        processSteps: [
          "Sketch outline",
          "Fill background colors",
          "Overlay intricate line patterns and dots"
        ],
        challengesFaced: "Commercial replication reducing fair wages for authentic tribal artists."
      }
    ],
    artisans: [
      {
        id: "bhuri-bai",
        name: "Bhuri Bai",
        craftType: "Pithora & Gond Painting",
        location: "Pitol, Jhabua",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNme7P8R7obecJG_i9Hhx9WK-SCaT6gzCWwlJxXwCeu3m8l-DighKN0is&s=10",
        quote: "Our art is our identity, passed down from wall paintings to modern canvases.",
        story: "Pioneer Bhil artist who transitioned traditional mud-wall Pithora paintings onto paper and acrylic canvas.",
        yearsOfExperience: "40+ years",
        awards: [
          "Padma Shri (2021)",
          "Shikhar Samman"
        ]
      }
    ]
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    nativeName: "महाराष्ट्र",
    capital: "Mumbai",
    zone: "West",
    tagline: "Unlimited Maharashtra",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPSW0IZamHSBWwChedRWLJcWBpoOFaxEEPvN-GULmqQ&s=10",
    languages: {
      nativeLanguage: "Marathi",
      dialects: [
        "Malvani",
        "Varhadi",
        "Agri",
        "Khandeshi"
      ],
      phrases: [
        {
          nativeWord: "नमस्कार",
          nativeScript: "नमस्कार",
          englishMeaning: "Greetings / Hello",
          phonetics: "Na-mas-kar",
          exampleSentence: "महाराष्ट्रात तुमचे स्वागत आहे. (Welcome to Maharashtra.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Powada",
        nativeScript: "पोवाडा",
        culturalSignificance: "Heroic ballads narrating historic deeds of Maratha rulers like Chatrapati Shivaji Maharaj.",
        whenPerformed: "Cultural events, Shivaji Jayanti",
        instruments: [
          "Daf",
          "Tuntuna",
          "Dholki"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Puran Poli",
        nativeName: "पुरणपोळी",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-tOpvCdIJvlaKS_AZSWC8Yy0QfJanOOSBgP9JOXpEA&s=10",
        courseType: "Dessert",
        dietary: "Vegetarian",
        prepTime: "45 mins",
        ingredients: [
          "Chana Dal",
          "Jaggery",
          "Cardamom",
          "Wheat Flour",
          "Ghee"
        ],
        steps: [
          "Cook dal and blend with jaggery and spices to form puran.",
          "Stuff inside soft dough.",
          "Roll thin and cook on a griddle with ghee."
        ],
        culturalBackground: "Essential festive sweet prepared during Gudi Padwa and Holi."
      }
    ],
    traditions: [
      {
        title: "Wari Pilgrimage (Pandharpur Wari)",
        category: "Religious Heritage",
        description: "An 800-year-old annual pilgrimage walking to Pandharpur carrying the padukas of Vithoba devotees.",
        significance: "Promotes social equality and devotion through the teachings of Saint Dnyaneshwar and Saint Tukaram.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMBUsm_T0rBDTJ7qjf7lAg_rSjWYiDJ28R4YYFmquLw&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Viti Dandu",
        nativeName: "विटी दांडू",
        howItIsPlayed: "A small wooden peg (viti) is struck by a long wooden stick (dandu) into an open field.",
        numberOfPlayers: "2 or more",
        historicalOrigin: "Ancient indigenous game similar to cricket and tip-cat.",
        skillsDeveloped: [
          "Hand-Eye Coordination",
          "Precision"
        ]
      }
    ],
    monuments: [
      {
        id: "ajanta-caves",
        name: "Ajanta Caves",
        location: "Chhatrapati Sambhajinagar (Aurangabad)",
        historicalPeriod: "2nd Century BCE - 480 CE",
        builtBy: "Satavahana and Vakataka Dynasties",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoc4Q9fBreOSKtXXBo_iGimL3PxmjFubsU7Oc90da7bjR661MkVB87d1U&s=10",
        historicalBackground: "Rock-cut Buddhist cave monuments housing classic masterpieces of Buddhist religious art.",
        architecturalSignificance: "Fresco paintings and rock carvings carved out of a horseshoe-shaped cliff.",
        culturalImportance: "UNESCO World Heritage site celebrating ancient Buddhist art and architecture.",
        interestingFacts: [
          "Rediscovered accidentally by a British officer in 1819 while tiger hunting."
        ],
        tags: [
          "UNESCO",
          "Buddhism",
          "Cave Architecture"
        ]
      }
    ],
    festivals: [
      {
        id: "ganesh-chaturthi",
        name: "Ganesh Utsav",
        nativeName: "गणेशोत्सव",
        whenCelebrated: "Bhadrapada (August-September)",
        whereCelebrated: "Statewide",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__2bxtEB8DsDoKDeszo4fnQXyuPe9VSc9wZTfbxk9Tw&s=10",
        origins: "Popularized by Lokmanya Tilak into a public mass festival to unite people during colonial rule.",
        culturalSignificance: "Honors Lord Ganesha with home idols, community pandals, and elaborate immersion processions.",
        traditionalFood: "Modak",
        traditionalClothing: "Nauvari Saree for women, Dhoti Kurta with Pheta for men",
        musicAndDance: "Dhol Tasha pathaks, Lezim dance",
        interestingFacts: [
          "Pioneered as a mass social movement in 1893."
        ]
      }
    ],
    crafts: [
      {
        id: "warli-painting",
        name: "Warli Tribal Art",
        category: "Painting",
        region: "Palghar",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScE8zUOTHEmwaA4nZGjquFzm93x4k-zvf3ZBvssmmAgA&s=10",
        materials: [
          "Rice paste",
          "Red ochre mud walls",
          "Bamboo sticks"
        ],
        techniques: [
          "Geometric shapes (triangles, circles, lines)"
        ],
        culturalSignificance: "Depicts daily tribal life, harvest scenes, and nature worship.",
        processSteps: [
          "Prepare red mud background",
          "Create white rice-flour paste",
          "Paint geometric motifs"
        ],
        challengesFaced: "Mass production on synthetic garments diluting original village storytelling."
      }
    ],
    artisans: [
      {
        id: "shantaram-gode",
        name: "Shantaram Gode",
        craftType: "Warli Painting",
        location: "Dahanu, Palghar",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fXTakcFEYiuEfD8bFelAQHWgL5KWKTMK92OmC0qLyLkKh-xXEyOTgGE&s=10",
        quote: "Our shapes are simple, but they hold the harmony of nature.",
        story: "Master artist keeping ancient North Konkan Warli traditions alive through community workshops.",
        yearsOfExperience: "35 years",
        awards: [
          "State Master Craftsman Award"
        ]
      }
    ]
  },
  {
    id: "manipur",
    name: "Manipur",
    nativeName: "ꯃꯅꯤꯄꯨꯔ",
    capital: "Imphal",
    zone: "North-East",
    tagline: "Jewel of India",
    heroImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWljPdjpJ5I2YxrBqa5JLp_GejoFTFJqRSnkllZDXN8aFj9648JThXj_cfiPlW9061Ubf38JLr1xBwYV9SahwBihpUHbRlY8tLDGF-RjDJcaFr8-Nynucru8-ijeTOC2mvriVEIg=s680-w680-h510-rw",
    languages: {
      nativeLanguage: "Meitei (Manipuri)",
      dialects: [
        "Tangkhul",
        "Thadou",
        "Mao",
        "Paite"
      ],
      phrases: [
        {
          nativeWord: "ꯈꯨꯔꯨꯝꯖꯔꯤ",
          nativeScript: "Khurumjari",
          englishMeaning: "Greetings / Hello",
          phonetics: "Khu-rum-ja-ri",
          exampleSentence: "ꯅꯉꯥꯏꯕ꯭ꯔꯥ? (How are you?)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Khullang Ishei",
        nativeScript: "ꯈꯨꯜꯂꯥꯡ ꯏꯁꯩ",
        culturalSignificance: "A romantic musical dialogic song sung impromptu in villages during agricultural activities.",
        whenPerformed: "Paddy fields and village work gatherings",
        instruments: [
          "Pena"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Eromba",
        nativeName: "ꯏꯔꯣꯝꯕꯥ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NgRUZquCwnhv8SKehp-g7su_DJ4WLtBB-KaTtuEn6B0IggrARSMJBwpV&s=10",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "30 mins",
        ingredients: [
          "Fermented Fish (Ngari)",
          "Boiled Vegetables",
          "King Chili (U-morok)",
          "Coriander"
        ],
        steps: [
          "Boil seasonal vegetables and potatoes.",
          "Roast or boil Ngari.",
          "Mash together thoroughly with fresh king chili and herbs."
        ],
        culturalBackground: "A classic staple in Meitei cuisine known for its pungent aroma and rich flavor."
      }
    ],
    traditions: [
      {
        title: "Manipuri Raas Leela",
        category: "Classical Dance",
        description: "One of the major classical dance forms of India portraying the devotion of Radha and Krishna.",
        significance: "Expresses deep spiritual devotion through graceful, fluid movements and unique cylindrical skirts (Kumil).",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2L_nfZlP0g7WMA8QId-UBLqT4IZOFFvkYvKFkM3JCWw-wgCyMw4PoiE&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Yubi Lakpi",
        nativeName: "ꯌꯨꯕꯤ ꯂꯥꯛꯄꯤ",
        howItIsPlayed: "A traditional game similar to rugby played using an oiled coconut.",
        numberOfPlayers: "7 per team",
        historicalOrigin: "Ancient royal traditional sport of Manipur.",
        skillsDeveloped: [
          "Physical Endurance",
          "Grip Strength",
          "Speed"
        ]
      }
    ],
    monuments: [
      {
        id: "kangla-fort",
        name: "Kangla Palace",
        location: "Imphal",
        historicalPeriod: "33 AD - 1891 AD",
        builtBy: "Meitei Monarchs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ApGSdu9eT43RFokz2dhbGIIcRe2ziJNW9yqd3tmpmQ&s=10",
        historicalBackground: "Ancient seat of Meitei rulers and religious center located in the heart of Imphal.",
        architecturalSignificance: "Houses ancient temples, coronation halls, and sacred coronation sites.",
        culturalImportance: "Heart of Manipuri history, spirituality, and royal heritage.",
        interestingFacts: [
          "Surrounded on three sides by a sacred moat."
        ],
        tags: [
          "Fort",
          "Royal Heritage",
          "Meitei History"
        ]
      }
    ],
    festivals: [
      {
        id: "yaoshang",
        name: "Yaoshang",
        nativeName: "ꯌꯥꯎꯁꯪ",
        whenCelebrated: "Lamta month (February-March)",
        whereCelebrated: "Statewide",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Ff2o364PQw2qlLovVoGUlvauO899HIaT5wtisKMxqg&s=10",
        origins: "Combines traditional Meitei spring customs with Hindu Holi celebrations.",
        culturalSignificance: "Five-day festival marked by moonlight Thabal Chongba dances and sports activities.",
        traditionalFood: "Kheer, Singju",
        traditionalClothing: "Phanek and Innaphi",
        musicAndDance: "Thabal Chongba folk dance",
        interestingFacts: [
          "Sports competitions are organized in every locality during this festival."
        ]
      }
    ],
    crafts: [
      {
        id: "kauna-craft",
        name: "Kauna Reed Craft",
        category: "Weaving",
        region: "Imphal East & Thoubal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CFHddBdSstwDs9xHCVc7_XJ25FzY426R-B13-sH5TPDK-t9TOq9PpxAp&s=10",
        materials: [
          "Kauna water reed",
          "Natural vegetable dyes"
        ],
        techniques: [
          "Hand weaving",
          "Braid weaving"
        ],
        culturalSignificance: "Eco-friendly craft producing mats, bags, and home decor items.",
        processSteps: [
          "Harvest reeds",
          "Sun dry until golden",
          "Weave into mats or baskets using hand tools"
        ],
        challengesFaced: "Shortage of raw material due to changing wetland ecosystems."
      }
    ],
    artisans: [
      {
        id: "yumlembam-sorojini",
        name: "Yumlembam Sorojini Devi",
        craftType: "Shaphee Lanphee & Kauna Craft",
        location: "Imphal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxqZCHqfCe4Uf6U4P2UClefAi_lMSXHiJwUf1Nsw05Q&s=10",
        quote: "Our traditional textiles tell stories of bravery and royalty.",
        story: "Renowned weaver preserving traditional royal textiles of Manipur for over four decades.",
        yearsOfExperience: "42 years",
        awards: [
          "National Award for Handloom Weaving"
        ]
      }
    ]
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    nativeName: "Meghalaya",
    capital: "Shillong",
    zone: "North-East",
    tagline: "Abode of Clouds",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO34cIbb_epZf99IJ8BrzEktkmuYf_N7v3GUMkSWN2kw&s=10",
    languages: {
      nativeLanguage: "Khasi",
      dialects: [
        "Garo",
        "Pnar",
        "War",
        "Lyngngam"
      ],
      phrases: [
        {
          nativeWord: "Khublei",
          nativeScript: "Khublei",
          englishMeaning: "Thank you / Greetings",
          phonetics: "Khu-blei",
          exampleSentence: "Khublei Shibun. (Thank you very much.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Phawar",
        nativeScript: "Phawar",
        culturalSignificance: "Chanted couplets used during festivals, sports contests, and celebrations.",
        whenPerformed: "Archery competitions, festivals",
        instruments: [
          "Ka Ksing",
          "Tangmuri"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Jadoh",
        nativeName: "Jadoh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxkYmI7KmEK-R-k7c1e5mDlYdjQrdN3NxBrV-TkRdzg&s=10",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "40 mins",
        ingredients: [
          "Hill Rice",
          "Pork",
          "Black Sesame Seeds",
          "Ginger",
          "Onions"
        ],
        steps: [
          "Sauté onions, ginger, and sesame paste.",
          "Add pork pieces and sear.",
          "Cook rice along with meat stock."
        ],
        culturalBackground: "A signature dish of the Khasi tribe, central to any traditional feast."
      }
    ],
    traditions: [
      {
        title: "Living Root Bridges Architecture",
        category: "Bio-engineering",
        description: "Bridges hand-knitted from the aerial roots of Ficus elastica trees across streams.",
        significance: "Demonstrates centuries of harmonious bio-engineering between indigenous tribes and rainforest environments.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAYVe8gMEQF5a2SnIYFo3cUz8753BudB2rrGlVcErgg&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Mawpoin",
        nativeName: "Mawpoin",
        howItIsPlayed: "A stack of flat stones is knocked down with a rubber ball while players avoid getting hit.",
        numberOfPlayers: "4-10 players",
        historicalOrigin: "Traditional Khasi street game.",
        skillsDeveloped: [
          "Agility",
          "Aiming",
          "Teamwork"
        ]
      }
    ],
    monuments: [
      {
        id: "nartiang-monoliths",
        name: "Nartiang Monoliths",
        location: "West Jaintia Hills",
        historicalPeriod: "1500 AD - 1800 AD",
        builtBy: "Jaintia Kings",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpv9cV-DYvM9x6fXVXo3XWxVSRc3AZymZvI9kUMNCbt3ECJpyrTPobalKm&s=10",
        historicalBackground: "Largest collection of megalithic stones standing in memory of Jaintia kings and heroes.",
        architecturalSignificance: "Tallest menhir stone standing over 8 meters high.",
        culturalImportance: "Sacred tribal remembrance site.",
        interestingFacts: [
          "Erected to commemorate battle victories and clan leaders."
        ],
        tags: [
          "Megalith",
          "History",
          "Tribal Site"
        ]
      }
    ],
    festivals: [
      {
        id: "wangala-festival",
        name: "100 Drums Wangala Festival",
        nativeName: "Wangala",
        whenCelebrated: "November",
        whereCelebrated: "Asanang, Garo Hills",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU014YQVwRYjicFCUptlmrGfnFjjzdwHe_vABOX0CV_gY6GxKKT8611ak&s=10",
        origins: "Post-harvest thanksgiving festival dedicated to Saljong, the Sun God of Garos.",
        culturalSignificance: "Celebrates bountiful harvests with rhythmic drumming and traditional headgear dances.",
        traditionalFood: "Bitchi (rice beer), Minil (sticky rice)",
        traditionalClothing: "Garo traditional attire with feathered turbans (Do'me)",
        musicAndDance: "100-drum rhythmic dance step",
        interestingFacts: [
          "Features 100 drummers performing simultaneously."
        ]
      }
    ],
    crafts: [
      {
        id: "ryndia-silk",
        name: "Ryndia (Eri) Silk Weaving",
        category: "Weaving",
        region: "Ri-Bhoi",
        image: "https://ryndia.in/wp-content/uploads/2024/06/Picture51_.png",
        materials: [
          "Eri organic silk yarn",
          "Plant dyes (turmeric, iron slag, leaves)"
        ],
        techniques: [
          "Floor loom weaving",
          "Thermal organic dyeing"
        ],
        culturalSignificance: "A non-violent silk process producing warm heirloom shawls.",
        processSteps: [
          "Harvest cocoons without killing silkworms",
          "Spin yarn manually",
          "Dye with plant extracts",
          "Weave on handlooms"
        ],
        challengesFaced: "Competition from synthetic chemical-dyed imitations."
      }
    ],
    artisans: [
      {
        id: "brak-sangma",
        name: "Brak K. Sangma",
        craftType: "Bamboo & Cane Crafts",
        location: "Tura, Garo Hills",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCynobxg8cADsgU8mXhhw2xjhGbrNrM2tlyX-IVOC65XXSFD5zA8eDjvB&s=10",
        quote: "Bamboo is in our blood; it shelters us and sustains our arts.",
        story: "Garo craftsman preserving tribal bamboo basketry and structural craftsmanship.",
        yearsOfExperience: "28 years",
        awards: [
          "State Award for Indigenous Crafts"
        ]
      }
    ]
  },
  {
    id: "mizoram",
    name: "Mizoram",
    nativeName: "Mizoram",
    capital: "Aizawl",
    zone: "North-East",
    tagline: "Land of the Hill People",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xRxiAkS_wkzpKHY7whsmZk_Xt17XF7FuA_pXNw--KR68f3S5GAZHHb8&s=10",
    languages: {
      nativeLanguage: "Mizo",
      dialects: [
        "Lushai",
        "Mara",
        "Lai",
        "Paite"
      ],
      phrases: [
        {
          nativeWord: "Chibai",
          nativeScript: "Chibai",
          englishMeaning: "Hello / Greetings",
          phonetics: "Chi-bai",
          exampleSentence: "Mizoram-ah ka lo lawm a che. (Welcome to Mizoram.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Chai Hla",
        nativeScript: "Chai Hla",
        culturalSignificance: "Traditional community songs sung during the Chapchar Kut spring festival.",
        whenPerformed: "Chapchar Kut festival",
        instruments: [
          "Khuang (drum)",
          "Dar (gong)"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Mizo Bai",
        nativeName: "Bai",
        image: "https://images.slurrp.com/prod/rich_article/kwxhjwjlwoe.webp?impolicy=slurrp-20210601&width=1200&height=675",
        courseType: "Main Course",
        dietary: "Vegetarian",
        prepTime: "20 mins",
        ingredients: [
          "Pork or Vegetables",
          "Bamboo Shoots",
          "Mustard Leaves",
          "Local Herbs",
          "Baking Soda"
        ],
        steps: [
          "Boil seasonal green vegetables with bamboo shoots.",
          "Add local herbs and a pinch of baking soda.",
          "Simmer until tender."
        ],
        culturalBackground: "A wholesome, simple soup dish consumed daily across Mizo households."
      }
    ],
    traditions: [
      {
        title: "Cheraw (Bamboo Dance)",
        category: "Folk Dance",
        description: "Rhythmic dance performed by stepping in and out of clapping bamboo poles.",
        significance: "One of the oldest Mizo dances, traditionally performed to ensure safe passage for a deceased soul.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXWS-h4XszxvEPcVuOaTEOXxu6j301IR7IqTqIw-B7g&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "In Suknawr",
        nativeName: "In Suknawr",
        howItIsPlayed: "Rod-pushing game where two contestants try to push each other out of a circle using a wooden pole.",
        numberOfPlayers: "2 players",
        historicalOrigin: "Traditional Mizo strength-testing sport.",
        skillsDeveloped: [
          "Physical Strength",
          "Balance"
        ]
      }
    ],
    monuments: [
      {
        id: "sibuta-lung",
        name: "Sibuta Lung",
        location: "Tachhip Village",
        historicalPeriod: "1500 AD",
        builtBy: "Chief Sibuta",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXDUUl4Qw505PcW2dmRhRRehur12GXp9SjP6il84QDhQYcHB3n_PjUgxd&s=10",
        historicalBackground: "A memorial stone erected by Mizo Chief Sibuta over 500 years ago.",
        architecturalSignificance: "Historic carved stone standing on a elevated hill mound.",
        culturalImportance: "Reflects ancient Mizo chieftain heritage and legendary tales.",
        interestingFacts: [
          "Associated with folklore of love, betrayal, and revenge."
        ],
        tags: [
          "Memorial",
          "Folklore",
          "Mizo History"
        ]
      }
    ],
    festivals: [
      {
        id: "chapchar-kut",
        name: "Chapchar Kut",
        nativeName: "Chapchar Kut",
        whenCelebrated: "First Friday of March",
        whereCelebrated: "Statewide (Aizawl main ground)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSC3I3R6EeDyrMbk4Io4Rx09Im5TEkPxuZ9FDYhQOYnMbnrbKWfUrjsA&s=10",
        origins: "Post-jhum clearing festival celebrating the arrival of spring.",
        culturalSignificance: "Unites all Mizo clans through traditional dance, music, and colorful costumes.",
        traditionalFood: "Vawksa Rep (smoked pork), Bai",
        traditionalClothing: "Puanchei shawl and Vakiria headgear",
        musicAndDance: "Cheraw dance, Chheihlam dance",
        interestingFacts: [
          "The entire state takes part in massive synchronized Cheraw dances."
        ]
      }
    ],
    crafts: [
      {
        id: "puan-weaving",
        name: "Puan Handloom Weaving",
        category: "Weaving",
        region: "Aizawl & Thenzawl",
        image: "https://miro.medium.com/0*ztt17bG_6iUgPYXH.jpg",
        materials: [
          "Cotton thread",
          "Natural and synthetic colors"
        ],
        techniques: [
          "Loin loom weaving",
          "Intricate geometric patterns"
        ],
        culturalSignificance: "Puan is the cultural attire worn by Mizo women during ceremonies.",
        processSteps: [
          "Set up loin loom",
          "Weave intricate geometric warps",
          "Hand-pick traditional motifs"
        ],
        challengesFaced: "High labor effort compared to machine looms."
      }
    ],
    artisans: [
      {
        id: "lalrintluangi",
        name: "Lalrintluangi",
        craftType: "Puanchei Weaving",
        location: "Thenzawl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldplTSD_xGyYCl7T5lWSvt4-MLueGMt0J-7Ubjuyj_ADq6zBNtlDWXJc&s=10",
        quote: "Every stripe in a Puanchei represents our cultural pride.",
        story: "Master weaver producing intricate Puanchei patterns for ceremonial wear.",
        yearsOfExperience: "30 years",
        awards: [
          "Mizoram State Handloom Award"
        ]
      }
    ]
  },
  {
    id: "nagaland",
    name: "Nagaland",
    nativeName: "Nagaland",
    capital: "Kohima",
    zone: "North-East",
    tagline: "Land of Festivals",
    heroImage: "https://m.economictimes.com/thumb/msid-104419864,width-1200,height-1200,resizemode-4,imgsize-1785990/nagaland.jpg",
    languages: {
      nativeLanguage: "Tenyidie",
      dialects: [
        "Ao",
        "Sumi",
        "Lotha",
        "Konyak",
        "Nagamese"
      ],
      phrases: [
        {
          nativeWord: "Kene",
          nativeScript: "Kene",
          englishMeaning: "Hello / Welcome",
          phonetics: "Ke-ne",
          exampleSentence: "Nagaland houtho. (Welcome to Nagaland.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Heliamleu",
        nativeScript: "Heliamleu",
        culturalSignificance: "Dancing folk songs sung by the Zeliang tribe depicting nature and ancestral victories.",
        whenPerformed: "Hega festival",
        instruments: [
          "Bamboo flutes",
          "Log drums"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Smoked Pork with Axone",
        nativeName: "Axone Pork",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0ROo6Wo2lA3zu0kOoDnsbmn6ba75pflub11CSgIGgg&s=10",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "45 mins",
        ingredients: [
          "Smoked Pork",
          "Axone (Fermented Soybeans)",
          "Raja Mircha (Ghost Pepper)",
          "Ginger"
        ],
        steps: [
          "Boil smoked pork pieces.",
          "Add fermented soybean paste (Axone) and ginger.",
          "Simmer with crushed Raja Mircha."
        ],
        culturalBackground: "An iconic dish reflecting Sumi Naga heritage and intense fermented flavors."
      }
    ],
    traditions: [
      {
        title: "Morung Youth System",
        category: "Social Structure",
        description: "Traditional village educational dormitories where Naga youth learned oral history, warfare, and crafts.",
        significance: "Preserved tribal laws, music, art, and community leadership through generations.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExwFYXCd1b-YszospsxJMTnKtbxRMey33f6ElASZZEA&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Akiti Do",
        nativeName: "Akiti Do",
        howItIsPlayed: "A traditional Sumi kick-fighting sport played using striking techniques with legs while jumping.",
        numberOfPlayers: "2 players",
        historicalOrigin: "Ancient Sumi martial sport.",
        skillsDeveloped: [
          "Balance",
          "Leg Strength",
          "Agility"
        ]
      }
    ],
    monuments: [
      {
        id: "kohima-war-cemetery",
        name: "Kohima War Cemetery",
        location: "Kohima",
        historicalPeriod: "1944 AD",
        builtBy: "Commonwealth War Graves Commission",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZimuJ9bFSkHtH8XmsOlKB2X-Cf7mzpBNNEWVobIHtf3CS--p51Ax_6js&s=10",
        historicalBackground: "Memorial dedicated to Allied soldiers of WWII who fought in the critical Battle of Kohima.",
        architecturalSignificance: "Built on the slopes of Garrison Hill with manicured terraced gardens.",
        culturalImportance: "Global symbol of peace and remembrance.",
        interestingFacts: [
          "Features the famous epitaph: 'When You Go Home, Tell Them Of Us And Say...'"
        ],
        tags: [
          "WWII",
          "Memorial",
          "History"
        ]
      }
    ],
    festivals: [
      {
        id: "hornbill-festival",
        name: "Hornbill Festival",
        nativeName: "Hornbill Festival",
        whenCelebrated: "December 1-10 annually",
        whereCelebrated: "Kisama Heritage Village, Kohima",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVMMBJL-1yrOm4e3oNmRZF0-1AuMoTtjDExTiR2HpvQ&s=10",
        origins: "Initiated by Government of Nagaland in 2000 to promote inter-tribal harmony.",
        culturalSignificance: "Known as 'Festival of Festivals', showcasing music, dances, traditional sports, and food of 17 Naga tribes.",
        traditionalFood: "Smoked meats, Rice beer, Bamboo shoot stir fry",
        traditionalClothing: "Tribal Naga shawls, headgear with hornbill feathers and boar tusks",
        musicAndDance: "Tribal war dances, folk choruses",
        interestingFacts: [
          "Named after the Great Indian Hornbill bird central to Naga folklore."
        ]
      }
    ],
    crafts: [
      {
        id: "naga-shawls",
        name: "Naga Tribal Shawl Weaving",
        category: "Weaving",
        region: "Kohima & Mokokchung",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPoTlNo3BiQJLYHER9-NeX7bYKhAleZ7VqpH7Kz9WuA&s=10",
        materials: [
          "Cotton thread",
          "Wool",
          "Natural pigments"
        ],
        techniques: [
          "Backstrap loin loom"
        ],
        culturalSignificance: "Patterns on shawls denote warrior status, social standing, and tribal identity.",
        processSteps: [
          "Prepare wool yarns",
          "Setup backstrap loom",
          "Weave distinct red, black, and white tribal bands"
        ],
        challengesFaced: "Protection of unique tribal Geographical Indication (GI) tags."
      }
    ],
    artisans: [
      {
        id: "neihunuo-sorhie",
        name: "Neihunuo Sorhie",
        craftType: "Naga Handloom Weaving",
        location: "Kohima",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvdsCFT76M3-kv26StxhOTevPqimvxWz-BFwMhCx2vg&s=10",
        quote: "Our shawls carry our history; each thread tells a warrior's journey.",
        story: "Master weaver awarded Padma Shri for preserving traditional loin-loom weaving.",
        yearsOfExperience: "35 years",
        awards: [
          "Padma Shri (2023)",
          "National Handicrafts Award"
        ]
      }
    ]
  },
  {
    id: "odisha",
    name: "Odisha",
    nativeName: "ଓଡ଼ିଶା",
    capital: "Bhubaneswar",
    zone: "East",
    tagline: "India's Best Kept Secret",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFMzl8yT6vOs-J36QCbfXu4UfD74Eq9kGVg_yQhvOWSXoWHYr2fC2gwO1&s=10",
    languages: {
      nativeLanguage: "Odia",
      dialects: [
        "Sambalpuri",
        "Desiya",
        "Balamgiri",
        "Ganjami"
      ],
      phrases: [
        {
          nativeWord: "ନମସ୍କାର",
          nativeScript: "ନମସ୍କାର",
          englishMeaning: "Greetings / Hello",
          phonetics: "Na-mas-kar",
          exampleSentence: "ଓଡ଼ିଶାକୁ ଆପଣଙ୍କୁ ସ୍ୱାଗତ। (Welcome to Odisha.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Dalkhai Song",
        nativeScript: "ଡାଲଖାଇ ଗୀତ",
        culturalSignificance: "Folk songs sung by women during the Dalkhai festival in Western Odisha.",
        whenPerformed: "Dussehra / Dalkhai festival",
        instruments: [
          "Dhol",
          "Nishan",
          "Tasa",
          "Mahuri"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Dalma",
        nativeName: "ଡାଲମା",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGyNbzp49XkkbH7iQwrdAGgC2gZKKmFUvvkCfZ4jr8g&s=10",
        courseType: "Main Course",
        dietary: "Vegetarian",
        prepTime: "35 mins",
        ingredients: [
          "Toor Dal",
          "Raw Papaya",
          "Pumpkin",
          "Plantain",
          "Panch Phoron",
          "Ghee"
        ],
        steps: [
          "Boil dal with chopped vegetables and turmeric.",
          "Temper with panch phoron, dried chilies, and ghee.",
          "Garnish with roasted cumin powder."
        ],
        culturalBackground: "A nutritious comfort staple offered as part of Mahaprasad at Lord Jagannath Temple."
      }
    ],
    traditions: [
      {
        title: "Gotipua Dance",
        category: "Folk Art",
        description: "Traditional dance form where young boys dress as women to praise Lord Jagannath with acrobatic poses.",
        significance: "Precursor to Classical Odissi dance, keeping ancient temple dance rituals alive.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCis0a6ds7mHiUBsHlkvgnvqqmWuZXPE8pL-kG61Qe3w&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Kaurikhela",
        nativeName: "କଉଡ଼ି ଖେଳ",
        howItIsPlayed: "Traditional board game played using cowrie shells as dice.",
        numberOfPlayers: "2-4 players",
        historicalOrigin: "Ancient game tied to Lakshmi Puja rituals.",
        skillsDeveloped: [
          "Strategy",
          "Counting"
        ]
      }
    ],
    monuments: [
      {
        id: "konark-sun-temple",
        name: "Konark Sun Temple",
        location: "Konark, Puri",
        historicalPeriod: "1250 AD",
        builtBy: "King Narasimhadeva I",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI26xltG2H9vackbZzrQWIFU5jdsv4RgsZRM749Fk42w7nnzGDhb2l2w4&s=10",
        historicalBackground: "13th-century Sun Temple designed in the shape of a monumental chariot.",
        architecturalSignificance: "Kalinga architecture with 24 carved stone wheels pulled by seven stone horses.",
        culturalImportance: "UNESCO World Heritage site symbolizing classical Indian architectural brilliance.",
        interestingFacts: [
          "The sundial wheels can calculate time accurately to the minute."
        ],
        tags: [
          "UNESCO",
          "Sun Temple",
          "Kalinga Architecture"
        ]
      }
    ],
    festivals: [
      {
        id: "rath-yatra",
        name: "Puri Rath Yatra",
        nativeName: "ରଥଯାତ୍ରା",
        whenCelebrated: "Ashadha Shukla Dwitiya (June-July)",
        whereCelebrated: "Puri",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEgXvXhknrl6-xebSmAHhYJmBHEvtlrZhGIxpo_9Apg&s=10",
        origins: "Ancient annual chariot procession of Lord Jagannath, Balabhadra, and Subhadra.",
        culturalSignificance: "Millions pull colossal wooden chariots to Gundicha Temple.",
        traditionalFood: "Khaja, Mahaprasad",
        traditionalClothing: "Traditional Odia cotton clothes",
        musicAndDance: "Ghanta Mridanga beatings, Sankirtan dance",
        interestingFacts: [
          "Chariots are built fresh every year using specific sacred woods without nails."
        ]
      }
    ],
    crafts: [
      {
        id: "pattachitra",
        name: "Pattachitra Scroll Painting",
        category: "Painting",
        region: "Raghurajpur, Puri",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W6AgSWhkrU_rWXRO0_-giJy_vRCejWQvRvii5IG-9oChIE2Yby-bi8Y&s=10",
        materials: [
          "Cloth canvas treated with chalk and tamarind gum",
          "Natural mineral colors"
        ],
        techniques: [
          "Fine line brushwork",
          "Traditional iconography"
        ],
        culturalSignificance: "Depicts mythologies of Lord Jagannath, Ramayana, and Mahabharata.",
        processSteps: [
          "Prepare patta canvas",
          "Draw outline using fine brush",
          "Apply natural stone colors",
          "Lacquer polish"
        ],
        challengesFaced: "High cost of natural pigments and lengthy preparation process."
      }
    ],
    artisans: [
      {
        id: "bijay-parida",
        name: "Bijay Kumar Parida",
        craftType: "Pattachitra Painting",
        location: "Raghurajpur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNHN82QmxYxzqRhCb9ytcFB6N6YmmKuN_M2t-NjGwaQ&s=10",
        quote: "Pattachitra is not just art; it is our devotion rendered on canvas.",
        story: "Heritage painter keeping Raghurajpur's master painting traditions vibrant.",
        yearsOfExperience: "32 years",
        awards: [
          "National Award for Master Craftsman"
        ]
      }
    ]
  },
  {
    id: "sikkim",
    name: "Sikkim",
    nativeName: "ꯁꯤꯛꯀꯤꯝ",
    capital: "Gangtok",
    zone: "North-East",
    tagline: "Small but Beautiful",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwkHEwkHhOj0Gk3OqjlKf8M3MvGPVCruGzxsXpiB9lU-9SuNH3TITeI0f&s=10",
    languages: {
      nativeLanguage: "Nepali",
      dialects: [
        "Bhutia",
        "Lepcha",
        "Limbu",
        "Sherpa"
      ],
      phrases: [
        {
          nativeWord: "Tashi Delek",
          nativeScript: "bkra shis bde legs",
          englishMeaning: "Blessings and Good Fortune / Hello",
          phonetics: "Ta-shi De-lek",
          exampleSentence: "Sikkim ma tapaai lai swaagat chha. (Welcome to Sikkim.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Lu Sung",
        nativeScript: "Lu Sung",
        culturalSignificance: "Bhutia harvest song celebrating successful crop gathering in valleys.",
        whenPerformed: "Losoong festival",
        instruments: [
          "Dramyin",
          "Flute"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Sel Roti",
        nativeName: "सेल रोटी",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgB-MXjwuGl-KKa-y8WlCSMPGcPSuajdIIp1lb8NJdow&s",
        courseType: "Snack",
        dietary: "Vegetarian",
        prepTime: "30 mins",
        ingredients: [
          "Rice Flour",
          "Sugar",
          "Cardamom",
          "Ghee"
        ],
        steps: [
          "Soak rice and grind into fine batter with sugar.",
          "Pour ring shapes into hot ghee.",
          "Fry till crispy and golden brown."
        ],
        culturalBackground: "Traditional Nepali ring-shaped sweet rice bread prepared during Maghe Sankranti and Dashain."
      }
    ],
    traditions: [
      {
        title: "Cham Masked Dance",
        category: "Buddhist Ritual Dance",
        description: "Sacred dance performed by Buddhist monks wearing elaborate wooden masks and robes.",
        significance: "Destroys evil forces and brings peace and spiritual enlightenment.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0qSHJSJDYtuROYmhx8aGdUnq2NDx1vvRdG-YQqXqRw&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Archery (Phaat)",
        nativeName: "Phaat",
        howItIsPlayed: "Traditional target-shooting competition using handmade bamboo bows and arrows.",
        numberOfPlayers: "2 or more",
        historicalOrigin: "Traditional Lepcha and Bhutia defense sport.",
        skillsDeveloped: [
          "Concentration",
          "Precision",
          "Upper Body Strength"
        ]
      }
    ],
    monuments: [
      {
        id: "rabdentse-ruins",
        name: "Rabdentse Ruins",
        location: "Pelling",
        historicalPeriod: "1670 AD",
        builtBy: "Tensung Namgyal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHTVCqnaG469l1npZm4vvVOfrzDAFd4EK6SPTju74nA&s=10",
        historicalBackground: "Second capital of the former kingdom of Sikkim destroyed during Nepalese invasions.",
        architecturalSignificance: "Stone chortens and palace wall ruins commanding views of Kanchenjunga.",
        culturalImportance: "Historic heart of the Namgyal dynasty.",
        interestingFacts: [
          "Surrounded by dense chestnut forests and bird sanctuaries."
        ],
        tags: [
          "Ruins",
          "Palace",
          "Sikkim Kingdom"
        ]
      }
    ],
    festivals: [
      {
        id: "losoong-festival",
        name: "Losoong (Namsoong)",
        nativeName: "Losoong",
        whenCelebrated: "December",
        whereCelebrated: "Monasteries statewide (Rumtek, Phodong)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHkcKaduqc72o4P9A40pUdzFfAElPubfEAn5K8Pm1MRNUF99ksN2PfmGNv&s=10",
        origins: "Sikkimese New Year marking the end of the harvest season.",
        culturalSignificance: "Monks perform sacred Cham dances to banish evil spirits for the upcoming year.",
        traditionalFood: "Tongba (Millet Beer), Sel Roti",
        traditionalClothing: "Bakhu (Bhutia gown) and Hanju shirt",
        musicAndDance: "Black Hat Cham dance",
        interestingFacts: [
          "Features traditional archery competitions alongside monastic dances."
        ]
      }
    ],
    crafts: [
      {
        id: "thangka-painting",
        name: "Thangka Painting",
        category: "Painting",
        region: "Gangtok & Rumtek",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuqGe_8A099fm8W6Ak-RePDibPxyUiNZTzroBx6dH_g&s=10",
        materials: [
          "Cotton silk canvas",
          "Gold dust",
          "Mineral paints"
        ],
        techniques: [
          "Grid measurement proportions",
          "Fine gold outlining"
        ],
        culturalSignificance: "Sacred scroll painting depicting Buddhist deities and mandalas.",
        processSteps: [
          "Prepare stretched canvas with gesso",
          "Grid accurate sacred geometry",
          "Paint deities",
          "Highlight with 24k gold leaf"
        ],
        challengesFaced: "Takes months of intensive focus and precise iconographic knowledge."
      }
    ],
    artisans: [
      {
        id: "karchung-lepcha",
        name: "Karchung Lepcha",
        craftType: "Lepcha Handloom & Bamboo Craft",
        location: "Dzongu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09rfDbcZbvP1dNYvbEJWCWUKsnQlx7xJAbXQMw32MEQ&s=10",
        quote: "Our weaves reflect the flora of Kanchenjunga.",
        story: "Preserving indigenous Lepcha natural weaving in the Dzongu reserve area.",
        yearsOfExperience: "26 years",
        awards: [
          "State Heritage Craftsman Award"
        ]
      }
    ]
  },
  {
    id: "telangana",
    name: "Telangana",
    nativeName: "తెలంగాణ",
    capital: "Hyderabad",
    zone: "South",
    tagline: "It's All Here",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPkPT2MauyWN4EXjwUgH0p_-Rq72i1hBfM3tPtSI-a5NIPNUb9QfNQeU&s=10",
    languages: {
      nativeLanguage: "Telugu",
      dialects: [
        "Telangana Dialect",
        "Hyderabadi Urdu"
      ],
      phrases: [
        {
          nativeWord: "నమస్కారం",
          nativeScript: "నమస్కారం",
          englishMeaning: "Greetings / Hello",
          phonetics: "Na-mas-ka-ram",
          exampleSentence: "తెలంగాణకు స్వాగతం. (Welcome to Telangana.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Bathukamma Patalu",
        nativeScript: "బతుకమ్మ పాటలు",
        culturalSignificance: "Folk songs sung in harmony by women while dancing around flower stacks.",
        whenPerformed: "Bathukamma festival",
        instruments: [
          "Clapping hands",
          "Dappu"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Sarva Pindi",
        nativeName: "సర్వ పిండి",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9puxGa45w5RWKzgws121cKZ0hMIo-Hq_YLHCbkKljrg&s=10",
        courseType: "Snack",
        dietary: "Vegetarian",
        prepTime: "30 mins",
        ingredients: [
          "Rice Flour",
          "Chana Dal",
          "Sesame Seeds",
          "Peanuts",
          "Green Chilies",
          "Curry Leaves"
        ],
        steps: [
          "Make dough using rice flour, soaked dal, and spices.",
          "Press flattened dough into a deep pan making small holes.",
          "Cook covered with oil until crispy."
        ],
        culturalBackground: "A traditional savory pancake from rural Telangana, high in fiber and flavor."
      }
    ],
    traditions: [
      {
        title: "Bathukamma Floral Stacking",
        category: "Floral Festival",
        description: "Women arrange seasonal flowers in concentric layers creating conical floral towers.",
        significance: "Honors Nature Goddess Maha Gauri and celebrates ecosystem vitality.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWxsp0naNYrE1lDZRS7F58EE3DPF1hpfdWHWxFvo684pRgKm3NUS5JcQ&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Goli Kaelu",
        nativeName: "గోటీల ఆట",
        howItIsPlayed: "Marble game where players flick glass marbles to hit targeted marbles outside a ring.",
        numberOfPlayers: "2-6 players",
        historicalOrigin: "Popular traditional outdoor street game across Telangana villages.",
        skillsDeveloped: [
          "Aiming",
          "Focal Accuracy"
        ]
      }
    ],
    monuments: [
      {
        id: "charminar",
        name: "Charminar",
        location: "Hyderabad",
        historicalPeriod: "1591 AD",
        builtBy: "Sultan Muhammad Quli Qutb Shah",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Charminar_Hyderabad_1.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        historicalBackground: "Built to commemorate the end of a deadly plague epidemic in Hyderabad.",
        architecturalSignificance: "Indo-Islamic architectural landmark with four ornate grand arches and 56-meter minarets.",
        culturalImportance: "Global symbol of Hyderabad and Telangana's heritage.",
        interestingFacts: [
          "Houses a mosque on its top floor for over 400 years."
        ],
        tags: [
          "Indo-Islamic",
          "Heritage",
          "Iconic"
        ]
      }
    ],
    festivals: [
      {
        id: "bonalu",
        name: "Bonalu",
        nativeName: "బోనాలు",
        whenCelebrated: "Ashada month (July-August)",
        whereCelebrated: "Hyderabad and Secunderabad",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrlTYvZebqzKbGUERygmOdTLzFqk49DjVPih61i6or50b5jEbHT8vP0qp&s=10",
        origins: "Thanksgiving festival dedicated to Goddess Mahakali.",
        culturalSignificance: "Women carry brass pots containing cooked rice, jaggery, and neem leaves decorated with turmeric and vermilion.",
        traditionalFood: "Bonam (Cooked Rice with Milk and Jaggery)",
        traditionalClothing: "Silk sarees with traditional gold jewellery",
        musicAndDance: "Potharaju dance and Dappu rhythm",
        interestingFacts: [
          "Potharaju (brother of the Goddess) leads the festival processions."
        ]
      }
    ],
    crafts: [
      {
        id: "pochampally-ikat",
        name: "Pochampally Ikat Weaving",
        category: "Weaving",
        region: "Bhoodan Pochampally, Yadadri Bhuvanagiri",
        image: "https://jrshandlooms.com/wp-content/uploads/2024/08/Handloom.jpg",
        materials: [
          "Silk and cotton yarn",
          "Natural/synthetic dyes"
        ],
        techniques: [
          "Double Ikat resistive tie-and-dye"
        ],
        culturalSignificance: "Pochampally is recognized as the 'Silk City of India' for unique geometric Ikat patterns.",
        processSteps: [
          "Bundle yarns",
          "Tie and dye yarns resistively according to pattern blueprint",
          "Weave on handlooms"
        ],
        challengesFaced: "Intricate mathematical tie-dye process prone to errors."
      }
    ],
    artisans: [
      {
        id: "gajam-anthaiah",
        name: "Gajam Anthaiah",
        craftType: "Pochampally Ikat",
        location: "Pochampally",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-odZ0D_dBSQtHAkrr4-S2JYlor7FgMKnl8RyLaIhrw&s=10",
        quote: "Every thread is dyed with precision before it touches the loom.",
        story: "Padma Shri winning weaver who revolutionized Telia Rumal and Ikat techniques.",
        yearsOfExperience: "45 years",
        awards: [
          "Padma Shri (2013)",
          "National Master Craftsman Award"
        ]
      }
    ]
  },
  {
    id: "tripura",
    name: "Tripura",
    nativeName: "ত্রিপুরা",
    capital: "Agartala",
    zone: "North-East",
    tagline: "Cultural Heritage of the North East",
    heroImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmPPS_5IaX_fv6JXx0d67X9QyNZUl9gY6AMKTMASaWhhglHLWyToMZXyp1VAEFf0RtrfCQKDnMKNOqkDlLsb5RtoHCqKlNXalcDJxy5i0s4zDTuSKB93ryZRl9sFITkA27TmqEhkCw=w326-h312-n-k-no",
    languages: {
      nativeLanguage: "Kokborok",
      dialects: [
        "Bengali",
        "Reang",
        "Chakma",
        "Jamatia"
      ],
      phrases: [
        {
          nativeWord: "Khumpui",
          nativeScript: "Khumpui",
          englishMeaning: "Welcome / Greetings",
          phonetics: "Khum-pui",
          exampleSentence: "Tripura-o nwngno khumpui. (Welcome to Tripura.)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Garia Song",
        nativeScript: "Garia Song",
        culturalSignificance: "Sung during the Garia Puja festival for agricultural prosperity.",
        whenPerformed: "Garia Puja (April)",
        instruments: [
          "Kham (drum)",
          "Sumui (flute)"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Mui Borok (Berma Dish)",
        nativeName: "Mui Borok",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhib4ZIkExb-8lLFJy6ojyYw3eFi7vkDpIOdyeVZEioQ&s=10",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "25 mins",
        ingredients: [
          "Berma (Fermented Fish)",
          "Vegetables",
          "Green Chilies",
          "Garlic"
        ],
        steps: [
          "Boil seasonal vegetables without oil.",
          "Add fermented fish (Berma) paste and crushed chilies.",
          "Cook until flavors fuse."
        ],
        culturalBackground: "Oil-free signature cuisine of indigenous Tripuri communities relying on Berma for seasoning."
      }
    ],
    traditions: [
      {
        title: "Hojagiri Dance",
        category: "Folk Dance",
        description: "Acractic dance performed by Reang women balancing pitching pitchers and lamps on their heads.",
        significance: "Demonstrates extraordinary physical balance and grace while worshiping Goddess Mailuma.",
        image: "https://static.wixstatic.com/media/ba2ea9_e54d77e998704bd5990ff9170e12f7ec~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/ba2ea9_e54d77e998704bd5990ff9170e12f7ec~mv2.jpg"
      }
    ],
    childhoodGames: [
      {
        gameName: "Dwikhong",
        nativeName: "Dwikhong",
        howItIsPlayed: "Traditional water-balancing game played in village streams.",
        numberOfPlayers: "2 or more",
        historicalOrigin: "Rural indigenous game played by Tripuri children.",
        skillsDeveloped: [
          "Balance",
          "Swimming"
        ]
      }
    ],
    monuments: [
      {
        id: "ujjayanta-palace",
        name: "Ujjayanta Palace",
        location: "Agartala",
        historicalPeriod: "1901 AD",
        builtBy: "Maharaja Radha Kishore Manikya",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNyZ14jBnCRKMY6hixiLGU6aj6fOeWGr75bvcV06PbA&s=10",
        historicalBackground: "Neoclassical palace that served as the royal seat of Manikya kings.",
        architecturalSignificance: "Blends Mughal, Roman, and European architectural elements with manicured Mughal-style gardens.",
        culturalImportance: "Houses the State Museum showcasing Northeast India's heritage.",
        interestingFacts: [
          "Named by Nobel Laureate Rabindranath Tagore."
        ],
        tags: [
          "Palace",
          "Manikya Dynasty",
          "Museum"
        ]
      }
    ],
    festivals: [
      {
        id: "kharchi-puja",
        name: "Kharchi Puja",
        nativeName: "खारची पूजा",
        whenCelebrated: "July (Ashadha)",
        whereCelebrated: "Fourteen Gods Temple, Old Agartala",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldNBO2YvC0SbJEfrZbV0lx6hJLwkRRWeNM5mB1-pCFQ&s=10",
        origins: "Royal festival of the Manikya dynasty dedicated to 14 patron deities.",
        culturalSignificance: "Cleanses Mother Earth post-menstruation/monsoon through sacred bathing rituals.",
        traditionalFood: "Peda, Mui Borok",
        traditionalClothing: "Rignai and Risa",
        musicAndDance: "Tripuri folk song and dance",
        interestingFacts: [
          "The 14 deity brass heads are dipped in the sacred Saidra river."
        ]
      }
    ],
    crafts: [
      {
        id: "tripura-bamboo-craft",
        name: "Tripura Cane & Bamboo Craft",
        category: "Woodwork",
        region: "Statewide",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zzSbgqytk3rJNzLLkcHxed9NyFYBtSFoqP2UBdnvPg&s=10",
        materials: [
          "Muli Bamboo",
          "Cane strips"
        ],
        techniques: [
          "Fine splitting",
          "Weaving",
          "Heat bending"
        ],
        culturalSignificance: "Renowned for producing some of India's finest bamboo screens, umbrellas, and furniture.",
        processSteps: [
          "Harvest mature bamboo",
          "Split into razor-thin strips",
          "Weave intricate decorative mats or baskets"
        ],
        challengesFaced: "Industrial plastic replacements."
      }
    ],
    artisans: [
      {
        id: "paresh-roy",
        name: "Paresh Chandra Roy",
        craftType: "Cane & Bamboo Handicrafts",
        location: "Agartala",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8epXrkbPzxDOamcNoSywDVuEStYl_ZkYRl_b_rXmbw&s=10",
        quote: "Bamboo is versatile; it can form delicate jewelry or strong homes.",
        story: "Master craftsman elevating Tripura bamboo products to international design markets.",
        yearsOfExperience: "38 years",
        awards: [
          "National Award for Bamboo Craft"
        ]
      }
    ]
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    nativeName: "उत्तर प्रदेश",
    capital: "Lucknow",
    zone: "North",
    tagline: "The Heartland of Indian Culture and Heritage",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKl-pGle2DyPRk98EAkSvSMC0MUM8WOFD8AOmXc4kKsDsPM-eegRpW8q4s&s=10",
    languages: {
      nativeLanguage: "Hindi",
      dialects: [
        "Awadhi",
        "Braj Bhasha",
        "Bhojpuri",
        "Bundeli"
      ],
      phrases: [
        {
          nativeWord: "नमस्ते",
          nativeScript: "नमस्ते",
          englishMeaning: "Hello / Greetings",
          phonetics: "Namaste",
          exampleSentence: "आपका उत्तर प्रदेश में स्वागत है (Namaste, welcome to Uttar Pradesh)."
        }
      ]
    },
    folkSongs: [
      {
        songName: "Kajri",
        nativeScript: "कजरी",
        culturalSignificance: "A classical folk song describing the yearning for lovers during the monsoon rains.",
        whenPerformed: "Monsoon season (Shravan month)",
        instruments: [
          "Harmonium",
          "Dholak",
          "Tabla"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Galouti Kebab",
        nativeName: "गलौटी कबाब",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoddO6PgHQzpvpUv0C-4zu3_8EOfYsOhXs-JWNOlwjWA&s=10",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "45 mins",
        ingredients: [
          "Minced Meat",
          "Raw Papaya",
          "Spices",
          "Ghee"
        ],
        steps: [
          "Marinate minced meat with raw papaya and spices",
          "Pan fry patties in pure ghee till soft"
        ],
        culturalBackground: "Invented for an elderly Nawab of Awadh who lost his teeth but still loved meat."
      }
    ],
    traditions: [
      {
        title: "Ganga Aarti",
        category: "Spiritual",
        description: "Daily ritual performed on the ghats of Varanasi and Ayodhya honoring the holy river Ganga.",
        significance: "Expresses gratitude to the river for sustaining life and spiritual purity.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iZnH6dl4ZhhXAk5QodZD0i-EA-FhvLwhACuhdTgpKQ&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Kanchay",
        nativeName: "कंचे",
        howItIsPlayed: "Players flick glass marbles into designated target holes or strike opponents' marbles.",
        numberOfPlayers: "2-6 players",
        historicalOrigin: "Played since ancient times across Northern rural heartlands.",
        skillsDeveloped: [
          "Hand-Eye Coordination",
          "Precision Focus"
        ]
      }
    ],
    monuments: [
      {
        id: "taj-mahal",
        name: "Taj Mahal",
        location: "Agra",
        historicalPeriod: "1631–1653 AD",
        builtBy: "Mughal Emperor Shah Jahan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLMAj2MC-OsougAlHC9G6zxRydrADTf3zOKlorXvypP09oa8dFuY9Lq8&s=10",
        historicalBackground: "Built as a tomb for Shah Jahan's beloved wife Mumtaz Mahal.",
        architecturalSignificance: "Pinnacle of Mughal architecture with pristine white marble inlay work.",
        culturalImportance: "UNESCO World Heritage site and global symbol of love.",
        interestingFacts: [
          "Changes color depending on the time of day",
          "Symmetrical architecture except for Shah Jahan's cenotaph"
        ],
        tags: [
          "UNESCO",
          "Mughal",
          "Wonder of World"
        ]
      }
    ],
    festivals: [
      {
        id: "lathmar-holi",
        name: "Lathmar Holi",
        nativeName: "लठमार होली",
        whenCelebrated: "February/March",
        whereCelebrated: "Barsana and Nandgaon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo9J73pmhXDrt1EaABC7uuB_sJcg6A7sfLLKjeFUbg&s=10",
        origins: "Reenacts Lord Krishna visiting Radha's village and getting playfully chased away by women.",
        culturalSignificance: "Unique celebration where women hit men with sticks (lathis) while men protect themselves with shields.",
        traditionalFood: "Thandai, Gujiya",
        traditionalClothing: "Bright ethnic Kurtas and Saris",
        musicAndDance: "Dhol Beats and traditional Braj folk songs",
        interestingFacts: [
          "Men prepare shields days in advance",
          "Over 100,000 visitors arrive in Barsana"
        ]
      }
    ],
    crafts: [
      {
        id: "chikankari",
        name: "Chikankari Embroidery",
        category: "Textile Art",
        region: "Lucknow",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPuWZm7RJAkvuQhoydqkux5k5e6dCT8e86QIIWHjREg&s=10",
        materials: [
          "Cotton Thread",
          "Muslin",
          "Georgette fabric"
        ],
        techniques: [
          "Shadow Work",
          "Jali Work",
          "Embossed Stitching"
        ],
        culturalSignificance: "Patronized by Nawabs of Awadh, representing delicate grace and courtly elegance.",
        processSteps: [
          "Block printing pattern",
          "Hand embroidery",
          "Washing and finishing"
        ],
        challengesFaced: "Competition from cheap machine-made imitations."
      }
    ],
    artisans: [
      {
        id: "ram-sahai",
        name: "Ram Sahai",
        craftType: "Chikankari Master",
        location: "Lucknow",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcqjlbe6aV9cEicgbkBA_2V5vNzse9sTjRd60UJEk0Q&s=10",
        quote: "Every stitch is a thread connecting us to Awadh's grand heritage.",
        story: "Learned the art of delicate Chikankari from his grandfather at age 12.",
        yearsOfExperience: "42 years",
        awards: [
          "National Handicrafts Award"
        ]
      }
    ]
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    nativeName: "उत्तराखंड",
    capital: "Dehradun",
    zone: "North",
    tagline: "Land of the Gods and Majestic Himalayas",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVq906IcYG-hei725_lJEMdzZ2LyXbJL_5yX1PvqdLwADIMKl4P3utZwU&s=10",
    languages: {
      nativeLanguage: "Garhwali",
      dialects: [
        "Kumaoni",
        "Jaunsari"
      ],
      phrases: [
        {
          nativeWord: "भला होया",
          nativeScript: "भला होया",
          englishMeaning: "Glad to meet you",
          phonetics: "Bhala Hoya",
          exampleSentence: "तमे मिलिक भला होया (Glad to meet you)."
        }
      ]
    },
    folkSongs: [
      {
        songName: "Bedu Pako Baro Masa",
        nativeScript: "बेड़ू पाको बारा मासा",
        culturalSignificance: "An iconic Garhwali folk song celebrating the flora and life of Himalayan hills.",
        whenPerformed: "Festivals and community gatherings",
        instruments: [
          "Hudka",
          "Dhol",
          "Damau"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Kafuli",
        nativeName: "काफली",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXbZwFf4Qj_OGZ287r6I_PAQOz1YTApeFcRJpPiDmXBYuolqOsw3IUEU5&s=10",
        courseType: "Main Course",
        dietary: "Vegetarian",
        prepTime: "30 mins",
        ingredients: [
          "Spinach",
          "Fenugreek Leaves",
          "Rice Paste",
          "Mustard Oil"
        ],
        steps: [
          "Boil green leaves",
          "Blend into smooth paste",
          "Cook with spices and rice gravy thickening agent"
        ],
        culturalBackground: "A traditional nutritious green curry eaten during cold mountain winters."
      }
    ],
    traditions: [
      {
        title: "Aipan Art",
        category: "Visual Folk Art",
        description: "Floor and wall paintings made with red clay (Geru) and rice paste (Biswar).",
        significance: "Brings good luck and guards households against negative energy.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZfmeevp3FIEoXv-xizPWZwmfQGCZpejOcW0GJB28LA&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Pithoo",
        nativeName: "पिठ्ठू",
        howItIsPlayed: "Knocking over a pile of flat stones using a ball and rebuilding it before being hit.",
        numberOfPlayers: "4-10 players",
        historicalOrigin: "Traditional outdoor sport across the Himalayan foothills.",
        skillsDeveloped: [
          "Agility",
          "Teamwork"
        ]
      }
    ],
    monuments: [
      {
        id: "kedarnath-temple",
        name: "Kedarnath Temple",
        location: "Rudraprayag",
        historicalPeriod: "8th Century AD",
        builtBy: "Adi Shankaracharya",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbf7vnVOIB7UiSIBczCaJt6-rSvFQu8YKRdb8kadEwJQ&s",
        historicalBackground: "One of the 12 Jyotirlingas of Lord Shiva situated high in the Garhwal Himalayas.",
        architecturalSignificance: "Constructed from giant gray granite stone slabs without mortar.",
        culturalImportance: "Premier pilgrimage site in the Char Dham Yatra.",
        interestingFacts: [
          "Survived the devastating 2013 flash floods almost unharmed",
          "Closed for 6 months during winter"
        ],
        tags: [
          "Pilgrimage",
          "Himalayas",
          "Shiva"
        ]
      }
    ],
    festivals: [
      {
        id: "phool-dei",
        name: "Phool Dei",
        nativeName: "फूल देई",
        whenCelebrated: "March (First day of Chaitra month)",
        whereCelebrated: "Garhwal and Kumaon regions",
        image: "https://colorsofuttarakhand.com/wp-content/uploads/2025/12/phool-die-festival-celebration.jpg",
        origins: "Harvest festival welcoming the spring season.",
        culturalSignificance: "Children pluck wild flowers and place them at doorsteps to wish prosperity.",
        traditionalFood: "Dei (Pudding made of jaggery, flour, and curd)",
        traditionalClothing: "Traditional Garhwali dress (Pichora for women)",
        musicAndDance: "Mangal Geet sung by women",
        interestingFacts: [
          "Children receive sweets and copper coins from householders"
        ]
      }
    ],
    crafts: [
      {
        id: "ringaal-craft",
        name: "Ringaal Bamboo Craft",
        category: "Handicrafts",
        region: "Chamoli & Almora",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvS2HOkrTsp-gTFcNbXqCRy_wm84Bp5rNWjqFVTKX8NQ&s=10",
        materials: [
          "Ringaal Bamboo strips"
        ],
        techniques: [
          "Weaving",
          "Splitting",
          "Braiding"
        ],
        culturalSignificance: "Essential eco-friendly utility items used by mountain farming communities.",
        processSteps: [
          "Harvest bamboo",
          "Thin strip splitting",
          "Hand-weaving into baskets"
        ],
        challengesFaced: "Depletion of natural bamboo forests."
      }
    ],
    artisans: [
      {
        id: "kamla-devi",
        name: "Kamla Devi",
        craftType: "Aipan Folk Artist",
        location: "Almora",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Kamaladevi_Chattopadhyay.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        quote: "Aipan is not just paint; it is a sacred prayer painted on earth.",
        story: "Preserving ancient geometric motifs taught by her mother for decades.",
        yearsOfExperience: "35 years",
        awards: [
          "State Cultural Heritage Award"
        ]
      }
    ]
  },
  {
    id: "andaman-and-nicobar-islands",
    name: "Andaman and Nicobar Islands",
    nativeName: "अण्डमान और निकोबार द्वीप समूह",
    capital: "Port Blair",
    zone: "Union Territory",
    tagline: "Emerald Islands of Untouched Beauty",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKXnI44vRRnhL_T-JDfGBmIXrcwns_SBMEBaeyyI6h8FS0pSSu1ppHhIWR&s=10",
    languages: {
      nativeLanguage: "Bengali",
      dialects: [
        "Nicobarese",
        "Hindi",
        "Tamil"
      ],
      phrases: [
        {
          nativeWord: "Khub Bhalo",
          nativeScript: "খুব ভালো",
          englishMeaning: "Very Good",
          phonetics: "Khub Bhalo",
          exampleSentence: "Ei jaiga ta khub bhalo (This place is very good)."
        }
      ]
    },
    folkSongs: [
      {
        songName: "Nicobarese Tribal Chant",
        culturalSignificance: "Chanted during tribal ceremonies to invoke ancestor spirits and pray for bountiful harvests.",
        whenPerformed: "Ossuary Feast",
        instruments: [
          "Bamboo flutes",
          "Gongs"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Island Fish Curry",
        nativeName: "माछेर झोल / Fish Curry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPD6sHiqEjLgjG_uMvdJOZxvcI_fUK4bMRp_UI3EHsqQ&s=10",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "25 mins",
        ingredients: [
          "Fresh Sea Fish",
          "Coconut Milk",
          "Mustard Paste",
          "Green Chillies"
        ],
        steps: [
          "Marinate fish",
          "Simmer gently in coconut milk base with aromatic local spices"
        ],
        culturalBackground: "Reflects coastal tropical influences and rich marine life."
      }
    ],
    traditions: [
      {
        title: "Ossuary Feast",
        category: "Tribal Tradition",
        description: "Unique Nicobarese ritual honoring departed family members.",
        significance: "Strengthens ancestral kinship ties and community solidarity.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKz238UbQ-DjkSSAOR0eEdQhufpmPzgdQBgJ1gdj9NdkjOWqXerBUtXme&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Canoe Race",
        nativeName: "Hodi",
        howItIsPlayed: "Traditional indigenous canoe balancing and racing competition.",
        numberOfPlayers: "4-12 per canoe",
        historicalOrigin: "Practiced by indigenous Nicobarese tribes for seafaring skill development.",
        skillsDeveloped: [
          "Stamina",
          "Team Synchronicity"
        ]
      }
    ],
    monuments: [
      {
        id: "cellular-jail",
        name: "Cellular Jail",
        location: "Port Blair",
        historicalPeriod: "1896–1906 AD",
        builtBy: "British Colonial Government",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-bGwZnfLTNvOaMWVAJ7kjRIUV35t6uFZ4vK5x-RhgFe0h9DV9lLYeAEK&s=10",
        historicalBackground: "Colonial prison used to exile Indian political freedom fighters (Kala Pani).",
        architecturalSignificance: "Radial design with 7 wings emanating from a central watchtower.",
        culturalImportance: "National memorial commemorating the sacrifices of India's freedom fighters.",
        interestingFacts: [
          "Designed so prisoners could not communicate with each other",
          "Now houses a eternal flame of tribute"
        ],
        tags: [
          "Freedom Struggle",
          "History",
          "National Memorial"
        ]
      }
    ],
    festivals: [
      {
        id: "island-tourism-festival",
        name: "Island Tourism Festival",
        whenCelebrated: "January",
        whereCelebrated: "Port Blair",
        image: "https://www.swantour.com/blogs/wp-content/uploads/2019/05/Island-Tourism-Festival.jpg",
        origins: "Initiated by the island administration to showcase local culture.",
        culturalSignificance: "Brings together mainland artists, local tribes, and international tourists.",
        traditionalFood: "Seafood Barbecue",
        traditionalClothing: "Casual Tropical wear / Tribal garments",
        musicAndDance: "Pan-Indian and local tribal folk dances",
        interestingFacts: [
          "Lasts for 10 action-packed days"
        ]
      }
    ],
    crafts: [
      {
        id: "shell-craft",
        name: "Ocean Shell Handicrafts",
        category: "Shell Art",
        region: "Port Blair",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyZP1dK3K9L4_kAqYmL3DgnDmVJwO2GEME6ctBTkUZA&s=10",
        materials: [
          "Sea Shells",
          "Mother of Pearl",
          "Resin"
        ],
        techniques: [
          "Carving",
          "Polishing",
          "Assembling"
        ],
        culturalSignificance: "Handmade souvenirs representing island life and marine treasures.",
        processSteps: [
          "Cleaning raw shells",
          "Grinding and polishing",
          "Engraving designs"
        ],
        challengesFaced: "Strict environmental laws restricting shell collection from beaches."
      }
    ],
    artisans: [
      {
        id: "subhash-chandra",
        name: "Subhash Chandra",
        craftType: "Shell Carving Artisan",
        location: "Port Blair",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjtv4u6K3AlBDrsOe_vOnFYKnxGJYSt-RVjAtfjc2-w&s=10",
        quote: "The ocean yields beauty that we carve into timeless art.",
        story: "Crafting intricate decorative lamps and ornaments from discarded sea shells for 25 years.",
        yearsOfExperience: "25 years",
        awards: [
          "State Craftsman Award"
        ]
      }
    ]
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    nativeName: "चण्डीगढ़ / ਚੰਡੀਗੜ੍ਹ",
    capital: "Chandigarh",
    zone: "Union Territory",
    tagline: "The City Beautiful",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6mzY5vdEnXaGm1L0JMNnOduNX6lt1fvMsN2Gvj9dwnKKYdMcTy0aXF1h&s=10",
    languages: {
      nativeLanguage: "Punjabi",
      dialects: [
        "Hindi",
        "English"
      ],
      phrases: [
        {
          nativeWord: "ਕੀ हाल ਹੈ?",
          nativeScript: "ਕੀ हाल ਹੈ?",
          englishMeaning: "How are you?",
          phonetics: "Kee Haal Hai?",
          exampleSentence: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਕੀ हाल ਹੈ? (Hello, how are you?)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Tappa",
        nativeScript: "ਟੱਪਾ",
        culturalSignificance: "Fast-paced Punjabi folk song style filled with humor and romantic banter.",
        whenPerformed: "Weddings and social gatherings",
        instruments: [
          "Dholki",
          "Chimta"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Chole Bhature",
        nativeName: "ਛੋਲੇ ਭਟੂਰੇ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeADLONIUW85GclyAgxqCShJC8oNnRwccJmqC3ImoVpA&s=10",
        courseType: "Main Course",
        dietary: "Vegetarian",
        prepTime: "30 mins",
        ingredients: [
          "Chickpeas",
          "Spices",
          "Refined Flour",
          "Yogurt"
        ],
        steps: [
          "Spiced chickpea curry cooked with chana masala",
          "Deep fry puffed flour breads"
        ],
        culturalBackground: "The ultimate comfort food beloved across Chandigarh food stalls."
      }
    ],
    traditions: [
      {
        title: "Open-Hand Philosophy",
        category: "Urban Culture",
        description: "City philosophy of peace, openness to give, and openness to receive.",
        significance: "Embodied by Le Corbusier's Open Hand Monument symbolizing international unity.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLEIT9j7Xn6bGqdt1i5vo-xcMQbXYvV4nS4zlTCaxKg&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Gulli Danda",
        nativeName: "ਗੁੱਲੀ ਡੰਡਾ",
        howItIsPlayed: "Hitting a small wooden danda with a larger stick to hit it as far as possible.",
        numberOfPlayers: "2 or more players",
        historicalOrigin: "Ancient rural game popular in Northern urban parks.",
        skillsDeveloped: [
          "Hand-Eye Coordination",
          "Striking Power"
        ]
      }
    ],
    monuments: [
      {
        id: "rock-garden",
        name: "Rock Garden of Chandigarh",
        location: "Sector 1, Chandigarh",
        historicalPeriod: "1957 AD (Opened 1976)",
        builtBy: "Nek Chand",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwF7bHe-lRqgiNBlEgoXupirgBI1kGS512Genfqqti4KfcU3WgistM6u0&s=10",
        historicalBackground: "Built secretively by government official Nek Chand out of industrial and home waste.",
        architecturalSignificance: "Unique eco-sculpture garden spanning 40 acres using recycled tiles and glass.",
        culturalImportance: "Global masterpiece of outsider art and sustainable design.",
        interestingFacts: [
          "Built entirely from urban waste",
          "Contains over 5,000 statues"
        ],
        tags: [
          "Outsider Art",
          "Eco-Friendly",
          "Modern"
        ]
      }
    ],
    festivals: [
      {
        id: "rose-festival",
        name: "Chandigarh Rose Festival",
        whenCelebrated: "February / March",
        whereCelebrated: "Zakir Hussain Rose Garden",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVCykzAdK8nwhSct6rjwoIOmifWCTwaEPTQkIL5GB2PvBIUC4qZS6qwMR&s=10",
        origins: "Established to highlight the lush gardens and civic pride of the city.",
        culturalSignificance: "Showcases 1,600 different rose varieties with grand musical performances.",
        traditionalFood: "Amritsari Kulcha, Lassi",
        traditionalClothing: "Modern Urban & Punjabi Ethnic",
        musicAndDance: "Bhangra and Giddha performances",
        interestingFacts: [
          "Attracts over 300,000 visitors annually"
        ]
      }
    ],
    crafts: [
      {
        id: "phulkari-chandigarh",
        name: "Phulkari Embroidery",
        category: "Textile Art",
        region: "Chandigarh / Punjab",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0YMyvhrjUotcByVXJDtBfIGM82xBS-O7rtQlsRJchVCSY3w0R7oZW6c&s=10",
        materials: [
          "Darn Silk Thread",
          "Khaddar Fabric"
        ],
        techniques: [
          "Darning stitch from the reverse side"
        ],
        culturalSignificance: "Traditional floral embroidery handed down as dowry and heirloom gifts.",
        processSteps: [
          "Geometrical grid drawing",
          "Silk floss stitching from back",
          "Border work"
        ],
        challengesFaced: "Machine imitations diminishing demand for hand-stitched pieces."
      }
    ],
    artisans: [
      {
        id: "gurmeet-kaur",
        name: "Gurmeet Kaur",
        craftType: "Phulkari Artisan",
        location: "Sector 35, Chandigarh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDn-HZ9DrfynaQfJFZahkZeNt7sHz8pVFStoIurU3aQ&s=10",
        quote: "Phulkari is the blossoming of a woman's dreams on cloth.",
        story: "Has taught over 200 young women the intricate traditional darning techniques.",
        yearsOfExperience: "30 years",
        awards: [
          "State Crafts Excellence Award"
        ]
      }
    ]
  },
  {
    id: "dadra-and-nagar-haveli-and-daman-and-diu",
    name: "Dadra and Nagar Haveli and Daman and Diu",
    nativeName: "दादरा एवं नगर हवेली और दमन एवं दीव",
    capital: "Daman",
    zone: "Union Territory",
    tagline: "Where Portuguese Heritage Meets Coastal Charm",
    heroImage: "https://s7ap1.scene7.com/is/image/incredibleindia/1-baps-swaminarayan-temple-silvassa-dadra-and-nagar-haveli-2-city-hero?qlt=82&ts=1726737660598",
    languages: {
      nativeLanguage: "Gujarati",
      dialects: [
        "Warli",
        "Hindi",
        "Portuguese"
      ],
      phrases: [
        {
          nativeWord: "કેમ છો",
          nativeScript: "કેમ છો",
          englishMeaning: "How are you?",
          phonetics: "Kem Cho",
          exampleSentence: "તમે કેમ છો? (How are you?)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Tarpa Dance Song",
        culturalSignificance: "Song played alongside the wind instrument Tarpa during tribal harvest festivities.",
        whenPerformed: "Post-harvest season",
        instruments: [
          "Tarpa",
          "Dhol"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Damanese Prawn Balchão",
        nativeName: "Prawn Balchao",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwrXuMcnzLM-2MXR7AUXQU_0uY3FyHJNrPE9bUno-qXTl8q7ssRsqtNyY&s=10",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "35 mins",
        ingredients: [
          "Prawns",
          "Vinegar",
          "Red Chillies",
          "Garlic"
        ],
        steps: [
          "Sauté spicy vinegar masala paste",
          "Add fresh prawns and simmer till cooked"
        ],
        culturalBackground: "Indo-Portuguese fusion dish with tangy and spicy flavors."
      }
    ],
    traditions: [
      {
        title: "Warli Tribal Wall Painting",
        category: "Folk Art Tradition",
        description: "Monochromatic folk art depicting daily life and harmony with nature.",
        significance: "Celebrates tribal fertility rituals and ancestral beliefs.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/warli-art-maharashtra-1-craft-hero?qlt=82&ts=1726674319976"
      }
    ],
    childhoodGames: [
      {
        gameName: "Gillidanda Tribal",
        nativeName: "Gulli Danda",
        howItIsPlayed: "Traditional stick and peg striking game played in rural forests.",
        numberOfPlayers: "4-8 players",
        historicalOrigin: "Indigenous Warli youth recreational past-time.",
        skillsDeveloped: [
          "Hand-Eye Coordination",
          "Outdoor Stamina"
        ]
      }
    ],
    monuments: [
      {
        id: "diu-fort",
        name: "Diu Fort",
        location: "Diu",
        historicalPeriod: "1535 AD",
        builtBy: "Portuguese Colonial Empire",
        image: "https://cdnbbsr.s3waas.gov.in/s371e09b16e21f7b6919bbfc43f6a5b2f0/uploads/2020/10/2020102288-scaled-e1603439463808.jpg",
        historicalBackground: "Colonial sea fort constructed after a alliance agreement with Gujarat Sultan Bahadur Shah.",
        architecturalSignificance: "Massive stone fortress surrounded by sea water on three sides with old cannons.",
        culturalImportance: "Key historical landmark reflecting Portuguese maritime domination.",
        interestingFacts: [
          "Houses a lighthouse overlooking the Arabian Sea",
          "Features three historic baroque churches inside"
        ],
        tags: [
          "Portuguese",
          "Fort",
          "Coastal"
        ]
      }
    ],
    festivals: [
      {
        id: "nani-daman-carnival",
        name: "Daman Carnival",
        whenCelebrated: "February",
        whereCelebrated: "Daman",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBhAOOpcc5RS6VZagBDIARfzKbeX_8EOU4E5nGdQ4NRb6o5xMHBLoCnPK&s=10",
        origins: "Portuguese colonial legacy merged with local Gujarati folk traditions.",
        culturalSignificance: "Vibrant street parades with traditional masks, brass bands, and Portuguese dances.",
        traditionalFood: "Seafood Tamales, Bebinca",
        traditionalClothing: "Colorful Iberian & Gujarati costumes",
        musicAndDance: "Mando and Verdigao dances",
        interestingFacts: [
          "Celebrated with vibrant street parades before Lent"
        ]
      }
    ],
    crafts: [
      {
        id: "warli-painting-craft",
        name: "Warli Tribal Art",
        category: "Folk Painting",
        region: "Dadra & Nagar Haveli",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngG6aA32x1bzUKlQJNr-ZLyRgghPi_vxfDH4cMvJe3Q&s=10",
        materials: [
          "Rice Paste",
          "Geru (Red Ochre)",
          "Bamboo Stick brushes"
        ],
        techniques: [
          "Geometric shapes (Circle, Triangle, Square) representing elements of nature"
        ],
        culturalSignificance: "Depicts rural life, harvest, and Mother Nature worship.",
        processSteps: [
          "Coat mud wall with red ochre",
          "Paint scenes using white rice paste"
        ],
        challengesFaced: "Commercialization altering authentic natural pigment usage."
      }
    ],
    artisans: [
      {
        id: "jivya-soma",
        name: "Ramesh Hengadi",
        craftType: "Warli Painter",
        location: "Silvassa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bDLtpBLTdpq3nexE3c6kwDlXWCzIxd5nPtvyYFGnoQ&s=10",
        quote: "Our art is our language with the forest and spirits.",
        story: "Promoting indigenous tribal art through international workshops while preserving ancient symbols.",
        yearsOfExperience: "22 years",
        awards: [
          "National Tribal Art Award"
        ]
      }
    ]
  },
  {
    id: "delhi",
    name: "Delhi",
    nativeName: "दिल्ली / دلی",
    capital: "New Delhi",
    zone: "Union Territory",
    tagline: "The Historic Heart of India",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8V0N69g_iJL_vMYmYXK4GuM4bqVxHg6Wp_Ki9BPt_n0DrTv_7eOgvjk8l&s=10",
    languages: {
      nativeLanguage: "Hindi",
      dialects: [
        "Punjabi",
        "Urdu",
        "English"
      ],
      phrases: [
        {
          nativeWord: "क्या हाल है?",
          nativeScript: "क्या हाल है?",
          englishMeaning: "How are you doing?",
          phonetics: "Kya Haal Hai?",
          exampleSentence: "अरे भाई, क्या हाल है? (Hey brother, how are you doing?)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Qawwali",
        nativeScript: "क़व्वाली",
        culturalSignificance: "Sufi devotional music originated in Delhi's shrine of Nizamuddin Auliya.",
        whenPerformed: "Thursday evenings at Sufi Dargahs",
        instruments: [
          "Harmonium",
          "Tabla",
          "Hand Claps"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Butter Chicken",
        nativeName: "बटर चिकन",
        image: "https://thekitchenpaper.com/wp-content/uploads/2018/01/indian-butter-chicken-recipe-1.jpg",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "40 mins",
        ingredients: [
          "Tandoori Chicken",
          "Butter",
          "Tomato Gravy",
          "Cream"
        ],
        steps: [
          "Grill marinated chicken in tandoor",
          "Simmer in velvety rich tomato, butter, and cream gravy"
        ],
        culturalBackground: "Invented at Moti Mahal restaurant in Daryaganj, Old Delhi."
      }
    ],
    traditions: [
      {
        title: "Phool Walon Ki Sair",
        category: "Interfaith Tradition",
        description: "Annual festival of flower-sellers offering floral fans to Sufi shrine and Hindu temple.",
        significance: "Promotes communal harmony and secular unity in Delhi.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aUZh0G-atcPguxmr5pJq6sxHd0VDew1goK2kfAGJ5VVlIg4v2rMClmLA&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Kite Flying (Patang Bazi)",
        nativeName: "पतंग बाज़ी",
        howItIsPlayed: "Dueling kites in the sky attempting to cut the thread (Manjha) of rival kites.",
        numberOfPlayers: "2 or more",
        historicalOrigin: "Patronized by Mughal emperors in Old Delhi.",
        skillsDeveloped: [
          "Strategic Control",
          "Wind Awareness"
        ]
      }
    ],
    monuments: [
      {
        id: "qutub-minar",
        name: "Qutub Minar",
        location: "Mehrauli, New Delhi",
        historicalPeriod: "1192 AD",
        builtBy: "Qutb ud-Din Aibak",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasViCu3pMW1Ecbm_v7R4BwL6VRPOk4u_DTPiMnxEsnetOQDvhQgMVm28&s=10",
        historicalBackground: "Built to celebrate victory and mark the start of the Delhi Sultanate.",
        architecturalSignificance: "World's tallest brick minaret standing at 72.5 meters with intricate Quranic inscriptions.",
        culturalImportance: "UNESCO World Heritage landmark in historical Mehrauli complex.",
        interestingFacts: [
          "Iron Pillar in the complex has not rusted in 1,600 years",
          "Incline of 65 cm"
        ],
        tags: [
          "UNESCO",
          "Sultanate",
          "Minaret"
        ]
      }
    ],
    festivals: [
      {
        id: "dilli-haat-utsav",
        name: "Delhi International Arts Festival",
        whenCelebrated: "October / November",
        whereCelebrated: "Across Delhi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ighuzr1FZ-1yKowA40iVsILjzeCo-UmKEk9-KMp7Wg&s=10",
        origins: "Modern initiative to position Delhi as global cultural capital.",
        culturalSignificance: "Brings traditional puppeteers, classical dancers, and international performers.",
        traditionalFood: "Chaat, Parathas, Daulat Ki Chaat",
        traditionalClothing: "Indo-Western and Ethnic Indian",
        musicAndDance: "Kathak, Sufi Qawwali, Modern Fusion",
        interestingFacts: [
          "Over 25 venues host events simultaneously"
        ]
      }
    ],
    crafts: [
      {
        id: "zardozi-delhi",
        name: "Zardozi Metallic Embroidery",
        category: "Textile Art",
        region: "Old Delhi (Chandni Chowk)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXNIbTyWF2bJsXcyrO4bSQm9GsWWCZ57McKbIEltJ_w&s=10",
        materials: [
          "Gold/Silver Threads",
          "Pearls",
          "Velvet",
          "Satin"
        ],
        techniques: [
          "Sewing metallic wires onto heavy fabrics"
        ],
        culturalSignificance: "Mughal royal court craft used for royal robes and canopies.",
        processSteps: [
          "Tracing design on fabric",
          "Framing fabric tightly",
          "Hand sewing gold threads"
        ],
        challengesFaced: "High cost of genuine precious metal threads."
      }
    ],
    artisans: [
      {
        id: "mohammad-zaki",
        name: "Mohammad Zaki",
        craftType: "Zardozi Master Craftsman",
        location: "Chandni Chowk, Old Delhi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChNal5bJ9zM325DgyNneh4cUkJfAIzwbJ08YI6F2weg&s=10",
        quote: "Zardozi is weaving royalty into every single thread.",
        story: "5th generation Zardozi artist embroidering couture garments for global runways.",
        yearsOfExperience: "38 years",
        awards: [
          "National Award for Craft Excellence"
        ]
      }
    ]
  },
  {
    id: "jammu-and-kashmir",
    name: "Jammu and Kashmir",
    nativeName: "जम्मू और कश्मीर / جموں و کشمیر",
    capital: "Srinagar",
    zone: "Union Territory",
    tagline: "Paradise on Earth",
    heroImage: "https://preview.redd.it/jammu-kashmir-trip-details-v0-6dtocebhgvie1.jpg?width=640&crop=smart&auto=webp&s=cdc7dbdebf9d5f6c50906868200689db7b78f33f",
    languages: {
      nativeLanguage: "Kashmiri",
      dialects: [
        "Dogri",
        "Gojri",
        "Pahari"
      ],
      phrases: [
        {
          nativeWord: "अस्सलामु अलैकुम",
          nativeScript: "السلام علیکم",
          englishMeaning: "Peace be upon you / Hello",
          phonetics: "Assalamu Alaikum",
          exampleSentence: "Assalamu Alaikum, Tohr kya haal chhu? (Hello, how are you?)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Rouf Song",
        nativeScript: "रऊफ़",
        culturalSignificance: "Traditional song sung during spring and festive occasions by women standing in row formations.",
        whenPerformed: "Eid and spring harvest",
        instruments: [
          "Tumbaknari",
          "Noot",
          "Rabab"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Kashmiri Wazwan Rogan Josh",
        nativeName: "रोग़न जोश",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRu-U2H9sJCh29JFYKzioJcUqu3AKwXSqhs2iU2ERdQ&s",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "60 mins",
        ingredients: [
          "Mutton",
          "Kashmiri Red Chilli",
          "Alkanet Root (Ratanjot)",
          "Fennel Powder"
        ],
        steps: [
          "Slow cook mutton chunks with aromatic spices and natural red coloring dye from Ratanjot herb"
        ],
        culturalBackground: "Crown jewel dish of the traditional 36-course Kashmiri Wazwan feast."
      }
    ],
    traditions: [
      {
        title: "Kahwa Tea Hospitality",
        category: "Culinary Hospitality",
        description: "Serving green tea infused with saffron, cinnamon, cardamom, and chopped almonds.",
        significance: "Symbol of Kashmiri warmth and welcoming honor for visitors.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KSb21LswFYI7MRzvdVSMeE0Bg2KHy8hDukvUiD8gbIDp0AdmC9CPkmo&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Saz Long (Hopscotch)",
        nativeName: "साज़ लोंग",
        howItIsPlayed: "Hopping through numbered grid squares rendered on ground while sliding a flat stone.",
        numberOfPlayers: "1 or more",
        historicalOrigin: "Traditional Kashmiri street game played across valleys.",
        skillsDeveloped: [
          "Balance",
          "Leg Strength"
        ]
      }
    ],
    monuments: [
      {
        id: "shalimar-bagh",
        name: "Shalimar Bagh",
        location: "Srinagar",
        historicalPeriod: "1619 AD",
        builtBy: "Mughal Emperor Jahangir",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPt9dglIY1C2tdDdAvETJ94wkCdWiX3QtQ6HGM7NlYfQ&s=10",
        historicalBackground: "Built by Jahangir for his beloved wife Nur Jahan on the shores of Dal Lake.",
        architecturalSignificance: "Classic Mughal garden design with terraced layouts, water channels, and carved fountains.",
        culturalImportance: "High mark of Mughal horticultural and architectural landscape art.",
        interestingFacts: [
          "Has three distinct terraced garden levels",
          "Features ancient Chinar trees"
        ],
        tags: [
          "Mughal Garden",
          "Srinagar",
          "Heritage"
        ]
      }
    ],
    festivals: [
      {
        id: "tulip-festival",
        name: "Kashmir Tulip Festival",
        whenCelebrated: "April",
        whereCelebrated: "Indira Gandhi Memorial Tulip Garden, Srinagar",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRQXYUpkgkycKxmADowEJIhHJpzRUIoI7VsF8rq2kpgBiRGuTpzy7lh5Z&s=10",
        origins: "Celebrates spring bloom in Asia's largest tulip garden.",
        culturalSignificance: "Welcomes tourists and celebrates valley floral spring rebirth.",
        traditionalFood: "Kashmiri Kahwa, Modur Pulao",
        traditionalClothing: "Pheran with Tilla work",
        musicAndDance: "Santoor recitals and Rouf dance",
        interestingFacts: [
          "Over 1.5 million tulips of 60 varieties bloom together"
        ]
      }
    ],
    crafts: [
      {
        id: "pashmina-shawls",
        name: "Pashmina & Kani Shawls",
        category: "Textile Art",
        region: "Srinagar",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtG6hbc4gY9bIRcmzr_evkABzJAQmVGysoh6UCjg-ozgCEd4APizuags&s=10",
        materials: [
          "Changthangi Pashmina Goat Wool",
          "Natural Dyes"
        ],
        techniques: [
          "Hand-spinning",
          "Kani wooden needle weaving"
        ],
        culturalSignificance: "World-famous luxurious hand-spun shawl revered by global royalty.",
        processSteps: [
          "Combing raw wool",
          "Spinning fine yarn",
          "Hand weaving on traditional looms"
        ],
        challengesFaced: "Counterfeit powerloom imitations sold as authentic handloom Pashmina."
      }
    ],
    artisans: [
      {
        id: "ghulam-hasan",
        name: "Ghulam Hasan",
        craftType: "Kani Shawl Weaver",
        location: "Kanihama, Srinagar",
        image: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2023/12/2023123052.jpg",
        quote: "A single Kani shawl takes a year of patience and soul.",
        story: "Carrying forward a 300-year-old family legacy of handweaving Kani masterpieces.",
        yearsOfExperience: "40 years",
        awards: [
          "National Handicraft Master Craftsman Award"
        ]
      }
    ]
  },
  {
    id: "ladakh",
    name: "Ladakh",
    nativeName: "ལ་དྭགས / लद्दाख",
    capital: "Leh",
    zone: "Union Territory",
    tagline: "Land of High Passes and Sacred Monasteries",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnIdO5jAtavyJIJkOphv6tLSn7-A1Miz0jBsFPLcJMxbozezp51Mt1UdN&s=10",
    languages: {
      nativeLanguage: "Ladakhi (Bhoti)",
      dialects: [
        "Balti",
        "Purigi",
        "Pahari"
      ],
      phrases: [
        {
          nativeWord: "ཇུལ་ལེ།",
          nativeScript: "ཇུལ་ལེ།",
          englishMeaning: "Hello / Thank you / Goodbye",
          phonetics: "Julley",
          exampleSentence: "Julley! Khamzang yea? (Hello! How are you?)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Gla-glu Folk Song",
        culturalSignificance: "Poetic high-altitude folk melodies praising mountain peaks, horses, and Buddhist ideals.",
        whenPerformed: "Losar and auspicious occasions",
        instruments: [
          "Daman",
          "Surna"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Ladakhi Thukpa",
        nativeName: "ཐུག་པ།",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBV9Wyopc-GTOVQp-hFsNzk2inHHVqsYPsFgltDUJ1mg&s=10",
        courseType: "Main Course",
        dietary: "Vegetarian",
        prepTime: "30 mins",
        ingredients: [
          "Handmade Noodle Strips",
          "Mountain Vegetables",
          "Garlic",
          "Clear Broth"
        ],
        steps: [
          "Boil aromatic garlic vegetable broth",
          "Add hand-cut wheat noodles and simmer until hearty"
        ],
        culturalBackground: "Warming staple noodle soup designed for sub-zero high altitude climate."
      }
    ],
    traditions: [
      {
        title: "Cham Masked Dance",
        category: "Spiritual Performance",
        description: "Sacred ritual dance performed by Buddhist monks wearing intricate painted deity masks.",
        significance: "Destroys evil forces and brings peace and enlightenment.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPmLpTcudWBXj24_qQh4VqvpXMb5S1E9P7HCeBd662S3yJ3n7KxlCyO4&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Archery (Mada)",
        nativeName: "མདའ།",
        howItIsPlayed: "Target archery using traditional wooden bows accompanied by music and banter.",
        numberOfPlayers: "2 or more teams",
        historicalOrigin: "Ancient martial skill transformed into community sport.",
        skillsDeveloped: [
          "Concentration",
          "Precision"
        ]
      }
    ],
    monuments: [
      {
        id: "hemis-monastery",
        name: "Hemis Monastery",
        location: "Hemis, Leh",
        historicalPeriod: "1672 AD",
        builtBy: "King Sengge Namgyal",
        image: "https://discoverlehladakh.in/wp-content/uploads/2020/06/Hemis-monastery-1022x530.jpeg",
        historicalBackground: "Re-established under the patronage of the Namgyal dynasty king.",
        architecturalSignificance: "Tibetan monastic style built on a cliff with sacred thangkas and golden statues.",
        culturalImportance: "Largest and wealthiest Himalayan Buddhist monastery in Ladakh.",
        interestingFacts: [
          "Houses world's largest Thangka canvas unrolled once every 12 years"
        ],
        tags: [
          "Monastery",
          "Buddhism",
          "Himalayas"
        ]
      }
    ],
    festivals: [
      {
        id: "hemis-festival",
        name: "Hemis Festival",
        whenCelebrated: "June / July",
        whereCelebrated: "Hemis Monastery Courtyard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsapeqnAo_yfUm7iLBZ36bXWRm99ulwLUw5QXud_sW0zwwjEsrbJ7idLEn&s=10",
        origins: "Commemorates the birth anniversary of Guru Padmasambhava.",
        culturalSignificance: "Features spectacular Cham masked dances and traditional music.",
        traditionalFood: "Skyu, Butter Tea (Gur Gur Chai)",
        traditionalClothing: "Goncha (Woolen Robes) with Perak headgear",
        musicAndDance: "Monastic horns (Dungchen) and Cham dance",
        interestingFacts: [
          "Monks spend months in spiritual meditation before performing"
        ]
      }
    ],
    crafts: [
      {
        id: "thangka-scroll-painting",
        name: "Thangka Scroll Painting",
        category: "Sacred Painting Art",
        region: "Leh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_HeG3QtLAMZGqrOOWlUwegisY8y0B-CqYP3BYBTXK67qTFH6qv5nsfyAR&s=10",
        materials: [
          "Cotton Canvas",
          "Mineral Pigments",
          "24k Gold Powder"
        ],
        techniques: [
          "Precise iconography proportions according to Buddhist scriptures"
        ],
        culturalSignificance: "Sacred meditation tool depicting Buddhist deities and mandalas.",
        processSteps: [
          "Canvas stretching and sizing",
          "Grid geometry drawing",
          "Mineral painting and gold outlining"
        ],
        challengesFaced: "Shortage of natural mineral pigments."
      }
    ],
    artisans: [
      {
        id: "rigzin-namgyal",
        name: "Rigzin Namgyal",
        craftType: "Thangka Painter",
        location: "Leh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxIfjwKhDr0mLy9u-5GvUdhaGFhU8Bbv4_1q4d7eZY1YmBVuH2ANZnxY&s=10",
        quote: "In every brushstroke of a Thangka, the mind finds tranquility.",
        story: "Trained in monastic retreats for 15 years to master gold leaf Thangka art.",
        yearsOfExperience: "28 years",
        awards: [
          "State Award for Master Artistry"
        ]
      }
    ]
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    nativeName: "ലക്ഷദ്വീപ് / लक्षद्वीप",
    capital: "Kavaratti",
    zone: "Union Territory",
    tagline: "Coral Paradise of Coral Reefs and Turquoise Lagoons",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJojkTMfo3Rlr_VNj-JTURC4-6LuDX7B6aYJpGVFeQxz4eWwZrIss5hOo&s=10",
    languages: {
      nativeLanguage: "Malayalam",
      dialects: [
        "Jasheri",
        "Mahl"
      ],
      phrases: [
        {
          nativeWord: "സുഖമാണോ",
          nativeScript: "സുഖമാണോ",
          englishMeaning: "Are you doing fine?",
          phonetics: "Sukhamano",
          exampleSentence: "നിങ്ങൾക്ക് സുഖമാണോ? (Are you doing fine?)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Bandiya Folk Song",
        culturalSignificance: "Traditional song performed by women rhythmically tapping decorated pots.",
        whenPerformed: "Cultural festivals and weddings",
        instruments: [
          "Bandiya (Pot)",
          "Dholak"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Kavaratti Tuna Curry",
        nativeName: "ചൂര കറി",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwMW8sV3kXdlbUsFTdg5n6F-OgLHpJiihdQNvtvu_fw&s=10",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "25 mins",
        ingredients: [
          "Fresh Skipjack Tuna",
          "Grated Coconut",
          "Malabar Tamarind",
          "Curry Leaves"
        ],
        steps: [
          "Grind coconut with spices",
          "Cook fresh oceanic tuna chunks with tangy tamarind gravy"
        ],
        culturalBackground: "Staple island diet reliant on abundant local tuna fishing."
      }
    ],
    traditions: [
      {
        title: "Lava Dance",
        category: "Folk Dance Tradition",
        description: "Energetic rhythmic dance performed by male islanders clad in traditional attire.",
        significance: "Displays unity, stamina, and festive celebration in Minicoy island.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXottoMiyRaZ4WgjuOz5696W1EMg5YsQO5PPzWGAeAUg&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Lagori Island Style",
        nativeName: "सात पत्थर",
        howItIsPlayed: "Targeting stone stacks with coral pebbles and tagging opponents.",
        numberOfPlayers: "6-12 players",
        historicalOrigin: "Popular beachside game among coral island kids.",
        skillsDeveloped: [
          "Agility",
          "Speed"
        ]
      }
    ],
    monuments: [
      {
        id: "ujra-mosque",
        name: "Ujra Mosque",
        location: "Kavaratti",
        historicalPeriod: "17th Century AD",
        builtBy: "Sheikh Mohammad Kasim",
        image: "https://lh3.googleusercontent.com/grass-cs/ACvplmNBzBlEue4nCtygVEKBtMwQQTEU6NfYrgfCX-mTLmfbxv2TnhtlOxPcOpE0sHuJvIb84dAz3T56P6dv8C3hawQietnHrpSm1dPJw8bRiaMBfHrRv3cOyoue4KU9tpETzBYfI4th3w=w326-h312-n-k-no",
        historicalBackground: "Built by revered saint Sheikh Mohammad Kasim whose tomb lies inside.",
        architecturalSignificance: "Exquisite carved wooden pillars and ceiling with intricate floral motifs.",
        culturalImportance: "Most prominent spiritual landmark and architectural treasure in Lakshadweep.",
        interestingFacts: [
          "Carved from a single driftwood timber according to local legend",
          "Contains a well with reputed therapeutic water"
        ],
        tags: [
          "Heritage",
          "Wooden Architecture",
          "Spiritual"
        ]
      }
    ],
    festivals: [
      {
        id: "eid-ul-fitr-lakshadweep",
        name: "Eid-ul-Fitr",
        whenCelebrated: "Shawwal (Islamic Calendar)",
        whereCelebrated: "All inhabited Lakshadweep Islands",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioYhYRSUN89_K_F9O_C1LT1y7vE82qp8VaZAg6bY0MA&s=10",
        origins: "Islamic religious festival ending holy month of Ramadan.",
        culturalSignificance: "Mass beach prayers, island feasts, and community Lava dance performances.",
        traditionalFood: "Kiluji, Coconut Sweet dishes, Tuna Biryani",
        traditionalClothing: "Kachi and Libaas for women, White Mundu for men",
        musicAndDance: "Lava Dance and Duffmuttu",
        interestingFacts: [
          "Whole island communities feast together on beach fronts"
        ]
      }
    ],
    crafts: [
      {
        id: "coir-craft-lakshadweep",
        name: "Coir & Coconut Shell Crafts",
        category: "Eco-Craft",
        region: "Kavaratti & Kadmat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPM5YMmUz_HF7ZXYcq9A_63k3vxRYMgmVYgbjclaJ6g&s=10",
        materials: [
          "Coconut Husk Fiber",
          "Polished Shells"
        ],
        techniques: [
          "Coir spinning",
          "Shell carving and polishing"
        ],
        culturalSignificance: "Traditional sustainable livelihoods derived from abundant coconut trees.",
        processSteps: [
          "Soaking husk in sea water",
          "Beating fiber",
          "Spinning coir rope and crafting items"
        ],
        challengesFaced: "High freight transport costs to mainland markets."
      }
    ],
    artisans: [
      {
        id: "koyamma-koya",
        name: "Koyamma Koya",
        craftType: "Coir Craftsman",
        location: "Kavaratti",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIu0Ya8G9pGX6-g1qs2Y_HZw4vg3XzpIx6yJoXeZHsw&s=10",
        quote: "The coconut tree gives us everything we need for life and art.",
        story: "Master craftsman making hand-spun coir products and delicate shell crafts for 30 years.",
        yearsOfExperience: "30 years",
        awards: [
          "Union Territory Crafts Award"
        ]
      }
    ]
  },
  {
    id: "puducherry",
    name: "Puducherry",
    nativeName: "புதுச்சேரி",
    capital: "Puducherry",
    zone: "Union Territory",
    tagline: "The French Riviera of the East",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pondicherry-Rock_beach_aerial_view.jpg/960px-Pondicherry-Rock_beach_aerial_view.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    languages: {
      nativeLanguage: "Tamil",
      dialects: [
        "French",
        "English",
        "Telugu"
      ],
      phrases: [
        {
          nativeWord: "வணக்கம்",
          nativeScript: "வணக்கம்",
          englishMeaning: "Greetings / Hello",
          phonetics: "Vanakkam",
          exampleSentence: "புதுச்சேரிக்கு வரவேற்கிறோம், வணக்கம்! (Welcome to Puducherry, Vanakkam!)"
        }
      ]
    },
    folkSongs: [
      {
        songName: "Gharadi Folk Song",
        nativeScript: "கராடி இசை",
        culturalSignificance: "Mythological victory song associated with Lord Rama's monkey army performed with energetic steps.",
        whenPerformed: "Temple festivals",
        instruments: [
          "Gharadi Drums",
          "Cymbals"
        ]
      }
    ],
    recipes: [
      {
        dishName: "Creole Fish Curry",
        nativeName: "புதுச்சேரி மீன் குழம்பு",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovmjO7DL3ZWdAEdbYI_CI3N8kItsSjOslp2P4uq-sRQ&s=10",
        courseType: "Main Course",
        dietary: "Specialty",
        prepTime: "30 mins",
        ingredients: [
          "Coastal Sea Fish",
          "Coconut Milk",
          "Tamarind",
          "Aniseed"
        ],
        steps: [
          "Blend Tamil spices with French herbs like aniseed",
          "Simmer fish tenderly in light coconut gravy"
        ],
        culturalBackground: "Blend of Tamil coastal spices and subtle French culinary techniques."
      }
    ],
    traditions: [
      {
        title: "Auroville Universal Township",
        category: "Spiritual Culture",
        description: "Experimental international township dedicated to human unity and sustainable living.",
        significance: "Promotes global harmony beyond nationality, religion, and politics.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBqs7abzQQJJa_DxWa67pFL75qr_suuoGYs0yrbJ84w&s=10"
      }
    ],
    childhoodGames: [
      {
        gameName: "Pandi (Hopscotch)",
        nativeName: "பாண்டி",
        howItIsPlayed: "Hopping on a chalked grid on streets sliding a flat tile across sectors.",
        numberOfPlayers: "2 or more",
        historicalOrigin: "Traditional Tamil street game popular in White Town backyards.",
        skillsDeveloped: [
          "Balance",
          "Leg Precision"
        ]
      }
    ],
    monuments: [
      {
        id: "matrimandir",
        name: "Matrimandir",
        location: "Auroville, Puducherry",
        historicalPeriod: "1971–2008 AD",
        builtBy: "Mirra Alfassa (The Mother)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLb7KVXcqTExDHu1M52-8WfWRMcenponqF-dvgdIvKXw&s=10",
        historicalBackground: "Conceived as a symbol of the Divine's answer to man's aspiration for perfection.",
        architecturalSignificance: "Giant golden geodesic dome containing an inner silent meditation chamber with a crystal globe.",
        culturalImportance: "Global beacon for silent meditation, peace, and spiritual consciousness.",
        interestingFacts: [
          "Gold discs covering the dome are made of real gold leaf",
          "Uses solar power completely"
        ],
        tags: [
          "Spiritual",
          "Architecture",
          "Auroville"
        ]
      }
    ],
    festivals: [
      {
        id: "mascarad-carnival",
        name: "Masi Magam Festival",
        nativeName: "மாசி மகம்",
        whenCelebrated: "February / March",
        whereCelebrated: "Puducherry Coast",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLj5Y2a2qESdu0CoLlGMhZ0O8Yie1fQVj3NYJ4oCbQGw&s=10",
        origins: "Ancient Tamil temple tradition of immersion of deity idols in sea water.",
        culturalSignificance: "Grand holy sea dip ritual involving procession of sixty temple deities.",
        traditionalFood: "Sakarai Pongal, Puliyodarai",
        traditionalClothing: "Traditional Silk Dhotis and Kanchipuram Saris",
        musicAndDance: "Nadaswaram and Thavil music",
        interestingFacts: [
          "Deities from dozens of surrounding village temples gather on beach"
        ]
      }
    ],
    crafts: [
      {
        id: "cluny-embroidery",
        name: "Cluny Lace & Paper Craft",
        category: "Heritage Craft",
        region: "White Town, Puducherry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2A5w-L64TUNXy6OowmJ-dOmZkP4ouv8IXV_THxzHbzg&s=10",
        materials: [
          "Cotton Lace Threads",
          "Handmade Paper"
        ],
        techniques: [
          "19th-century French bobbin lace work and eco-friendly paper making"
        ],
        culturalSignificance: "Colonial French convent craft tradition preserved for social empowerment.",
        processSteps: [
          "Bobbin winding",
          "Pattern pinning on pillow",
          "Intricate lace weaving"
        ],
        challengesFaced: "Painstakingly slow speed of manual lace work."
      }
    ],
    artisans: [
      {
        id: "jean-francois",
        name: "S. Anandhi",
        craftType: "Handmade Paper & Lace Master",
        location: "Auroville / Puducherry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXBovbYe3dRfFgK5s4l3dg5_uIAMccG6ENW3vTFmIyg&s=10",
        quote: "In every sheet of handmade paper lies harmony with nature.",
        story: "Preserving sustainable handmade paper art at Sri Aurobindo Ashram for 26 years.",
        yearsOfExperience: "26 years",
        awards: [
          "Handicraft Excellence Award"
        ]
      }
    ]
  }
];
