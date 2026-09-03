export const destinations = [
  {
    id: 1,
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    description: 'The City of Light beckons with its iconic landmarks, world-class museums, and romantic ambiance.',
    bestTimeToVisit: 'April to June, September to October',
    recommendedDays: '4-6 days',
    budget: 'Moderate to High',
    coordinates: { lat: 48.8566, lon: 2.3522 },
    overview: 'Paris, the capital of France, is one of the most visited cities in the world. Known for its art, fashion, gastronomy, and culture, Paris offers an unforgettable experience with its elegant boulevards, historic monuments, and charming cafes.',
    localInfo: 'French is the official language. The Euro is the currency. The metro system is extensive and efficient.',
    attractions: [
      {
        id: 101,
        name: 'Eiffel Tower',
        description: 'Iconic iron lattice tower and symbol of Paris, offering panoramic city views.',
        category: 'Landmark',
        duration: '2-3 hours'
      },
      {
        id: 102,
        name: 'Louvre Museum',
        description: 'World\'s largest art museum, home to the Mona Lisa and thousands of masterpieces.',
        category: 'Museum',
        duration: '3-4 hours'
      },
      {
        id: 103,
        name: 'Notre-Dame Cathedral',
        description: 'Medieval Catholic cathedral renowned for its Gothic architecture.',
        category: 'Religious Site',
        duration: '1-2 hours'
      },
      {
        id: 104,
        name: 'Arc de Triomphe',
        description: 'Monumental arch honoring those who fought for France, located at the center of Place Charles de Gaulle.',
        category: 'Monument',
        duration: '1 hour'
      },
      {
        id: 105,
        name: 'Sacré-Cœur',
        description: 'Stunning white basilica atop Montmartre hill with breathtaking views of Paris.',
        category: 'Religious Site',
        duration: '1-2 hours'
      }
    ]
  },
  {
    id: 2,
    slug: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    description: 'A vibrant metropolis blending ancient traditions with cutting-edge technology and pop culture.',
    bestTimeToVisit: 'March to May, September to November',
    recommendedDays: '5-7 days',
    budget: 'Moderate to High',
    coordinates: { lat: 35.6762, lon: 139.6503 },
    overview: 'Tokyo is Japan\'s bustling capital, mixing the ultramodern with the traditional, from neon-lit skyscrapers to historic temples. It offers world-class dining, shopping, and entertainment alongside serene gardens and shrines.',
    localInfo: 'Japanese is the official language. The Yen is the currency. Public transportation is excellent and punctual.',
    attractions: [
      {
        id: 201,
        name: 'Senso-ji Temple',
        description: 'Tokyo\'s oldest Buddhist temple, famous for its vibrant atmosphere and traditional market street.',
        category: 'Religious Site',
        duration: '2 hours'
      },
      {
        id: 202,
        name: 'Tokyo Skytree',
        description: 'Tallest structure in Japan offering spectacular 360-degree views of the city.',
        category: 'Landmark',
        duration: '2-3 hours'
      },
      {
        id: 203,
        name: 'Meiji Shrine',
        description: 'Serene Shinto shrine dedicated to Emperor Meiji, surrounded by tranquil forest.',
        category: 'Religious Site',
        duration: '1-2 hours'
      },
      {
        id: 204,
        name: 'Shibuya Crossing',
        description: 'World\'s busiest pedestrian crossing and iconic symbol of modern Tokyo.',
        category: 'Landmark',
        duration: '30 minutes'
      },
      {
        id: 205,
        name: 'Tsukiji Outer Market',
        description: 'Bustling market offering fresh seafood, street food, and culinary delights.',
        category: 'Market',
        duration: '2-3 hours'
      }
    ]
  },
  {
    id: 3,
    slug: 'new-york',
    name: 'New York',
    country: 'United States',
    continent: 'North America',
    description: 'The city that never sleeps, offering endless entertainment, culture, and iconic landmarks.',
    bestTimeToVisit: 'April to June, September to November',
    recommendedDays: '5-7 days',
    budget: 'High',
    coordinates: { lat: 40.7128, lon: -74.0060 },
    overview: 'New York City is a global hub of culture, finance, and entertainment. From Broadway shows to world-class museums, from Central Park to Times Square, NYC offers an unparalleled urban experience.',
    localInfo: 'English is the primary language. US Dollar is the currency. The subway runs 24/7.',
    attractions: [
      {
        id: 301,
        name: 'Statue of Liberty',
        description: 'Iconic symbol of freedom and democracy, located on Liberty Island.',
        category: 'Monument',
        duration: '3-4 hours'
      },
      {
        id: 302,
        name: 'Central Park',
        description: 'Massive urban park offering green spaces, lakes, and recreational activities.',
        category: 'Park',
        duration: '2-4 hours'
      },
      {
        id: 303,
        name: 'Times Square',
        description: 'Bright, bustling commercial intersection known for its dazzling digital billboards.',
        category: 'Landmark',
        duration: '1 hour'
      },
      {
        id: 304,
        name: 'Empire State Building',
        description: 'Art Deco skyscraper with observation decks offering stunning city views.',
        category: 'Landmark',
        duration: '2 hours'
      },
      {
        id: 305,
        name: 'Brooklyn Bridge',
        description: 'Historic suspension bridge connecting Manhattan and Brooklyn with pedestrian walkway.',
        category: 'Landmark',
        duration: '1-2 hours'
      }
    ]
  },
  {
    id: 4,
    slug: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    continent: 'Asia',
    description: 'A futuristic desert city of luxury, innovation, and architectural marvels.',
    bestTimeToVisit: 'November to March',
    recommendedDays: '4-5 days',
    budget: 'High',
    coordinates: { lat: 25.2048, lon: 55.2708 },
    overview: 'Dubai is a city of superlatives, home to the world\'s tallest building, largest shopping malls, and most luxurious hotels. It combines modern innovation with Arabian heritage, offering desert adventures and futuristic experiences.',
    localInfo: 'Arabic is official, English widely spoken. UAE Dirham is the currency. Metro system is modern and efficient.',
    attractions: [
      {
        id: 401,
        name: 'Burj Khalifa',
        description: 'World\'s tallest building with observation decks offering breathtaking panoramic views.',
        category: 'Landmark',
        duration: '2-3 hours'
      },
      {
        id: 402,
        name: 'Dubai Mall',
        description: 'One of the world\'s largest shopping malls featuring an aquarium and ice rink.',
        category: 'Shopping',
        duration: '3-4 hours'
      },
      {
        id: 403,
        name: 'Palm Jumeirah',
        description: 'Artificial archipelago in the shape of a palm tree with luxury resorts.',
        category: 'Landmark',
        duration: '2-3 hours'
      },
      {
        id: 404,
        name: 'Dubai Marina',
        description: 'Stunning waterfront district with skyscrapers, dining, and yacht cruises.',
        category: 'District',
        duration: '2 hours'
      },
      {
        id: 405,
        name: 'Gold Souk',
        description: 'Traditional market offering a dazzling array of gold, jewelry, and gems.',
        category: 'Market',
        duration: '1-2 hours'
      }
    ]
  },
  {
    id: 5,
    slug: 'goa',
    name: 'Goa',
    country: 'India',
    continent: 'Asia',
    description: 'India\'s beach paradise with golden sands, vibrant nightlife, and Portuguese heritage.',
    bestTimeToVisit: 'November to February',
    recommendedDays: '4-6 days',
    budget: 'Budget to Moderate',
    coordinates: { lat: 15.2993, lon: 74.1240 },
    overview: 'Goa is India\'s smallest state known for its stunning coastline, laid-back vibe, and unique blend of Indian and Portuguese cultures. It offers beautiful beaches, spice plantations, and a thriving party scene.',
    localInfo: 'Konkani is official, English and Hindi widely spoken. Indian Rupee is the currency.',
    attractions: [
      {
        id: 501,
        name: 'Baga Beach',
        description: 'Popular beach known for water sports, shacks, and vibrant nightlife.',
        category: 'Beach',
        duration: '3-4 hours'
      },
      {
        id: 502,
        name: 'Basilica of Bom Jesus',
        description: 'UNESCO World Heritage Site housing the remains of St. Francis Xavier.',
        category: 'Religious Site',
        duration: '1-2 hours'
      },
      {
        id: 503,
        name: 'Fort Aguada',
        description: '17th-century Portuguese fort offering panoramic views of the Arabian Sea.',
        category: 'Historical Site',
        duration: '1-2 hours'
      },
      {
        id: 504,
        name: 'Dudhsagar Falls',
        description: 'Spectacular four-tiered waterfall surrounded by lush greenery.',
        category: 'Nature',
        duration: '4-5 hours'
      },
      {
        id: 505,
        name: 'Anjuna Flea Market',
        description: 'Famous weekly market offering handicrafts, clothing, and local goods.',
        category: 'Market',
        duration: '2-3 hours'
      }
    ]
  },
  {
    id: 6,
    slug: 'rome',
    name: 'Rome',
    country: 'Italy',
    continent: 'Europe',
    description: 'The Eternal City, where ancient history meets vibrant modern life.',
    bestTimeToVisit: 'April to June, September to October',
    recommendedDays: '4-6 days',
    budget: 'Moderate',
    coordinates: { lat: 41.9028, lon: 12.4964 },
    overview: 'Rome is a living museum, with nearly 3,000 years of history visible at every turn. From the Colosseum to the Vatican, Rome offers unparalleled art, architecture, and cuisine.',
    localInfo: 'Italian is the official language. Euro is the currency. Metro and buses serve the city.',
    attractions: [
      {
        id: 601,
        name: 'Colosseum',
        description: 'Ancient amphitheater and iconic symbol of Imperial Rome.',
        category: 'Historical Site',
        duration: '2-3 hours'
      },
      {
        id: 602,
        name: 'Vatican Museums',
        description: 'World-renowned museums featuring the Sistine Chapel and masterpieces of Renaissance art.',
        category: 'Museum',
        duration: '3-4 hours'
      },
      {
        id: 603,
        name: 'Trevi Fountain',
        description: 'Baroque masterpiece and Rome\'s largest fountain, famous for coin-tossing tradition.',
        category: 'Landmark',
        duration: '30 minutes'
      },
      {
        id: 604,
        name: 'Roman Forum',
        description: 'Ancient plaza surrounded by ruins of important government buildings.',
        category: 'Historical Site',
        duration: '2 hours'
      },
      {
        id: 605,
        name: 'Pantheon',
        description: 'Remarkably preserved Roman temple with the world\'s largest unreinforced concrete dome.',
        category: 'Historical Site',
        duration: '1 hour'
      }
    ]
  },
  {
    id: 7,
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    description: 'Tropical paradise known for its forested volcanic mountains, beaches, and spiritual culture.',
    bestTimeToVisit: 'April to October',
    recommendedDays: '6-8 days',
    budget: 'Budget to Moderate',
    coordinates: { lat: -8.3405, lon: 115.0920 },
    overview: 'Bali is Indonesia\'s most famous island, offering stunning rice terraces, ancient temples, pristine beaches, and a rich Hindu culture. It\'s a haven for surfers, yogis, and those seeking relaxation.',
    localInfo: 'Indonesian and Balinese are spoken. Indonesian Rupiah is the currency.',
    attractions: [
      {
        id: 701,
        name: 'Tanah Lot Temple',
        description: 'Iconic sea temple perched on a rock formation, famous for sunset views.',
        category: 'Religious Site',
        duration: '2 hours'
      },
      {
        id: 702,
        name: 'Tegallalang Rice Terraces',
        description: 'Stunning tiered rice paddies showcasing traditional Balinese irrigation.',
        category: 'Nature',
        duration: '2-3 hours'
      },
      {
        id: 703,
        name: 'Uluwatu Temple',
        description: 'Clifftop temple offering dramatic ocean views and traditional Kecak dance performances.',
        category: 'Religious Site',
        duration: '2-3 hours'
      },
      {
        id: 704,
        name: 'Sacred Monkey Forest',
        description: 'Nature reserve and temple complex inhabited by hundreds of playful monkeys.',
        category: 'Nature',
        duration: '2 hours'
      },
      {
        id: 705,
        name: 'Seminyak Beach',
        description: 'Upscale beach area known for surfing, beach clubs, and stunning sunsets.',
        category: 'Beach',
        duration: '3-4 hours'
      }
    ]
  },
  {
    id: 8,
    slug: 'london',
    name: 'London',
    country: 'United Kingdom',
    continent: 'Europe',
    description: 'Historic capital blending royal heritage, modern culture, and world-class attractions.',
    bestTimeToVisit: 'May to September',
    recommendedDays: '5-7 days',
    budget: 'Moderate to High',
    coordinates: { lat: 51.5074, lon: -0.1278 },
    overview: 'London is a diverse metropolis with over 2,000 years of history. From Buckingham Palace to the Tower of London, from West End shows to trendy markets, London offers something for everyone.',
    localInfo: 'English is the official language. British Pound is the currency. The Tube is one of the world\'s oldest metro systems.',
    attractions: [
      {
        id: 801,
        name: 'Tower of London',
        description: 'Historic castle housing the Crown Jewels and offering fascinating history tours.',
        category: 'Historical Site',
        duration: '2-3 hours'
      },
      {
        id: 802,
        name: 'British Museum',
        description: 'World-famous museum showcasing human history, art, and culture from around the globe.',
        category: 'Museum',
        duration: '3-4 hours'
      },
      {
        id: 803,
        name: 'Big Ben & Parliament',
        description: 'Iconic clock tower and the seat of UK\'s government along the Thames.',
        category: 'Landmark',
        duration: '1 hour'
      },
      {
        id: 804,
        name: 'London Eye',
        description: 'Giant observation wheel offering spectacular panoramic views of the city.',
        category: 'Landmark',
        duration: '1-2 hours'
      },
      {
        id: 805,
        name: 'Buckingham Palace',
        description: 'Official residence of the British monarch, famous for the Changing of the Guard ceremony.',
        category: 'Landmark',
        duration: '1-2 hours'
      }
    ]
  }
];
