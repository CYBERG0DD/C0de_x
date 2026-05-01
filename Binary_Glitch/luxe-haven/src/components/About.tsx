import { MapPin, Phone, Navigation } from "lucide-react";

export function About() {
  return (
    <section className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 mb-6">
              <span className="text-[#00e5ff]">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Home Away From Home in Otukpo
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Luxe Haven Suite and Resorts is more than just a place to stay—it's an
              experience. Located in the heart of Otukpo, Benue, we pride ourselves on
              delivering exceptional hospitality with a personal touch.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our commitment to cleanliness, comfort, and customer satisfaction has made
              us the top-rated hidden gem in the region. Whether you're traveling for
              business or leisure, we ensure every moment of your stay is memorable.
            </p>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #00e5ff, #00b8cc)",
                  }}
                >
                  <MapPin size={24} className="text-[#0a0a0a]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Prime Location</h3>
                  <p className="text-gray-400">
                    Conveniently located at 46 Old Otobi Rd, Otukpo, Benue
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #00e5ff, #00b8cc)",
                  }}
                >
                  <Phone size={24} className="text-[#0a0a0a]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">24/7 Service</h3>
                  <p className="text-gray-400">
                    Always available to serve you: 0916 618 8000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Location Card */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.4))",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(0, 229, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Visit Us</h3>

            {/* Address */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={24} className="text-[#00e5ff] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white mb-1">Address</p>
                  <p className="text-gray-400">
                    46 Old Otobi Rd
                    <br />
                    Otukpo, Benue
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={24} className="text-[#00e5ff] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white mb-1">Contact</p>
                  <a
                    href="tel:09166188000"
                    className="text-[#00e5ff] hover:underline"
                  >
                    0916 618 8000
                  </a>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.google.com/?q=46+Old+Otobi+Rd,+Otukpo,+Benue"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #00e5ff, #00b8cc)",
                boxShadow: "0 0 30px rgba(0, 229, 255, 0.4)",
              }}
            >
              <Navigation size={20} className="text-[#0a0a0a] group-hover:rotate-45 transition-transform" />
              <span className="font-bold text-[#0a0a0a]">Get Directions</span>
            </a>

            {/* Map Placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden border border-[#00e5ff]/20">
              <div
                className="w-full h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center"
              >
                <MapPin size={48} className="text-[#00e5ff]/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
