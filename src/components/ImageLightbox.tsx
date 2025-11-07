import { useState, useEffect, useRef } from "react";
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  // Safety check: if images array is empty or undefined, close the lightbox
  useEffect(() => {
    if (!images || images.length === 0) {
      onClose();
    }
  }, [images, onClose]);

  // Reset index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Safety check: ensure currentIndex is within bounds
  const safeIndex = Math.max(0, Math.min(currentIndex, (images?.length || 1) - 1));
  const currentImage = images?.[safeIndex];

  // If no valid image, don't render
  if (!currentImage) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setSwipeOffset(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setSwipeOffset(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  // Touch event handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    // Calculate offset for visual feedback
    if (touchStart !== null) {
      const offset = currentTouch - touchStart;
      // Limit the offset to prevent over-dragging
      const limitedOffset = Math.max(-200, Math.min(200, offset));
      setSwipeOffset(limitedOffset);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setSwipeOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    } else {
      // Reset if swipe wasn't far enough
      setSwipeOffset(0);
    }

    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
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
          <div 
            ref={imageContainerRef}
            className="flex flex-col items-center justify-center w-full h-full p-12 touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="transition-transform duration-200 ease-out"
              style={{ 
                transform: `translateX(${swipeOffset}px)`,
                opacity: Math.max(0.3, 1 - Math.abs(swipeOffset) / 200)
              }}
            >
              <img
                src={currentImage.url}
                alt={currentImage.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg select-none"
                draggable="false"
              />
            </div>
            
            {/* Swipe Indicator */}
            {swipeOffset !== 0 && (
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <div className="bg-white/30 backdrop-blur-md rounded-full p-4 animate-pulse">
                  {swipeOffset < 0 ? (
                    <ChevronLeft className="w-12 h-12 text-white" />
                  ) : (
                    <ChevronRight className="w-12 h-12 text-white" />
                  )}
                </div>
              </div>
            )}
            
            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-white text-lg font-medium mb-2">
                {currentImage.caption}
              </p>
              <p className="text-white/70 text-sm">
                {safeIndex + 1} / {images.length}
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
                  safeIndex === index
                    ? "border-white scale-110"
                    : "border-white/30 hover:border-white/60"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  loading="lazy"
                  decoding="async"
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
