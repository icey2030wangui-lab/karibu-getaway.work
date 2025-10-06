import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <AlertCircle className="w-24 h-24 text-primary mx-auto mb-6" />
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <Home className="w-5 h-5" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
