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
import { Loader2, CreditCard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayPalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('paypal-initiate-payment', {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          packageName: packageName,
          packagePrice: packagePrice.replace(/[^0-9.]/g, ''),
        },
      });

      if (error) {
        console.error('Supabase invocation error:', error);
        throw new Error(error.message || 'There was an error processing your payment request.');
      }

      if (!data?.success) {
        throw new Error(data?.error || 'Failed to initiate payment');
      }

      if (!data?.redirectUrl) {
        throw new Error('No payment redirect URL received');
      }

      setOpen(false);
      setTimeout(() => {
        window.location.href = data.redirectUrl;
      }, 100);
      
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

  const handlePaystackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('paystack-initiate-payment', {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          packageName: packageName,
          packagePrice: packagePrice.replace(/[^0-9.]/g, ''),
        },
      });

      if (error) {
        console.error('Supabase invocation error:', error);
        throw new Error(error.message || 'There was an error processing your payment request.');
      }

      if (!data?.success) {
        throw new Error(data?.error || 'Failed to initiate payment');
      }

      if (!data?.authorization_url) {
        throw new Error('No payment redirect URL received');
      }

      setOpen(false);
      setTimeout(() => {
        window.location.href = data.authorization_url;
      }, 100);
      
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Book Your Package</DialogTitle>
          <DialogDescription>
            Complete your details and choose your payment method
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
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
          <div className="pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">Package:</span>
              <span className="font-medium">{packageName}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">Total Amount:</span>
              <span className="text-xl font-bold text-primary">{packagePrice}</span>
            </div>
          </div>
          
          <Tabs defaultValue="card" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="card">
                <CreditCard className="mr-2 h-4 w-4" />
                Card Payment
              </TabsTrigger>
              <TabsTrigger value="paypal">PayPal</TabsTrigger>
            </TabsList>
            
            <TabsContent value="card" className="mt-4">
              <form onSubmit={handlePaystackSubmit}>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Pay with Card
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="paypal" className="mt-4">
              <form onSubmit={handlePayPalSubmit}>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Pay with PayPal"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
