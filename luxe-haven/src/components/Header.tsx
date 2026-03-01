import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-[#00e5ff]/10"
        : "backdrop-blur-md bg-[#0a0a0a]/60"
        }`}
      style={{
        backdropFilter: "blur(16px)",
      }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-bold tracking-wider cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <span style={{ color: "#00e5ff" }}>LUXE-HAVEN</span>{" "}
            <span className="text-white">HOTELS & SUITES</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-[#00e5ff] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("rooms")}
              className="text-white hover:text-[#00e5ff] transition-colors duration-300"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-white hover:text-[#00e5ff] transition-colors duration-300"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#00e5ff] transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#00e5ff] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-[#00e5ff]/10 pt-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-white hover:text-[#00e5ff] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("rooms")}
              className="block w-full text-left text-white hover:text-[#00e5ff] transition-colors duration-300"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left text-white hover:text-[#00e5ff] transition-colors duration-300"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-white hover:text-[#00e5ff] transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
