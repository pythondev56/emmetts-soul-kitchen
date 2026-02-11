import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag, CreditCard, Clock, Truck } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    title: "Elige Tus Favoritos",
    description: "Navega por nuestro menú y selecciona tus platos de comida soul favoritos.",
  },
  {
    icon: CreditCard,
    title: "Personaliza y Paga",
    description: "Agrega instrucciones especiales y completa tu pago de forma segura.",
  },
  {
    icon: Clock,
    title: "Cocinamos Fresco",
    description: "Tu pedido se prepara fresco con amor y cuidado.",
  },
  {
    icon: Truck,
    title: "Recogida o Entrega",
    description: "Recoge tu pedido o haz que te lo entreguen en tu puerta.",
  },
];

const Order = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Pide en Línea
            </h1>
            <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8">
              Auténtica comida soul fresca entregada directamente a tu puerta o lista para recoger.
            </p>
            <Button variant="gold" size="xl" asChild>
              <a href="#order-form">Empieza Tu Pedido Ahora</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cómo Funciona
            </h2>
            <p className="text-muted-foreground">
              ¡Pedir es tan fácil como 1-2-3-4!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Placeholder */}
      <section id="order-form" className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-background rounded-2xl p-8 shadow-warm">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Entrega: Disponible Pronto
              </h2>
              <p className="text-muted-foreground mb-8">
                Nos estamos preparando para llevar la auténtica comida soul de Ms. Emmett directamente a tu puerta. ¡Mantente al tanto de las actualizaciones!
              </p>

              <p className="text-sm text-muted-foreground">
                ¿Tienes preguntas? Revisa nuestro{" "}
                <Link to="/menu" className="text-primary hover:underline">
                  menú completo
                </Link>{" "}
                o{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contáctanos
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
