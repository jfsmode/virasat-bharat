import { RegionZone } from '../types';

export interface StateSummary {
  id: string;
  name: string;
  nativeName: string;
  capital: string;
  type: 'State' | 'Union Territory';
  zone: RegionZone;
  shortFact: string;
  iconicItem: string;
  image: string;
}

export const allIndiaEntities: StateSummary[] = [
  // 28 States
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    nativeName: 'ఆంధ్రప్రదేశ్',
    capital: 'Amaravati',
    type: 'State',
    zone: 'South',
    shortFact: 'Cradle of classical Kuchipudi dance, Kondapalli wooden toys, and spicy Gongura cuisine.',
    iconicItem: 'Kalamkari Painting & Kuchipudi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kalamkari_painting_of_Lord_Vishnu_on_serpent_Ananta.jpg/960px-Kalamkari_painting_of_Lord_Vishnu_on_serpent_Ananta.jpg'
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    nativeName: 'अरुणाचल प्रदेश',
    capital: 'Itanagar',
    type: 'State',
    zone: 'North-East',
    shortFact: 'Land of the Dawn-Lit Mountains with 26 major indigenous tribes and Tawang Monastery.',
    iconicItem: 'Tawang Monastery & Cane Helmets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/TawangMonastery.jpg/960px-TawangMonastery.jpg'
  },
  {
    id: 'assam',
    name: 'Assam',
    nativeName: 'অসম',
    capital: 'Dispur (Guwahati)',
    type: 'State',
    zone: 'North-East',
    shortFact: 'Home of the golden Muga silk, Bihu harvest dance, and the sacred Brahmaputra river island of Majuli.',
    iconicItem: 'Muga Silk & Majuli Masks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Assamese_Muga_With_Japi.jpg/960px-Assamese_Muga_With_Japi.jpg'
  },
  {
    id: 'bihar',
    name: 'Bihar',
    nativeName: 'बिहार',
    capital: 'Patna',
    type: 'State',
    zone: 'East',
    shortFact: 'Ancient seat of Nalanda University, Bodh Gaya Mahabodhi tree, and Madhubani folk painting.',
    iconicItem: 'Madhubani Art & Litti Chokha',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Madhubani_Mahavidyas.jpg'
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    nativeName: 'छत्तीसगढ़',
    capital: 'Raipur',
    type: 'State',
    zone: 'Central',
    shortFact: 'Tribal heartland famed for Bastar bell-metal (Dhokra), Chitrakote waterfalls, and woodcraft.',
    iconicItem: 'Bastar Bell Metal & Kosa Silk',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chitrakot_watter_fall2.JPG/960px-Chitrakot_watter_fall2.JPG'
  },
  {
    id: 'goa',
    name: 'Goa',
    nativeName: 'गोंय',
    capital: 'Panaji',
    type: 'State',
    zone: 'West',
    shortFact: 'Coastal Konkan paradise of Portuguese-influenced baroque churches, Kunbi sarees, and Mando music.',
    iconicItem: 'Basilica of Bom Jesus & Kunbi Saree',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Front_Elevation_of_Basilica_of_Bom_Jesus.jpg/960px-Front_Elevation_of_Basilica_of_Bom_Jesus.jpg'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    nativeName: 'ગુજરાત',
    capital: 'Gandhinagar',
    type: 'State',
    zone: 'West',
    shortFact: 'Land of the white salt desert of Kutch, Rani ki Vav stepwell, Garba, and double-ikat Patola.',
    iconicItem: 'Rani ki Vav & Patan Patola',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Rani_ki_vav_02.jpg/960px-Rani_ki_vav_02.jpg'
  },
  {
    id: 'haryana',
    name: 'Haryana',
    nativeName: 'हरियाणा',
    capital: 'Chandigarh',
    type: 'State',
    zone: 'North',
    shortFact: 'Cradle of the Mahabharata battlefield of Kurukshetra, wrestling (Akharas), and Surajkund craft mela.',
    iconicItem: 'Surajkund Crafts & Phulkari',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Suraj_Kund.jpg/960px-Suraj_Kund.jpg'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    nativeName: 'हिमाचल प्रदेश',
    capital: 'Shimla',
    type: 'State',
    zone: 'North',
    shortFact: 'Devbhumi of snowy peaks, Kullu embroidered caps, Kangra miniature paintings, and Chamba rumaal.',
    iconicItem: 'Kullu Shawls & Kangra Miniatures',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hadimba_Devi_Temple%2C_Hidimba_Devi_Temple_Dhungari_Temple_Manali_and_around_vrtmrgmpksk_%2841%29.jpg/960px-Hadimba_Devi_Temple%2C_Hidimba_Devi_Temple_Dhungari_Temple_Manali_and_around_vrtmrgmpksk_%2841%29.jpg'
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    nativeName: 'झारखंड',
    capital: 'Ranchi',
    type: 'State',
    zone: 'East',
    shortFact: 'Land of Sal forests, Sohrai and Khovar tribal mud-wall paintings, and martial Chhau mask dance.',
    iconicItem: 'Sohrai Wall Murals & Chhau Dance',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tribal_Art_Gallery.jpg/960px-Tribal_Art_Gallery.jpg'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    nativeName: 'ಕರ್ನಾಟಕ',
    capital: 'Bengaluru',
    type: 'State',
    zone: 'South',
    shortFact: 'Realm of the Vijayanagara ruins at Hampi, Mysore Palace, Yakshagana theatre, and sandalwood carving.',
    iconicItem: 'Hampi Chariot & Mysore Silk',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg/960px-Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    nativeName: 'കേരളം',
    capital: 'Thiruvananthapuram',
    type: 'State',
    zone: 'South',
    shortFact: 'God’s Own Country with emerald backwaters, Kathakali dance-drama, Aranmula mirrors, and Onam Sadya.',
    iconicItem: 'Kathakali & Aranmula Metal Mirror',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Kathakali_-Play_with_Kaurava.jpg/960px-Kathakali_-Play_with_Kaurava.jpg'
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    nativeName: 'मध्य प्रदेश',
    capital: 'Bhopal',
    type: 'State',
    zone: 'Central',
    shortFact: 'Heart of India with UNESCO Khajuraho temples, Sanchi Stupa, Bhimbetka rock shelters, and Chanderi sarees.',
    iconicItem: 'Khajuraho Temples & Chanderi Weaving',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/1_Khajuraho.jpg/960px-1_Khajuraho.jpg'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    nativeName: 'महाराष्ट्र',
    capital: 'Mumbai',
    type: 'State',
    zone: 'West',
    shortFact: 'Land of Ajanta-Ellora caves, Shivaji Maharaj hill forts, Paithani silk sarees, and Ganeshotsav fervor.',
    iconicItem: 'Ellora Kailasa Temple & Paithani Silk',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cave_26%2C_Ajanta.jpg/960px-Cave_26%2C_Ajanta.jpg'
  },
  {
    id: 'manipur',
    name: 'Manipur',
    nativeName: 'মণিপুর',
    capital: 'Imphal',
    type: 'State',
    zone: 'North-East',
    shortFact: 'Jeweled land of classical Manipuri Raas Leela, floating Phumdis of Loktak Lake, and Longpi black pottery.',
    iconicItem: 'Manipuri Dance & Longpi Black Stone Pottery',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/The_Loktak_Lake.jpg/960px-The_Loktak_Lake.jpg'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    nativeName: 'मेघालय',
    capital: 'Shillong',
    type: 'State',
    zone: 'North-East',
    shortFact: 'Abode of Clouds with centuries-old living root bridges, matrilineal Khasi culture, and Cherrapunji waterfalls.',
    iconicItem: 'Living Root Bridges & Khasi Cane Craft',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg/960px-Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg'
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    nativeName: 'Mizoram',
    capital: 'Aizawl',
    type: 'State',
    zone: 'North-East',
    shortFact: 'Land of rolling blue hills, Cheraw bamboo dance, intricate Puan handwoven textiles, and Chapchar Kut.',
    iconicItem: 'Cheraw Bamboo Dance & Puan Weaving',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mizoram_Assembly_House_%28wider_view%29.jpg/960px-Mizoram_Assembly_House_%28wider_view%29.jpg'
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    nativeName: 'Nagaland',
    capital: 'Kohima',
    type: 'State',
    zone: 'North-East',
    shortFact: 'Land of 16 major warrior tribes, the grand Hornbill Festival, and unique tribal Naga shawls.',
    iconicItem: 'Hornbill Festival & Naga Tribal Shawls',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Kapamodzu.jpg/960px-Kapamodzu.jpg'
  },
  {
    id: 'odisha',
    name: 'Odisha',
    nativeName: 'ଓଡ଼ିଶା',
    capital: 'Bhubaneswar',
    type: 'State',
    zone: 'East',
    shortFact: 'Land of the Konark Sun Temple chariot, Lord Jagannath Puri Rath Yatra, Pattachitra paintings, and Odissi dance.',
    iconicItem: 'Konark Sun Temple & Raghurajpur Pattachitra',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg'
  },
  {
    id: 'punjab',
    name: 'Punjab',
    nativeName: 'ਪੰਜਾਬ',
    capital: 'Chandigarh',
    type: 'State',
    zone: 'North',
    shortFact: 'Land of the Golden Temple, vibrant Bhangra rhythms, Phulkari flower embroidery, and infinite hospitality.',
    iconicItem: 'Golden Temple & Phulkari Embroidery',
    image: 'https://images.unsplash.com/photo-1599840309126-7ece88628ded'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    nativeName: 'राजस्थान',
    capital: 'Jaipur',
    type: 'State',
    zone: 'West',
    shortFact: 'Land of majestic desert hill forts, colorful Bandhani textiles, Hawa Mahal, and Kalbelia folk dance.',
    iconicItem: 'Mehrangarh Fort & Jaipur Blue Pottery',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245'
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    nativeName: 'सिक्किम',
    capital: 'Gangtok',
    type: 'State',
    zone: 'North-East',
    shortFact: 'Himalayan state guarding Mount Kanchenjunga, ancient Rumtek Monastery, and organic cardamom forests.',
    iconicItem: 'Kanchenjunga & Rumtek Monastic Frescoes',
    image: 'https://images.unsplash.com/photo-1573398643956-2b9e6ade3456'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    nativeName: 'தமிழ்நாடு',
    capital: 'Chennai',
    type: 'State',
    zone: 'South',
    shortFact: 'Cradle of classical Tamil literature, thousand-year-old Chola granite temples, and Kanchipuram silk.',
    iconicItem: 'Brihadeeswara Temple & Kanchipuram Silk',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    nativeName: 'తెలంగాణ',
    capital: 'Hyderabad',
    type: 'State',
    zone: 'South',
    shortFact: 'Land of the historic Charminar, Golconda diamonds, Pochampally Ikat sarees, and Kakatiya architecture.',
    iconicItem: 'Charminar & Pochampally Ikat',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charminar_Hyderabad_1.jpg/960px-Charminar_Hyderabad_1.jpg'
  },
  {
    id: 'tripura',
    name: 'Tripura',
    nativeName: 'ত্রিপুরা',
    capital: 'Agartala',
    type: 'State',
    zone: 'North-East',
    shortFact: 'Water palace of Neermahal, Ujjayanta Palace, rock-cut Unakoti bas-reliefs, and bamboo split craft.',
    iconicItem: 'Unakoti Rock Carvings & Cane Crafts',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Unakoti_3.jpg/960px-Unakoti_3.jpg'
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    nativeName: 'उत्तर प्रदेश',
    capital: 'Lucknow',
    type: 'State',
    zone: 'North',
    shortFact: 'Heartland of the Ganges, ancient Varanasi Ghats, the Taj Mahal, Awadhi Chikankari, and Kathak.',
    iconicItem: 'The Taj Mahal & Lucknowi Chikankari',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/960px-Taj_Mahal_%28Edited%29.jpeg'
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    nativeName: 'उत्तराखंड',
    capital: 'Dehradun (Winter) / Gairsain (Summer)',
    type: 'State',
    zone: 'North',
    shortFact: 'Land of the Gods (Devbhumi) with Kedarnath, Badrinath, Valley of Flowers, and Aipan folk floor art.',
    iconicItem: 'Kedarnath Temple & Aipan Folk Art',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/960px-Kedarnath_Temple_in_Rainy_season.jpg'
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    nativeName: 'পশ্চিমবঙ্গ',
    capital: 'Kolkata',
    type: 'State',
    zone: 'East',
    shortFact: 'Land of Rabindranath Tagore, UNESCO Durga Puja pandal art, Terracotta temples, and Kantha quilts.',
    iconicItem: 'Bishnupur Terracotta & Durga Puja',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0_%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%9C%E0%A6%A8%E0%A7%80%E0%A6%A8_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A7%8B%E0%A7%8E%E0%A6%B8%E0%A6%AC_%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%AE.jpg/960px-%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0_%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%9C%E0%A6%A8%E0%A7%80%E0%A6%A8_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A7%8B%E0%A7%8E%E0%A6%B8%E0%A6%AC_%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%AE.jpg'
  },

  // 8 Union Territories
  {
    id: 'andaman-nicobar',
    name: 'Andaman & Nicobar Islands',
    nativeName: 'अंडमान और निकोबार',
    capital: 'Port Blair',
    type: 'Union Territory',
    zone: 'Union Territory',
    shortFact: 'Emerald archipelago with the historic Cellular Jail, indigenous tribes, and pristine coral reefs.',
    iconicItem: 'Cellular Jail & Shell Handicrafts',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Front_View_of_Cellular_Jail%2C_Port_Blair.JPG/960px-Front_View_of_Cellular_Jail%2C_Port_Blair.JPG'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    nativeName: 'ਚੰਡੀਗੜ੍ਹ / चंडीगढ़',
    capital: 'Chandigarh',
    type: 'Union Territory',
    zone: 'Union Territory',
    shortFact: 'India’s first modernist planned city designed by Le Corbusier, famous for Nek Chand’s Rock Garden.',
    iconicItem: 'Nek Chand’s Rock Garden Art',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Chandigarh_Rock_Garden_4.jpg/960px-Chandigarh_Rock_Garden_4.jpg'
  },
  {
    id: 'dadra-nagar-haveli-daman-diu',
    name: 'Dadra & Nagar Haveli and Daman & Diu',
    nativeName: 'દાદરા અને નગર હવેલી',
    capital: 'Daman',
    type: 'Union Territory',
    zone: 'Union Territory',
    shortFact: 'Coastal enclave featuring Portuguese sea forts, Warli tribal art, and tranquil palm-fringed beaches.',
    iconicItem: 'Diu Fort & Warli Tribal Art',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Diu%2CGujarat%2CIndia_%2837%29.jpg'
  },
  {
    id: 'delhi',
    name: 'Delhi (NCT)',
    nativeName: 'दिल्ली',
    capital: 'New Delhi',
    type: 'Union Territory',
    zone: 'Union Territory',
    shortFact: 'Millennia-old capital of empires spanning Qutub Minar, Red Fort, Humayun’s Tomb, and Chandni Chowk.',
    iconicItem: 'Qutub Minar & Mughal Heritage',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Qutb_Minar_2022.jpg/960px-Qutb_Minar_2022.jpg'
  },
  {
    id: 'jammu-kashmir',
    name: 'Jammu & Kashmir',
    nativeName: 'جموں و کشمیر / जम्मू और कश्मीर',
    capital: 'Srinagar (Summer) / Jammu (Winter)',
    type: 'Union Territory',
    zone: 'North',
    shortFact: 'Paradise on Earth with Dal Lake Shikaras, Pashmina shawls, Pampore saffron, and walnut wood craft.',
    iconicItem: 'Martand Sun Temple & Pashmina',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Dal_Lake_Hazratbal_Srinagar.jpg/960px-Dal_Lake_Hazratbal_Srinagar.jpg'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    nativeName: 'ལ་དྭགས / लद्दाख',
    capital: 'Leh',
    type: 'Union Territory',
    zone: 'North',
    shortFact: 'High mountain desert of Tibetan-Buddhist monasteries, Pangong Tso, and Cham sacred masked dances.',
    iconicItem: 'Thiksey Monastery & Thangka Scrolls',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thikse_Monastery_.jpg/960px-Thikse_Monastery_.jpg'
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    nativeName: 'ലക്ഷദ്വീപ്',
    capital: 'Kavaratti',
    type: 'Union Territory',
    zone: 'Union Territory',
    shortFact: 'Turquoise coral atolls preserving traditional coir handicrafts, Kolkali folk dances, and maritime lore.',
    iconicItem: 'Kolkali Dance & Coir Weaving',
    image: 'https://images.unsplash.com/photo-1572431447238-425af66a273b'
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    nativeName: 'புதுச்சேரி',
    capital: 'Puducherry',
    type: 'Union Territory',
    zone: 'Union Territory',
    shortFact: 'French colonial quarters, Sri Aurobindo Ashram, Matrimandir in Auroville, and handmade terracotta pottery.',
    iconicItem: 'Matrimandir & French-Tamil Heritage',
    image: 'https://images.unsplash.com/photo-1569157087866-f4a8e9250605'
  }
];
