
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f7fcff]">
      <Navbar />
      <main className="flex-grow animate-fade-in">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
