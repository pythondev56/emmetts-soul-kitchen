import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Marcus J.",
    location: "Gallatin, TN",
    text: "La mejor comida soul de la zona. Sin duda. ¡El pollo frito me recuerda a la cocina de mi abuela!",
    rating: 5,
  },
  {
    name: "Patricia W.",
    location: "Hendersonville, TN",
    text: "Las chuletas de cerdo cubiertas son absolutamente increíbles. Comida reconfortante real con sabor real.",
    rating: 5,
  },
  {
    name: "David L.",
    location: "Bowling Green, KY",
    text: "Vale la pena cada milla del viaje. Auténtica comida soul que sabe como si estuviera hecha con amor.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold mb-2">Lo Que Dice La Gente</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Amor de Los Clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-secondary-foreground/5 rounded-xl p-6 relative"
            >
              <Quote className="w-10 h-10 text-accent/30 absolute top-4 right-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                ))}
              </div>

              <p className="text-secondary-foreground/90 mb-4 italic">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-bold text-secondary-foreground">{testimonial.name}</p>
                <p className="text-secondary-foreground/60 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button variant="warm" size="lg" asChild>
            <Link to="/reviews">Leer Más Reseñas</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
