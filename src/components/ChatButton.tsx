import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn] = useState(false); // This would come from auth state

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-card rounded-2xl shadow-float overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-br from-primary to-accent p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-primary-foreground font-semibold">Chat with Us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {!isLoggedIn ? (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Login Required</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Please login to start chatting with our education consultants.
                </p>
                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">
                    Login to Chat
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center text-muted-foreground text-sm">
                  Start a conversation with our team!
                </div>
                <textarea
                  placeholder="Type your message..."
                  className="w-full h-24 p-3 border-none bg-muted/50 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button className="w-full">
                  Send Message
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent shadow-button flex items-center justify-center text-primary-foreground hover:scale-105 transition-transform duration-200"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default ChatButton;
