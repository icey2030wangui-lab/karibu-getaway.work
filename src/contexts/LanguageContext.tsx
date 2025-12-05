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
    
    // Hero
    'hero.explore': 'Explore Kenya',
    'hero.discoverMagic': 'Discover the Magic of Kenya',
    'hero.subtitle': 'Experience breathtaking safaris, pristine beaches, and rich cultural heritage',
    
    // Sections
    'sections.popularDestinations': 'Popular Destinations',
    'sections.specialOffers': 'Special Offers',
    'sections.stayAndDine': 'Stay & Dine',
    'sections.safariPackages': 'Safari Packages',
    'sections.whyChooseUs': 'Why Choose Us',
    'sections.testimonials': 'Testimonials',
    
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
    
    // Hero
    'hero.explore': 'Kenia entdecken',
    'hero.discoverMagic': 'Entdecken Sie die Magie Kenias',
    'hero.subtitle': 'Erleben Sie atemberaubende Safaris, unberührte Strände und reiches kulturelles Erbe',
    
    // Sections
    'sections.popularDestinations': 'Beliebte Reiseziele',
    'sections.specialOffers': 'Sonderangebote',
    'sections.stayAndDine': 'Übernachten & Speisen',
    'sections.safariPackages': 'Safari-Pakete',
    'sections.whyChooseUs': 'Warum uns wählen',
    'sections.testimonials': 'Kundenbewertungen',
    
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
    
    // Footer
    'footer.about': 'À propos',
    'footer.aboutText': 'Karibu Getaways est votre partenaire de voyage premium pour des aventures kenyanes inoubliables. Nous sommes spécialisés dans les expériences de safari organisées, les escapades à la plage et les circuits culturels.',
    'footer.contactUs': 'Contactez-nous',
    'footer.quickLinks': 'Liens rapides',
    'footer.followUs': 'Suivez-nous',
    'footer.allRightsReserved': 'Tous droits réservés.',
    'footer.privacyPolicy': 'Politique de confidentialité',
    'footer.termsOfService': 'Conditions d\'utilisation',
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
    
    // Hero
    'hero.explore': 'Explorer le Kenya',
    'hero.discoverMagic': 'Découvrez la Magie du Kenya',
    'hero.subtitle': 'Vivez des safaris à couper le souffle, des plages immaculées et un riche patrimoine culturel',
    
    // Sections
    'sections.popularDestinations': 'Destinations Populaires',
    'sections.specialOffers': 'Offres Spéciales',
    'sections.stayAndDine': 'Séjour & Restauration',
    'sections.safariPackages': 'Forfaits Safari',
    'sections.whyChooseUs': 'Pourquoi nous choisir',
    'sections.testimonials': 'Témoignages',
    
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
