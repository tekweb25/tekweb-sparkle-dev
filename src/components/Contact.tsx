import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Send, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  Loader2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns bald bei Ihnen.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Nachricht erfolgreich gesendet!</h2>
            <p className="text-text-secondary text-lg">
              Vielen Dank für Ihr Interesse. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Kontakt
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Lassen Sie uns{' '}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              sprechen
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Bereit für Ihr nächstes digitales Projekt? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">E-Mail</div>
                    <div className="text-text-secondary">hello@tekweb.de</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <div className="text-text-secondary">+49 123 456 789</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Standort</div>
                    <div className="text-text-secondary">Berlin, Deutschland</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card-professional p-6">
              <h4 className="font-semibold mb-4">Geschäftszeiten</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Montag - Freitag</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Samstag</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Sonntag</span>
                  <span className="text-text-secondary">Geschlossen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-professional p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full"
                    placeholder="Ihr Unternehmen (optional)"
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service">Gewünschter Service *</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="webentwicklung">Webentwicklung</option>
                    <option value="wartung">Wartung & Support</option>
                    <option value="mobile">Mobile-First Design</option>
                    <option value="seo">SEO-Optimierung</option>
                    <option value="komplett">Komplettpaket</option>
                    <option value="beratung">Kostenlose Beratung</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (optional)</Label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="unter-5k">Unter 5.000€</option>
                    <option value="5k-10k">5.000€ - 10.000€</option>
                    <option value="10k-25k">10.000€ - 25.000€</option>
                    <option value="25k-plus">Über 25.000€</option>
                    <option value="noch-offen">Noch nicht festgelegt</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Erzählen Sie uns von Ihrem Projekt. Je mehr Details, desto besser können wir Ihnen helfen."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Nachricht senden
                      </>
                    )}
                  </Button>
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-text-muted">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. 
                  Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;