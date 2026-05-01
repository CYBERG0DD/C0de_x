import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e5ff]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 mb-4">
            <span className="text-[#00e5ff]">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with us.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.4))",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(0, 229, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-[#00e5ff] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-400">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white focus:border-[#00e5ff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white focus:border-[#00e5ff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white focus:border-[#00e5ff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/50 transition-all"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white focus:border-[#00e5ff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/50 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #00e5ff, #00b8cc)",
                    boxShadow: "0 0 30px rgba(0, 229, 255, 0.4)",
                  }}
                >
                  <Send size={20} className="text-[#0a0a0a] group-hover:translate-x-1 transition-transform" />
                  <span className="font-bold text-[#0a0a0a]">Send Message</span>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
