import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet",
      description: "Wir werden uns in Kürze bei Ihnen melden.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-12">
          Kontaktieren Sie uns
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-secondary">
                Kontaktinformationen
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+491234567890"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                  <span>+49 123 456 7890</span>
                </a>
                <a
                  href="mailto:info@arnold-brandschutz.de"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                  <span>info@arnold-brandschutz.de</span>
                </a>
                <div className="flex items-center gap-3 text-secondary">
                  <MapPin size={20} />
                  <span>Musterstraße 123, 12345 Musterstadt</span>
                </div>
              </div>
            </div>
            <div className="h-64 bg-muted rounded-lg">
              {/* Map placeholder - implement actual map integration later */}
              <div className="w-full h-full flex items-center justify-center text-secondary/60">
                Kartenintegration folgt
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;