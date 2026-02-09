import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Marcus J.",
    location: "Gallatin, TN",
    text: "La mejor comida soul de la zona. Sin duda. ¡El pollo frito me recuerda a la cocina de mi abuela! Cada bocado es puro confort.",
    rating: 5,
    date: "hace 2 semanas",
  },
  {
    name: "Patricia W.",
    location: "Hendersonville, TN",
    text: "Las chuletas de cerdo cubiertas son absolutamente increíbles. Comida reconfortante real con sabor real. He estado volviendo cada semana desde que descubrí este lugar.",
    rating: 5,
    date: "hace 1 mes",
  },
  {
    name: "David L.",
    location: "Bowling Green, KY",
    text: "Vale la pena cada milla del viaje. Auténtica comida soul que sabe como si estuviera hecha con amor. Los macarrones con queso son los mejores que he probado.",
    rating: 5,
    date: "hace 3 semanas",
  },
  {
    name: "Lisa M.",
    location: "Springfield, TN",
    text: "¡Finalmente encontré comida soul que sabe a hogar! El pollo y los waffles son para morirse. Definitivamente ordenaré de nuevo.",
    rating: 5,
    date: "hace 1 semana",
  },
  {
    name: "James R.",
    location: "Westmoreland, TN",
    text: "El pastel de durazno por sí solo vale el viaje. Pero todo lo demás es igual de asombroso. Ms. Emmett's se ha convertido en el lugar de referencia de nuestra familia para las cenas de los domingos.",
    rating: 5,
    date: "hace 2 meses",
  },
  {
    name: "Angela T.",
    location: "Portland, TN",
    text: "Pedí los rabos de buey y se deshacían del hueso. El servicio fue amable y la comida llegó caliente y fresca. ¡10/10!",
    rating: 5,
    date: "hace 3 semanas",
  },
];

const Reviews = () => {
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
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-highlight text-highlight" />
              ))}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Reseñas de Clientes
            </h1>
            <p className="text-secondary-foreground/80 max-w-xl mx-auto">
              Mira lo que nuestros clientes tienen que decir sobre Ms. Emmett's Soul Food.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm relative"
              >
                <Quote className="w-10 h-10 text-accent/20 absolute top-4 right-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                  ))}
                </div>

                <p className="text-foreground mb-4">
                  "{review.text}"
                </p>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-muted-foreground text-sm">{review.location}</p>
                  </div>
                  <p className="text-muted-foreground text-xs">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Listo para Probarlo Tú Mismo?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Únete a miles de clientes satisfechos y experimenta la auténtica comida soul hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="soul" size="lg" asChild>
                <a href="/contact">Contactar Ahora</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.facebook.com/emmettskitchen" target="_blank" rel="noopener noreferrer">
                  Dejar una Reseña
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
