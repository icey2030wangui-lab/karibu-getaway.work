import dianiBeach from "@/assets/diani-beach.jpg";
import mombasa from "@/assets/mombasa.jpg";

export const dianiPackages = [
  {
    id: 1,
    title: "Baobab Beach Resort & Spa",
    location: "Diani Beach",
    price: "~US$199",
    originalPrice: null,
    duration: "per person/night",
    badge: "Premium Resort",
    rating: 4.8,
    reviews: 245,
    images: [
      "/lovable-uploads/c5e80523-454e-4b41-8bf5-b5c9dc087228.png",
      "/lovable-uploads/6b39dced-187e-4b26-935f-a2b86b056fac.png", 
      "/lovable-uploads/da19a70d-35a6-47f6-be9c-0a3aedcf5ac9.png",
      "/lovable-uploads/cb84111e-b26f-4fa3-896f-b90640d06ec2.png",
      "/lovable-uploads/9f86cdaf-4716-4d9b-b48d-0fb64aad7562.png"
    ],
    inclusions: [
      "Luxury beachfront accommodation",
      "Full-service spa access",
      "Multiple dining options",
      "Pool and beach access",
      "WiFi and resort facilities"
    ],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Excursions"],
    description: "Luxury beachfront resort offering world-class spa services, multiple dining venues, and pristine beach access with elegant accommodations.",
    dayCount: "Flexible",
    freeSightseeing: "Beach & Resort Activities",
    diningOptions: ["Sails Beach Bar & Restaurant - fine seafood", "Resort restaurants - international cuisine"]
  },
  {
    id: 2,
    title: "Diani Sea Resort",
    location: "Diani Beach",
    price: "US$164-192",
    originalPrice: null,
    duration: "per person/night",
    badge: "All-Inclusive",
    rating: 4.6,
    reviews: 189,
    images: [
      "/lovable-uploads/1e1867c9-72d9-4495-9370-6e7dbe1f224d.png",
      "/lovable-uploads/d7cc1504-6dcb-4208-8dc8-ec5cfb6ef076.png",
      "/lovable-uploads/d511c3f3-b960-449e-8804-8194e6703019.png",
      "/lovable-uploads/0b87144c-a68b-4f6e-ba86-8545a3514aee.png",
      "/lovable-uploads/c6c0fc68-4272-4b32-86c6-d681c2f449b0.png",
      "/lovable-uploads/7aa72d25-0454-4af4-a365-3bf86ef0701f.png"
    ],
    inclusions: [
      "All meals and beverages",
      "Beach and pool access",
      "Evening entertainment",
      "Water sports equipment",
      "Airport transfers"
    ],
    exclusions: ["Premium beverages", "Spa treatments", "Excursions", "Personal expenses"],
    description: "All-inclusive beachfront resort perfect for hassle-free vacations with comprehensive dining, activities, and entertainment.",
    dayCount: "Flexible",
    freeSightseeing: "Resort Activities & Entertainment",
    diningOptions: ["Ali Barbour's Cave - unique cave dining", "Resort buffet - international cuisine"]
  },
  {
    id: 3,
    title: "Diani Sea Lodge",
    location: "Diani Beach",
    price: "KES 11,500+",
    originalPrice: null,
    duration: "per person",
    badge: "All-Inclusive",
    rating: 4.5,
    reviews: 156,
    images: [dianiBeach, dianiBeach, dianiBeach],
    inclusions: [
      "All-inclusive accommodation",
      "All meals and drinks",
      "Beach activities",
      "Evening shows",
      "Sports facilities"
    ],
    exclusions: ["Excursions", "Spa treatments", "Premium services", "Tips"],
    description: "Affordable all-inclusive beach lodge offering great value with comprehensive amenities and beachfront location.",
    dayCount: "Flexible",
    freeSightseeing: "Beach Activities & Shows",
    diningOptions: ["Nomad Beach Bar & Restaurant - laid-back beachfront", "Lodge dining room - local & international"]
  },
  {
    id: 4,
    title: "PrideInn Hotel Diani",
    location: "Diani Beach",
    price: "~US$117",
    originalPrice: null,
    duration: "per person/night",
    badge: "Great Value",
    rating: 4.3,
    reviews: 198,
    images: [dianiBeach, dianiBeach, dianiBeach],
    inclusions: [
      "Comfortable accommodation",
      "Swimming pool access",
      "Restaurant and bar",
      "Beach proximity",
      "WiFi and basic amenities"
    ],
    exclusions: ["All meals", "Airport transfers", "Excursions", "Spa services"],
    description: "Well-appointed hotel offering excellent value with modern amenities, pool facilities, and easy beach access.",
    dayCount: "Flexible",
    freeSightseeing: "Beach Access & Pool",
    diningOptions: ["Maharani - world cuisine", "Café Kokkos Bistro - casual brasserie"]
  },
  {
    id: 5,
    title: "Swahili Beach Resort",
    location: "Diani Beach",
    price: "US$300-600",
    originalPrice: null,
    duration: "per person/night",
    badge: "Premium Luxury",
    rating: 4.9,
    reviews: 134,
    images: [dianiBeach, dianiBeach, dianiBeach],
    inclusions: [
      "Luxury oceanfront suites",
      "Private beach access",
      "Gourmet dining",
      "Spa and wellness center",
      "Personalized service"
    ],
    exclusions: ["International flights", "Excursions", "Personal shopping", "Premium spa treatments"],
    description: "Ultra-luxury beachfront resort offering exclusive accommodations, world-class dining, and personalized services in an intimate setting.",
    dayCount: "Flexible",
    freeSightseeing: "Private Beach & Resort Tours",
    diningOptions: ["Leonardo's - Italian comfort cuisine", "Resort fine dining - gourmet international"]
  },
  {
    id: 6,
    title: "The Sands at Nomad",
    location: "Diani Beach",
    price: "US$150-400",
    originalPrice: null,
    duration: "per person/night",
    badge: "Boutique",
    rating: 4.7,
    reviews: 167,
    images: [dianiBeach, dianiBeach, dianiBeach],
    inclusions: [
      "Boutique accommodation",
      "Beachfront location",
      "Swimming pool",
      "Restaurant and bar",
      "Cultural experiences"
    ],
    exclusions: ["All meals", "Airport transfers", "Spa treatments", "Excursions"],
    description: "Charming boutique hotel blending modern comfort with traditional coastal architecture, offering authentic Kenyan hospitality.",
    dayCount: "Flexible",
    freeSightseeing: "Cultural Tours & Beach",
    diningOptions: ["The Salty Squid Beach Bar - budget beachside eats", "Nomad restaurant - fusion cuisine"]
  }
];

export const mombasaPackages = [
  {
    id: 1,
    title: "Mombasa August School Holiday-SGR Deals 5 Days 4 Nights",
    location: "Mombasa/North Coast",
    accommodation: "Pride Inn Paradise",
    price: "Ksh66,900",
    originalPrice: "Ksh75,000",
    duration: "5 Days 4 Nights",
    badge: "School Holiday Special",
    rating: 4.6,
    reviews: 142,
    images: [
      "/lovable-uploads/ead104a0-4a30-467c-8759-0661a035fca5.png",
      "/lovable-uploads/3dd9b23c-49c3-4b2d-8813-e4945bdd5799.png",
      "/lovable-uploads/d4fcb5d3-5677-4dd2-a136-ff677a4488ce.png"
    ],
    inclusions: [
      "4 Nights accommodation at Pride Inn Paradise",
      "Travel insurance",
      "Return Transfers",
      "Return Economy SGR Tickets",
      "Daily breakfast",
      "Swimming pool access",
      "Free WiFi"
    ],
    exclusions: ["All Not Mentioned in the Inclusions", "Personal expenses", "Tips and gratuities", "Lunch and Dinner"],
    description: "Experience the beauty of Mombasa's North Coast with luxurious accommodation at Pride Inn Paradise. Perfect for family school holidays with excellent amenities.",
    dayCount: 5,
    freeSightseeing: "Free Sightseeing & Hotel",
    highlights: [
      "Beachfront location with private beach access",
      "Family-friendly facilities and activities",
      "Cultural tours to Fort Jesus and Old Town"
    ]
  },
  {
    id: 2,
    title: "Mombasa August School Holiday-SGR Deals 5 Days 4 Nights",
    location: "Mombasa/North Coast",
    accommodation: "Sarova Whitesands",
    price: "Ksh72,000",
    originalPrice: "Ksh82,000",
    duration: "5 Days 4 Nights",
    badge: "Luxury",
    rating: 4.8,
    reviews: 189,
    images: [
      "/lovable-uploads/132ca583-4bfa-48d9-913d-64a6bb7d6aba.png",
      "/lovable-uploads/75633e98-537f-4fa8-a38b-a489e218828a.png",
      "/lovable-uploads/9d551d15-b948-4210-935a-12ce070c0897.png"
    ],
    inclusions: [
      "4 Nights accommodation at Sarova Whitesands",
      "Travel insurance",
      "Return Transfers",
      "Return Economy SGR Tickets",
      "All meals (Full Board)",
      "Swimming pool and beach access",
      "Entertainment programs"
    ],
    exclusions: ["All Not Mentioned in the Inclusions", "Personal expenses", "Premium beverages"],
    description: "Luxury beachfront resort experience at the renowned Sarova Whitesands with full board accommodation and premium amenities.",
    dayCount: 5,
    freeSightseeing: "Free Sightseeing & Hotel",
    highlights: [
      "Award-winning beachfront resort",
      "Full board dining experience",
      "Professional entertainment and kids club"
    ]
  },
  {
    id: 3,
    title: "Mombasa August School Holiday-SGR Deals 5 Days 4 Nights",
    location: "Mombasa/North Coast",
    accommodation: "Flamingo Beach Resort",
    price: "Ksh66,000",
    originalPrice: "Ksh74,000",
    duration: "5 Days 4 Nights",
    badge: "Family Favorite",
    rating: 4.5,
    reviews: 156,
    images: [
      "/lovable-uploads/22445433-5f5e-4c53-88c9-ed69b91c549f.png",
      "/lovable-uploads/ba9fd9b9-7270-433a-8c6e-e17c8096cb88.png",
      "/lovable-uploads/930ae9f0-305d-4c23-bb2a-3861a6dd2a0a.png",
      "/lovable-uploads/a1a82f23-135c-40d4-86b0-701d5c0dd9ae.png",
      "/lovable-uploads/1ae69be0-81d4-4e42-aa04-3ef4004ec9b5.png",
      "/lovable-uploads/85de9d45-ae0a-4412-a3b5-b297ecdec9c3.png"
    ],
    inclusions: [
      "4 Nights accommodation at Flamingo Beach",
      "Travel insurance",
      "Return Transfers",
      "Return Economy SGR Tickets",
      "Daily breakfast",
      "Beach and pool access",
      "Kids playground"
    ],
    exclusions: ["All Not Mentioned in the Inclusions", "Lunch and dinner", "Water sports"],
    description: "Family-friendly resort with excellent facilities for children and adults. Located on pristine Kikambala Beach with stunning ocean views.",
    dayCount: 5,
    freeSightseeing: "Free Sightseeing & Hotel",
    highlights: [
      "Excellent family facilities",
      "Kids club and playground",
      "Multiple dining options"
    ]
  },
  {
    id: 4,
    title: "Mombasa August School Holiday-SGR Deals 5 Days 4 Nights",
    location: "Mombasa/North Coast",
    accommodation: "Bamburi Beach Hotel",
    price: "Ksh62,700",
    originalPrice: "Ksh70,000",
    duration: "5 Days 4 Nights",
    badge: "Popular Choice",
    rating: 4.4,
    reviews: 198,
    images: [mombasa, mombasa, mombasa],
    inclusions: [
      "4 Nights accommodation at Bamburi Beach",
      "Travel insurance",
      "Return Transfers",
      "Return Economy SGR Tickets",
      "Daily breakfast",
      "Swimming pool access",
      "Beach activities"
    ],
    exclusions: ["All Not Mentioned in the Inclusions", "Lunch and dinner", "Premium activities"],
    description: "Popular beachfront hotel offering comfortable accommodation with easy access to Bamburi Beach and local attractions.",
    dayCount: 5,
    freeSightseeing: "Free Sightseeing & Hotel",
    highlights: [
      "Central location in Bamburi",
      "Easy access to shopping and attractions",
      "Traditional Swahili architecture"
    ]
  },
  {
    id: 5,
    title: "Mombasa August School Holiday-SGR Deals 5 Days 4 Nights",
    location: "Mombasa/North Coast",
    accommodation: "Severin Sea Lodge",
    price: "Ksh54,100",
    originalPrice: "Ksh62,000",
    duration: "5 Days 4 Nights",
    badge: "Budget Friendly",
    rating: 4.2,
    reviews: 134,
    images: [
      "/lovable-uploads/6be3b9de-9642-4ee9-a350-9ccc729898e4.png",
      "/lovable-uploads/e6853cec-70d8-4e9e-9655-a536f4561b36.png",
      "/lovable-uploads/b70e728d-db71-4a23-a81c-ea4231e107c3.png",
      "/lovable-uploads/96e52dc7-6d49-435c-9568-5b1d07c958c3.png",
      "/lovable-uploads/2ab48a20-1edc-48b1-b6b3-485d43db99f8.png"
    ],
    inclusions: [
      "4 Nights accommodation at Severin Sea Lodge",
      "Travel insurance",
      "Return Transfers",
      "Return Economy SGR Tickets",
      "Daily breakfast",
      "Swimming pool access"
    ],
    exclusions: ["All Not Mentioned in the Inclusions", "Lunch and dinner", "Water sports"],
    description: "Comfortable beachfront lodge offering great value for money with beautiful gardens and direct beach access.",
    dayCount: 5,
    freeSightseeing: "Free Sightseeing & Hotel",
    highlights: [
      "Beautiful tropical gardens",
      "Direct beach access",
      "Affordable luxury experience"
    ]
  },
  {
    id: 6,
    title: "Mombasa August School Holiday-SGR Deals 5 Days 4 Nights",
    location: "Mombasa/North Coast",
    accommodation: "Travellers Beach Hotel",
    price: "Ksh75,100",
    originalPrice: "Ksh85,000",
    duration: "5 Days 4 Nights",
    badge: "Premium",
    rating: 4.7,
    reviews: 167,
    images: [mombasa, mombasa, mombasa],
    inclusions: [
      "4 Nights accommodation at Travellers Beach",
      "Travel insurance",
      "Return Transfers",
      "Return Economy SGR Tickets",
      "Half board (breakfast & dinner)",
      "Swimming pool and beach access",
      "Live entertainment"
    ],
    exclusions: ["All Not Mentioned in the Inclusions", "Lunch", "Premium beverages", "Spa services"],
    description: "Premium beachfront hotel with half-board accommodation, live entertainment, and excellent service standards.",
    dayCount: 5,
    freeSightseeing: "Free Sightseeing & Hotel",
    highlights: [
      "Half-board dining included",
      "Live entertainment shows",
      "Premium beachfront location"
    ]
  },
  {
    id: 7,
    title: "Mombasa August School Holiday-SGR Deals 5 Days 4 Nights",
    location: "Mombasa/North Coast",
    accommodation: "Neptune Beach Resort",
    price: "Ksh60,800",
    originalPrice: "Ksh68,000",
    duration: "5 Days 4 Nights",
    badge: "All Inclusive Available",
    rating: 4.3,
    reviews: 145,
    images: [mombasa, mombasa, mombasa],
    inclusions: [
      "4 Nights accommodation at Neptune Beach",
      "Travel insurance",
      "Return Transfers",
      "Return Economy SGR Tickets",
      "Daily breakfast",
      "Swimming pool access",
      "Beach volleyball court"
    ],
    exclusions: ["All Not Mentioned in the Inclusions", "Lunch and dinner", "All-inclusive upgrade"],
    description: "Beachfront resort with multiple accommodation options and the choice to upgrade to all-inclusive for the ultimate holiday experience.",
    dayCount: 5,
    freeSightseeing: "Free Sightseeing & Hotel",
    highlights: [
      "Multiple accommodation wings",
      "All-inclusive upgrade available",
      "Sports and recreation facilities"
    ]
  },
  {
    id: 8,
    title: "Mombasa August School Holiday-SGR Deals 5 Days 4 Nights",
    location: "Mombasa/North Coast",
    accommodation: "Mombasa Budget Beach Hotel",
    price: "Ksh25,500",
    originalPrice: "Ksh32,000",
    duration: "5 Days 4 Nights",
    badge: "Best Value",
    rating: 4.0,
    reviews: 89,
    images: [mombasa, mombasa, mombasa],
    inclusions: [
      "4 Nights accommodation",
      "Travel insurance",
      "Return Transfers",
      "Return Economy SGR Tickets",
      "Daily breakfast"
    ],
    exclusions: ["All Not Mentioned in the Inclusions", "Lunch and dinner", "Swimming pool access"],
    description: "Budget-friendly accommodation perfect for travelers looking for basic comfort and convenience while exploring Mombasa.",
    dayCount: 5,
    freeSightseeing: "Free Sightseeing & Hotel",
    highlights: [
      "Budget-friendly pricing",
      "Clean and comfortable rooms",
      "Strategic location for exploration"
    ]
  }
];