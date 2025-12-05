import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.safariPackages': 'Safari Packages',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.stayAndDine': 'Stay and Dine Selection',
    'nav.menu': 'Menu',
    
    // Footer
    'footer.about': 'About',
    'footer.aboutText': 'Karibu Getaways is your premier travel partner for unforgettable Kenyan adventures. We specialize in curated safari experiences, beach getaways, and cultural tours.',
    'footer.contactUs': 'Contact Us',
    'footer.quickLinks': 'Quick Links',
    'footer.followUs': 'Follow Us',
    'footer.allRightsReserved': 'All rights reserved.',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.licensedBy': 'Licensed by Kenya Tourism Board',
    'footer.memberOf': 'Member of KATO',
    
    // Common
    'common.viewDetails': 'View Details',
    'common.bookNow': 'Book Now',
    'common.learnMore': 'Learn More',
    'common.price': 'Price',
    'common.duration': 'Duration',
    'common.perPerson': 'per person',
    'common.from': 'From',
    'common.includes': 'Includes',
    'common.highlights': 'Highlights',
    'common.activities': 'Activities',
    'common.accommodation': 'Accommodation',
    'common.meals': 'Meals',
    'common.transport': 'Transport',
    'common.days': 'days',
    'common.nights': 'nights',
    'common.guests': 'Guests',
    'common.date': 'Date',
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.website': 'Website',
    'common.address': 'Address',
    'common.location': 'Location',
    'common.reviews': 'reviews',
    'common.packages': 'packages',
    'common.startingFrom': 'Starting From',
    'common.save': 'Save',
    'common.processing': 'Processing...',
    'common.firstName': 'First Name',
    'common.lastName': 'Last Name',
    'common.package': 'Package',
    'common.totalAmount': 'Total Amount',
    
    // Hero
    'hero.title': "Discover Kenya's",
    'hero.titleHighlight': 'Hidden Treasures',
    'hero.subtitle': "From pristine beaches to majestic wildlife safaris, experience unforgettable adventures with Kenya's most trusted travel partner",
    'hero.bookAdventure': 'Book Your Adventure',
    'hero.exploreDestinations': 'Explore Destinations',
    
    // Sections
    'sections.popularDestinations': 'Popular Destinations',
    'sections.popularDestinationsSubtitle': "Explore Kenya's most breathtaking landscapes, from pristine beaches to magnificent wildlife safaris and rich cultural experiences",
    'sections.beachParadise': 'Beach Paradise',
    'sections.wildSafari': 'Wild Safari',
    'sections.cityBreaks': 'City Breaks',
    'sections.adventureAwaits': 'Adventure Awaits',
    'sections.destinationsCount': '100+ destinations across Kenya • Expert local guides • Unforgettable experiences',
    'sections.specialOffers': 'Special Offers',
    'sections.specialOffersSubtitle': 'Award-winning team • 24/7 Support • 100% Financial Protection • Dream, Book & Travel Carefree!',
    'sections.hotDeals': 'Hot Deals',
    'sections.limitedTime': 'Limited Time',
    'sections.bestPrices': 'Best Prices Guaranteed',
    'sections.saveUpTo': 'Save up to 40% on selected packages • Limited availability!',
    'sections.stayAndDine': 'Stay & Dine',
    'sections.dianiStayDine': 'Diani Stay & Dine Selection',
    'sections.dianiStayDineSubtitle': "Curated collection of premium accommodations paired with memorable dining experiences at Kenya's premier beach destination",
    'sections.popularPackages': 'Popular Packages & Activities',
    'sections.mombasaStayDine': 'Mombasa Stay & Dine Selection',
    'sections.mombasaStayDineSubtitle': "Experience the best of Mombasa with our curated selection of accommodations and dining experiences",
    'sections.safariPackages': 'Safari Packages',
    'sections.whyChooseUs': 'Why Choose Us',
    'sections.testimonials': 'Testimonials',
    
    // Package Details
    'package.overview': 'Overview',
    'package.pricing': 'Pricing',
    'package.inclusions': 'Inclusions',
    'package.exclusions': 'Exclusions',
    'package.gallery': 'Gallery',
    'package.itinerary': 'Itinerary',
    'package.aboutPackage': 'About The Package',
    'package.roomDetails': 'Room Details',
    'package.roomType': 'Room Type',
    'package.roomSize': 'Room Size',
    'package.bedding': 'Bedding',
    'package.roomAmenities': 'Room Amenities',
    'package.recommendedDining': 'Recommended Dining',
    'package.packagePricing': 'Package Pricing',
    'package.perPersonSharing': 'Per person sharing',
    'package.whatsIncluded': "What's Included in Your Package",
    'package.activityProgram': '3-Day Activity Program',
    'package.photoGallery': 'Photo Gallery',
    'package.tripInfo': 'TRIP INFORMATION',
    'package.daysCount': 'Days Count',
    'package.included': 'Included',
    'package.viewThisPackage': 'VIEW THIS PACKAGE',
    'package.packageHighlights': 'Package Highlights',
    
    // Booking
    'booking.title': 'Book Your Package',
    'booking.subtitle': 'Complete your details and choose your payment method',
    'booking.missingInfo': 'Missing Information',
    'booking.fillAllFields': 'Please fill in all fields before proceeding.',
    'booking.paymentFailed': 'Payment Failed',
    'booking.cardPayment': 'Card Payment',
    'booking.payWithCard': 'Pay with Card',
    'booking.payWithPaypal': 'Pay with PayPal',
    
    // Destinations
    'destinations.dianiBeach': 'Diani Beach',
    'destinations.mombasa': 'Mombasa',
    'destinations.malindiWatamu': 'Malindi & Watamu',
    'destinations.masaiMara': 'Masai Mara',
    'destinations.amboseli': 'Amboseli',
    'destinations.samburu': 'Samburu',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.destinations': 'Reiseziele',
    'nav.safariPackages': 'Safari-Pakete',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.stayAndDine': 'Übernachten & Speisen',
    'nav.menu': 'Menü',
    
    // Footer
    'footer.about': 'Über uns',
    'footer.aboutText': 'Karibu Getaways ist Ihr erstklassiger Reisepartner für unvergessliche kenianische Abenteuer. Wir sind spezialisiert auf kuratierte Safari-Erlebnisse, Strandurlaub und Kulturreisen.',
    'footer.contactUs': 'Kontaktieren Sie uns',
    'footer.quickLinks': 'Schnelllinks',
    'footer.followUs': 'Folgen Sie uns',
    'footer.allRightsReserved': 'Alle Rechte vorbehalten.',
    'footer.privacyPolicy': 'Datenschutzrichtlinie',
    'footer.termsOfService': 'Nutzungsbedingungen',
    'footer.licensedBy': 'Lizenziert von Kenya Tourism Board',
    'footer.memberOf': 'Mitglied von KATO',
    
    // Common
    'common.viewDetails': 'Details ansehen',
    'common.bookNow': 'Jetzt buchen',
    'common.learnMore': 'Mehr erfahren',
    'common.price': 'Preis',
    'common.duration': 'Dauer',
    'common.perPerson': 'pro Person',
    'common.from': 'Ab',
    'common.includes': 'Inklusive',
    'common.highlights': 'Höhepunkte',
    'common.activities': 'Aktivitäten',
    'common.accommodation': 'Unterkunft',
    'common.meals': 'Mahlzeiten',
    'common.transport': 'Transport',
    'common.days': 'Tage',
    'common.nights': 'Nächte',
    'common.guests': 'Gäste',
    'common.date': 'Datum',
    'common.phone': 'Telefon',
    'common.email': 'E-Mail',
    'common.website': 'Webseite',
    'common.address': 'Adresse',
    'common.location': 'Standort',
    'common.reviews': 'Bewertungen',
    'common.packages': 'Pakete',
    'common.startingFrom': 'Ab',
    'common.save': 'Sparen',
    'common.processing': 'Verarbeitung...',
    'common.firstName': 'Vorname',
    'common.lastName': 'Nachname',
    'common.package': 'Paket',
    'common.totalAmount': 'Gesamtbetrag',
    
    // Hero
    'hero.title': 'Entdecken Sie Kenias',
    'hero.titleHighlight': 'verborgene Schätze',
    'hero.subtitle': 'Von unberührten Stränden bis zu majestätischen Wildtiersafaris - erleben Sie unvergessliche Abenteuer mit Kenias vertrauenswürdigstem Reisepartner',
    'hero.bookAdventure': 'Buchen Sie Ihr Abenteuer',
    'hero.exploreDestinations': 'Reiseziele erkunden',
    
    // Sections
    'sections.popularDestinations': 'Beliebte Reiseziele',
    'sections.popularDestinationsSubtitle': 'Erkunden Sie Kenias atemberaubendste Landschaften, von unberührten Stränden bis zu großartigen Wildtiersafaris und reichen kulturellen Erfahrungen',
    'sections.beachParadise': 'Strandparadies',
    'sections.wildSafari': 'Wilde Safari',
    'sections.cityBreaks': 'Städtereisen',
    'sections.adventureAwaits': 'Abenteuer wartet',
    'sections.destinationsCount': '100+ Reiseziele in Kenia • Erfahrene lokale Guides • Unvergessliche Erlebnisse',
    'sections.specialOffers': 'Sonderangebote',
    'sections.specialOffersSubtitle': 'Preisgekröntes Team • 24/7 Support • 100% Finanzschutz • Träumen, Buchen & Sorglos Reisen!',
    'sections.hotDeals': 'Heiße Angebote',
    'sections.limitedTime': 'Begrenzte Zeit',
    'sections.bestPrices': 'Beste Preise garantiert',
    'sections.saveUpTo': 'Sparen Sie bis zu 40% auf ausgewählte Pakete • Begrenzte Verfügbarkeit!',
    'sections.stayAndDine': 'Übernachten & Speisen',
    'sections.dianiStayDine': 'Diani Übernachten & Speisen Auswahl',
    'sections.dianiStayDineSubtitle': 'Kuratierte Sammlung erstklassiger Unterkünfte gepaart mit unvergesslichen kulinarischen Erlebnissen an Kenias Premium-Strandziel',
    'sections.popularPackages': 'Beliebte Pakete & Aktivitäten',
    'sections.mombasaStayDine': 'Mombasa Übernachten & Speisen Auswahl',
    'sections.mombasaStayDineSubtitle': 'Erleben Sie das Beste von Mombasa mit unserer kuratierten Auswahl an Unterkünften und kulinarischen Erlebnissen',
    'sections.safariPackages': 'Safari-Pakete',
    'sections.whyChooseUs': 'Warum uns wählen',
    'sections.testimonials': 'Kundenbewertungen',
    
    // Package Details
    'package.overview': 'Übersicht',
    'package.pricing': 'Preise',
    'package.inclusions': 'Inklusive',
    'package.exclusions': 'Exklusive',
    'package.gallery': 'Galerie',
    'package.itinerary': 'Reiseverlauf',
    'package.aboutPackage': 'Über das Paket',
    'package.roomDetails': 'Zimmerdetails',
    'package.roomType': 'Zimmertyp',
    'package.roomSize': 'Zimmergröße',
    'package.bedding': 'Bettwäsche',
    'package.roomAmenities': 'Zimmerausstattung',
    'package.recommendedDining': 'Empfohlene Restaurants',
    'package.packagePricing': 'Paketpreise',
    'package.perPersonSharing': 'Pro Person bei Doppelbelegung',
    'package.whatsIncluded': 'Was in Ihrem Paket enthalten ist',
    'package.activityProgram': '3-Tage-Aktivitätsprogramm',
    'package.photoGallery': 'Fotogalerie',
    'package.tripInfo': 'REISEINFORMATIONEN',
    'package.daysCount': 'Anzahl Tage',
    'package.included': 'Inklusive',
    'package.viewThisPackage': 'DIESES PAKET ANSEHEN',
    'package.packageHighlights': 'Paket-Highlights',
    
    // Booking
    'booking.title': 'Ihr Paket buchen',
    'booking.subtitle': 'Füllen Sie Ihre Daten aus und wählen Sie Ihre Zahlungsmethode',
    'booking.missingInfo': 'Fehlende Informationen',
    'booking.fillAllFields': 'Bitte füllen Sie alle Felder aus, bevor Sie fortfahren.',
    'booking.paymentFailed': 'Zahlung fehlgeschlagen',
    'booking.cardPayment': 'Kartenzahlung',
    'booking.payWithCard': 'Mit Karte bezahlen',
    'booking.payWithPaypal': 'Mit PayPal bezahlen',
    
    // Destinations
    'destinations.dianiBeach': 'Diani Strand',
    'destinations.mombasa': 'Mombasa',
    'destinations.malindiWatamu': 'Malindi & Watamu',
    'destinations.masaiMara': 'Masai Mara',
    'destinations.amboseli': 'Amboseli',
    'destinations.samburu': 'Samburu',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.destinations': 'Destinations',
    'nav.safariPackages': 'Forfaits Safari',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.stayAndDine': 'Séjour & Restauration',
    'nav.menu': 'Menu',
    
    // Footer
    'footer.about': 'À propos',
    'footer.aboutText': 'Karibu Getaways est votre partenaire de voyage premium pour des aventures kenyanes inoubliables. Nous sommes spécialisés dans les expériences de safari organisées, les escapades à la plage et les circuits culturels.',
    'footer.contactUs': 'Contactez-nous',
    'footer.quickLinks': 'Liens rapides',
    'footer.followUs': 'Suivez-nous',
    'footer.allRightsReserved': 'Tous droits réservés.',
    'footer.privacyPolicy': 'Politique de confidentialité',
    'footer.termsOfService': "Conditions d'utilisation",
    'footer.licensedBy': 'Agréé par Kenya Tourism Board',
    'footer.memberOf': 'Membre de KATO',
    
    // Common
    'common.viewDetails': 'Voir les détails',
    'common.bookNow': 'Réserver',
    'common.learnMore': 'En savoir plus',
    'common.price': 'Prix',
    'common.duration': 'Durée',
    'common.perPerson': 'par personne',
    'common.from': 'À partir de',
    'common.includes': 'Comprend',
    'common.highlights': 'Points forts',
    'common.activities': 'Activités',
    'common.accommodation': 'Hébergement',
    'common.meals': 'Repas',
    'common.transport': 'Transport',
    'common.days': 'jours',
    'common.nights': 'nuits',
    'common.guests': 'Invités',
    'common.date': 'Date',
    'common.phone': 'Téléphone',
    'common.email': 'E-mail',
    'common.website': 'Site web',
    'common.address': 'Adresse',
    'common.location': 'Emplacement',
    'common.reviews': 'avis',
    'common.packages': 'forfaits',
    'common.startingFrom': 'À partir de',
    'common.save': 'Économiser',
    'common.processing': 'Traitement...',
    'common.firstName': 'Prénom',
    'common.lastName': 'Nom',
    'common.package': 'Forfait',
    'common.totalAmount': 'Montant total',
    
    // Hero
    'hero.title': 'Découvrez les',
    'hero.titleHighlight': 'trésors cachés du Kenya',
    'hero.subtitle': "Des plages immaculées aux safaris majestueux, vivez des aventures inoubliables avec le partenaire de voyage le plus fiable du Kenya",
    'hero.bookAdventure': 'Réservez votre aventure',
    'hero.exploreDestinations': 'Explorer les destinations',
    
    // Sections
    'sections.popularDestinations': 'Destinations Populaires',
    'sections.popularDestinationsSubtitle': 'Explorez les paysages les plus époustouflants du Kenya, des plages immaculées aux magnifiques safaris et riches expériences culturelles',
    'sections.beachParadise': 'Paradis de plage',
    'sections.wildSafari': 'Safari sauvage',
    'sections.cityBreaks': 'Escapades urbaines',
    'sections.adventureAwaits': "L'aventure vous attend",
    'sections.destinationsCount': '100+ destinations au Kenya • Guides locaux experts • Expériences inoubliables',
    'sections.specialOffers': 'Offres Spéciales',
    'sections.specialOffersSubtitle': 'Équipe primée • Support 24/7 • Protection financière 100% • Rêvez, Réservez & Voyagez sans souci!',
    'sections.hotDeals': 'Offres chaudes',
    'sections.limitedTime': 'Temps limité',
    'sections.bestPrices': 'Meilleurs prix garantis',
    'sections.saveUpTo': "Économisez jusqu'à 40% sur les forfaits sélectionnés • Disponibilité limitée!",
    'sections.stayAndDine': 'Séjour & Restauration',
    'sections.dianiStayDine': 'Sélection Séjour & Restauration Diani',
    'sections.dianiStayDineSubtitle': "Collection soignée d'hébergements premium associés à des expériences culinaires mémorables dans la première destination balnéaire du Kenya",
    'sections.popularPackages': 'Forfaits & Activités Populaires',
    'sections.mombasaStayDine': 'Sélection Séjour & Restauration Mombasa',
    'sections.mombasaStayDineSubtitle': "Découvrez le meilleur de Mombasa avec notre sélection d'hébergements et d'expériences culinaires",
    'sections.safariPackages': 'Forfaits Safari',
    'sections.whyChooseUs': 'Pourquoi nous choisir',
    'sections.testimonials': 'Témoignages',
    
    // Package Details
    'package.overview': 'Aperçu',
    'package.pricing': 'Tarification',
    'package.inclusions': 'Inclusions',
    'package.exclusions': 'Exclusions',
    'package.gallery': 'Galerie',
    'package.itinerary': 'Itinéraire',
    'package.aboutPackage': 'À propos du forfait',
    'package.roomDetails': 'Détails de la chambre',
    'package.roomType': 'Type de chambre',
    'package.roomSize': 'Taille de la chambre',
    'package.bedding': 'Literie',
    'package.roomAmenities': 'Équipements de la chambre',
    'package.recommendedDining': 'Restaurants recommandés',
    'package.packagePricing': 'Tarification du forfait',
    'package.perPersonSharing': 'Par personne en partage',
    'package.whatsIncluded': 'Ce qui est inclus dans votre forfait',
    'package.activityProgram': "Programme d'activités de 3 jours",
    'package.photoGallery': 'Galerie photo',
    'package.tripInfo': 'INFORMATIONS DE VOYAGE',
    'package.daysCount': 'Nombre de jours',
    'package.included': 'Inclus',
    'package.viewThisPackage': 'VOIR CE FORFAIT',
    'package.packageHighlights': 'Points forts du forfait',
    
    // Booking
    'booking.title': 'Réservez votre forfait',
    'booking.subtitle': 'Complétez vos informations et choisissez votre mode de paiement',
    'booking.missingInfo': 'Informations manquantes',
    'booking.fillAllFields': 'Veuillez remplir tous les champs avant de continuer.',
    'booking.paymentFailed': 'Paiement échoué',
    'booking.cardPayment': 'Paiement par carte',
    'booking.payWithCard': 'Payer par carte',
    'booking.payWithPaypal': 'Payer avec PayPal',
    
    // Destinations
    'destinations.dianiBeach': 'Plage de Diani',
    'destinations.mombasa': 'Mombasa',
    'destinations.malindiWatamu': 'Malindi & Watamu',
    'destinations.masaiMara': 'Masai Mara',
    'destinations.amboseli': 'Amboseli',
    'destinations.samburu': 'Samburu',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
