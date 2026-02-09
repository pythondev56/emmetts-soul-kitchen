import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import logo from "@/assets/logo.png";

const About = () => {
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
              Sobre Nosotros
            </h1>
            <p className="text-secondary-foreground/80 max-w-xl mx-auto">
              Conoce nuestra historia, nuestra misión y lo que hace especial a nuestra comida soul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={logo}
                alt="Ms. Emmett's Soul Food"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold mb-2">Nuestra Historia</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Un Legado de Amor y Sabor
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ms. Emmett's Soul Food se construyó sobre recetas familiares, profundas raíces sureñas
                  y una pasión por alimentar bien a la gente. Cada comida se cocina fresca,
                  sazonada con amor y servida con orgullo.
                </p>
                <p>
                  Nuestra cocina continúa la tradición de la auténtica cocina soul
                  que ha pasado de generación en generación. Desde el pollo frito crujiente
                  hasta el cremoso mac & cheese, cada plato cuenta una historia de herencia y hogar.
                </p>
                <p>
                  Creemos que la comida es más que solo sustento—es una forma de unir
                  a la gente, crear recuerdos y compartir amor. Por eso ponemos
                  nuestro corazón en cada plato que servimos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Miss Emmett's Story */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                El secreto del sazonado soul food de Miss Emmett es simple — ella cocina para ti como si fueras familia.
              </p>
              <p>
                Miss Emmett está en la cocina todos los días, cocinando personalmente, tal como su padre le enseñó cuando crecía.
                Esta comida se prepara con cuidado, tradición y orgullo — de la misma manera que siempre se ha hecho.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding gingham-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-primary font-bold text-xl mb-2 uppercase tracking-widest">Nuestra Misión</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comida que Se Siente como en Casa
            </h2>
            <p className="text-lg text-muted-foreground">
              Entregar comida soul auténtica que se sienta como en casa — cada plato, cada vez.
              Estamos comprometidos a preservar los sabores y tradiciones que hacen que la cocina
              sureña sea tan especial, mientras servimos a nuestra comunidad con calidez y hospitalidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-bold text-xl mb-2 uppercase tracking-widest">La Diferencia</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              ¿Por qué elegir Ms. Emmett's?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Casero Diario",
                description: "Cada plato se prepara fresco cada día usando recetas consagradas.",
              },
              {
                title: "Ingredientes de Calidad",
                description: "Usamos solo los mejores ingredientes para crear sabores auténticos.",
              },
              {
                title: "Recetas Sureñas Reales",
                description: "Transmitidas a través de generaciones, nuestras recetas son auténticas.",
              },
              {
                title: "Sin Atajos",
                description: "Nos tomamos nuestro tiempo para hacerlo bien—porque te mereces lo mejor.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-md border-b-4 border-primary hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <span className="text-3xl group-hover:scale-110 transition-transform">🍽️</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
