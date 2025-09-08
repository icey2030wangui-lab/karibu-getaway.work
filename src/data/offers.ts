import { Gift, Heart, Calendar, Users, GraduationCap } from "lucide-react";
import dianiBeach from "@/assets/diani-beach.jpg";
import masaiMara from "@/assets/masai-mara.jpg";
import mombasa from "@/assets/mombasa.jpg";
import samburu from "@/assets/samburu.jpg";

export const specialOffers = [
  {
    id: 1,
    title: "Christmas Holiday Special",
    subtitle: "Magical Coastal Christmas",
    category: "Christmas Deals",
    image: dianiBeach,
    rating: 4.8,
    discount: "30% OFF",
    price: "From KSh 25,000",
    originalPrice: "KSh 35,000",
    description: "Celebrate Christmas by the beach with special holiday activities",
    icon: Gift,
    badge: "Limited Time"
  },
  {
    id: 2,
    title: "Romantic Holiday",
    subtitle: "Luxury Island Honeymoon",
    category: "Romantic Holiday",
    image: mombasa,
    rating: 4.9,
    discount: "25% OFF",
    price: "From KSh 45,000",
    originalPrice: "KSh 60,000",
    description: "Perfect romantic getaway for couples seeking luxury and privacy",
    icon: Heart,
    badge: "Most Popular"
  },
  {
    id: 3,
    title: "Birthday Package",
    subtitle: "Safari For Your Birthday",
    category: "Birthday Package",
    image: masaiMara,
    rating: 4.7,
    discount: "20% OFF",
    price: "From KSh 32,000",
    originalPrice: "KSh 40,000",
    description: "Make your birthday unforgettable with an exclusive safari adventure",
    icon: Calendar,
    badge: "Birthday Special"
  },
  {
    id: 4,
    title: "School Holiday Deals",
    subtitle: "Educational Safari Tours",
    category: "School Holiday Deals",
    image: samburu,
    rating: 4.6,
    discount: "35% OFF",
    price: "From KSh 18,000",
    originalPrice: "KSh 28,000",
    description: "Educational and fun safari experiences for students and families",
    icon: GraduationCap,
    badge: "Family Friendly"
  },
  {
    id: 5,
    title: "Corporate & Conference",
    subtitle: "Team Building Adventures",
    category: "Corporate And Conference",
    image: dianiBeach,
    rating: 4.5,
    discount: "15% OFF",
    price: "From KSh 22,000",
    originalPrice: "KSh 26,000",
    description: "Professional team building experiences in stunning locations",
    icon: Users,
    badge: "Corporate"
  },
  {
    id: 6,
    title: "New Year Special",
    subtitle: "Welcome 2025 in Paradise",
    category: "Christmas Deals",
    image: mombasa,
    rating: 4.8,
    discount: "40% OFF",
    price: "From KSh 35,000",
    originalPrice: "KSh 58,000",
    description: "Ring in the New Year with spectacular coastal celebrations",
    icon: Gift,
    badge: "New Year"
  }
];