import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen dark" style={{ background: "#0a0a0a", color: "#f5f5f5" }}>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}