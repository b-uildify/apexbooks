import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-foreground">
          APEX BOOKS
        </Link>
        
        <Link to="/admin">
          <Button variant="ghost" size="sm" className="gap-2">
            <Shield className="h-4 w-4" />
            Admin
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
