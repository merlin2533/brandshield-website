import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/51f6a88b-0936-4380-a9af-5b9bd7144996.png"
              alt="Arnold Brandschutz Logo"
              className="h-12"
            />
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center gap-6 text-secondary">
            <a
              href="tel:+491234567890"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={20} />
              <span>+49 123 456 7890</span>
            </a>
            <a
              href="mailto:info@arnold-brandschutz.de"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span>info@arnold-brandschutz.de</span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {["services", "team", "expertise", "references", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-secondary hover:text-primary capitalize transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-secondary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {["services", "team", "expertise", "references", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-secondary hover:text-primary capitalize transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </nav>
            <div className="flex flex-col gap-4 mt-4 text-secondary">
              <a
                href="tel:+491234567890"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={20} />
                <span>+49 123 456 7890</span>
              </a>
              <a
                href="mailto:info@arnold-brandschutz.de"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>info@arnold-brandschutz.de</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;