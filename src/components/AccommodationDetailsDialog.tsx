import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingDialog } from "@/components/BookingDialog";
import { ImageLightbox } from "@/components/ImageLightbox";
import { MapPin, Bed, CheckCircle2 } from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
}

interface AccommodationDetailsProps {
  name: string;
  category: string;
  type: string;
  image: string;
  description: string;
  rooms: number;
  location: string;
  features: string[];
  pricing: {
    perPerson: string;
  };
  gallery?: GalleryImage[];
  isOpen: boolean;
  onClose: () => void;
}

export const AccommodationDetailsDialog = ({
  name,
  category,
  type,
  image,
  description,
  rooms,
  location,
  features,
  pricing,
  gallery,
  isOpen,
  onClose,
}: AccommodationDetailsProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const hasGallery = gallery && gallery.length > 0;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge variant="outline" className="mb-2">{type}</Badge>
                <DialogTitle className="text-2xl">{name}</DialogTitle>
                <Badge className="mt-2">{category}</Badge>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Photo Gallery - Featured prominently */}
            {hasGallery && (
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Photo Gallery ({gallery.length} photos)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {gallery.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="relative overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all hover:shadow-lg"
                    >
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                        <p className="text-white text-xs px-2 text-center">{photo.caption}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3 italic">
                  Click any photo to view in full screen with swipe navigation
                </p>
              </div>
            )}

            {/* Location */}
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>{location}</span>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>

            {/* Rooms */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Bed className="w-5 h-5" />
              <span>This property has {rooms} rooms</span>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Pricing</h3>
              <p className="text-xl font-bold text-primary">{pricing.perPerson}</p>
            </div>

            {/* Booking Button */}
            <div className="flex gap-3">
              <BookingDialog
                packageName={`${name} - Masai Mara Safari`}
                packagePrice={pricing.perPerson}
                buttonText="Book Now"
                buttonVariant="default"
              />
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox for Gallery */}
      {hasGallery && (
        <ImageLightbox
          images={gallery}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};
