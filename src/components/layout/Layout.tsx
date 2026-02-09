import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyOrderCTA from "../StickyOrderCTA";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-32 2xl:pt-20">
        {children}
      </main>
      <Footer />
      <StickyOrderCTA />
    </div>
  );
};

export default Layout;
