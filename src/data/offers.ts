import { Gift, Heart, Calendar, Users, GraduationCap } from "lucide-react";
import dianiBeach from "@/assets/diani-beach.jpg";
import masaiMara from "@/assets/masai-mara.jpg";
import mombasa from "@/assets/mombasa.jpg";
import samburu from "@/assets/samburu.jpg";

export const specialOffers = [
  {
    id: 1,
    title: "Christmas Holiday Special",
    subtitle: "🎄 Magical Coastal Christmas",
    category: "Christmas Deals",
    image: dianiBeach,
    rating: 4.8,
    discount: "30% OFF",
    price: "From $192",
    originalPrice: "$269",
    description: "🎅 Celebrate Christmas by the ocean with bonfires, beach parties, and festive Swahili feasts. Create magical memories under tropical stars!",
    icon: Gift,
    badge: "⏰ Limited Spots",
    urgency: "Only 8 spots left!",
    reviews: 342,
    duration: "3 Days / 2 Nights",
    location: "Diani Beach, Kenya",
    detailedDescription: "Experience the magic of Christmas at Kenya's stunning coastline! Our exclusive 3-day coastal Christmas package combines luxury accommodation, exciting activities, and unforgettable memories. Perfect for families, couples, and groups looking for a unique holiday celebration.",
    inclusions: [
      "🏨 BNB accommodation with rooftop swimming pool",
      "🚤 Boat ride along the pristine coastline",
      "🍳 Daily breakfast buffet",
      "🐴 Horse riding on the beach",
      "🚂 SGR railway transfers",
      "✈️ Airport transfers (round trip)",
      "🌊 Wild Waters waterpark access",
      "🎄 Christmas special dinner & entertainment",
      "📋 Well-structured 3-day activity program",
      "🎁 Welcome gift package"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Welcome",
        activities: [
          "Airport/SGR pickup and transfer to BNB",
          "Check-in and welcome refreshments",
          "Afternoon: Rooftop pool relaxation",
          "Evening: Beach sunset walk",
          "Dinner at the hotel"
        ]
      },
      {
        day: "Day 2",
        title: "Adventure & Activities",
        activities: [
          "Breakfast at rooftop restaurant",
          "Morning: Horse riding along the beach",
          "Afternoon: Wild Waters waterpark experience",
          "Evening: Boat ride along the coast",
          "Christmas special dinner & bonfire"
        ]
      },
      {
        day: "Day 3",
        title: "Final Day & Departure",
        activities: [
          "Leisurely breakfast",
          "Last swim at rooftop pool",
          "Check-out and souvenir shopping",
          "Transfer to airport/SGR station"
        ]
      }
    ],
    highlights: [
      "Luxury BNB with stunning rooftop pool",
      "All transfers included (SGR & Airport)",
      "Full breakfast daily",
      "Multiple exciting activities",
      "Perfect for families & groups",
      "Christmas special celebrations"
    ]
  },
  {
    id: 2,
    title: "Romantic Holiday",
    subtitle: "💑 Luxury Island Honeymoon",
    category: "Romantic Holiday",
    image: mombasa,
    rating: 4.9,
    discount: "25% OFF",
    price: "From $346",
    originalPrice: "$462",
    description: "❤️ Escape to a romantic island paradise. Private beaches, sunset dinners, and endless luxury for two. Love never looked so beautiful!",
    icon: Heart,
    badge: "🏆 Best Seller",
    urgency: "Book now - Peak season!",
    reviews: 521,
    duration: "5 Days / 4 Nights",
    location: "Lamu Island, Kenya",
    detailedDescription: "Experience the ultimate romantic escape in Lamu, a UNESCO World Heritage island paradise. This exclusive 5-day honeymoon package combines luxury accommodation, intimate experiences, and unforgettable memories. Perfect for newlyweds seeking a private, romantic getaway in one of Africa's most enchanting destinations.",
    inclusions: [
      "✈️ Flight to Lamu & private boat transfers",
      "🏖️ Luxury private villa accommodation",
      "🌺 Welcome drink, flowers & romantic setup",
      "🍽️ Daily breakfast by the sea",
      "🌅 Sunset beach dinner for two",
      "🚶 Guided walk through Shela village & Lamu Old Town",
      "💆 Private couples' massage session",
      "⛵ Private dhow cruise to Manda Toto/Kipungani Beach",
      "🥂 Sunset champagne cruise",
      "🍾 Picnic lunch & snorkeling equipment",
      "🕯️ Private candlelit dinner with live entertainment",
      "📸 Optional yoga or photography session",
      "🎁 Honeymoon gift package"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Welcome",
        activities: [
          "Flight to Lamu International Airport",
          "Private boat transfer to your luxury villa",
          "Check-in with welcome drink and flower arrangement",
          "Relax and settle into your romantic retreat",
          "Evening: Sunset beach dinner for two",
          "Overnight in your private villa"
        ]
      },
      {
        day: "Day 2",
        title: "Explore & Unwind",
        activities: [
          "Breakfast by the sea with ocean views",
          "Morning: Guided walk through historic Shela village",
          "Explore Lamu Old Town's narrow streets and culture",
          "Afternoon: Private couples' massage at the villa",
          "Evening at leisure",
          "Dinner at villa or local restaurant"
        ]
      },
      {
        day: "Day 3",
        title: "Romantic Adventure",
        activities: [
          "Breakfast at the villa",
          "Morning dhow sailing to Manda Toto or Kipungani Beach",
          "Picnic lunch on a secluded beach",
          "Snorkeling in crystal-clear waters",
          "Afternoon: Sunset champagne cruise",
          "Return to villa for dinner"
        ]
      },
      {
        day: "Day 4",
        title: "Beach Bliss",
        activities: [
          "Leisure morning - sleep in or enjoy the beach",
          "Optional yoga session or couples' photography shoot",
          "Free time to relax by the pool or explore",
          "Afternoon spa treatment (optional)",
          "Evening: Private candlelit dinner with Swahili band or violinist",
          "Stargazing on the beach"
        ]
      },
      {
        day: "Day 5",
        title: "Farewell with Love",
        activities: [
          "Sunrise walk along the pristine beach",
          "Breakfast in bed with ocean views",
          "Final moments of relaxation",
          "Check-out and fond farewells",
          "Private boat and flight transfer back to airport"
        ]
      }
    ],
    highlights: [
      "UNESCO World Heritage Lamu Island",
      "Luxury private villa with beach access",
      "All romantic experiences included",
      "Private boat and dhow cruises",
      "Authentic Swahili cultural immersion",
      "Perfect for honeymoons and anniversaries"
    ]
  },
  {
    id: 3,
    title: "Birthday Package",
    subtitle: "🎂 Safari For Your Birthday",
    category: "Birthday Package",
    image: masaiMara,
    rating: 4.7,
    discount: "20% OFF",
    price: "From $246",
    originalPrice: "$308",
    description: "🎉 Make your birthday unforgettable with a wild safari, surprise cake, champagne at sunset, and VIP treatment. Adventure meets celebration!",
    icon: Calendar,
    badge: "🎁 Special Deal",
    urgency: "Perfect for upcoming birthdays!",
    reviews: 287,
    duration: "6 Days / 5 Nights",
    location: "Amboseli & Maasai Mara, Kenya",
    detailedDescription: "Celebrate your special day with an unforgettable safari adventure! This exclusive 6-day birthday package takes you through Kenya's most iconic wildlife destinations - from the elephant herds of Amboseli with Mt. Kilimanjaro backdrop to the Big 5 in the legendary Maasai Mara. Experience game drives, cultural encounters, and VIP birthday celebrations under African stars.",
    inclusions: [
      "✈️ Internal flights (Nairobi-Amboseli-Mara-Nairobi)",
      "🚗 Airport & inter-park transfers",
      "🏨 Luxury safari lodge accommodation (5 nights)",
      "🍽️ Full board meals (breakfast, lunch, dinner)",
      "🎂 Special birthday cake & champagne celebration",
      "🚙 Daily game drives in 4x4 safari vehicles",
      "👨‍✈️ Professional safari guide throughout",
      "🎈 VIP birthday decorations & surprises",
      "🏞️ Park entry fees for Amboseli & Maasai Mara",
      "🌄 Observation Hill visit in Amboseli",
      "👥 Maasai cultural village visits",
      "🎁 Birthday gift package",
      "📋 Structured 6-day safari program"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Transfer to Amboseli",
        activities: [
          "Pickup from Nairobi airport/hotel",
          "Scenic 4-5 hour drive to Amboseli (or 45-min flight option)",
          "Check-in at Amboseli Serena Safari Lodge/Tawi Lodge/Ol Tukai Lodge",
          "Lunch and relaxation at the lodge",
          "Afternoon game drive with Mt. Kilimanjaro views",
          "Sundowner drinks as the sun sets over the savannah",
          "Dinner at the lodge"
        ]
      },
      {
        day: "Day 2",
        title: "Amboseli - Elephants & Kilimanjaro",
        activities: [
          "Early morning game drive (6-8 AM) - best time for elephant photos with Mt. Kilimanjaro",
          "Breakfast at the lodge",
          "Visit Observation Hill for panoramic park views",
          "Optional birdwatching tour (over 400 species)",
          "Lunch and midday rest",
          "Afternoon nature walk with local Maasai guides",
          "Evening game drive",
          "Dinner under the stars"
        ]
      },
      {
        day: "Day 3",
        title: "Amboseli Culture & Transfer to Mara",
        activities: [
          "Sunrise game drive",
          "Breakfast and check-out",
          "Cultural visit to Maasai village - traditions, beadwork, dances",
          "Transfer to airstrip for flight to Maasai Mara (1 hour via Nairobi)",
          "Arrival at Mara Serena/Angama Mara/Mara Intrepids Camp",
          "Lunch at the lodge",
          "Afternoon game drive in the legendary Mara",
          "Dinner at camp"
        ]
      },
      {
        day: "Day 4",
        title: "Maasai Mara - Big 5 Safari",
        activities: [
          "Early morning Big 5 game drive (lions, leopards, rhinos, elephants, buffalo)",
          "Optional hot air balloon safari at sunrise (unforgettable!)",
          "Bush breakfast in the wild",
          "Return to lodge for brunch and relaxation",
          "Afternoon game drive",
          "Sundowner drinks on the savannah",
          "Special birthday dinner celebration with cake & champagne"
        ]
      },
      {
        day: "Day 5",
        title: "Mara Adventure & Culture",
        activities: [
          "Full day game drive with packed lunch",
          "Great Migration viewing (July-October season)",
          "Visit to Mara River crossing point",
          "Optional nature walk or horseback safari in conservancies",
          "Maasai cultural village visit - crafts and stories",
          "Bush dinner under the stars",
          "Night game drive (optional)"
        ]
      },
      {
        day: "Day 6",
        title: "Final Game Drive & Departure",
        activities: [
          "Early morning final game drive",
          "Breakfast at the lodge",
          "Check-out and souvenir shopping",
          "Transfer to airstrip for flight to Nairobi (1 hour)",
          "Optional lunch in Nairobi before departure",
          "Transfer to international airport"
        ]
      }
    ],
    highlights: [
      "Elephants with Mt. Kilimanjaro backdrop in Amboseli",
      "Big 5 game viewing in Maasai Mara",
      "Great Migration experience (seasonal)",
      "Maasai cultural encounters & village visits",
      "VIP birthday celebrations with cake & champagne",
      "Professional safari guides & luxury lodges",
      "Over 400 bird species in Amboseli",
      "Optional hot air balloon safari"
    ]
  },
  {
    id: 4,
    title: "School Holiday Deals",
    subtitle: "👨‍👩‍👧 Educational Safari Tours",
    category: "School Holiday Deals",
    image: samburu,
    rating: 4.6,
    discount: "35% OFF",
    price: "From $138",
    originalPrice: "$215",
    description: "📚 Fun, educational safaris where wildlife meets learning! Perfect for families and students seeking adventure with purpose.",
    icon: GraduationCap,
    badge: "👪 Family Favorite",
    urgency: "School holidays filling up!",
    reviews: 419,
    duration: "10 Days / 9 Nights",
    location: "Amboseli • Maasai Mara • Samburu",
    detailedDescription: "Experience the magic of Kenya's wilderness while learning about conservation, wildlife ecology, and local cultures. This educational safari is designed for students, schools, families, and nature enthusiasts who want to connect learning with adventure. You'll explore three iconic ecosystems — the wetlands of Amboseli, the rolling plains of the Maasai Mara, and the rugged beauty of Samburu — while engaging with wildlife experts, conservationists, and indigenous communities.",
    inclusions: [
      "✈️ All internal flights between parks",
      "🚗 Ground transfers and park entry fees",
      "🏨 Accommodation in safari lodges (9 nights)",
      "🍽️ Full board meals throughout",
      "👨‍🏫 Professional educational guides & wildlife experts",
      "📚 Field journals and learning materials",
      "🐘 Visit to Reteti Elephant Sanctuary",
      "🌱 Tree planting & climate action activity",
      "👥 Maasai & Samburu cultural workshops",
      "🔬 Wildlife data recording sessions",
      "🏞️ Conservation center visits",
      "📜 Certificate of participation",
      "💧 Bottled water during activities"
    ],
    itinerary: [
      {
        day: "Day 1-3",
        title: "Amboseli National Park - 'The Elephant Classroom'",
        activities: [
          "Morning and evening game drives with wildlife guides",
          "Ecology talk with Kenya Wildlife Service rangers about elephant behavior & conservation",
          "Visit a local Maasai school and community center",
          "Tree planting and climate action activity",
          "Observation session at the foot of Mt. Kilimanjaro",
          "Learning Focus: Ecosystem balance • Human–wildlife coexistence • Climate impact on savannahs"
        ]
      },
      {
        day: "Day 4-6",
        title: "Maasai Mara National Reserve - 'Conservation in Action'",
        activities: [
          "Big 5 game drives and wildlife data recording (field journals provided)",
          "Educational visit to Mara Elephant Project or Predator Conservation Program",
          "Talk with park rangers on anti-poaching & tracking technology",
          "Maasai cultural day – learn traditional conservation methods, songs, and dances",
          "Optional hot air balloon safari at sunrise (extra cost)",
          "Learning Focus: Wildlife research • Biodiversity • Sustainable tourism"
        ]
      },
      {
        day: "Day 7-9",
        title: "Samburu National Reserve - 'People & Wildlife of the North'",
        activities: [
          "Game drives focusing on rare northern species (Samburu Special Five)",
          "Visit Reteti Elephant Sanctuary for hands-on conservation learning",
          "Walking safari with Samburu warriors",
          "Cultural workshop with Samburu women's beadwork group",
          "Group reflection session and certificate presentation",
          "Learning Focus: Animal adaptation • Community-based conservation • Indigenous knowledge"
        ]
      },
      {
        day: "Day 10",
        title: "Departure",
        activities: [
          "Morning leisure time and final packing",
          "Check-out from lodge",
          "Flight back to Nairobi",
          "Transfer to international airport"
        ]
      }
    ],
    highlights: [
      "Three iconic ecosystems in one journey",
      "Hands-on conservation experiences",
      "Wildlife expert talks and field sessions",
      "Cultural immersion with Maasai & Samburu communities",
      "Certificate of participation",
      "Perfect for students, schools & nature enthusiasts",
      "Educational materials and field journals included",
      "Visit to Reteti Elephant Sanctuary"
    ]
  },
  {
    id: 5,
    title: "Corporate & Conference",
    subtitle: "🤝 Team Building Adventures",
    category: "Corporate And Conference",
    image: dianiBeach,
    rating: 4.5,
    discount: "15% OFF",
    price: "From $169",
    originalPrice: "$200",
    description: "💼 Boost teamwork with exciting coastal activities, safaris, and bonding experiences in stunning locations. Business with pleasure!",
    icon: Users,
    badge: "🏢 Corporate Choice",
    urgency: "Great for Q1 team events!",
    reviews: 194,
    duration: "3-5 Days",
    location: "Amboseli • Maasai Mara • Samburu",
    detailedDescription: "Reignite team spirit in the wild! This safari combines wildlife exploration, outdoor challenges, and cultural immersion to help teams build trust, improve communication, and strengthen leadership — all while surrounded by Kenya's breathtaking landscapes. Whether it's strategizing during a scavenger hunt, working together on a conservation project, or sharing stories around a campfire, every moment is designed to bring your team closer together.",
    inclusions: [
      "🏨 Accommodation on full board basis",
      "🎫 Park fees and game drives",
      "🎯 Team-building equipment & facilitation",
      "👥 Professional facilitator (optional)",
      "🌱 Cultural visits and conservation activities",
      "🚗 Transport & transfers between parks",
      "🍽️ All meals (breakfast, lunch, dinner)",
      "🐘 Wildlife conservation activities",
      "🔥 Evening bonfire sessions",
      "📜 Team Spirit Awards certificates",
      "📸 Group photo souvenirs",
      "💧 Bottled water during activities"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Icebreakers - Amboseli National Park",
        activities: [
          "Welcome orientation and team icebreaker games at the lodge",
          "Group challenge: 'Safari Scavenger Hunt' – teams identify animals, plants, and landmarks",
          "Evening bonfire with reflection session",
          "Optional short nature walk led by Maasai guide",
          "Team Focus: Communication • Observation • Breaking Silos"
        ]
      },
      {
        day: "Day 2-3",
        title: "Maasai Mara - Leadership in the Wild",
        activities: [
          "Early morning game drive + photo challenge ('Who spots the Big 5 first?')",
          "Team challenge: 'Conservation Quest' – each team works on a mock wildlife protection plan",
          "Cultural Exchange Activity – build Maasai-style huts or learn fire-making as a group",
          "Bush dinner under the stars with group skits and awards",
          "Team Focus: Leadership • Problem-Solving • Creativity"
        ]
      },
      {
        day: "Day 4",
        title: "Samburu - Strength & Strategy",
        activities: [
          "Obstacle course or mini 'wild rally' challenge within the camp area",
          "Community volunteering activity – assist at Reteti Elephant Sanctuary or local school",
          "Sunset yoga / reflection session to wind down",
          "Team Focus: Strategy • Collaboration • Emotional intelligence"
        ]
      },
      {
        day: "Day 5",
        title: "Wrap-Up & Awards",
        activities: [
          "Group reflection & feedback circle",
          "Certificate ceremony: 'Team Spirit Awards'",
          "Return to Nairobi with optional stop at Giraffe Centre or Carnivore Restaurant",
          "Farewell lunch and departure"
        ]
      }
    ],
    highlights: [
      "Custom group challenges & workshops",
      "Professional team-building facilitator available",
      "Conservation or CSR activities (tree planting, school support)",
      "Team awards & photo souvenirs",
      "Perfect for corporate retreats and conferences",
      "Flexible 3-5 day packages",
      "Accommodations: Ol Tukai Lodge, Mara Intrepids Camp, Samburu Intrepids",
      "Suitable for groups of 10-20 people"
    ]
  },
  {
    id: 6,
    title: "New Year Special",
    subtitle: "🎆 Welcome 2025 in Paradise",
    category: "Christmas Deals",
    image: mombasa,
    rating: 4.8,
    discount: "40% OFF",
    price: "From $269",
    originalPrice: "$446",
    description: "🥂 Ring in the new year with fireworks on the beach, live music, and unforgettable celebrations. Start 2025 in paradise!",
    icon: Gift,
    badge: "🔥 Hot Deal",
    urgency: "Almost sold out!",
    reviews: 456
  }
];