
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 font-poppins",
        isScrolled ? "bg-white bg-opacity-95 shadow-md py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-primary"
        >
          GOMG
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-800 hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-yellow-dark transition-colors">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block py-2 text-primary font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
