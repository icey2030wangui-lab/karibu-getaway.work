import React, { createContext, useContext, useState, ReactNode } from 'react';
import { destinations } from '@/data/destinations';
import { dianiPackages } from '@/data/packages';
import { specialOffers } from '@/data/offers';

export interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  price: string;
  image: string;
  badge: string;
  type: 'destination' | 'package' | 'offer';
  originalData: any;
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
  isSearching: boolean;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = (query: string): SearchResult[] => {
    if (!query.trim()) return [];

    const normalizedQuery = query.toLowerCase().trim();
    const results: SearchResult[] = [];

    // Search destinations
    destinations.forEach((destination, index) => {
      const searchText = `${destination.name} ${destination.description} ${destination.badge}`.toLowerCase();
      if (searchText.includes(normalizedQuery)) {
        results.push({
          id: `destination-${index}`,
          title: destination.name,
          description: destination.description,
          price: destination.price,
          image: destination.image,
          badge: destination.badge,
          type: 'destination',
          originalData: destination
        });
      }
    });

    // Search packages
    dianiPackages.forEach((pkg) => {
      const searchText = `${pkg.title} ${pkg.location} ${pkg.description} ${pkg.badge} ${pkg.duration}`.toLowerCase();
      if (searchText.includes(normalizedQuery)) {
        results.push({
          id: `package-${pkg.id}`,
          title: pkg.title,
          subtitle: pkg.location,
          description: pkg.description,
          price: pkg.price,
          image: pkg.images[0],
          badge: pkg.badge,
          type: 'package',
          originalData: pkg
        });
      }
    });

    // Search special offers
    specialOffers.forEach((offer) => {
      const searchText = `${offer.title} ${offer.subtitle} ${offer.category} ${offer.description} ${offer.badge}`.toLowerCase();
      if (searchText.includes(normalizedQuery)) {
        results.push({
          id: `offer-${offer.id}`,
          title: offer.title,
          subtitle: offer.subtitle,
          description: offer.description,
          price: offer.price,
          image: offer.image,
          badge: offer.badge,
          type: 'offer',
          originalData: offer
        });
      }
    });

    return results.slice(0, 8); // Limit to 8 results
  };

  const searchResults = performSearch(searchQuery);

  const handleSetSearchQuery = (query: string) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery: handleSetSearchQuery,
        searchResults,
        isSearching,
        clearSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};