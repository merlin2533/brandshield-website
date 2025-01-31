const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="/lovable-uploads/51f6a88b-0936-4380-a9af-5b9bd7144996.png"
              alt="Arnold Brandschutz Logo"
              className="h-12 mb-4"
            />
            <p className="text-white/80">
              Ihr zuverlässiger Partner für Brandschutz- und Fluchtwegslösungen
              seit über 25 Jahren.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  AGB
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <address className="not-italic text-white/80">
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p>Tel: +49 123 456 7890</p>
              <p>Email: info@arnold-brandschutz.de</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2024 Arnold Brandschutz. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;