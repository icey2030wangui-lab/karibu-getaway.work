import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, X } from "lucide-react";
import { useSearch, SearchResult } from "@/contexts/SearchContext";
import { cn } from "@/lib/utils";

interface SearchResultsProps {
  className?: string;
}

const SearchResults = ({ className }: SearchResultsProps) => {
  const { searchResults, isSearching, clearSearch, searchQuery } = useSearch();

  if (!isSearching || searchQuery.length < 2) {
    return null;
  }

  return (
    <div 
      className={cn(
        "absolute top-full left-0 right-0 z-50 mt-2 bg-card border border-border rounded-lg shadow-xl max-h-96 overflow-y-auto",
        className
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">Search Results</h3>
          <p className="text-sm text-muted-foreground">
            {searchResults.length} results for "{searchQuery}"
          </p>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={clearSearch}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Results */}
      <div className="max-h-80 overflow-y-auto">
        {searchResults.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-muted-foreground">No results found</p>
            <p className="text-sm text-muted-foreground mt-1">
              Try searching for destinations, packages, or offers
            </p>
          </div>
        ) : (
          <div className="p-2 space-y-2">
            {searchResults.map((result) => (
              <SearchResultItem key={result.id} result={result} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {searchResults.length > 0 && (
        <div className="p-4 border-t border-border text-center">
          <Button variant="outline" size="sm" className="text-primary">
            View All Results
          </Button>
        </div>
      )}
    </div>
  );
};

const SearchResultItem = ({ result }: { result: SearchResult }) => {
  const { clearSearch } = useSearch();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'destination':
        return 'bg-primary/10 text-primary';
      case 'package':
        return 'bg-accent/10 text-accent';
      case 'offer':
        return 'bg-secondary/10 text-secondary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'destination':
        return <MapPin className="w-3 h-3" />;
      case 'package':
        return <Clock className="w-3 h-3" />;
      case 'offer':
        return <Star className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    clearSearch();
    // Add navigation logic here based on result type
    if (result.type === 'destination' && result.title === 'Diani Beach') {
      const dianiSection = document.getElementById('diani-packages');
      if (dianiSection) {
        dianiSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Card 
      className="cursor-pointer hover:bg-accent/5 transition-colors duration-200 border-0 shadow-sm hover:shadow-md"
      onClick={handleClick}
    >
      <CardContent className="p-3">
        <div className="flex gap-3">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={result.image}
              alt={result.title}
              className="w-16 h-12 object-cover rounded"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge 
                    variant="secondary" 
                    className={cn("text-xs px-2 py-0", getTypeColor(result.type))}
                  >
                    <span className="flex items-center gap-1">
                      {getTypeIcon(result.type)}
                      {result.type}
                    </span>
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {result.badge}
                  </Badge>
                </div>
                
                <h4 className="font-medium text-sm text-foreground truncate">
                  {result.title}
                </h4>
                
                {result.subtitle && (
                  <p className="text-xs text-muted-foreground truncate">
                    {result.subtitle}
                  </p>
                )}
                
                <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                  {result.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-semibold text-primary">
                  {result.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchResults;