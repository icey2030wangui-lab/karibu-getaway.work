import { Button } from "@/components/ui/button";

interface BookingDialogProps {
  packageName: string;
  packagePrice: string;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary";
}

export const BookingDialog = ({ 
  buttonText = "Book Now",
  buttonVariant = "default" 
}: BookingDialogProps) => {
  
  const handleClick = () => {
    // Scroll to bottom of page smoothly
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    
    // After scrolling, trigger the chat icon
    setTimeout(() => {
      const chatButton = document.querySelector('button[class*="fixed bottom-6 right-6"]') as HTMLButtonElement;
      if (chatButton) {
        chatButton.click();
      }
    }, 500);
  };

  return (
    <Button variant={buttonVariant} onClick={handleClick}>
      {buttonText}
    </Button>
  );
};
