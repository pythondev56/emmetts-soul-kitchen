import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, Facebook } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const serviceAreas = [
  "Gallatin, TN",
  "Springfield, TN",
  "Hendersonville, TN",
  "Westmoreland, TN",
  "Whitehouse, TN",
  "Bowling Green, KY",
  "Portland, TN",
  "Franklin, KY",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje Enviado!",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-secondary-foreground/80 max-w-xl mx-auto">
              ¿Tienes preguntas? Nos encantaría saber de ti. ¡Escríbenos cuando quieras!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Ponte en Contacto
              </h2>

              <div className="space-y-6">
                <a
                  href="tel:+16152308868"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl hover:shadow-warm transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">(615) 230-8868</p>
                  </div>
                </a>

                <a
                  href="mailto:Info@emmettsoulfood.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl hover:shadow-warm transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Correo Electrónico</p>
                    <p className="text-muted-foreground">Info@emmettsoulfood.com</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/emmettskitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl hover:shadow-warm transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Facebook</p>
                    <p className="text-muted-foreground">@emmettskitchen</p>
                  </div>
                </a>
              </div>

              {/* Service Areas */}
              <div className="mt-10">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Áreas de Servicio
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area) => (
                    <p key={area} className="text-muted-foreground text-sm">
                      • {area}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-warm">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Envíanos un Mensaje
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tu Nombre
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Juan Pérez"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Número de Teléfono
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="¿Cómo podemos ayudarte?"
                      required
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="soul" size="lg" className="w-full">
                    Enviar Mensaje
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-muted relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206618.57408788387!2d-86.60939669999999!3d36.3040529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88645c6781aad4e9%3A0x5f1f1f7ea2e1c0a6!2sGallatin%2C%20TN!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ms. Emmett's Soul Food Service Area"
          aria-label="Map showing service area around Gallatin, Tennessee"
        />
      </section>
    </Layout>
  );
};

export default Contact;
