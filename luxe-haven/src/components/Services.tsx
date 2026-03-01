import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BedDouble, Trees, Sparkles } from "lucide-react";

export function Services() {
  const features = [
    {
      icon: BedDouble,
      title: "Select Your Suite",
      description: "Luxury rooms with modern and clean toilets.",
      image:
        "https://images.unsplash.com/photo-1758448755969-8791367cf5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJlZHJvb20lMjBzdWl0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMjM0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Trees,
      title: "Enjoy Peace & Quiet",
      description: "A tranquil environment perfect for rest.",
      image:
        "https://images.unsplash.com/photo-1625582421421-0d27eafe68fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBwb29sJTIwbmlnaHQlMjBsdXh1cnl8ZW58MXx8fHwxNzcyMjM0NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Sparkles,
      title: "Premium Amenities",
      description: "Top-notch service that goes above and beyond.",
      image:
        "https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMGRlc2slMjBtb2Rlcm58ZW58MXx8fHwxNzcyMjM0NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="rooms" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 mb-4">
            <span className="text-[#00e5ff]">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Perfect Stay Awaits
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience luxury, comfort, and tranquility all in one place
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.3))",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0, 229, 255, 0.1)",
              }}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon with Glow */}
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                  style={{
                    background: "linear-gradient(135deg, #00e5ff, #00b8cc)",
                    boxShadow: "0 0 30px rgba(0, 229, 255, 0.4)",
                  }}
                >
                  <feature.icon size={28} className="text-[#0a0a0a]" />
                </div>

                {/* Step Number */}
                <div className="text-[#00e5ff]/40 font-bold text-sm mb-2">
                  STEP {index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>

              {/* Hover Effect Border */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, transparent, rgba(0, 229, 255, 0.1))",
                  border: "1px solid rgba(0, 229, 255, 0.3)",
                  borderRadius: "inherit",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
