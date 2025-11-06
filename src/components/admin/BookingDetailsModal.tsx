import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, User, CreditCard, Package, Calendar, History } from "lucide-react";
import { format } from "date-fns";

type Booking = {
  id: string;
  booking_reference: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_email: string;
  package_name: string;
  package_price: number;
  payment_status: string;
  paypal_order_id: string | null;
  paystack_reference: string | null;
  pesapal_merchant_reference: string | null;
  created_at: string;
  updated_at: string;
  modified_at: string | null;
  modified_by: string | null;
};

type ActivityLog = {
  id: string;
  booking_id: string;
  action: string;
  old_value: string | null;
  new_value: string | null;
  changed_by: string | null;
  created_at: string;
};

interface BookingDetailsModalProps {
  bookingId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingDetailsModal = ({ bookingId, open, onOpenChange }: BookingDetailsModalProps) => {
  const { data: booking, isLoading: bookingLoading } = useQuery({
    queryKey: ["booking-details", bookingId],
    queryFn: async () => {
      if (!bookingId) return null;
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("id", bookingId)
        .single();

      if (error) throw error;
      return data as Booking;
    },
    enabled: !!bookingId && open,
  });

  const { data: activityLogs, isLoading: logsLoading } = useQuery({
    queryKey: ["booking-activity", bookingId],
    queryFn: async () => {
      if (!bookingId) return [];
      const { data, error } = await supabase
        .from("booking_activity_logs")
        .select("*")
        .eq("booking_id", bookingId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching activity logs:", error);
        return [];
      }
      return data as ActivityLog[];
    },
    enabled: !!bookingId && open,
  });

  const getStatusColor = (status: string) => {
    const colors: Record<string, "default" | "secondary" | "destructive"> = {
      completed: "default",
      pending: "secondary",
      failed: "destructive",
    };
    return colors[status] || "secondary";
  };

  const getPaymentMethod = () => {
    if (booking?.paypal_order_id) return "PayPal";
    if (booking?.paystack_reference) return "Paystack";
    if (booking?.pesapal_merchant_reference) return "PesaPal";
    return "Unknown";
  };

  if (bookingLoading) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl">
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!booking) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Booking Details</DialogTitle>
          <DialogDescription>
            Reference: {booking.booking_reference}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-120px)]">
          <div className="space-y-6 pr-4">
            {/* Customer Information */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <User className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Customer Information</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 rounded-lg border p-4">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">
                    {booking.customer_first_name} {booking.customer_last_name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{booking.customer_email}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Package Information */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Package Details</h3>
              </div>
              <div className="rounded-lg border p-4 space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Package Name</p>
                  <p className="font-medium">{booking.package_name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="text-2xl font-bold text-primary">
                    ${booking.package_price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment Information */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Payment Details</h3>
              </div>
              <div className="rounded-lg border p-4 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Payment Method</p>
                    <p className="font-medium">{getPaymentMethod()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge variant={getStatusColor(booking.payment_status)}>
                      {booking.payment_status}
                    </Badge>
                  </div>
                </div>
                {booking.paypal_order_id && (
                  <div>
                    <p className="text-sm text-muted-foreground">PayPal Order ID</p>
                    <p className="font-mono text-sm">{booking.paypal_order_id}</p>
                  </div>
                )}
                {booking.paystack_reference && (
                  <div>
                    <p className="text-sm text-muted-foreground">Paystack Reference</p>
                    <p className="font-mono text-sm">{booking.paystack_reference}</p>
                  </div>
                )}
                {booking.pesapal_merchant_reference && (
                  <div>
                    <p className="text-sm text-muted-foreground">PesaPal Reference</p>
                    <p className="font-mono text-sm">{booking.pesapal_merchant_reference}</p>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Booking Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Timeline</h3>
              </div>
              <div className="rounded-lg border p-4 space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Created</p>
                  <p className="font-medium">
                    {format(new Date(booking.created_at), "PPpp")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Updated</p>
                  <p className="font-medium">
                    {format(new Date(booking.updated_at), "PPpp")}
                  </p>
                </div>
                {booking.modified_at && (
                  <div>
                    <p className="text-sm text-muted-foreground">Last Modified</p>
                    <p className="font-medium">
                      {format(new Date(booking.modified_at), "PPpp")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Activity History */}
            {activityLogs && activityLogs.length > 0 && (
              <>
                <Separator />
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <History className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Activity History</h3>
                  </div>
                  <div className="rounded-lg border">
                    {logsLoading ? (
                      <div className="flex justify-center py-4">
                        <Loader2 className="h-6 w-6 animate-spin text-primary" />
                      </div>
                    ) : (
                      <div className="divide-y">
                        {activityLogs.map((log) => (
                          <div key={log.id} className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <p className="font-medium">{log.action}</p>
                                {log.old_value && log.new_value && (
                                  <p className="text-sm text-muted-foreground">
                                    Changed from <span className="font-mono">{log.old_value}</span> to{" "}
                                    <span className="font-mono">{log.new_value}</span>
                                  </p>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {format(new Date(log.created_at), "MMM dd, yyyy HH:mm")}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
