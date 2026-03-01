import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Daniel Otse",
      text: "Nice and comfortable hotel. Clean rooms and toilets with no mould.",
      rating: 5,
      initials: "DO",
    },
    {
      name: "Collins K.",
      text: "Truly exceptional! The warm welcome and impeccable rooms made for an unforgettable experience.",
      rating: 5,
      initials: "CK",
    },
    {
      name: "Daniel Otse.",
      text: "Nice and comfortable hotel. Clean rooms and toilets with no mould. Very quiet and peaceful environment. I enjoyed my stay..",
      rating: 5,
      initials: "DO",
    },
    {
      name: "Obe Williams",
      text: "I recently stayed at a fantastic hotel in Otukpo, and it was the best experience I've ever had. The service was impeccable, the rooms were clean and comfortable, and the amenities were top-notch. The staff went above and beyond to ensure my stay was enjoyable. I highly recommend this hotel to anyone visiting Otukpo",
      rating: 5,
      initials: "OW"
    }
  ];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00e5ff]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 mb-4">
            <span className="text-[#00e5ff]">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real experiences from real people who've stayed with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.4))",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0, 229, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote size={48} className="text-[#00e5ff]" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#00e5ff" stroke="#00e5ff" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                  style={{
                    background: "linear-gradient(135deg, #00e5ff, #00b8cc)",
                    color: "#0a0a0a",
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">Verified Guest</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 229, 255, 0.05), transparent)",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Overall Rating Card */}
        <div
          className="max-w-md mx-auto mt-12 p-6 rounded-2xl text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(0, 229, 255, 0.05))",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(0, 229, 255, 0.3)",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill={i < 4 ? "#00e5ff" : "transparent"} stroke="#00e5ff" />
            ))}
          </div>
          <p className="text-3xl font-bold text-white mb-1">4.5 / 5.0</p>
          <p className="text-gray-400">Based on 18 reviews</p>
        </div>
      </div>
    </section>
  );
}
