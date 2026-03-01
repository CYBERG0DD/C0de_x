import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#00e5ff]/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-[#00e5ff]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span style={{ color: "#00e5ff" }}>LUXE</span>{" "}
              <span className="text-white">HAVEN</span>
            </div>
            <p className="text-gray-400 mb-4">
              Experience the best hidden gem in Otukpo. Your home away from home.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#00e5ff]/20 flex items-center justify-center hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all"
              >
                <Facebook size={18} className="text-[#00e5ff]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#00e5ff]/20 flex items-center justify-center hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all"
              >
                <Instagram size={18} className="text-[#00e5ff]" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=Yzf6vGicKqI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#00e5ff]/20 flex items-center justify-center hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all"
              >
                <Youtube size={18} className="text-[#00e5ff]" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Navigate</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-400 hover:text-[#00e5ff] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("rooms")}
                  className="text-gray-400 hover:text-[#00e5ff] transition-colors"
                >
                  Rooms
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-gray-400 hover:text-[#00e5ff] transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-[#00e5ff] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#00e5ff] flex-shrink-0 mt-1" />
                <a
                  href="tel:09166188000"
                  className="text-gray-400 hover:text-[#00e5ff] transition-colors"
                >
                  0916 618 8000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#00e5ff] flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@luxehaven.com"
                  className="text-gray-400 hover:text-[#00e5ff] transition-colors"
                >
                  info@luxehaven.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#00e5ff] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  46 Old Otobi Rd, Otukpo, Benue
                </span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-white font-bold mb-4">Operating Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>24 Hours of operation</li>
              <li className="pt-2">
                <span className="text-[#00e5ff]">24/7 Reception</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00e5ff]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Luxe Haven Suite and Resorts. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#00e5ff] transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00e5ff] transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
