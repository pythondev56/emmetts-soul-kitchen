import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyOrderCTA = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
      <Button variant="soul" size="lg" asChild className="w-full shadow-2xl">
        <Link to="/contact" className="flex items-center justify-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          Contact Now
        </Link>
      </Button>
    </div>
  );
};

export default StickyOrderCTA;
