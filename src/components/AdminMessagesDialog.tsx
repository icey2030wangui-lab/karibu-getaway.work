import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle, Send, LogOut, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

interface Conversation {
  id: string;
  client_name: string;
  client_email: string;
  updated_at: string;
  is_read: boolean;
}

interface Message {
  id: string;
  sender_type: string;
  sender_name: string;
  content: string;
  created_at: string;
}

export const AdminMessagesDialog = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [replyText, setReplyText] = useState("");
  const [loading, setLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    fetchConversations();
    
    // Set up realtime subscription for conversations
    const conversationsChannel = supabase
      .channel('conversations-changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'conversations'
      }, () => {
        fetchConversations();
      })
      .subscribe();

    // Set up realtime subscription for messages
    const messagesChannel = supabase
      .channel('messages-changes')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages'
      }, (payload) => {
        if (selectedConversation && payload.new.conversation_id === selectedConversation.id) {
          setMessages(prev => [...prev, payload.new as Message]);
        }
        fetchConversations();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(conversationsChannel);
      supabase.removeChannel(messagesChannel);
    };
  }, [selectedConversation]);

  const fetchConversations = async () => {
    const { data, error } = await supabase
      .from("conversations")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) {
      console.error("Error fetching conversations:", error);
    } else {
      setConversations(data || []);
      setUnreadCount(data?.filter(c => !c.is_read).length || 0);
    }
  };

  const fetchMessages = async (conversationId: string) => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching messages:", error);
    } else {
      setMessages(data || []);
    }
  };

  const handleConversationClick = async (conversation: Conversation) => {
    setSelectedConversation(conversation);
    await fetchMessages(conversation.id);
    
    // Mark as read
    if (!conversation.is_read) {
      await supabase
        .from("conversations")
        .update({ is_read: true })
        .eq("id", conversation.id);
      
      fetchConversations();
    }
  };

  const handleSendReply = async () => {
    if (!replyText.trim() || !selectedConversation) return;

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from("messages")
        .insert({
          conversation_id: selectedConversation.id,
          sender_type: "admin",
          sender_name: user?.email || "Admin",
          content: replyText.trim(),
        });

      if (error) throw error;

      setReplyText("");
      toast({
        title: "Reply sent!",
        description: "Your message has been sent to the client.",
      });
    } catch (error) {
      console.error("Error sending reply:", error);
      toast({
        title: "Error",
        description: "Failed to send reply. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 bg-primary hover:bg-primary/90 relative"
        >
          <MessageCircle className="h-6 w-6" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-destructive text-destructive-foreground">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              {selectedConversation && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedConversation(null)}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              {selectedConversation ? "Conversation" : "Admin Messages"}
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {!selectedConversation ? (
          <ScrollArea className="h-[500px] pr-4">
            <div className="space-y-2">
              {conversations.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No messages yet
                </p>
              ) : (
                conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => handleConversationClick(conv)}
                    className={`p-4 rounded-lg border cursor-pointer hover:bg-accent transition-colors ${
                      !conv.is_read ? "bg-primary/5 border-primary/20" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold flex items-center gap-2">
                        {conv.client_name}
                        {!conv.is_read && (
                          <Badge variant="destructive" className="text-xs">New</Badge>
                        )}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(conv.updated_at), "MMM d, HH:mm")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{conv.client_email}</p>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex flex-col h-[500px]">
            <div className="mb-4 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold">{selectedConversation.client_name}</h3>
              <p className="text-sm text-muted-foreground">{selectedConversation.client_email}</p>
            </div>

            <ScrollArea className="flex-1 pr-4 mb-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender_type === "admin" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.sender_type === "admin"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm font-medium mb-1">{msg.sender_name}</p>
                      <p className="text-sm">{msg.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {format(new Date(msg.created_at), "MMM d, HH:mm")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex gap-2">
              <Input
                placeholder="Type your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendReply()}
                disabled={loading}
              />
              <Button onClick={handleSendReply} disabled={loading || !replyText.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};