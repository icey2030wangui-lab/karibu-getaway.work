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
    reviews: 521
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
    reviews: 287
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
    reviews: 419
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
    reviews: 194
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