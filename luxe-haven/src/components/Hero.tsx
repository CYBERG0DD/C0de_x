import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Phone, Camera } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768346564825-6f90c0b89e2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJufGVufDF8fHx8MTc3MjE3Njk2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxe Haven Lobby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/70 to-[#0a0a0a]"></div>
        {/* Cyan Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/10 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a]/60 backdrop-blur-md border border-[#00e5ff]/20 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < 4 ? "#00e5ff" : "transparent"}
                  stroke="#00e5ff"
                />
              ))}
            </div>
            <span className="text-white">4.5 Stars</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">18 Reviews</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Experience the Best
            <br />
            Hidden Gem in{" "}
            <span
              className="relative inline-block"
              style={{ color: "#00e5ff", textShadow: "0 0 30px rgba(0, 229, 255, 0.5)" }}
            >
              Otukpo
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Enjoy impeccably clean rooms, a peaceful environment, and world-class
            service at Luxe Haven Suite and Resorts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a
              href="tel:09166188000"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #00e5ff, #00b8cc)",
                boxShadow:
                  "0 0 30px rgba(0, 229, 255, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #00b8cc, #008ca0)",
                }}
              ></div>
              <Phone size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10 font-bold text-lg text-[#0a0a0a]">
                Call Now
              </span>
            </a>

            {/* Secondary CTA */}
            <button
              onClick={() => {
                const element = document.getElementById("rooms");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-[#00e5ff] bg-transparent text-white hover:bg-[#00e5ff]/10 transition-all duration-300"
            >
              <Camera size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">View Photos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#00e5ff]/50 rounded-full flex items-start justify-center p-2">
          <div
            className="w-1.5 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#00e5ff" }}
          ></div>
        </div>
      </div>
    </section>
  );
}