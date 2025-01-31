import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 animate-fadeIn">
            Professioneller Brandschutz für Ihre Sicherheit
          </h1>
          <p className="text-lg lg:text-xl text-secondary/80 mb-8 animate-fadeIn">
            Seit über 25 Jahren Ihr verlässlicher Partner für Brandschutz- und
            Fluchtwegslösungen. Wir garantieren höchste Qualität und Sicherheit
            für Ihr Gebäude.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors animate-fadeIn"
          >
            Kontaktieren Sie uns
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;