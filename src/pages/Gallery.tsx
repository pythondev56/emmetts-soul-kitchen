import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import friedChicken from "@/assets/fried-chicken.jpg";
import porkChops from "@/assets/pork-chops.jpg";
import catfishGrits from "@/assets/catfish-grits.jpg";
import macCheese from "@/assets/mac-cheese.jpg";
import peachCobbler from "@/assets/peach-cobbler.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  { src: heroBg, alt: "Plato de comida soul", category: "comida" },
  { src: friedChicken, alt: "Pollo frito", category: "comida" },
  { src: porkChops, alt: "Chuletas de cerdo cubiertas", category: "comida" },
  { src: catfishGrits, alt: "Bagre y sémola (grits)", category: "comida" },
  { src: macCheese, alt: "Macarrones con queso", category: "comida" },
  { src: peachCobbler, alt: "Pastel de durazno", category: "comida" },
];

const categories = ["todas", "comida", "cocina", "clientes"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("todas");

  const filteredImages = activeCategory === "todas"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

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
              Galería
            </h1>
            <p className="text-secondary-foreground/80 max-w-xl mx-auto">
              Echa un vistazo a nuestros deliciosos platos y momentos detrás de escena desde la cocina.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upload CTA */}
      <section className="bg-accent/10 py-4">
        <div className="container-custom text-center">
          <p className="text-muted-foreground text-sm">
            📸 ¿Tienes fotos de tu visita? Etiquétanos en{" "}
            <a
              href="https://www.facebook.com/emmettskitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Facebook
            </a>
            !
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-card py-6 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No hay imágenes en esta categoría todavía. ¡Vuelve pronto!
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
