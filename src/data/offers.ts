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
    price: "From KSh 25,000",
    originalPrice: "KSh 35,000",
    description: "🎅 Celebrate Christmas by the ocean with bonfires, beach parties, and festive Swahili feasts. Create magical memories under tropical stars!",
    icon: Gift,
    badge: "⏰ Limited Spots",
    urgency: "Only 8 spots left!",
    reviews: 342
  },
  {
    id: 2,
    title: "Romantic Holiday",
    subtitle: "💑 Luxury Island Honeymoon",
    category: "Romantic Holiday",
    image: mombasa,
    rating: 4.9,
    discount: "25% OFF",
    price: "From KSh 45,000",
    originalPrice: "KSh 60,000",
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
    price: "From KSh 32,000",
    originalPrice: "KSh 40,000",
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
    price: "From KSh 18,000",
    originalPrice: "KSh 28,000",
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
    price: "From KSh 22,000",
    originalPrice: "KSh 26,000",
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
    price: "From KSh 35,000",
    originalPrice: "KSh 58,000",
    description: "🥂 Ring in the new year with fireworks on the beach, live music, and unforgettable celebrations. Start 2025 in paradise!",
    icon: Gift,
    badge: "🔥 Hot Deal",
    urgency: "Almost sold out!",
    reviews: 456
  }
];