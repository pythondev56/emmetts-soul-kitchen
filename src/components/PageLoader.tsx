import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

const PageLoader = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show loader immediately when navigation starts
    if (navigation.state === "loading") {
      setIsVisible(true);
    } else {
      // Hide loader with a small delay to avoid flickering
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 pointer-events-none">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"></div>
        </div>
        {/* Loading text */}
        <p className="text-sm font-medium text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
