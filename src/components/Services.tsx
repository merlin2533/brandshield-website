import {
  DoorClosed,
  Shield,
  Building,
  Briefcase,
  Wall,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Türtechnik-Planung",
      icon: DoorClosed,
      description:
        "Professionelle Planung und Beratung für Türanlagen unter Berücksichtigung aller brandschutztechnischen Anforderungen.",
    },
    {
      title: "Brandschutzplanung",
      icon: Building,
      description:
        "Umfassende Brandschutzkonzepte und -planung für Neu- und Bestandsbauten gemäß aktueller Vorschriften.",
    },
    {
      title: "Qualitätssicherung",
      icon: Shield,
      description:
        "Kontinuierliche Überwachung und Dokumentation aller brandschutztechnischen Maßnahmen zur Sicherstellung höchster Standards.",
    },
    {
      title: "Projektmanagement",
      icon: Briefcase,
      description:
        "Professionelle Koordination und Betreuung Ihrer Brandschutzprojekte von der Planung bis zur Umsetzung.",
    },
    {
      title: "Brandschutzlösungen",
      icon: Wall,
      description:
        "Innovative und maßgeschneiderte Lösungen für alle Anforderungen des baulichen Brandschutzes.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-12">
          Unsere Dienstleistungen
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-secondary/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;