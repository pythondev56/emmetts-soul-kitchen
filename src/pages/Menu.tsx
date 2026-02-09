import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import friedCatfish from "@/assets/fried-catfish.png";
import meatloaf from "@/assets/meatloaf.png";
import bbqRibs from "@/assets/bbq-ribs.png";
import potRoast from "@/assets/pot-roast.png";

const soulFoodMeats = [
  {
    name: "Bagre",
    description: "Filetes de bagre dorados y crujientes sazonados a la perfección.",
    featured: true,
    emoji: "🐟",
    image: friedCatfish
  },
  {
    name: "Pollo Frito",
    description: "Nuestro pollo frito dorado signature, jugoso y sabroso.",
    featured: true,
    emoji: "🍗"
  },
  {
    name: "Pastel de Carne",
    description: "Pastel de carne casero cubierto con salsa sabrosa.",
    featured: true,
    emoji: "🥩",
    image: meatloaf
  },
  {
    name: "Hígados de Pollo",
    description: "Hígados de pollo tiernos perfectamente sazonados y fritos.",
    featured: true,
    emoji: "🥘"
  },
  {
    name: "Mollejas",
    description: "Mollejas fritas crujientes, un verdadero clásico de comida soul.",
    featured: true,
    emoji: "🍲"
  },
  {
    name: "Chuletas de Cerdo Estofadas",
    description: "Chuletas de cerdo tiernas estofadas en rica salsa de cebolla.",
    emoji: "🥩"
  },
  {
    name: "Pollo al Horno con Arroz",
    description: "Pollo sazonado horneado lento servido sobre arroz esponjoso.",
    emoji: "🍚"
  },
  {
    name: "Puntas de Costilla BBQ",
    description: "Puntas de costilla tiernas bañadas en nuestra salsa BBQ signature.",
    emoji: "🍖",
    image: bbqRibs
  },
  {
    name: "Rabos de Buey",
    description: "Rabos de buey tiernos hasta el hueso en una salsa rica y sabrosa.",
    emoji: "🥣",
    image: potRoast
  },
  {
    name: "Chuletas de Cerdo Fritas",
    description: "Chuletas de cerdo perfectamente sazonadas y fritas.",
    emoji: "🥩"
  },
];

const soulFoodSides = [
  "Mac & Cheese 🧀",
  "Hojas de Col 🥬",
  "Camotes Confitados 🍠",
  "Ejotes 🫛",
  "Puré de Papa 🥔",
  "Repollo 🥬",
  "Frijoles de Ojo Negro 🫘",
  "Ensalada de Col 🥗",
  "Elote en Mazorca 🌽",
];

const Menu = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 gingham-pattern opacity-10" />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
              Menú de Comida Soul
            </h1>
            <div className="bg-white/20 backdrop-blur-md inline-block px-8 py-4 rounded-2xl border border-white/30">
              <p className="text-2xl md:text-3xl font-bold">
                Carne más 1, 2 o 3 Acompañamientos
              </p>
              <p className="text-lg opacity-90 mt-1 font-medium italic">
                El menú cambia diaria/semanalmente
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-background relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Meats Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8 border-b-4 border-primary pb-4">
                <span className="text-4xl">🍗</span>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight">
                  Carnes Soul Food y Más
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {soulFoodMeats.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`rounded-2xl p-6 transition-all border-2 ${item.featured
                      ? "bg-highlight/10 border-highlight shadow-md scale-[1.02]"
                      : "bg-white border-gray-100 shadow-sm"
                      }`}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {item.image && (
                        <div className="w-full md:w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden shadow-inner border border-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h3 className="font-heading font-black text-xl text-foreground mb-2 flex items-center gap-2">
                              <span className="text-2xl">{item.emoji}</span>
                              {item.name}
                              {item.featured && (
                                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">
                                  Especialidad
                                </span>
                              )}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sides Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-warm-lg border-2 border-primary/10 sticky top-24">
                <div className="flex items-center gap-3 mb-8 border-b-2 border-primary/20 pb-4">
                  <span className="text-4xl">🥬</span>
                  <h2 className="font-heading text-3xl font-black text-foreground uppercase tracking-tight">
                    Acompañamientos Soul Food
                  </h2>
                </div>

                <ul className="space-y-4">
                  {soulFoodSides.map((side, index) => (
                    <motion.li
                      key={side}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="text-xl font-bold text-gray-800 flex items-center gap-3 hover:text-primary transition-colors cursor-default"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {side}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-sm font-bold text-primary uppercase mb-2">Aviso</p>
                  <p className="text-muted-foreground text-sm italic">
                    Todas las comidas vienen con tu elección de carne y 1, 2 o 3 acompañamientos. Pan de maíz incluido con cada comida.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <Button variant="soul" size="xl" asChild className="px-12 py-8 text-xl rounded-full shadow-2xl hover:scale-105 transition-transform">
              <Link to="/contact">Contactar Ahora Para Ordenar</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
