import React from 'react';
import { Monitor, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">TekWeb</span>
            </div>
            
            <p className="text-text-secondary max-w-md leading-relaxed">
              Ihr Partner für innovative Webentwicklung und digitale Transformation. 
              Wir erschaffen digitale Erlebnisse, die begeistern und Ergebnisse liefern.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-card-border rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-card-border rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-card-border rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 text-left"
                >
                  Webentwicklung
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 text-left"
                >
                  Wartung & Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 text-left"
                >
                  Mobile-First Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 text-left"
                >
                  SEO-Optimierung
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@tekweb.de"
                  className="text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  hello@tekweb.de
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+49123456789"
                  className="text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  +49 123 456 789
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary">
                  Berlin, Deutschland
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-card-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © 2024 TekWeb. Alle Rechte vorbehalten.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="/datenschutz"
                className="text-text-secondary hover:text-primary transition-colors duration-200"
              >
                Datenschutz
              </a>
              <a
                href="/impressum"
                className="text-text-secondary hover:text-primary transition-colors duration-200"
              >
                Impressum
              </a>
              <a
                href="/agb"
                className="text-text-secondary hover:text-primary transition-colors duration-200"
              >
                AGB
              </a>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-text-muted">
              Made with ❤️ in Germany
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;