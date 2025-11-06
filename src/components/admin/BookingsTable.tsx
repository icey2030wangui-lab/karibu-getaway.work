import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Trash2, Search, Calendar, Eye } from "lucide-react";
import { format } from "date-fns";
import { BookingDetailsModal } from "./BookingDetailsModal";

type Booking = {
  id: string;
  booking_reference: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_email: string;
  package_name: string;
  package_price: number;
  payment_status: string;
  created_at: string;
};

export const BookingsTable = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["admin-bookings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Booking[];
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("bookings")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-bookings"] });
      toast({
        title: "Success",
        description: "Booking deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete booking",
        variant: "destructive",
      });
      console.error("Delete error:", error);
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status, oldStatus }: { id: string; status: string; oldStatus: string }) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from("bookings")
        .update({ payment_status: status })
        .eq("id", id);

      if (error) throw error;

      // Log the activity
      await supabase.from("booking_activity_logs").insert({
        booking_id: id,
        action: "Status Updated",
        old_value: oldStatus,
        new_value: status,
        changed_by: user?.id || null,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-bookings"] });
      toast({
        title: "Success",
        description: "Status updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
      console.error("Update error:", error);
    },
  });

  const filteredBookings = bookings?.filter((booking) => {
    const matchesStatus = statusFilter === "all" || booking.payment_status === statusFilter;
    const matchesDate = !dateFilter || booking.created_at.startsWith(dateFilter);
    const matchesSearch = !searchQuery || 
      booking.booking_reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customer_email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `${booking.customer_first_name} ${booking.customer_last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.package_name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesDate && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      completed: "default",
      pending: "secondary",
      failed: "destructive",
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const handleViewDetails = (bookingId: string) => {
    setSelectedBookingId(bookingId);
    setDetailsOpen(true);
  };

  return (
    <div className="space-y-4">
      <BookingDetailsModal
        bookingId={selectedBookingId}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />
      
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl font-semibold">Bookings Management</h2>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-full sm:w-[250px]"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="pl-9 w-full sm:w-[180px]"
            />
          </div>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reference</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Package</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-muted-foreground">
                  No bookings found
                </TableCell>
              </TableRow>
            ) : (
              filteredBookings?.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.booking_reference}</TableCell>
                  <TableCell>
                    {booking.customer_first_name} {booking.customer_last_name}
                  </TableCell>
                  <TableCell>{booking.customer_email}</TableCell>
                  <TableCell>{booking.package_name}</TableCell>
                  <TableCell>${booking.package_price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Select
                      value={booking.payment_status}
                      onValueChange={(status) =>
                        updateStatusMutation.mutate({ 
                          id: booking.id, 
                          status,
                          oldStatus: booking.payment_status 
                        })
                      }
                    >
                      <SelectTrigger className="w-[130px]">
                        <SelectValue>{getStatusBadge(booking.payment_status)}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>{format(new Date(booking.created_at), "MMM dd, yyyy")}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewDetails(booking.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteMutation.mutate(booking.id)}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {filteredBookings && filteredBookings.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Showing {filteredBookings.length} of {bookings?.length} bookings
        </div>
      )}
    </div>
  );
};
