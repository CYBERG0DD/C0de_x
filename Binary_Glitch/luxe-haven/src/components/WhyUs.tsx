import { Clock, Shield, DollarSign, Users, Award, Headphones } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "Average response time of just 10-15 minutes. We get to you quickly when every minute counts.",
    highlight: "~20 min avg.",
  },
  {
    icon: Shield,
    title: "Safe & Verified",
    description:
      "Every Hotel Staff is licensed, insured, and background-checked — so you can trust who shows up to help.",
    highlight: "100% vetted",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise charges. You see the exact cost before any service begins.",
    highlight: "No surprises",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description:
      "Over 100,000+ distinguished guests choose Luxe Haven as their preferred sanctuary for unparalleled comfort and service.",
    highlight: "100K+ users",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "100% satisfaction guarantee on all services. If you're not happy, we'll make it right — every time.",
    highlight: "Guaranteed",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support, 365 days a year. Real humans, always ready to help you.",
    highlight: "Always on",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />

      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00e5ff]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 text-[#00e5ff] mb-4" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>
            WHY CHOOSE US
          </span>
          <h2 className="text-white font-bold mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            What makes us{" "}
            <span className="text-[#00e5ff]" style={{ textShadow: "0 0 30px rgba(0,229,255,0.3)" }}>
              Different
            </span>{" "}

          </h2>
          <p className="text-[#a1a1a1] max-w-2xl mx-auto" style={{ fontSize: "1rem" }}>
            Experience a new standard of luxury at Luxe Haven where impeccable service meets tranquil comfort. Here's what makes thousands of guests choose us, again and again.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-6 rounded-2xl border border-[#1e1e1e] bg-[#0f0f0f] hover:border-[#00e5ff]/30 transition-all duration-400 overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background: "radial-gradient(circle at 0% 0%, rgba(0,229,255,0.07) 0%, transparent 60%)" }} />

                {/* Top row: icon + highlight badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-13 h-13 w-12 h-12 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center group-hover:bg-[#00e5ff]/20 group-hover:shadow-md group-hover:shadow-[#00e5ff]/20 transition-all duration-300">
                    <Icon className="h-6 w-6 text-[#00e5ff]" strokeWidth={1.8} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20" style={{ fontSize: "0.7rem", fontWeight: 600 }}>
                    {feature.highlight}
                  </span>
                </div>

                <h3 className="text-white font-bold mb-2" style={{ fontSize: "1.05rem" }}>
                  {feature.title}
                </h3>
                <p className="text-[#777] leading-relaxed group-hover:text-[#999] transition-colors duration-300" style={{ fontSize: "0.875rem" }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />
    </section>
  );
}
