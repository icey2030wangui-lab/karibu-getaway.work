import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
}

interface ImageLightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageLightbox = ({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none"
        onKeyDown={handleKeyDown}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full h-12 w-12"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          {/* Image */}
          <div className="flex flex-col items-center justify-center w-full h-full p-12">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-white text-lg font-medium mb-2">
                {images[currentIndex].caption}
              </p>
              <p className="text-white/70 text-sm">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full h-12 w-12"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  currentIndex === index
                    ? "border-white scale-110"
                    : "border-white/30 hover:border-white/60"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
