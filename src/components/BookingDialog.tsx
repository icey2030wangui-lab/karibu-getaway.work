import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface BookingDialogProps {
  packageName: string;
  packagePrice: string;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary";
}

export const BookingDialog = ({ 
  packageName, 
  packagePrice, 
  buttonText = "Book Now",
  buttonVariant = "default" 
}: BookingDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Call the edge function to initiate payment
      const { data, error } = await supabase.functions.invoke('pesapal-initiate-payment', {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          packageName: packageName,
          packagePrice: packagePrice.replace('$', '').replace(',', ''),
        },
      });

      if (error) {
        console.error('Payment initiation error:', error);
        throw new Error(error.message);
      }

      if (data?.success && data?.redirectUrl) {
        toast({
          title: "Redirecting to payment...",
          description: "You will be redirected to Pesapal to complete your payment.",
        });
        
        // Redirect to Pesapal payment page
        window.location.href = data.redirectUrl;
      } else {
        throw new Error(data?.error || 'Failed to initiate payment');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      toast({
        title: "Payment Failed",
        description: error instanceof Error ? error.message : "There was an error processing your payment request.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Your Package</DialogTitle>
          <DialogDescription>
            Complete your details to proceed with booking {packageName}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+254712345678"
              value={formData.phone}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>
          <div className="pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">Package:</span>
              <span className="font-medium">{packageName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Amount:</span>
              <span className="text-xl font-bold text-primary">{packagePrice}</span>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Proceed to Payment"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
