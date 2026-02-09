import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're subscribed!",
        description: "Watch your inbox for exclusive deals and specials.",
      });
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-accent" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Obtén Ofertas Exclusivas
          </h2>
          <p className="text-muted-foreground mb-8">
            Regístrate para recibir especiales semanales y ofertas exclusivas directamente en tu bandeja de entrada.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-background"
              required
            />
            <Button type="submit" variant="soul" size="lg">
              Suscribir
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
