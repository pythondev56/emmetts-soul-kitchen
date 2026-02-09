import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import friedCatfish from "@/assets/fried-catfish.png";
import bbqRibs from "@/assets/bbq-ribs.png";
import potRoast from "@/assets/pot-roast.png";
import meatloaf from "@/assets/meatloaf.png";
import macCheese from "@/assets/mac-cheese.jpg";

const dishes = [
  {
    name: "Bagre Frito Dorado",
    description: "Filetes crujientes y sazonados con un toque soul",
    image: friedCatfish,
  },
  {
    name: "Pastel de Carne Sabroso",
    description: "Pan casero con un glaseado rico y picante",
    image: meatloaf,
  },
  {
    name: "Costillas BBQ Signature",
    description: "Tiernas hasta el hueso y perfectamente glaseadas",
    image: bbqRibs,
  },
  {
    name: "Pot Roast Cocido Lento",
    description: "Carne tierna con salsa rica y vegetales abundantes",
    image: potRoast,
  },
  {
    name: "Mac & Cheese Cremoso",
    description: "Confort sureño rico y quesoso en cada bocado",
    image: macCheese,
  },
];

const FeaturedDishes = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold mb-2">Nuestros Favoritos</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Platos Destacados
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-warm card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {dish.description}
                  </p>
                </div>
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
          <Button variant="soul" size="lg" asChild>
            <Link to="/menu">Ver Menú Completo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
