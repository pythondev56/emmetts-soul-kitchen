import { motion } from "framer-motion";
import { Play, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const videos = [
  {
    title: "Secretos del Pollo Frito",
    description: "Mira cómo hacemos nuestro famoso pollo frito crujiente",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Femmettskitchen%2Fvideos%2F3968543713262991%2F&show_text=false&width=476&t=0",
  },
  {
    title: "Preparación de Cena de Domingo",
    description: "Detrás de escena de nuestro día más ocupado",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Femmettskitchen%2Fvideos%2F312513533918221%2F&show_text=false&width=267&t=0",
  },
  {
    title: "Reacciones de Clientes",
    description: "Clientes probando nuestra comida soul por primera vez",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Femmettskitchen%2Fvideos%2F1470047546669266%2F&show_text=false&width=269&t=0",
  },
  {
    title: "Magia en la Cocina",
    description: "El arte de cocinar comida soul",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Femmettskitchen%2Fvideos%2F301823501379162%2F&show_text=false&width=476&t=0",
  },
];

const FacebookVideos = () => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);

  useEffect(() => {
    // Load Facebook SDK for video event handling
    if (!window.FB) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleVideoPlay = (index: number) => {
    setPlayingVideoIndex(index);

    // Pause all other videos by reloading their iframes
    const iframes = document.querySelectorAll(".fb-video-embed");
    iframes.forEach((iframe, i) => {
      if (i !== index && iframe instanceof HTMLIFrameElement) {
        const src = iframe.src;
        iframe.src = src; // Reloading the src pauses the video
      }
    });
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Play className="w-5 h-5 text-accent" />
            <p className="text-accent font-semibold">Mira y Saborea</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Comida Real. Sabor Real. Gente Real.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Desde sartenes chisporroteantes hasta platos felices — así es como hacemos comida soul en Ms. Emmett's.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background rounded-xl overflow-hidden shadow-warm"
            >
              {/* Facebook Reel Embed */}
              <div className="relative bg-secondary cursor-pointer" onClick={() => handleVideoPlay(index)}>
                <iframe
                  src={video.embedUrl}
                  className="fb-video-embed w-full"
                  height="476"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                  title={video.title}
                  aria-label={`Video: ${video.title}`}
                />
              </div>

              <div className="p-4">
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {video.description}
                </p>
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
          <p className="text-muted-foreground mb-4">¿Ya tienes hambre? Ordena tus favoritos ahora.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.facebook.com/emmettskitchen/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Facebook className="w-5 h-5" />
                Ver Más en Facebook
              </a>
            </Button>
            <Button variant="soul" size="lg" asChild>
              <a href="/contact">Contactar Ahora</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacebookVideos;
